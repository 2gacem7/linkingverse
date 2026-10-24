<script setup lang="ts">
// Le site est statique : le formulaire prépare un email dans la messagerie du visiteur.
// Pour recevoir les demandes sans passer par sa messagerie, brancher plus tard un service de formulaire.
const { contactEmail } = useRuntimeConfig().public

const form = reactive({ nom: '', entreprise: '', email: '', formation: formations[0]?.title ?? '', message: '' })

function submit() {
  const subject = `Demande de formation — ${form.entreprise || form.nom}`
  const body = [
    `Nom : ${form.nom}`,
    `Entreprise : ${form.entreprise}`,
    `Email : ${form.email}`,
    `Formation : ${form.formation}`,
    '',
    form.message,
  ].join('\n')
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <section id="contact" class="section">
    <div class="wrap contact">
      <div class="intro">
        <span class="eyebrow">Contact</span>
        <h2 class="big">Prêt à former vos équipes ?</h2>
        <p class="muted">Parlons de vos besoins lors d'un appel de 30 minutes, sans engagement.</p>
        <p class="coords">
          <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a><br>
          [VOTRE TÉLÉPHONE]
        </p>
      </div>
      <form class="form" @submit.prevent="submit">
        <div class="grid" style="--min: 180px">
          <label class="field">Nom
            <input v-model="form.nom" type="text" name="nom" autocomplete="name" required>
          </label>
          <label class="field">Entreprise
            <input v-model="form.entreprise" type="text" name="entreprise" autocomplete="organization" required>
          </label>
        </div>
        <label class="field">Email professionnel
          <input v-model="form.email" type="email" name="email" autocomplete="email" required>
        </label>
        <label class="field">Formation qui vous intéresse
          <select v-model="form.formation" name="formation">
            <option v-for="f in formations" :key="f.id">{{ f.title }}</option>
            <option>Je ne sais pas encore</option>
          </select>
        </label>
        <label class="field">Votre besoin
          <textarea v-model="form.message" name="message" rows="4" />
        </label>
        <button type="submit" class="btn btn--primary">Envoyer ma demande</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr)); gap: 56px; }
.intro { display: flex; flex-direction: column; gap: 18px; }
.big { font-size: clamp(2.3rem, 5vw, 3.75rem); line-height: 1.04; letter-spacing: -0.045em; }
.coords { font-family: var(--mono); font-size: 0.95rem; color: var(--ink-2); }
.form { border: 1px solid var(--line-strong); border-radius: var(--radius); padding: 28px; display: flex; flex-direction: column; gap: 16px; }
</style>
