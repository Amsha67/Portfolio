<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'

// Index de la première carte visible
const currentIndex = ref(0)
const visibleCount = ref(3)

const updateVisibleCount = () => {
  const width = window.innerWidth
  if (width < 640) visibleCount.value = 1
  else if (width < 1024) visibleCount.value = 2
  else visibleCount.value = 3
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVisibleCount)
})

const maxIndex = computed(() => Math.max(0, projects.length - visibleCount.value))
const canGoPrev = computed(() => currentIndex.value > 0)
const canGoNext = computed(() => currentIndex.value < maxIndex.value)

const prev = () => { if (canGoPrev.value) currentIndex.value-- }
const next = () => { if (canGoNext.value) currentIndex.value++ }

// Calcul de la translation pour faire glisser les cartes
const trackStyle = computed(() => ({
  transform: `translateX(calc(-${currentIndex.value} * (100% / ${visibleCount.value} + ${1.5 / visibleCount.value}rem)))`,
}))
</script>

<template>
  <section class="projects-preview" id="projets">
    <div class="section-inner">

      <header class="section-header">
        <p class="section-eyebrow">Réalisations</p>
        <h2 class="section-title">Projets <em>récents</em></h2>
        <p class="section-subtitle">
          Six projets en cours d'année, en formation comme en milieu
          professionnel. Documentation complète pour chacun.
        </p>
      </header>

      <div class="carousel-wrapper">
        <div class="carousel-track" :style="trackStyle">
          <div
            v-for="project in projects"
            :key="project.slug"
            class="carousel-slide"
            :style="{ flex: `0 0 calc((100% - ${(visibleCount - 1) * 1.5}rem) / ${visibleCount})` }"
          >
            <ProjectCard :project="project" />
          </div>
        </div>
      </div>

      <div class="carousel-controls">
        <div class="carousel-nav">
          <button
            class="nav-btn"
            :disabled="!canGoPrev"
            @click="prev"
            aria-label="Projet précédent"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div class="carousel-progress">
            <span class="progress-current">{{ String(currentIndex + 1).padStart(2, '0') }}</span>
            <span aria-hidden="true">/</span>
            <span>{{ String(maxIndex + 1).padStart(2, '0') }}</span>
          </div>

          <button
            class="nav-btn"
            :disabled="!canGoNext"
            @click="next"
            aria-label="Projet suivant"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <RouterLink to="/projets" class="see-all-link">
          Voir tous les projets <span class="arrow">→</span>
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.projects-preview {
  padding: 7rem 2.5rem;
  border-top: 1px solid var(--border);
  background: var(--bg-elevated);
  transition: border-color 0.5s ease, background 0.5s ease;
  overflow: hidden;
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  margin-bottom: 4rem;
  max-width: 700px;
}

.section-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 1rem;
  transition: color 0.5s ease;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.022em;
  color: var(--text);
  margin: 0 0 1rem;
  transition: color 0.5s ease;
}

.section-title em {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  color: var(--accent);
  transition: color 0.5s ease;
}

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-soft);
  margin: 0;
  transition: color 0.5s ease;
}

/* Carrousel */
.carousel-wrapper {
  overflow: hidden;
  margin-bottom: 2.5rem;
}

.carousel-track {
  display: flex;
  gap: 1.5rem;
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.carousel-slide {
  min-width: 0;
}

/* Controls */
.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.carousel-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid var(--border-strong);
  background: var(--bg);
  color: var(--text);
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-progress {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  transition: color 0.5s ease;
  min-width: 60px;
  justify-content: center;
}

.progress-current {
  color: var(--accent);
  font-weight: 500;
  transition: color 0.5s ease;
}

.see-all-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: gap 0.3s ease;
}

.see-all-link:hover { gap: 0.8rem; }

.see-all-link .arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

@media (max-width: 640px) {
  .projects-preview { padding: 4rem 1.25rem; }
  .carousel-controls { flex-direction: column; align-items: stretch; }
  .carousel-nav { justify-content: center; }
}
</style>