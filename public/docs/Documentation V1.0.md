1. Overview / Présentation générale

Global HashCost Index (GHI) — Documentation v1.0

1.1 Mission Statement / Mission

FR
Le Global HashCost Index (GHI) est un standard ouvert dont l’objectif est de mesurer de manière fiable, reproductible et transparente le coût de production du Bitcoin à l’échelle mondiale. Le GHI fournit une estimation cohérente du coût électrique minimal, moyen et maximal nécessaire pour miner un bitcoin selon les conditions techniques et tarifaires observées dans chaque région du monde.

EN
The Global HashCost Index (GHI) is an open standard designed to deliver a reliable, reproducible, and transparent measurement of the global cost of Bitcoin production. GHI provides consistent estimates of the minimum, average, and maximum electrical costs required to mine one bitcoin, based on technical and pricing conditions observed across all world regions.

⸻

1.2 Why GHI? / Pourquoi GHI ?

FR
Les estimations actuelles du coût de production du Bitcoin sont hétérogènes, souvent opaques, et rarement mises à jour selon une méthodologie claire.
GHI répond à trois besoins essentiels :
	1.	Standardiser le calcul du coût de production.
	2.	Comparer les régions grâce à un modèle homogène.
	3.	Fournir un indicateur indépendant, open-source, auditable.

EN
Current estimates of Bitcoin production costs are inconsistent, opaque, and rarely updated using transparent methodologies.
GHI addresses three core needs:
	1.	Standardization of cost-of-production calculations.
	2.	Regional comparability through a unified model.
	3.	Independent, open-source, auditable indicators.

⸻

1.3 What GHI Measures / Ce que GHI mesure

FR
Le GHI estime trois valeurs fondamentales pour chaque région et pour le monde :
	•	Coût minimal : conditions les plus favorables (tarifs bas, ASIC récents).
	•	Coût moyen : scénario représentatif du mix réel.
	•	Coût maximal : conditions les moins favorables (tarifs élevés, machines plus anciennes).

Une valeur globale est ensuite dérivée en agrégeant les données régionales selon un modèle normalisé.

EN
GHI calculates three core values for each region and for the global index:
	•	Minimum cost: most favorable conditions (low power prices, efficient ASICs).
	•	Average cost: representative of the real-world regional mix.
	•	Maximum cost: least favorable conditions (high prices, older ASICs).

A global value is then derived by aggregating all regional outputs using a standardized model.

⸻

1.4 Regional Framework / Cadre régional

FR
Le modèle GHI segmente le monde en régions homogènes selon trois critères :
	1.	Structure du marché de l’électricité
	2.	Tarifs disponibles et profil horaire
	3.	Parc ASIC dominant ou représentatif

Cette segmentation permet de refléter les contrastes géographiques et économiques du minage réel, tout en conservant un modèle simple, stable et vérifiable.

EN
The GHI model divides the world into homogeneous regions based on:
	1.	Electricity market structure
	2.	Power prices and hourly profiles
	3.	Dominant or representative ASIC fleets

This framework captures real-world geographic and economic differences while keeping the model simple, stable, and auditable.

⸻

1.5 How GHI Works (High-Level) / Fonctionnement global

FR
À un niveau macro, le GHI fonctionne ainsi :
	1.	Collecter les tarifs électriques représentatifs par région
	2.	Définir un mix ASIC réaliste (ancien, moyen, récent)
	3.	Calculer l’efficience énergétique régionale
	4.	Estimer le coût d’un bitcoin (min/avg/max)
	5.	Agréger les résultats dans un indice global

EN
At a high level, GHI operates as follows:
	1.	Gather representative electricity prices per region
	2.	Define realistic ASIC mixes (old, mid-range, new)
	3.	Compute regional energy efficiency
	4.	Estimate Bitcoin cost (min/avg/max)
	5.	Aggregate results into a global index

⸻

1.6 What GHI Is Not / Ce que GHI n’est pas

FR
GHI ne mesure pas la rentabilité d’une ferme minière, ni le coût complet d’une opération. Il se limite volontairement :
	•	au coût électrique,
	•	à l’énergie nécessaire pour produire un bitcoin.

Les éléments suivants sont exclus : amortissement matériel, CAPEX, taxes, main-d’œuvre, refroidissement, terrains.

EN
GHI does not measure mining profitability nor the full operational cost of a mining facility. It intentionally limits itself to:
	•	Electricity cost,
	•	Energy required to produce one bitcoin.

Exclusions include hardware depreciation, CAPEX, taxes, labor, cooling, or land.

⸻

1.7 Objectives of v1.0 / Objectifs de la v1.0

FR
La version 1.0 vise à :
	•	fournir un standard clair, stable et open-source
	•	définir un modèle simple mais crédible
	•	documenter entièrement les hypothèses
	•	publier une API minimale mais fonctionnelle
	•	poser les bases du futur standard institutionnel

EN
Version 1.0 aims to:
	•	provide a clear, stable, open-source standard
	•	define a simple yet credible model
	•	fully document all assumptions
	•	release a minimal but functional API
	•	establish the foundation for a future institutional standard

    2. Model & Methodology — Overview / Modèle & Méthodologie — Présentation

