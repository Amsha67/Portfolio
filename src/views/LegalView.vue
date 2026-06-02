<template>
  <section class="legal-page">
    <div class="page-inner">

      <header class="page-header">
        <p class="page-eyebrow">Informations légales</p>
        <h1 class="page-title">Mentions légales</h1>
      </header>

      <div class="legal-content">

        <article class="legal-section">
          <h2>Éditeur du site</h2>
          <p>Le présent site est édité par :</p>
          <ul>
            <li><strong>Nom</strong> : Eric Schmoezlin</li>
            <li><strong>Statut</strong> : Étudiant en BTS SIO option SLAM, 1ʳᵉ année</li>
            <li><strong>Adresse</strong> : Strasbourg, France</li>
            <li><strong>Email</strong> : <a href="mailto:contact@ericschmoezlin.fr">contact@ericschmoezlin.fr</a></li>
          </ul>
        </article>

        <article class="legal-section">
          <h2>Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <ul>
            <li><strong>Hébergeur</strong> : Vercel Inc.</li>
            <li><strong>Adresse</strong> : 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
            <li><strong>Site</strong> : <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a></li>
          </ul>
        </article>

        <article class="legal-section">
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, code source, design)
            est la propriété exclusive de Eric Schmoezlin, sauf mention contraire.
            Toute reproduction, représentation, modification ou exploitation totale
            ou partielle sans autorisation préalable est interdite.
          </p>
          <p>
            Les projets présentés dans la section "Projets" peuvent contenir des
            références à des marques ou logos appartenant à leurs propriétaires
            respectifs. Ces références sont faites à titre informatif uniquement.
          </p>
        </article>

        <article class="legal-section">
          <h2>Données personnelles</h2>
          <p>
            Ce site ne collecte aucune donnée personnelle de manière automatique.
            Les seules données collectées sont celles que vous fournissez
            volontairement via le formulaire de contact (nom, adresse email,
            contenu du message).
          </p>
          <p>
            Ces informations sont utilisées uniquement pour répondre à votre
            demande et ne font l'objet d'aucun traitement automatisé ni d'aucune
            transmission à des tiers.
          </p>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification
            et de suppression de vos données. Pour exercer ce droit, contactez :
            <a href="mailto:contact@ericschmoezlin.fr">contact@ericschmoezlin.fr</a>.
          </p>
        </article>

        <article class="legal-section">
          <h2>Cookies</h2>
          <p>
            Ce site n'utilise aucun cookie de suivi ni de traçage publicitaire.
            Le seul stockage local utilisé est <code>localStorage</code>, pour
            mémoriser votre préférence de thème (mode jour / mode nuit).
            Cette information reste sur votre appareil et n'est jamais transmise.
          </p>
        </article>

        <article class="legal-section">
          <h2>Technologies utilisées</h2>
          <p>Ce site est développé avec les technologies suivantes :</p>
          <ul>
            <li><strong>Framework</strong> : Vue.js 3</li>
            <li><strong>Build tool</strong> : Vite</li>
            <li><strong>Routing</strong> : Vue Router</li>
            <li><strong>Polices</strong> : Inter, Cormorant Garamond, JetBrains Mono (Google Fonts)</li>
            <li><strong>Hébergement</strong> : Vercel</li>
            <li><strong>Versionnement</strong> : Git et GitHub</li>
          </ul>
        </article>

        <article class="legal-section">
          <h2>Contact</h2>
          <p>
            Pour toute question relative à ce site ou à son contenu, contactez :
            <a href="mailto:contact@ericschmoezlin.fr">contact@ericschmoezlin.fr</a>.
          </p>
        </article>

        <p class="legal-update">Dernière mise à jour : juin 2026</p>

      </div>
    </div>
  </section>
</template>

<style scoped>
.legal-page {
  padding: 7rem 2.5rem 6rem;
  min-height: 100vh;
}

.page-inner {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 4rem;
}

.page-eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 1rem;
  transition: color 0.5s ease;
}

.page-title {
  font-size: clamp(2.25rem, 4.5vw, 3.5rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.025em;
  margin: 0;
  color: var(--text);
  transition: color 0.5s ease;
}

.legal-content {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-soft);
  transition: color 0.5s ease;
}

.legal-section {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.5s ease;
}

.legal-section:last-of-type {
  border-bottom: none;
}

.legal-section h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem;
  letter-spacing: -0.015em;
  color: var(--text);
  transition: color 0.5s ease;
}

.legal-section p {
  margin: 0 0 1rem;
}

.legal-section p:last-child {
  margin-bottom: 0;
}

.legal-section ul {
  margin: 0.85rem 0;
  padding-left: 1.25rem;
}

.legal-section li {
  margin-bottom: 0.5rem;
}

.legal-section strong {
  color: var(--text);
  font-weight: 500;
  transition: color 0.5s ease;
}

.legal-section a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-section a:hover {
  text-decoration: underline;
}

.legal-section code {
  font-family: var(--font-mono);
  font-size: 0.88em;
  padding: 0.15rem 0.4rem;
  background: var(--bg-elevated);
  border-radius: 2px;
  border: 1px solid var(--border);
  transition: all 0.5s ease;
}

.legal-update {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  text-align: right;
  margin: 3rem 0 0;
  transition: color 0.5s ease;
}

@media (max-width: 640px) {
  .legal-page { padding: 5rem 1.25rem 4rem; }
}
</style>