<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getProjectBySlug } from '../data/projects'
import ProjectGallery from '../components/ProjectGallery.vue'
import ProjectDocuments from '../components/ProjectDocuments.vue'
import ProjectCodeBlock from '../components/ProjectCodeBlock.vue'
import { allCompetences } from '../data/competences'

const route = useRoute()
const project = computed(() => getProjectBySlug(route.params.slug))

// Récupère les compétences détaillées (label, code, details) à partir des codes
const projectCompetences = computed(() => {
  if (!project.value?.competences) return []
  return project.value.competences
    .map(code => allCompetences.find(c => c.code === code))
    .filter(Boolean)
})
</script>

<template>
  <!-- Si le projet n'existe pas, on affiche une 404 simple -->
  <section v-if="!project" class="not-found">
    <div class="section-inner">
      <p class="page-eyebrow">Erreur 404</p>
      <h1 class="page-title">Projet introuvable</h1>
      <p class="page-subtitle">
        Le projet demandé n'existe pas ou a été déplacé.
      </p>
      <RouterLink to="/projets" class="back-link">← Retour aux projets</RouterLink>
    </div>
  </section>

  <article v-else class="project-detail">

    <!-- En-tête du projet -->
    <header class="detail-header">
      <div class="section-inner">
        <RouterLink to="/projets" class="back-link">← Tous les projets</RouterLink>

        <div class="detail-meta">
          <span>{{ project.num }}</span>
          <span>{{ project.category }}</span>
        </div>

        <h1 class="detail-title">
          {{ project.title }}
          <em v-if="project.subtitle">· {{ project.subtitle }}</em>
        </h1>

        <p class="detail-description">{{ project.longDescription }}</p>

        <dl class="detail-infos">
          <div class="info-item">
            <dt>Période</dt>
            <dd>{{ project.date }}</dd>
          </div>
          <div class="info-item">
            <dt>Durée</dt>
            <dd>{{ project.duration }}</dd>
          </div>
          <div class="info-item">
            <dt>Lieu</dt>
            <dd>{{ project.location }}</dd>
          </div>
          <div class="info-item">
            <dt>Rôle</dt>
            <dd>{{ project.role }}</dd>
          </div>
        </dl>

        <div class="detail-stack">
          <p class="stack-label">Technologies</p>
          <ul class="stack-list">
            <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
          </ul>
        </div>

        <div v-if="project.liveUrl || project.githubUrl" class="detail-links">
          <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener" class="cta-primary">
            Voir le site en ligne <span class="arrow">→</span>
          </a>
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="cta-secondary">
            Code source GitHub
          </a>
        </div>
      </div>
    </header>

    
    <!-- Sections de contenu : titre + texte + image + code -->
<section v-for="(section, i) in project.sections" :key="i" class="detail-section">
  <div class="section-inner">
    <h2 class="section-title">
      <span class="section-num">{{ String(i + 1).padStart(2, '0') }}</span>
      {{ section.title }}
    </h2>

    <p class="section-content">{{ section.content }}</p>

    <!-- Image liée à la section -->
    <figure v-if="section.image" class="section-image">
      <img :src="section.image.src" :alt="section.image.alt" loading="lazy" />
      <figcaption v-if="section.image.caption">{{ section.image.caption }}</figcaption>
    </figure>

    <!-- Code lié à la section -->
    <ProjectCodeBlock
      v-if="section.code"
      :title="section.code.title"
      :description="section.code.description"
      :language="section.code.language"
      :code="section.code.code"
    />
  </div>
</section>

    <!-- Contribution personnelle  -->
<section v-if="project.contribution" class="detail-section detail-contribution">
  <div class="section-inner">
    <h2 class="section-title">
      <span class="section-num">→</span>
      Ma contribution personnelle
    </h2>
    <p class="section-content contribution-text">{{ project.contribution }}</p>
  </div>
</section>
<!-- Galerie d'images -->
<section v-if="project.images && project.images.length" class="detail-section">
  <div class="section-inner">
    <h2 class="section-title">
      <span class="section-num">{{ String(project.sections.length + 1).padStart(2, '0') }}</span>
      Captures
    </h2>
    <p class="section-content">Galerie de captures de l'application.</p>
    <ProjectGallery :images="project.images" />
  </div>
</section>

<!-- Documents  -->
<section v-if="project.documents && project.documents.length" class="detail-section">
  <div class="section-inner">
    <h2 class="section-title">
      <span class="section-num">{{ String(project.sections.length + (project.images?.length ? 2 : 1)).padStart(2, '0') }}</span>
      Documents
    </h2>
    <p class="section-content">Documents officiels et livrables du projet.</p>
    <ProjectDocuments :documents="project.documents" />
  </div>
</section>

<!-- Blocs de code -->
<section v-if="project.codeBlocks && project.codeBlocks.length" class="detail-section">
  <div class="section-inner">
    <h2 class="section-title">
      <span class="section-num">{{ String(project.sections.length + (project.images?.length ? 2 : 1) + (project.documents?.length ? 1 : 0)).padStart(2, '0') }}</span>
      Extraits de code
    </h2>
    <p class="section-content">Choix techniques significatifs.</p>
    <ProjectCodeBlock
      v-for="(block, i) in project.codeBlocks"
      :key="i"
      :title="block.title"
      :description="block.description"
      :language="block.language"
      :code="block.code"
    />
  </div>
</section>
    

    <!-- Compétences validées -->
