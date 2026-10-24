<template>
  <section class="values" aria-label="Notre approche">
    <div class="wrap grid" style="--min: 260px">
      <div v-for="v in values" :key="v.title" class="item">
        <h3>{{ v.title }}</h3>
        <p class="muted">{{ v.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.values { border-top: 1px solid var(--line); padding-block: 72px; }
.grid { gap: 40px; }
.item { display: flex; flex-direction: column; gap: 8px; }
</style>
