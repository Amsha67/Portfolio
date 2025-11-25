<template>

  <div class="portfolio">
   

    <div class="separateur--vitrail">
        <span class="pointe gauche"></span>
        <span class="pointe droite"></span>
        <span class="rosace"></span>
    </div>
    <header>

        <!-- ===== MENU BURGER (affiché seulement sur mobile) ===== -->
        <div class="menuburger">
            <!-- Checkbox qui sert de déclencheur -->
            <input type="checkbox" id="hamburger">

            <!-- Bouton burger -->
            <label id="hamburger-logo" for="hamburger">☰</label>

            <!-- Navigation du menu -->
            <nav class="menu-mobile">
                <a href="#apropos">À propos</a>
                <a href="#technologie">Technologies</a>
                <a href="#softskill">Soft skills</a>
                <a href="#realisation">Réalisations</a>
                <a href="#parcours">Parcours</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>


        <menu>
            <a href="#apropos"><button type="button">À propos</button></a>
            <a href="#technologie"><button type="button">Technologies</button></a>
            <a href="#softskill"><button type="button">Soft skills</button></a>
            <a href="#realisation"><button type="button">Réalisations</button></a>
            <a href="#parcours"><button type="button">Parcours</button></a>
        </menu>



    </header>


    <main>


        <div class="titre">
            <h1>Portfolio<br />
                Eric Schmoelzlin<br />
                BTS SIO
            </h1>
        </div>

        <div class="separateur--vitrail">
            <span class="pointe gauche"></span>
            <span class="pointe droite"></span>
            <span class="rosace"></span>
        </div>
        <!-- Span est un élément en ligne utilisé pour appliquer des styles ou des classes ( comme div) -->

        <section id="apropos">
            <div class="bloc-texte">
                <h2>À propos</h2>
                <p>Depuis tout jeune, l’informatique a toujours été une véritable passion.
                    Je me souviens que j'ai appris à coder mes premiers sites web à l'âge de 12 ans.

                    Après plusieurs expériences dans d’autres domaines, j’ai décidé de revenir à ce que j'aime vraiment
                    :
                    le code, les systèmes, et la résolution de problèmes techniques. Je ne lache pas tant que je n'ai
                    pas compris/réussis a résoudre un problème.
                    Aujourd’hui, je poursuis un BTS SIO et recherche une alternance qui me permettra de contribuer à des
                    projets concrets,
                    et de consolider mes compétences
                    auprès de professionnels, affin de m'immiscer dans cet univers en constante évolution.
                </p>


            </div>

            <figure class="cadre-photo">
                <img class="photo" src="@/assets/icon.png" alt="photo qui représente eric schmoelzlin">
                <div class="ornements"></div>
                <div class="rosace"></div>
                <figcaption> • Etudiant en Informatique • </figcaption>
            </figure>

        </section>


        <div class="separateur--simple"></div>

        <section id="technologie">
            <ul class="bloc-icones">
                <li><a href="#code">HTML <img src="@/assets/image/html.png" alt="Logo HTML"></a></li>
                <li><a href="#code">CSS <img src="@/assets/image/css.png" alt="Logo CSS"></a></li>
                <li><a href="#code">React <img src="@/assets/image/react.png" alt="Logo React"></a></li>
                <li><a href="#code">Vue.JS <img src="@/assets/image/vuejs.png" alt="Logo Vue.JS"></a></li>
                <li><a href="#vmware">VmWare <img src="@/assets/image/vmware.png" alt="Logo VmWare"></a></li>
                <li><a href="#windows">Windows<img src="@/assets/image/windows.png" alt="Logo Windows"></a></li>
                <li><a href="#reseau">Linux<img src="@/assets/image/linux.png" alt="Logo Linux"></a></li>
            </ul>
            <div class="bloc-texte">
                <h2>Technologies</h2>
                <p>J’ai appris à utiliser divers langages et logiciel et je suis capable d'assimiler de nouvelles
                    manières de travailler rapidement</p>
            </div>
        </section>

        <div class="separateur--simple"></div>


        <section id="softskill">
            <div class="bloc-texte">
                <h2>Soft Skills</h2>
                <ul>
                    <li>Travailler sous pression / gestion du stress</li>
                    <li>Créativité / Innovation</li>
                    <li>Empathie</li>
                    <li>Remise en question</li>
                </ul>
            </div>
        </section>

        <div class="separateur--vitrail">
            <span class="pointe gauche"></span>
            <span class="pointe droite"></span>
            <span class="rosace"></span>
        </div>

        <section id="realisation">
            <div class="bloc-texte">
                <h2>Réalisations/ Mise en pratique</h2>

                <article id="code">
                    <h3>Refonte /Création de site web</h3>
                    <ul>
                        <li>Technos : HTML, CSS, REACT, VUE.JS</li>
                        <li>Objectif : Créer ou moderniser un site existant en améliorant son design, son
                            accessibilité et ses performances.</li>
                    </ul>
                    <img src="@/assets/code3.png" alt="des lignes de codes écrites">
                </article>

                <article id="windows">
                    <h3>Migration Windows 10 → Windows 11</h3>
                    <ul>
                        <li>Technos : Windows 10, Windows 11</li>
                        <li>Objectif : Planifier et exécuter la mise à niveau d’un parc informatique.</li>
                    </ul>
                    <img src="@/assets/windows.png" alt="Logo windows">
                </article>

                <article id="reseau">
                    <h3>Administration système et réseaux</h3>
                    <ul>
                        <li>Configuration réseau : adressage IP, service de base</li>
                        <li>Maintenance des systèmes</li>
                        <li>Installation de système Windows/Linux</li>
                    </ul>
                    <img src="@/assets/sys.jpg" alt="image qui représente un doigt qui clique sur des applications">
                </article>

                <article id="vmware">
                    <h3>Machine virtuelle</h3>
                    <ul>
                        <li>Technos : VmWare</li>
                        <li>Objectif : Faire tourner une machine virtuelle pour détecter des failles et tester des
                            logiciels.</li>
                    </ul>
                    <img src="@/assets/image/oracle.png" alt="icone machine virtuel">
                </article>

                <article id="rgpd">
                    <h3>Support/Assistance Informatique</h3>
                    <ul>

                        <li>Diagnostic et résolution de pannes matérielles et logicielles</li>
                        <li>Installation et configuration de postes de travail/ Accompagnement des utilisateurs</li>
                        <li>Veille au bonnes pratiques RGPD</li>

                    </ul>
                    <img src="@/assets/image/rgpd.png" alt="un bouclier avec un cadena représente la rgpd">
                </article>
            </div>

        </section>

        <div class="separateur--vitrail">
            <span class="pointe gauche"></span>
            <span class="pointe droite"></span>
            <span class="rosace"></span>
        </div>

        <section id="parcours">
            <div class="bloc-texte">
                <h2>Parcours</h2>
                <p>Titulaire d’un Bac STI2D option SIN et d’une Licence en Arts Visuels à l’Université de
                    Strasbourg,
                    j'ai décidé de me réorienter dans un metier qui me passionne en réalisant un BTS SIO pour me
                    spécialiser en développement et administration système.<br>
                    Mon parcours professionnel dans la restauration et les services m’a permis d’acquérir des
                    qualités essentielles :
                    rigueur, travail d’équipe, communication et gestion.</p>
            </div>
        </section>

        <div class="separateur--simple"></div>

    </main>


    <div class="separateur--vitrail">
        <span class="pointe gauche"></span>
        <span class="pointe droite"></span>
        <span class="rosace"></span>
    </div>

    <footer class="pied">
        <div class="pied-contenu">

            <div class="contact-mail">
                <h3>Me contacter</h3>
                <a class="btn-rouge" href="mailto:eric.schmoelzlin@gmail.com" aria-label="Envoyer un mail">
                    <img src="@/assets/image/Gmail.png" alt="icone d'une enveloppe gmail">
                    <span class="libelle">Gmail</span>

                </a>
            </div>

            <div class="CV">
                <h3>MON CV</h3>
                <a class="btn-rouge cv-footer" href="@/assets/image/CV ES SIO.pdf" download>
                    <img src="@/assets/image/CV.png" alt="icone d'un CV"> Télécharger
                </a>
            </div>

            <div class="liens-sociaux">
                <h3>Réseaux</h3>
                <a class="btn-rouge" href="https://www.linkedin.com/in/eric-schmoelzlin-824274220/" target="_blank"
                    rel="noopener" aria-label="LinkedIn">
                    <img src="@/assets/image/linkedin.png" alt="icone bleu de linkedin" width="22" height="22">
                    <span class="libelle">LinkedIn</span>
                </a>
                <a class="btn-rouge" href="https://github.com/Amsha67" target="_blank" rel="noopener"
                    aria-label="GitHub">
                    <img src="@/assets/image/git.png" alt="icon du chat noir de git" width="24" height="24">
                    <span class="libelle">GitHub</span>
                </a>
            </div>
        </div>

        <p class="credit">© 2025 — Eric Schmoelzlin</p>
    </footer>



  </div>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<style scoped>
