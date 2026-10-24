<template>
  <section class="hero">
    <HeroNetwork />
    <div class="wrap inner">
      <HeroLogo />
      <span class="pill"><span class="dot dot--live" />Formation en IA générative &amp; agents IA</span>
      <h1>
        Faites de l'IA un réflexe dans
        <span class="sr-only">{{ heroWords[0] }}.</span>
        <span class="rot" aria-hidden="true">
          <span v-for="(w, i) in heroWords" :key="w" :style="{ animationDelay: `${i * 3}s` }">{{ w }}.</span>
        </span>
      </h1>
      <p class="lede">
        Linking Verse forme vos équipes à l'IA générative et aux agents IA, avec des ateliers concrets
        construits sur vos propres cas d'usage.
      </p>
      <div class="actions">
        <a href="#contact" class="btn btn--primary">Parler de votre projet <span class="arrow" aria-hidden="true">→</span></a>
        <a href="#formations" class="btn btn--ghost">Voir les formations</a>
      </div>
      <AgentDiagram class="diagram" />
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; overflow: hidden; isolation: isolate; }
.inner { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 28px; padding-block: clamp(40px, 6vw, 64px) clamp(64px, 8vw, 96px); }
h1 { max-width: 13em; }
.pill { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--line-strong); border-radius: 999px; padding: 6px 14px; background: var(--paper); font-family: var(--mono); font-size: 0.8rem; color: var(--muted); }

/* Mot qui change : les mots sont superposés dans la même case de grille */
.rot { display: inline-grid; color: var(--accent); }
.rot span { grid-area: 1 / 1; opacity: 0; animation: word 9s infinite; }
@keyframes word {
  0% { opacity: 0; transform: translateY(0.35em); filter: blur(4px); }
  4%, 30% { opacity: 1; transform: none; filter: none; }
  34%, 100% { opacity: 0; transform: translateY(-0.35em); filter: blur(4px); }
}
@media (prefers-reduced-motion: reduce) {
  .rot span { animation: none; }
  .rot span:first-child { opacity: 1; }
}

.actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
.diagram { margin-top: 40px; }

/* Entrée en cascade au chargement */
@media (prefers-reduced-motion: no-preference) {
  .inner > * { animation: rise .8s cubic-bezier(.2, .7, .2, 1) both; }
  .inner > :nth-child(2) { animation-delay: .08s; }
  .inner > :nth-child(3) { animation-delay: .16s; }
  .inner > :nth-child(4) { animation-delay: .24s; }
  .inner > :nth-child(5) { animation-delay: .32s; }
  .inner > :nth-child(6) { animation-delay: .4s; }
}
@keyframes rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
</style>
