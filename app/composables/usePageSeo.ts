import type { Faq } from '~/utils/content'

interface PageSeo {
  title?: string
  description: string
  path: string
  faq?: Faq[]
  noindex?: boolean
}

/**
 * Tout le SEO d'une page au même endroit :
 * title, description, canonical, Open Graph, Twitter,
 * et données structurées (Organization, FAQPage).
 */
export function usePageSeo(seo: PageSeo) {
  const { siteUrl, siteName, contactEmail, linkedinUrl } = useRuntimeConfig().public
  const url = siteUrl + (seo.path === '/' ? '' : seo.path)
  const title = seo.title ? `${seo.title} | ${siteName}` : `${siteName} — Formation IA générative et agents IA`

  useSeoMeta({
    title,
    description: seo.description,
    ogTitle: title,
    ogDescription: seo.description,
    ogUrl: url,
    ogType: 'website',
    ogSiteName: siteName,
    ogLocale: 'fr_FR',
    twitterCard: 'summary_large_image',
    robots: seo.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
  })

  const graph: Record<string, unknown>[] = [{
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    email: contactEmail,
    sameAs: [linkedinUrl],
    description: 'Formation des entreprises à l’IA générative et aux agents IA.',
  }]

  if (seo.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: seo.faq.map((f) => ({
        '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }],
  })
}
