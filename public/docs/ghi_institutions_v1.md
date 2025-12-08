# GHI – Dossier institutionnel (version longue)  
Version : 1.0 • Décembre 2025  

> Document de référence pour banques, régulateurs, gérants d’actifs, assureurs, fonds de pension et infrastructures de marché.

---

## 1. Résumé exécutif (FR)

Le **Global HashCost Index (GHI)** est un **standard ouvert** qui vise à mesurer, de manière transparente et reproductible, le **coût de production du Bitcoin** à l’échelle mondiale.

L’ambition du GHI est triple :

1. **Fournir un repère de coûts** (min / moyen / max) pour la production d’un bitcoin.  
2. **Offrir un cadre méthodologique auditable**, suffisamment précis pour être critiqué, amélioré et comparé dans le temps.  
3. **Proposer une API standardisée** permettant aux institutions d’intégrer facilement l’indicateur dans leurs modèles internes, tableaux de bord et outils d’analyse.

Le GHI ne cherche pas à prédire le prix du Bitcoin, ni à conseiller d’acheter ou vendre.  
C’est un **standard de mesure** qui décrit, à un instant donné, les **conditions économiques théoriques** de production d’un bitcoin, à partir d’hypothèses explicites.

Le standard GHI v1.0 est structuré autour de quatre composants :

- **Méthodologie v1.0.0** – cadre de modélisation ouvert et documenté,  
- **API publique v1.0** – contrat technique pour accéder à l’indicateur,  
- **Moteur sandbox v0.3.0** – implémentation de démonstration, open source,  
- **Site public v1.0.0** – documentation, transparence et suivi de versions.

---

## 2. Objectifs et positionnement

### 2.1. Problème adressé

Le secteur du minage de Bitcoin est :

- **global**, distribué sur plusieurs continents,  
- **énergivore**, dépendant de mix énergétiques locaux,  
- **technologique**, avec des générations de matériel (ASICs) aux profils variés.

Pour un décideur (banque centrale, régulateur, gérant d’actifs, assureur), il est difficile de répondre à des questions simples :

- Quel est l’ordre de grandeur du **coût de production** d’un bitcoin aujourd’hui ?  
- Comment ce coût se distribue-t-il entre régions ?  
- Quelle est la **zone de stress** pour une majorité de mineurs (sous le coût moyen, sous le coût max) ?  
- Comment ces conditions ont-elles évolué au fil des cycles de marché ?

Le GHI propose une réponse structurée à ces questions sous la forme d’un **standard ouvert**, plutôt que d’un modèle propriétaire opaque.

### 2.2. Périmètre d’usage

Le GHI est conçu pour être utilisé comme :

- **indicateur de coût** dans des analyses de recherche,  
- **entrée** dans des modèles de stress tests,  
- **référence** de comparaison entre périodes (post-halving, bull/bear),  
- **support neutre** dans le dialogue entre institutions et régulateurs.

Il **n’a pas vocation** à remplacer le jugement des équipes internes ni leurs modèles propriétaires, mais à fournir une base commune, transparente, qui facilite la comparaison et l’audit.

---

## 3. Architecture du standard GHI v1.0

### 3.1. Méthodologie v1.0.0

La méthodologie GHI v1.0.0 est définie dans un document public dédié.  
Elle formalise :

- la **segmentation par régions** (zones géographiques agrégées et stables),  
- les **portefeuilles de machines** (familles d’ASICs, rendements, efficacité énergétique),  
- les **hypothèses de coûts énergétiques** (prix de l’électricité, profils horaires),  
- la construction d’un **coût de production par BTC**, puis l’agrégation globale.

Les grands principes :

1. **Régions agrégées**  
   - Le monde est divisé en quelques grandes régions (ex. Amérique du Nord, Europe, Asie, etc.),  
   - Chaque région regroupe un ensemble de pays présentant des profils de coûts et de mix machines comparables.

2. **Profils machines (ASICs)**  
   - Chaque région est associée à un panier de machines représentatif (par exemple anciennes générations, génération dominante, nouvelles générations),  
   - Pour chaque profil, la méthodologie spécifie : hashrate, consommation, rendement.

