INSTITUTIONAL PACK – SLIDE DECK v1.0 (ENGLISH VERSION)

20-slide professional structure

⸻

Slide 1 — Title Page

Global HashCost Index (GHI)
Institutional Overview – v1.0
Open, transparent and versioned standard for Bitcoin production cost.
Contact: info@ghi-standard.org
Website: https://globalhashcostindex.org

⸻

Slide 2 — Executive Summary
	•	GHI is an open, non-profit standard for measuring Bitcoin production cost.
	•	Versioned approach: API v1.0, Methodology v1.0.0, Sandbox Engine v0.4.0.
	•	Global + regional cost estimates (min / avg / max).
	•	Designed for institutions, supervisors, researchers and analysts.

⸻

Slide 3 — Motivation

Why a global production cost standard?
	•	Market volatility and opacity around miners’ economics.
	•	Need for a neutral, reproducible benchmark.
	•	Lack of harmonised methodology across regions.
	•	Increasing regulatory interest for energy-intensive sectors.

⸻

Slide 4 — GHI Scope

GHI provides:
	•	A global cost of production (USD/BTC).
	•	Regional aggregates (North America, Europe, Asia ex-China).
	•	Harmonised assumptions and versioned methodology.
	•	Public documentation and open governance.

⸻

Slide 5 — Versioning Framework

Each component has its own version:
	•	API: v1.0
	•	Methodology: 1.0.0
	•	Engine (public): v0.4.0-sandbox
	•	Engine (private): non-public
Stable versioning ensures reproducibility and auditability.

⸻

Slide 6 — Methodology Overview (v1.0.0)

The methodology defines:
	•	Network inputs (difficulty, hashrate, block subsidy).
	•	Regional profiles (machine mix, tariffs, load factors).
	•	Aggregation model (regional → global).
	•	Deterministic scenarios (min, avg, max).

⸻

Slide 7 — Data Architecture

Three layers:
	1.	Network sources
	2.	Regional sources
	3.	Aggregation layer
Ensures separation of concerns and traceability.

⸻

Slide 8 — GHI Cost Model (Simplified)

energy_per_BTC = total_energy / BTC_mined
energy_cost = energy_per_BTC × electricity_price
Scenarios modify:
	•	ASIC efficiency
	•	Tariff levels
	•	Load factors

⸻

Slide 9 — Global Aggregation

Regional cost → weighted aggregation using regional hashrate shares:
	•	min_cost
	•	avg_cost
	•	max_cost
Provides a single global benchmark.

⸻

Slide 10 — Sandbox Engine v0.4.0

Purpose:
	•	Provide stable, deterministic data for prototyping.
	•	Reproduce the structure of the real engine.
Not intended for market or investment decisions.

⸻

Slide 11 — Public API v1.0

Endpoints:
	•	/v1/ghi/indicator → Daily cost
	•	/v1/ghi/snapshot → Global structured snapshot
Metadata included:
api_version, methodology_version, engine_version, data_origin, stability_seed.

⸻

Slide 12 — Regional Results Structure

Each region includes:
	•	min / avg / max cost
	•	machine efficiency assumptions
	•	energy tariff scenarios
	•	hashrate share
Designed for institutional comparisons.

⸻

Slide 13 — Transparency & Governance

Principles:
	•	Open documentation (methodology, versions).
	•	Public changelog.
	•	Every change via GitHub Pull Requests.
	•	Neutral standard, independent of miners or vendors.

⸻

Slide 14 — Technical Notes v1.1

Three institutional notes:
	•	TN1 — Cost vs Market Price
	•	TN2 — Sensitivity to Energy Prices
	•	TN3 — Halving Impact
Available publicly on the GHI website.

⸻

Slide 15 — Compliance & Supervision

GHI supports:
	•	Supervisory monitoring of mining economics.
	•	Policy assessment for energy-intensive sectors.
	•	Risk models evaluating miners’ cost floors.

⸻

Slide 16 — Institutional Use Cases

Examples:
	•	Benchmarking mining profitability.
	•	Sensitivity analysis (energy, hardware efficiency).
	•	Infrastructure investment comparisons.
	•	Regulatory reporting support.

⸻

Slide 17 — Limitations of v1.0
	•	Public engine uses synthetic data.
	•	Regional assumptions simplified.
	•	No sub-regional segmentation yet.
	•	No CAPEX or financing costs included.

⸻

Slide 18 — Roadmap v1.x
	•	Refined regional datasets.
	•	Better public data integration.
	•	Optional CO₂ metrics.
	•	Industry feedback integration.

⸻

Slide 19 — Roadmap v2.0

Major upgrade:
	•	Real multi-source data ingestion.
	•	Sub-regional detail (e.g., Texas, Québec).
	•	Advanced scenarios (stress, energy mixes).
	•	Extended metrics for institutional supervision.

