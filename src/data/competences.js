// Référentiel des compétences du BTS SIO — Bloc 1
// "Support et mise à disposition de services informatiques"
// Codes alignés avec le tableau de synthèse E5 officiel (C, D, E, F, G, H)

export const competenceGroups = [
    {
        code: 'B1',
        title: 'Support et mise à disposition de services informatiques',
        competences: [
            {
                code: 'C',
                label: 'Gérer le patrimoine informatique',
                details: 'Recenser et identifier les ressources numériques, exploiter des référentiels, gérer des configurations, mettre en place et vérifier les niveaux d\'habilitation, vérifier la continuité d\'un service informatique, gérer des sauvegardes.',
                projects: ['nerleuro', 'parcus', 'tp-collection'],
            },
            {
                code: 'D',
                label: 'Répondre aux incidents et aux demandes d\'assistance',
                details: 'Collecter, suivre, orienter et traiter les demandes d\'assistance. Traiter des demandes concernant les services réseau, système et les applications.',
                projects: ['parcus'],
            },
            {
                code: 'E',
                label: 'Développer la présence en ligne de l\'organisation',
                details: 'Participer à la valorisation de l\'image de l\'organisation sur les médias numériques. Référencer les services en ligne et mesurer leur visibilité. Participer à l\'évolution d\'un site Web.',
                projects: ['clean-co', 'portfolio'],
            },
            {
                code: 'F',
                label: 'Travailler en mode projet',
                details: 'Analyser les objectifs et les modalités d\'organisation d\'un projet, planifier les activités, évaluer les indicateurs de suivi et analyser les écarts.',
                projects: ['nerleuro', 'clean-co', 'parcus', 'portfolio', 'tp-collection'],
            },
            {
                code: 'G',
                label: 'Mettre à disposition des utilisateurs un service informatique',
                details: 'Réaliser les tests d\'intégration et d\'acceptation, déployer un service, accompagner les utilisateurs dans la mise en place d\'un service.',
                projects: ['nerleuro', 'clean-co', 'parcus', 'tp-collection'],
            },
            {
                code: 'H',
                label: 'Organiser son développement professionnel',
                details: 'Mettre en place son environnement d\'apprentissage personnel, mettre en œuvre des outils et stratégies de veille informationnelle, gérer son identité professionnelle, développer son projet professionnel.',
                projects: ['portfolio'],
            },
        ],
    },
]

// Helper : toutes les compétences à plat
export const allCompetences = competenceGroups.flatMap(g => g.competences)

// Helper : compétences validées par un projet donné
export const getCompetencesForProject = (projectSlug) => {
    return allCompetences.filter(c => c.projects.includes(projectSlug))
}

// Stats globales
export const stats = {
    totalCompetences: allCompetences.length,
    validatedCompetences: allCompetences.filter(c => c.projects.length > 0).length,
    coverage: Math.round((allCompetences.filter(c => c.projects.length > 0).length / allCompetences.length) * 100),
}