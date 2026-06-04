<script setup>
// Stats affichées sous la tagline
const stats = [
  { value: '1',  label: 'année BTS SIO' },
  { value: '6',  label: 'projets référencés' },
  { value: '4+', label: 'technologies' },
]
</script>

<template>
  <section class="hero" id="presentation">
    <div class="hero-inner">

      <div class="hero-content">
        <p class="hero-eyebrow">Portfolio 2025 — 2026</p>

        <h1 class="hero-title">
          Eric <em>Schmoezlin</em>
        </h1>

        <p class="hero-tagline">
          Étudiant en BTS SIO option SLAM, première année à Strasbourg.
          Développeur en formation, passionné par l'informatique et les nouvelles technologies.
        </p>

        <ul class="hero-stats">
          <li v-for="stat in stats" :key="stat.label" class="stat">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </li>
        </ul>

        <div class="hero-cta">
          <a
            href="https://www.linkedin.com/in/eric-schmoelzlin-824274220"
            target="_blank"
            rel="noopener"
            class="cta-linkedin"
          >
            <span>Profil LinkedIn</span>
            <span class="arrow" aria-hidden="true">→</span>
          </a>
          <a
            href="https://github.com/Amsha67"
            target="_blank"
            rel="noopener"
            class="cta-github"
          >
            <span>GitHub</span>
            <span class="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div class="hero-photo">
         <img src="/images/icon.png" alt="Portrait d'Eric Schmoezlin" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  padding: 4rem 2.5rem;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 5rem;
  align-items: center;
  width: 100%;
}

.hero-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin: 0 0 1.5rem;
  transition: color 0.5s ease;
}

.hero-title {
  font-size: clamp(2.75rem, 6vw, 5rem);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.025em;
  margin: 0 0 1.75rem;
  color: var(--text);
  transition: color 0.5s ease;
}

.hero-title em {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  color: var(--accent);
  transition: color 0.5s ease;
}

.hero-tagline {
  font-size: 1.08rem;
  line-height: 1.65;
  color: var(--text-soft);
  margin: 0 0 3rem;
  max-width: 540px;
  transition: color 0.5s ease;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.stat-value {
  display: block;
  font-size: 1.65rem;
  font-weight: 600;
  color: var(--text);
  line-height: 1;
  margin-bottom: 0.45rem;
  transition: color 0.5s ease;
}

.stat-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  transition: color 0.5s ease;
}

/* Photo */
.hero-photo {
  aspect-ratio: 4 / 5;
  max-width: 380px;
  margin: 0 auto;
  background: var(--bg-elevated);
  overflow: hidden;
  transition: background 0.5s ease;
 
  border-radius: 1rem; 
}

.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-cta {
  display: flex;
  gap: 0.85rem;
  margin-top: 3.5rem; 
  flex-wrap: wrap;
}

.cta-linkedin,
.cta-github {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.25rem;
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 0.5rem; 
}

.cta-linkedin {
  background: var(--accent);
  color: var(--bg);
}

.cta-linkedin:hover {
  background: var(--accent-soft);
}

.cta-github {
  border: 1px solid var(--border-strong);
  color: var(--text);
}

.cta-github:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.hero-cta .arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.cta-linkedin:hover .arrow,
.cta-github:hover .arrow {
  transform: translateX(3px);
}

@media (max-width: 1024px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .hero-photo { max-width: 300px; }
  .hero-cta { margin-top: 2.5rem; }
}

@media (max-width: 640px) {
  .hero { padding: 3rem 1.25rem; }
  .hero-stats { flex-direction: column; gap: 1.5rem; }
}
</style>