2. Model & Methodology — Full Version / Modèle & Méthodologie — Version complète

Global HashCost Index (GHI) — Documentation v1.0

⸻

2.1 Methodological Principles / Principes méthodologiques

FR

La méthodologie du GHI repose sur quatre piliers qui garantissent sa robustesse :
	1.	Transparence : toutes les hypothèses (prix, efficience, segmentation) sont publiques.
	2.	Reproductibilité : chaque résultat peut être recalculé à partir des données fournies.
	3.	Neutralité : le modèle n’introduit aucun biais régional ou industriel.
	4.	Simplicité contrôlée : modèle volontairement simple pour éviter le sur-ajustement.

Ces principes assurent que GHI peut servir de référentiel pour les acteurs institutionnels.

EN

The GHI methodology is built on four pillars ensuring robustness:
	1.	Transparency: all assumptions (prices, efficiencies, segmentation) are public.
	2.	Reproducibility: each output can be recalculated from the provided inputs.
	3.	Neutrality: the model does not introduce regional or industrial bias.
	4.	Controlled simplicity: deliberately simple to avoid overfitting.

These principles ensure GHI can serve as a reference for institutional actors.

⸻

2.2 Global Structure / Structure générale

FR

Le modèle GHI est structuré en trois niveaux :

1. Inputs
	•	Tarifs électriques représentatifs
	•	Mix ASIC catégorisé
	•	Profils horaires lorsque disponibles
	•	Paramètres réseau : difficulté, hashrate, récompenses

2. Calculs régionaux

Pour chaque région :
	•	efficience énergétique du parc
	•	coût kWh ajusté
	•	scénarios min/avg/max
	•	coût final d’un bitcoin

3. Agrégation globale
	•	normalisation
	•	poids régionaux explicites
	•	synthèse dans l’indice global GHI

EN

The GHI model is structured across three levels:

1. Inputs
	•	Representative electricity prices
	•	Categorized ASIC mix
	•	Hourly profiles when available
	•	Network variables: difficulty, hashrate, rewards

2. Regional calculations

For each region:
	•	energy efficiency of the fleet
	•	adjusted electricity cost
	•	min/avg/max scenarios
	•	final BTC production cost

3. Global aggregation
	•	normalization
	•	explicit regional weights
	•	synthesis into the GHI global index

⸻

2.3 Core Assumptions / Hypothèses centrales

FR

Les hypothèses fondamentales du modèle sont :
	•	Le coût étudié est strictement électrique (sans OPEX/CAPEX).
	•	Le parc ASIC est simplifié en trois classes :
	•	Moderne (haute efficience, <25 J/TH)
	•	Intermédiaire (25–33 J/TH)
	•	Ancien (>33 J/TH)
	•	Les tarifs électriques sont représentatifs, documentés, publiquement accessibles.
	•	Toute région suit un mix cohérent basé sur des données économiques réelles.
	•	Les données réseau Bitcoin proviennent d’APIs publiques reconnues.

EN

The model’s core assumptions:
	•	Only electricity cost is considered (no OPEX/CAPEX).
	•	The ASIC fleet is simplified into three classes:
	•	Modern (<25 J/TH)
	•	Mid-range (25–33 J/TH)
	•	Legacy (>33 J/TH)
	•	Electricity prices are representative, documented, public.
	•	Each region follows a coherent, economically grounded mix.
	•	Bitcoin network data is sourced from established public APIs.

⸻

2.4 Regional Model / Modèle régional

FR

Chaque région suit une méthodologie homogène :
	1.	Définir un mix ASIC pondéré.
	2.	Calculer l’efficience énergétique régionale (J/TH → kWh/PH).
	3.	Appliquer le tarif électrique représentatif.
	4.	Calculer le coût d’un bitcoin selon min/avg/max.
	5.	Documenter les écarts régionaux (infrastructures, qualité réseau).

EN

Each region follows a homogeneous methodology:
	1.	Define a weighted ASIC mix.
	2.	Compute regional efficiency (J/TH → kWh/PH).
	3.	Apply the representative electricity price.
	4.	Compute bitcoin cost under min/avg/max scenarios.
	5.	Document regional deviations (infrastructure, network quality).

⸻

2.5 ASIC Mix Definition / Définition du mix ASIC

FR

La définition du mix par région s’appuie sur :
	•	disponibilité locale des machines,
	•	cycles de renouvellement observés,
	•	importations/exportations d’ASIC,
	•	prix moyens des machines,
	•	cycle de vie énergétique des fermes.

Pondération type :
	•	Moderne : 20–50 %
	•	Intermédiaire : 30–50 %
	•	Ancien : 10–40 %

La région reste librement paramétrable dans GHI Engine.

EN

Regional ASIC mixes are based on:
	•	local availability,
	•	observed upgrade cycles,
	•	ASIC import/export flows,
	•	average hardware prices,
	•	energy lifecycle of mining operations.

Typical weighting:
	•	Modern: 20–50%
	•	Mid-range: 30–50%
	•	Legacy: 10–40%

