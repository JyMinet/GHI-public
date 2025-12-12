# Global HashCost Index (GHI)
## Institutional Brief — Public Standard v1.1

* * *

## 1. Executive Summary
## Executive Summary (Public Standard v1.1)

The Global HashCost Index (GHI) is an open, versioned and reproducible standard designed to estimate Bitcoin’s production cost range (min/avg/max), globally and by major regions, using transparent modelling assumptions.

GHI is not a trading signal and not a financial product. It does not provide investment recommendations. The public release currently exposes a sandbox engine producing deterministic synthetic data intended for integration testing, documentation validation and stakeholder review.

The GHI public API (v1.1) provides:
- a global snapshot of the estimated production cost range,
- a regional breakdown aligned with a consistent data model,
- a beta history endpoint to support time-series integration.

The long-term objective is to maintain a stable public standard that institutions, researchers and market participants can integrate safely (versioned API + documented methodology), while separating the public sandbox from production-grade computations that may include additional datasets and confidentiality constraints.

This document describes the methodology v1.1, the public data model, and the API v1.1 interface, together with explicit limitations and legal disclaimers.
## Résumé exécutif (Standard public v1.1)

Le Global HashCost Index (GHI) est un standard ouvert, versionné et reproductible visant à estimer une fourchette de coût de production du Bitcoin (min/moy/max), au niveau mondial et par grandes régions, selon des hypothèses de modélisation documentées.

GHI n’est ni un signal de trading, ni un produit financier. Il ne fournit aucune recommandation d’investissement. La version publique expose actuellement un moteur sandbox produisant des données factices déterministes, destinées aux tests d’intégration, à la validation documentaire et à la revue par des tiers.

L’API publique GHI (v1.1) fournit :
- un snapshot global de la fourchette de coût de production estimée,
- une ventilation par région alignée sur un modèle de données stable,
- un endpoint d’historique en beta pour faciliter l’intégration en séries temporelles.

L’objectif long terme est de maintenir un standard public stable (API versionnée + méthodologie documentée) intégrable par les institutions, chercheurs et analystes, tout en séparant strictement le moteur public sandbox des calculs “production-grade” pouvant intégrer des sources additionnelles et des contraintes de confidentialité.

Ce document présente la méthodologie v1.1, le modèle de données public et l’interface API v1.1, ainsi que les limites connues et les disclaimers légaux.

* * *

## 2. What is GHI / What GHI is NOT

# 2. What GHI Is / What GHI Is Not

## What GHI Is
- An **open methodological standard**.
- A **cost-based analytical indicator**.
- A **multi-region aggregation model**.
- A **versioned and auditable API**.

## What GHI Is Not
- A trading signal.
- A price prediction model.
- A profitability calculator.
- A substitute for proprietary mining data.

* * *

# 3. Methodology Overview (v1.1)

## 3.1 Core Principle

GHI estimates the **direct energy cost** required to mine one Bitcoin, excluding:
- CAPEX,
- financing costs,
- corporate overhead,
- taxation.

Costs are expressed in **USD / BTC**.

* * *

## 3.2 Regional Cost Model (Simplified)

For a given region **R**:
energy_per_BTC_R = total_energy_consumption_R / BTC_mined_R
cost_BTC_R       = energy_per_BTC_R × avg_electricity_price_R

* * *
Each region produces:
- `min_cost`
- `avg_cost`
- `max_cost`

based on scenario assumptions.

* * *

## 3.3 Scenarios (min / avg / max)

Scenarios are derived from variations on:
- ASIC efficiency (older vs newer generations),
- electricity tariffs (floor / median / ceiling),
- utilization and load factors.

* * *

# 4. Global Aggregation Model

The **Global HashCost Index** is computed as a **weighted aggregation** of regional costs:

- weights are derived from estimated regional hashrate shares,
- outputs remain **min / avg / max** at the global level.

This ensures:
- internal consistency,
- comparability across regions,
- transparency of assumptions.

* * *

# 5. Data Model Structure (v1.1)

Each API output is structured around three blocks:

## 5.1 Global Snapshot
- Reference date
- Global min / avg / max cost
- Model version metadata

## 5.2 Regions
- Regional cost bands
- Hashrate share
- Regional metadata

## 5.3 History
- Normalized time series
- Versioned methodology
- Comparable historical frames

* * *

# 6. API v1.1 Overview

## 6.1 Scope
The public API v1.1 exposes:
- latest snapshot endpoints,
- regional breakdowns,
- global history (beta).

## 6.2 Stability
- Deterministic outputs (Sandbox Engine),
- Strict semantic versioning,
- Backward compatibility within minor versions.

## 6.3 Intended Usage
- Academic research,
- Infrastructure benchmarking,
- Technical integration,
- Methodological validation.

* * *

# 7. Governance & Versioning

## 7.1 Versioning
- API: Semantic Versioning (`vMAJOR.MINOR`)
- Methodology: Independent versioning (`METHODOLOGY_VERSION`)

## 7.2 Public vs Private Engines
- **Public Engine**: Sandbox, synthetic, deterministic.
- **Private Engine**: Real data, confidential inputs, non-public.

Only the public engine is exposed through the GHI standard.

* * *

# 8. Legal Disclaimer

## English

The Global HashCost Index (GHI) is provided **for informational and analytical purposes only**.

The data published via the public API and dashboard:
- is based on **synthetic and simplified assumptions**,
- **does not represent real-world mining costs**,
- **must not be used** for investment decisions, trading strategies, financial planning or valuation.

GHI, its contributors and maintainers **do not provide financial, investment, legal or tax advice** and **accept no liability** for decisions made based on this data.

Use of the GHI implies full acceptance of these limitations.

* * *

## Français

Le Global HashCost Index (GHI) est fourni **exclusivement à des fins informatives et analytiques**.

Les données publiées via l’API et le dashboard publics :
- reposent sur des **hypothèses factices et simplifiées**,
- **ne reflètent pas les coûts réels du minage**,
- **ne doivent en aucun cas être utilisées** pour des décisions d’investissement, de trading, de valorisation ou de planification financière.

Le GHI, ses contributeurs et mainteneurs **ne fournissent aucun conseil financier, juridique ou fiscal** et **déclinent toute responsabilité** quant à l’usage fait de ces données.

L’utilisation du GHI implique l’acceptation pleine et entière de ces limitations.

* * *

# 9. Roadmap (Methodology)

- **v1.x**: refinement of public assumptions, documentation expansion.
- **v2.0**: integration of multi-source real data, enhanced regional transparency.
- **v2.x**: advanced scenarios (energy mix, stress testing, CO₂ metrics).

* * *

# 10. Contact & Contribution

Project website: https://globalhashcostindex.org  
Documentation & API: https://globalhashcostindex.org/api.html  
Governance: https://globalhashcostindex.org/governance.html  

Contributions are welcome through the official GitHub repositories,
subject to the project’s governance and transparency rules.

