export const sectorDetails: Record<string, { headline: string; introduction: string; ambition: string; axes: { title: string; text: string }[] }> = {
  agriculture: {
    headline: "Cultiver aujourd’hui, nourrir demain.",
    introduction: "L’agriculture est au cœur des économies locales et de la sécurité alimentaire. Des champs aux marchés, chaque étape de la filière peut créer de la valeur et ouvrir de nouvelles perspectives pour les territoires africains.",
    ambition: "Notre ambition : rapprocher les producteurs, les porteurs de projets et les partenaires pour faire émerger une agriculture durable, mieux structurée et ancrée dans les besoins locaux.",
    axes: [
      { title: "Production durable", text: "Encourager des pratiques adaptées aux territoires, attentives à la préservation des sols, à la gestion de l’eau et à la pérennité des ressources." },
      { title: "Valorisation des récoltes", text: "Explorer les opportunités de transformation, de conservation et de conditionnement pour mieux valoriser les productions locales." },
      { title: "Accès aux marchés", text: "Favoriser les liens entre producteurs, acheteurs et partenaires afin de développer les débouchés et de renforcer les filières locales." },
    ],
  },
  maritime: {
    headline: "Un océan de perspectives à construire.",
    introduction: "Le littoral africain est un espace de ressources, de savoir-faire et d’échanges. La pêche, les activités côtières et les services liés à la mer constituent autant de pistes pour un développement économique responsable.",
    ambition: "Notre ambition : mettre en relation les acteurs de l’économie maritime et encourager des projets qui concilient opportunités économiques, valorisation des métiers et préservation du milieu marin.",
    axes: [
      { title: "Filières halieutiques", text: "S’intéresser aux besoins des acteurs de la pêche et aux possibilités de valorisation, de conservation et de commercialisation des produits de la mer." },
      { title: "Échanges et services", text: "Explorer les collaborations autour de la logistique maritime, des activités portuaires et des services qui accompagnent les échanges." },
      { title: "Économie bleue", text: "Encourager une approche durable des activités côtières, respectueuse des écosystèmes et des communautés qui en dépendent." },
    ],
  },
  technologies: {
    headline: "Des idées aux usages, faire avancer l’innovation.",
    introduction: "Le numérique ouvre de nouvelles façons de produire, de collaborer et d’accéder aux marchés. Son potentiel prend tout son sens lorsqu’il répond à des besoins concrets des entreprises, des entrepreneurs et des territoires.",
    ambition: "Notre ambition : créer des passerelles entre les talents, les porteurs de solutions et les acteurs économiques pour encourager une innovation utile et accessible.",
    axes: [
      { title: "Transformation numérique", text: "Identifier les usages et les outils qui peuvent simplifier les activités, améliorer l’organisation et faciliter la relation avec les clients." },
      { title: "Solutions et innovation", text: "Favoriser les rencontres autour de solutions adaptées aux réalités locales, notamment dans l’agriculture, le commerce et les services." },
      { title: "Talents et collaborations", text: "Encourager le partage de connaissances et les collaborations entre entrepreneurs, profils techniques et partenaires de l’innovation." },
    ],
  },
  commerce: {
    headline: "Relier les marchés, multiplier les opportunités.",
    introduction: "Les échanges commerciaux font circuler bien plus que des produits : ils connectent les savoir-faire, les entreprises et les territoires. Renforcer ces liens contribue à faire grandir les initiatives locales et à ouvrir de nouveaux débouchés.",
    ambition: "Notre ambition : faciliter les rencontres économiques et faire émerger des collaborations durables entre fournisseurs, acheteurs, entrepreneurs et partenaires.",
    axes: [
      { title: "Mise en relation", text: "Favoriser les échanges entre acteurs complémentaires et identifier des possibilités de collaboration autour de besoins partagés." },
      { title: "Valorisation de l’offre locale", text: "Mettre en lumière les produits et savoir-faire africains pour soutenir leur visibilité et explorer de nouveaux marchés." },
      { title: "Développement des échanges", text: "Explorer les opportunités de distribution, d’approvisionnement et de partenariats commerciaux à l’échelle locale et internationale." },
    ],
  },
};