Regions remain configurable inside the GHI Engine.

⸻

2.6 Electricity Pricing / Tarification électrique

FR

Chaque région utilise :
	•	un tarif horaire (si marché spot transparent), ou
	•	un tarif fixe (si contrat standardisé).

Trois règles :
	1.	Prix choisis pour leur représentativité, pas pour leur attractivité.
	2.	Les extrêmes (prix non disponibles, pics anormaux) sont exclus.
	3.	Les tarifs industriels >1 MW sont privilégiés lorsque documentés.

EN

Each region uses either:
	•	hourly pricing (if a transparent spot market exists), or
	•	fixed pricing (if standardized contracts dominate).

Three rules:
	1.	Prices chosen for representativeness, not attractiveness.
	2.	Extremes (unavailable or anomalous prices) excluded.
	3.	Industrial-scale tariffs (>1 MW) preferred when documented.

⸻

2.7 Energy-to-Bitcoin Calculation / Calcul énergie-BTC

FR

L’énergie requise pour produire 1 BTC est calculée à partir de :
	1.	Difficulté du réseau
	2.	Hashrate total
	3.	Efficience du mix ASIC
	4.	Énergie par bloc
	5.	Nombre de blocs nécessaires pour 1 BTC
	6.	Bloc subsidy (récompense + frais)

Formule générale :

\text{kWh par BTC} =
\frac{
\text{(Difficulté × 2^{32}) / Hashrate\_eff}
}{
\text{BTC per block}
}
× \text{kWh par TH}

La version complète et normalisée figure en section 2.7.3.

EN

Energy required to mine 1 BTC is computed from:
	1.	Network difficulty
	2.	Total hashrate
	3.	ASIC mix efficiency
	4.	Energy per block
	5.	Blocks required per BTC
	6.	Block subsidy (rewards + fees)

General formula:

\text{kWh per BTC} =
\frac{
\text{(Difficulty × 2^{32}) / Hashrate\_eff}
}{
\text{BTC per block}
}
× \text{kWh per TH}

The complete normalized formula appears in section 2.7.3.

⸻

2.8 Scenario Modeling: Min / Avg / Max

Modélisation des scénarios : min / moyen / max

FR

Trois scénarios encadrent l’incertitude :
	•	Min :
	•	ASIC modernes
	•	prix les plus bas documentés
	•	stabilité réseau maximale
	•	Avg :
	•	mix médian
	•	tarif médian
	•	conditions réseau typiques
	•	Max :
	•	machines anciennes
	•	prix élevés
	•	conditions réseau défavorables

Ce triptyque permet de couvrir 90 % du spectre des situations globales.

EN

Three scenarios frame uncertainty:
	•	Min:
	•	modern ASICs
	•	lowest documented regional price
	•	high network stability
	•	Avg:
	•	median mix
	•	median price
	•	typical network conditions
	•	Max:
	•	legacy hardware
	•	high prices
	•	less favorable network conditions

This triptych covers ~90% of observed global conditions.

⸻

2.9 Regional Aggregation / Agrégation régionale

FR

Les résultats régionaux sont harmonisés via :
	1.	normalisation des unités,
	2.	vérification des écarts extrêmes,
	3.	pondération selon :
	•	part estimée de hashrate,
	•	taille des fermes,
	•	disponibilité énergétique.

Aucune région n’est exclue sauf cas d’absence totale de données publiques.

EN

Regional outputs are harmonized through:
	1.	unit normalization,
	2.	extreme-value validation,
	3.	weighting based on:
	•	estimated share of hashrate,
	•	farm size distribution,
	•	energy availability.

No region is excluded unless no public data exists.

⸻

2.10 Global Aggregation / Agrégation globale

FR

L’indice mondial GHI est obtenu via :
	•	une moyenne pondérée,
	•	un contrôle de cohérence entre régions,
	•	un modèle de distribution trilatérale (min/avg/max).

Le résultat est un coût mondial reflétant une situation technique synthétique.

EN

The GHI global index is produced through:
	•	weighted averaging,
	•	cross-regional consistency checks,
	•	a trilateral distribution model (min/avg/max).

The outcome is a global cost that reflects a synthetic technical situation.

⸻

2.11 Quality Assurance & Stability / Assurance qualité & stabilité

FR

Le moteur GHI applique :
	•	tests de cohérence internes,
	•	seuils de tolérance,
	•	verrouillage des versions,
	•	auditabilité du code.

Chaque release inclut un jeu d’échantillons test pour vérification indépendante.

EN

The GHI Engine applies:
	•	internal consistency checks,
	•	tolerance thresholds,
	•	version locking,
	•	code auditability.

Each release includes a test dataset for independent verification.

⸻

2.12 Model Limitations / Limites du modèle

FR

La version 1.0 du GHI ne couvre pas :
	•	coûts non électriques,
	•	amortissement du matériel,
	•	variations fines intra-région,
	•	coûts de refroidissement,
	•	configuration des fermes,
	•	optimisation fiscale.

Ces éléments pourront être introduits dans GHI v2 ou v3.

EN

