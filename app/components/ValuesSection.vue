<!-- Les trois engagements, chacun illustré par une mini-interface animée. -->
<template>
  <section class="values" aria-label="Notre approche">
    <div class="wrap grid bento" style="--min: 300px">
      <!-- 1. Concret : une conversation -->
      <article class="card reveal">
        <div class="ui chat" aria-hidden="true">
          <div class="bubble me">Résume ce compte-rendu en 3 points pour le comité.</div>
          <div class="typing"><span /><span /><span /></div>
          <div class="bubble ai">
            <span class="line">1. Budget validé pour le T1</span>
            <span class="line">2. Recrutement de 2 profils data</span>
            <span class="line">3. Pilote IA lancé au service client</span>
          </div>
        </div>
        <h3>{{ values[0]?.title }}</h3>
        <p class="muted">{{ values[0]?.text }}</p>
      </article>

      <!-- 2. Pour tous : les métiers -->
      <article class="card reveal">
        <div class="ui roles" aria-hidden="true">
          <span v-for="(r, i) in roles" :key="r" class="role" :style="{ animationDelay: `${i * 0.8}s` }">
            <span class="dot" />{{ r }}
          </span>
        </div>
        <h3>{{ values[1]?.title }}</h3>
        <p class="muted">{{ values[1]?.text }}</p>
      </article>

      <!-- 3. Responsable : les garde-fous -->
      <article class="card reveal">
        <div class="ui checks" aria-hidden="true">
          <div v-for="(s, i) in safeguards" :key="s" class="check" :style="{ '--d': `${i * 0.7}s` }">
            <span>{{ s }}</span>
            <span class="toggle"><span class="knob" /></span>
          </div>
        </div>
        <h3>{{ values[2]?.title }}</h3>
        <p class="muted">{{ values[2]?.text }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.values { border-top: 1px solid var(--line); padding-block: 72px; }
.card { display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line); border-radius: var(--radius); padding: 20px 20px 24px; background: var(--paper); transition: border-color .2s, transform .2s, box-shadow .2s; }
.card:hover { border-color: var(--line-strong); transform: translateY(-3px); box-shadow: 0 18px 40px -24px rgb(10 10 11 / 0.18); }
.card h3 { margin-top: 10px; }
.ui { height: 188px; border-radius: 12px; background: var(--soft); border: 1px solid var(--line); padding: 16px; overflow: hidden; font-size: 0.82rem; }

/* Conversation */
.chat { display: flex; flex-direction: column; gap: 10px; }
.bubble { border-radius: 12px; padding: 8px 12px; max-width: 90%; line-height: 1.45; }
.me { align-self: flex-end; background: var(--ink); color: #fff; border-bottom-right-radius: 4px; }
.ai { align-self: flex-start; background: var(--paper); border: 1px solid var(--line); border-bottom-left-radius: 4px; display: flex; flex-direction: column; color: var(--ink-2); }
.typing { align-self: flex-start; display: flex; gap: 4px; padding: 10px 12px; background: var(--paper); border: 1px solid var(--line); border-radius: 12px; animation: typing 6s infinite; }
.typing span { width: 5px; height: 5px; border-radius: 50%; background: var(--faint); animation: blink 1s infinite; }
.typing span:nth-child(2) { animation-delay: .15s; }
.typing span:nth-child(3) { animation-delay: .3s; }
.ai { animation: answer 6s infinite; }
.line { opacity: 0; animation: line 6s infinite; }
.line:nth-child(2) { animation-delay: .35s; }
.line:nth-child(3) { animation-delay: .7s; }
@keyframes blink { 0%, 100% { opacity: .3; } 50% { opacity: 1; } }
@keyframes typing { 0%, 22% { display: flex; opacity: 1; } 23%, 100% { display: none; opacity: 0; } }
@keyframes answer { 0%, 22% { display: none; } 23%, 100% { display: flex; } }
@keyframes line { 0%, 25% { opacity: 0; transform: translateY(4px); } 32%, 92% { opacity: 1; transform: none; } 100% { opacity: 0; } }

/* Métiers */
.roles { display: flex; flex-wrap: wrap; align-content: center; justify-content: center; gap: 8px; }
.role { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: var(--paper); border: 1px solid var(--line-strong); color: var(--ink-2); animation: role 6.4s infinite; }
.role .dot { background: var(--line-strong); animation: role-dot 6.4s infinite; animation-delay: inherit; }
@keyframes role { 0%, 12% { border-color: var(--ink); color: var(--ink); transform: translateY(-2px); } 18%, 100% { border-color: var(--line-strong); transform: none; } }
@keyframes role-dot { 0%, 12% { background: var(--accent); } 18%, 100% { background: var(--line-strong); } }

/* Garde-fous */
.checks { display: flex; flex-direction: column; justify-content: center; gap: 10px; }
.check { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 10px 12px; background: var(--paper); border: 1px solid var(--line); border-radius: 10px; color: var(--ink-2); }
.toggle { width: 32px; height: 18px; border-radius: 999px; background: var(--line-strong); position: relative; flex: none; animation: toggle 5s infinite; animation-delay: var(--d); }
.knob { position: absolute; top: 2px; left: 2px; width: 14px; height: 14px; border-radius: 50%; background: #fff; box-shadow: 0 1px 2px rgb(0 0 0 / .2); animation: knob 5s infinite; animation-delay: var(--d); }
@keyframes toggle { 0%, 10% { background: var(--line-strong); } 16%, 90% { background: var(--accent); } 96%, 100% { background: var(--line-strong); } }
@keyframes knob { 0%, 10% { transform: none; } 16%, 90% { transform: translateX(14px); } 96%, 100% { transform: none; } }

@media (prefers-reduced-motion: reduce) {
  .typing { display: none; }
  .ai { display: flex; animation: none; }
  .line { opacity: 1; animation: none; }
  .role, .role .dot, .toggle, .knob { animation: none; }
  .toggle { background: var(--accent); }
  .knob { transform: translateX(14px); }
}
</style>
