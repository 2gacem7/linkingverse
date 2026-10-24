<template>
  <div>
    <a href="#main" class="skip">Aller au contenu</a>
    <SiteHeader />
    <main id="main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.skip { position: absolute; left: -9999px; top: 8px; z-index: 20; background: var(--ink); color: var(--paper); padding: 8px 14px; border-radius: 10px; }
.skip:focus { left: 8px; }
</style>
