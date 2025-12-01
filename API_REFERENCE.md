# Global HashCost Index — Sandbox API Reference (v0.1.x)

This document describes the **sandbox API** of the Global HashCost Index (GHI).  
It exposes a simplified version of the official GHI Data Model v1.0 using **synthetic (fake) data**.

This API is intended for:
- early integration,
- demonstration,
- institutional validation of the data structure,
- prototype dashboards.

It **does not** reflect the real production engine.

---

# 1. General Information

## 1.1. Base URL (local)
http://127.0.0.1:8000

## 1.2. API Version

All endpoints are versioned under:

/v1/ghi/…

The HTTP response includes:

The HTTP response includes:
X-GHI-Version: 1.0
## 1.3. Response Format

- JSON only (`application/json; charset=utf-8`)
- All numbers are floats
- Datetimes use ISO 8601 (UTC)

---

# 2. Data Models (simplified)

The sandbox follows the **GHI Data Model v1.0**.

## 2.1. Cost Object

```json
{
  "min_cost_btc": 20000.0,
  "avg_cost_btc": 25000.0,
  "max_cost_btc": 30000.0
}

2.2. Region Object

{
  "region_id": "north_america",
  "name": "North America",
  "hashrate_pct": 0.35,
  "cost": { ... },
  "energy": {
    "price_min_usd_kwh": 0.04,
    "price_avg_usd_kwh": 0.06,
    "price_max_usd_kwh": 0.08
  },
  "hardware": {
    "efficiency_min_w_th": 20.0,
    "efficiency_avg_w_th": 25.0,
    "efficiency_max_w_th": 30.0
  },
  "metadata": {
    "updated_at": "2025-01-01T12:00:00Z",
    "data_source": "fake_public"
  }
}

2.3. Snapshot Object
{
  "timestamp": "2025-01-01T12:00:00Z",
  "ghi": { ... },
  "difficulty": 80000000000000.0,
  "hashrate_total_th": 600000000.0,
  "block_reward_btc": 3.125,
  "regions": [ ... ],
  "version": "1.0"
}

2.4. HistoryPoint Object
{
  "timestamp": "2025-01-01T00:00:00Z",
  "min_cost_btc": 22000.0,
  "avg_cost_btc": 25000.0,
  "max_cost_btc": 28000.0,
  "difficulty": 80000000000000.0,
  "hashrate_total_th": 600000000.0
}

2.5. Stats Object
{
  "timestamp": "2025-01-01T12:00:00Z",
  "regions_count": 3,
  "avg_hashrate_total_th": 600000000.0,
  "avg_cost_btc": 25000.0,
  "notes": "Sandbox stats on fake data – GHI Data Model v1.0 compatible."
}

3. Endpoints

3.1. GET /v1/ghi/snapshot

Returns a GHI snapshot at time T.

Example request
curl http://127.0.0.1:8000/v1/ghi/snapshot

Example response
{
  "timestamp": "2025-01-01T12:00:00Z",
  "ghi": { "min_cost_btc": 23000, "avg_cost_btc": 26000, "max_cost_btc": 29000 },
  "difficulty": 80000000000000,
  "hashrate_total_th": 600000000,
  "block_reward_btc": 3.125,
  "regions": [ ... ],
  "version": "1.0"
}

3.2. GET /v1/ghi/history

Returns a time series of snapshots (using synthetic data).

Example
curl http://127.0.0.1:8000/v1/ghi/history

Response
[
  {
    "timestamp": "2025-01-01T00:00:00Z",
    "min_cost_btc": 22000,
    "avg_cost_btc": 25000,
    "max_cost_btc": 28000,
    "difficulty": 80000000000000,
    "hashrate_total_th": 600000000
  }
]

3.3. GET /v1/ghi/regions

Returns the list of regions.

Example
curl http://127.0.0.1:8000/v1/ghi/regions

Response (simplified)
[
  { "region_id": "north_america", "name": "North America", ... },
  { "region_id": "europe", "name": "Europe", ... },
  { "region_id": "asia_no_china", "name": "Asia (ex-China)", ... }
]

3.4. GET /v1/ghi/regions/{region_id}

Returns a single region by ID.

Example
curl http://127.0.0.1:8000/v1/ghi/regions/europe

Example response
{
  "region_id": "europe",
  "name": "Europe",
  "hashrate_pct": 0.25,
  "cost": { ... },
  "energy": { ... },
  "hardware": { ... },
  "metadata": { ... }
}

3.5. GET /v1/ghi/stats

Returns global statistics derived from the synthetic dataset.

Example
curl http://127.0.0.1:8000/v1/ghi/stats

Example response
{
  "timestamp": "2025-01-01T12:00:00Z",
  "regions_count": 3,
  "avg_hashrate_total_th": 600000000,
  "avg_cost_btc": 25000,
  "notes": "Sandbox stats on fake data – GHI Data Model v1.0 compatible."
}

4. Notes
	•	The sandbox API uses fake data, but with a structure 100% aligned with the GHI Data Model v1.0.
	•	The production API (real cost engine) is scheduled for Phase 3 of the GHI roadmap.
	•	The sandbox exists to validate:
	•	API structure,
	•	client integrations,
	•	dashboards,
	•	institutional workflows.

⸻

5. License

Documentation published under:
Creative Commons CC BY-NC-SA 4.0