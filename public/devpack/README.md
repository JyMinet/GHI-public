# GHI Developer Pack — Sandbox v0.2.0
Global HashCost Index Initiative  
Version : 0.2.0 (Phase 2)

Ce Developer Pack fournit tous les éléments nécessaires pour intégrer,
tester et analyser la Sandbox API du Global HashCost Index (GHI).

Le pack est conçu pour :
- les développeurs,
- les analystes quantitatifs,
- les équipes ESG,
- les équipes Risk / Compliance,
- les intégrations BI (Tableau, Power BI, Grafana),
- les proof-of-concept institutionnels.

La sandbox utilise des données synthétiques mais conformes au  
**GHI Technical Standard v1.0** et au **GHI Data Model v1.0**.

---

# 1. Contenu du Developer Pack
devpack/
│
├── README.md                            ← Ce document
│
├── examples/
│   ├── snapshot.json
│   ├── history.json
│   ├── region.json
│   └── stats.json
│
├── python/
│   └── ghi_sandbox_client.py             ← Client Python officiel
│
├── notebooks/
│   └── GHI-Sandbox-Demo.ipynb            ← Notebook démonstration complet
│
└── curl/
└── curl_examples.sh                  ← Script API cURL

devpack/
│
├── README.md                            ← Ce document
│
├── examples/
│   ├── snapshot.json
│   ├── history.json
│   ├── region.json
│   └── stats.json
│
├── python/
│   └── ghi_sandbox_client.py             ← Client Python officiel
│
├── notebooks/
│   └── GHI-Sandbox-Demo.ipynb            ← Notebook démonstration complet
│
└── curl/
└── curl_examples.sh                  ← Script API cURL

Tous les fichiers sont compatibles avec le sandbox local lancé via FastAPI.

---

# 2. Prérequis

## 2.1. Dépendances Python

Le client Python utilise uniquement :

pip install requests pandas matplotlib

## 2.2. Sandbox GHI

Le moteur doit être lancé localement :

```bash
cd ghi-engine
source venv/bin/activate
uvicorn app.main:app --reload

API disponible sur :
http://127.0.0.1:8000
http://127.0.0.1:8000/v1/ghi

3. Endpoints disponibles

Tous les endpoints suivent les structures du GHI Data Model v1.0.

Endpoint
Description
/snapshot
Snapshot global complet
/history
Historique synthétique (journaliers)
/regions
Liste des régions
/regions/{region_id}
Détails d’une région
/stats
Statistiques globales

4. Utilisation du client Python officiel

Exemple minimal :
from ghi_sandbox_client import GHISandboxClient, GHIClientConfig

cfg = GHIClientConfig(base_url="http://127.0.0.1:8000/v1/ghi")
client = GHISandboxClient(cfg)

snapshot = client.get_snapshot()
print(snapshot["ghi"]["avg_cost_btc"])

Tous les appels disponibles :
client.get_snapshot()
client.get_history()
client.list_regions()
client.get_region("north_america")
client.get_stats()

5. Utilisation du notebook Jupyter

Dans devpack/notebooks/ :

GHI-Sandbox-Demo.ipynb

Ce notebook couvre :
	•	import du client Python,
	•	exploration du snapshot,
	•	extraction de l’historique,
	•	visualisation min/avg/max,
	•	analyse régionale,
	•	rapport rapide.

Il peut servir de base pour une intégration BI ou un POC interne.


6. Script cURL officiel

Dans devpack/curl/ :
curl_examples.sh

Exemples :

./curl_examples.sh snapshot
./curl_examples.sh history
./curl_examples.sh regions
./curl_examples.sh region north_america
./curl_examples.sh stats

7. Fichiers JSON d’exemple

Dans devpack/examples/ :
	•	snapshot.json
	•	history.json
	•	region.json
	•	stats.json

Ces fichiers servent pour :
	•	tests unitaires,
	•	démonstrations,
	•	documentation,
	•	intégration à des systèmes internes.

Ils reflètent des données synthétiques, pas des données réelles.

⸻

8. Structure & conventions

La sandbox respecte :
	•	GHI Technical Standard v1.0
	•	GHI Data Model v1.0
	•	ISO 8601 (dates UTC)
	•	float64 pour les valeurs numériques
	•	identifiants régionaux snake_case
	•	SemVer pour le versioning

⸻

9. Phase 2 → Phase 3

Ce Developer Pack prépare la transition vers :

Phase 3 — Moteur réel & API production
	•	données réelles,
	•	mises à jour quotidiennes / intrajournalières,
	•	exports CSV / Parquet,
	•	conformité régulateurs & institutions,
	•	extension CO₂ / taxation,
	•	granularité sous-régionale,
	•	endpoint avancés (mix machines, tarifs régionaux, énergie).

⸻

10. Support & documentation

Documentation associée :
	•	GHI Technical Standard v1.0
	•	GHI Data Model v1.0
	•	Sandbox Developer Guide v0.2.0 (PDF)
	•	API Reference (api.html)

⸻

11. Licence

Le Developer Pack est fourni selon les termes définis dans :

LICENSE.md

12. Version du Developer Pack
GHI Developer Pack v0.2.0 – Sandbox Edition

Fin du document.
---
