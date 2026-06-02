<script setup>
import { ref } from 'vue'

const coordonnees = [
  { label: 'Email',    value: 'ericschmolzlin@gmail.com',     href: 'mailto:ericschmolzlin@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/eric-schmoezlin', href: 'https://www.linkedin.com/in/eric-schmoelzlin-824274220' },
  { label: 'GitHub',   value: 'github.com/Amsha67',      href: 'https://github.com/Amsha67' },
  { label: 'Lieu',     value: 'Strasbourg, Grand Est',          href: null },
]

// État formulaire (envoi non implémenté, juste la structure)
const form = ref({
  nom: '',
  email: '',
  message: '',
})
const isSent = ref(false)

const handleSubmit = () => {
  // Pour l'oral : mailto: avec contenu pré-rempli
  // Pour plus tard : intégration Formspree, EmailJS ou backend Node
  const subject = encodeURIComponent(`Contact portfolio — ${form.value.nom}`)
  const body = encodeURIComponent(`De : ${form.value.nom}\nEmail : ${form.value.email}\n\n${form.value.message}`)
  window.location.href = `mailto:ericschmolzlin@gmail.com?subject=${subject}&body=${body}`
  isSent.value = true
}
</script>

<template>
  <section class="contact-page" id="contact">
    <div class="page-inner">

      <header class="page-header">
        <p class="page-eyebrow">Contact</p>
        <h1 class="page-title">Travaillons <em>ensemble</em></h1>
        <p class="page-subtitle">
          Disponible pour des missions ( création de sites web ) , une alternance en deuxieme année
          ou simplement pour échanger sur un projet.
        </p>
      </header>

      <div class="contact-grid">

        <!-- Coordonnées -->
        <aside class="coordonnees">
          <h2 class="block-title">Coordonnées</h2>
          <dl class="coord-list">
            <div v-for="coord in coordonnees" :key="coord.label" class="coord-item">
              <dt>{{ coord.label }}</dt>
              <dd>
                <a v-if="coord.href" :href="coord.href" target="_blank" rel="noopener">
                  {{ coord.value }}
                  <span class="arrow" aria-hidden="true">↗</span>
                </a>
                <span v-else>{{ coord.value }}</span>
              </dd>
            </div>
          </dl>
        </aside>

        <!-- Formulaire -->
        <form class="contact-form" @submit.prevent="handleSubmit">
          <h2 class="block-title">Envoyer un message</h2>

          <div class="field">
            <label for="nom">Nom</label>
            <input
              id="nom"
              v-model="form.nom"
              type="text"
              required
              autocomplete="name"
              placeholder="Votre nom"
            />
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              autocomplete="email"
              placeholder="votre@email.com"
            />
          </div>

          <div class="field">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button type="submit" class="submit-btn">
            Envoyer
            <span class="arrow" aria-hidden="true">→</span>
          </button>

          <p v-if="isSent" class="form-sent">
            Votre client mail s'est ouvert avec le message pré-rempli.
          </p>

          <p class="form-info">
            Ce formulaire ouvre votre client mail avec le message pré-rempli.
            Vous pouvez aussi écrire directement à
            <a href="mailto:ericschmolzlin@gmail.com">ericschmolzlin@gmail.com</a>.
          </p>
        </form>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  padding: 7rem 2.5rem 6rem;
  min-height: 100vh;
}

.page-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 4rem;
  max-width: 720px;
}

.page-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 1rem;
  transition: color 0.5s ease;
}

.page-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin: 0 0 1.25rem;
  color: var(--text);
  transition: color 0.5s ease;
}

.page-title em {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  color: var(--accent);
  transition: color 0.5s ease;
}

.page-subtitle {
  font-size: 1.05rem;
  color: var(--text-soft);
  margin: 0;
  line-height: 1.65;
  transition: color 0.5s ease;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;
}

.block-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
  letter-spacing: -0.01em;
  color: var(--text);
  transition: color 0.5s ease;
}

/* Coordonnées */
.coord-list {
  margin: 0;
}

.coord-item {
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.coord-item:first-child { padding-top: 0; }
.coord-item:last-child { border-bottom: none; }

.coord-item dt {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
  transition: color 0.5s ease;
}

.coord-item dd {
  margin: 0;
  font-size: 0.95rem;
  color: var(--text);
  transition: color 0.5s ease;
}

.coord-item dd a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.coord-item dd a:hover { color: var(--accent); }

.coord-item .arrow {
  font-size: 0.85em;
  opacity: 0.5;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.coord-item dd a:hover .arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}

/* Formulaire */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.field label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.5s ease;
}

.field input,
.field textarea {
  padding: 0.85rem 1rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border-strong);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: auto;
}

.field textarea { min-height: 120px; }

.field input::placeholder,
.field textarea::placeholder {
  color: var(--text-dim);
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--accent);
  background: var(--bg);
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  align-self: flex-start;
  padding: 0.85rem 1.75rem;
  background: var(--accent);
  color: var(--bg);
  border: none;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: var(--accent-soft);
}

.submit-btn:hover .arrow {
  transform: translateX(3px);
}

.submit-btn .arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.form-sent {
  margin: 0;
  font-size: 0.9rem;
  color: var(--accent);
  transition: color 0.5s ease;
}

.form-info {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
  transition: color 0.5s ease;
}

.form-info a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.3s ease;
}

.form-info a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
}

@media (max-width: 640px) {
  .contact-page { padding: 5rem 1.25rem 4rem; }
}
</style>