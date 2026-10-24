<!-- Schéma du hero : un agent IA relié aux outils de l'entreprise.
     Des impulsions circulent sur les liens, les outils s'allument tour à tour
     et un petit journal affiche ce que fait l'agent. Tout est en SVG/CSS. -->
<template>
  <div class="card">
    <div class="bar">
      <span>agent.workflow</span>
      <span class="status"><span class="dot dot--live" />actif</span>
    </div>
    <svg viewBox="0 0 860 220" role="img" aria-label="Schéma d'un agent IA reliant vos outils : emails, CRM, documents et tableurs">
      <defs>
        <path v-for="n in nodes" :id="`lv-path-${n.id}`" :key="n.id" :d="n.path" />
      </defs>
      <g stroke="var(--line-strong)" stroke-width="1.2" fill="none">
        <use v-for="n in nodes" :key="n.id" :href="`#lv-path-${n.id}`" />
      </g>
      <!-- impulsions -->
      <g v-for="(n, i) in nodes" :key="`p-${n.id}`">
        <circle r="3.5" fill="var(--accent)">
          <animateMotion :dur="'4s'" :begin="`${i}s`" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
            <mpath :href="`#lv-path-${n.id}`" />
          </animateMotion>
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" :dur="'4s'" :begin="`${i}s`" repeatCount="indefinite" />
        </circle>
      </g>
      <g class="core">
        <rect x="370" y="84" width="120" height="52" rx="14" fill="var(--ink)" />
        <text x="430" y="115" text-anchor="middle" fill="#fff" font-size="15" font-weight="600">Agent IA</text>
      </g>
      <g class="node" text-anchor="middle">
        <g v-for="(n, i) in nodes" :key="`n-${n.id}`" class="tool" :style="{ '--d': `${i + 3.1}s` }">
          <rect :x="n.x - 60" :y="n.y - 20" width="120" height="40" rx="10" fill="#fff" />
          <text :x="n.x" :y="n.y + 5">{{ n.label }}</text>
        </g>
      </g>
    </svg>
    <!-- Version compacte pour mobile, où le schéma serait illisible -->
    <div class="mini" aria-hidden="true">
      <span v-for="(n, i) in nodes.slice(0, 2)" :key="n.id" class="chip" :style="{ '--d': `${i + 3.1}s` }">{{ n.label }}</span>
      <span class="chip core-chip">Agent IA</span>
      <span v-for="(n, i) in nodes.slice(2)" :key="n.id" class="chip" :style="{ '--d': `${i + 5.1}s` }">{{ n.label }}</span>
    </div>
    <ol class="log" aria-label="Exemple de tâches réalisées par l'agent">
      <li v-for="(line, i) in agentLog" :key="line" :style="{ animationDelay: `${i * 1.6}s` }">{{ line }}</li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const nodes = [
  { id: 'emails', label: 'Emails', x: 150, y: 50, path: 'M150 50 C 260 50, 300 110, 430 110' },
  { id: 'crm', label: 'CRM', x: 710, y: 50, path: 'M710 50 C 600 50, 560 110, 430 110' },
  { id: 'docs', label: 'Documents', x: 150, y: 170, path: 'M150 170 C 260 170, 300 110, 430 110' },
  { id: 'sheets', label: 'Tableurs', x: 710, y: 170, path: 'M710 170 C 600 170, 560 110, 430 110' },
]
</script>

<style scoped>
.card { width: 100%; max-width: 920px; border: 1px solid var(--line); border-radius: 20px; background: rgb(250 250 251 / 0.9); backdrop-filter: blur(4px); padding: 24px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 1px 2px rgb(10 10 11 / 0.04), 0 24px 48px -24px rgb(10 10 11 / 0.12); }
.bar { display: flex; justify-content: space-between; font-family: var(--mono); font-size: 0.75rem; color: var(--faint); }
.status { display: inline-flex; align-items: center; gap: 8px; }
svg { width: 100%; height: auto; font-family: var(--sans); overflow: visible; }
.node text { font-family: var(--mono); font-size: 13px; fill: var(--ink-2); }
.tool rect { stroke: var(--line-strong); stroke-width: 1; animation: light-rect 4s infinite; animation-delay: var(--d); }
@keyframes light-rect {
  0%, 100% { stroke: var(--line-strong); }
  8%, 30% { stroke: var(--accent); }
}
.core { transform-origin: 430px 110px; transform-box: view-box; animation: beat 1s ease-in-out infinite; }
@keyframes beat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }

.log { list-style: none; margin: 0; padding: 12px 0 0; border-top: 1px dashed var(--line-strong); display: grid; gap: 4px; text-align: left; font-family: var(--mono); font-size: 0.78rem; color: var(--muted); min-height: 5.4em; }
.log li { opacity: 0; animation: log 6.4s infinite; }
.log li:last-child { color: var(--ink); }
@keyframes log {
  0% { opacity: 0; transform: translateX(-6px); }
  5%, 80% { opacity: 1; transform: none; }
  90%, 100% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .log li { animation: none; opacity: 1; }
  .core, .tool rect { animation: none; }
}
.mini { display: none; }
@media (max-width: 560px) {
  .card { padding: 16px; }
  svg { display: none; }
  .mini { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; padding: 8px 0 4px; }
  .chip { font-family: var(--mono); font-size: 0.75rem; padding: 8px 12px; border-radius: 10px; background: #fff; border: 1px solid var(--line-strong); color: var(--ink-2); animation: light-chip 4s infinite; animation-delay: var(--d); }
  .core-chip { background: var(--ink); color: #fff; border-color: var(--ink); animation: none; }
}
@keyframes light-chip { 0%, 100% { border-color: var(--line-strong); } 8%, 30% { border-color: var(--accent); } }
</style>
