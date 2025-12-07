API v1 — Global HashCost Index (GHI)

Documentation officielle – Version 1.0

⸻

4.1 Overview / Présentation

FR

L’API GHI v1.0 fournit un accès simple et stable aux données du coût de production du Bitcoin. Elle expose des endpoints minimaux, robustes, suite à une méthodologie publique et auditable.

EN

The GHI v1.0 API provides a simple and stable interface to Bitcoin production cost data. It exposes minimal and robust endpoints aligned with a fully transparent and auditable methodology.

⸻

4.2 Base URL

Production
https://api.globalhashcostindex.org/v1/ghi
Local Sandbox (engine demo)
http://127.0.0.1:8000/v1/ghi

4.3 Authentication / Authentification

FR

Aucune clé API n’est requise en v1.0.
Les futures versions pourront introduire des restrictions ou une authentification (API key / OAuth).

EN

No API key is required in v1.0.
Future versions may introduce authentication (API key / OAuth).

⸻

4.4 Endpoints Summary (Format compatible)

1. /indicator
	•	FR : Indicateur global min / avg / max
	•	EN : Global indicator min / avg / max

2. /snapshot
	•	FR : Instantané complet (global + régions)
	•	EN : Full snapshot (global + regions)

3. /regions
	•	FR : Liste des régions
	•	EN : List of regions

4. /region/{code}
	•	FR : Coût min / avg / max d’une région
	•	EN : Regional min / avg / max

5. /meta
	•	FR : Métadonnées
	•	EN : Metadata

6. /ping
	•	FR : Vérification disponibilité
	•	EN : Availability check

⸻

4.5 Endpoint: /indicator

GET /indicator

FR

Renvoie le coût de production du Bitcoin à l’échelle mondiale sous forme min / avg / max.

EN

Returns global Bitcoin production cost (min / avg / max).

Example
{
  "date": "2025-01-14",
  "currency": "USD",
  "cost_min": 17250.38,
  "cost_avg": 20411.22,
  "cost_max": 28140.55,
  "version": "v1.0"
}

4.6 Endpoint: /snapshot

GET /snapshot

FR

Renvoie un instantané complet du modèle incluant :
	•	le coût global,
	•	les données régionales,
	•	les métadonnées.

EN

Returns a full model snapshot including:
	•	global cost,
	•	regional values,
	•	metadata.

Example
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

4.7 Endpoint: /regions

GET /regions

FR

Renvoie la liste des régions supportées.

EN

Returns the list of supported regions.

Example
[
  { "code": "NA", "name": "North America" },
  { "code": "EU", "name": "Europe" },
  { "code": "AS", "name": "Asia" },
  { "code": "ME", "name": "Middle East" },
  { "code": "AF", "name": "Africa" }
]

4.8 Endpoint: /region/{code}

GET /region/{code}

FR

Renvoie les valeurs min/avg/max pour une région donnée.
Renvoie une erreur 404 si le code est invalide.

EN

Returns min/avg/max values for a given region.
Returns 404 error for invalid region codes.

Example
{
  "code": "EU",
  "name": "Europe",
  "cost_min": 18555.12,
  "cost_avg": 22990.41,
  "cost_max": 31020.93,
  "currency": "USD",
  "version": "v1.0"
}

Error
{
  "error": "Region not found",
  "code": "INVALID_REGION",
  "status": 404
}

4.9 Endpoint: /meta

GET /meta

FR

Renvoie les informations techniques de la version courante.

EN

Returns technical metadata for the current version.

Example
{
  "version": "v1.0",
  "model_date": "2025-01-14",
  "engine": "GHI-Engine 1.0",
  "status": "stable",
  "documentation": "https://globalhashcostindex.org/docs/api"
}

4.10 Endpoint: /ping

GET /ping

FR

Permet de vérifier la disponibilité de l’API.

EN

Used to check API availability.

Example
{ "status": "ok" }

4.11 Error Handling (Format compatible)

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

⸻

4.12 Versioning
	•	v1.0 : structure stable
	•	v1.1 : ajout de champs, rétrocompatible
	•	v2.0 : changements structurels du JSON

⸻

4.13 Rate Limits

FR

Pas de limites strictes en v1.0. Possibilité de restrictions en v1.1.

EN

No strict limits in v1.0. Future versions may introduce rate limiting.

⸻

Fin du fichier api.md officiel (v1.0)