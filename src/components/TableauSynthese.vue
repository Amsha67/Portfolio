<script setup>
import { projects } from '../data/projects'

// Définition des compétences en colonnes (header du tableau)
const competences = [
  { code: 'C', label: 'Gérer le patrimoine informatique' },
  { code: 'D', label: "Répondre aux incidents" },
  { code: 'E', label: 'Développer la présence en ligne' },
  { code: 'F', label: 'Travailler en mode projet' },
  { code: 'G', label: 'Mettre à disposition un service' },
  { code: 'H', label: 'Organiser son développement pro' },
]

// Réalisations organisées par catégorie (selon le format officiel du tableau)
const realisations = [
  {
    categorie: 'En cours de formation',
    items: [
      {
        titre: 'Portfolio personnel — HTML / CSS from scratch',
        periode: '01/06/26',
        slug: 'portfolio',
        competences: ['E', 'H'],
      },
      {
        titre: 'Application Web de gestion de tâches — PHP / MySQL',
        periode: '15/09/25 → 31/10/25',
        slug: 'todo-app',
        competences: ['C', 'F', 'G'],
      },
      {
        titre: "TP Gestion d'une collection — PHP / MySQL multi-tables",
        periode: '03/11/25 → 12/12/25',
        slug: 'tp-collection',
        competences: ['C', 'F'],
      },
      {
        titre: "Projet AP2 « Parcus » — Infrastructure réseau d'une DSI sur VM",
        periode: '06/01/26 → 28/06/26',
        slug: 'parcus',
        competences: ['C', 'D', 'F', 'G'],
      },
      {
        titre: 'Initiation Node.js / Vue.js — développement front-end moderne',
        periode: '01/02/26 → 30/04/26',
        slug: null,
        competences: ['C', 'F'],
      },
      {
        titre: 'Veille technologique et construction du projet professionnel',
        periode: '01/09/25 → 30/05/26',
        slug: null,
        competences: ['H'],
      },
    ],
  },
  {
    categorie: 'En milieu professionnel — 1ʳᵉ année',
    items: [
      {
        titre: 'Stage Nerleuro — accompagnement de personnes neuroatypiques',
        periode: '04/05/26 → 26/06/26',
        slug: 'nerleuro',
        competences: ['C', 'D', 'F', 'G'],
      },
      {
        titre: 'Mission freelance — Site vitrine WordPress Clean & CO',
        periode: '03/05/26 → 03/07/26',
        slug: 'clean-co',
        competences: ['E', 'F', 'G',  'H'],
      },
    ],
  },
]

// Helper : vérifie si une réalisation a une compétence
const aCompetence = (item, code) => item.competences.includes(code)

// Helper : récupère le projet correspondant à un slug
const getProject = (slug) => projects.find(p => p.slug === slug)
</script>

<template>
  <div class="tableau-synthese">

    <!-- En-tête du tableau -->
    <header class="tableau-header">
      <div class="tableau-meta">
        <p class="meta-line">
          <span class="meta-label">N° candidat</span>
          <span class="meta-value">[à compléter]</span>
        </p>
        <p class="meta-line">
          <span class="meta-label">Option</span>
          <span class="meta-value">☒ SLAM&nbsp;&nbsp;&nbsp;&nbsp;☐ SISR</span>
        </p>
      </div>
      <p class="meta-line">
        <span class="meta-label">URL portfolio</span>
        <span class="meta-value">https://portfolio-2026-ecru-three.vercel.app/</span>
      </p>
    </header>

    <!-- Tableau principal -->
    <div class="table-wrapper">
      <table class="synthese-table">
        <thead>
          <tr>
            <th class="col-titre">Réalisation professionnelle</th>
            <th class="col-periode">Période</th>
            <th v-for="comp in competences" :key="comp.code" class="col-comp">
              <span class="comp-code">{{ comp.code }}</span>
              <span class="comp-label">{{ comp.label }}</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <template v-for="bloc in realisations" :key="bloc.categorie">
            <!-- En-tête de catégorie -->
            <tr class="row-categorie">
              <td :colspan="2 + competences.length">{{ bloc.categorie }}</td>
            </tr>

            <!-- Lignes de réalisations -->
            <tr v-for="item in bloc.items" :key="item.titre" class="row-realisation">
              <td class="cell-titre">
                <a v-if="item.slug && getProject(item.slug)" :href="`/projets/${item.slug}`">
                  {{ item.titre }}
                  <span class="link-arrow">→</span>
                </a>
                <span v-else>{{ item.titre }}</span>
              </td>
              <td class="cell-periode">{{ item.periode }}</td>
              <td v-for="comp in competences" :key="comp.code" class="cell-check">
                <span v-if="aCompetence(item, comp.code)" class="check" aria-label="Validée">✕</span>
                <span v-else aria-hidden="true">·</span>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <!-- Légende -->
    <footer class="tableau-footer">
      <p>
        <strong>Légende compétences :</strong>
        C — Gérer le patrimoine informatique &middot;
        D — Répondre aux incidents et demandes d'assistance &middot;
        E — Développer la présence en ligne &middot;
        F — Travailler en mode projet &middot;
        G — Mettre à disposition un service &middot;
        H — Organiser son développement professionnel
      </p>
    </footer>

  </div>
