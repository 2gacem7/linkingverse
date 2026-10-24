# Linking Verse

Site de l'agence Linking Verse : formation des entreprises à l'IA générative et aux agents IA.
Nuxt 4 + TypeScript, pré-rendu statique, déployé sur Cloudflare Workers.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # génère .output/public (HTML pré-rendu)
npm run preview    # aperçu local façon Cloudflare (wrangler dev)
npm run typecheck  # vérification TypeScript
```

## Structure

| Fichier | Rôle |
|---|---|
| `app/utils/content.ts` | **Tous les textes** : formations, méthode, FAQ, navigation. Les `[ … ]` sont à compléter. |
| `app/pages/index.vue` | Page d'accueil (assemble les sections) |
| `app/pages/mentions-legales.vue` | Mentions légales (à compléter : SIRET, adresse…) |
| `app/components/*Section.vue` | Une section de la page par composant |
| `app/components/AgentDiagram.vue` | Schéma animé du hero |
| `app/assets/css/main.css` | Couleurs, typo, boutons. Changer `--accent` recolore tout le site. |
| `app/composables/usePageSeo.ts` | Title, description, canonical, Open Graph, JSON-LD (Organization, FAQPage) |
| `nuxt.config.ts` | URL du site, email de contact, lien LinkedIn (surchargeables par variables d'environnement) |

Polices Geist et Geist Mono servies par le site (fontsource), sans Google Fonts.

## Configuration

Variables de build (facultatives, valeurs par défaut dans `nuxt.config.ts`) :

- `NUXT_PUBLIC_SITE_URL` — `https://linkingverse.com`
- `NUXT_PUBLIC_CONTACT_EMAIL` — `contact@linkingverse.com`
- `NUXT_PUBLIC_LINKEDIN_URL` — lien vers le profil LinkedIn

Le formulaire de contact ouvre la messagerie du visiteur avec un email pré-rempli (site 100 % statique, aucun serveur).

## Déployer sur Cloudflare Workers

Dans Cloudflare → Workers & Pages → Créer → importer le dépôt GitHub, puis Settings → Build :
- Build command : `npm run build`
- Deploy command : `npx wrangler deploy`

Ou depuis ton ordi : `npm run deploy`.

### Domaines

- `linkingverse.com` : domaine principal, à ajouter comme domaine personnalisé du Worker.
- `linkingverse.fr` et `linkingverse.eu` : redirection 301 vers `https://linkingverse.com`
  (chez le registrar, ou dans Cloudflare avec une règle de redirection si les domaines y sont gérés).
