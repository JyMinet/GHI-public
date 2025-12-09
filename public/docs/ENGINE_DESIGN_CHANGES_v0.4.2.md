# GHI Sandbox Engine – Design Changes v0.4.2

Engine: `ghi-engine`  
Version: **v0.4.2-sandbox**  
API: **GHI Public API v1.1**  
Date: 2025-12-09  
Maintainer: GHI Engineering

---

## 0. French executive summary (FR)

La version **v0.4.2-sandbox** du moteur GHI introduit :

- la nouvelle API publique **v1.1** (router unique, structure de réponse unifiée, nouveaux endpoints),
- une mise à jour complète des données synthétiques du sandbox (snapshot, historique, réseau, forecast),
- une normalisation de la structure des régions pour satisfaire les tests de conformité,
- l’abandon du router API v1.0 au profit d’un unique router v1.1 (avec compatibilité de structure pour les usages historiques),
- des tests unitaires et d’intégration alignés sur ces nouveaux contrats.

Il n’y a **pas de breaking change** pour l’API v1.1 publiée : les modifications sont internes au moteur et aux données de démonstration.

---

## 1. Scope of v0.4.2

This document captures **engine-level changes** between:

- `v0.4.0-sandbox` → `v0.4.2-sandbox`

It does **not** redefine the full public API specification.  
For the normative API contract, refer to:

- `docs/API_v1.1_Spec.md` in `ghi-engine`,
- the public website `api/api-v1.1.html`.

The focus here is:

- internal routing & versioning,
- synthetic data models,
- region structure and validation,
- test coverage and non-regression guarantees.

---

## 2. API routing & versioning

### 2.1. Single v1.1 router

Previous situation (v0.4.0-sandbox):

- Two routers coexisted:
  - `v1.0` router (legacy),
  - `v1.1` router (initial draft, not finalised).

New situation (v0.4.2-sandbox):

- The engine exposes **only one router**, bound to the **v1.1** contract:

  - Module: `app/api/v1_1.py`
  - Router tag: `["GHI v1.1"]`
  - Mounted on: `/v1/ghi/*`

Rationale:

- reduce complexity,
- ensure that *all* tests validate the same public contract,
- avoid drift between legacy and “draft” routers.

### 2.2. Version metadata

The base metadata helper now consistently injects:

- `version` – API version (currently `"1.1"`),
- `timestamp_utc` – ISO 8601 with `Z` suffix,
- `engine_sandbox_version` – engine version string (now `"0.4.2-sandbox"`).

All v1.1 endpoints reuse this helper, ensuring a unified response envelope.

---

## 3. Region model and synthetic data

### 3.1. Region models

`RegionInfo` and `RegionCost` Pydantic models have been aligned with the v1.1 spec:

- `RegionInfo`:
  - `id: str`
  - `name: str`

- `RegionCost`:
  - `region_id: str` (primary key for region linkage)
  - `currency: str = "USD"`
  - `min_cost_usd: float`
  - `avg_cost_usd: float`
  - `max_cost_usd: float`

Internal note:

- In the sandbox, the `region_id` is treated as the **canonical key**;  
  any legacy `id`/`name` usage has been removed to satisfy CI tests and the v1.1 reference structure.

### 3.2. Synthetic snapshot data

The synthetic cost dataset has been refreshed to:

- reflect more recent orders of magnitude,
- provide coherent min/avg/max spreads across regions,
- be consistent between `snapshot` and `history` endpoints.

Function:

- `_sandbox_region_costs()` → `List[RegionCost]`

Regions provided:

- `"us"` – United States,
- `"eu"` – Europe,
- `"cn"` – China.

Each region includes:

- `min_cost_usd` – low bound,
- `avg_cost_usd` – central synthetic cost,
- `max_cost_usd` – high bound.

### 3.3. Global statistics computation

Helper:

- `_compute_global_stats(costs: List[RegionCost]) -> dict`

