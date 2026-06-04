<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const links = [
  { label: 'À propos',    href: '/#presentation' },
  { label: 'Projets',     href: '/projets' },
  { label: 'Compétences', href: '/competences' },
  { label: 'Contact',     href: '/contact' },
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const route = useRoute()
watch(() => route.fullPath, () => closeMenu())
</script>

<template>
  <header class="site-header" :class="{ 'menu-open': isMenuOpen }">
    <RouterLink to="/" class="brand" @click="closeMenu">Eric Schmoezlin</RouterLink>

    <nav class="main-nav" aria-label="Navigation principale">
      <a v-for="link in links" :key="link.href" :href="link.href">
        {{ link.label }}
      </a>
    </nav>

    <div class="header-actions">
      <ThemeToggle />
      <button
        class="burger-btn"
        :class="{ 'is-open': isMenuOpen }"
        @click="toggleMenu"
        :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="isMenuOpen"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </div>
  </header>

  <!--  le panneau mobile sort du header, en frère -->
  <Teleport to="body">
    <Transition name="mobile-menu">
      <nav v-if="isMenuOpen" class="mobile-nav" aria-label="Navigation mobile">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </nav>
    </Transition>
  </Teleport>
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

.site-header.menu-open {
  background: var(--bg);
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

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}

.burger-line {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text);
  transition: all 0.3s ease;
  transform-origin: center;
}

.burger-btn.is-open .burger-line:nth-child(1) {
  transform: translateY(6.5px) rotate(45deg);
}
.burger-btn.is-open .burger-line:nth-child(2) {
  opacity: 0;
}
.burger-btn.is-open .burger-line:nth-child(3) {
  transform: translateY(-6.5px) rotate(-45deg);
}

@media (max-width: 720px) {
  .site-header { padding: 1rem 1.25rem; }
  .main-nav { display: none; }
  .burger-btn { display: inline-flex; }
}
</style>

<!-- Styles du menu mobile  -->
<style>
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  background: var(--bg);
  padding: 6rem 2rem 2rem;
  overflow-y: auto;
}

.mobile-nav a {
  color: var(--text);
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}

.mobile-nav a:hover { color: var(--accent); }

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>