<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink :to="`/projets/${project.slug}`" class="project-card">
    <div class="card-meta">
      <span>{{ project.num }}</span>
      <span>{{ project.category }}</span>
    </div>

    <h3 class="card-title">{{ project.title }}</h3>
    <p class="card-date">{{ project.date }}</p>
    <p class="card-desc">{{ project.shortDescription }}</p>

    <ul class="card-stack" aria-label="Technologies utilisées">
      <li v-for="tech in project.stack" :key="tech" class="stack-tag">
        {{ tech }}
      </li>
    </ul>

    <span class="card-link">
      Voir le projet <span class="arrow">→</span>
    </span>
  </RouterLink>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  padding: 1.75rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  height: 100%;
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  text-transform: uppercase;
  transition: color 0.5s ease;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.25;
  margin: 0 0 0.5rem;
  color: var(--text);
  letter-spacing: -0.01em;
  transition: color 0.5s ease;
}

.card-date {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  margin: 0 0 1.25rem;
  transition: color 0.5s ease;
}

.card-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-soft);
  margin: 0 0 1.5rem;
  flex: 1;
  transition: color 0.5s ease;
}

.card-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.9rem;
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 0;
}

.stack-tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  transition: color 0.5s ease;
}

.card-link {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--accent);
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s ease, border-color 0.4s ease;
}

.arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.project-card:hover .arrow { transform: translateX(4px); }
</style>