GHI v1.0 does not cover:
	•	non-electrical costs,
	•	hardware depreciation,
	•	fine intra-regional variations,
	•	cooling expenses,
	•	farm configuration,
	•	tax optimization.

3. Data & Sources / Données & Sources

Global HashCost Index (GHI) — Documentation v1.0

⸻

3.1 Overview / Présentation générale

FR

Le modèle GHI repose sur un ensemble de données publiques, vérifiables, soigneusement sélectionnées pour garantir une transparence totale. Les données couvrent quatre dimensions : électricité, réseau Bitcoin, climat, et parc ASIC.

EN

The GHI model relies on public, verifiable datasets carefully selected to ensure full transparency. Data spans four dimensions: electricity, Bitcoin network, climate, and ASIC fleet characteristics.
3.2 Electricity Prices / Tarifs électriques

FR

Les tarifs électriques utilisés par région sont sélectionnés selon trois critères :
	1.	Représentativité locale
Niveau de prix réellement observé pour des consommateurs industriels >1 MW.
	2.	Disponibilité publique
Les données doivent être publiées par une autorité énergétique ou un opérateur de marché.
	3.	Stabilité statistique
Exclusion des valeurs ponctuelles (pics isolés, données incomplètes).

Sources typiques :
	•	Market operators (NordPool, EEX, ERCOT…)
	•	Ministères de l’énergie
	•	Fournisseurs industriels locaux
	•	Statistiques publiques OCDE / Eurostat
	•	Tarifs consolidés des régulateurs régionaux

EN

Electricity prices are selected using three criteria:
	1.	Local representativeness
Realistic industrial-level pricing (>1 MW).
	2.	Public availability
Data must be published by a market operator or energy authority.
	3.	Statistical stability
Exclusion of anomalies and incomplete values.

Typical sources:
	•	Market operators (NordPool, EEX, ERCOT…)
	•	Energy ministries
	•	Local industrial electricity providers
	•	OECD / Eurostat datasets
	•	Regional regulators’ tariff publications

⸻

3.3 Bitcoin Network Data / Données réseau Bitcoin

FR

Le GHI utilise exclusivement des sources reconnues :
	•	Difficulté du réseau
	•	Hashrate total
	•	Taille des blocs
	•	Subvention (subsidy)
	•	Frais de transaction
	•	Horodatage des blocs

Sources :
	•	APIs publiques (mempool.space, BTC.com, Blockstream)
	•	Fournisseurs institutionnels (Kaiko, CoinMetrics)
	•	Données chaînées (Bitcoin Core RPC)

EN

GHI relies exclusively on recognized Bitcoin network data:
	•	Network difficulty
	•	Total hashrate
	•	Block size
	•	Subsidy and fees
	•	Block timestamps

Sources:
	•	Public APIs (mempool.space, BTC.com, Blockstream)
	•	Institutional-grade providers (Kaiko, CoinMetrics)
	•	On-chain data (Bitcoin Core RPC)

⸻

3.4 Climate & Cooling / Données climatiques et facteur de refroidissement

FR

La température régionale influence le coût énergétique via le facteur de refroidissement lorsque applicable. Les données climatiques sont extraites de :
	•	Moyennes NOAA 10 ans (température extérieure)
	•	Stations météorologiques locales
	•	Bases de données climatiques régionales

Rappel du document Méthodologie + Transparence :

Le cooling factor est défini comme :
C = 1 + \alpha (T_{\text{ext}} - T_{\text{ref}})
￼

EN

Regional temperature affects cooling overhead where applicable. Climate data is sourced from:
	•	10-year NOAA averages
	•	Local meteorological stations
	•	Regional climate databases

As documented in the Methodology + Transparency file:

Cooling factor:
C = 1 + \alpha (T_{\text{ext}} - T_{\text{ref}})
￼

⸻

3.5 ASIC Hardware Data / Données matérielles ASIC

FR

Les performances et efficacités des machines sont obtenues via :
	•	Spécifications officielles fabricants
	•	Mesures de performance en conditions réelles
	•	Bases publiques de suivi ASIC (MiningMap, Hashrate Index)
	•	Bases internes standardisées du GHI Engine

Informations collectées :
	•	J/TH moyen
	•	Puissance W/TH
	•	Taux d’amélioration générationnelle
	•	Performance sous climats différents

EN

ASIC performance and efficiencies come from:
	•	Official manufacturer specifications
	•	Real-world performance benchmarks
	•	Public ASIC databases (MiningMap, Hashrate Index)
	•	Standardized internal GHI Engine tables

Data collected:
	•	Median J/TH
	•	W/TH consumption
	•	Generational improvement rate
	•	Climate-adjusted performance

⸻

3.6 Regional Hashrate Estimates / Estimations du hashrate régional

FR

L’objectif n’est pas d’avoir une valeur exacte mais une estimation cohérente, stable et documentée.

Sources :
	•	Analyses de flux réseau
	•	Études académiques
	•	Publications d’opérateurs locaux
	•	Données satellites (énergie consommée vs hashrate)
	•	Études internationales sur la géographie du minage

EN

