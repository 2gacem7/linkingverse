<template>
  <header class="header">
    <nav class="wrap nav" aria-label="Navigation principale">
      <a href="/" class="brand">
        <BrandMark />
        <span>Linking Verse</span>
      </a>
      <div class="links">
        <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
        <a href="/#contact" class="btn btn--primary cta">Réserver un appel <span class="arrow" aria-hidden="true">→</span></a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header { position: sticky; top: 0; z-index: 10; background: rgb(255 255 255 / 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); }
.nav { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px 16px; padding-block: 14px; }
.brand { display: flex; align-items: center; gap: 10px; text-decoration: none; font-weight: 600; font-size: 1.1rem; letter-spacing: -0.02em; }
.links { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 28px; font-size: 0.95rem; }
.links a:not(.btn) { color: var(--muted); text-decoration: none; padding: 10px 0; }
.links a:not(.btn):hover { color: var(--ink); }
.links a:not(.btn) { position: relative; }
.links a:not(.btn)::after { content: ''; position: absolute; left: 0; right: 0; bottom: 6px; height: 1px; background: var(--ink); transform: scaleX(0); transform-origin: left; transition: transform .25s; }
.links a:not(.btn):hover::after { transform: scaleX(1); }
@supports (animation-timeline: scroll()) {
  .header { animation: raise linear both; animation-timeline: scroll(); animation-range: 0 160px; }
}
@keyframes raise { to { background: rgb(255 255 255 / 0.95); box-shadow: 0 8px 24px -12px rgb(10 10 11 / 0.12); } }
.cta { min-height: 40px; padding: 8px 16px; border-radius: 10px; }
@media (max-width: 720px) {
  .header { position: static; }
  .links { gap: 0 20px; }
}
</style>
