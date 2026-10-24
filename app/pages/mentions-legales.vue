<script setup lang="ts">
const { contactEmail, siteUrl } = useRuntimeConfig().public
usePageSeo({ title: 'Mentions légales', path: '/mentions-legales', description: 'Mentions légales du site Linking Verse.', noindex: true })
</script>

<template>
  <section class="section">
    <div class="wrap legal">
      <h1>Mentions légales</h1>

      <h2>Éditeur</h2>
      <p>Linking Verse — [FORME JURIDIQUE, ex. micro-entreprise / SASU]<br>
        [ADRESSE DU SIÈGE]<br>
        SIRET : [NUMÉRO SIRET]<br>
        Directeur de la publication : [VOTRE NOM]<br>
        Contact : <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a></p>

      <h2>Hébergement</h2>
      <p>Cloudflare, Inc. — 101 Townsend St, San Francisco, CA 94107, États-Unis — cloudflare.com</p>

      <h2>Données personnelles</h2>
      <p>Le site ne dépose aucun cookie de mesure d'audience ni de publicité. Les informations saisies dans le formulaire
        de contact sont transmises par email à Linking Verse et servent uniquement à répondre à votre demande.
        Vous pouvez demander leur suppression à tout moment à l'adresse ci-dessus.</p>

      <h2>Propriété intellectuelle</h2>
      <p>Les contenus de {{ siteUrl.replace('https://', '') }} sont la propriété de Linking Verse, sauf mention contraire.</p>
    </div>
  </section>
</template>

<style scoped>
.legal { max-width: 760px; display: flex; flex-direction: column; gap: 16px; }
.legal h1 { font-size: clamp(2.2rem, 5vw, 3.5rem); margin-bottom: 16px; }
.legal h2 { font-size: 1.25rem; letter-spacing: -0.01em; margin-top: 24px; }
.legal p { color: var(--muted); }
</style>