/* Rend le scroll fluide apres clic sur la barre des sections */
html {
  scroll-padding-top: 120px;
  scroll-behavior: smooth
}



/* checkbox cachée */
  .menuburger #hamburger {
    display: none;
  }

/* Menu de navigation */
/*--------------------*/
header {

  display: flex;
  justify-content: center;

}

header menu {

  gap: 10px;
  margin: 0;
  padding: 8px;
  background: rgba(27, 25, 27, .65);     /* Effet de flou sur le fond */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 20px;
  display: flex;
}


header button {
  color: #efe6d8;
  background: transparent;      /* Bord fin et transparent des bouttons */
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 10px 16px;
  font-weight: 700;
}

header button:hover {
  transform: translateY(-1px);
  background: rgba(224, 74, 46, .16);
  border-color: rgba(239, 230, 216, .2);
  box-shadow: 0 0 14px rgba(224, 74, 46, .32);
}


/* Background grille defillante */
/*A RETRAVAILLER ACTUELLEMENT PAS FONCTIONEL*/
html,
body {
  height: 100%
}

body {

  color: #efe6d8;
  font: 16px/1.7 philosopher;
  background: #0e0f11;  /* Empeche le depassemnt horizontal du body */
  overflow-x: hidden;
  perspective: 1000px;

}

