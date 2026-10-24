<template>
  <section id="faq" class="section section--soft">
    <div class="wrap narrow">
      <h2>Questions fréquentes</h2>
      <div class="list">
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
</style>
