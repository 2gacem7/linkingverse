<script setup lang="ts">
const { linkedinUrl } = useRuntimeConfig().public
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap inner">
      <span>© {{ year }} Linking Verse</span>
      <div class="links">
        <a href="/mentions-legales">Mentions légales</a>
        <a :href="linkedinUrl" rel="noopener" target="_blank">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { border-top: 1px solid var(--line); }
.inner { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; padding-block: 28px; font-size: 0.85rem; color: var(--faint); }
.links { display: flex; flex-wrap: wrap; gap: 24px; }
.links a { color: var(--faint); }
.links a:hover { color: var(--ink); }
</style>