</template>

<style scoped>
.tableau-synthese {
  margin-top: 3rem;
}

/* En-tête du tableau */
.tableau-header {
  padding: 1.5rem 1.75rem;
  border: 1px solid var(--border-strong);
  background: var(--bg-elevated);
  margin-bottom: 1.5rem;
  transition: background 0.5s ease, border-color 0.5s ease;
}

.tableau-meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.meta-line {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0;
  font-size: 0.85rem;
}

.meta-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.5s ease;
}

.meta-value {
  color: var(--text);
  transition: color 0.5s ease;
}

/* Table */
.table-wrapper {
  overflow-x: auto;
  border: 1px solid var(--border-strong);
  background: var(--bg-elevated);
  transition: background 0.5s ease, border-color 0.5s ease;
}

.synthese-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  min-width: 1000px;
}

/* Header du tableau */
.synthese-table thead th {
  background: var(--bg-subtle);
  color: var(--text);
  font-weight: 500;
  padding: 0.75rem 0.85rem;
  text-align: left;
  border-bottom: 2px solid var(--border-strong);
  border-right: 1px solid var(--border);
  vertical-align: bottom;
  transition: background 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}

.synthese-table thead th:last-child { border-right: none; }

.col-titre { width: 38%; }
.col-periode { width: 12%; }
.col-comp {
  width: 8.3%;
  text-align: center !important;
}

.comp-code {
  display: block;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.35rem;
  transition: color 0.5s ease;
}

.comp-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  line-height: 1.3;
  text-transform: none;
  font-weight: 400;
  transition: color 0.5s ease;
}

/* Lignes catégorie */
.row-categorie td {
  background: var(--bg-subtle);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent);
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--border-strong);
  border-top: 1px solid var(--border-strong);
  transition: background 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}

/* Lignes réalisations */
.row-realisation td {
  padding: 0.85rem 0.85rem;
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
  vertical-align: top;
  transition: border-color 0.5s ease;
}

.row-realisation td:last-child { border-right: none; }

.row-realisation:last-child td { border-bottom: none; }

.row-realisation:hover {
  background: color-mix(in srgb, var(--accent) 4%, transparent);
}

.cell-titre {
  color: var(--text);
  font-size: 0.9rem;
  line-height: 1.45;
  transition: color 0.5s ease;
}

.cell-titre a {
  color: var(--text);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s ease;
}

.cell-titre a:hover { color: var(--accent); }

.link-arrow {
  display: inline-block;
  font-size: 0.85em;
  opacity: 0.6;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.cell-titre a:hover .link-arrow {
  opacity: 1;
  transform: translateX(3px);
}

.cell-periode {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  white-space: nowrap;
  transition: color 0.5s ease;
}

.cell-check {
  text-align: center;
  color: var(--text-dim);
  font-size: 1rem;
  transition: color 0.5s ease;
}

.cell-check .check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
  transition: all 0.3s ease;
}

.row-realisation:hover .cell-check .check {
  background: var(--accent);
  color: var(--bg);
}

/* Footer */
.tableau-footer {
  margin-top: 1.25rem;
  padding: 1rem 1.25rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--text-muted);
  transition: background 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}

.tableau-footer p { margin: 0; }
.tableau-footer strong {
  color: var(--text);
  font-weight: 500;
  transition: color 0.5s ease;
}

@media (max-width: 720px) {
  .tableau-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>