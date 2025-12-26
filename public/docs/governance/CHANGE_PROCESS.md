# GHI — Change Process (v0.1)

**Status:** Working draft  
**Scope:** Governance & methodology changes  
**Principle:** Lightweight, transparent, usage-driven

---

## 1. Purpose

This document defines the **process by which changes to the GHI standard**
(methodology, documentation, governance rules) are proposed, evaluated,
decided and published.

The goal is to ensure:
- traceability of decisions,
- clarity of rationale,
- stability of published outputs,

without introducing unnecessary bureaucracy.

This process applies to the `GHI-public` repository.

---

## 2. Scope of changes

This change process applies to:
- methodology definitions,
- data model and documentation,
- governance principles and rules.

It does **not** apply to:
- private data sources,
- internal experimental code,
- unpublished or draft materials.

---

## 3. Change proposal

Any change begins with one of the following:
- a **GitHub Issue**, or
- a **Pull Request (PR)**.

The proposal must include:
- a clear description of the change,
- the motivation and expected benefit,
- potential impacts on stability, reproducibility or interpretation.

---

## 4. Review phase

### Early-stage review (default)
At the current stage, reviews are performed by the project maintainer
(founder), focusing on:
- alignment with the GHI scope,
- impact on methodological stability,
- clarity and traceability.

### External review (conditional)
If external reviewers are active (see `GOVERNANCE_ROADMAP.md`):
- reviewers may provide written feedback,
- feedback is advisory only,
- all substantive comments must receive a written response.

---

## 5. Decision and rationale

For any **material change**, a decision must be:
- explicitly stated,
- justified in writing.

Decisions are recorded in:
- the Pull Request discussion,
- and, when relevant, in `DECISIONS.md`.

Minor changes (typos, clarifications) do not require a decision log entry.

---

## 6. Publication and versioning

Approved changes are published through:
- a Git merge,
- a version bump when applicable,
- an entry in `CHANGELOG.md`.

Versioning follows a documentation-oriented semantic versioning scheme:
- **MAJOR** — structural or conceptual change,
- **MINOR** — additive or non-breaking change,
- **PATCH** — clarifications or minor fixes.

---

## 7. Immutability principle

Published data snapshots and public indexes are immutable.

If an error is discovered:
- no published snapshot is modified,
- corrections are applied via a new snapshot,
- historical traceability is preserved.

---

## 8. Guiding rule

> Transparency and traceability take precedence over speed and convenience.

---

## 9. Notes

- This process is intentionally lightweight.
- It may evolve based on actual usage and exposure.
- Any evolution of this process follows the same change rules described here.