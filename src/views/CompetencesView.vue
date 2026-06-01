<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { competenceGroups, stats } from '../data/competences'
import { projects } from '../data/projects'
import TableauSynthese from '../components/TableauSynthese.vue'

// État : compétence sélectionnée (pour afficher les projets liés en détail)
const selectedCompetence = ref(null)

// Helper : récupérer les détails complets des projets d'une compétence
const getCompetenceProjects = (competence) => {
  return competence.projects
    .map(slug => projects.find(p => p.slug === slug))
    .filter(Boolean)
}

const toggleCompetence = (comp) => {
  if (selectedCompetence.value?.code === comp.code) {
    selectedCompetence.value = null
  } else {
    selectedCompetence.value = comp
  }
}
</script>

<template>
  <section class="competences-page">
    <div class="page-inner">

      <header class="page-header">
        <p class="page-eyebrow">Référentiel BTS SIO SLAM</p>
        <h1 class="page-title">Compétences <em>E5</em></h1>
        <p class="page-subtitle">
          Tableau de synthèse de l'épreuve E5, format officiel BTS SIO option SLAM.
          Chaque compétence est rattachée aux projets qui la mobilisent.
        </p>
      </header>

      <!-- Stats globales -->
      <div class="stats-bar">
        <div class="stat">
          <span class="stat-value">{{ stats.validatedCompetences }}/{{ stats.totalCompetences }}</span>
          <span class="stat-label">compétences validées</span>
        </div>
        <div class="stat">
          <span class="stat-value">{{ stats.coverage }}%</span>
          <span class="stat-label">de couverture</span>
        </div>
        <div class="stat">
          <span class="stat-value">{{ projects.length }}</span>
          <span class="stat-label">projets référencés</span>
        </div>
      </div>

      <!-- Tableau de synthèse officiel -->
      <header class="section-block-header">
        <p class="section-eyebrow">Document officiel</p>
        <h2 class="section-title">Tableau de synthèse</h2>
        <p class="section-subtitle">
          Format requis pour l'épreuve E5. Cliquez sur le titre d'une réalisation
          pour accéder à sa documentation détaillée.
        </p>
      </header>

      <TableauSynthese />

      <!-- Vue détaillée par compétence -->
      <header class="section-block-header" style="margin-top: 5rem">
        <p class="section-eyebrow">Vue détaillée</p>
        <h2 class="section-title">Détail par compétence</h2>
        <p class="section-subtitle">
          Cliquez sur une compétence pour voir sa description complète et les
          projets qui la valident.
        </p>
      </header>

      <div v-for="group in competenceGroups" :key="group.code" class="competence-group">

        <ul class="competence-list">
          <li
            v-for="comp in group.competences"
            :key="comp.code"
            class="competence-row"
            :class="{ 'is-selected': selectedCompetence?.code === comp.code }"
          >
            <button class="competence-button" @click="toggleCompetence(comp)">
              <span class="competence-status" :class="{ 'is-validated': comp.projects.length > 0 }">
                <span v-if="comp.projects.length > 0" aria-label="Validée">✓</span>
                <span v-else aria-label="Non validée">·</span>
              </span>

              <div class="competence-text">
                <span class="competence-code">{{ comp.code }}</span>
                <span class="competence-label">{{ comp.label }}</span>
              </div>

              <span class="competence-count">
                {{ comp.projects.length }} projet{{ comp.projects.length > 1 ? 's' : '' }}
              </span>

              <span class="competence-arrow" :class="{ 'is-open': selectedCompetence?.code === comp.code }">▾</span>
            </button>

            <div v-if="selectedCompetence?.code === comp.code" class="competence-detail">
              <p class="detail-desc">{{ comp.details }}</p>

              <div v-if="getCompetenceProjects(comp).length" class="detail-projects">
                <p class="detail-label">Projets concernés :</p>
                <ul class="project-links">
                  <li v-for="project in getCompetenceProjects(comp)" :key="project.slug">
                    <RouterLink :to="`/projets/${project.slug}`">
                      {{ project.title }}
                      <span class="arrow">→</span>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              <p v-else class="detail-empty">
                Aucun projet ne valide cette compétence pour l'instant.
              </p>
            </div>
          </li>
        </ul>

      </div>

    </div>
  </section>
</template>

<style scoped>
.competences-page {
  padding: 7rem 2.5rem 6rem;
  min-height: 100vh;
}

.page-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 3rem;
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

/* Stats bar */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem 0;
  margin-bottom: 4rem;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1;
  margin-bottom: 0.4rem;
  transition: color 0.5s ease;
}

.stat-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  transition: color 0.5s ease;
}

/* Section blocks */
.section-block-header {
  margin-bottom: 2rem;
  max-width: 700px;
}

.section-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 0.85rem;
  transition: color 0.5s ease;
}

.section-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0 0 0.85rem;
  transition: color 0.5s ease;
}

.section-subtitle {
  font-size: 0.95rem;
  color: var(--text-soft);
  margin: 0;
  line-height: 1.6;
  transition: color 0.5s ease;
}

/* Liste de compétences */
.competence-group {
  margin-top: 1.5rem;
}

.competence-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.competence-row {
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.competence-button {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  padding: 1.1rem 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  color: var(--text);
  transition: color 0.3s ease;
  font-family: inherit;
}

.competence-button:hover { color: var(--accent); }

.competence-status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  font-size: 0.7rem;
  color: var(--text-dim);
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.competence-status.is-validated {
  border-color: var(--accent);
  color: var(--accent);
}

.competence-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.competence-code {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  transition: color 0.5s ease;
}

.competence-label {
  font-size: 0.95rem;
  color: var(--text);
  transition: color 0.5s ease;
}

.competence-count {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: color 0.5s ease;
}

.competence-arrow {
  font-size: 0.8rem;
  color: var(--text-muted);
  transition: transform 0.3s ease, color 0.3s ease;
  flex-shrink: 0;
}

.competence-arrow.is-open {
  transform: rotate(180deg);
  color: var(--accent);
}

.competence-detail {
  padding: 0 0 1.5rem 3.25rem;
}

.detail-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-soft);
  margin: 0 0 1.25rem;
  max-width: 720px;
  transition: color 0.5s ease;
}

.detail-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 0.85rem;
  transition: color 0.5s ease;
}

.project-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-size: 0.92rem;
  transition: gap 0.3s ease;
}

.project-links a:hover { gap: 0.75rem; }

.detail-empty {
  font-style: italic;
  color: var(--text-muted);
  margin: 0;
  font-size: 0.9rem;
  transition: color 0.5s ease;
}

.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

/* Responsive */
@media (max-width: 720px) {
  .competences-page { padding: 5rem 1.25rem 4rem; }
  .stats-bar { grid-template-columns: 1fr; gap: 1.25rem; padding: 1.5rem 0; }
  .competence-button { flex-wrap: wrap; gap: 0.85rem; }
  .competence-count { display: none; }
  .competence-detail { padding-left: 0; }
}
</style>