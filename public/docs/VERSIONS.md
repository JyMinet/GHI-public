# GHI – Version Matrix (Public Overview)

This document provides a high-level view of the public versions exposed by
the Global HashCost Index (GHI) project.  
It is intended for integrators, institutional users and technical reviewers.

For full engine-side details, please refer to:

- `docs/VERSIONS.md` and `docs/ENGINE_DESIGN.md` in the `ghi-engine` repository,
- public website pages: `standards.html`, `engine.html`, `api.html`, `changelog.html`.

---

## 1. Current public versions (as of 2025-12-09)

| Component                  | Version             | Status         | Notes                                                    |
|---------------------------|---------------------|----------------|----------------------------------------------------------|
| GHI Data Standard         | **v1.0**            | Active         | Official data model & methodology.                      |
| Public API (primary)      | **v1.1**            | Active (stable)| Unified responses, enriched metadata, extra endpoints.  |
| Public API (legacy)       | v1.0                | Supported      | Maintained for migration of early integrations.         |
| Sandbox Engine            | **v0.4.2-sandbox**  | Active         | Powers all v1.1 endpoints with synthetic data.          |
| Sandbox Engine (baseline) | v0.4.0-sandbox      | Legacy         | First public demo engine.                               |
| Public Website Bundle     | 2025-12-09          | Active         | Includes API v1.1 page and updated Engine documentation.|

---

## 2. Public API – Version lifecycle

### 2.1. API v1.1 (current)

- Status: **Active (stable)**  
- Endpoints:
  - `/v1/ghi/snapshot`
  - `/v1/ghi/history`
  - `/v1/ghi/regions`
  - `/v1/ghi/metadata`
  - `/v1/ghi/network`
  - `/v1/ghi/forecast`
- Backward compatibility:
  - No breaking changes planned within the 1.x series.
  - Any deprecation will be announced via the public changelog and GitHub.

### 2.2. API v1.0 (legacy)

- Status: **Supported (legacy)**  
- Purpose:
  - Maintained to support early adopters and internal testing history.
- Recommendation:
  - New integrations should target **API v1.1**.

---

## 3. Sandbox Engine – Version lifecycle

### 3.1. v0.4.2-sandbox (current)

- Status: **Active demo engine**
- Key points:
  - Single v1.1 router for all `/v1/ghi/*` endpoints.
  - Synthetic but coherent region data (US / EU / CN).
  - Unified metadata fields.
  - Fully covered by automated tests.

### 3.2. v0.4.0-sandbox (baseline)

- Status: **Legacy**
- Key points:
  - First public engine release.
  - Initial support for snapshot and history endpoints.
  - Used as historical baseline for documentation and methodology.

---

## 4. Documentation versions

| Document / bundle                           | Version / Date | Notes                                         |
|---------------------------------------------|----------------|-----------------------------------------------|
| GHI Standard (data model + methodology)     | v1.0           | Core reference for institutions.              |
| Transparency & methodology public bundle    | v1.0           | Published via `methodology.html` & `transparency.html`. |
| API v1.1 Specification (engine repo)        | v1.1           | `docs/API_v1.1_Spec.md` in `ghi-engine`.      |
| Sandbox Engine design note v0.4.2           | v0.4.2         | `ENGINE_DESIGN_CHANGES_v0.4.2.md` (public).   |

---

## 5. Governance and future changes

- Any new **API major version** (e.g. v2.0) will be:
  - Announced publicly,
  - Documented with migration guides,
  - Exposed in parallel with v1.x for a transition period.
- Sandbox engine versions will continue to evolve independently, while:
  - preserving stability of the publicly documented endpoints,
  - clearly separating synthetic demo data from future institutional datasets.

---

_Last updated: 2025-12-09._