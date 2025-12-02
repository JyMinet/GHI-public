# Global HashCost Index — Changelog
Versioning: Semantic Versioning (SemVer)  
Documentation and standards published under CC BY-NC-SA 4.0.

---
## [0.2.0-docs] – 2025-12-02

### Ajouts

- Ajout des standards de contribution et de collaboration (`docs/CONTRIBUTING.md`).
- Ajout du code de conduite (`docs/CODE_OF_CONDUCT.md`) pour les contributeurs externes.
- Ajout des politiques de sécurité et de divulgation responsable (`docs/SECURITY.md`).
- Ajout des documents de gouvernance et d’architecture (`docs/GOVERNANCE.md`, `docs/ARCHITECTURE.md`).
- Ajout du bundle légal complet : licence, copyright, marque, attribution (`docs/LICENSE.md`, `docs/COPYRIGHT.md`, `docs/TRADEMARK_POLICY.md`, `docs/ATTRIBUTION_GUIDE.md`).

### Notes

- Ces documents s’appliquent à l’ensemble de l’écosystème GHI-public.
- Ils n’emportent aucune recommandation d’investissement ni garantie de performance.


## [0.1.0] — Initial Public Release  
**Date : 2025-11-30**  
**Statut : Publié**

### Summary
First public release of the Global HashCost Index (GHI).  
This release establishes the official foundation of the GHI Standard and provides all institutional documents necessary for review, audit and integration.

### Added
- **Whitepaper (FR & EN)**  
- **Méthodologie & Transparence (FR & EN)**  
- **GHI for Institutions (FR & EN)**  
- **Technical Standard v1.0** (`standard/GHI-Technical-Standard-v1.0.md`)  
- **Data Model v1.0** (`standard/GHI-Data-Model-v1.0.md`)  
- **Site public GHI** (`ghi-public`)  
  - overview, methodology, regions, governance, API, roadmap  
  - institutional PDF downloads  
- **API Reference (sandbox)** (`API_REFERENCE.md`)

### Notes
- No production engine is included in this phase.  
- No real data is exposed.  
- This release establishes **prior art** and defines the structure of the GHI Standard.

---

## [0.2.0] — Sandbox API & Engine Skeleton  
**Date prévue : Phase 2**  
**Statut : À venir**

### Summary
Introduction of the sandbox engine and the first functional version of the API, returning **synthetic (fake)** but structurally accurate data.

### Planned
- New repository **ghi-engine**
- **FastAPI sandbox API**
  - `/v1/ghi/snapshot`
  - `/v1/ghi/history`
  - `/v1/ghi/regions`
  - `/v1/ghi/regions/{region_id}`
  - `/v1/ghi/stats`
- **Full test suite** (Pytest)
- **Mocked engine** following GHI Data Model v1.0
- Documentation update in `api.html` and `API_REFERENCE.md`

### Notes
This version enables early integration, dashboards, and institutional validation without exposing the real engine.

---

## [1.0.0] — Production Engine & Real API  
**Date prévue : Phase 3**  
**Statut : Planifié**

### Summary
Official release of the first version of the **real GHI Engine** and the **production API**, delivering real-time and historical values of the Global HashCost Index.

### Planned Additions
- Activation of the real cost engine (per region + aggregated min/avg/max)
- Integration of real hashrate distribution data
- Region-specific energy prices + machine efficiency models
- Daily (then intraday) snapshots
- Full historical dataset
- Secure public API with versioning & rate limiting
- Institutional outputs (CSV/Parquet)

### Notes
This version introduces the first institution-ready engine with a reproducible methodology and strict model versioning.

---

## Versioning Rules

- **MAJOR (1.x → 2.x)**  
  Breaking changes (new data structures, incompatible API fields).

- **MINOR (0.1 → 0.2 / 1.1 → 1.2)**  
  Feature additions, new endpoints, improvements without breaking compatibility.

- **PATCH (1.0.0 → 1.0.1)**  
  Fixes, internal corrections, documentation updates.

---

## Governance & Release Process

Each major or minor update includes:
- a version tag in the public repositories (`ghi-public`, `ghi-engine`),
- an update of the roadmap,
- a documented changelog entry,
- an update of the Technical Standard and/or Data Model when applicable.

---

© Global HashCost Index – Open Standard.  
No investment advice.
