<template>
  <section id="methode" class="section">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Méthode</span>
        <h2>Quatre étapes, un seul objectif : l'adoption.</h2>
      </div>
      <ol class="grid" style="--min: 230px">
        <li v-for="(s, i) in steps" :key="s.title" :class="{ first: i === 0 }">
          <span class="eyebrow">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ s.title }}</h3>
          <p class="muted">{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
ol { margin: 0; padding: 0; list-style: none; gap: 32px; }
li { border-top: 1px solid var(--line-strong); padding-top: 20px; display: flex; flex-direction: column; gap: 8px; }
li.first { border-top-color: var(--ink); }
</style>
