**📄 WHITEPAPER GHI v1.0

Global HashCost Index – Technical & Governance Standard
(EN → FR)**

⸻

1. Introduction

1.1 Overview (EN)

The Global HashCost Index (GHI) is an open, neutral and versioned standard designed to measure the global cost of Bitcoin production.
Its purpose is to provide a transparent, reproducible and institutionally usable metric based solely on public information and documented methodology.

GHI v1.0 defines a complete framework that includes:
	•	a global production cost index (min / avg / max),
	•	a regional breakdown based on synthetic or real inputs,
	•	a public API v1.0 with stable contracts,
	•	a sandbox engine for demonstrations and integrations,
	•	a methodology v1.0.0 with explicit assumptions,
	•	a governance and versioning model ensuring long-term stability,
	•	a roadmap preparing future releases and production engines.

No proprietary or confidential data is exposed in this public standard.

⸻

1.2 Vue d’ensemble (FR)

Le Global HashCost Index (GHI) est un standard ouvert, neutre et versionné visant à mesurer le coût de production du Bitcoin à l’échelle mondiale.
L’objectif est de proposer un indicateur transparent, reproductible et utilisable par les institutions, basé exclusivement sur des sources publiques et une méthodologie documentée.

GHI v1.0 définit un cadre complet comprenant :
	•	un indice global de coût de production (min / moyen / max),
	•	un détail régional basé sur des hypothèses synthétiques ou réelles,
	•	une API publique v1.0 stable,
	•	un moteur sandbox pour la démonstration et l’intégration,
	•	une méthodologie v1.0.0 explicitant les hypothèses utilisées,
	•	un modèle de gouvernance et de versionnage assurant la pérennité,
	•	une feuille de route préparant les futures évolutions du moteur.

Aucune donnée confidentielle ou propriétaire n’est exposée dans ce standard public.

⸻

2. Scope & Principles

2.1 Scope of GHI (EN)

GHI measures:
	•	the direct energy cost to produce 1 BTC,
	•	aggregated across major regions,
	•	expressed in USD/BTC.

GHI does not measure:
	•	ASIC depreciation,
	•	CAPEX or financing,
	•	taxes or regulatory overhead,
	•	miner profitability,
	•	individual facility behavior.

GHI is an energy-centric production cost index.

⸻

2.2 Périmètre du GHI (FR)

GHI mesure :
	•	le coût énergétique direct pour produire 1 BTC,
	•	agrégé par grandes régions,
	•	exprimé en USD/BTC.

GHI ne mesure pas :
	•	la dépréciation des machines,
	•	les CAPEX ou coûts de financement,
	•	la fiscalité ou les coûts réglementaires,
	•	la rentabilité minière,
	•	le comportement individuel d’un site.

GHI est un indice centré sur le coût énergétique de production.

⸻

3. Data Model v1.0

3.1 Structure (EN)

The Data Model v1.0 defines three layers:
	1.	Network inputs
	•	Difficulty
	•	Global hashrate
	•	Block subsidy
	2.	Regional inputs
	•	ASIC fleet assumptions (synthetic in public repo)
	•	Electricity price scenarios (min / avg / max)
	•	Load factor profiles
	3.	Aggregated outputs
	•	Regional costs
	•	Global min / avg / max cost
	•	Snapshot metadata (engine, methodology, API versions)

⸻

3.2 Structure (FR)

Le Data Model v1.0 définit trois couches :
	1.	Paramètres réseau
	•	Difficulté
	•	Hashrate mondial
	•	Récompense par bloc
	2.	Données régionales
	•	Composition du parc ASIC (synthétique dans le dépôt public)
	•	Scénarios de prix de l’électricité
	•	Facteurs de charge
	3.	Sorties agrégées
	•	Coûts par région
	•	Coût global min / moyen / max
	•	Métadonnées du snapshot (versions moteur, API, méthodologie)

⸻

4. Methodology v1.0.0

4.1 Summary (EN)

For a region R, the unit production cost is:
energy_per_BTC_R   = total_energy_R / BTC_mined_R
cost_per_BTC_R     = energy_per_BTC_R × electricity_price_R