body::before {
  content: "";
  bottom: -200px;
  left: -50%;
  width: 200%;
  height: 100%;
  z-index: -2;
  background-image:
    linear-gradient(to bottom, rgba(224, 74, 46, .4) 1px, transparent 1px),
    linear-gradient(to right, rgba(224, 74, 46, .4) 1px, transparent 1px);
  background-size: 60px 60px;
  transform-origin: top;
  transform: rotateX(70deg) translateY(100px);
  opacity: .35;
  filter: blur(.4px);
  animation: gridMove 10s linear infinite;
}

@keyframes gridMove {
  from {
    background-position-y: 0px
  }

  to {
    background-position-y: 60px
  }
}

/* Titres */
h1,
h2,
h3 {
  font-family: "Cinzel";
  letter-spacing: 4px;
  margin: 0 0 .6em;
  color: #aa1f0d;
  text-shadow: 0 0 2px rgb(255, 48, 11), 1px 4px 2px rgba(204, 12, 12, .397);
}

h1 {
  display: flex;
  justify-content: center;
  text-align: center;
}




main {
  max-width: 1100px;
  margin: 96px auto 48px;
  padding: 64px 50px;
  background: #151315;
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 16px;
  box-shadow: 0 22px 60px rgba(0, 0, 0, .55);
  display: flex;
  flex-direction: column;
  gap: 80px;
}

section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  position: relative;

}


/* ANIMATION CADRE PHOTO AURA ROUGE */
@keyframes cadreGlow {
  0% {
    box-shadow:
      0 0 10px rgba(224, 74, 46, .25),
      inset 0 0 8px rgba(224, 74, 46, .25),
      0 0 22px rgba(224, 74, 46, .25);
    border-color: rgba(224, 74, 46, .75);
  }

  50% {
    box-shadow:
      0 0 20px rgba(224, 74, 46, .45),
      inset 0 0 16px rgba(224, 74, 46, .35),
      0 0 36px rgba(224, 74, 46, .45);
    border-color: rgba(224, 74, 46, 1);
  }

  100% {
    box-shadow:
      0 0 10px rgba(224, 74, 46, .25),
      inset 0 0 8px rgba(224, 74, 46, .25),
      0 0 22px rgba(224, 74, 46, .25);
    border-color: rgba(224, 74, 46, .75);
  }
}

