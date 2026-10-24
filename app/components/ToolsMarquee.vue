<!-- Bandeau des outils abordés en formation, qui défile en continu.
     La liste est doublée pour que la boucle soit invisible ; la copie est masquée aux lecteurs d'écran. -->
<template>
  <section class="tools" aria-label="Outils abordés en formation">
    <p class="eyebrow label">Les outils que nous enseignons</p>
    <div class="viewport">
      <ul class="track">
        <li v-for="t in tools" :key="t">{{ t }}</li>
        <li v-for="t in tools" :key="`dup-${t}`" aria-hidden="true">{{ t }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.tools { padding-block: 8px 56px; display: flex; flex-direction: column; align-items: center; gap: 18px; }
.viewport { width: 100%; overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent); }
.track { list-style: none; margin: 0; padding: 0; display: flex; width: max-content; animation: scroll 32s linear infinite; }
.viewport:hover .track { animation-play-state: paused; }
li { display: flex; align-items: center; gap: 40px; padding-right: 40px; font-size: 1.25rem; font-weight: 500; letter-spacing: -0.02em; color: var(--ink-2); white-space: nowrap; }
li::after { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--line-strong); }
@keyframes scroll { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) {
  .viewport { mask-image: none; }
  .track { animation: none; flex-wrap: wrap; justify-content: center; width: auto; }
  li[aria-hidden='true'] { display: none; }
}
</style>
