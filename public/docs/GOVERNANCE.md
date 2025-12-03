# Gouvernance du standard GHI / GHI Governance

## 1. Objet / Purpose

**FR**  
Ce document décrit les principes de gouvernance du standard « Global HashCost Index (GHI) » pour le dépôt `GHI-public` : rôles, processus de décision, et gestion des évolutions.

**EN**  
This document describes the governance principles of the “Global HashCost Index (GHI)” standard for the `GHI-public` repository: roles, decision-making processes, and how changes are managed.

---

## 2. Rôles principaux / Main roles

**FR**

- **Maintainer(s) du dépôt**  
  Responsable de :
  - Revue des Pull Requests (PR).
  - Gestion des issues.
  - Publication des versions (tags, releases).

- **Contributeurs**  
  Toute personne proposant :
  - Des corrections (typos, bugs mineurs).
  - Des améliorations de documentation.
  - Des suggestions sur la méthodologie ou la structure.

- **Partenaires institutionnels**  
  - Peuvent proposer des évolutions méthodologiques.
  - Peuvent participer à des revues techniques ou méthodologiques, dans un cadre défini.

**EN**

- **Repository Maintainer(s)**  
  Responsible for:
  - Reviewing Pull Requests (PRs).
  - Managing issues.
  - Publishing versions (tags, releases).

- **Contributors**  
  Anyone submitting:
  - Fixes (typos, minor bugs).
  - Documentation improvements.
  - Suggestions on methodology or structure.

- **Institutional Partners**  
  - May propose methodological evolutions.
  - May participate in technical or methodological reviews under a defined framework.

---

## 3. Processus de décision / Decision process

**FR**

1. Les propositions de changement passent par une **issue** ou une **Pull Request**.
2. Les maintainer(s) évaluent la proposition selon :
   - L’alignement avec la vision du standard GHI.
   - L’impact sur la stabilité du modèle et de l’API.
   - La clarté et la traçabilité des changements.
3. Les changements significatifs (nouvelle section de méthodologie, changement de structure de données, etc.) :
   - Peuvent être discutés dans une issue dédiée.
   - Peuvent nécessiter une version majeure ou mineure (voir versioning ci-dessous).

**EN**

1. Proposed changes are submitted via an **issue** or a **Pull Request**.
2. Maintainers evaluate proposals based on:
   - Alignment with the GHI standard vision.
   - Impact on model and API stability.
   - Clarity and traceability of changes.
3. Significant changes (new methodology sections, data structure changes, etc.):
   - May require a dedicated discussion issue.
   - May trigger a minor or major version bump (see versioning below).

---

## 4. Versioning et releases / Versioning and releases

**FR**

- Le dépôt `GHI-public` suit une numérotation de type **semver** adaptée à la documentation :
  - **MAJOR** : changement structurel important (par ex. Data Model v2.0).
  - **MINOR** : ajout de sections ou d’API documentées, sans casser l’existant.
  - **PATCH** : corrections mineures, typos, clarifications.

- Les versions sont annoncées via :
  - Le fichier `changelog.md`.
  - Des tags Git et, le cas échéant, des “Releases” GitHub.

**EN**

- The `GHI-public` repository follows a documentation-oriented **semver** scheme:
  - **MAJOR**: structural change (e.g. Data Model v2.0).
  - **MINOR**: new sections or documented APIs, without breaking existing ones.
  - **PATCH**: minor fixes, typos, clarifications.

- Versions are announced through:
  - The `changelog.md` file.
  - Git tags and, when relevant, GitHub Releases.

---

## 5. Transparence et traçabilité / Transparency and traceability

**FR**

- Les décisions importantes sont reflétées dans :
  - Les messages de commit.
  - Les Pull Requests (description, discussion).
  - Le changelog.

- Les documents méthodologiques (overview, methodology, engine summary) sont synchronisés avec l’état du modèle publié.

**EN**

- Important decisions are reflected in:
  - Commit messages.
  - Pull Requests (description, discussion).
  - The changelog.

- Methodology documents (overview, methodology, engine summary) are kept in sync with the published state of the model.

---

## 6. Conflits et arbitrage / Conflicts and arbitration

**FR**  
En cas de désaccord persistant sur une évolution importante du standard GHI :

- Les maintainer(s) tranchent sur la base :
  - De la cohérence globale du standard.
  - Des besoins des utilisateurs institutionnels.
  - De la stabilité à long terme des séries de données.

**EN**  
If there is a persistent disagreement on a major GHI standard evolution:

- Maintainers arbitrate based on:
  - Overall consistency of the standard.
  - Needs of institutional users.
  - Long-term stability of the data series.

---

## 7. Licence / License

**FR**  
Ce document fait partie du standard ouvert GHI et est publié sous la licence **MIT**, comme indiqué dans le fichier `LICENSE.md` du dépôt.  
Tout utilisateur est libre de le consulter, le reproduire ou l’adapter, sous réserve du respect des termes de la licence.

**EN**  
This document is part of the GHI open standard and is released under the **MIT license**, as specified in the repository’s `LICENSE.md`.  
Users are free to view, reproduce or adapt it, provided they comply with the license terms.