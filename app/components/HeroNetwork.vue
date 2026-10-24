<!-- Toile de nœuds reliés en arrière-plan du hero (canvas).
     Les nœuds dérivent lentement ; deux nœuds proches sont reliés par un trait fin.
     Près du curseur, les nœuds sont légèrement attirés et se relient à lui en bleu.
     Sans souris : la toile dérive seule. Avec prefers-reduced-motion : image fixe. -->
<template>
  <canvas ref="canvas" class="network" aria-hidden="true" />
</template>

<script setup lang="ts">
interface P { x: number; y: number; vx: number; vy: number; ox: number; oy: number }

const canvas = ref<HTMLCanvasElement | null>(null)

const INK = '10, 10, 11'
const ACCENT = '47, 91, 255'
const LINK = 130 // distance max entre deux nœuds reliés (px)
const REACH = 190 // rayon d'influence du curseur (px)

// Générateur pseudo-aléatoire fixe : la toile a toujours la même forme au chargement
function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

onMounted(() => {
  const el = canvas.value
  const ctx = el?.getContext('2d')
  if (!el || !ctx) return
  const hero = el.parentElement ?? el
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = window.matchMedia('(pointer: fine)').matches

  let w = 0
  let h = 0
  let points: P[] = []
  const mouse = { x: -9999, y: -9999, active: false }

  function setup() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    w = hero.clientWidth
    h = hero.clientHeight
    el!.width = w * dpr
    el!.height = h * dpr
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    // Densité proportionnelle à la surface, plafonnée pour rester fluide
    const count = Math.min(90, Math.round((w * h) / 16000))
    const rand = rng(7)
    points = Array.from({ length: count }, () => {
      const x = rand() * w
      const y = rand() * h
      return { x, y, ox: x, oy: y, vx: (rand() - 0.5) * 0.25, vy: (rand() - 0.5) * 0.25 }
    })
  }

  function draw() {
    ctx!.clearRect(0, 0, w, h)
    // Liens entre nœuds
    for (let i = 0; i < points.length; i++) {
      const a = points[i]!
      for (let j = i + 1; j < points.length; j++) {
        const b = points[j]!
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < LINK) {
          ctx!.strokeStyle = `rgba(${INK}, ${(1 - d / LINK) * 0.14})`
          ctx!.lineWidth = 1
          ctx!.beginPath()
          ctx!.moveTo(a.x, a.y)
          ctx!.lineTo(b.x, b.y)
          ctx!.stroke()
        }
      }
    }
    // Liens vers le curseur
    if (mouse.active) {
      for (const p of points) {
        const d = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        if (d < REACH) {
          ctx!.strokeStyle = `rgba(${ACCENT}, ${(1 - d / REACH) * 0.45})`
          ctx!.lineWidth = 1
          ctx!.beginPath()
          ctx!.moveTo(p.x, p.y)
          ctx!.lineTo(mouse.x, mouse.y)
          ctx!.stroke()
        }
      }
    }
    // Nœuds
    for (const p of points) {
      const near = mouse.active && Math.hypot(p.x - mouse.x, p.y - mouse.y) < REACH
      ctx!.fillStyle = near ? `rgba(${ACCENT}, 0.85)` : `rgba(${INK}, 0.22)`
      ctx!.beginPath()
      ctx!.arc(p.x, p.y, near ? 2.4 : 1.8, 0, Math.PI * 2)
      ctx!.fill()
    }
  }

  function step() {
    for (const p of points) {
      // Dérive autour de la position d'origine
      p.ox += p.vx
      p.oy += p.vy
      if (p.ox < 0 || p.ox > w) p.vx *= -1
      if (p.oy < 0 || p.oy > h) p.vy *= -1
      let tx = p.ox
      let ty = p.oy
      if (mouse.active) {
        const dx = mouse.x - p.ox
        const dy = mouse.y - p.oy
        const d = Math.hypot(dx, dy)
        if (d < REACH) {
          const pull = (1 - d / REACH) * 0.22
          tx += dx * pull
          ty += dy * pull
        }
      }
      p.x += (tx - p.x) * 0.12
      p.y += (ty - p.y) * 0.12
    }
  }

  let frame = 0
  let visible = true
  const loop = () => {
    step()
    draw()
    frame = visible ? requestAnimationFrame(loop) : 0
  }

  setup()
  for (const p of points) { p.x = p.ox; p.y = p.oy }
  draw()

  const ro = new ResizeObserver(() => { setup(); draw() })
  ro.observe(hero)
  onBeforeUnmount(() => ro.disconnect())
  if (still) return

  const onMove = (e: PointerEvent) => {
    const r = hero.getBoundingClientRect()
    mouse.x = e.clientX - r.left
    mouse.y = e.clientY - r.top
    mouse.active = mouse.y >= 0 && mouse.y <= r.height
  }
  const onLeave = () => { mouse.active = false }
  if (finePointer) {
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
  }

  const io = new IntersectionObserver(([entry]) => {
    visible = !!entry?.isIntersecting
    if (visible && !frame) frame = requestAnimationFrame(loop)
  })
  io.observe(hero)
  frame = requestAnimationFrame(loop)

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    io.disconnect()
    window.removeEventListener('pointermove', onMove)
    document.documentElement.removeEventListener('pointerleave', onLeave)
  })
})
</script>

<style scoped>
.network {
  position: absolute; inset: 0; z-index: -2; width: 100%; height: 100%; pointer-events: none;
  /* Plus discrète derrière le titre, estompée en bas */
  mask-image: radial-gradient(ellipse 42% 30% at 50% 30%, rgb(0 0 0 / 0.35), #000 75%), linear-gradient(#000 70%, transparent);
  mask-composite: intersect;
}
</style>
