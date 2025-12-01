Global HashCost Index — Data Model v1.0

Standard Technique – Version 1.0

⸻

1. Objet du modèle de données

Le Data Model v1.0 définit :
	•	les structures de données officielles du GHI,
	•	les champs obligatoires,
	•	les formats attendus,
	•	les jeux de données minimaux à exposer,
	•	les structures pour le snapshot, l’historique et les régions.

Ce modèle garantit l’uniformité entre le moteur Python, l’API, les futures implémentations externes et les publications institutionnelles.

⸻

2. Principes généraux

2.1. Types et normes
	•	Dates : ISO 8601, UTC.
	•	Nombres : float64.
	•	Identifiants : chaînes normalisées ASCII.
	•	Structuration : objets JSON / YAML / Python dict.
	•	Unités :
	•	coûts : USD/BTC
	•	énergie : kWh
	•	hashrate : % du réseau (0–1)
	•	rendement : W/TH

2.2. Cohérence interne
	•	Chaque région doit définir min/avg/max.
	•	Chaque snapshot doit être autosuffisant.
	•	Chaque valeur doit être horodatée.
	•	Le modèle doit être reproductible sans dépendance externe.

⸻

3. Structure “GHI Snapshot” (niveau global)

Le snapshot représente l’état du GHI au moment T.

3.1. Structure
{
  "timestamp": "2025-01-01T12:00:00Z",
  "ghi": {
    "min_cost_btc": 0.0,
    "avg_cost_btc": 0.0,
    "max_cost_btc": 0.0
  },
  "difficulty": 0.0,
  "hashrate_total_th": 0.0,
  "block_reward_btc": 3.125,
  "regions": [...],
  "version": "1.0"
}

3.2. Description des champs
	•	timestamp : moment du calcul.
	•	ghi : trio min/avg/max global.
	•	difficulty : difficulté Bitcoin.
	•	hashrate_total_th : hashrate exprimé en TH/s.
	•	block_reward_btc : récompense active.
	•	regions : liste complète des régions.
	•	version : version du standard utilisée.

⸻

4. Structure “Region Object”

Chaque région est un objet structuré représentant un bloc géographique homogène.

4.1. Structure
{
  "region_id": "north_america",
  "name": "North America",
  "hashrate_pct": 0.0,
  "cost": {
    "min_cost_btc": 0.0,
    "avg_cost_btc": 0.0,
    "max_cost_btc": 0.0
  },
  "energy": {
    "price_min_usd_kwh": 0.0,
    "price_avg_usd_kwh": 0.0,
    "price_max_usd_kwh": 0.0
  },
  "hardware": {
    "efficiency_min_w_th": 0.0,
    "efficiency_avg_w_th": 0.0,
    "efficiency_max_w_th": 0.0
  },
  "metadata": {
    "updated_at": "2025-01-01T12:00:00Z",
    "data_source": "public"
  }
}

4.2. Champs obligatoires
	•	region_id : identifiant stable (snake_case).
	•	name : libellé humain.
	•	hashrate_pct : part régionale du réseau (0–1).
	•	cost : trio min/avg/max (USD/BTC).
	•	energy : prix électriques min/avg/max.
	•	hardware : rendements machine min/avg/max.
	•	metadata : informations techniques.

⸻

5. Structure “History Object”

5.1. Structure

L’historique consigne chaque snapshot journalier ou horaire.
{
  "timestamp": "2025-01-01T00:00:00Z",
  "min_cost_btc": 0.0,
  "avg_cost_btc": 0.0,
  "max_cost_btc": 0.0,
  "difficulty": 0.0,
  "hashrate_total_th": 0.0
}

5.2. Usage
	•	Graphiques temporels
	•	Statistical summaries
	•	Backtesting
	•	Analyses institutionnelles

L’historique ne contient pas les régions afin d’alléger la charge.

⸻

6. Structure “Region Metadata Index”

Ce fichier permet de documenter chaque région pour la gouvernance.

6.1. Structure
{
  "region_id": "asia_no_china",
  "countries": ["Japan", "South Korea", "Vietnam", "..."],
  "energy_sources": ["nuclear", "coal", "hydro"],
  "notes": "Used for regional weighting."
}

7. Conventions d’identifiants régionaux

7.1. Liste v1.0
	•	north_america
	•	latin_america
	•	europe
	•	mena
	•	russia
	•	china
	•	asia_no_china
	•	africa
	•	oceania

7.2. Règles
	•	snake_case
	•	stable dans le temps
	•	neutre politiquement
	•	agrégation géographique cohérente

⸻

8. Formats recommandés

8.1. JSON (référence API)

Lisible, portable, compatible navigateurs.

8.2. YAML (documentations internes)

Moins verbeux, utile pour les configurations.

8.3. CSV (export)

Pour l’historique et l’analyse externe.

8.4. Python dict (moteur GHI)

Format natif pour le calcul.

⸻

9. Intégration avec l’API GHI

9.1. Endpoints attendus
	•	/v1/ghi/snapshot
	•	/v1/ghi/history
	•	/v1/ghi/regions
	•	/v1/ghi/regions/{region_id}
	•	/v1/ghi/stats

Tous utilisent le Data Model v1.0.

9.2. Compatibilité future

La structure permet :
	•	l’ajout de régions,
	•	l’extension du metadata,
	•	l’inclusion future du CO₂ ou des taxes.

⸻

10. Versioning et évolutions

10.1. Règle SemVer
	•	1.x : compatible avec Data Model v1.0
	•	2.x : rupture (nouvelles structures obligatoires)

10.2. Extensions prévues
	•	coûts corrigés de la dépréciation ASIC
	•	granularité sous-régionale (ex : Texas)
	•	intégration des coûts CO₂
	•	ajout du taux d’utilisation des machines

⸻

Fin du document – Data Model v1.0

