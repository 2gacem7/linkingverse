<template>
  <section id="methode" class="section">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">Méthode</span>
        <h2>Quatre étapes, un seul objectif : l'adoption.</h2>
      </div>
      <ol class="grid steps" style="--min: 230px">
        <li v-for="(s, i) in steps" :key="s.title" class="reveal" :style="{ '--i': i }">
          <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p class="muted">{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps { margin: 0; padding: 0; list-style: none; gap: 32px; }
li { position: relative; border-top: 1px solid var(--line-strong); padding-top: 24px; display: flex; flex-direction: column; gap: 8px; }
/* Trait noir qui se dessine sur chaque étape au défilement */
li::before { content: ''; position: absolute; top: -1px; left: 0; right: 0; height: 2px; background: var(--ink); transform-origin: left; }
li:not(:first-child)::before { transform: scaleX(0); }
.num { width: 36px; height: 36px; margin-top: -42px; margin-bottom: 8px; border-radius: 50%; display: grid; place-items: center; background: var(--paper); border: 1px solid var(--line-strong); font-family: var(--mono); font-size: 0.78rem; color: var(--ink); position: relative; transition: background-color .2s, color .2s; }
li:hover .num { background: var(--ink); color: #fff; border-color: var(--ink); }
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    li::before, li:not(:first-child)::before {
      transform: scaleX(0);
      animation: draw linear both;
      animation-timeline: view();
      animation-range: entry 40% cover 35%;
    }
  }
}
@keyframes draw { to { transform: scaleX(1); } }
</style>