Goal is not exactness but a stable, coherent, documented estimation.

Sources:
	•	Network flow analysis
	•	Academic research
	•	Local mining operator publications
	•	Satellite-inferred energy usage
	•	Global mining distribution studies

⸻

3.7 Data Normalization & Cleaning / Normalisation et filtrage

FR

Le GHI applique systématiquement :
	1.	Contrôle des valeurs aberrantes
	2.	Tests de complétude
	3.	Normalisation des unités
	4.	Harmonisation des prix (€/MWh → $/kWh)
	5.	Conversion uniforme des efficacités (J/TH → kWh/TH)

Conformément au document Méthodologie & Transparence :
	•	contrôle de cohérence,
	•	validation du mainteneur,
	•	ingestion quotidienne.
￼

EN

GHI systematically applies:
	1.	Outlier detection
	2.	Completeness checks
	3.	Unit normalization
	4.	Price normalization (€/MWh → $/kWh)
	5.	Efficiency conversion (J/TH → kWh/TH)

As per the Methodology & Transparency document:
	•	consistency checks,
	•	maintainer validation,
	•	daily ingestion.
￼

⸻

3.8 Update Process / Processus de mise à jour

FR

Les données du GHI sont mises à jour selon :
	•	Ingestion quotidienne
	•	Contrôles automatiques (cohérence, anomalies)
	•	Validation humaine
	•	Publication automatique dans l’API et snapshots

Documenté en détail dans les fichiers :
	•	MÉTHODOLOGIE + TRANSPARENCE (FR)  ￼
	•	METHODOLOGY + TRANSPARENCY (EN)  ￼

EN

GHI data updates follow:
	•	Daily ingestion
	•	Automatic integrity checks
	•	Human validation
	•	Automatic publication in API and snapshots

Documented in:
	•	MÉTHODOLOGIE + TRANSPARENCE (FR)  ￼
	•	METHODOLOGY + TRANSPARENCY (EN)  ￼

⸻

3.9 Transparency & Auditability / Transparence & auditabilité

FR

Le projet GHI garantit un accès public à :
	•	la méthodologie complète,
	•	les scripts de recalcul,
	•	les exemples reproductibles,
	•	les jeux d’essai,
	•	les ajustements de version.

EN

GHI ensures public access to:
	•	full methodology,
	•	recalculation scripts,
	•	reproducible examples,
	•	test datasets,
	•	version adjustment logs.

4. API Documentation / Documentation API

Global HashCost Index (GHI) — Documentation v1.0

⸻

4.1 Overview / Présentation

FR

L’API GHI v1.0 fournit un accès simple et uniforme aux données de coût de production du Bitcoin.
Elle repose sur un schéma minimaliste afin de garantir stabilité, reproductibilité et facilité d’intégration.

EN

The GHI v1.0 API provides a simple and uniform interface to Bitcoin production cost data.
It follows a minimalistic schema to ensure stability, reproducibility, and easy integration.

⸻

4.2 Base URL / URL de base
https://api.globalhashcostindex.org/v1/ghi

https://api.globalhashcostindex.org/v1/ghi
http://127.0.0.1:8000/v1/ghi

4.3 Authentication / Authentification

FR

La version 1.0 est publique, sans clé API.
Les versions futures pourront inclure une authentification (clé ou OAuth).

EN

Version 1.0 is public, with no API key required.
Future releases may include authentication (API key or OAuth).

⸻

4.4 Endpoints Summary — Format compatible

Endpoints (FR + EN)

1. /indicator
	•	FR : Indicateur global (coût min / avg / max)
	•	EN : Global indicator (min / avg / max)

2. /snapshot
	•	FR : Instantané complet (global + régions)
	•	EN : Full snapshot (global + regions)

3. /regions
	•	FR : Liste des régions supportées
	•	EN : List of supported regions

4. /region/{code}
	•	FR : Détails min / avg / max pour une région
	•	EN : Regional min / avg / max details

5. /meta
	•	FR : Métadonnées de la version actuelle
	•	EN : Metadata for current version

6. /ping
	•	FR : Vérification de disponibilité
	•	EN : Availability check

4.5 Endpoint: Global Indicator / Indicateur global

GET /indicator

FR

Renvoie le coût global du Bitcoin sous forme min / avg / max.

EN

Returns global Bitcoin production cost (min / avg / max).

Example Response / Exemple :
{
  "date": "2025-01-14",
  "currency": "USD",
  "cost_min": 17250.38,
  "cost_avg": 20411.22,
  "cost_max": 28140.55,
  "version": "v1.0"
}

4.6 Endpoint: Global Snapshot / Instantané global

GET /snapshot

FR

Renvoie un instantané complet du modèle :
	•	global (min/avg/max)
	•	détails par région
	•	métadonnées

EN

Returns a full model snapshot:
	•	global values
	•	regional breakdown
	•	metadata

Example Response / Exemple :

