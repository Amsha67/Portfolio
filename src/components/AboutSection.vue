<script setup>
const infos = [
  { label: 'Formation',    value: 'BTS SIO SLAM, 1ʳᵉ année' },
  { label: 'Localisation', value: 'Strasbourg, Grand Est' },
  { label: 'Statut',       value: 'Étudiant et freelance' },
  { label: 'Stack',        value: 'PHP, MySQL, Vue.js, Node.js' },
]
</script>

<template>
  <section class="about" id="parcours">
    <div class="section-inner">

      <header class="section-header">
        <p class="section-eyebrow">À propos</p>
        <h2 class="section-title">Présentation</h2>
        <p class="section-subtitle">
          Développeur en formation, avec une exigence sur la qualité
          et la documentation des projets.
        </p>
      </header>

      <div class="about-grid">
        <div class="about-text">
          <p>
            Étudiant en première année de <strong>BTS SIO option SLAM</strong>
            (Solutions Logicielles et Applications Métiers) à l'IFIDE Strasbourg.
            Mon parcours combine une formation technique solide et une activité
            de freelance qui me permet d'appliquer mes compétences sur des
            projets clients réels.
          </p>
          <p>
            Mes domaines couvrent le développement web full-stack
            (PHP/MySQL, Vue.js, Node.js), la gestion de projet (cahier des
            charges, planning, livrables) et l'administration de bases de
            données. J'attache une importance particulière à la
            <strong>sécurité </strong> et à la qualité de la documentation.
          </p>
          <p>
            Ce portfolio recense mes principaux projets, en formation comme en
            milieu professionnel. Chaque projet est documenté en détail :
            cahier des charges, livrables, code source, captures et bilan.
          </p>
        </div>

        <aside class="about-info">
          <div v-for="info in infos" :key="info.label" class="info-item">
            <span class="info-label">{{ info.label }}</span>
            <span class="info-value">{{ info.value }}</span>
          </div>
        </aside>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 7rem 2.5rem;
  border-top: 1px solid var(--border);
  transition: border-color 0.5s ease;
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

.section-subtitle {
  font-size: 1.05rem;
  color: var(--text-soft);
  margin: 0;
  line-height: 1.6;
  transition: color 0.5s ease;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--text-soft);
  transition: color 0.5s ease;
}

.about-text p { margin: 0 0 1.25rem; }
.about-text p:last-child { margin-bottom: 0; }

.about-text strong {
  color: var(--text);
  font-weight: 500;
  transition: color 0.5s ease;
}

.about-info {
  /* Pas de bordure, sobre */
}

.info-item {
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.info-item:first-child { padding-top: 0; }
.info-item:last-child { border-bottom: none; }

.info-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.4rem;
  transition: color 0.5s ease;
}

.info-value {
  font-size: 0.93rem;
  color: var(--text);
  transition: color 0.5s ease;
}

@media (max-width: 1024px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}

@media (max-width: 640px) {
  .about { padding: 4rem 1.25rem; }
}
</style>