/* CADRE PHOTO */
/*--------------*/
.cadre-photo {
  display: grid;
  place-items: center;
  max-width: 520px;
  width: 100%;
  background: transparent;
}

.cadre-photo>* {
  grid-area: 1 / 1;   /* tout s'empile dans la même cellule */
}

/* La photo définit la forme et porte le cadre rouge */
.cadre-photo .photo {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 260px 260px 14px 14px;
  border: 2px solid rgba(224, 74, 46, .85);
  box-shadow:
    0 0 10px rgba(224, 74, 46, .35),
    inset 0 0 8px rgba(224, 74, 46, .25),
    0 0 22px rgba(224, 74, 46, .25);
}

/* Bandeaux gauche/droite, */
.cadre-photo .ornements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  place-self: center stretch;
  padding: 0 10px;
  pointer-events: none;
}

/* before pour la gauche et after pour la droite */
.cadre-photo .ornements::before,
.cadre-photo .ornements::after {
  content: "";
  width: 22px;
  height: 10px;
  border-top: 2px solid rgba(224, 74, 46, .9);
  border-bottom: 2px solid rgba(224, 74, 46, .9);
  filter: drop-shadow(0 0 3px rgba(224, 74, 46, .5));
}

.cadre-photo .ornements::before {
  transform: skewX(32deg);
}

.cadre-photo .ornements::after {
  transform: skewX(-32deg);
}

/* Rosace centrée en haut du cadre, appel d'un svg*/
.cadre-photo .rosace {
  place-self: start center;      /* haut / centré */
  margin-top: 10px;
  width: 26px;
  height: 26px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><g fill='none' stroke='%23e04a2e' stroke-width='3'><circle cx='32' cy='32' r='10'/><path d='M32 4v16M32 44v16M4 32h16M44 32h16'/><path d='M14 14l12 12M38 38l12 12M14 50l12-12M38 26l12-12'/></g></svg>");
  background-repeat: no-repeat;
  background-position: center;    /* bas / centré */
  background-size: contain;
  filter: drop-shadow(0 0 4px rgba(224, 74, 46, .4));
}

/* Légende centrée en bas du cadre*/
.cadre-photo figcaption {
  place-self: end center;    /* bas / centré */
  margin-bottom: 12px;
  text-align: center;
  color: #a99c8d;
  font-size: .9rem;
  line-height: 1.3;
  background: rgba(20, 15, 15, .35);
  border: 1px solid rgba(224, 74, 46, .25);
  border-radius: 8px;
  padding: 6px 10px;
  backdrop-filter: blur(3px);
  width: fit-content;
}

/*--------------*/
/* SECTIONS*/
/*--------------*/

/* TECHNOLOGIES */

#technologie p {
  color: #a99c8d;
  margin: 0 0 8px
}

#technologie ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
}

#technologie li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: .95rem;
  background: #1b191b;
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 12px;
  padding: 8px 12px;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, .05), 0 6px 16px rgba(0, 0, 0, .35);
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  
}

#technologie li:hover {
  transform: translateY(-2px);
  border-color: rgba(224, 74, 46, .5);
  box-shadow: 0 12px 28px rgba(0, 0, 0, .45), 0 0 14px rgba(224, 74, 46, .22);
}


#technologie li a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;    /* garde la couleur */
  color: inherit;   /* garde la couleur */
  width: 100%;
  height: 100%;
}


#technologie li img {
  width: 40px;
  height: 40px;
  max-width: 40px;
  max-height: 40px;
  object-fit: contain;
  flex-shrink: 0;
  display: inline-block;

}

#technologie li:hover img {
  transform: scale(1.14) rotate(-3deg);
}



/* SOFT SKILLS */

#softskill {
  display: flex;
  justify-content: flex-end;

}

#softskill ul {
  list-style: "•  ";
  padding-left: 1rem;
  margin: 0
}

#softskill li {
  margin: 6px 0;
  color: #a99c8d
}



/* REALISATIONS */

#realisation {
  display: flex;
  flex-direction: column;
  gap: 16px;
}



