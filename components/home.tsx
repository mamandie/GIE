"use client";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  Sun,
  Moon,
  Menu,
  X,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Globe2,
  Sprout,
  Anchor,
  Cpu,
  Boxes,
  Play,
  Pause,
  Plus,
  Minus,
  Send,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Check,
  ChevronDown,
} from "lucide-react";
import { sectors, contact, news } from "@/lib/content";
const navigation = [
  ["Accueil", "#accueil"],
  ["À propos", "#a-propos"],
  ["Domaines", "#domaines"],
  ["Partenariats", "#partenariats"],
  ["Contact", "#contact"],
];
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        reduce
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", rotate: 0 }
          : {
              opacity: [0, 1],
              y: [120, 0],
              scale: [0.8, 1],
              filter: ["blur(12px)", "blur(0px)"],
              rotate: [-4, 0],
            }
      }
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
function AfricaMap() {
  return (
    <svg
      className="africa-map"
      viewBox="0 0 520 560"
      fill="none"
      role="img"
      aria-label="Carte de l’Afrique, symbole de coopération et de connexion"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="9"
          height="9"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.25" fill="#D6A32F" opacity=".65" />
        </pattern>
        <radialGradient id="halo">
          <stop stopColor="#D6A32F" stopOpacity=".12" />
          <stop offset="1" stopColor="#D6A32F" stopOpacity="0" />
        </radialGradient>
        <clipPath id="africa">
          <path d="M137 56 192 43 219 62 252 58 271 79 312 83 338 113 348 147 370 168 383 203 432 202 420 232 386 263 365 281 351 327 331 356 322 400 299 422 281 471 250 498 228 478 216 434 196 399 189 355 176 318 153 281 116 272 78 277 46 253 36 219 42 182 67 160 71 127 96 98 117 94Z" />
          <path d="m391 361 11 20-10 57-20 27-9-20 8-48Z" />
        </clipPath>
      </defs>
      <circle cx="250" cy="270" r="245" fill="url(#halo)" />
      <g stroke="#D6A32F" opacity=".12">
        <circle cx="250" cy="270" r="220" />
        <circle cx="250" cy="270" r="175" />
        <path d="M10 270h480M250 25v490" />
      </g>
      <g clipPath="url(#africa)">
        <rect x="20" y="30" width="420" height="480" fill="url(#dots)" />
        <g
          className="map-lines"
          stroke="#F3BD49"
          strokeWidth="1.1"
          opacity=".6"
        >
          <path d="M79 220Q220 80 327 187M79 220Q210 180 268 360M79 220Q190 300 328 274M268 360Q220 220 327 187M268 360Q332 349 328 274" />
        </g>
      </g>
      {[
        [79, 220],
        [327, 187],
        [268, 360],
        [328, 274],
        [210, 154],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle
            className="map-pulse"
            style={{ animationDelay: `${i * 0.6}s` }}
            cx={x}
            cy={y}
            r="12"
            fill="#F3BD49"
            opacity=".14"
          />
          <circle cx={x} cy={y} r="4" fill="#F3BD49" />
          <circle cx={x} cy={y} r="7" stroke="#F3BD49" opacity=".5" />
        </g>
      ))}
      <text x="50" y="250" fill="#f4e6c5" fontSize="10" letterSpacing="2">
        COOPÉRATION
      </text>
      <text x="272" y="389" fill="#f4e6c5" fontSize="10" letterSpacing="2">
        PERSPECTIVES
      </text>
    </svg>
  );
}
export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#accueil");
  const [expanded, setExpanded] = useState(false);
  const [legal, setLegal] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const video = useRef<HTMLVideoElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const modal = useRef<HTMLDialogElement>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "dark");
    const onScroll = () => setScrolled(window.scrollY > 35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((e) => observer.observe(e));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (reduce) {
      video.current?.pause();
      setPaused(true);
    }
  }, [reduce]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const trap = (e: KeyboardEvent) => {
      if (!menuOpen || e.key !== "Tab") return;
      const items = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".header-actions button, #mobile-menu a",
        ),
      );
      const first = items[0],
        last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", trap);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", trap);
      window.removeEventListener("keydown", close);
    };
  }, [menuOpen]);
  useEffect(() => {
    if (legal) modal.current?.showModal();
    else modal.current?.close();
  }, [legal]);
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("gie-theme", next);
    } catch {}
  };
  const toggleVideo = () => {
    if (paused) {
      video.current
        ?.play()
        .then(() => setPaused(false))
        .catch(() => setPaused(true));
    } else {
      video.current?.pause();
      setPaused(true);
    }
  };
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = new FormData(form);
    if (values.get("website")) return;
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (!endpoint) {
      setFormStatus(
        "Le formulaire n’est pas encore connecté. Aucun message n’a été envoyé.",
      );
      return;
    }
    setFormStatus("Envoi en cours…");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(values)),
      });
      if (!response.ok) throw new Error();
      setFormStatus(
        "Merci, votre message a bien été envoyé. Nous reviendrons vers vous.",
      );
      form.reset();
    } catch {
      setFormStatus(
        "L’envoi a échoué. Veuillez réessayer dans quelques instants.",
      );
    }
  };
  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <header className={`header ${scrolled || menuOpen ? "solid" : ""}`}>
        <div className="header-inner">
          <a
            href="#accueil"
            className="brand"
            aria-label="GIE Opportunité d’Afrique — Accueil"
          >
            <img src="/images/logo.png" alt="" width="74" height="74" />
            <span>
              Opportunité
              <span className="brand-second">
                d’Afrique<span className="brand-dot">.</span>
              </span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map(([label, href]) => (
              <a
                href={href}
                key={href}
                aria-current={active === href ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Activer le mode clair"
                  : "Activer le mode sombre"
              }
              title={theme === "dark" ? "Mode clair" : "Mode sombre"}
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <a className="button gold header-cta" href="#contact">
              Nous rejoindre <ArrowUpRight size={16} />
            </a>
            <button
              ref={menuButton}
              className="menu-toggle"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Navigation mobile"
        >
          {navigation.map(([label, href], i) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              <span>0{i + 1}</span>
              {label}
              <ArrowUpRight />
            </a>
          ))}
          <a
            className="button gold"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Nous rejoindre <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
      <main id="contenu" inert={menuOpen}>
        <section className="hero" id="accueil" aria-label="GIE Opportunité d’Afrique">
          <div className="hero-media">
            <video
              ref={video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/hero-poster.webp"
              aria-label="Présentation du GIE Opportunité d’Afrique"
              onPlay={() => setPaused(false)}
              onPause={() => setPaused(true)}
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            className="video-control"
            onClick={toggleVideo}
            aria-label={paused ? "Lire la vidéo d’accueil" : "Mettre la vidéo en pause"}
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        </section>
        <section className="home-intro" aria-labelledby="home-title">
          <div className="container">
            <Reveal className="home-intro-grid">
              <div>
                <div className="eyebrow">
                  <span className="gold-line" /> GIE OPPORTUNITÉ D’AFRIQUE
                </div>
                <h1 id="home-title">
                  {["Un continent d’ambitions.", "Un avenir à bâtir ensemble."].map(
                    (line, li) => (
                      <span key={li} style={{ display: "block" }}>
                        {line.split("").map((ch, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: (li * 28 + i) * 0.08,
                              duration: 0.6,
                            }}
                            style={{ display: "inline-block" }}
                          >
                            {ch === " " ? "\u00A0" : ch}
                          </motion.span>
                        ))}
                      </span>
                    ),
                  )}
                </h1>
              </div>
              <div className="home-intro-copy">
                <p>
                  Des talents qui se rencontrent. Des idées qui prennent racine.
                  Nous réunissons les énergies pour faire grandir les
                  opportunités de l’Afrique.
                </p>
                <a className="text-link" href="#a-propos">
                  Découvrir le groupement <ArrowUpRight size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
        <div className="sector-ribbon" aria-label="Nos quatre domaines">
          <div className="container">
            {[
              [Sprout, "Agriculture"],
              [Anchor, "Maritime"],
              [Cpu, "Technologies"],
              [Boxes, "Commerce"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof Sprout;
              return (
                <a key={label as string} href={`/domaines/${sectors.find((sector) => sector.title === label)?.id}`}>
                  <I size={20} />
                  <span>{label as string}</span>
                  <span className="ribbon-star">✦</span>
                </a>
              );
            })}
          </div>
        </div>
        <section
          id="a-propos"
          className="about section-pad"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <Reveal className="about-visual">
              <div className="photo-frame">
                <img
                  src="/images/collaboration.webp"
                  alt="Deux professionnels africains échangent sur un document de travail"
                  width="800"
                  height="900"
                  loading="lazy"
                />
              </div>
              <div className="photo-caption">
                <span className="caption-star">✦</span>
                <span>
                  Des compétences réunies.
                  <br />
                  <strong>Des perspectives élargies.</strong>
                </span>
                <ArrowUpRight size={26} />
              </div>
              <span className="image-label">LA FORCE DU COLLECTIF</span>
            </Reveal>
            <Reveal className="about-copy">
              <div className="eyebrow">
                <span className="gold-line" />
                01 — LE GROUPEMENT
              </div>
              <h2 id="about-title">
                Unir les forces.
                <br />
                Révéler les opportunités.
                <br />
                <span>Construire l’avenir.</span>
              </h2>
              <p>
                Le GIE Opportunité d’Afrique est un groupement d’intérêt
                économique qui œuvre à favoriser la coopération, à stimuler les
                investissements et à encourager des initiatives innovantes.
              </p>
              <p>
                Notre ambition : contribuer à un développement économique et
                durable, en respectant les réalités, les cultures et les
                aspirations du continent.
              </p>
              <div className="values">
                {[
                  [Handshake, "Collaboration"],
                  [Lightbulb, "Innovation"],
                  [ShieldCheck, "Transparence"],
                ].map(([Icon, label]) => {
                  const I = Icon as typeof Handshake;
                  return (
                    <span key={label as string}>
                      <I size={20} />
                      {label as string}
                    </span>
                  );
                })}
              </div>
              <button
                className="text-link"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-controls="about-more"
              >
                {expanded
                  ? "Réduire la présentation"
                  : "En savoir plus sur le GIE"}
                {expanded ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              {expanded && (
                <div className="about-more" id="about-more">
                  <p>
                    Notre démarche s’appuie sur la coopération nationale et
                    internationale, la mobilisation des compétences et
                    l’encouragement de l’innovation. La participation des
                    membres et la transparence sont au cœur de notre vision de
                    la gouvernance.
                  </p>
                  <a className="text-link" href="#vision">
                    Découvrir notre vision <ArrowRight size={16} />
                  </a>
                </div>
              )}
            </Reveal>
          </div>
        </section>
        <section
          id="domaines"
          className="domains section-pad"
          aria-labelledby="domains-title"
        >
          <div className="container">
            <Reveal className="section-heading">
              <div>
                <div className="eyebrow">
                  <span className="gold-line" />
                  02 — NOS DOMAINES
                </div>
                <h2 id="domains-title">
                  Des secteurs essentiels.
                  <br />
                  <span>Un potentiel immense.</span>
                </h2>
              </div>
              <p>
                Quatre domaines stratégiques pour accompagner le développement
                économique africain.
              </p>
            </Reveal>
            <div className="sector-grid">
              {sectors.map((s) => (
                <Reveal key={s.id} className={`sector-card sector-${s.id}`}>
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width="900"
                    height="700"
                  />
                  <div className="sector-overlay" />
                  <div className="sector-top">
                    <span>{s.number} /</span>
                    <span>{s.tag}</span>
                  </div>
                  <a
                    href={`/domaines/${s.id}`}
                    className="sector-body"
                    aria-label={`Découvrir le domaine ${s.title}`}
                  >
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.description}</p>
                    </div>
                    <span className="sector-arrow">
                      <ArrowUpRight size={23} />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section
          id="vision"
          className="vision section-pad"
          aria-labelledby="vision-title"
        >
          <div className="container vision-grid">
            <Reveal className="map-wrap">
              <AfricaMap />
              <div className="map-caption">
                <span className="status-dot" />
                UNE VISION COMMUNE, SANS FRONTIÈRES
              </div>
            </Reveal>
            <Reveal>
              <div className="eyebrow">
                <span className="gold-line" />
                03 — NOTRE VISION
              </div>
              <h2 id="vision-title">
                Une Afrique connectée,
                <br />
                innovante et <span>prospère.</span>
              </h2>
              <p>
                Nous croyons en une Afrique où la coopération, l’innovation et
                la mobilisation des ressources créent de nouvelles perspectives
                pour les générations présentes et futures.
              </p>
              <div className="pillars">
                {[
                  "Coopération nationale et internationale",
                  "Investissement et croissance",
                  "Innovation et transformation économique",
                  "Développement durable et inclusif",
                ].map((s, i) => (
                  <div key={s}>
                    <span>0{i + 1}</span>
                    <h3>{s}</h3>
                    <ArrowUpRight size={17} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
        <section
          id="partenariats"
          className="partners section-pad"
          aria-labelledby="partners-title"
        >
          <div className="container partner-grid">
            <Reveal>
              <div className="eyebrow">
                <span className="gold-line" />
                04 — PARTENARIATS & COOPÉRATION
              </div>
              <h2 id="partners-title">
                Grandir ensemble.
                <br />
                <span>Réussir ensemble.</span>
              </h2>
              <p>
                Le développement économique repose sur la capacité à réunir les
                compétences, les ressources et les ambitions. Construisons des
                partenariats durables, fondés sur la confiance et une vision
                partagée.
              </p>
              <div className="partner-types">
                {[
                  "Entreprises et entrepreneurs",
                  "Investisseurs et acteurs économiques",
                  "Institutions et organisations",
                ].map((s) => (
                  <div key={s}>
                    <Check size={17} />
                    {s}
                  </div>
                ))}
              </div>
              <a href="#contact" className="button gold">
                Devenir partenaire <ArrowUpRight size={18} />
              </a>
            </Reveal>
            <Reveal className="partner-visual">
              <img
                src="/images/partenariat.webp"
                alt="Échange et poignée de main autour de documents professionnels"
                loading="lazy"
                width="900"
                height="800"
              />
              <div className="partner-stamp">
                <Handshake size={29} />
                <span>
                  La confiance,
                  <br />
                  <strong>première richesse.</strong>
                </span>
              </div>
            </Reveal>
          </div>
        </section>
        <section
          id="actualites"
          className="news section-pad"
          aria-labelledby="news-title"
        >
          <div className="container">
            <Reveal className="section-heading">
              <div>
                <div className="eyebrow">
                  <span className="gold-line" />
                  05 — À SUIVRE
                </div>
                <h2 id="news-title">
                  Actualités & <span>perspectives.</span>
                </h2>
              </div>
              <span className="edition-label">LE REGARD DU GIE</span>
            </Reveal>
            {news.length ? (
              <div className="news-grid">
                {news.slice(0, 3).map((n) => (
                  <article key={n.url}>
                    <img src={n.image} alt="" loading="lazy" />
                    <p>
                      {n.category} · {n.date}
                    </p>
                    <h3>{n.title}</h3>
                    <p>{n.description}</p>
                    <a href={n.url}>
                      Lire la suite <ArrowUpRight size={16} />
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <Reveal className="news-empty">
                <span className="news-mark">↗</span>
                <div>
                  <h3>De nouvelles perspectives se préparent.</h3>
                  <p>
                    Les actualités du groupement seront partagées ici.
                    <br />
                    En attendant, faisons connaissance.
                  </p>
                </div>
                <a href="#contact" className="text-link">
                  Entrons en relation <ArrowUpRight size={19} />
                </a>
              </Reveal>
            )}
          </div>
        </section>
        <section className="opportunity-section" aria-labelledby="opportunity-title">
          <div className="container opportunity-banner">
            <motion.div
              className="opportunity-parallax"
              aria-hidden="true"
              style={{
                backgroundImage: 'url("/images/agriculture.webp")',
              }}
            />
            <div className="opportunity-particles" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    left: `${(i * 37) % 100}%`,
                    top: `${(i * 53) % 100}%`,
                    animationDelay: `${(i * 0.4).toFixed(2)}s`,
                    animationDuration: `${4 + (i % 4)}s`,
                  }}
                />
              ))}
            </div>
            <div className="opportunity-rings" aria-hidden="true" />
            <Reveal className="opportunity-content">
              <div className="eyebrow">DES AMBITIONS AUX ACTIONS</div>
              <h2 id="opportunity-title">
                Cultivons les opportunités.
                <br />
                <span>Construisons demain.</span>
              </h2>
              <p>
                Réunissons nos compétences et nos ressources pour faire grandir
                des projets durables, ancrés dans les réalités du continent.
              </p>
              <div className="opportunity-actions">
                <a className="button gold" href="#contact">
                  Construisons votre projet <ArrowUpRight size={18} />
                </a>
                <a className="opportunity-link" href="#domaines">
                  Explorer nos domaines <ArrowRight size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
        <section
          id="contact"
          className="contact section-pad"
          aria-labelledby="contact-title"
        >
          <div className="container contact-grid">
            <Reveal className="contact-copy">
              <div className="eyebrow">
                <span className="gold-line" />
                06 — FAISONS LE PREMIER PAS
              </div>
              <h2 id="contact-title">
                Les opportunités
                <br />
                de demain commencent
                <br />
                <span>par un échange.</span>
              </h2>
              <p>
                Vous êtes entrepreneur, investisseur, partenaire ou institution
                ? Échangeons sur les possibilités de collaboration.
              </p>
              <div className="contact-symbol">
                <Globe2 size={30} />
                <span>
                  Des connexions humaines.
                  <br />
                  Une ambition africaine.
                </span>
              </div>
              {contact.email && (
                <a className="text-link" href={`mailto:${contact.email}`}>
                  {contact.email}
                  <ArrowUpRight size={17} />
                </a>
              )}
            </Reveal>
            <Reveal className="contact-form-wrap">
              <form onSubmit={submit}>
                <h3>Parlons de vos ambitions.</h3>
                <p className="form-intro">
                  Présentez-nous votre idée, votre organisation ou votre envie
                  de collaborer.
                </p>
                <div className="form-row">
                  <label>
                    Nom complet <span>*</span>
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={120}
                      placeholder="Votre nom"
                    />
                  </label>
                  <label>
                    Adresse e-mail <span>*</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="vous@organisation.com"
                    />
                  </label>
                </div>
                <label>
                  Organisation <span className="optional">(facultatif)</span>
                  <input
                    name="organization"
                    autoComplete="organization"
                    maxLength={160}
                    placeholder="Le nom de votre organisation"
                  />
                </label>
                <label>
                  Objet <span>*</span>
                  <div className="select-wrap">
                    <select name="subject" required defaultValue="">
                      <option value="" disabled>
                        Comment pouvons-nous collaborer ?
                      </option>
                      <option>Devenir partenaire</option>
                      <option>Rejoindre le GIE</option>
                      <option>Opportunité d’investissement</option>
                      <option>Demande d’information</option>
                      <option>Autre demande</option>
                    </select>
                    <ChevronDown size={16} />
                  </div>
                </label>
                <label>
                  Votre message <span>*</span>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={3}
                    placeholder="Quelques mots pour commencer…"
                  />
                </label>
                <label className="honeypot" aria-hidden="true">
                  Site web
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
                <label className="consent">
                  <input name="consent" type="checkbox" required />
                  <span>
                    J’accepte que mes informations soient utilisées pour
                    répondre à ma demande.{" "}
                    <button
                      type="button"
                      onClick={() => setLegal("confidentialite")}
                    >
                      Confidentialité
                    </button>
                  </span>
                </label>
                <button type="submit" className="button gold send-button">
                  Envoyer mon message <Send size={17} />
                </button>
                {!process.env.NEXT_PUBLIC_CONTACT_ENDPOINT && (
                  <p className="form-notice">
                    L’envoi de messages sera disponible prochainement.
                  </p>
                )}
                <p className="form-status" role="status" aria-live="polite">
                  {formStatus}
                </p>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <footer inert={menuOpen}>
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#accueil" className="brand">
                <img
                  src="/images/logo.png"
                  alt="Logo GIE Opportunité d’Afrique"
                  width="78"
                  height="78"
                />
                <span>
                  Opportunité
                  <span className="brand-second">
                    d’Afrique<span className="brand-dot">.</span>
                  </span>
                </span>
              </a>
              <p>
                Rassembler les ambitions.
                <br />
                Ouvrir le champ des possibles.
              </p>
            </div>
            <div className="footer-links">
              <h3>Navigation</h3>
              {navigation.slice(1).map(([label, href]) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </div>
            <div className="footer-links">
              <h3>Nos domaines</h3>
              {sectors.map((s) => (
                <a key={s.id} href={`/domaines/${s.id}`}>
                  {s.title}
                </a>
              ))}
            </div>
            <div className="footer-links">
              <h3>Liens utiles</h3>
              <a href="#vision">Notre vision</a>
              <a href="#partenariats">Devenir partenaire</a>
              <a href="#actualites">Actualités</a>
              <a href="#contact">Nous contacter</a>
              <div className="footer-socials" aria-label="Nos réseaux sociaux">
                {contact.socialLinks.map(({ label, url }) => {
                  const icon = label === "Instagram" ? <Instagram size={19} />
                    : label === "YouTube" ? <Youtube size={19} />
                    : label === "Facebook" ? <Facebook size={19} />
                    : <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 2H13v13.2a3 3 0 1 1-2.6-3V8.6a6.6 6.6 0 1 0 6.2 6.6V8.5a9 9 0 0 0 5.4 1.8V6.7A5.4 5.4 0 0 1 16.6 2Z" /></svg>;
                  return url ? (
                    <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                      onClick={(event) => {
                        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
                        event.preventDefault();
                        window.open(url, "_blank", "noopener,noreferrer");
                      }}
                      aria-label={`${label} — nouvel onglet`} title={`${label} — nouvel onglet`}>
                      {icon}
                    </a>
                  ) : (
                    <span key={label} className="social-pending" role="img"
                      aria-label={`${label} — lien à venir`} title={`${label} — lien à venir`}>
                      {icon}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footer-contact-row">
            <div className="footer-contact-item">
              <Globe2 size={23} aria-hidden="true" />
              <span>Ancrés en Afrique.<br />Ouverts sur le monde.</span>
            </div>
            <a className="footer-contact-item" href={`mailto:${contact.email}`}>
              <Mail size={23} aria-hidden="true" />
              <span>{contact.email}</span>
            </a>
            <a className="footer-contact-cta" href="#contact">
              Construisons ensemble <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} GIE Opportunité d’Afrique.</span>
            <div>
              <button onClick={() => setLegal("mentions")}>
                Mentions légales
              </button>
              <button onClick={() => setLegal("confidentialite")}>
                Confidentialité
              </button>
              <a href="#accueil" aria-label="Retour en haut">
                Retour en haut <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <dialog
        ref={modal}
        className="detail-dialog"
        onCancel={() => {
          setLegal(null);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setLegal(null);
          }
        }}
      >
        <button
          className="dialog-close"
          onClick={() => {
            setLegal(null);
          }}
          aria-label="Fermer la fenêtre"
        >
          <X />
        </button>
          <div className="dialog-content legal-content">
            <div className="eyebrow">GIE OPPORTUNITÉ D’AFRIQUE</div>
            <h2>
              {legal === "mentions" ? "Mentions légales" : "Confidentialité"}
            </h2>
            {legal === "mentions" ? (
              <>
                <p>
                  Ce site présente les activités et la vision du GIE Opportunité
                  d’Afrique.
                </p>
                <p>
                  Les informations d’immatriculation, le siège social, le
                  responsable de publication et les coordonnées officielles sont
                  en cours de validation. Elles devront être complétées avant
                  l’ouverture publique du site.
                </p>
              </>
            ) : (
              <>
                <p>
                  Le formulaire recueille uniquement les informations que vous
                  saisissez pour traiter votre demande de contact. L’envoi n’est
                  pas activé tant que le service de messagerie n’est pas
                  configuré.
                </p>
                <p>
                  Votre préférence de thème est enregistrée localement dans
                  votre navigateur. Aucun outil de mesure d’audience ni cookie
                  publicitaire n’est intégré à cette version.
                </p>
                <p>
                  Le responsable du traitement, les destinataires, la durée de
                  conservation et le contact pour exercer vos droits seront
                  précisés avant l’activation du formulaire.
                </p>
              </>
            )}
          </div>
      </dialog>
    </>
  );
}
