import { Client } from "ssh2";
import fs from "node:fs";
import path from "node:path";

const host = process.env.FTP_SERVER;
const port = Number(process.env.FTP_PORT || 22);
const username = process.env.FTP_USERNAME;
const password = process.env.FTP_PASSWORD;
const localDir = process.env.DEPLOY_LOCAL_DIR || "./out";
const remoteDir = process.env.DEPLOY_REMOTE_DIR || "www";

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

const conn = new Client();

conn.on("ready", () => {
  conn.sftp(async (err, sftp) => {
    if (err) {
      console.error("SFTP error:", err.message);
      conn.end();
      process.exit(1);
    }
    try {
      const files = walk(localDir);
      await mkdirp(sftp, remoteDir);
      let count = 0;
      for (const file of files) {
        const remote = `${remoteDir}/${file.remote}`;
        await mkdirp(sftp, path.posix.dirname(remote));
        await fastPut(sftp, file.local, remote);
        console.log("uploaded", file.remote);
        count++;
      }
      console.log(`Deployed ${count} files to ${remoteDir}/`);
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

conn.connect({ host, port, username, password, readyTimeout: 20000 });