<template>
  <section id="faq" class="section section--soft">
    <div class="wrap narrow">
      <h2 class="reveal">Questions fréquentes</h2>
      <div class="list reveal">
        <details v-for="item in faq" :key="item.q">
          <summary>{{ item.q }}</summary>
          <p class="muted">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.narrow { max-width: 820px; }
.list { margin-top: 32px; border-bottom: 1px solid var(--line-strong); }
details { border-top: 1px solid var(--line-strong); padding: 20px 0; }
summary { cursor: pointer; font-size: 1.1rem; font-weight: 500; list-style: none; display: flex; justify-content: space-between; gap: 16px; }
summary::-webkit-details-marker { display: none; }
summary::after { content: '+'; font-family: var(--mono); color: var(--faint); transition: transform .2s; }
details[open] summary::after { transform: rotate(45deg); }
details p { margin-top: 12px; }
summary { transition: color .2s; }
summary:hover { color: var(--accent); }
/* Ouverture fluide là où le navigateur sait animer la hauteur */
.list { interpolate-size: allow-keywords; }
details::details-content { height: 0; overflow: clip; transition: height .3s ease, content-visibility .3s allow-discrete; }
details[open]::details-content { height: auto; }
</style>
