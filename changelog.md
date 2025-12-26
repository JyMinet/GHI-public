# Changelog — Global HashCost Index (GHI)

All notable changes to the GHI standard are documented in this file.

This changelog covers:
- Governance framework
- Public API versions
- Sandbox engine versions
- Publication milestones of the open standard

This file is **normative** and serves as a source of truth.
Product UI changes and website updates are documented separately.

---

## [Governance v0.1] — 2025-12-26

### Added
- Initial governance framework for the GHI standard.
- Formal definition of scope and non-scope.
- Founder-led governance model with radical transparency.
- Public change discipline:
  - semantic versioning,
  - public changelog,
  - documented decision log,
  - formal change process.
- Governance continuity principles.

### Notes
- No changes to methodology, data, API, or engine.
- Governance layer only.

---

## [API v1.1] — 2025-12-09

### Added
- Public API v1.1 declared active and stable.
- Unified `/v1/ghi/*` router.
- Extended metadata fields:
  - `version`
  - `timestamp_utc`
  - `engine_sandbox_version`

### Compatibility
- Fully backward compatible with API v1.0.
- API v1.0 remains available as legacy.

---

## [Sandbox Engine v0.4.2] — 2025-12-09

### Added
- Unified synthetic model for all regions.
- Stable snapshot and history endpoints.
- Support for API v1.1.
- Improved internal consistency and metadata.

### Notes
- No breaking changes.
- Sandbox engine only (non-production).

---

## [API v1.0] — 2025-01-XX

### Added
- First public API release.
- Endpoints:
  - `/v1/ghi/snapshot`
  - `/v1/ghi/history`
- Initial response structure and metadata.

---

## [Sandbox Engine v0.4.0] — 2025-01-XX

### Added
- First public sandbox engine.
- Synthetic regional model.
- Baseline data generation and exposure.

---

## [Standard Publication] — 2025-01-XX

### Added
- Public release of the GHI open standard.
- Publication of:
  - methodology documentation,
  - transparency framework,
  - engine design notes,
  - validation principles.

### Notes
- This is a publication milestone, not a versioned release.

---

## Versioning Policy

- **Governance** follows `v0.x` until formal institutionalization.
- **API** follows `MAJOR.MINOR`.
- **Sandbox engine** follows `v0.x.y-sandbox`.
- Publication milestones are date-based, not versioned.

---

## Related Documents

- Governance: `public/docs/governance/GOVERNANCE.md`
- Change process: `public/docs/governance/CHANGE_PROCESS.md`
- Continuity: `public/docs/governance/CONTINUITY.md`
- Governance roadmap: `public/docs/governance/GOVERNANCE_ROADMAP.md`