⸻

Slide 20 — Contact & Access

All resources:
https://globalhashcostindex.org

GitHub:
https://github.com/ghi-standard

Whitepaper v1.0 (EN/FR)
Technical Notes v1.1
API Quickstart v1.0
Methodology v1.0.0
Transparency v1.0

⸻

PACK INSTITUTIONNEL – SLIDE DECK v1.0 (VERSION FRANÇAISE)

⸻

Diapositive 1 — Page de titre

Global HashCost Index (GHI)
Présentation institutionnelle – v1.0
Standard ouvert du coût de production du Bitcoin
Contact : info@ghi-standard.org
Site : https://globalhashcostindex.org

⸻

Diapositive 2 — Résumé exécutif
	•	GHI est un standard ouvert et neutre pour mesurer le coût de production du Bitcoin.
	•	Versionnage : API v1.0, Méthodologie 1.0.0, Moteur Sandbox v0.4.0.
	•	Coûts globaux + par régions.
	•	Conçu pour institutions, superviseurs et analystes.

⸻

Diapositive 3 — Pourquoi un standard ?
	•	Volatilité du secteur minier.
	•	Absence de méthodologie harmonisée.
	•	Forte demande institutionnelle en transparence.
	•	Intérêt croissant des régulateurs pour les secteurs énergivores.

⸻

Diapositive 4 — Périmètre du GHI

Le GHI fournit :
	•	un coût global (USD/BTC),
	•	des agrégats régionaux,
	•	une méthodologie documentée,
	•	une gouvernance ouverte.

⸻

Diapositive 5 — Cadre de versionnage
	•	API : v1.0
	•	Méthodologie : 1.0.0
	•	Moteur public : v0.4.0-sandbox
	•	Moteur privé : non public
Garantit stabilité et traçabilité.

⸻

Diapositive 6 — Méthodologie v1.0.0

Définit :
	•	entrées réseau,
	•	profils régionaux,
	•	scénarios min / avg / max,
	•	modèle d’agrégation.

⸻

Diapositive 7 — Architecture des données

Trois couches :
	1.	réseau,
	2.	régions,
	3.	agrégation.

⸻

Diapositive 8 — Modèle de coût (simple)

énergie/BTC = énergie_totale / BTC_minés
coût = énergie/BTC × prix électricité
Scénarios influencés par :
	•	efficacité ASIC,
	•	tarifs électricité,
	•	charge.

⸻

Diapositive 9 — Agrégation globale

Agrégation pondérée par part de hashrate :
min_cost / avg_cost / max_cost.

⸻

Diapositive 10 — Moteur Sandbox v0.4.0
	•	Données factices stables,
	•	Reproduit la structure du moteur réel,
	•	Non destiné à une prise de décision marché.

⸻

Diapositive 11 — API publique v1.0

Endpoints :
	•	/v1/ghi/indicator
	•	/v1/ghi/snapshot
Métadonnées intégrées :
api_version, methodology_version, engine_version, data_origin, stability_seed.

⸻

Diapositive 12 — Structure des régions

Chaque région inclut :
	•	min / avg / max,
	•	hypothèses machines,
	•	scénarios tarifaires,
	•	part de hashrate.

⸻

Diapositive 13 — Gouvernance & Transparence

Principes :
	•	documentation ouverte,
	•	changelog public,
	•	PR GitHub obligatoires,
	•	standard neutre.

⸻

Diapositive 14 — Notes techniques v1.1
	•	TN1 — Coût vs prix BTC
	•	TN2 — Sensibilité au prix énergie
	•	TN3 — Effet du halving

⸻

Diapositive 15 — Supervision & conformité

GHI applique à :
	•	suivi institutionnel,
	•	évaluation des politiques publiques énergétiques,
	•	analyses de risque.

⸻

Diapositive 16 — Cas d’usage institutionnels
	•	analyse de rentabilité,
	•	stress tests,
	•	comparaison régionale,
	•	aide à la décision.

⸻

Diapositive 17 — Limites v1.0
	•	données sandbox non réelles,
	•	hypothèses simplifiées,
	•	pas de segmentation poussée,
	•	CAPEX non inclus.

⸻

Diapositive 18 — Roadmap v1.x
	•	affinement des profils régionaux,
	•	sources publiques renforcées,
	•	ajout CO₂ (optionnel),
	•	retours industrie.

⸻

Diapositive 19 — Roadmap v2.0
	•	ingestion multi-source réelle,
	•	segmentation fine,
	•	scénarios avancés,
	•	métriques élargies.

⸻

Diapositive 20 — Contacts

Site : https://globalhashcostindex.org
GitHub : https://github.com/ghi-standard
Whitepaper v1.0
Notes techniques v1.1
API v1.0
Méthodologie + Transparence