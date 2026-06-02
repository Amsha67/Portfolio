<script setup>
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const links = [
  { label: 'À propos',    href: '/#presentation' },
  { label: 'Projets',     href: '/projets' },
  { label: 'Compétences', href: '/competences' },
  { label: 'Contact',     href: '/contact' },
]
</script>

<template>
  <header class="site-header">
    <RouterLink to="/" class="brand">Eric Schmoezlin</RouterLink>

    <nav class="main-nav" aria-label="Navigation principale">
      <a v-for="link in links" :key="link.href" :href="link.href">
        {{ link.label }}
      </a>
    </nav>

    <ThemeToggle />
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(12px);
  background: color-mix(in srgb, var(--bg) 80%, transparent);
  border-bottom: 1px solid var(--border);
  transition: background 0.5s ease, border-color 0.5s ease;
}

.brand {
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: -0.005em;
  transition: color 0.5s ease;
}

.main-nav {
  display: flex;
  gap: 2.5rem;
}

.main-nav a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 400;
  position: relative;
  transition: color 0.25s ease;
}

.main-nav a:hover { color: var(--text); }

@media (max-width: 720px) {
  .site-header { padding: 1rem 1.25rem; }
  .main-nav { display: none; }
}
</style>