Responsibilities:

- `global_min_cost_usd` – min over regions,
- `global_avg_cost_usd` – average of regional averages,
- `global_max_cost_usd` – max over regions.

The computation is used only in v1.1 and is **synthetic by design** (no real-market data).

---

## 4. Endpoints behaviour (v1.1)

### 4.1. `/v1/ghi/snapshot`

Response model: `SnapshotResponse`

Provides:

- base metadata (version, timestamp, engine_sandbox_version),
- `region_count`,
- list of `RegionCost` objects,
- global statistics:
  - `global_min_cost_usd`,
  - `global_avg_cost_usd`,
  - `global_max_cost_usd`.

Changes vs v0.4.0:

- unified structure (no v1.0/v1.1 divergence),
- fully typed region IDs,
- explicit global statistics.

### 4.2. `/v1/ghi/history`

Response model: `HistoryResponse`

Sandbox behaviour:

- returns **7 synthetic daily points** for a given `region_id` (or `"global"`),
- each point: `date`, `min_cost_usd`, `avg_cost_usd`, `max_cost_usd`.

Changes vs v0.4.0:

- simplified generator logic,
- values aligned with the snapshot average (no incoherent gaps),
- tests updated to reflect the v1.1 structure.

### 4.3. `/v1/ghi/regions`

New in v1.1, response model: `RegionsResponse`

- lists all sandbox regions (`RegionInfo`),
- exposes `region_count`.

### 4.4. `/v1/ghi/metadata`

Response model: `MetadataResponse`

- exposes:
  - `version`,
  - `timestamp_utc`,
  - `engine_sandbox_version`,
  - `available_endpoints` (static list).

### 4.5. `/v1/ghi/network`

Response model: `NetworkResponse`

- synthetic network metrics:
  - `hashrate_eh`,
  - `difficulty`,
  - `avg_fee_usd`.

Note: metrics are placeholders and **not** derived from real chain data.

### 4.6. `/v1/ghi/forecast`

Response model: `ForecastResponse`

- returns:
  - `forecast_days` (input, default 7),
  - `predicted_avg_cost_usd` (constant synthetic value for now).

---

## 5. Compatibility & breaking changes

### 5.1. Public API

- The **v1.1 contract** is stable and covered by tests.
- There is **no breaking change** for existing v1.1 clients between `v0.4.0-sandbox` and `v0.4.2-sandbox`.

### 5.2. Internal / legacy

- The legacy v1.0 router has been removed from the engine:
  - any remaining v1.0 usage must migrate to v1.1.
- Sandbox data remains **synthetic**; real-data integration will be handled in a future engine release.

---

## 6. Testing

Test files updated:

- `tests/test_snapshot.py`
- `tests/test_api_sandbox.py`

Guarantees:

- 100% success on the v1.1 endpoints:
  - structure and field presence,
  - region list and region IDs,
  - global stats,
  - metadata fields.

Local command:

```bash
cd ghi-engine
source venv/bin/activate
pytest -q
# 18 passed (as of v0.4.2-sandbox)
7. Known limitations (sandbox)
	•	All values are synthetic and may change in future sandbox releases.
	•	Region list is deliberately small (us, eu, cn) to keep the demo readable.
	•	Forecast and network endpoints are flagged as beta:
	•	No statistical validity,
	•	Used only to illustrate potential future data payloads.

⸻

8. Next steps (engine roadmap)

Planned directions beyond v0.4.2-sandbox:
	1.	Data realism
	•	Plugging real hashprice / energy-cost proxies for selected regions.
	2.	Regional granularity
	•	Expanding beyond us/eu/cn to specific regulatory / energy regions.
	3.	Scenario / stress testing
	•	Adding scenario endpoints (price shocks, halving scenarios, regulation constraints).
	4.	Performance & scaling
	•	Benchmarks on precomputed vs on-demand synthetic aggregates.

⸻

End of document.