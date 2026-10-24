<template>
  <section id="formations" class="section section--soft">
    <div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Formations</span>
        <h2>Trois parcours, du premier prompt au premier agent.</h2>
      </div>
      <div class="grid" style="--min: 320px">
        <article v-for="f in formations" :key="f.id" class="card" :class="{ featured: f.featured }">
          <div class="meta">
            <span>{{ f.level }} · {{ f.duration }}</span>
            <span v-if="f.featured" class="tag"><span class="dot" />Le plus demandé</span>
          </div>
          <h3>{{ f.title }}</h3>
          <p class="muted">{{ f.summary }}</p>
          <ul>
            <li v-for="p in f.points" :key="p">{{ p }}</li>
          </ul>
          <div class="price">{{ f.price }}</div>
        </article>
      </div>
      <p class="formats">En présentiel ou à distance · intra-entreprise · [MENTION QUALIOPI / OPCO SI APPLICABLE]</p>
    </div>
  </section>
</template>

<style scoped>
.card { border: 1px solid var(--line-strong); border-radius: var(--radius); background: var(--paper); padding: 28px; display: flex; flex-direction: column; gap: 16px; }
.card.featured { border-color: var(--ink); }
.card h3 { font-size: 1.45rem; letter-spacing: -0.02em; }
.meta { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; font-family: var(--mono); font-size: 0.75rem; color: var(--faint); }
.tag { display: inline-flex; align-items: center; gap: 6px; color: var(--ink); }
ul { margin: 0; padding-left: 18px; color: var(--ink-2); font-size: 0.95rem; display: flex; flex-direction: column; gap: 4px; }
.price { margin-top: auto; padding-top: 16px; border-top: 1px solid var(--line); font-weight: 600; }
.formats { margin-top: 28px; color: var(--faint); font-size: 0.9rem; }
</style>
