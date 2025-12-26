# Gouvernance du standard GHI / GHI Governance

## 1. Objet / Purpose
**EN**  
### Scope of the GHI standard

The Global HashCost Index (GHI) solely aims to provide a transparent,
documented and reproducible methodology to estimate Bitcoin production cost.

GHI:
- does not provide investment advice,
- does not generate trading signals,
- does not claim to predict or define Bitcoin “fair value”,
- is not a regulatory or official benchmark,
- does not promote any political, ideological or commercial position.

The GHI standard explains **how** a cost is estimated,
not **how it should be interpreted or used**.

**FR**  
### Périmètre du standard GHI

Le Global HashCost Index (GHI) a pour unique objectif de proposer une
méthodologie transparente, documentée et reproductible permettant
d’estimer le coût de production du Bitcoin.

GHI :
- ne fournit aucun conseil d’investissement,
- ne produit aucun signal de trading,
- ne prétend pas prédire ou définir un “juste prix” du Bitcoin,
- ne constitue pas un benchmark réglementaire ou officiel,
- ne promeut aucune position politique, idéologique ou commerciale.

Le standard GHI décrit **comment** un coût est estimé,
pas **comment il doit être interprété ou utilisé**.

**FR**  
Ce document décrit les principes de gouvernance du standard « Global HashCost Index (GHI) » pour le dépôt `GHI-public`, incluant :
- la gouvernance du standard, de la méthodologie et de la documentation,
- la gouvernance des données publiées sous forme de snapshots et d’index publics.

Il distingue explicitement :
- la gouvernance de l’évolution du standard (code, documentation, méthodologie),
- la gouvernance des données publiées, qui sont immuables une fois rendues publiques.

**EN**  
This document describes the governance principles of the “Global HashCost Index (GHI)” standard for the `GHI-public` repository, including:
- governance of the standard, methodology and documentation,
- governance of published data in the form of snapshots and public indexes.

It explicitly distinguishes between:
- governance of standard evolution (code, documentation, methodology),
- governance of published data, which becomes immutable once publicly released.
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

## 8. Gouvernance des snapshots et des données publiées / Governance of snapshots and published data

### 8.1. Nature des snapshots

**FR**  
Les snapshots GHI représentent un état figé du modèle de données à un instant donné.  
Chaque snapshot est identifié de manière unique (`snapshot_id`) et associé à un hash cryptographique (`sha256`).

Une fois publié dans le dépôt `GHI-public` :
- un snapshot est considéré comme **immuable**,
- il ne peut ni être modifié, ni supprimé, ni réécrit rétroactivement.

**EN**  
GHI snapshots represent a frozen state of the data model at a given point in time.  
Each snapshot is uniquely identified (`snapshot_id`) and associated with a cryptographic hash (`sha256`).

Once published in the `GHI-public` repository:
- a snapshot is considered **immutable**,
- it cannot be modified, deleted, or retroactively rewritten.

---

### 8.2. Publication des données

**FR**  
La publication des snapshots et des index publics est effectuée selon un processus contrôlé :
- génération depuis le moteur privé,
- validation locale,
- export vers un index public,
- publication via commit Git traçable.

La fréquence de publication (quotidienne, hebdomadaire, mensuelle) est un **choix opérationnel**, sans impact sur l’immutabilité des données déjà publiées.

**EN**  
Snapshots and public indexes are published through a controlled process:
- generation from the private engine,
- local validation,
- export to a public index,
- publication via a traceable Git commit.

Publication frequency (daily, weekly, monthly) is an **operational choice** and does not affect the immutability of already published data.

---

### 8.3. Corrections et erreurs

**FR**  
En cas d’erreur détectée a posteriori :
- aucun snapshot publié n’est modifié,
- une correction est apportée via la publication d’un **nouveau snapshot**,
- la traçabilité historique est préservée.

Les snapshots incorrects restent accessibles à des fins d’audit et de transparence.

**EN**  
If an error is detected after publication:
- no published snapshot is modified,
- corrections are applied through the publication of a **new snapshot**,
- full historical traceability is preserved.

Incorrect snapshots remain accessible for audit and transparency purposes.

---

### 8.4. Relation avec l’évolution du standard

**FR**  
L’évolution du standard GHI (méthodologie, structure, API) est indépendante des snapshots déjà publiés.

Un changement de version du standard :
- n’invalide pas les snapshots historiques,
- peut introduire de nouveaux champs ou structures pour les snapshots futurs,
- est documenté via le versioning et le changelog.

L’évolution de la gouvernance du standard GHI dans le temps est décrite dans une feuille de route distincte, non contraignante et pilotée par l’usage réel : GOVERNANCE_ROADMAP.md

**EN**  
Evolution of the GHI standard (methodology, structure, API) is independent from already published snapshots.

A standard version change:
- does not invalidate historical snapshots,
- may introduce new fields or structures for future snapshots,
- is documented through versioning and changelog updates.

The evolution of GHI governance over time is described in a separate,
non-binding, usage-driven roadmap:
GOVERNANCE_ROADMAP.md.