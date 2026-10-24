<!-- Logo Linking Verse au-dessus du titre, légèrement transparent, qui suit la souris.
     Le logo s'oriente vers le curseur, et chaque nœud bouge avec sa propre profondeur :
     les liens qui les relient s'étirent en conséquence.
     Sans souris (mobile) il flotte doucement ; avec prefers-reduced-motion il reste immobile. -->
<template>
  <div ref="root" class="hero-logo" aria-hidden="true">
    <svg viewBox="0 0 260 260" :style="{ transform: tilt }">
      <line v-for="(l, i) in links" :key="i" :x1="l.x1" :y1="l.y1" :x2="l.x2" :y2="l.y2" class="link" />
      <circle v-for="n in placed" :key="n.id" :cx="n.x" :cy="n.y" :r="R" :class="n.accent ? 'node node--accent' : 'node'" />
    </svg>
  </div>
</template>

<script setup lang="ts">
interface Node { id: string; x: number; y: number; depth: number; accent?: boolean }

const R = 35
// Mêmes positions que le logo du site (26 px), multipliées par 10
const nodes: Node[] = [
  { id: 'a', x: 60, y: 60, depth: 1 },
  { id: 'b', x: 200, y: 90, depth: 0.55 },
  { id: 'c', x: 100, y: 200, depth: 1.5, accent: true },
]
const pairs: [number, number][] = [[0, 1], [1, 2], [0, 2]]

const root = ref<HTMLElement | null>(null)
// Position lissée du curseur, de -1 à 1 sur chaque axe (0 = centre du hero)
const pos = reactive({ x: 0, y: 0 })

const placed = computed(() => nodes.map((n) => ({ ...n, x: n.x + pos.x * n.depth * 14, y: n.y + pos.y * n.depth * 14 })))

// Liens tracés d'un bord de cercle à l'autre, comme dans le logo
const links = computed(() => pairs.map(([i, j]) => {
  const a = placed.value[i]!
  const b = placed.value[j]!
  const dx = b.x - a.x
  const dy = b.y - a.y
  const d = Math.hypot(dx, dy) || 1
  const gap = R + 8
  return { x1: a.x + (dx / d) * gap, y1: a.y + (dy / d) * gap, x2: b.x - (dx / d) * gap, y2: b.y - (dy / d) * gap }
}))

const tilt = computed(() => `perspective(900px) rotateY(${pos.x * 14}deg) rotateX(${-pos.y * 14}deg)`)

onMounted(() => {
  const el = root.value
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const hero = el.closest('section') ?? el
  const target = { x: 0, y: 0 }
  const finePointer = window.matchMedia('(pointer: fine)').matches
  let frame = 0
  let visible = true
  const start = performance.now()

  const onMove = (e: PointerEvent) => {
    const r = hero.getBoundingClientRect()
    target.x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1))
    target.y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1))
  }
  const onLeave = () => { target.x = 0; target.y = 0 }

  const tick = (now: number) => {
    if (!finePointer) {
      // Écran tactile : lente dérive circulaire
      const t = (now - start) / 1000
      target.x = Math.sin(t * 0.5) * 0.5
      target.y = Math.cos(t * 0.4) * 0.4
    }
    pos.x += (target.x - pos.x) * 0.07
    pos.y += (target.y - pos.y) * 0.07
    frame = visible ? requestAnimationFrame(tick) : 0
  }

  // On ne calcule rien quand le hero n'est plus à l'écran
  const io = new IntersectionObserver(([entry]) => {
    visible = !!entry?.isIntersecting
    if (visible && !frame) frame = requestAnimationFrame(tick)
  })
  io.observe(hero)

  if (finePointer) {
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
  }
  frame = requestAnimationFrame(tick)

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    io.disconnect()
    window.removeEventListener('pointermove', onMove)
    document.documentElement.removeEventListener('pointerleave', onLeave)
  })
})
</script>

<style scoped>
.hero-logo {
  pointer-events: none;
  width: clamp(104px, 12vw, 140px); aspect-ratio: 1; max-width: 100%;
  margin-bottom: -4px;
}
svg { width: 100%; height: 100%; overflow: visible; will-change: transform; }
.node { fill: var(--paper); stroke: rgb(10 10 11 / 0.32); stroke-width: 12; }
.node--accent { fill: rgb(47 91 255 / 0.6); stroke: none; }
.link { stroke: rgb(10 10 11 / 0.32); stroke-width: 9; stroke-linecap: round; }
</style>
