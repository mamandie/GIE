// Contenus centralisés, prêts à être remplacés par un CMS.
export const sectors = [
  {
    id: "agriculture",
    number: "01",
    title: "Agriculture",
    tag: "Cultiver le potentiel",
    description:
      "Soutenir une agriculture durable, valoriser les ressources et faire émerger de nouvelles opportunités pour les filières locales.",
    image: "/images/agriculture.webp",
    alt: "Cultures et travail agricole dans un paysage verdoyant",
  },
  {
    id: "maritime",
    number: "02",
    title: "Maritime",
    tag: "Ouvrir de nouveaux horizons",
    description:
      "Explorer les opportunités de l’économie maritime et accompagner le développement des échanges et des activités associées.",
    image: "/images/maritime.webp",
    alt: "Pirogues colorées sur le littoral sénégalais",
  },
  {
    id: "technologies",
    number: "03",
    title: "Technologies",
    tag: "Faire avancer les idées",
    description:
      "Promouvoir l’innovation numérique, les nouvelles technologies et la transformation économique du continent.",
    image: "/images/technologies.webp",
    alt: "Illustration des connexions et des échanges numériques",
  },
  {
    id: "commerce",
    number: "04",
    title: "Commerce",
    tag: "Créer des passerelles",
    description:
      "Favoriser les échanges commerciaux, les collaborations économiques et les opportunités d’investissement.",
    image: "/images/commerce.webp",
    alt: "Conteneurs de marchandises dans une plateforme logistique",
  },
];
// Aucune coordonnée n’est inventée. Renseigner ces valeurs avant le lancement client.
export const contact = {
  email: "gie.oasn@gmail.com",
  phone: "",
  address: "",
  socialLinks: [
    { label: "Instagram", url: "https://www.instagram.com/gie.oasn?dlrf=ZDBhZmtmM2VnaGVo" },
    { label: "YouTube", url: "" },
    { label: "Facebook", url: "" },
    { label: "TikTok", url: "" },
  ],
};
export const news = [] as {
  title: string;
  date: string;
  category: string;
  image: string;
  description: string;
  url: string;
}[];
