# Global HashCost Index – GHI Standard v1.0

## 1. Purpose and scope

The Global HashCost Index (GHI) Standard v1.0 defines a public, structured
framework for measuring and publishing Bitcoin production cost indicators.

This document provides a high-level overview of the standard and how the
different public components fit together:

- data model,
- methodology,
- public API and engine sandbox,
- governance and versioning,
- institutional documentation.

The detailed technical specifications remain in their dedicated documents
(GHI Data Model, Technical Standard, Methodology, Engine Design, etc.).

---

## 2. Versioning overview (v1.0)

GHI v1.0 is defined as a coherent set of public components:

- **Methodology**: `1.0.0`  
  Core economic model and high-level assumptions for GHI.

- **Public API**: `v1.0`  
  Stable HTTP contract for indicator and snapshot endpoints.

- **Data Model**: `v1.0`  
  Formal definition of snapshot, region and history objects.

- **Sandbox Engine (public)**: `v0.4.0-sandbox`  
  Public engine returning synthetic, deterministic data, aligned with
  the v1.0 data model and API.

- **Website and documentation**: `v1.0.0`  
  Public website and pages describing the standard, methodology and
  governance.

The “real” production engine and its internal datasets are not part of this
public standard and remain private.

---

## 3. Public components of the standard

### 3.1 Data Model v1.0

The data model specifies:

- global snapshot structure (GHI band: min / avg / max),
- regional breakdown (cost, energy, hardware, metadata),
- history points used for time series and dashboards.

Reference document:

- `GHI-Data-Model-v1.0.md` (repository: `ghi-public/standard/`)

### 3.2 Methodology v1.0.0

The methodology describes the economic principles and modelling choices
behind the index, including:

- scope of the cost of production,
- regional aggregation logic,
- use of scenarios (min / central / max),
- known limitations and roadmap for future versions.

Reference:

- Public methodology page (FR/EN) on the GHI website.

### 3.3 Technical Standard v1.0 and API

The technical standard focuses on:

- structure of the public API,
- expected fields and types for each endpoint,
- guarantees on stability and versioning,
- mapping between API responses and the data model.

Reference documents:

- `GHI-Technical-Standard-v1.0.md` (repository: `ghi-public/standard/`)
- `docs/api.md` (repository: `ghi-engine/docs/`)
- API Quickstart and API Reference pages on the public website.

### 3.4 Engine sandbox and design

The public engine sandbox:

- uses synthetic, deterministic datasets,
- strictly follows the GHI Data Model v1.0,
- exposes the public API v1.0,
- is designed so a real engine can be plugged in later without
  breaking the public contract.

The Engine Design documents describe:

- internal architecture (loaders, cost calculator, aggregator),
- separation between sandbox engine and private engine,
- basic versioning and governance principles.

Reference documents:

- `ENGINE_DESIGN.md` (repository: `ghi-engine/docs/`)
- `VERSIONS.md` (repository: `ghi-engine/docs/`)

### 3.5 Governance and changelog

Governance defines how the standard evolves over time:

- proposals and discussions (GitHub issues / pull requests),
- review and validation process,
- publication of tagged releases,
- maintenance of a public changelog.

Reference documents:

- Governance page (FR/EN) on the public website,
- `changelog.html` (public changelog).

### 3.6 Institutional documentation

For institutional users (regulators, supervisors, funds, banks, research
teams), the standard is complemented by:

- **Whitepaper GHI v1.0 (EN/FR)** – conceptual and institutional overview,
- **GHI Institutional Pack – Slide Deck v1.0 (20 slides)** – structured
  presentation of the standard.

These documents do not change the technical standard itself but help
interpret and use GHI in professional and regulatory contexts.

---

## 4. Non-public components (real engine)

The real production engine, its configuration and datasets remain private.
They include, among others:

- internal data loaders and pipelines,
- detailed regional assumptions and calibrations,
- extended cost model parameters,
- operational monitoring and internal controls.

Access to these components may be granted under strict conditions and
confidentiality arrangements (for example, for regulators or supervisors).

They are outside the scope of this public standard but must comply with
the contracts and models defined in GHI Standard v1.0.

---

## 5. Use, integration and licensing

GHI Standard v1.0 is designed to be:

- understandable by institutional users,
- implementable in analytical and risk frameworks,
- stable over time with clear versioning.

Public documentation and website content are published under an open
documentation licence as specified in the repository (for example
Creative Commons BY-NC-SA 4.0 for documentation).

Software and source code components follow the licence indicated in each
repository (see the corresponding `LICENSE` files).

For any integration in a regulatory, supervisory or institutional
framework, users should rely on:

- the **Data Model v1.0**,
- the **Technical Standard v1.0**,
- the **Methodology v1.0.0**,
- the **Engine Design** and **Versions** documents,
- the **Whitepaper** and **Institutional Pack**.

This document is a navigation guide over these components.

---

# Standard GHI – Version 1.0 (FR)

## 1. Objet et périmètre

Le Standard Global HashCost Index (GHI) v1.0 définit un cadre public et
structuré pour mesurer et publier des indicateurs de coût de production
du Bitcoin.

Ce document fournit une vue d’ensemble de ce que recouvre le standard et
comment les différentes briques publiques s’articulent :

- modèle de données,
- méthodologie,
- API publique et moteur sandbox,
- gouvernance et gestion de versions,
- documentation institutionnelle.

