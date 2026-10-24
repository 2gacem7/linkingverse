// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: true },
  typescript: { strict: true },

  // Polices servies par le site lui-même (pas de Google Fonts : aucune adresse IP de visiteur envoyée à Google)
  css: ['@fontsource-variable/geist/index.css', '@fontsource-variable/geist-mono/index.css', '~/assets/css/main.css'],

  // Surchargeables au build par NUXT_PUBLIC_SITE_URL, NUXT_PUBLIC_CONTACT_EMAIL, NUXT_PUBLIC_LINKEDIN_URL
  runtimeConfig: {
    public: {
      siteUrl: 'https://linkingverse.com',
      siteName: 'Linking Verse',
      // Adresse qui reçoit les demandes du formulaire de contact
      contactEmail: 'contact@linkingverse.com',
      linkedinUrl: 'https://www.linkedin.com/',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [{ name: 'theme-color', content: '#FFFFFF' }],
    },
  },

  // URLs sans slash final partout
  router: { options: { strict: true } },

  // Cloudflare Workers (static assets) : tout le site est pré-rendu en HTML, aucun code serveur.
  // `npm run build` génère .output/public, servi par wrangler.jsonc.
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/mentions-legales'],
      autoSubfolderIndex: false,
    },
  },
})
