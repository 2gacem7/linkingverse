<template>
  <section id="formations" class="section section--soft">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">Formations</span>
        <h2>Trois parcours, du premier prompt au premier agent.</h2>
      </div>
      <div class="grid" style="--min: 320px">
        <article v-for="f in formations" :key="f.id" class="card reveal" :class="{ featured: f.featured }">
          <div class="top">
            <span class="icon" aria-hidden="true">
              <svg v-if="f.id === 'initiation'" viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4z" /><path d="M8 9h8M8 12h5" /></svg>
              <svg v-else-if="f.id === 'agents'" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><circle cx="4.5" cy="5" r="2" /><circle cx="19.5" cy="5" r="2" /><circle cx="4.5" cy="19" r="2" /><circle cx="19.5" cy="19" r="2" /><path d="M6 6.5 9.8 10M18 6.5 14.2 10M6 17.5l3.8-3.5M18 17.5l-3.8-3.5" /></svg>
              <svg v-else viewBox="0 0 24 24"><path d="M3 20h18" /><path d="M6 16v-4M11 16V8M16 16v-6" /><path d="m4 9 6-5 4 3 6-4" /></svg>
            </span>
            <span v-if="f.featured" class="tag"><span class="dot dot--live" />Le plus demandé</span>
          </div>
          <span class="meta">{{ f.level }} · {{ f.duration }}</span>
          <h3>{{ f.title }}</h3>
          <p class="muted">{{ f.summary }}</p>
          <ul>
            <li v-for="p in f.points" :key="p">
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7" /></svg>{{ p }}
            </li>
          </ul>
          <div class="foot">
            <span class="price">{{ f.price }}</span>
            <a href="#contact" class="more">Demander le programme <span class="arrow" aria-hidden="true">→</span></a>
          </div>
        </article>
      </div>
      <p class="formats reveal">En présentiel ou à distance · intra-entreprise · [MENTION QUALIOPI / OPCO SI APPLICABLE]</p>
    </div>
  </section>
</template>

<style scoped>
.card { position: relative; border: 1px solid var(--line-strong); border-radius: var(--radius); background: var(--paper); padding: 28px; display: flex; flex-direction: column; gap: 14px; transition: transform .25s, box-shadow .25s, border-color .25s; }
.card:hover { transform: translateY(-4px); border-color: var(--ink); box-shadow: 0 24px 48px -28px rgb(10 10 11 / 0.25); }
.card.featured { border-color: var(--ink); }
.card h3 { font-size: 1.45rem; letter-spacing: -0.02em; }
.top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.icon { width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--line-strong); display: grid; place-items: center; transition: background-color .25s, border-color .25s; }
.icon svg { width: 22px; height: 22px; fill: none; stroke: var(--ink); stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; transition: stroke .25s; }
.card:hover .icon { background: var(--ink); border-color: var(--ink); }
.card:hover .icon svg { stroke: #fff; }
.tag { display: inline-flex; align-items: center; gap: 6px; font-family: var(--mono); font-size: 0.75rem; color: var(--ink); }
.meta { font-family: var(--mono); font-size: 0.75rem; color: var(--faint); }
ul { list-style: none; margin: 0; padding: 0; color: var(--ink-2); font-size: 0.95rem; display: flex; flex-direction: column; gap: 6px; }
li { display: flex; gap: 8px; align-items: flex-start; }
li svg { width: 16px; height: 16px; margin-top: 4px; flex: none; fill: none; stroke: var(--accent); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.foot { margin-top: auto; padding-top: 16px; border-top: 1px solid var(--line); display: flex; flex-direction: column; align-items: flex-start; gap: 4px; }
.price { font-weight: 600; }
.more { font-size: 0.9rem; font-weight: 500; text-decoration: none; padding: 10px 0 0; color: var(--ink-2); }
.more:hover { color: var(--ink); }
.more .arrow { display: inline-block; transition: transform .2s; }
.card:hover .more .arrow { transform: translateX(3px); }
.formats { margin-top: 28px; color: var(--faint); font-size: 0.9rem; }
</style>
