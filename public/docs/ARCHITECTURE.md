# Architecture du dépôt GHI-public / GHI-public Repository Architecture

## 1. Objet / Purpose

**FR**  
Ce document décrit l’architecture du dépôt `GHI-public` : structure des fichiers, relation avec le moteur GHI, et principes de séparation entre documentation publique et moteur privé.

**EN**  
This document describes the architecture of the `GHI-public` repository: file structure, relationship with the GHI engine, and separation between public documentation and the private engine.

---

## 2. Vue d’ensemble / High-level overview

**FR**

Le dépôt `GHI-public` contient principalement :

- Le **site statique** de documentation (HTML + CSS).
- Les **documents techniques** (PDF/Markdown).
- Les **références** vers l’API sandbox et le moteur.

Il ne contient **pas** :

- Le code source complet du moteur de calcul réel.
- Les données propriétaires ou jeux d’hypothèses internes.

**EN**

The `GHI-public` repository contains mainly:

- The documentation **static site** (HTML + CSS).
- **Technical documents** (PDF/Markdown).
- **References** to the sandbox API and engine.

It does **not** contain:

- The full source code of the real computation engine.
- Proprietary data or internal hypothesis datasets.

---

## 3. Structure des fichiers / File structure

**FR**  
Structure simplifiée :

```text
GHI-public/
  index.html            # Page d'accueil
  dashboard.html        # Présentation du dashboard GHI
  methodology.html      # Synthèse méthodologique
  regions.html          # Description des régions
  engine.html           # Description du moteur (public)
  api.html              # Documentation de l’API sandbox
  governance.html       # Gouvernance du standard
  roadmap.html          # Roadmap publique
  style.css             # Styles communs

  docs/                 # Documents techniques versionnés
    overview.md
    methodology.md
    model.md
    ARCHITECTURE.md
    CONTRIBUTING.md
    CODE_OF_CONDUCT.md
    GOVERNANCE.md
    SECURITY.md
    WHITEPAPER_FR.pdf
    WHITEPAPER_EN.pdf
    METHODOLOGY.pdf
    ENGINE_TECHNICAL_SUMMARY.pdf
    ...

  devpack/              # Packs développeurs (zip, exemples)

EN
Simplified layout:

GHI-public/
  index.html            # Landing page
  dashboard.html        # GHI dashboard overview
  methodology.html      # Methodology summary
  regions.html          # Regions overview
  engine.html           # Engine (public description)
  api.html              # Sandbox API documentation
  governance.html       # Governance of the standard
  roadmap.html          # Public roadmap
  style.css             # Shared styles

  docs/                 # Versioned technical documents
    overview.md
    methodology.md
    model.md
    ARCHITECTURE.md
    CONTRIBUTING.md
    CODE_OF_CONDUCT.md
    GOVERNANCE.md
    SECURITY.md
    WHITEPAPER_FR.pdf
    WHITEPAPER_EN.pdf
    METHODOLOGY.pdf
    ENGINE_TECHNICAL_SUMMARY.pdf
    ...

  devpack/              # Developer packs (zip, examples)

4. Lien avec le moteur GHI / Link with the GHI engine

FR
	•	Le moteur de calcul (sandbox + réel) est développé dans un dépôt séparé (ghi-engine et ghi-engine-private).
	•	GHI-public :
	•	Expose la documentation de l’API sandbox.
	•	Fournit des exemples de requêtes (cURL, Python, etc.) via le Developer Pack.
	•	Décrit l’architecture de haut niveau du moteur (sans formules ni données sensibles).

Les URL d’API et les schémas de données documentés dans api.html et docs/API*.md sont considérés comme la référence publique pour les intégrateurs.

EN
	•	The computation engine (sandbox + real) is developed in separate repositories (ghi-engine and ghi-engine-private).
	•	GHI-public:
	•	Exposes documentation for the sandbox API.
	•	Provides example requests (cURL, Python, etc.) through the Developer Pack.
	•	Describes the engine architecture at a high level (no formulas or sensitive data).

API URLs and data schemas documented in api.html and docs/API*.md are the public reference for integrators.

⸻

5. Séparation documentation / exécution / Separation between docs and execution

FR

Principes clés :
	•	Ce dépôt ne doit pas contenir de code exécutant le moteur réel.
	•	Aucun secret, clé d’API ou configuration sensible ne doit être commité.
	•	Les exemples de code doivent utiliser :
	•	Des URLs sandbox.
	•	Des données de démonstration ou anonymisées.

EN

Key principles:
	•	This repository must not contain code that executes the real engine.
	•	No secrets, API keys, or sensitive configuration should be committed.
	•	Code samples must use:
	•	Sandbox URLs.
	•	Demonstration or anonymised data.

⸻

6. Évolutions de l’architecture / Architecture changes

FR

Toute évolution importante de l’architecture de GHI-public (ajout de sections, refonte de navigation, changement de structure de docs) :
	•	Doit être proposée via une Pull Request.
	•	Doit mettre à jour ce fichier ARCHITECTURE.md si l’organisation globale change.
	•	Peut nécessiter une mise à jour de la roadmap et/ou du changelog.

EN

Any significant change to the GHI-public architecture (new sections, navigation redesign, documentation structure changes):
	•	Must be proposed via a Pull Request.
	•	Must update this ARCHITECTURE.md file if the global layout changes.
	•	May require a roadmap and/or changelog update.

---

## 7. Licence / License

**FR**  
Ce document fait partie du standard ouvert GHI et est publié sous la licence **MIT**, comme indiqué dans le fichier `LICENSE.md` du dépôt.  
Tout utilisateur est libre de le consulter, le reproduire ou l’adapter, sous réserve du respect des termes de la licence.

**EN**  
This document is part of the GHI open standard and is released under the **MIT license**, as specified in the repository’s `LICENSE.md`.  
Users are free to view, reproduce or adapt it, provided they comply with the license terms.