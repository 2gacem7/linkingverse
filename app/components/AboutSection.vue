<script setup lang="ts">
const { linkedinUrl } = useRuntimeConfig().public
</script>

<template>
  <section id="apropos" class="section about-wrap">
    <div class="wrap about">
      <!-- Remplacer par <img src="/photo.jpg" alt="…"> une fois la photo ajoutée dans public/ -->
      <div class="photo">[VOTRE PHOTO]</div>
      <div class="text">
        <span class="eyebrow">À propos</span>
        <h2>Relier les gens et l'IA, c'est notre métier.</h2>
        <p class="muted">
          Linking Verse est née d'une conviction : l'IA ne transforme une entreprise que si ses équipes savent s'en servir.
          [VOTRE PARCOURS EN 2–3 PHRASES : expérience, expertise, pourquoi vous avez lancé l'agence.]
        </p>
        <p class="name">[VOTRE NOM] <span class="muted">· Fondateur</span></p>
        <a :href="linkedinUrl" rel="noopener" target="_blank" class="link">Me suivre sur LinkedIn →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-wrap { border-top: 1px solid var(--line); }
.about { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr)); gap: 56px; align-items: center; }
.photo { aspect-ratio: 4 / 5; max-width: 400px; width: 100%; border-radius: var(--radius); border: 1px dashed var(--line-strong); background: var(--soft); display: flex; align-items: center; justify-content: center; color: var(--faint); font-family: var(--mono); font-size: 0.8rem; }
.text { display: flex; flex-direction: column; gap: 18px; }
.name { font-weight: 500; }
.name .muted { font-weight: 400; }
.link { align-self: flex-start; padding: 10px 0; font-weight: 500; text-underline-offset: 4px; }
</style>
