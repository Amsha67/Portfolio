// Référentiel des compétences du BTS SIO option SLAM (1ère année)
// Chaque compétence indique quels projets la valident (via leur slug)

export const competenceGroups = [
    {
        code: 'B1',
        title: 'Support et mise à disposition de services informatiques',
        competences: [
            {
                code: 'B1.1',
                label: 'Gérer le patrimoine informatique',
                details: 'Recenser et identifier les ressources numériques, exploiter des référentiels, gérer des configurations.',
                projects: ['nerleuro', 'parcus'],
            },
            {
                code: 'B1.2',
                label: 'Répondre aux incidents et aux demandes d\'assistance',
                details: 'Collecter, suivre, orienter, traiter et clôturer une demande d\'assistance.',
                projects: ['parcus'],
            },
            {
                code: 'B1.3',
                label: 'Développer la présence en ligne de l\'organisation',
                details: 'Référencer les services en ligne, communiquer sur les services proposés.',
                projects: ['clean-co', 'portfolio'],
            },
            {
                code: 'B1.4',
                label: 'Travailler en mode projet',
                details: 'Analyser des objectifs, planifier les activités, évaluer les indicateurs de succès.',
                projects: ['nerleuro', 'clean-co', 'parcus', 'portfolio'],
            },
            {
                code: 'B1.5',
                label: 'Mettre à disposition des utilisateurs un service informatique',
                details: 'Réaliser les tests d\'intégration, déployer un service, accompagner les utilisateurs.',
                projects: ['nerleuro', 'clean-co'],
            },
            {
                code: 'B1.6',
                label: 'Organiser son développement professionnel',
                details: 'Mettre en place son environnement d\'apprentissage personnel, développer son projet professionnel.',
                projects: ['portfolio'],
            },
        ],
    },
    {
        code: 'B2-SLAM',
        title: 'Conception et développement d\'applications (SLAM)',
        competences: [
            {
                code: 'B2.1',
                label: 'Concevoir et développer une solution applicative',
                details: 'Analyser un besoin, concevoir et modéliser une application, choisir une architecture, développer.',
                projects: ['nerleuro', 'todo-app', 'tp-collection', 'portfolio'],
            },
            {
                code: 'B2.2',
                label: 'Assurer la maintenance corrective et évolutive d\'une application',
                details: 'Analyser et corriger un dysfonctionnement, évaluer l\'impact d\'une modification.',
                projects: ['nerleuro'],
            },
            {
                code: 'B2.3',
                label: 'Gérer les données',
                details: 'Exploiter des données à l\'aide d\'un langage de requêtes, contrôler la qualité des données.',
                projects: ['nerleuro', 'todo-app', 'tp-collection'],
            },
        ],
    },
]

// Helper : récupère toutes les compétences à plat
export const allCompetences = competenceGroups.flatMap(g => g.competences)

// Helper : retourne les compétences validées par un projet donné
export const getCompetencesForProject = (projectSlug) => {
    return allCompetences.filter(c => c.projects.includes(projectSlug))
}

// Statistiques globales
export const stats = {
    totalCompetences: allCompetences.length,
    validatedCompetences: allCompetences.filter(c => c.projects.length > 0).length,
    coverage: Math.round((allCompetences.filter(c => c.projects.length > 0).length / allCompetences.length) * 100),
}