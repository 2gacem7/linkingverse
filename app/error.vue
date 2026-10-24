<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const notFound = computed(() => props.error.statusCode === 404)
useSeoMeta({ title: notFound.value ? 'Page introuvable | Linking Verse' : 'Erreur | Linking Verse', robots: 'noindex' })
</script>

<template>
  <NuxtLayout>
    <section class="wrap section">
      <p class="eyebrow">{{ error.statusCode }}</p>
      <h1 style="margin-top: 12px">{{ notFound ? 'Page introuvable.' : 'Une erreur est survenue.' }}</h1>
      <p class="lede" style="margin: 20px 0 32px">
        {{ notFound ? "Cette page n'existe pas ou a été déplacée." : 'Réessayez dans un instant.' }}
      </p>
      <a href="/" class="btn btn--primary">Retour à l'accueil</a>
    </section>
  </NuxtLayout>
</template>
