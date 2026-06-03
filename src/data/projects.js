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
    // 02 — CLEAN & CO (Freelance)
    // ============================================================
    {
        num: '02',
        category: 'Freelance',
        title: 'Clean & CO',
        subtitle: 'Site vitrine WordPress',
        date: 'Mai → Juin 2026',
        duration: '2 mois',
        location: 'Strasbourg',
        role: 'Freelance — gestion projet et développement',
        shortDescription: "Mission freelance complète pour une entreprise de ménage premium à Strasbourg : cahier des charges, devis, développement WordPress.",
        longDescription: "Première mission freelance complète menée de bout en bout. J'ai pris en charge l'intégralité du projet : prise en compte du du cahier des charges client, réponse formelle, devis, planning , charte graphique, développement WordPress avec Astra et Elementor, mise en ligne et accompagnement post-livraison.",
        stack: ['WordPress', 'Astra', 'Elementor',],
        slug: 'clean-co',
        featured: true,
        liveUrl: null,
        githubUrl: null,

        sections: [
            {
                title: 'Contexte client',
                content: "Clean & CO est une jeune entreprise de ménage premium à Strasbourg, qui cible particuliers et professionnels avec une promesse de qualité haut de gamme. Le client n'avait aucune présence en ligne et souhaitait un site vitrine moderne, qui inspire confiance et présente clairement ses services et tarifs.",
                image: {
                    src: '/clean-co/images/accueil.png',
                    alt: "Page d'accueil du site Clean & CO",
                    caption: "Page d'accueil du site livré"
                },
            },
            {
                title: 'Cahier des charges et devis',
                content: "J'ai pris en compte le cahier des charges et établis un devis.Le devis a été établi à 550 € HT avec un échéancier 50 % à la signature, 50 % à la livraison.",
                image: {
                    src: '/clean-co/images/devis.png',
                    alt: "Devis Clean & CO",
                    caption: "Devis "
                },
            },
            {
                title: 'Planning et conduite de projet',
                content: "Un diagramme de Gantt a structuré les 5 phases du projet sur 2 mois : analyse, design, développement, tests, mise en ligne. Le suivi régulier des jalons a permis de respecter les délais et de communiquer clairement avec le client sur l'avancement.",
                image: {
                    src: '/clean-co/images/gantt.png',
                    alt: "Diagramme de Gantt Clean & CO",
                    caption: "Planning Gantt du projet"
                },
            },
            {
                title: 'Charte graphique',
                content: "Charte graphique avec une palette sombre et accent vert néon pour différencier la marque dans son secteur. Choix typographiques, palette colorée complète, déclinaisons sur les supports principaux. La charte a été validée par le client avant le lancement du développement.",
                image: {
                    src: '/clean-co/images/charte.png',
                    alt: "Charte graphique Clean & CO",
                    caption: "Identité visuelle de la marque"
                },
            },
            {
                title: 'Développement et mise en ligne',
                content: "Développement sous WordPress avec le thème Astra et le constructeur Elementor pour une livraison rapide et une maintenance simple pour le client après la livraison. Mise en ligne sur l'hébergement du client.",
                image: {
                    src: '/clean-co/images/site-final.png',
                    alt: "Site Clean & CO",
                    caption: "Site en cours de développement"
                },
            },
            {
                title: 'Page du service en cours de développement',
                content: "Page d'un service en cours de développement.",
                image: {
                    src: '/clean-co/images/service.png',
                    alt: "Service Clean & CO",
                    caption: "Service en cours de développement"
                },
            },
            {
                title: 'Bilan',
                content: "Cette première expérience freelance complète m'a permis de pratiquer toutes les facettes de la gestion de projet web : relation client, rédaction contractuelle, estimation budgétaire, planning, exécution et accompagnement. Le client est satisfait et m'a recommandé à des contacts de son réseau.",
            },
        ],

        documents: [
            { label: 'Cahier des charges client', file: '/clean-co/docs/cahier-des-charges.pdf', type: 'pdf', description: "Document rédigé par le client" },
            { label: 'Devis ', file: '/clean-co/docs/devis.pdf', type: 'pdf', description: "Devis 550 € HT, échéancier 50/50" },
            { label: 'Diagramme de Gantt', file: '/clean-co/docs/gantt.pdf', type: 'pdf', description: "Planning des 5 phases du projet" },

        ],

        images: [],
        codeBlocks: [],
        competences: ['E', 'F', 'G', 'H'],
    },

    // ============================================================
    // 03 — PARCUS (AP2)
    // ============================================================
    {
        num: '03',
        category: 'Activité Pro 2',
        title: 'Parcus',
        subtitle: 'Infrastructure réseau DSI',
        contribution: "Au sein de l'équipe AP2, j'ai pris en charge le projet entier, la configuration du serveur Windows Server 2025 (rôles AD DS, DNS, DHCP, GPO, déploiement BitLocker) ainsi que l'installation et la configuration de la stack LAMP sur le serveur Debian. J'ai également documenté les procédures de support pour les utilisateurs.",
        date: 'Janvier → Juillet 2026',
        duration: '6 semaines',
        location: "Ifide Sup — projet d'équipe",
        role: "Chef de projet et administrateur système",
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
                content: "PARCUS est une entreprise de gestion de parking Strasbourgeoise comptant 83 employés. Le projet d'AP2 consistait à concevoir et déployer son infrastructure informatique complète depuis zéro ( de manière fictive), en environnement virtualisé pour des contraintes pédagogiques.",
                image: {
                    src: '/parcus/images/schema.svg',
                    alt: "Schéma du réseau Parcus",
                    caption: "Architecture réseau cible"
                },
            },
            {
                title: 'Architecture',
                content: "L'infrastructure est consolidée sur deux machines virtuelles principales : SRV-WIN-01 (Windows Server 2025 avec AD DS, DNS, DHCP, GPO, WDS, BitLocker sur le domaine parcus.local) et SRV-LNX-02 (Debian 13 avec LAMP, GLPI, FusionInventory, RustDesk). Tout fonctionne sur le réseau VMnet10 (192.168.100.0/24).",
                image: {
                    src: '/parcus/images/vms.png',
                    alt: "Les deux serveurs virtuels",
                    caption: "Vue VMware des deux serveurs"
                },
            },

            {
                title: 'Faire communiquer les machines virtuelles',
                content: "Connecter les machines sur un reseau local et faire les verifications de communication (ping, nslookup). Configuration du serveur Windows pour assurer la résolution DNS et la distribution d'adresses IP via DHCP, ce qui permet aux postes clients de rejoindre le domaine et d'accéder aux ressources partagées.",
                image: {
                    src: '/parcus/images/ping.png',
                    alt: "console avec ping ip",
                    caption: "ping entre les machines virtuelles pour vérifier la communication"
                },
            },
            {
                title: 'Active Directory et GPO',
                content: "Configuration du serveur Windows : promotion en contrôleur de domaine, création des unités d'organisation, création des comptes utilisateurs et groupes, stratégies de groupe pour la gestion des postes clients, paramétrage DNS et DHCP.",
                image: {
                    src: '/parcus/images/domaine.png',
                    alt: "Console Active Directory",
                    caption: "Annuaire AD parcus.local"
                },
            },

            {
                title: 'Bilan',
                content: "Le projet est toujours en cours de création je met actuellement en place le serveur debian sans interface graphique. Le projet m'a fait découvrir l'administration système Windows Server et les bonnes pratiques de sécurisation d'une infrastructure d'entreprise.",
            },
        ],

        documents: [
            { label: 'Présentation du projet', file: '/parcus/docs/livrable_1_Alpha.pdf', type: 'pdf', description: "Réponse au cahier des charges , livrable n°1" },
            { label: 'Schéma réseau', file: '/parcus/docs/schema.svg', type: 'svg', description: "Schéma d'architecture du réseau" },
        ],

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
        duration: '',
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
                content: "Disposer d'un portfolio numérique pour présenter mes projets dans le cadre de l'épreuve E5 du BTS SIO. Plutôt qu'un service tout fait ou un thème générique, j'ai préféré le construire de zéro pour démontrer mes compétences en développement front-end moderne.",
                image: {
                    src: '/portfolio/images/accueil.png',
                    alt: "Page d'accueil du portfolio",
                    caption: "Page d'accueil en mode nuit"
                },
            },
            {
                title: 'Choix techniques',
                content: "Vue 3 avec la Composition API, Vite pour le build ultrarapide, Vue Router pour la navigation entre les pages. Pas de framework lourd type Nuxt, ce qui simplifie la compréhension du code et démontre la maîtrise des fondamentaux. Les deux thèmes utilisent les CSS Custom Properties pour basculer sans recompilation.",
                code: {
                    title: 'Composable de gestion du thème',
                    description: "Bascule jour/nuit avec persistance localStorage.",
                    language: 'javascript',
                    code: `// composables/useTheme.js
import { ref } from 'vue'

const theme = ref('night')

export function useTheme() {
  const applyTheme = (next) => {
    theme.value = next
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('portfolio-theme', next)
  }

  const toggleTheme = () => {
    applyTheme(theme.value === 'night' ? 'day' : 'night')
  }

  return { theme, toggleTheme }
}`
                },
            },
            {
                title: 'Direction artistique',
                content: "Deux palettes complémentaires : un mode jour en sable doux avec accent terra cotta, et un mode nuit en bleu profond avec accent or. La typographie combine Inter pour le corps et Cormorant Garamond utilisée parcimonieusement pour quelques mots-clés en italique.",
                image: {
                    src: '/portfolio/images/themes.png',
                    alt: "Comparaison des deux thèmes",
                    caption: "Mode jour et mode nuit"
                },
            },
            {
                title: 'Déploiement continu',
                content: "Le site est hébergé sur Vercel avec déploiement continu : chaque push sur la branche main déclenche automatiquement un nouveau build et une mise en ligne. Le repo est versionné sur GitHub, ce qui permet un suivi clair des évolutions.",
            },
        ],

        documents: [],
        images: [],
        codeBlocks: [],
        competences: ['E', 'F', 'H'],
    },

    // ============================================================
    // 05 — TODO APP (Cours)
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
                image: {
                    src: '/todo-app/images/accueil.png',
                    alt: "Page d'accueil ToDo App",
                    caption: "Interface principale"
                },
            },
            {
                title: 'Sécurité : requêtes préparées',
                content: "Utilisation systématique des requêtes préparées PDO pour se protéger des injections SQL. Échappement des sorties HTML avec htmlspecialchars pour éviter les attaques XSS.",
                code: {
                    title: 'Insertion sécurisée d\'une tâche',
                    description: "Requête préparée avec paramètres nommés.",
                    language: 'php',
                    code: `<?php
$sql = "INSERT INTO taches (titre, description, statut) 
        VALUES (:titre, :description, :statut)";
$stmt = $pdo->prepare($sql);
$stmt->execute([
    ':titre' => $_POST['titre'],
    ':description' => $_POST['description'],
    ':statut' => 'en_cours'
]);`
                },
            },
            {
                title: 'CRUD complet',
                content: "Implémentation des quatre opérations classiques : création, lecture, mise à jour, suppression. Chaque action est sécurisée et gère les cas d'erreur (tâche introuvable, données invalides).",
                image: {
                    src: '/todo-app/images/edition.png',
                    alt: "Édition d'une tâche",
                    caption: "Formulaire d'édition"
                },
            },
            {
                title: 'Validation côté client',
                content: "Validation JavaScript des formulaires avant envoi : champs obligatoires, longueurs minimum/maximum, formats. Cela évite des allers-retours inutiles au serveur tout en gardant la validation côté serveur comme rempart de sécurité.",
            },
        ],

        documents: [],
        images: [],
        codeBlocks: [],
        competences: ['C', 'F', 'G'],
    },

    // ============================================================
    // 06 — TP COLLECTION (Cours)
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
        longDescription: "Travaux pratiques de gestion de collection personnelle (mangas, livres, DVDs) en PHP/MySQL avec 4 tables liées. Pratique des relations entre entités, des jointures SQL et de l'architecture modulaire d'un projet PHP procédural.",
        stack: ['PHP', 'MySQL', 'PDO', 'JOIN'],
        slug: 'tp-collection',
        featured: false,
        liveUrl: null,
        githubUrl: null,

        sections: [
            {
                title: 'Modélisation relationnelle',
                content: "Conception d'un modèle de données à 4 tables liées avec clés étrangères : collections, items, catégories, tags. Mise en pratique des concepts de relations 1-N et N-N avec table de jointure.",
                image: {
                    src: '/tp-collection/images/mcd.png',
                    alt: "MCD de la collection",
                    caption: "Modèle conceptuel de données"
                },
            },
            {
                title: 'Jointures SQL',
                content: "Utilisation des JOIN et LEFT JOIN pour récupérer des données réparties sur plusieurs tables. Gestion des cas où certaines relations sont optionnelles (LEFT JOIN) vs obligatoires (INNER JOIN).",
                code: {
                    title: 'Requête JOIN multi-tables',
                    description: "Récupération d'une collection avec ses items, leur catégorie et leurs tags.",
                    language: 'sql',
                    code: `SELECT 
    c.nom AS collection,
    i.titre AS item,
    cat.nom AS categorie,
    GROUP_CONCAT(t.nom) AS tags
FROM collections c
INNER JOIN items i ON i.collection_id = c.id
LEFT JOIN categories cat ON i.categorie_id = cat.id
LEFT JOIN items_tags it ON it.item_id = i.id
LEFT JOIN tags t ON it.tag_id = t.id
WHERE c.id = :collection_id
GROUP BY i.id;`
                },
            },
            {
                title: 'Architecture modulaire',
                content: "Mise en place d'une structure de projet réutilisable : un fichier header et footer mutualisés via require, un fichier de connexion PDO centralisé, des fonctions utilitaires regroupées dans un fichier helpers.php.",
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