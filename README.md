# GIE Opportunité d’Afrique

Site vitrine français : Next.js App Router, TypeScript, Tailwind CSS et Motion. Export statique portable, compatible avec un hébergement LWS disposant d’un espace web statique.

## Développement

```sh
npm ci
npm run dev
```

## Vérification et livraison

```sh
npm run typecheck
npm run build
```

Le dossier `out/` contient le site prêt à héberger. Déployer son contenu à la racine web. Le choix du domaine et l’abonnement LWS ne sont pas modifiés par ce projet.

## Personnalisation

- `lib/content.ts` : domaines, actualités, coordonnées et réseaux officiels. Aucune actualité ni aucun partenaire fictif.
- `components/home.tsx` : sections et navigation.
- `app/globals.css` : palette et responsive. Thème sombre par défaut, préférence enregistrée localement.
- `public/hero.mp4` : vidéo fournie ; sur mobile et en réduction des animations, l’affiche prend le relais.
- Images extraites de la présentation client ; logo officiel fourni conservé. Confirmer les droits de diffusion avant le lancement public.

## Avant ouverture publique

1. Renseigner les coordonnées et les liens sociaux validés dans `lib/content.ts`.
2. Compléter les mentions légales et la politique de confidentialité (fenêtres dans `components/home.tsx`).
3. Configurer `NEXT_PUBLIC_CONTACT_ENDPOINT` puis reconstruire. Le service doit accepter un POST JSON (`name`, `email`, `organization`, `subject`, `message`, `consent`, `website`), valider les données, limiter le débit et gérer le spam côté serveur. Une réponse HTTP 2xx doit signifier un message réellement accepté. Le honeypot et les validations navigateur ne remplacent pas la protection serveur. Sans endpoint, le formulaire ne prétend jamais avoir envoyé le message.
4. Adapter `metadataBase` dans `app/layout.tsx` au domaine final.

L’état vide des actualités constitue la septième section. La section « projets et initiatives » est absente conformément au brief le plus récent, même si l’ancien devis la mentionne.