Scenarios define:
	•	min (newer ASICs / cheaper electricity),
	•	avg (central),
	•	max (older ASICs / expensive electricity).

The global GHI cost is a weighted aggregation based on hashrate shares.

⸻

4.2 Résumé (FR)

Pour une région R, le coût unitaire est :
énergie_par_BTC_R   = énergie_totale_R / BTC_minés_R
coût_par_BTC_R      = énergie_par_BTC_R × prix_électricité_R

Les scénarios produisent :
	•	min (ASICs récents / électricité bon marché),
	•	moyen (central),
	•	max (ASICs anciens / électricité chère).

L’agrégation mondiale utilise les parts de hashrate par région.

⸻

5. Engine Architecture

5.1 Public Sandbox Engine (EN)

The sandbox engine v0.4.0:
	•	returns deterministic fake data,
	•	mirrors the structure of the real engine,
	•	enables integration tests and API stability,
	•	exposes no internal formulas.

Its role is to ensure full public reproducibility.

⸻

5.2 Moteur Sandbox public (FR)

Le moteur sandbox v0.4.0 :
	•	retourne des données factices mais déterministes,
	•	reproduit l’architecture du moteur réel,
	•	garantit la stabilité de l’API,
	•	n’expose aucune formule interne.

Il assure une reproductibilité publique complète.

⸻

5.3 Private Engine (Non-Public)

(EN + FR merged for confidentiality)

A private engine exists separately and includes:
	•	richer ASIC distributions,
	•	multi-source data ingestion,
	•	internal calibration parameters,
	•	advanced aggregation logic.

None of this is included in the public repository.
Only the interfaces and structure are public.

⸻

6. API v1.0

6.1 Endpoints (EN)
	•	/v1/ghi/indicator — daily min / avg / max
	•	/v1/ghi/snapshot — structured snapshot (regions included)
	•	/v1/ghi/history — historical points (stub in sandbox)
	•	/v1/ghi/regions — region list
	•	/v1/ghi/stats — global stats

All responses include metadata:
api_version
methodology_version
engine_version
data_origin
stability_seed

6.2 Endpoints (FR)
	•	/v1/ghi/indicator — min / moyen / max quotidien
	•	/v1/ghi/snapshot — snapshot structuré (avec régions)
	•	/v1/ghi/history — historique (stub sandbox)
	•	/v1/ghi/regions — liste des régions
	•	/v1/ghi/stats — statistiques globales

Chaque réponse inclut des métadonnées normalisées.

⸻

7. Governance & Versioning

7.1 Governance (EN)

GHI uses a transparent governance model:
	•	all changes through public pull requests,
	•	semantic versioning,
	•	public changelog,
	•	institutionally auditable documentation.

7.2 Gouvernance (FR)

La gouvernance GHI repose sur :
	•	des pull requests publiques,
	•	un versionnage sémantique,
	•	un changelog transparent,
	•	une documentation auditée.

⸻

8. Compliance & Audit

8.1 Institutional Access (EN)

Under NDA, institutions may obtain:
	•	anonymized input–output samples,
	•	replay of historical snapshots,
	•	methodological clarifications.

8.2 Accès institutionnel (FR)

Sous NDA, les institutions peuvent obtenir :
	•	des couples entrées–sorties anonymisés,
	•	des replays historiques,
	•	des clarifications méthodologiques.

⸻

9. Roadmap

9.1 EN
	•	v1.x: refinement of regional assumptions
	•	v2.0: introduction of real multi-source data
	•	v2.x: advanced scenarios (energy mix, stress tests, sensitivities)

9.2 FR
	•	v1.x : raffinement des hypothèses régionales
	•	v2.0 : données réelles multisources
	•	v2.x : scénarios avancés (mix énergétique, stress tests)

⸻

10. Conclusion

10.1 EN

GHI v1.0 establishes the first public, neutral and reproducible global Bitcoin production cost index.
It is designed for regulators, institutions, analysts and researchers.

10.2 FR

GHI v1.0 établit le premier indice public, neutre et reproductible du coût de production du Bitcoin.
Il est destiné aux régulateurs, institutions, analystes et chercheurs.

⸻

→ FIN DU WHITEPAPER