Les spécifications détaillées restent dans leurs documents dédiés
(Data Model, Technical Standard, Methodology, Engine Design, etc.).

---

## 2. Vue d’ensemble du versionnage (v1.0)

Le standard GHI v1.0 est défini comme un ensemble cohérent de composants
publics :

- **Méthodologie** : `1.0.0`  
  Modèle économique et hypothèses générales.

- **API publique** : `v1.0`  
  Contrat HTTP stable pour les endpoints d’indicateur et de snapshot.

- **Data Model** : `v1.0`  
  Définition formelle des objets snapshot, région et historique.

- **Sandbox Engine (public)** : `v0.4.0-sandbox`  
  Moteur public renvoyant des données synthétiques et déterministes,
  aligné sur le Data Model v1.0 et l’API v1.0.

- **Site web et documentation** : `v1.0.0`  
  Site public et pages décrivant le standard, la méthodologie et la
  gouvernance.

Le moteur de production réel et ses jeux de données internes ne font pas
partie de ce standard public et restent privés.

---

## 3. Composants publics du standard

### 3.1 Data Model v1.0

Le modèle de données spécifie :

- la structure du snapshot global (bande GHI min / avg / max),
- la décomposition régionale (coûts, énergie, matériel, métadonnées),
- les points d’historique utilisés pour les séries temporelles.

Référence :

- `GHI-Data-Model-v1.0.md` (dépôt : `ghi-public/standard/`)

### 3.2 Méthodologie v1.0.0

La méthodologie décrit les principes économiques et les choix de modèle :

- périmètre du coût de production,
- logique d’agrégation régionale,
- scénarios (bas / central / haut),
- limites connues et feuille de route.

Référence :

- page Méthodologie (FR/EN) sur le site GHI.

### 3.3 Standard technique v1.0 et API

Le standard technique couvre :

- la structure de l’API publique,
- les champs attendus pour chaque endpoint,
- les garanties de stabilité et de versionnage,
- la correspondance entre réponses d’API et Data Model.

Références :

- `GHI-Technical-Standard-v1.0.md` (dépôt : `ghi-public/standard/`)
- `docs/api.md` (dépôt : `ghi-engine/docs/`)
- pages API Quickstart et API Reference sur le site public.

### 3.4 Moteur sandbox et design

Le moteur sandbox public :

- utilise des jeux de données synthétiques et déterministes,
- respecte strictement le Data Model v1.0,
- expose l’API publique v1.0,
- est conçu pour qu’un moteur réel puisse être branché ultérieurement
  sans casser le contrat public.

Les documents Engine Design décrivent :

- l’architecture interne (loaders, cost calculator, aggregator),
- la séparation entre moteur sandbox et moteur privé,
- les principes de versionnage et de gouvernance.

Références :

- `ENGINE_DESIGN.md` (dépôt : `ghi-engine/docs/`)
- `VERSIONS.md` (dépôt : `ghi-engine/docs/`)

### 3.5 Gouvernance et changelog

La gouvernance précise comment le standard évolue :

- propositions et discussions (issues / pull requests GitHub),
- processus de revue et de validation,
- publication de releases taguées,
- maintien d’un changelog public.

Références :

- page Gouvernance (FR/EN) sur le site public,
- page `changelog.html`.

### 3.6 Documentation institutionnelle

Pour les acteurs institutionnels (régulateurs, superviseurs, fonds,
banques, équipes de recherche), le standard est complété par :

- **Whitepaper GHI v1.0 (EN/FR)** – vue conceptuelle et institutionnelle,
- **GHI Institutional Pack – Slide Deck v1.0 (20 slides)** – présentation
  structurée du standard.

Ces documents n’ajoutent pas de contraintes techniques au standard, mais
facilitent son interprétation et son intégration dans des cadres
professionnels ou réglementaires.

---

## 4. Composants non publics (moteur réel)

Le moteur réel de production, sa configuration et ses jeux de données
restent privés. Ils incluent notamment :

- des loaders et pipelines internes,
- des hypothèses régionales détaillées et calibrées,
- des paramètres étendus du modèle de coût,
- des mécanismes opérationnels de suivi et de contrôle interne.

L’accès à ces composants peut être accordé dans un cadre strictement
encadré (par exemple pour des régulateurs ou superviseurs), sous
engagements de confidentialité.

Ils sont en dehors du périmètre de ce standard public mais doivent
respecter les contrats et modèles définis dans le Standard GHI v1.0.

---

## 5. Usage, intégration et licence

Le Standard GHI v1.0 est conçu pour être :

- compréhensible par des utilisateurs institutionnels,
- intégrable dans des cadres analytiques et de gestion des risques,
- stable dans le temps avec un versionnage clair.

La documentation publique et les contenus du site sont publiés sous une
licence de documentation ouverte, telle qu’indiquée dans le dépôt
(par exemple Creative Commons BY-NC-SA 4.0 pour la documentation).

Les composants logiciels et le code source suivent la licence indiquée
dans chaque dépôt (voir les fichiers `LICENSE` concernés).

Pour toute intégration dans un cadre réglementaire, prudentiel ou
institutionnel, les utilisateurs doivent se baser sur :

- le **Data Model v1.0**,
- le **Technical Standard v1.0**,
- la **Méthodologie v1.0.0**,
- les documents **Engine Design** et **Versions**,
- le **Whitepaper** et l’**Institutional Pack**.

Le présent document sert de guide de navigation entre ces composants.