/* Articles ( blocs ) */
#realisation article {
  margin: 0;
  display: grid;
  grid-template-columns: minmax(220px, 280px) 1fr minmax(160px, 240px);
  align-items: center;
  gap: 24px;
  background: #1b1919;
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 12px;
  padding: 16px 18px;
  margin: 14px 0;
  transition: box-shadow .6s ease, border-color .6s ease, transform .4s ease;
  scroll-margin-top: 200px;
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, .05), 0 10px 28px rgba(0, 0, 0, .4);
  position: relative;
}

#realisation article h3 {
  margin: 0;
}

#realisation article ul {
  margin: 0;
  padding-left: 1.2rem;
  /* puces lisibles sans déborder */
}


/* Image à droite, taille contrôlée */
#realisation article img {
  grid-column: 3;
  justify-self: end;
  width: 100%;
  max-width: 220px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
}


/* Effet lorsqu'un article est ciblé */
#realisation article:target::after {
  content: "";    /* guillement vide dans les before et after pour que l'élément existe en tant que calque sans texte */
  position: absolute;
  inset: 0;
  border-radius: inherit;     /* inherit reprend le border radius du parent */
  pointer-events: none;
  animation: highlightSoft 3.2s ease-out;       /* durée de l'animation */
  
}

/* Animation fluide & courte */
@keyframes highlightSoft {
  0% {
    box-shadow: 0 0 22px rgba(224, 74, 46, .65), 0 0 12px rgba(255, 255, 255, 0.4) inset;
    opacity: 1;
  }

  50% {
    box-shadow: 0 0 32px rgba(224, 74, 46, .45), 0 0 8px rgba(224, 74, 46, .25) inset;
  }

  100% {
    box-shadow: none;
    opacity: 0;
  }
}



#realisation article:hover {
  transform: translateY(-2px);
  border-color: rgba(224, 74, 46, .5);
  box-shadow: 0 8px 24px rgba(219, 9, 9, 0.425), 0 0 18px rgba(224, 74, 46, .2);
}

#realisation li {
  color: #a99c8d
}

/* PARCOURS */

#parcours {
  display: flex;
  justify-content: flex-end;
}

#parcours p {
  color: #a99c8d
}


/* SEPARATEURS */

.separateur--simple {
  position: relative;
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(224, 74, 46, .35) 15%, rgba(224, 74, 46, .8) 50%, rgba(224, 74, 46, .35) 85%, transparent 100%);
  box-shadow: 0 0 12px rgba(224, 74, 46, .45);
}

.separateur--vitrail {
  position: relative;
  height: 18px;
  width: 100%;
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.separateur--vitrail::before,
.separateur--vitrail::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 76%;
  height: 2px;
  top: 8px;
  background: linear-gradient(90deg, transparent, rgba(224, 74, 46, .85), transparent);
  box-shadow: 0 0 10px rgba(224, 74, 46, .5);
}

.separateur--vitrail::after {
  width: 64%;
  top: 12px;
  background: linear-gradient(90deg, transparent, rgba(224, 74, 46, .55), transparent);
}

.separateur--vitrail .pointe {
  position: absolute;
  top: 6px;
  width: 24px;
  height: 12px;
  border-top: 2px solid rgba(224, 74, 46, .9);
  border-bottom: 2px solid rgba(224, 74, 46, .9);
  transform: skewX(32deg);
  filter: drop-shadow(0 0 6px rgba(224, 74, 46, .6));
}

.separateur--vitrail .pointe.gauche {
  left: 12%
}

.separateur--vitrail .pointe.droite {
  right: 12%;
  transform: skewX(-32deg)
}

.separateur--vitrail .rosace {
  position: absolute;
  left: 50%;
  top: -5px;
  transform: translateX(-50%);
  width: 26px;
  height: 26px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><g fill='none' stroke='%23e04a2e' stroke-width='3'><circle cx='32' cy='32' r='10'/><path d='M32 4v16M32 44v16M4 32h16M44 32h16'/><path d='M14 14l12 12M38 38l12 12M14 50l12-12M38 26l12-12'/></g></svg>");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: drop-shadow(0 0 6px rgba(224, 74, 46, .6));
}

/* BAS DE PAGE */
footer {
  background: #1b191b;
  color: #efe6d8;
  text-align: center;
  padding: 28px 0 40px;
  border-top: 1px solid rgba(255, 255, 255, .08);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, .45) inset;
}

