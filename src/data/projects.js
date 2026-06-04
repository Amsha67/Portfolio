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
        stack: ['Vue 3', 'TypeScript', 'Vue Router', 'Vite', 'EmailJS', 'Laravel'],
        slug: 'lerneuro',
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
                title: 'Architecture du scoring',
                content: "Le scoring est implémenté dans un module unique scoring.ts qui agit comme un répartiteur. Chaque questionnaire (ASRS, AQ-10, AQ-50, MEWS, AUDIT, CAST, SAS-SV) a ses propres règles de calcul et ses propres seuils cliniques. Plutôt que de tout mélanger, j'ai isolé chaque algorithme dans une fonction dédiée, et créé une fonction centrale qui aiguille vers la bonne méthode selon l'identifiant du questionnaire.",
                image: {
                    src: '/lerneuro/images/resultat.png',
                    alt: "Résultat affiché à l'utilisateur",
                    caption: "Restitution du score à l'utilisateur"
                },
                code: {
                    title: 'Dispatcher : la fonction d\'entrée',
                    description: "Une seule fonction publique appelée par l'interface. Elle aiguille vers le bon algorithme selon le questionnaire, avec un fallback générique pour les cas simples.",
                    language: 'typescript',
                    code: `// scoring.ts — point d'entrée
export function calculerScore(
  questionnaire: Questionnaire,
  answers: Record<string, string>
): ScoreResult {

  // Scoring spécialisé : chaque questionnaire qui a
  // des règles particulières a sa propre fonction
  if (questionnaire.id === 'asrs')  return calculerASRS(questionnaire, answers)
  if (questionnaire.id === 'aq10')  return calculerAQ10(questionnaire, answers)
  if (questionnaire.id === 'aq50')  return calculerAQ50(questionnaire, answers)
  if (questionnaire.id === 'mews')  return calculerMEWS(questionnaire, answers)
  if (questionnaire.id === 'audit') return calculerAUDIT(questionnaire, answers)
  if (questionnaire.id === 'cast')  return calculerCAST(questionnaire, answers)
  if (questionnaire.id === 'sas')   return calculerSAS(questionnaire, answers)

  // Fallback : scoring linéaire générique
  return calculerScoreGenerique(questionnaire, answers)
}`
                },
            },
            {
                title: 'Scoring générique',
                content: "Pour les questionnaires qui suivent une logique simple — un score par réponse, addition de tous les scores, comparaison à un seuil — la fonction générique suffit. Elle parcourt les questions, récupère le score correspondant à la réponse choisie, gère le cas des questions inversées (où une réponse positive doit compter négativement), et accumule le total.",
                code: {
                    title: 'Boucle de calcul standard',
                    description: "Parcours des questions, lecture du score associé à la réponse, gestion des questions inversées.",
                    language: 'typescript',
                    code: `function calculerScoreGenerique(
  questionnaire: Questionnaire,
  answers: Record<string, string>
): ScoreResult {

  let total = 0

  for (const question of questionnaire.questions) {
    const reponse = answers[question.id]
    if (!reponse || !question.options || !question.scores) continue

    // On retrouve l'index de la réponse choisie
    const index = question.options.indexOf(reponse)
    let score = question.scores[index] ?? 0

    // Question inversée : on inverse le barème
    if (question.inverted) {
      const maxScore = Math.max(...question.scores)
      score = maxScore - score
    }

    total += score
  }

  return interpreterScore(total, questionnaire.id)
}`
                },
            },
            {
                title: 'Cas complexe : le scoring ASRS',
                content: "L'ASRS (dépistage TDAH adulte) est un cas particulier qui m'a obligé à sortir du modèle générique. Il est divisé en deux parties — la partie A (6 questions, score de dépistage clinique) et la partie B (12 questions, score complémentaire) — et son interprétation ne dépend pas du score total mais du nombre de « réponses significatives » dans la partie A. Les seuils ne sont pas non plus les mêmes pour les questions 1 à 3 et 4 à 6.",
                code: {
                    title: 'Algorithme ASRS — comptage des réponses significatives',
                    description: "Distinction partie A / partie B, seuils spécifiques par question, interprétation basée sur le nombre de réponses significatives plutôt que le score brut.",
                    language: 'typescript',
                    code: `function calculerASRS(
  questionnaire: Questionnaire,
  answers: Record<string, string>
): ScoreResult {

  let partieA = 0, total = 0, reponsesSignificativesA = 0

  const questionsA = questionnaire.questions.filter(q => q.partie === 'A')
  const questionsB = questionnaire.questions.filter(q => q.partie === 'B')

  // Partie A : les 6 questions de dépistage clinique
  questionsA.forEach((q, i) => {
    const reponse = answers[q.id]
    if (!reponse || !q.options || !q.scores) return

    const index = q.options.indexOf(reponse)
    const score = q.scores[index] ?? 0
    partieA += score
    total   += score

    // Seuils ASRS officiels :
    //  - Q1 à Q3 : "Parfois" ou plus = significatif
    //  - Q4 à Q6 : "Souvent" ou plus  = significatif
    if (i < 3 && index >= 2) reponsesSignificativesA++
    if (i >= 3 && index >= 3) reponsesSignificativesA++
  })

  // Partie B : score complémentaire, pas utilisé pour le dépistage
  questionsB.forEach(q => {
    const reponse = answers[q.id]
    if (!reponse || !q.options || !q.scores) return
    const index = q.options.indexOf(reponse)
    total += q.scores[index] ?? 0
  })

  // Interprétation : c'est le nombre de réponses
  // significatives qui déclenche l'alerte clinique
  if (reponsesSignificativesA >= 4) {
    return {
      total, scoreMax: 72, partieA, level: 'eleve',
      message: 'Symptômes significatifs pouvant correspondre à un TDAH.',
      specialiste: 'Psychiatre ou neuropsychologue spécialisé TDAH adulte.',
      details: \`\${reponsesSignificativesA}/6 réponses significatives en partie A\`
    }
  }

  // ... cas modere et faible
}`
                },
            },
            {
                title: 'Envoi du bilan par e-mail',
                content: "À la fin du test, l'utilisateur peut telecharger le bilan complet et l'envoi par e-mail. L'envoi est géré côté client via EmailJS, ce qui évite de monter un serveur de mail intermédiaire pendant la phase prototype. Le passage à un envoi serveur (PHPMailer ou équivalent) est prévu lors de l'intégration Laravel.",
                image: {
                    src: '/lerneuro/images/envoimail.png',
                    alt: "Aperçu d'un bilan envoyé par mail",
                    caption: "Bilan automatisé reçu par le bénéficiaire"
                },


            },
            {
                title: 'Suite du projet',
                content: "Le front-end est quasi complet. Les retours utilisateurs des psychologues professionnels ont permis d'améliorer l'ergonomie de l'interface. La prochaine étape est l'implémentation de la base de données et de l'API en Laravel, avec mise en place de tests automatisés.",
            },
        ],

        documents: [
            { label: 'Convention de stage', file: '/lerneuro/docs/convstage.pdf', type: 'pdf', description: "Document officiel signé " },
            { label: 'Cahier des charges', file: '/lerneuro/docs/cahier-des-charges.pdf', type: 'pdf', description: 'Cahier des charges du site qui me permet de structurer le développement' },
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
                    caption: "Page d'accueil du site Clean & CO"
                },
            },
            {
                title: 'Cahier des charges et devis',
                content: "J'ai pris en compte le cahier des charges et établis un devis.Le devis a été établi à 550 € HT avec un échéancier 50 % à la signature, 50 % à la livraison.",
                image: {
                    src: '/clean-co/images/devis.png',
                    alt: "Devis Clean & CO",
                    caption: "Devis Clean & CO"
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
            { label: 'Diagramme de Gantt', file: '/clean-co/docs/gantt.png', type: 'png', description: "Planning des 5 phases du projet" },

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
        subtitle: 'Développement Front-End & Sécurité',
        date: 'Mai → Juin 2026',
        duration: '',
        location: 'Strasbourg',
        role: 'Développeur Front-end',
        shortDescription: "Le site que vous visitez. Vue 3 + Vite, architecture orientée composants, Dark/Light mode interactif, formulaire sécurisé EmailJS.",
        longDescription: "Conception et développement complets du présent portfolio pour l'épreuve E5. L'objectif était de démontrer une maîtrise technique de bout en bout : initialisation de l'environnement avec Vite, structuration modulaire (Vues vs Composants), persistance des données côté client, sécurisation anti-spam et respect du cadre juridique RGPD. Le projet repose sur une architecture Serverless pour l'envoi d'e-mails.",
        stack: ['Vue 3', 'Vite', 'NPM', 'EmailJS', 'CSS Variables'],
        slug: 'portfolio',
        featured: false,
        liveUrl: 'https://portfolio-2026-ecru-three.vercel.app/',
        githubUrl: 'https://github.com/Amsha67/portfolio',

        sections: [
            {
                title: 'Initialisation et Environnement de Développement',
                content: "Le projet a été généré avec l'outil de build Vite, réputé pour sa rapidité d'exécution, couplé au framework Vue 3. Tout l'environnement repose sur Node.js et son gestionnaire de paquets (NPM). Le développement s'effectue en local avec rechargement à chaud (Hot Module Replacement), ce qui permet de voir les modifications en temps réel sans rafraîchir le navigateur.",
                code: {
                    title: 'Commandes de base du projet',
                    description: "Initialisation et lancement du serveur de développement local.",
                    language: 'bash',
                    code: `# Création du projet initial avec la dernière version de Vue
npm create vue@latest

# Installation des dépendances (node_modules)
npm install

# Lancement du serveur de développement local
npm run dev`
                },
            },
            {
                title: 'Architecture Modulaire : Vues et Composants',
                content: "L'application suit une structure stricte pour séparer la logique de l'interface. J'ai utilisé Vue Router pour gérer la navigation entre les 'Vues' (pages complètes comme l'Accueil ou Contact) sans rechargement de page (concept de Single Page Application). Les éléments d'interface réutilisables, comme le bouton 'Toggle' pour le mode jour/nuit ou les cartes de projets, ont été isolés dans des 'Composants' distincts.",
                code: {
                    title: 'Création du composant réutilisable Toggle (Mode Sombre)',
                    description: "Isolation de la logique de bascule et de la persistance (localStorage) dans un composant dédié.",
                    language: 'javascript',
                    code: `// Dans un composant ou un composable dédié (ex: useTheme.js)
const toggleTheme = () => {
  const nextTheme = theme.value === 'night' ? 'day' : 'night'
  theme.value = nextTheme
  
  // Modification dynamique du DOM pour activer les variables CSS
  document.documentElement.setAttribute('data-theme', nextTheme)
  
  // Sauvegarde dans le navigateur pour les prochaines visites
  localStorage.setItem('portfolio-theme', nextTheme)
}`
                },
            },
            {
                title: 'Sécurisation Anti-Spam & Conformité RGPD',
                content: "Le formulaire de contact utilise l'API EmailJS, évitant ainsi le déploiement complexe d'un serveur backend (PHP/Node) tout en protégeant mes identifiants d'envoi. Pour garantir la sécurité et répondre aux exigences de la compétence de valorisation de l'image de l'organisation : j'ai implémenté un 'Honeypot' (un champ invisible qui piège les robots spammeurs et bloque l'envoi), une validation par Regex pour s'assurer du format de l'e-mail avec feedback visuel, et une case à cocher explicite pour recueillir le consentement RGPD.",
                image: {
                    src: '/portfolio/images/formulaire.png',
                    alt: "Aperçu du formulaire de contact sécurisé",
                    caption: "Interface du formulaire : validation dynamique et consentement RGPD"
                },
                code: {
                    title: 'Défense côté client (Honeypot & Regex)',
                    description: "Le Watcher Vue.js vérifie la Regex en temps réel, et le Honeypot est caché en CSS.",
                    language: 'html',
                    code: `<div style="display: none;" aria-hidden="true">
  <input type="text" v-model="form.anti_robot" tabindex="-1" autocomplete="off" />
</div>

<input
  v-model="form.email"
  :class="{ 'input-error': emailError }"
  type="email"
  placeholder="votre@email.com"
  required
/>`
                },
            },
            {
                title: 'Déploiement continu ',
                content: "L'intégralité du code source est versionnée sur un dépôt distant GitHub. J'ai couplé ce dépôt à la plateforme d'hébergement Vercel. Cette intégration crée un pipeline de déploiement continu (CI/CD) : chaque nouvelle fonctionnalité poussée (push) sur la branche principale déclenche automatiquement une commande de build (`npm run build`) sur les serveurs de Vercel, mettant le site en production instantanément sans interruption de service.",

            },
        ],

        documents: [],
        images: [],
        codeBlocks: [],
        competences: ['E', 'F', 'H'],
    },
    // ============================================================
    // 05 — GESTION DE COLLECTION (anciennement TP Collection)
    // ============================================================
    {
        num: '05',
        category: 'Cours',
        title: 'Gestion de collection',
        subtitle: 'Base relationnelle, CRUD et sécurité',
        date: 'Novembre 2025 → Mai 2026',
        duration: 'Projet récurrent',
        location: 'BTS SIO — TP',
        role: 'Solo',
        shortDescription: "Application PHP/MySQL de gestion d'une collection personnelle (livres, mangas, jeux). Modélisation relationnelle, CRUD complet avec jointures, sécurisation PDO, ajout d'un système favoris et d'une authentification.",
        longDescription: "Projet pédagogique central de la première année pour la maîtrise de PHP, MySQL et de la sécurité applicative. L'application gère une collection composée de différentes catégories (jeux, mangas, livres...), avec une notion de possession et un système de favoris. Le projet a évolué progressivement : modélisation relationnelle de la base, écriture des requêtes SQL, mise en place du CRUD complet, ajout d'un système d'authentification sécurisé (bcrypt + logs de connexion) et de fonctionnalités d'exploitation (favoris, filtrage).",
        stack: ['PHP 8', 'MySQL', 'PDO', 'MAMP', 'phpMyAdmin', 'Bcrypt'],
        slug: 'tp-collection',
        featured: false,
        liveUrl: null,
        githubUrl: null,

        sections: [
            {
                title: 'Environnement de développement',
                content: "Le projet est développé en local avec MAMP, qui fournit la pile Apache + MySQL + PHP. L'administration de la base passe par phpMyAdmin, ce qui m'a permis de créer les tables visuellement avant de basculer sur l'écriture des requêtes SQL en pur. Le moteur de stockage choisi est InnoDB, indispensable pour bénéficier des clés étrangères et donc de l'intégrité référentielle.",
                image: {
                    src: '/tp-collection/images/mamp.png',
                    alt: "Environnement MAMP + phpMyAdmin",
                    caption: "MAMP pour le serveur local, phpMyAdmin pour l'administration de la base"
                },
            },
            {
                title: 'Modélisation de la base relationnelle',
                content: "J'ai modélisé la base autour de trois tables principales : collections (les catégories : Mangas, Jeux, Livres...), types_collection (les sous-types) et elements_collection (les items eux-mêmes : un manga précis, un jeu précis...). Les éléments sont liés à leur collection par une clé étrangère id_collection, et chaque collection est typée via id_type. Cette structure m'a permis de pratiquer les relations 1-N entre entités ( 1 auteur, plusieurs livres).",
                image: {
                    src: '/tp-collection/images/mcd.png',
                    alt: "Modèle relationnel des trois tables",
                    caption: "tables liées par clés étrangères"
                },
            },
            {
                title: 'Requêtes SQL : du simple au JOIN',
                content: "Une grande partie du TP consistait à écrire et comprendre les requêtes SQL sans les générer via PHP. J'ai progressivement enchaîné les difficultés : SELECT simples, filtrage avec WHERE (possede = 1, numero > X, LIKE '%Dark%'), combinaisons logiques (AND, OR), tri avec ORDER BY, puis les jointures INNER JOIN sur plusieurs tables.",
                code: {
                    title: 'Progression des requêtes SQL',
                    description: "Des SELECT basiques aux JOIN multi-tables — la maîtrise du langage SQL.",
                    language: 'sql',
                    code: `-- Filtrage simple
SELECT * FROM elements_collection WHERE possede = 1;
SELECT * FROM elements_collection WHERE titre_element LIKE '%Dark%';
SELECT * FROM elements_collection WHERE possede = 1 AND numero > 1;

-- Tri
SELECT * FROM elements_collection ORDER BY numero ASC;
SELECT * FROM elements_collection ORDER BY titre_element ASC;

-- Jointure sur deux tables : élément + sa collection
SELECT e.titre_element, c.nom_collection
FROM elements_collection e
JOIN collections c ON e.id_collection = c.id_collection;

-- Jointure sur trois tables : élément + collection + type
SELECT e.titre_element, c.nom_collection, t.nom_type
FROM elements_collection e
JOIN collections c ON e.id_collection = c.id_collection
JOIN types_collection t ON c.id_type = t.id_type;`
                },
            },
            {
                title: 'CRUD — Lecture avec JOIN',
                content: "L'affichage des éléments combine les données de plusieurs tables en une seule requête, plutôt que de multiplier les appels au serveur. Pour chaque ligne, on récupère le titre de l'élément, son numéro, le nom de sa collection et son statut de possession. À l'affichage en HTML, les valeurs venant de la base sont systématiquement échappées avec htmlspecialchars pour éviter les attaques XSS.",
                code: {
                    title: 'Lecture jointe + affichage sécurisé',
                    description: "JOIN en SQL pour rapatrier tout en une requête, htmlspecialchars en sortie pour neutraliser le HTML/JS injecté.",
                    language: 'php',
                    code: `<?php
require 'connexion.php';

$sql = "SELECT 
            e.titre_element,
            e.numero,
            c.nom_collection,
            e.possede
        FROM elements_collection e
        JOIN collections c ON e.id_collection = c.id_collection";

$resultat = $pdo->query($sql);
?>

<table border="1">
    <tr>
        <th>Titre</th><th>Numéro</th><th>Collection</th><th>Possédé</th>
    </tr>
    <?php foreach($resultat as $row): ?>
    <tr>
        <td><?= htmlspecialchars($row['titre_element']) ?></td>
        <td><?= $row['numero'] ?></td>
        <td><?= htmlspecialchars($row['nom_collection']) ?></td>
        <td><?= $row['possede'] ? "Oui" : "Non" ?></td>
    </tr>
    <?php endforeach; ?>
</table>`
                },
            },
            {
                title: 'CRUD — Création avec requête préparée',
                content: "L'ajout d'un élément se fait via un formulaire HTML. Le PHP récupère les données POST et les insère via une requête préparée PDO avec marqueurs positionnels (?). Cette pratique systématique des requêtes préparées est le rempart fondamental contre les injections SQL : les valeurs envoyées ne peuvent en aucun cas être interprétées comme du code SQL.",
                code: {
                    title: 'Insertion via requête préparée',
                    description: "Aucune concaténation de variables dans la requête — l'utilisateur ne peut pas injecter de SQL.",
                    language: 'php',
                    code: `<?php
require 'connexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $titre      = $_POST['titre'];
    $numero     = $_POST['numero'];
    $collection = $_POST['collection'];

    $sql = "INSERT INTO elements_collection 
            (titre_element, numero, id_collection) 
            VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$titre, $numero, $collection]);

    echo "Élément ajouté";
}

// Liste des collections pour le menu déroulant
$collections = $pdo->query("SELECT * FROM collections");
?>

<form method="post">
    <p>Titre : <input type="text" name="titre" /></p>
    <p>Numéro : <input type="number" name="numero" /></p>
    <p>Collection :
        <select name="collection">
            <?php foreach($collections as $c): ?>
                <option value="<?= $c['id_collection'] ?>">
                    <?= htmlspecialchars($c['nom_collection']) ?>
                </option>
            <?php endforeach; ?>
        </select>
    </p>
    <button type="submit">Ajouter</button>
</form>`
                },
            },
            {
                title: 'CRUD — Suppression et gestion des dépendances',
                content: "La suppression d'un élément est plus subtile qu'il n'y paraît : les clés étrangères empêchent de supprimer un élément référencé ailleurs. J'ai donc dû gérer la suppression en cascade manuellement, en supprimant d'abord les enregistrements liés (emprunts associés à l'élément) avant de supprimer l'élément lui-même. C'est un cas concret qui m'a fait comprendre l'utilité réelle des contraintes d'intégrité.",
                code: {
                    title: 'Suppression en cascade contrôlée',
                    description: "On supprime les dépendances avant l'élément principal pour respecter les contraintes de clés étrangères.",
                    language: 'php',
                    code: `<?php
require 'connexion.php';

$id = $_GET['id'];

// 1. Supprimer d'abord les emprunts liés à l'élément
$stmt = $pdo->prepare("DELETE FROM emprunts WHERE id_element = ?");
$stmt->execute([$id]);

// 2. Puis supprimer l'élément lui-même
$stmt = $pdo->prepare("DELETE FROM elements_collection WHERE id_element = ?");
$stmt->execute([$id]);

header("Location: elements.php");
?>`
                },
            },
            {
                title: 'Favoris et gestion de la possession',
                content: "J'ai ajouté un champ booléen possede sur la table elements_collection, qui permet de distinguer ce que l'utilisateur possède de ce qu'il souhaite acquérir. Une page dédiée affiche uniquement les favoris (possede = 1), avec la possibilité de basculer l'état depuis la liste générale. C'est un exemple typique d'exploitation simple mais utile d'un champ supplémentaire.",
                image: {
                    src: '/tp-collection/images/favoris.png',
                    alt: "Page des favoris",
                    caption: "Filtrage des éléments possédés via une simple condition WHERE"
                },
            },
            {
                title: 'Authentification — Hachage bcrypt',
                content: "L'évolution récente du projet a été l'ajout d'un système d'authentification. Les mots de passe ne sont jamais stockés en clair : à l'inscription, password_hash() avec l'algorithme bcrypt génère une empreinte unique de 60 caractères. À la connexion, password_verify() compare l'empreinte stockée avec le mot de passe fourni, sans jamais le décoder.",
                image: {
                    src: '/tp-collection/images/hash.png',
                    alt: "Hashage bcrypt",
                    caption: "Hash les mots de passe pour une sécurité renforcée"
                },

                code: {
                    title: 'Inscription sécurisée',
                    description: "password_hash + requête préparée — double rempart contre les attaques sur les identifiants.",
                    language: 'php',
                    code: `<?php
// Hachage du mot de passe (bcrypt par défaut)
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insertion sécurisée en base
$sql = "INSERT INTO utilisateurs (nom, email, mot_de_passe) 
        VALUES (:nom, :email, :mot_de_passe)";
$stmt = $pdo->prepare($sql);

$stmt->execute([
    ':nom'           => $nom,
    ':email'         => $mail,
    ':mot_de_passe'  => $hashed_password
]);
?>`
                },


            },
            {
                title: 'Traçabilité — Logs de connexion',
                content: "Pour répondre aux exigences de cybersécurité, j'ai mis en place une table log_connexion qui enregistre chaque tentative de connexion : le pseudo testé, l'adresse IP de l'utilisateur, le statut (succès ou échec) et l'horodatage. Cela permet de détecter à postériori des tentatives d'attaque par force brute, et constitue une trace utilisable pour auditer les accès au système.",
                image: {
                    src: '/tp-collection/images/logs.png',
                    alt: "Table des logs de connexion",
                    caption: "Audit des connexions : utile pour détecter les anomalies"
                },
            },
            {
                title: 'Bilan',
                content: "Ce projet m'a permis d'ancrer durablement les fondamentaux PHP/MySQL. J'ai parcouru les principales étapes d'un projet web sécurisé : modélisation relationnelle, écriture SQL, CRUD complet, sécurisation contre les injections et XSS, authentification avec hachage, traçabilité des accès. C'est sur cette base que je pourrai aborder des frameworks comme Laravel en seconde année.",
            },
        ],

        documents: [],
        images: [],
        codeBlocks: [],
        competences: ['C', 'F', 'G'],
    },

]

// Helper pour trouver un projet par son slug
export const getProjectBySlug = (slug) => {
    return projects.find(p => p.slug === slug)
}