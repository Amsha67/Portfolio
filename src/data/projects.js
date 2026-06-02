// Données complètes des projets.
// Chaque projet contient :
//  - Champs courts (cartes, carrousel)
//  - Sections détaillées (chaque section peut avoir image + code)
//  - Documents téléchargeables
//  - Compétences validées (codes du référentiel : C, D, E, F, G, H)

export const projects = [

    // ============================================================
    // 01 — LERNEURO
    // ============================================================
    {
        num: '01',
        category: 'Stage',
        title: 'Lerneuro',
        subtitle: 'Application de test neuroatypique',
        contribution: 'Développement front-end Vue.js intégral. Back-end Laravel à venir.',
        date: 'Mai → Juillet 2026',
        duration: '6 semaines',
        location: 'Strasbourg',
        role: 'Développeur stagiaire',
        shortDescription: "Application de scoring et suivi pour une structure d'accompagnement de personnes neuroatypiques. Tests gratuits, scoring automatisé, envoi de bilans par e-mail.",
        longDescription: "Mission de stage de première année de BTS SIO. J'ai conçu et développé une application web pour Lerneuro, structure d'accompagnement de personnes neuroatypiques. L'application permet aux praticiens d'être mis en avant et aux patients de passer gratuitement des tests reconnus (ASRS, AQ-10, MEWS, AUDIT, CAST, SAS-SV). Le scoring est automatisé selon les barèmes officiels, ce qui accélère significativement le travail du praticien. La suite consistera à mettre en place une base de données et une API avec Laravel.",
        stack: ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'Vite'],
        slug: 'nerleuro',
        featured: true,
        liveUrl: null,
        githubUrl: null,

        sections: [
            {
                title: 'Contexte',
                content: "Lerneuro accompagne des personnes neuroatypiques (TDAH, TSA, troubles anxieux, addictions). Le site utilise plusieurs questionnaires validés scientifiquement à 100% et génère un scoring automatisé. Avant ce projet, les bilans étaient remplis manuellement sur papier puis consultés par les psychologues, ce qui prenait un temps considérable.",
                image: {
                    src: '/lerneuro/images/accueil.png',
                    alt: "Page d'accueil de l'application",
                    caption: "Page d'accueil de l'application"
                },
            },
            {
                title: 'Test : passation du questionnaire',
                content: "Application web interne qui automatise la passation des questionnaires. Interface adaptée à un public neuroatypique : navigation claire, options explicites, indicateur de progression. Les questions et le barème de scoring sont définis de manière typée dans un module dédié.",
                image: {
                    src: '/lerneuro/images/testtdah.png',
                    alt: "Questionnaire ASRS en cours",
                    caption: "Passation d'un test ASRS"
                },
                code: {
                    title: 'Structure du questionnaire ASRS',
                    description: "Définition typée des questions avec leurs options, le barème officiel, et la gestion des questions inversées.",
                    language: 'typescript',
                    code: `// questionnaire.ts
{
  id: 'q1', type: 'single', partie: 'A', dimension: 'inattention',
  title: 'À quelle fréquence avez-vous de la difficulté à finaliser un projet, une fois que le gros du travail a été effectué ?',
  options: ['Jamais', 'Rarement', 'Parfois', 'Souvent', 'Très souvent'],
  scores: [0, 1, 2, 3, 4],
  inverted: false
},
{
  id: 'q2', type: 'single', partie: 'A', dimension: 'inattention',
  title: 'À quelle fréquence avez-vous de la difficulté à établir les priorités lorsque vous devez effectuer une tâche qui requiert de l organisation ?',
  options: ['Jamais', 'Rarement', 'Parfois', 'Souvent', 'Très souvent'],
  scores: [0, 1, 2, 3, 4],
  inverted: false
}`
                },
            },
            {
                title: 'Scoring automatisé',
                content: "Le scoring calcule le résultat total selon le barème officiel, en gérant automatiquement les questions inversées. Le résultat est ensuite interprété en niveau (faible, modéré, élevé) avec un message orienté vers l'utilisateur et une recommandation de suivi.",
                image: {
                    src: '/lerneuro/images/resultat.png',
                    alt: "Résultat du test ASRS",
                    caption: "Affichage du résultat avec interprétation"
                },
                code: {
                    title: 'Algorithme de scoring',
                    description: "Parcours des réponses, gestion des inversions, interprétation finale du score.",
                    language: 'typescript',
                    code: `// scoring.ts
let total = 0
for (const question of questionnaire.questions) {
  const reponse = answers[question.id]
  if (!reponse || !question.options || !question.scores) continue

  const index = question.options.indexOf(reponse)
  let score = question.scores[index] ?? 0

  if (question.inverted) {
    const maxScore = Math.max(...question.scores)
    score = maxScore - score
  }

  total += score
}

return interpreterScore(total, questionnaire.id)

// Interprétation
function interpreterScore(total, id) {
  return {
    total,
    scoreMax: 0,
    level: 'faible',
    message: 'Résultat calculé.',
    specialiste: 'Consultez un professionnel de santé.'
  }
}`
                },
            },
            {
                title: 'Envoi du bilan par e-mail',
                content: "À la fin du test, l'utilisateur peut recevoir son bilan complet par e-mail. L'envoi est géré côté client via EmailJS, ce qui évite de monter un serveur de mail intermédiaire pendant la phase prototype. Le passage à un envoi serveur (PHPMailer ou équivalent) est prévu lors de l'intégration Laravel.",
                image: {
                    src: '/lerneuro/images/envoimail.png',
                    alt: "Aperçu d'un bilan envoyé par mail",
                    caption: "Bilan automatisé reçu par le bénéficiaire"
                },
                code: {
                    title: 'Envoi via EmailJS',
                    description: "Configuration EmailJS et envoi du rapport au bénéficiaire.",
                    language: 'typescript',
                    code: `// envoi.ts
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_4xyt0rt'
const EMAILJS_TEMPLATE_ID = 'template_urf5ck9'
const EMAILJS_PUBLIC_KEY  = 'VOTRE_CLE_PUBLIQUE'

await emailjs.send(
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  {
    to_email: email.value,
    questionnaire: titre,
    score: result.total,
    interpretation: result.message
  },
  EMAILJS_PUBLIC_KEY
)`
                },
            },
            {
                title: 'Suite du projet',
                content: "Le front-end est quasi complet. Les retours utilisateurs des psychologues professionnels ont permis d'améliorer l'ergonomie de l'interface. La prochaine étape est l'implémentation de la base de données et de l'API en Laravel, avec mise en place de tests automatisés.",
            },
        ],

        documents: [
            { label: 'Convention de stage', file: '/lerneuro/docs/convention.pdf', type: 'pdf', description: "Document officiel signé entre l'établissement, Lerneuro et l'étudiant" },
            { label: 'Cahier des charges', file: '/lerneuro/docs/cahier-des-charges.pdf', type: 'pdf', description: 'Spécifications fonctionnelles et techniques' },
        ],

        images: [],
        codeBlocks: [],
        competences: ['C', 'F', 'G'],
    },

    // ============================================================
    // 02 — CLEAN & CO
    // ============================================================
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
        longDescription: "Première mission freelance complète, menée de bout en bout pour Clean & CO, une entreprise de ménage premium à Strasbourg. J'ai pris en charge l'intégralité du projet : analyse du besoin, rédaction du cahier des charges client, réponse formelle, devis (1 500 € HT avec échéancier 40/30/30), planning Gantt, charte graphique, développement WordPress avec Astra et Elementor, mise en ligne et accompagnement post-livraison.",
        stack: ['WordPress', 'Astra', 'Elementor', 'CSS', 'Photoshop'],
        slug: 'clean-co',
        featured: true,
        liveUrl: null,
        githubUrl: null,

        sections: [
            {
                title: 'Contexte',
                content: "Clean & CO est une jeune entreprise de ménage premium à Strasbourg, qui cible particuliers et professionnels avec une promesse de qualité haut de gamme. Le client n'avait pas de présence en ligne et souhaitait un site vitrine moderne, qui inspire confiance et présente clairement ses services.",
            },
            {
                title: 'Cahier des charges et devis',
                content: "J'ai rédigé un cahier des charges détaillé pour cadrer le besoin (objectifs, pages requises, identité visuelle, fonctionnalités). Suivi d'une proposition formelle avec planning et budget. Le devis a été établi à 1 500 € HT avec un échéancier 40 % à la signature, 30 % à la validation des maquettes, 30 % à la livraison.",
            },
            {
                title: 'Planning et conduite de projet',
                content: "Un diagramme de Gantt a structuré les 5 phases du projet sur 4 mois : analyse, design, développement, tests, mise en ligne. Le suivi régulier a permis de respecter les jalons et de communiquer clairement avec le client sur l'avancement.",
            },
            {
                title: 'Design et développement',
                content: "Charte graphique avec une palette sombre et accent vert néon pour différencier la marque dans son secteur. Développement sous WordPress avec le thème Astra et le constructeur Elementor pour une livraison rapide et une maintenance simple pour le client après la livraison.",
            },
            {
                title: 'Bilan',
                content: "Mission en cours de finalisation. Cette première expérience freelance complète m'a permis de pratiquer toutes les facettes de la gestion de projet web : relation client, rédaction contractuelle, estimation budgétaire, planning, exécution et accompagnement.",
            },
        ],

        documents: [],
        images: [],
        codeBlocks: [],
        competences: ['E', 'F', 'G'],
    },

    // ============================================================
    // 03 — PARCUS
    // ============================================================
    {
        num: '03',
        category: 'Activité Pro 2',
        title: 'Parcus',
        subtitle: 'Infrastructure réseau DSI',
        contribution: "Au sein de l'équipe AP2, j'ai pris en charge la configuration du serveur Windows Server 2025 (rôles AD DS, DNS, DHCP, GPO, déploiement BitLocker) ainsi que l'installation et la configuration de la stack LAMP sur le serveur Debian. J'ai également documenté les procédures de support pour les utilisateurs.",
        date: 'Janvier → Février 2026',
        duration: '6 semaines',
        location: "Lycée — projet d'équipe",
        role: "Membre d'équipe — administration système",
        shortDescription: "Infrastructure réseau d'une DSI sur machines virtuelles : configuration multi-VM, ticketing GLPI, sécurisation et procédures support documentées.",
        longDescription: "Projet d'AP2 : déploiement d'une infrastructure virtuelle pour une entreprise fictive de gestion de parking (PARCUS, 83 employés). Montage d'une DSI complète sur VMware Workstation Pro, avec serveur Windows (AD, DNS, DHCP, GPO, WDS, BitLocker) et serveur Linux (LAMP, GLPI, FusionInventory, RustDesk), tous deux sur un réseau interne segmenté.",
        stack: ['VMware', 'Windows Server 2025', 'Debian 13', 'GLPI', 'Active Directory'],
        slug: 'parcus',
        featured: true,
        liveUrl: null,
        githubUrl: null,

        sections: [
            {
                title: 'Contexte',
                content: "PARCUS est une entreprise fictive de gestion de parking comptant 83 employés. Le projet d'AP2 consistait à concevoir et déployer son infrastructure informatique complète depuis zéro, en environnement virtualisé.",
            },
            {
                title: 'Architecture',
                content: "L'infrastructure est consolidée sur deux machines virtuelles principales : SRV-WIN-01 (Windows Server 2025 avec AD DS, DNS, DHCP, GPO, WDS, BitLocker sur le domaine parcus.local) et SRV-LNX-02 (Debian 13 avec LAMP, GLPI, FusionInventory, RustDesk). Tout fonctionne sur le réseau VMnet10 (192.168.100.0/24).",
            },
            {
                title: 'Sécurisation',
                content: "Mise en place de BitLocker sur le serveur Windows, configuration de règles de pare-feu, gestion des habilitations via Active Directory, segmentation réseau, procédures de sauvegarde.",
            },
            {
                title: 'Ticketing et support',
                content: "Installation de GLPI sur le serveur Debian pour gérer les tickets de support des utilisateurs. Documentation des procédures classiques (création de compte, réinitialisation de mot de passe, déploiement d'application).",
            },
            {
                title: 'Bilan',
                content: "La session s'est terminée avant la finalisation complète de GLPI. Une présentation E5 a été préparée avec un .pptx résumant l'architecture et les choix techniques. Ce projet m'a fait découvrir l'administration système Windows Server et les bonnes pratiques de sécurisation d'une infrastructure d'entreprise.",
            },
        ],

        documents: [],
        images: [],
        codeBlocks: [],
        competences: ['C', 'D', 'F', 'G'],
    },

    // ============================================================
    // 04 — PORTFOLIO
    // ============================================================
    {
        num: '04',
        category: 'Méta',
        title: 'Portfolio',
        subtitle: 'Le site que vous visitez',
        date: 'Mai → Juin 2026',
        duration: '2 semaines',
        location: 'Strasbourg',
        role: 'Solo',
        shortDescription: "Le site que vous visitez. Vue.js + Vite, hébergé sur Vercel. Toggle jour/nuit, palette sable/nuit.",
        longDescription: "Conception et développement complets du présent portfolio. Le projet est construit en Vue 3 + Vite, avec Vue Router pour la navigation. La direction artistique propose deux ambiances complémentaires : sable doux et nuit bleutée avec accent or. Le toggle de thème est persistant via localStorage. Le site est responsive et déployé sur Vercel avec déploiement automatique à chaque push Git.",
        stack: ['Vue 3', 'Vite', 'Vue Router', 'JavaScript', 'CSS'],
        slug: 'portfolio',
        featured: false,
        liveUrl: null,
        githubUrl: null,

        sections: [
            {
                title: 'Objectifs',
                content: "Disposer d'un portfolio numérique pour présenter mes projets de manière vivante et documentée dans le cadre de l'épreuve E5 du BTS SIO. Plutôt qu'un service tout fait ou un thème générique, j'ai préféré le construire de zéro pour démontrer mes compétences en développement front-end moderne.",
            },
            {
                title: 'Choix techniques',
                content: "Vue 3 avec la Composition API, Vite pour le build, Vue Router pour la navigation. Pas de framework lourd type Nuxt pour rester sur quelque chose de simple à comprendre et démontrer la maîtrise des fondamentaux. Les thèmes utilisent les CSS Custom Properties pour basculer sans recompilation.",
            },
            {
                title: 'Direction artistique',
                content: "Deux palettes complémentaires : un mode jour en sable doux avec accent terra cotta, et un mode nuit en bleu profond avec accent or. La typographie combine Inter pour le corps et Cormorant Garamond utilisée parcimonieusement pour quelques mots-clés en italique.",
            },
            {
                title: 'Déploiement',
                content: "Le site est hébergé sur Vercel avec déploiement continu : chaque push sur la branche main déclenche automatiquement un nouveau build et une mise en ligne. Le repo est versionné sur GitHub.",
            },
        ],

        documents: [],
        images: [],
        codeBlocks: [],
        competences: ['E', 'F', 'H'],
    },

    // ============================================================
    // 05 — TODO APP
    // ============================================================
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
        longDescription: "Travaux pratiques de première année : développement d'une application complète de gestion de tâches en PHP/MySQL. CRUD intégral, sécurité (requêtes préparées PDO, échappement HTML), validation côté client en JavaScript, structure modulaire avec require pour les éléments mutualisés.",
        stack: ['PHP', 'MySQL', 'PDO', 'JavaScript', 'MAMP'],
        slug: 'todo-app',
        featured: false,
        liveUrl: null,
        githubUrl: null,

        sections: [
            {
                title: 'Objectifs pédagogiques',
                content: "Maîtriser les fondamentaux PHP/MySQL : connexion via PDO, manipulation de données en CRUD, sécurisation contre les injections SQL et XSS, structure modulaire d'un projet web procédural.",
            },
            {
                title: 'Réalisation',
                content: "Application fonctionnelle déployée sur MAMP, avec toutes les opérations CRUD, validation des saisies côté client en JS, sécurisation côté serveur avec requêtes préparées PDO et htmlspecialchars sur les sorties.",
            },
        ],

        documents: [],
        images: [],
        codeBlocks: [],
        competences: ['C', 'F', 'G'],
    },

    // ============================================================
    // 06 — TP COLLECTION
    // ============================================================
    {
        num: '06',
        category: 'Cours',
        title: 'TP Collection',
        subtitle: 'SQL multi-tables avec JOIN',
        date: 'Novembre → Décembre 2025',
        duration: '4 semaines',
        location: 'BTS SIO — TP',
        role: 'Solo',
        shortDescription: "Modélisation à 4 tables liées, requêtes JOIN et LEFT JOIN, architecture modulaire.",
        longDescription: "Travaux pratiques de gestion de collection personnelle (mangas, livres, DVDs) en PHP/MySQL avec 4 tables liées. Pratique des relations entre entités, des jointures SQL et de l'architecture modulaire.",
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
                title: 'Réalisation',
                content: "Application CRUD sur 4 tables liées avec gestion correcte des relations, jointures pour les vues consolidées, et résolution de problèmes typiques rencontrés en cours de développement.",
            },
        ],

        documents: [],
        images: [],
        codeBlocks: [],
        competences: ['C', 'F'],
    },

]

// Helper pour trouver un projet par son slug
export const getProjectBySlug = (slug) => {
    return projects.find(p => p.slug === slug)
}