footer img {
  vertical-align: middle;
  margin-right: 8px
}

footer a {
  color: #efe6d8;
  text-decoration: none;
  font-weight: 700;
  border-bottom: 2px solid transparent
}

footer a:hover {
  border-color: rgba(224, 74, 46, .4)
}





@keyframes fadeUpSoft {
  from {
    opacity: 0;
    transform: translateY(12px);
    filter: blur(2px)
  }

  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0)
  }
}

section,
div {
  opacity: 0;
  animation: fadeUpSoft .8s ease-out both
}

/* ease-out = garde l'etati final */

/* Apparition des sections petit à petit */
section:nth-of-type(2) {
  animation-delay: .1s
}

section:nth-of-type(3) {
  animation-delay: .2s
}

section:nth-of-type(4) {
  animation-delay: .3s
}

section:nth-of-type(5) {
  animation-delay: .4s
}


@keyframes titleGlowSoft {

  0%,
  100% {
    text-shadow: 0 0 0 rgba(224, 74, 46, 0)
  }

  50% {
    text-shadow: 0 0 6px rgba(224, 74, 46, .18)
  }
}

section h1,
section h2,
section h3 {
  animation: titleGlowSoft 1.6s ease-in-out both
}


.pied {
  background: #1b191b;
  color: #efe6d8;
  border-top: 1px solid rgba(255, 255, 255, .08);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, .45) inset;
  padding: 28px 0 34px;
}

.pied-contenu {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.pied h3 {
  margin: 0 0 10px;
  font-family: "Cinzel";

  color: #aa1f0d;
  text-shadow: 0 0 2px rgba(255, 48, 11, .9), 0 0 8px rgba(204, 12, 12, .35);
  font-size: 1.05rem;
}

.btn-rouge {
  --bclr: rgba(224, 74, 46, .22);
  --bclr2: rgba(224, 74, 46, .38);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
  color: #efe6d8;
  border: 1px solid rgba(255, 255, 255, .08);
  background: rgba(27, 25, 27, .55);
  backdrop-filter: blur(6px);
  transition: transform .18s ease, box-shadow .25s ease, border-color .25s ease, .25s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, .35), inset 0 1px 2px rgba(255, 255, 255, .04);
}

.btn-rouge:hover {
  transform: translateY(-1px);
  background: rgba(224, 74, 46, .12);
  border-color: rgba(224, 74, 46, .45);
  box-shadow: 0 0 14px var(--bclr2), 0 10px 26px rgba(0, 0, 0, .45);
}

.btn-rouge img {
  width: 22px;
  height: 22px;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 0 4px rgba(224, 74, 46, .25))
}

.btn-rouge .picto {
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-family: philosopher;
  color: #ffe8e3;
  text-shadow: 0 0 6px rgba(224, 74, 46, .45);
}

.btn-rouge .libelle {
  font-weight: 700
}

.contact-mail,
.liens-sociaux {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px
}

.liens-sociaux .btn-rouge+.btn-rouge {
  margin-left: 8px
}

.credit {
  text-align: center;
  margin: 16px 0 0;
  color: #a99c8d;
  font-size: .9rem;
  opacity: .85;
}

@media (max-width:720px) {
  .pied-contenu {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px
  }
}


/*=============================*/
/* ===== MOBILE (≤ 900px) ===== */
/*=============================*/
/*=============================*/

@media (prefers-reduced-motion: reduce) {
  /* les @media permettent d'ajuster sur petit ecran */

  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important
  }
}