<section v-if="projectCompetences.length" class="detail-section detail-competences">
  <div class="section-inner">
    <h2 class="section-title">
      <span class="section-num">→</span>
      Compétences validées
    </h2>
    <p class="section-content">
      Ce projet mobilise les compétences suivantes du référentiel BTS SIO option SLAM.
    </p>

    <ul class="competences-list">
      <li v-for="comp in projectCompetences" :key="comp.code" class="competence-item">
        <span class="comp-code">{{ comp.code }}</span>
        <div class="comp-info">
          <p class="comp-label">{{ comp.label }}</p>
          <p class="comp-details">{{ comp.details }}</p>
        </div>
      </li>
    </ul>

    <RouterLink to="/competences" class="competences-link">
      Voir le tableau de synthèse complet
      <span class="arrow" aria-hidden="true">→</span>
    </RouterLink>
  </div>
</section>
    <!-- Pied / navigation -->
    <footer class="detail-footer">
      <div class="section-inner">
        <RouterLink to="/projets" class="back-link">← Retour à tous les projets</RouterLink>
      </div>
    </footer>

  </article>
</template>

<style scoped>
.section-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2.5rem;
}

/* ============================================
   404
   ============================================ */
.not-found {
  padding: 8rem 2.5rem;
  text-align: center;
  min-height: 70vh;
}

/* ============================================
   En-tête de la page projet
   ============================================ */
.detail-header {
  padding: 7rem 0 5rem;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.back-link {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 2.5rem;
  transition: color 0.3s ease;
}

.back-link:hover { color: var(--accent); }

.detail-meta {
  display: flex;
  gap: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  transition: color 0.5s ease;
}

.detail-title {
  font-size: clamp(2.5rem, 5.5vw, 4.5rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin: 0 0 1.75rem;
  color: var(--text);
  transition: color 0.5s ease;
}

.detail-title em {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  color: var(--accent);
  font-size: 0.65em;
  margin-left: 0.4em;
  transition: color 0.5s ease;
}

.detail-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-soft);
  margin: 0 0 3rem;
  max-width: 720px;
  transition: color 0.5s ease;
}

/* Infos meta */
.detail-infos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 0 0 3rem;
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.info-item {
  margin: 0;
}

.info-item dt {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
  transition: color 0.5s ease;
}

.info-item dd {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text);
  transition: color 0.5s ease;
}

/* Stack */
.detail-stack {
  margin-bottom: 2.5rem;
}

.stack-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 0.85rem;
  transition: color 0.5s ease;
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.stack-list li {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-soft);
  border: 1px solid var(--border-strong);
  padding: 0.35rem 0.7rem;
  border-radius: 2px;
  transition: color 0.5s ease, border-color 0.5s ease;
}

/* CTA */
.detail-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.5rem;
  background: var(--accent);
  color: var(--bg);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.cta-primary:hover { background: var(--accent-soft); }

.cta-secondary {
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.5rem;
  border: 1px solid var(--border-strong);
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  transition: border-color 0.3s ease, color 0.3s ease;
}

.cta-secondary:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.cta-primary:hover .arrow { transform: translateX(3px); }

/* ============================================
   Sections de contenu
   ============================================ */
.detail-section {
  padding: 4rem 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.detail-section:last-child { border-bottom: none; }

.detail-section .section-title {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.015em;
  margin: 0 0 1.5rem;
  color: var(--text);
  display: flex;
  align-items: baseline;
  gap: 1rem;
  transition: color 0.5s ease;
}

.section-num {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--accent);
  letter-spacing: 0.1em;
  transition: color 0.5s ease;
}

.section-content {
  font-size: 1.02rem;
  line-height: 1.75;
  color: var(--text-soft);
  margin: 0;
  max-width: 720px;
  transition: color 0.5s ease;
}

/* Documents */
.documents-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.documents-list li {
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.documents-list a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  text-decoration: none;
  color: var(--text);
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.documents-list a:hover { color: var(--accent); }

/* Compétences */
.competences-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.competences-list li {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.6rem 0;
  font-size: 0.95rem;
  color: var(--text-soft);
  transition: color 0.5s ease;
}

.check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  font-size: 0.7rem;
  color: var(--accent);
  flex-shrink: 0;
  transition: color 0.5s ease, border-color 0.5s ease;
}

/* Footer */
.detail-footer {
  padding: 4rem 0;
  border-top: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

/* Responsive */
@media (max-width: 720px) {
  .section-inner { padding: 0 1.25rem; }
  .detail-header { padding: 5rem 0 3rem; }
  .detail-infos { grid-template-columns: repeat(2, 1fr); }
}
.detail-contribution .section-content {
  padding: 1.5rem 1.75rem;
  background: var(--bg-elevated);
  border-left: 3px solid var(--accent);
  font-style: italic;
  transition: background 0.5s ease, border-color 0.5s ease;
}

.section-image {
  margin: 2rem 0 0;
  padding: 0;
}

.section-image img {
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  transition: border-color 0.5s ease;
}

.section-image figcaption {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-top: 0.85rem;
  letter-spacing: 0.03em;
  transition: color 0.5s ease;
}

.competences-list {
  list-style: none;
  margin: 1.5rem 0 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.competence-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  transition: background 0.5s ease, border-color 0.5s ease;
}

.comp-code {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--bg);
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.1rem;
  font-weight: 500;
  flex-shrink: 0;
  transition: background 0.5s ease, color 0.5s ease;
}

.comp-info {
  flex: 1;
  min-width: 0;
}

.comp-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 0.3rem;
  transition: color 0.5s ease;
}

.comp-details {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
  transition: color 0.5s ease;
}

.competences-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--accent);
  text-decoration: none;
  transition: gap 0.3s ease;
}

.competences-link:hover { gap: 0.8rem; }

.competences-link .arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}
</style>