{
  "date": "2025-01-14",
  "global": {
    "min": 17250.38,
    "avg": 20411.22,
    "max": 28140.55
  },
  "regions": [
    {
      "code": "NA",
      "name": "North America",
      "min": 16210.44,
      "avg": 19830.11,
      "max": 27220.00
    },
    {
      "code": "EU",
      "name": "Europe",
      "min": 18555.12,
      "avg": 22990.41,
      "max": 31020.93
    }
  ],
  "version": "v1.0"
}

4.7 Endpoint: Regions List / Liste des régions

GET /regions

FR

Renvoie la liste des régions supportées et leur code.

EN

Returns the list of supported regions and their codes.

Example:
[
  { "code": "NA", "name": "North America" },
  { "code": "EU", "name": "Europe" },
  { "code": "AS", "name": "Asia" },
  { "code": "ME", "name": "Middle East" },
  { "code": "AF", "name": "Africa" }
]

4.8 Endpoint: Regional Cost / Coût régional

GET /region/{code}

FR

Renvoie les valeurs min/avg/max pour une région donnée.
Si le code est invalide → erreur 404.

EN

Returns min/avg/max values for a specific region.
Invalid code → 404 error.

Example:
{
  "code": "EU",
  "name": "Europe",
  "cost_min": 18555.12,
  "cost_avg": 22990.41,
  "cost_max": 31020.93,
  "currency": "USD",
  "version": "v1.0"
}

Error Example:
{
  "error": "Region not found",
  "code": "INVALID_REGION",
  "status": 404
}

4.9 Endpoint: Metadata / Métadonnées

GET /meta

FR

Renvoie les informations techniques de la version courante.

EN

Returns technical metadata for the current version.

Example:
{
  "version": "v1.0",
  "model_date": "2025-01-14",
  "engine": "GHI-Engine 1.0",
  "status": "stable",
  "documentation": "https://globalhashcostindex.org/docs/api"
}

4.10 Endpoint: Ping / Disponibilité

GET /ping

FR

Utilisé pour vérifier la disponibilité de l’API.

EN

Used to check API availability.

Example:
{ "status": "ok" }

4.11 Error Handling — Format compatible

Codes d’erreurs (FR + EN)

400 — Bad Request
	•	FR : Requête invalide
	•	EN : Invalid request

404 — Not Found
	•	FR : Ressource inconnue
	•	EN : Resource not found

429 — Too Many Requests
	•	FR : Trop de requêtes
	•	EN : Too many requests

500 — Internal Server Error
	•	FR : Erreur interne
	•	EN : Internal server error


4.12 Stability & Versioning / Stabilité & versionnage

FR
	•	Les changements de structure JSON impliquent un changement majeur (v2.0).
	•	Les ajustements minimes (format, champs supplémentaires) correspondent à une version mineure (v1.1).
	•	Les patchs techniques sont notés (v1.0.x).

EN
	•	JSON structure changes imply a major version bump (v2.0).
	•	Minor additions correspond to v1.1.
	•	Technical patches are noted as (v1.0.x).

⸻

4.13 Rate Limits / Limites de fréquence

FR

En v1.0, aucune limite stricte. Un lissage pourra être ajouté en v1.1 si nécessaire.

EN

In v1.0, no strict rate limiting.
Smoothing may be added in v1.1 if needed.

5. Governance & Standardisation / Gouvernance & Standardisation

Global HashCost Index (GHI) — Documentation v1.0

⸻

5.1 Overview / Présentation

FR

La gouvernance du GHI repose sur un cadre transparent, public et vérifiable destiné à garantir l’intégrité du modèle, la stabilité des données et la confiance des acteurs institutionnels.

EN

GHI governance relies on a transparent, public, and verifiable framework designed to ensure model integrity, data stability, and institutional trust.

⸻

5.2 Governance Structure / Structure de gouvernance

FR

Le GHI adopte une structure légère, fondée sur trois niveaux :
	1.	Mainteneur technique
Responsable du moteur, de la méthodologie et des mises à jour.
	2.	Comité de revue
Groupe indépendant chargé d’examiner les changements majeurs (méthodologie, pondération, nouvelles régions).
	3.	Communauté ouverte
Toute personne peut proposer des améliorations via GitHub (issues, pull requests).

EN

GHI uses a light three-layer governance structure:
	1.	Technical maintainer
Responsible for the engine, methodology, and updates.
	2.	Review committee
Independent group overseeing major changes (methodology, weighting, new regions).
	3.	Open community
Anyone may propose improvements through GitHub (issues, pull requests).

⸻

5.3 Governance Principles / Principes de gouvernance

FR

Le GHI respecte quatre principes :
	•	Indépendance : aucune entité commerciale ne domine le processus.
	•	Auditabilité : toute modification doit être traçable et vérifiable.
	•	Prévisibilité : les règles de versionnage évitent les changements soudains.
	•	Accessibilité : documentation publique, moteur open-source, historique complet.

EN

GHI adheres to four principles:
	•	Independence: no commercial entity influences the process.
	•	Auditability: all changes must be traceable and verifiable.
	•	Predictability: versioning rules prevent sudden changes.
	•	Accessibility: public documentation, open-source engine, full history.

⸻

5.4 Versioning Policy / Politique de versionnage

FR

