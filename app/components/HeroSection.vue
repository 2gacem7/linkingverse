<template>
  <section class="wrap hero">
    <span class="pill"><span class="dot" />Formation en IA générative &amp; agents IA</span>
    <h1>Faites de l'IA un réflexe dans votre entreprise.</h1>
    <p class="lede">
      Linking Verse forme vos équipes à l'IA générative et aux agents IA, avec des ateliers concrets
      construits sur vos propres cas d'usage.
    </p>
    <div class="actions">
      <a href="#contact" class="btn btn--primary">Parler de votre projet</a>
      <a href="#formations" class="btn btn--ghost">Voir les formations</a>
    </div>
    <AgentDiagram class="diagram" />
  </section>
</template>

<style scoped>
.hero { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 28px; padding-block: clamp(72px, 10vw, 112px) clamp(64px, 8vw, 96px); }
.hero h1 { max-width: 13em; }
.pill { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--line-strong); border-radius: 999px; padding: 6px 14px; font-family: var(--mono); font-size: 0.8rem; color: var(--muted); }
.actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
.diagram { margin-top: 40px; }
</style>