3. **Profils énergétiques**  
   - Les coûts de l’électricité sont modélisés selon des hypothèses de prix (spot, contrats long terme, mix tarifaire).  
   - Des profils horaires permettent de distinguer production continue ou adaptative.

4. **Coût de production par BTC**  
   - Pour chaque région, la méthodologie calcule un coût théorique de production, puis des agrégats :  
     - **coût minimum**,  
     - **coût moyen**,  
     - **coût maximum**.

Le détail complet est disponible dans :  
`docs/methodology_public_v1.md` (dépôt GHI Engine).

### 3.2. API publique v1.0

L’API publique constitue le **contrat technique** entre le standard et ses utilisateurs.

Endpoints principaux :

- `GET /v1/ghi/indicator`  
  → indicateur global pour une date donnée (par défaut : aujourd’hui),  
- `GET /v1/ghi/snapshot`  
  → vue agrégée sur une période, incluant les coûts min/avg/max, ainsi que les métadonnées nécessaires (timestamps, versions, etc.).

Les réponses incluent systématiquement :

- `min_cost`, `avg_cost`, `max_cost`,  
- `network_difficulty`, `total_hashrate_eh_s`,  
- `block_subsidy`, `hashprice` (lorsque pertinent),  
- `methodology_version`, `ghi_version`,  
- `data_timestamp_utc`,  
- un champ `status` indiquant la nature de la réponse (ok, degraded, demo…).

La spécification détaillée est exposée dans :  
`docs/api.md` (dépôt GHI Engine).

### 3.3. Moteur sandbox v0.3.0

Le moteur sandbox :

- implémente le contrat de l’API v1.0,  
- s’appuie sur des **données de démonstration** (fake data) stables dans le temps,  
- permet aux équipes techniques d’intégrer l’API et de tester leurs flux sans dépendre d’un moteur “temps réel” non public.

Objectifs :

- faciliter l’**intégration technique** (REST/JSON, exemple de dockerisation),  
- permettre des **tests unitaires** et de non-régression,  
- séparer clairement le standard (méthodologie, API) de son implémentation opérationnelle.

### 3.4. Site public v1.0.0

Le site public sert de **vitrine officielle** du standard :

- description générale,  
- pages “Méthodologie”, “API”, “Moteur”, “Gouvernance”, “Institutions”, “Transparence”,  
- liens vers les dépôts GitHub publics, les releases, les versions de référence.

La page “Transparence” liste :

- les versions officielles (standard, méthodologie, API, moteur, site),  
- les documents institutionnels (dont le présent dossier),  
- la structure des changements.

---

## 4. Cas d’usage institutionnels détaillés

### 4.1. Banques centrales et régulateurs

**Questions typiques :**

- À quel niveau de prix une part significative des mineurs devient-elle déficitaire ?  
- Dans quels scénarios voit-on un risque de **capitulation synchronisée** des opérateurs ?  
- Comment la concentration par région pourrait-elle amplifier certains risques (réseau, énergie, finance) ?

Le GHI permet de :

- disposer d’un **repère chiffré** pour calibrer des scénarios,  
- comparer des périodes (avant/après halving, bull / bear),  
- documenter le dialogue avec les autres autorités (marchés, concurrence, énergie, climat…).

### 4.2. Gestion d’actifs, desks de recherche, fonds

Les gérants et analystes peuvent utiliser le GHI pour :

- apprécier la **distance entre prix de marché et coûts de production**,  
- construire des **scénarios de marge** pour le secteur minier,  
- analyser l’évolution des coûts dans le temps (impact de nouvelles générations d’ASICs, d’un choc énergétique, etc.).

Le GHI s’intègre :

- dans des tableaux de bord internes,  
- dans des rapports de recherche,  
- dans des outils quantitatifs (corrélations, régimes de marché, drawdowns, etc.).

### 4.3. Assureurs, fonds de pension, infrastructures de marché

