import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { sectors } from "@/lib/content";
import { sectorDetails } from "@/lib/sector-details";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return sectors.map(({ id }) => ({ slug: id }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectors.find((item) => item.id === slug);
  if (!sector) notFound();
  return {
    title: sector.title,
    description: sector.description,
    alternates: { canonical: `/domaines/${sector.id}` },
    openGraph: {
      title: `${sector.title} — GIE Opportunité d’Afrique`,
      description: sector.description,
      url: `/domaines/${sector.id}`,
      images: [sector.image],
    },
  };
}
export default async function SectorPage({ params }: Props) {
  const { slug } = await params;
  const sector = sectors.find((item) => item.id === slug);
  if (!sector) notFound();
  const details = sectorDetails[slug];
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="domain-header">
        <div className="container domain-nav">
          <Link href="/" className="brand" aria-label="GIE Opportunité d’Afrique — Accueil">
            <img src="/images/logo.png" alt="" width="60" height="60" />
            <span>Opportunité<span className="brand-second">d’Afrique<span className="brand-dot">.</span></span></span>
          </Link>
          <Link href="/#domaines" className="domain-back"><ArrowLeft size={17} /> Tous les domaines</Link>
        </div>
      </header>
      <main id="contenu">
        <section className="domain-hero" aria-labelledby="domain-title">
          <img className="domain-hero-image" src={sector.image} alt={sector.alt} fetchPriority="high" />
          <div className="domain-hero-shade" />
          <div className="container domain-hero-content">
            <nav aria-label="Fil d’Ariane" className="domain-breadcrumb"><Link href="/">Accueil</Link><span>/</span><Link href="/#domaines">Domaines</Link><span>/</span><span aria-current="page">{sector.title}</span></nav>
            <div className="eyebrow">DOMAINE {sector.number} <span className="gold-line" /> {sector.tag}</div>
            <h1 id="domain-title">{sector.title}<span>.</span></h1>
            <p>{details.headline}</p>
            <a href="#approche" className="domain-hero-link">Découvrir notre approche <ArrowRight size={18} /></a>
          </div>
        </section>
        <section id="approche" className="section-pad domain-intro">
          <div className="container domain-intro-grid">
            <div><div className="eyebrow"><span className="gold-line" /> NOTRE CONVICTION</div><h2>Un potentiel à révéler.<br /><span>Une ambition à partager.</span></h2></div>
            <div className="domain-prose"><p>{details.introduction}</p><p>{details.ambition}</p></div>
          </div>
        </section>
        <section className="domain-axes section-pad" aria-labelledby="axes-title">
          <div className="container">
            <div className="eyebrow"><span className="gold-line" /> NOS AXES D’INTERVENTION</div>
            <h2 id="axes-title">Des perspectives <span>concrètes.</span></h2>
            <div className="domain-axis-grid">{details.axes.map((axis, index) => <article className="domain-axis" key={axis.title}><span className="domain-axis-number">0{index + 1} /</span><h3>{axis.title}</h3><p>{axis.text}</p></article>)}</div>
          </div>
        </section>
        <section className="section-pad">
          <div className="container domain-contact"><div><div className="eyebrow">CONSTRUISONS ENSEMBLE</div><h2>Votre projet commence<br />par <span>une rencontre.</span></h2><p>Une idée, un besoin ou une envie de collaborer dans le domaine {sector.title.toLocaleLowerCase("fr")} ? Échangeons sur les possibilités.</p></div><Link className="button gold" href="/#contact">Parlons de votre projet <ArrowUpRight size={20} /></Link></div>
        </section>
        <section className="container domain-explore" aria-labelledby="explore-title"><div className="eyebrow">POURSUIVRE LA DÉCOUVERTE</div><h2 id="explore-title">Nos autres domaines<span>.</span></h2><div className="domain-other-grid">{sectors.filter((item) => item.id !== slug).map((item) => <Link href={`/domaines/${item.id}`} className="domain-other" key={item.id}><img src={item.image} alt="" loading="lazy" /><span><small>{item.number} /</small>{item.title}<ArrowUpRight size={23} /></span></Link>)}</div></section>
      </main>
      <footer className="domain-footer container"><span>GIE Opportunité d’Afrique</span><Link href="/#domaines">Retour aux domaines <ArrowUpRight size={16} /></Link></footer>
    </>
  );
}
