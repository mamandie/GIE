import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    "https://gie-opportunite-afrique.ramaubuntu96.chatgpt.site",
  ),
  title: "GIE Opportunité d’Afrique — Construisons ensemble",
  description:
    "Coopération, investissement et innovation : le GIE Opportunité d’Afrique rassemble les ambitions pour un développement économique durable et inclusif.",
  openGraph: {
    title: "GIE Opportunité d’Afrique",
    description: "L’Afrique des opportunités se construit ensemble.",
    locale: "fr_FR",
    type: "website",
    images: ["/images/hero-poster.webp"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/logo.png" },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
