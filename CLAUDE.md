# Linking Verse — règles pour les agents et contributeurs

## Git : jamais de push direct sur `main`

Chaque changement passe par une **branche** et une **Pull Request** vers `main`.
Le propriétaire du dépôt relit et fusionne.

- Partir de `origin/main` à jour : `git fetch origin main && git checkout -b <type>/<sujet> origin/main`
- Noms de branche : `feat/…`, `fix/…`, `docs/…`, `chore/…`
- Une PR = un sujet. Titre et description en français, avec ce qui change et comment c'est vérifié.
- Avant d'ouvrir la PR : `npm run build` doit passer.

## Projet

- Nuxt 4 + TypeScript, site entièrement pré-rendu, servi par Cloudflare Workers (`wrangler.jsonc`, `npm run build` → `.output/public`).
- Site en français uniquement.
- Textes dans `app/utils/content.ts`, une section par composant `app/components/*Section.vue`.
- Design sobre : fond blanc, encre `--ink`, un seul accent `--accent` (voir `app/assets/css/main.css`). Pas de dégradés.
- Aucun texte inventé (chiffres, références clients, témoignages) : les infos manquantes restent entre crochets `[ … ]`.
