# API v1 — Global HashCost Index (GHI)

> Version du document / Document version: **0.3.0-sandbox-core**

Ce document décrit l’API **v1** exposée par le moteur GHI en mode **sandbox**.  
Les données sont synthétiques et destinées uniquement à la démonstration.

This document describes the **v1** API exposed by the GHI engine in **sandbox** mode.  
Data are synthetic and for demonstration purposes only.

Base URL (sandbox, example only)  
`https://your-sandbox-domain.example.com`

---

## 1. GET `/v1/ghi/snapshot`

### 1.1. Description (FR)

Retourne un **snapshot global** du coût de production du Bitcoin tel que calculé par le moteur GHI (mode sandbox, données factices).  
La structure de réponse est stable, mais **les valeurs sont purement illustratives**.

- Niveau global (réseau)  
- Détails par région de minage  
- Coûts min / moyen / max par BTC

### 1.2. Description (EN)

Returns a **global snapshot** of Bitcoin production costs as computed by the GHI engine (sandbox mode, fake data).  
The response structure is stable, but **values are purely illustrative**.

- Global network level  
- Per-region mining details  
- Min / average / max cost per BTC

---

### 1.3. Méthode / Method

- HTTP method: `GET`
- Path: `/v1/ghi/snapshot`
- Auth: none (sandbox demo)
- Rate limiting: to be defined (production only)

---

### 1.4. Réponse — Schéma JSON (FR)

```jsonc
{
  "as_of": "2025-12-02T21:38:33+00:00",   // horodatage ISO 8601 (UTC)
  "difficulty": 80000000000000.0,         // difficulté réseau
  "block_reward_btc": 3.125,              // récompense par bloc (BTC)
  "hashrate_total_th": 600000000.0,       // hashrate total (TH/s)
  "network_hashrate_eh": 600.0,           // hashrate total (EH/s, dérivé)
  "ghi": {
    "min_cost_btc": 22000.0,              // coût minimum global (USD/BTC)
    "avg_cost_btc": 25666.6667,           // coût moyen global (USD/BTC)
    "max_cost_btc": 29000.0               // coût maximum global (USD/BTC)
  },
  "regions": [
    {
      "region_id": "north_america",       // identifiant de région interne
      "avg_cost_usd_per_btc": 26000.0,    // coût moyen région (USD/BTC)
      "min_cost_usd_per_btc": 24000.0,    // coût min région (USD/BTC)
      "max_cost_usd_per_btc": 28000.0,    // coût max région (USD/BTC)

      // Champs de diagnostic optionnels (sandbox)
      "hashrate_pct": 0.35,               // part de hashrate (0–1)
      "energy": {
        "price_avg_usd_kwh": 0.06,        // prix moyen de l’énergie
        "price_min_usd_kwh": 0.05,
        "price_max_usd_kwh": 0.08
      },
      "hardware": {
        "efficiency_avg_w_th": 25.0,
        "efficiency_min_w_th": 20.0,
        "efficiency_max_w_th": 30.0
      }
    }

    // ... autres régions
  ]
}

Notes importantes (FR) :
	•	Les clés suivantes sont considérées comme partie du contrat public minimal :
	•	as_of
	•	difficulty
	•	block_reward_btc
	•	network_hashrate_eh
	•	ghi.min_cost_btc, ghi.avg_cost_btc, ghi.max_cost_btc
	•	regions[*].region_id
	•	regions[*].avg_cost_usd_per_btc
	•	regions[*].min_cost_usd_per_btc
	•	regions[*].max_cost_usd_per_btc
	•	Les autres champs (energy, hardware, etc.) sont optionnels et peuvent évoluer sans changement de version majeure tant que le contrat minimal est respecté.

⸻

1.5. Response — JSON schema (EN)

Minimal public contract (non-normative):
{
  "as_of": "string (ISO 8601, UTC)",
  "difficulty": "number",
  "block_reward_btc": "number",
  "network_hashrate_eh": "number",
  "ghi": {
    "min_cost_btc": "number",
    "avg_cost_btc": "number",
    "max_cost_btc": "number"
  },
  "regions": [
    {
      "region_id": "string",
      "avg_cost_usd_per_btc": "number",
      "min_cost_usd_per_btc": "number",
      "max_cost_usd_per_btc": "number"
      // additional diagnostics fields allowed
    }
  ]
}

Guarantees:
	•	All fields above are always present.
	•	Additional fields may be added over time (backward compatible).
	•	Units are stable: USD/BTC for costs, EH/s for network_hashrate_eh.

⸻

1.6. Exemple de réponse / Example response
{
  "as_of": "2025-12-02T21:38:33+00:00",
  "difficulty": 80000000000000.0,
  "block_reward_btc": 3.125,
  "hashrate_total_th": 600000000.0,
  "network_hashrate_eh": 600.0,
  "ghi": {
    "min_cost_btc": 22000.0,
    "avg_cost_btc": 25666.6667,
    "max_cost_btc": 29000.0
  },
  "regions": [
    {
      "region_id": "north_america",
      "avg_cost_usd_per_btc": 26000.0,
      "min_cost_usd_per_btc": 24000.0,
      "max_cost_usd_per_btc": 28000.0,
      "hashrate_pct": 0.35,
      "energy": {
        "price_avg_usd_kwh": 0.06,
        "price_min_usd_kwh": 0.05,
        "price_max_usd_kwh": 0.08
      },
      "hardware": {
        "efficiency_avg_w_th": 25.0,
        "efficiency_min_w_th": 20.0,
        "efficiency_max_w_th": 30.0
      }
    }
  ]
}

2. Endpoints prévus / Planned endpoints

Ces endpoints sont prévus dans la roadmap, mais non encore exposés dans le moteur sandbox actuel.
They are planned for future releases, but not yet exposed in the current sandbox engine.
	•	GET /v1/ghi/regions — list all regions with basic metadata.
	•	GET /v1/ghi/regions/{id} — detailed view for a single region.
	•	GET /v1/ghi/history — historical snapshots (paginated).
	•	GET /v1/ghi/stats — derived statistics (spread, over/under production cost, etc.).

Les spécifications détaillées seront ajoutées lorsque ces endpoints seront stabilisés.
Detailed specifications will be added once these endpoints are stabilized.


---
## Quickstart – Sandbox API v1 (FR/EN)

### Endpoint principal / Main endpoint

- Méthode / Method: `GET`
- URL (sandbox locale) / URL (local sandbox): `http://127.0.0.1:8000/v1/ghi/snapshot`
- Format: `application/json`

### Exemple de requête (curl)

```bash
curl -s http://127.0.0.1:8000/v1/ghi/snapshot

Exemple de réponse (tronquée)
{
  "as_of": "2025-12-02T21:38:33+00:00",
  "network_hashrate_eh": 600.0,
  "block_reward_btc": 3.125,
  "difficulty": 80000000000000.0,
  "ghi": {
    "min_cost_btc": 22000.0,
    "avg_cost_btc": 25666.67,
    "max_cost_btc": 29000.0
  },
  "regions": [
    {
      "region_id": "north_america",
      "hashrate_pct": 0.35,
      "cost": {
        "min_cost_btc": 24000.0,
        "avg_cost_btc": 26000.0,
        "max_cost_btc": 28000.0
      }
    }
    // ...
  ]
}

Notes
	•	Cette API est sandbox : les données sont synthétiques et ne doivent pas être utilisées pour des décisions financières.
	•	Le moteur réel (core privé) n’est pas exposé dans ce dépôt.
	•	Pour un usage institutionnel ou une intégration avancée, merci de nous contacter.
⸻