@media (max-width: 900px) {

  /* Empêche tout débordement horizontal */
  html,
  body {
    overflow-x: hidden;
  }

  /* Centre et réduit le main */
  main {
    margin: 84px auto 32px;
    padding: 20px 14px;
    max-width: 95vw;
  }

  /* --------- Header / Navigation --------- */


  /* cache le menu desktop */
  header menu {
    display: none !important;
  }

  /* checkbox cachée */
  .menuburger #hamburger {
    display: none;
  }

  /* bouton burger (style cohérent, sans flou) */
  #hamburger-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    font-size: 24px;
    line-height: 1;
    color: #efe6d8;
    background: rgba(27, 25, 27, .75); /* pas de backdrop-filter (effet de flou) */
    border: 1px solid rgba(224, 74, 46, .3);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(224, 74, 46, .25);
    cursor: pointer;
    transition: transform .18s ease, box-shadow .25s ease, border-color .25s ease;
  }

  #hamburger-logo:hover {
    transform: translateY(-1px);
    border-color: rgba(239, 230, 216, .2);
    box-shadow: 0 0 14px rgba(224, 74, 46, .32);
  }

  body {
    perspective: none;
  }

  .menuburger nav {
    position: fixed;
    top: 60px;
    left: 12px;
    right: 12px;
    width: auto;
    box-sizing: border-box;

    display: flex !important;
    flex-direction: column;
    gap: 10px;
    padding: 12px 14px;

    max-height: calc(100vh - 80px);
    overflow-y: auto;

    background: rgba(27, 25, 27, .92);
    border: 1px solid rgba(255, 255, 255, .08);
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .45);

    opacity: 0;
    transform: translateY(-8px);
    pointer-events: none;
    transition: opacity .22s ease, transform .22s ease;
    z-index: 999;
  }

  .menuburger nav a {
    text-decoration: none;
    color: #efe6d8;
    font-weight: 700;
    padding: 8px 6px;
    border-radius: 8px;
  }

  .menuburger nav a:hover {
    background: rgba(224, 74, 46, .16);
    border: 1px solid rgba(224, 74, 46, .35);
  }

  /* ouverture (ordre: input + label + nav) */
  .menuburger #hamburger:checked+#hamburger-logo+nav {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }


  /* toutes les sections en colonne  */
  section {
    flex-direction: column !important;
    align-items: stretch !important;
    justify-content: flex-start !important;
    gap: 24px !important;
  }


  /* médias fluides */
  img,
  video {
    max-width: 100%;
    height: auto;
  }


  /* Réduction fluide du cadre photo */
  .cadre-photo {
    max-width: 280px;      /* Taille mobile plus contenue */
    margin: 0 auto;      /* Centre le bloc */
    border-radius: 200px 200px 10px 10px;      /* même forme mais adaptée */
    
  }

  /* Photo responsive à l’intérieur du cadre */
  .cadre-photo .photo {
    width: 100%;
    height: auto;
    object-fit: cover;
    transform: none;     /* enlève tout zoom */
    
  }

  /* Ajustement du figcaption si trop large */
  .cadre-photo figcaption {
    font-size: 0.85rem;
    padding: 4px 8px;
  }


  /* Section technologies : colonne centrée */
  #technologie {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    text-align: center;
  }

  /* Grille fluide, centrée et compacte */
  #technologie ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
    width: 100%;
    max-width: 420px;
    justify-items: center;
  }

  /* Case techno : carrée, centrée, plus petite */
  #technologie li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #1b191b;
    border: 1px solid rgba(255, 255, 255, .08);
    border-radius: 12px;
    padding: 10px 8px;
    width: 100%;
    font-size: 0.85rem;
    box-shadow: inset 0 1px 2px rgba(255, 255, 255, .05),
      0 4px 12px rgba(0, 0, 0, .35);
  }

  /* Nom centré sous l’icône */
  #technologie li img {
    width: 36px;
    height: 36px;
    object-fit: contain;
    margin-bottom: 4px;
  }


  /* Réalisations : pile verticale */
  #realisation {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  #realisation article {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin: 0 !important;
  }

  #realisation article h3 {
    order: 1;
    margin: 0;
  }

  #realisation article ul {
    order: 2;
    margin: 0;
    padding-left: 1.1rem;
  }

  #realisation article img {
    order: 3;
    grid-column: 1;
    justify-self: center;
    max-width: 100%;
    border-radius: 12px;
  }

  /* Parcours / Softskills */
  #softskill,
  #parcours {
    justify-content: unset !important;
  }

  /* Footer compact */
  .pied-contenu {
    flex-direction: column;
    align-items: stretch;
    gap: 22px;
  }
}

/* 📏
 Unités CSS – résumé rapide :
   px = pixels (fixe)
   em/rem = taille relative au texte
   vw/vh = taille relative à la fenêtre
   fr = fraction d’espace (grille)
   % = pourcentage du parent
*/

</style>