Le GHI suit un schéma de versionnage clair :
	•	Versions majeures (vX.0)
Changements structurels (nouvelle formule, nouvelle architecture).
	•	Versions mineures (vX.Y)
Nouvelles régions, ajustements mineurs, clarifications.
	•	Patchs (vX.Y.Z)
Corrections techniques sans modification du modèle.

Chaque version doit être accompagnée d’un changelog exhaustif.

EN

GHI uses a clear versioning policy:
	•	Major versions (vX.0)
Structural changes (new formulas, new architecture).
	•	Minor versions (vX.Y)
New regions, small adjustments, clarifications.
	•	Patches (vX.Y.Z)
Technical fixes without model modification.

Each version must include a full changelog.

⸻

5.5 Change Management / Gestion des changements

FR

Toute modification suit un flux structuré :
	1.	Proposition (issue GitHub)
	2.	Revue technique
	3.	Validation du comité
	4.	Test indépendant
	5.	Publication (tag Git + documentation)

Aucun changement majeur ne peut être publié sans revue formelle.

EN

All changes follow a structured flow:
	1.	Proposal (GitHub issue)
	2.	Technical review
	3.	Committee approval
	4.	Independent testing
	5.	Publication (Git tag + documentation)

No major change may be released without formal review.

⸻

5.6 Transparency Policy / Politique de transparence

FR

Le GHI publie systématiquement :
	•	la méthodologie complète,
	•	les facteurs régionaux utilisés,
	•	les scripts de recalcul,
	•	les jeux de tests,
	•	les ajustements entre versions,
	•	l’historique complet des snapshots.

EN

GHI systematically publishes:
	•	full methodology,
	•	regional factors,
	•	recalculation scripts,
	•	test datasets,
	•	version adjustments,
	•	full snapshot history.

⸻

5.7 Audit Process / Processus d’audit

FR

Le modèle peut être audité par tout tiers indépendant grâce à :
	•	l’accès au moteur Python,
	•	les instructions de recalcul,
	•	les datasets normalisés,
	•	les exemples historiques reproductibles.

Des audits annuels peuvent être publiés en option.

EN

The model can be audited by any independent third party through:
	•	access to the Python engine,
	•	recalculation instructions,
	•	normalized datasets,
	•	reproducible historical examples.

Optional annual audit reports may be published.

⸻

5.8 Standardisation Path / Chemin de standardisation

FR

La feuille de route standardisation du GHI suit trois étapes :
	1.	Reconnaissance communautaire
Publication ouverte, adoption par chercheurs et analystes.
	2.	Reconnaissance sectorielle
Intégration par mineurs, fournisseurs de données, outils de marché.
	3.	Reconnaissance institutionnelle
Inclusion dans rapports bancaires, régulateurs, institutions publiques.

EN

The GHI standardization path follows three stages:
	1.	Community recognition
Open publication, adoption by researchers and analysts.
	2.	Industry recognition
Integration by miners, data providers, market tools.
	3.	Institutional recognition
Inclusion in banking, regulatory, and public institutional reports.

⸻

5.9 Governance Risks / Risques de gouvernance

FR

Les principaux risques identifiés :
	•	dépendance à un mainteneur unique,
	•	pressions économiques sectorielles,
	•	utilisation abusive ou tronquée des données,
	•	fork non officiel du modèle.

EN

Main identified risks:
	•	dependency on a single maintainer,
	•	sector economic pressures,
	•	misuse or partial interpretation of data,
	•	unofficial forks of the model.

⸻

5.10 Mitigation Measures / Mesures de mitigation

FR

Les mesures adoptées :
	•	processus public et traçable sur GitHub,
	•	comité de revue multi-acteurs,
	•	documentation exhaustive,
	•	moteur open-source,
	•	registre public des versions.

EN

Adopted measures:
	•	public and traceable GitHub workflow,
	•	multi-party review committee,
	•	exhaustive documentation,
	•	open-source engine,
	•	public version registry.

⸻

5.11 Long-Term Governance / Gouvernance long terme

FR

À long terme, le GHI vise :
	•	la création d’un comité élargi indépendant,
	•	l’intégration de partenaires universitaires,
	•	la formalisation d’un protocole d’audit annuel,
	•	la reconnaissance comme standard ouvert international.

EN

Long-term GHI objectives:
	•	establish an expanded independent committee,
	•	integrate academic partners,
	•	formalize an annual audit protocol,
	•	achieve recognition as an international open standard.

6. Roadmap / Feuille de route

Global HashCost Index (GHI) — Documentation v1.0

⸻

6.1 Overview / Présentation générale

FR

La feuille de route du GHI décrit l’évolution planifiée du modèle, de l’API, et des processus de gouvernance. Elle vise une montée progressive en précision, en granularité et en adoption institutionnelle.

EN

The GHI roadmap outlines the planned evolution of the model, API, and governance processes. It aims for progressive improvements in precision, granularity, and institutional adoption.

⸻

6.2 Roadmap Summary / Résumé de la feuille de route

FR

