<main>

  <div class="lang-switch">
    Langue / Language :
    <a href="#fr-changelog">FR</a> ·
    <a href="#en-changelog">EN</a>
  </div>

  <!-- ========================================================= -->
  <!-- ======================== FR ============================= -->
  <!-- ========================================================= -->

  <section id="fr-changelog">
    <h2>Changelog – Global HashCost Index (GHI)</h2>

    <p>
      Cette page résume les principales évolutions du standard GHI, de l’API publique,
      du moteur sandbox <strong>et du cadre de gouvernance</strong>. Elle est destinée aux équipes
      techniques, aux intégrateurs et aux parties prenantes externes.
    </p>

  <!-- Gouvernance v0.1 -->
<div class="card">
  <h3>2025-12-26 – Gouvernance v0.1 (fondation)</h3>
  <p>
    Cette entrée établit le cadre initial de gouvernance du projet GHI.
  </p>
  <ul>
    <li>Formalisation du document <strong>« GHI — Scope & Governance Principles (v0.1) »</strong>.</li>
    <li>Confirmation d’un modèle <strong>piloté par le fondateur</strong>, avec la transparence radicale comme principal mécanisme de confiance.</li>
    <li>Définition explicite du périmètre et du non-périmètre du standard.</li>
    <li>Mise en place d’une discipline de changement :
      <ul>
        <li>versionnement sémantique ;</li>
        <li>changelog public ;</li>
        <li>journal de décisions documenté ;</li>
        <li>processus formalisé de gestion des changements.</li>
      </ul>
    </li>
    <li>Clarification des déclencheurs futurs de formalisation de la gouvernance
      (usage externe, financement, arbitrage).</li>
  </ul>
  <p>
    Cette version n’introduit aucun changement méthodologique,
    de données ou d’API.  
    Couche gouvernance uniquement.
  </p>
</div>

    <!-- v0.4.2-sandbox / API v1.1 -->
    <div class="card">
      <h3>2025-12-09 – Sandbox Engine v0.4.2 & API v1.1</h3>
      <p>
        Cette version marque la stabilisation du couple <strong>API publique v1.1</strong>
        + <strong>Sandbox Engine v0.4.2</strong>.
      </p>
      <ul>
        <li><strong>API publique v1.1</strong> déclarée comme version active et stable.</li>
        <li><strong>Sandbox Engine v0.4.2-sandbox</strong> :
          <ul>
            <li>un seul router v1.1 pour l’ensemble des endpoints <code>/v1/ghi/*</code> ;</li>
            <li>données synthétiques mises à jour pour <code>/snapshot</code> et <code>/history</code> ;</li>
            <li>métadonnées unifiées : <code>version</code>, <code>timestamp_utc</code>, <code>engine_sandbox_version</code> ;</li>
            <li>support complet des endpoints v1.1 : snapshot, history, regions, metadata, network, forecast.</li>
          </ul>
        </li>
        <li><strong>Documentation publique</strong> :
          <ul>
            <li>nouvelle page <strong>API v1.1</strong> : <code>api/api-v1.1.html</code> ;</li>
            <li>mise à jour de la page <strong>Moteur</strong> pour Sandbox v0.4.2 ;</li>
            <li>note technique publique : <code>ENGINE_DESIGN_CHANGES_v0.4.2.md</code>.</li>
          </ul>
        </li>
        <li><strong>Compatibilité</strong> :
          <ul>
            <li>aucun breaking change pour les intégrations v1.1 existantes ;</li>
            <li>API v1.0 maintenue en mode “legacy”.</li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- v0.4.0-sandbox / API v1.0 -->
    <div class="card">
      <h3>2025-01-XX – Sandbox Engine v0.4.0 & API v1.0 (baseline publique)</h3>
      <p>
        Première mise à disposition publique du standard GHI.
      </p>
      <ul>
        <li><strong>Standard GHI v1.0</strong> (modèle de données, méthodologie, transparence).</li>
        <li><strong>Sandbox Engine v0.4.0-sandbox</strong>.</li>
        <li><strong>API publique v1.0</strong>.</li>
        <li><strong>Site GHI-public</strong> (pages fondatrices).</li>
      </ul>
      <p>
        Cette version sert de référence historique.
      </p>
    </div>

    <div class="card">
      <h3>Politique de versionnement</h3>
      <ul>
        <li>Les versions d’API suivent <code>MAJEUR.MINOR</code>.</li>
        <li>Le moteur sandbox suit <code>v0.x.y-sandbox</code>.</li>
        <li>La gouvernance et la méthodologie sont versionnées et documentées publiquement.</li>
      </ul>
    </div>

  </section>

  <!-- ========================================================= -->
  <!-- ======================== EN ============================= -->
  <!-- ========================================================= -->

  <section id="en-changelog">
    <h2>Changelog – Global HashCost Index (GHI)</h2>

    <p>
      This page summarizes the main changes to the GHI standard, public API,
      sandbox engine <strong>and governance framework</strong>.
    </p>

<!-- Governance v0.1 -->
<div class="card">
  <h3>2025-12-26 – Governance v0.1 (foundation)</h3>
  <p>
    This entry establishes the initial governance framework of the GHI project.
  </p>
  <ul>
    <li>Formalization of <strong>“GHI — Scope & Governance Principles (v0.1)”</strong>.</li>
    <li>Confirmation of a <strong>founder-led</strong> model with radical transparency as the primary trust mechanism.</li>
    <li>Explicit definition of scope and non-scope.</li>
    <li>Introduction of change discipline:
      <ul>
        <li>semantic versioning;</li>
        <li>public changelog;</li>
        <li>documented decision log;</li>
        <li>formal change process.</li>
      </ul>
    </li>
    <li>Clarification of future governance formalization triggers
      (external usage, funding, dispute resolution).</li>
  </ul>
  <p>
    This version introduces no methodological, data or API changes.
    Governance layer only.
  </p>
</div>

    <!-- v0.4.2-sandbox / API v1.1 -->
    <div class="card">
      <h3>2025-12-09 – Sandbox Engine v0.4.2 & API v1.1</h3>
      <p>
        This release stabilizes the combination of <strong>Public API v1.1</strong>
        and <strong>Sandbox Engine v0.4.2</strong>.
      </p>
      <ul>
        <li><strong>Public API v1.1</strong> declared as active and stable.</li>
        <li><strong>Sandbox Engine v0.4.2-sandbox</strong>.</li>
        <li><strong>Public documentation updates</strong>.</li>
        <li><strong>No breaking changes</strong>.</li>
      </ul>
    </div>

    <!-- v0.4.0-sandbox / API v1.0 -->
    <div class="card">
      <h3>2025-01-XX – Sandbox Engine v0.4.0 & API v1.0 (public baseline)</h3>
      <p>
        First public availability of the GHI standard.
      </p>
      <ul>
        <li>GHI Standard v1.0.</li>
        <li>Sandbox Engine v0.4.0-sandbox.</li>
        <li>Public API v1.0.</li>
        <li>Initial GHI-public website.</li>
      </ul>
      <p>
        This version acts as the historical baseline.
      </p>
    </div>

    <div class="card">
      <h3>Versioning policy</h3>
      <ul>
        <li>API versions follow <code>MAJOR.MINOR</code>.</li>
        <li>Sandbox engine follows <code>v0.x.y-sandbox</code>.</li>
        <li>Governance and methodology changes are publicly documented.</li>
      </ul>
    </div>

  </section>

</main>