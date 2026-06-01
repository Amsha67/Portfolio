<script setup>
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <section class="projects-page">
    <div class="page-inner">

      <header class="page-header">
        <p class="page-eyebrow">Tous les projets</p>
        <h1 class="page-title">Réalisations</h1>
        <p class="page-subtitle">
          Six projets en cours d'année, en formation comme en milieu
          professionnel. Chaque projet est documenté en détail.
        </p>
      </header>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.projects-page {
  padding: 7rem 2.5rem 6rem;
  min-height: 100vh;
}

.page-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 4rem;
  max-width: 700px;
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

.page-subtitle {
  font-size: 1.1rem;
  color: var(--text-soft);
  margin: 0;
  line-height: 1.65;
  max-width: 620px;
  transition: color 0.5s ease;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .projects-page { padding: 5rem 1.25rem 4rem; }
  .projects-grid { grid-template-columns: 1fr; }
}
</style>