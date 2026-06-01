// Données complètes des projets.
// Chaque projet a deux niveaux d'information :
//  - Champs courts (num, title, shortDescription, etc.) pour les cartes
//  - Champs détaillés (longDescription, sections, documents, etc.) pour les pages projet

export const projects = [
    {
        num: '01',
        category: 'Stage',
        title: 'Nerleuro',
        subtitle: 'Application interne de suivi',
        date: 'Mai → Juin 2026',
        duration: '6 semaines',
        location: 'Strasbourg',
        role: 'Développeur stagiaire — solo',
        shortDescription: "Application interne de scoring et suivi pour une structure d'accompagnement de personnes neuroatypiques. Envoi automatisé des bilans par e-mail.",
        longDescription: "Mission de stage de première année de BTS SIO. J'ai conçu et développé une application interne pour Nerleuro, structure d'accompagnement de personnes neuroatypiques. L'application permet aux praticiens de réaliser des bilans standardisés (questionnaires ASRS, AQ-10, MEWS, AUDIT, CAST, SAS-SV), de calculer automatiquement des scores selon les barèmes officiels, et d'envoyer les rapports par e-mail aux bénéficiaires. Toutes les données sont persistées localement par exigence de confidentialité, sans aucun service cloud.",
        stack: ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'Vite'],
        slug: 'nerleuro',
        featured: true,
        liveUrl: null,
        githubUrl: null,
        sections: [
            {
                title: 'Contexte',
                content: "Nerleuro accompagne des personnes neuroatypiques (TDAH, TSA, troubles anxieux, addictions). Les praticiens utilisent quotidiennement plusieurs questionnaires validés scientifiquement pour évaluer leurs bénéficiaires. Avant ce projet, les bilans étaient remplis manuellement sur papier puis ressaisis dans des feuilles Excel, avec un risque d'erreur et une perte de temps importante.",
            },
            {
                title: 'Mission',
                content: "Concevoir une application web interne qui automatise la passation des questionnaires, calcule les scores selon les barèmes officiels, génère des rapports lisibles, et envoie les bilans par e-mail aux bénéficiaires. L'ensemble devait fonctionner en local pour respecter la confidentialité des données médicales.",
            },
            {
                title: 'Approche technique',
                content: "Le projet est construit sur Vue 3 + TypeScript + Vite. La gestion d'état utilise Pinia avec persistance localStorage. Le scoring est implémenté dans un module dédié (scoring.ts) qui contient les barèmes officiels de chaque questionnaire. La génération de rapport produit du TXT et du JSON exportables. Pour l'envoi de mails, j'ai documenté une procédure d'intégration avec un service SMTP côté serveur (à venir avec la base de données Laravel).",
            },
            {
                title: 'Bilan',
                content: "Le front-end est quasi complet. Les retours utilisateurs des psychologues professionnels ont permis d'améliorer l'ergonomie de l'interface. La prochaine étape est l'implémentation de la base de données et de l'API en Laravel, avec mise en place des tests automatisés.",
            },
        ],
        documents: [
            // À compléter avec les vrais documents
            // { label: 'Convention de stage',     file: '/projets/nerleuro/convention-stage.pdf' },
            // { label: 'Cahier des charges',      file: '/projets/nerleuro/cdc.pdf' },
            // { label: 'MCD / MLD',               file: '/projets/nerleuro/mcd.png' },
        ],
        images: [
            // À compléter
            // { src: '/projets/nerleuro/screen-01.png', alt: 'Page d\'accueil' },
        ],
        competences: [
            'Gérer le patrimoine informatique',
            'Mettre à disposition un service informatique',
            'Travailler en mode projet',
            'Développer une application sécurisée',
        ],
    },

    {
        num: '02',
        category: 'Freelance',
        title: 'Clean & CO',
        subtitle: 'Site vitrine WordPress',
        date: 'Janvier → Mai 2026',
        duration: '4 mois',
        location: 'Strasbourg',
        role: 'Freelance — gestion projet et développement',
        shortDescription: "Mission complète pour une entreprise de ménage à Strasbourg : cahier des charges, devis, planning Gantt, identité visuelle, développement WordPress.",
        longDescription: "Première mission freelance complète, menée de bout en bout pour Clean & CO, une entreprise de ménage premium à Strasbourg. J'ai pris en charge l'intégralité du projet : analyse du besoin, rédaction du cahier des charges client, réponse formelle au cahier des charges, devis (1 500 € HT avec échéancier 40/30/30), planning et diagramme de Gantt, charte graphique, développement WordPress avec Astra et Elementor, mise en ligne et accompagnement client post-livraison.",
        stack: ['WordPress', 'Astra', 'Elementor', 'CSS', 'Photoshop'],
        slug: 'clean-co',
        featured: true,
        liveUrl: null, // à remplir avec l'URL réelle quand publié
        githubUrl: null,
        sections: [
            {
                title: 'Contexte',
                content: "Clean & CO est une jeune entreprise de ménage premium à Strasbourg, qui cible les particuliers et les professionnels avec une promesse de qualité haut de gamme. Le client n'avait pas de présence en ligne et souhaitait un site vitrine moderne, élégant, qui inspire confiance et présente clairement ses services et tarifs.",
            },
            {
                title: 'Mission',
                content: "Réaliser un site vitrine WordPress complet : page d'accueil, services, tarifs, galerie avant/après, formulaire de devis, mentions légales. Inclure une identité visuelle adaptée (charte sombre avec accents vert néon), un système de prise de contact efficace, et un référencement local de base.",
            },
            {
                title: 'Méthodologie',
                content: "J'ai d'abord rédigé un cahier des charges détaillé pour cadrer le besoin, suivi d'une réponse formelle avec proposition de planning et budget. Le devis a été établi à 1 500 € HT avec un échéancier 40% à la signature, 30% à la validation des maquettes, 30% à la livraison. Un diagramme de Gantt a structuré les 5 phases du projet sur 4 mois.",
            },
            {
                title: 'Bilan',
                content: "Mission en cours de finalisation. Cette première mission freelance m'a permis de pratiquer toutes les facettes de la gestion de projet web : relation client, rédaction contractuelle, estimation budgétaire, planning, exécution et accompagnement. C'est une expérience qui complète idéalement la formation théorique du BTS.",
            },
        ],
        documents: [
            // { label: 'Cahier des charges client',  file: '/projets/clean-co/cdc-client.pdf' },
            // { label: 'Devis signé',                file: '/projets/clean-co/devis.pdf' },
            // { label: 'Diagramme de Gantt',         file: '/projets/clean-co/gantt.png' },
            // { label: 'Charte graphique',           file: '/projets/clean-co/charte.pdf' },
        ],
        images: [
            // { src: '/projets/clean-co/maquette-accueil.png', alt: 'Maquette page d\'accueil' },
        ],
        competences: [
            'Travailler en mode projet',
            'Développer la présence en ligne',
            'Mettre à disposition un service informatique',
        ],
    },

    {
        num: '03',
        category: 'Activité Pro 2',
        title: 'Parcus',
        subtitle: 'Infrastructure réseau DSI',
        date: 'Janvier → Février 2026',
        duration: '6 semaines',
        location: 'Lycée — projet d\'équipe',
        role: 'Membre d\'équipe — administration système',
        shortDescription: "Infrastructure réseau d'une DSI sur machines virtuelles : configuration multi-VM, ticketing GLPI, sécurisation et procédures support documentées.",
        longDescription: "Projet d'AP2 (Atelier de Professionnalisation) : déploiement d'une infrastructure virtuelle pour une entreprise fictive de gestion de parking (PARCUS, 83 employés). L'objectif était de monter une DSI complète sur VMware Workstation Pro, avec serveur Windows (AD, DNS, DHCP, GPO, WDS, BitLocker) et serveur Linux (LAMP, GLPI, FusionInventory, RustDesk), tous deux sur un réseau interne segmenté.",
        stack: ['VMware', 'Windows Server 2025', 'Debian 13', 'GLPI', 'Active Directory'],
        slug: 'parcus',
        featured: true,
        liveUrl: null,
        githubUrl: null,
        sections: [
            {
                title: 'Contexte',
                content: "PARCUS est une entreprise fictive de gestion de parking comptant 83 employés répartis sur plusieurs sites. Le projet d'AP2 consistait à concevoir et déployer son infrastructure informatique complète depuis zéro, en environnement virtualisé pour des contraintes pédagogiques.",
            },
            {
                title: 'Architecture',
                content: "L'infrastructure est consolidée sur deux machines virtuelles principales : SRV-WIN-01 (Windows Server 2025 avec AD DS, DNS, DHCP, GPO, WDS, BitLocker sur le domaine parcus.local) et SRV-LNX-02 (Debian 13 avec LAMP, GLPI, FusionInventory, RustDesk). Tout fonctionne sur VMnet10 (192.168.100.0/24).",
            },
            {
                title: 'Sécurisation',
                content: "Mise en place de BitLocker sur le serveur Windows, configuration de règles de pare-feu, gestion des habilitations via Active Directory, ségrégation réseau avec VMnet10 isolé, et procédures de sauvegarde.",
            },
            {
                title: 'Bilan',
                content: "La session s'est terminée avant la finalisation complète de GLPI. Une présentation orale E5 a été préparée avec un .pptx résumant l'architecture et les choix techniques. Le projet m'a fait découvrir l'administration système Windows Server et les bonnes pratiques de sécurisation d'une infrastructure d'entreprise.",
            },
        ],
        documents: [],
        images: [],
        competences: [
            'Gérer le patrimoine informatique',
            'Répondre aux incidents et aux demandes',
            'Travailler en mode projet',
        ],
    },

    {
        num: '04',
        category: 'Méta',
        title: 'Portfolio',
        subtitle: 'Le site que vous visitez',
        date: 'Mai → Juin 2026',
        duration: '2 semaines',
        location: 'Strasbourg',
        role: 'Solo',
        shortDescription: "Le site que vous visitez. Construit en Vue.js + Vite, hébergé sur Vercel. Toggle jour/nuit, palette sable/nuit chaude.",
        longDescription: "Conception et développement complets du présent portfolio. Le projet est construit en Vue 3 + Vite, avec Vue Router pour la navigation. La direction artistique propose deux ambiances complémentaires : sable doux et nuit bleutée avec accent or. Le toggle de thème est persistant via localStorage. Le site est responsive, accessible et optimisé pour le SEO.",
        stack: ['Vue 3', 'Vite', 'Vue Router', 'JavaScript', 'CSS Custom Properties'],
        slug: 'portfolio',
        featured: false,
        liveUrl: null,
        githubUrl: null,
        sections: [
            {
                title: 'Contexte',
                content: "Dans le cadre de l'épreuve E5 du BTS SIO, j'ai souhaité disposer d'un portfolio numérique pour présenter mes projets de manière vivante et documentée. Plutôt que d'utiliser un service tout fait ou un thème générique, j'ai préféré le construire de zéro pour démontrer mes compétences en développement front-end moderne.",
            },
            {
                title: 'Choix techniques',
                content: "Vue 3 avec la Composition API et l'écosystème Vite. Pas de framework lourd type Nuxt, pas de TypeScript pour rester sur quelque chose de proche du JavaScript vanilla et démontrer la compréhension des fondamentaux. Les styles utilisent les CSS Custom Properties pour gérer le thème jour/nuit sans recompilation.",
            },
            {
                title: 'Direction artistique',
                content: "Deux palettes complémentaires : un mode jour en sable doux avec accent terra cotta, et un mode nuit en bleu profond avec accent or. La typographie combine Inter (corps) avec Cormorant Garamond utilisée parcimonieusement pour quelques mots-clés en italique. Le résultat est sobre mais a du caractère.",
            },
        ],
        documents: [],
        images: [],
        competences: [
            'Développer la présence en ligne',
            'Travailler en mode projet',
            'Développer des composants logiciels',
        ],
    },

    {
        num: '05',
        category: 'Cours',
        title: 'ToDo App',
        subtitle: 'Gestion de tâches PHP/MySQL',
        date: 'Septembre → Octobre 2025',
        duration: '6 semaines',
        location: 'BTS SIO — TP',
        role: 'Solo',
        shortDescription: "Application de gestion de tâches : CRUD intégral, requêtes préparées PDO, échappement htmlspecialchars, validation côté client.",
        longDescription: "Travaux pratiques de première année : développement d'une application complète de gestion de tâches en PHP / MySQL. CRUD intégral, sécurité (requêtes préparées PDO, échappement HTML), validation côté client en JavaScript, structure modulaire avec require pour les éléments mutualisés.",
        stack: ['PHP', 'MySQL', 'PDO', 'JavaScript', 'MAMP'],
        slug: 'todo-app',
        featured: false,
        liveUrl: null,
        githubUrl: null,
        sections: [
            {
                title: 'Objectifs pédagogiques',
                content: "Maîtriser les fondamentaux PHP/MySQL : connexion via PDO, manipulation de données en CRUD, sécurisation contre les injections SQL et XSS, structure modulaire d'un projet web.",
            },
            {
                title: 'Réalisations',
                content: "Application fonctionnelle déployée sur MAMP, avec toutes les opérations CRUD, validation des saisies côté client en JS, sécurisation côté serveur avec requêtes préparées et htmlspecialchars sur les sorties.",
            },
        ],
        documents: [],
        images: [],
        competences: [
            'Développer des composants logiciels',
            'Développer une application sécurisée',
        ],
    },

    {
        num: '06',
        category: 'Cours',
        title: 'TP Collection',
        subtitle: 'SQL multi-tables avec JOIN',
        date: 'Novembre → Décembre 2025',
        duration: '4 semaines',
        location: 'BTS SIO — TP',
        role: 'Solo',
        shortDescription: "Modélisation à 4 tables liées, requêtes JOIN et LEFT JOIN, architecture modulaire avec require pour les éléments mutualisés.",
        longDescription: "Travaux pratiques de gestion de collection personnelle (mangas, livres, DVDs, etc.) en PHP / MySQL avec 4 tables liées. Pratique des relations entre entités, des jointures SQL et de l'architecture modulaire d'un projet PHP procédural.",
        stack: ['PHP', 'MySQL', 'PDO', 'JOIN'],
        slug: 'tp-collection',
        featured: false,
        liveUrl: null,
        githubUrl: null,
        sections: [
            {
                title: 'Objectifs',
                content: "Pratiquer la modélisation relationnelle, comprendre les jointures (JOIN, LEFT JOIN), résoudre les problèmes courants (contraintes de clés étrangères, doublons, GROUP BY strict mode).",
            },
            {
                title: 'Réalisations',
                content: "Application CRUD sur 4 tables liées avec gestion correcte des relations, jointures pour les vues consolidées, et résolution de problèmes typiques rencontrés en cours de développement.",
            },
        ],
        documents: [],
        images: [],
        competences: [
            'Développer des composants logiciels',
            'Gérer les données',
        ],
    },
]

// Helper function pour trouver un projet par son slug
export const getProjectBySlug = (slug) => {
    return projects.find(p => p.slug === slug)
}