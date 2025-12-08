# GHI Engine – Changelog

## v0.4.0 – Sandbox Engine upgrade + API v1.0 alignment (2025-12-08)

### Added
- Full integration of the new public API **GHI v1.0** (`/v1/ghi/indicator`, `/v1/ghi/snapshot`).
- Standardized metadata block added to all API responses:
  - `api_version`
  - `methodology_version`
  - `engine_version`
  - `data_origin`
  - `stability_seed`
- Added GHI versions:
  - `GHI_VERSION = "1.0.0"`
  - `METHODOLOGY_VERSION = "1.0.0"`

### Improved
- Fake engine rewritten to match GHI v1.0 schema.
- Complete stabilization of demo values (deterministic output).
- Better separation between API layer and engine logic.

### Fixed
- Re-enabled legacy endpoints required by the test suite:
  - `/v1/ghi/history`
  - `/v1/ghi/regions`
  - `/v1/ghi/regions/{id}`
  - `/v1/ghi/stats`
- Fixed inconsistent keys in indicator and snapshot.
- All automated tests now **pass (17/17)**.

---

## v0.3.0 – Engine refactor + API improvements
- Major refactor of private engine components.
- Added loader/aggregator internal architecture.
- Initial version of sandbox API for testing.

---

## v0.2.0 – Initial public engine structure
- First public sandbox release.
- Added early API endpoints for internal tests.

---

## v0.1.0 – Initial commit
- Project structure created.