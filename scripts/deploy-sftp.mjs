import { Client } from "ssh2";
import fs from "node:fs";
import path from "node:path";

const rawHost = process.env.FTP_SERVER || "";
const host = rawHost
  .replace(/^[a-z]+:\/\//i, "")
  .replace(/\/.*$/, "")
  .split(":")[0];
const port = Number(process.env.FTP_PORT || 22);
const username = process.env.FTP_USERNAME;
const password = process.env.FTP_PASSWORD;
const localDir = process.env.DEPLOY_LOCAL_DIR || "./out";
let remoteDir = process.env.DEPLOY_REMOTE_DIR || "";

if (!host || !username || !password) {
  console.error("Missing FTP_SERVER / FTP_USERNAME / FTP_PASSWORD");
  process.exit(1);
}

function walk(dir, base = "") {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...walk(path.join(dir, entry.name), rel));
    else files.push({ local: path.join(dir, entry.name), remote: rel });
  }
  return files;
}

function mkdirp(sftp, dir) {
  return new Promise((resolve) => {
    if (!dir || dir === "." || dir === "/") return resolve();
    sftp.mkdir(dir, () => {
      const parent = path.posix.dirname(dir);
      if (parent && parent !== dir && parent !== "." && parent !== "/") {
        mkdirp(sftp, parent).then(() => sftp.mkdir(dir, () => resolve()));
      } else {
        resolve();
      }
    });
  });
}

function fastPut(sftp, local, remote) {
  return new Promise((resolve, reject) => {
    sftp.fastPut(local, remote, (err) => (err ? reject(err) : resolve()));
  });
}

function unlink(sftp, remote) {
  return new Promise((resolve) => sftp.unlink(remote, () => resolve()));
}

function readdir(sftp, dir) {
  return new Promise((resolve, reject) => {
    sftp.readdir(dir, (err, list) => (err ? reject(err) : resolve(list)));
  });
}

function exists(sftp, p) {
  return new Promise((resolve) => sftp.stat(p, (err, s) => resolve(!err && s)));
}

async function detectDocroots(sftp) {
  const targets = [];
  if (await exists(sftp, "index.html")) targets.push(".");
  let entries;
  try {
    entries = await readdir(sftp, ".");
  } catch {
    return ["www"];
  }
  console.log("Root directory listing:");
  for (const e of entries) {
    const name = e.filename;
    if (!name || name === "." || name === "..") continue;
    let isDir = false;
    try {
      isDir = e.attrs && e.attrs.isDirectory();
    } catch {
      isDir = false;
    }
    const hasIndex = isDir ? await exists(sftp, `${name}/index.html`) : false;
    console.log(`  ${isDir ? "[DIR]" : "[FILE]"} ${name}${hasIndex ? "  <-- contains index.html" : ""}`);
    if (hasIndex) targets.push(name);
  }
  return targets.length ? targets : ["www"];
}

const conn = new Client();

conn.on("ready", () => {
  conn.sftp(async (err, sftp) => {
    if (err) {
      console.error("SFTP error:", err.message);
      conn.end();
      process.exit(1);
    }
    try {
      let targets;
      if (remoteDir) {
        targets = [remoteDir];
      } else {
        targets = await detectDocroots(sftp);
      }
      console.log("Deploy targets:", targets.map((t) => (t === "." ? "(root)" : t)).join(", "));
      const files = walk(localDir);
      let count = 0;
      for (const target of targets) {
        await mkdirp(sftp, target);
        for (const file of files) {
          const remote = target === "." ? file.remote : `${target}/${file.remote}`;
          await mkdirp(sftp, path.posix.dirname(remote));
          await unlink(sftp, remote);
          await fastPut(sftp, file.local, remote);
          count++;
        }
        console.log(`Deployed ${files.length} files to ${target === "." ? "(root)" : target + "/"}`);
      }
      console.log(`Total: ${count} files across ${targets.length} target(s)`);
      conn.end();
    } catch (e) {
      console.error("Deploy failed:", e.message);
      conn.end();
      process.exit(1);
    }
  });
});

conn.on("error", (e) => {
  console.error("Connection error:", e.message);
  process.exit(1);
});

conn.connect({ host, port, username, password, readyTimeout: 20000, keepaliveInterval: 10000 });