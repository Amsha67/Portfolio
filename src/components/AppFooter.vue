<script setup>
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()

const footerLinks = [
 
  { label: 'Mentions légales', to: '/mentions-legales' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/eric-schmoezlin' },
  { label: 'GitHub',   href: 'https://github.com/ericschmoezlin' },
  { label: 'Email',    href: 'mailto:contact@ericschmoezlin.fr' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">

      <div class="footer-block footer-brand">
        <p class="brand-name">Eric Schmoezlin</p>
        <p class="brand-tagline">· Étudiant BTS SIO SLAM <br> · Développeur <br>· Strasbourg</p>
      </div>

      <nav class="footer-block footer-nav" aria-label="Navigation pied de page">
        <p class="block-label"></p>
        <ul>
          <li v-for="link in footerLinks" :key="link.to">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="footer-block footer-social">
        <p class="block-label">Réseaux</p>
        <ul>
          <li v-for="social in socialLinks" :key="social.href">
            <a :href="social.href" target="_blank" rel="noopener">
              {{ social.label }}
              <span class="arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p class="copyright">© {{ year }} Eric Schmoezlin. Tous droits réservés.</p>
      <p class="stack-info">Vue 3 · Vite · Vercel</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--bg-elevated);
  border-top: 1px solid var(--border);
  padding: 5rem 2.5rem 2.5rem;
  transition: background 0.5s ease, border-color 0.5s ease;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.footer-block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-name {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text);
  margin: 0;
  transition: color 0.5s ease;
}

.brand-tagline {
  font-size: 0.88rem;
  color: var(--text-soft);
  line-height: 1.55;
  margin: 0;
  max-width: 320px;
  transition: color 0.5s ease;
}

.block-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 0.5rem;
  transition: color 0.5s ease;
}

.footer-block ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-block a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  color: var(--text-soft);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-block a:hover {
  color: var(--accent);
}

.footer-block .arrow {
  font-size: 0.85em;
  opacity: 0.5;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.footer-block a:hover .arrow {
  opacity: 1;
  transform: translate(2px, -2px);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  transition: border-color 0.5s ease;
}

.copyright,
.stack-info {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  margin: 0;
  letter-spacing: 0.05em;
  transition: color 0.5s ease;
}

@media (max-width: 720px) {
  .site-footer { padding: 3.5rem 1.25rem 2rem; }
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
}
</style>