La roadmap GHI est structurée en trois phases :
	1.	Phase 1 — Standard ouvert minimal (v1.x)
	2.	Phase 2 — Modèle avancé et granularité accrue (v2.x)
	3.	Phase 3 — Référence institutionnelle mondiale (v3.x)

EN

The GHI roadmap is structured into three phases:
	1.	Phase 1 — Minimal open standard (v1.x)
	2.	Phase 2 — Advanced model & increased granularity (v2.x)
	3.	Phase 3 — Global institutional benchmark (v3.x)

⸻

6.3 Phase 1 — Minimal Open Standard (v1.x)

Phase 1 — Standard ouvert minimal (v1.x)

FR

Objectifs :
	•	publication du modèle de base,
	•	API v1 stable,
	•	documentation complète,
	•	snapshots quotidiens,
	•	transparence totale (code, datasets, méthodes).

Livrables :
	•	GHI Engine 1.0 (open-source)
	•	Documentation v1.0 (Overview, Méthodologie, API, Gouvernance)
	•	snapshot + indicator
	•	tableau des régions

Indicateur clé :
→ Reconnaissance communautaire et adoption initiale.

EN

Objectives:
	•	publish the base model,
	•	stable v1 API,
	•	full documentation,
	•	daily snapshots,
	•	full transparency (code, datasets, methodology).

Deliverables:
	•	GHI Engine 1.0 (open-source)
	•	Documentation v1.0 (Overview, Methodology, API, Governance)
	•	snapshot + indicator
	•	regional breakdown

Key indicator:
→ Community recognition and initial adoption.

⸻

6.4 Phase 2 — Advanced Model (v2.x)

Phase 2 — Modèle avancé et granularité accrue (v2.x)

FR

Objectifs :
	•	affiner la granularité régionale,
	•	ajouter le cooling factor dynamique,
	•	intégrer les données en temps réel,
	•	modéliser les variations intra-régionales,
	•	introduire optionnellement les composantes OPEX & amortissement.

Livrables :
	•	GHI Engine 2.0
	•	API v2 (nouvelles routes)
	•	pondérations régionales dynamiques
	•	intégration Kaiko / MiningMap
	•	dashboard avancé

Indicateur clé :
→ Reconnaissance par les acteurs du secteur (mineurs, data providers, analystes).

EN

Objectives:
	•	refine regional granularity,
	•	add dynamic cooling factor,
	•	integrate real-time energy data,
	•	model intra-regional variations,
	•	optionally include OPEX & depreciation components.

Deliverables:
	•	GHI Engine 2.0
	•	API v2 (new routes)
	•	dynamic regional weightings
	•	Kaiko / MiningMap integration
	•	advanced dashboard

Key indicator:
→ Adoption by industry actors (miners, data providers, analysts).

⸻

6.5 Phase 3 — Institutional Reference (v3.x)

Phase 3 — Référence institutionnelle mondiale (v3.x)

FR

Objectifs :
	•	reconnaissance par institutions financières et régulateurs,
	•	publication d’un protocole d’audit annuel,
	•	modélisation complète multi-couches (coût énergétique + OPEX + CAPEX),
	•	versions sectorielles personnalisées (banques, régulateurs, entreprises),
	•	documentation normative pour standardisation internationale.

Livrables :
	•	GHI Engine 3.0
	•	API v3 (stable long terme)
	•	standardisation de la méthodologie
	•	publication régulière d’audits indépendants
	•	adoptation dans rapports institutionnels

Indicateur clé :
→ Reconnaissance comme standard ouvert international.

EN

Objectives:
	•	recognition by financial institutions and regulators,
	•	publication of an annual audit protocol,
	•	full multi-layer model (energy + OPEX + CAPEX),
	•	sector-specific versions (banks, regulators, enterprises),
	•	normative documentation for international standardization.

Deliverables:
	•	GHI Engine 3.0
	•	API v3 (long-term stable)
	•	standardized methodology
	•	independent annual audits
	•	adoption in institutional reports

Key indicator:
→ Recognition as an international open standard.

⸻

6.6 Additional Milestones / Jalons complémentaires

FR
	•	ajout de nouvelles régions (Amérique latine, Océanie, Afrique du Nord),
	•	pondération hashrate améliorée via données industrielles,
	•	harmonisation des prix (€/MWh → $/kWh → MWh spot),
	•	API de séries temporelles (historique complet),
	•	validation académique via universités partenaires.

EN
	•	add new regions (Latin America, Oceania, North Africa),
	•	enhanced hashrate weighting using industrial datasets,
	•	price harmonization (€/MWh → $/kWh → spot MWh),
	•	time-series API (full historical data),
	•	academic validation via partner universities.

⸻

6.7 Vision Long Terme / Long-Term Vision

FR

À horizon 2030, le GHI vise à devenir la référence mondiale pour :
	•	l’évaluation du coût énergétique du Bitcoin,
	•	la comparaison régionales du mining,
	•	les analyses économiques,
	•	les politiques publiques liées au minage.

EN

By 2030, GHI aims to become the global reference for:
	•	Bitcoin energy cost assessment,
	•	regional mining comparison,
	•	economic analysis,
	•	public policy guidance.
