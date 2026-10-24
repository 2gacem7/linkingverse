<!-- Schéma du hero : un agent IA relié aux outils de l'entreprise. Les liens actifs prennent la couleur d'accent. -->
<template>
  <div class="card">
    <div class="bar"><span>agent.workflow</span><span>● actif</span></div>
    <svg viewBox="0 0 860 220" role="img" aria-label="Schéma d'un agent IA reliant vos outils : emails, CRM, documents et tableurs">
      <g stroke="var(--line-strong)" stroke-width="1.2" fill="none">
        <path d="M430 110 C 300 110, 260 50, 150 50" />
        <path d="M430 110 C 300 110, 260 170, 150 170" />
        <path d="M430 110 C 560 110, 600 50, 710 50" />
        <path d="M430 110 C 560 110, 600 170, 710 170" />
      </g>
      <g stroke="var(--accent)" stroke-width="1.8" fill="none" class="flow">
        <path d="M430 110 C 560 110, 600 50, 710 50" />
        <path d="M430 110 C 300 110, 260 170, 150 170" />
      </g>
      <rect x="370" y="84" width="120" height="52" rx="14" fill="var(--ink)" />
      <text x="430" y="115" text-anchor="middle" fill="#fff" font-size="15" font-weight="600">Agent IA</text>
      <g class="node" text-anchor="middle">
        <template v-for="n in nodes" :key="n.label">
          <rect :x="n.x - 60" :y="n.y - 20" width="120" height="40" rx="10" fill="#fff" :stroke="n.active ? 'var(--accent)' : 'var(--line-strong)'" />
          <text :x="n.x" :y="n.y + 5">{{ n.label }}</text>
        </template>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
const nodes = [
  { label: 'Emails', x: 150, y: 50, active: false },
  { label: 'Documents', x: 150, y: 170, active: true },
  { label: 'CRM', x: 710, y: 50, active: true },
  { label: 'Tableurs', x: 710, y: 170, active: false },
]
</script>

<style scoped>
.card { width: 100%; max-width: 920px; border: 1px solid var(--line); border-radius: 20px; background: var(--soft); padding: 24px; display: flex; flex-direction: column; gap: 12px; }
.bar { display: flex; justify-content: space-between; font-family: var(--mono); font-size: 0.75rem; color: var(--faint); }
svg { width: 100%; height: auto; font-family: var(--sans); }
.node text { font-family: var(--mono); font-size: 13px; fill: var(--ink-2); }
.flow path { stroke-dasharray: 6 6; animation: flow 1.6s linear infinite; }
@keyframes flow { to { stroke-dashoffset: -24; } }
@media (prefers-reduced-motion: reduce) { .flow path { animation: none; stroke-dasharray: none; } }
</style>