Les acteurs exposés de manière indirecte au Bitcoin (produits listés, ETP, fonds, dérivés) peuvent utiliser le GHI pour :

- analyser la **robustesse économique** du réseau sous-jacent dans des scénarios extrêmes,  
- éclairer les discussions avec les régulateurs et auditeurs,  
- mieux documenter la **nature des risques** associés au minage et à l’écosystème.

---

## 5. Gouvernance, versions et transparence

### 5.1. Versionnage

Le standard GHI suit un schéma de versionnage explicite :

- `GHI_VERSION` – version du standard,  
- `METHODOLOGY_VERSION` – version de la méthodologie,  
- versions spécifiques pour l’API, le moteur, le site public.

Chaque release publique :

- est publiée sur GitHub (tags, changelog),  
- référence la version de méthodologie sur laquelle elle s’appuie,  
- documente les changements introduits (ajouts, corrections, clarifications).

### 5.2. Transparence

La transparence repose sur :

- des dépôts publics (code, documentation),  
- des documents méthodologiques lisibles par des non-développeurs,  
- une séparation claire entre :
  - ce qui relève de la **norme** (standard, API, méthodologie),  
  - ce qui relève de l’**implémentation** (moteur, dashboards, intégrations).

La page “Transparence” du site regroupe :

- les versions actuelles,  
- les liens officiels,  
- les contacts pour institutions (revues, audits, partenariats).

---

## 6. Limites, précautions et bonnes pratiques

### 6.1. Nature du GHI

Le GHI est :

- un **standard de mesure** et de publication,  
- construit sur des **hypothèses explicites**,  
- conçu pour être **critiqué et amélioré**.

Il n’est pas :

- un modèle de valorisation financière,  
- un conseil d’investissement,  
- une garantie de rentabilité (passée ou future).

### 6.2. Usage prudentiel recommandé

Tout usage pour :

- allocation d’actifs,  
- décisions de financement,  
- calibrage prudentiel,

devrait :

- s’appuyer sur **d’autres sources d’information**,  
- intégrer des analyses internes (macro, marchés, réglementation),  
- considérer les **spécificités locales** (fiscalité, structure de coûts, régulation).

---

## 7. Roadmap institutionnelle

Les axes prioritaires pour les prochaines versions incluent :

1. **Renforcement des données**  
   - intégration de sources externes (coûts énergie, base de machines, hashprice),  
   - amélioration de la granularité régionale lorsque cela est pertinent.

2. **Audit et revue externe**  
   - ouverture à des revues par des équipes indépendantes (énergie, données, finance, régulation),  
   - publication de rapports de revue.

3. **Dashboards institutionnels dédiés**  
   - interfaces visuelles adaptées aux banques centrales, superviseurs, gérants d’actifs,  
   - scénarios pré-paramétrés (stress tests, chocs de prix, halving, etc.).

4. **Documentation juridique et conformité**  
   - préparation de notes spécifiques pour différents cadres réglementaires (par ex. MiCA en Europe),  
   - clarification de l’usage du GHI dans le cadre des obligations de transparence.

---

## 8. Résumé exécutif (EN)

The **Global HashCost Index (GHI)** is an **open standard** designed to measure, in a transparent and reproducible way, the **global cost of producing Bitcoin**.

GHI Standard v1.0 is structured around:

- **Methodology v1.0.0** – open modelling framework,  
- **Public API v1.0** – technical contract to access the indicator,  
- **Sandbox engine v0.3.0** – demonstration implementation,  
- **Public website v1.0.0** – documentation and transparency.

The objective is **not** to predict price or provide investment advice, but to offer:

- a **cost benchmark** (min / average / max),  
- a **transparent and auditable framework**,  
- an **integration-ready API** for institutions.

GHI can be used by:

- **central banks and regulators** – for cost structure and stress scenarios,  
- **asset managers and research desks** – as an input in valuation and risk frameworks,  
- **insurers, pension funds and market infrastructures** – to better understand the economic resilience of the mining sector.

For audit, integration or partnership discussions, institutions are invited to use the contact channel indicated on the public GHI website (Transparency page).

---
