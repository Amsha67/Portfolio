<script setup>
import { ref, watch } from 'vue'
import emailjs from '@emailjs/browser'

const coordonnees = [
  { label: 'Email',     value: 'ericschmolzlin@gmail.com',     href: 'mailto:ericschmolzlin@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/eric-schmoezlin', href: 'https://www.linkedin.com/in/eric-schmoelzlin-824274220' },
  { label: 'GitHub',   value: 'github.com/Amsha67',      href: 'https://github.com/Amsha67' },
  { label: 'Lieu',     value: 'Strasbourg, Grand Est',         href: null },
]

const form = ref({
  anti_robot: '',
  nom: '',
  email: '',
  message: '',
  rgpd: false
})

const isSent = ref(false)
const isLoading = ref(false)
const isError = ref(false)
const emailError = ref(false)

// Le Watcher observe 'form.value.email' pour la validation visuelle
watch(() => form.value.email, (nouvelleValeur) => {
  const regex = /^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,4}$/
  if (nouvelleValeur !== '' && !regex.test(nouvelleValeur)) {
    emailError.value = true
  } else {
    emailError.value = false
  }
})

const handleSubmit = async () => {
  // Anti-spam caché
  if (form.value.anti_robot !== '') {
    isSent.value = true
    return
  }

  isLoading.value = true
  isSent.value = false
  isError.value = false

  try {
    //  clés EmailJS 
    const SERVICE_ID = 'service_a11424q' 
    const TEMPLATE_ID = 'template_7lwq4fs'
    const PUBLIC_KEY = 'hZ5QZQ--T-uTjbd_k'

    const templateParams = {
      from_name: form.value.nom,
      reply_to: form.value.email,
      message: form.value.message,
    }

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

    isSent.value = true
    form.value = { anti_robot: '', nom: '', email: '', message: '', rgpd: false }
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message :', error)
    isError.value = true
  } finally {
    isLoading.value = false
  }
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

        <form class="contact-form" @submit.prevent="handleSubmit">
          <h2 class="block-title">Envoyer un message</h2>

          <div style="display: none;" aria-hidden="true">
            <input type="text" v-model="form.anti_robot" tabindex="-1" autocomplete="off" />
          </div>

          <div class="field">
            <label for="nom">Nom</label>
            <input
              id="nom"
              v-model="form.nom"
              type="text"
              required
              maxlength="50"
              autocomplete="name"
              placeholder="Votre nom"
              :disabled="isLoading"
            />
          </div>

          <div class="field">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              :class="{ 'input-error': emailError }"
              type="email"
              required
              autocomplete="email"
              placeholder="votre@email.com"
              :disabled="isLoading"
            />
            <span v-if="emailError" class="error-message">
              Le format de l'e-mail semble incorrect.
            </span>
          </div>

          <div class="field">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="6"
              placeholder="Votre message..."
              :disabled="isLoading"
            ></textarea>
          </div>

          <div class="rgpd-field">
            <input type="checkbox" id="rgpd" v-model="form.rgpd" required :disabled="isLoading" />
            <label for="rgpd">
              J'accepte que mes données soient utilisées pour être recontacté.
              Aucune donnée n'est conservée en base de données.
            </label>
          </div>

          <button type="submit" class="submit-btn" :disabled="isLoading || !form.rgpd || emailError">
            {{ isLoading ? 'Envoi en cours...' : 'Envoyer' }}
            <span class="arrow" aria-hidden="true" v-if="!isLoading">→</span>
          </button>

          <p v-if="isSent" class="form-sent" style="color: #10B981;">
            ✅ Votre message a bien été envoyé ! Je vous répondrai au plus vite.
          </p>
          <p v-if="isError" class="form-sent" style="color: #EF4444;">
            ❌ Une erreur est survenue lors de l'envoi. Veuillez réessayer.
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
.submit-btn:hover:not(:disabled) {
  background: var(--accent-soft);
}
.submit-btn:hover:not(:disabled) .arrow {
  transform: translateX(3px);
}
.submit-btn .arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}
.form-sent {
  margin: 0;
  font-size: 0.9rem;
  font-family: var(--font-body);
}

/* NOUVEAUX STYLES POUR LE FEEDBACK VISUEL ET RGPD */
.rgpd-field {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.rgpd-field input[type="checkbox"] {
  margin-top: 0.25rem;
  width: 1.15rem;
  height: 1.15rem;
  accent-color: var(--accent);
  cursor: pointer;
}
.rgpd-field label {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--text-soft);
  line-height: 1.5;
  text-transform: none;
  letter-spacing: normal;
  cursor: pointer;
}
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.field input.input-error {
  border-color: #EF4444;
  background-color: rgba(239, 68, 68, 0.05);
}
.field input.input-error:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}
.error-message {
  color: #EF4444;
  font-size: 0.75rem;
  font-family: var(--font-body);
  margin-top: 0.25rem;
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
}
@media (max-width: 640px) {
  .contact-page { padding: 5rem 1.25rem 4rem; }
}
</style>