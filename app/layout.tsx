import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";

const SITE_URL = "https://goa.sn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GIE Opportunité d’Afrique — Construisons ensemble",
    template: "%s — GIE Opportunité d’Afrique",
  },
  description:
    "Coopération, investissement et innovation : le GIE Opportunité d’Afrique rassemble les ambitions pour un développement économique durable et inclusif en Afrique.",
  keywords: [
    "GIE Opportunité d’Afrique",
    "Afrique",
    "développement économique",
    "coopération",
    "investissement",
    "innovation",
    "agriculture",
    "maritime",
    "technologies",
    "commerce",
  ],
  authors: [{ name: "GIE Opportunité d’Afrique", url: SITE_URL }],
  creator: "GIE Opportunité d’Afrique",
  publisher: "GIE Opportunité d’Afrique",
  category: "Économie",
  alternates: { canonical: "/" },
  openGraph: {
    title: "GIE Opportunité d’Afrique",
    description:
      "L’Afrique des opportunités se construit ensemble. Coopération, investissement et innovation au service d’un développement durable et inclusif.",
    url: SITE_URL,
    siteName: "GIE Opportunité d’Afrique",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/images/hero-poster.webp", width: 1200, height: 630, alt: "GIE Opportunité d’Afrique" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIE Opportunité d’Afrique",
    description:
      "L’Afrique des opportunités se construit ensemble. Coopération, investissement et innovation.",
    images: ["/images/hero-poster.webp"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.png", apple: "/images/logo.png" },
  verification: {
    google: "c8bNJSB3XV_5m6JNdWfkaJsTKt8qWF7iienNNVyRsQ8",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GIE Opportunité d’Afrique",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  email: "gie.oasn@gmail.com",
  description:
    "Groupement d’intérêt économique qui favorise la coopération, stimule les investissements et encourage l’innovation pour le développement économique et durable de l’Afrique.",
  sameAs: ["https://www.instagram.com/gie.oasn"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem('gie-theme')==='light'?'light':'dark'}catch{}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}