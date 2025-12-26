# GHI — Continuity & Resilience Plan (v0.1)

**Status:** Working draft  
**Scope:** Governance / methodology continuity  
**Principle:** Ensure methodological and operational continuity if the founder becomes unavailable.

---

## 1. Purpose

This document describes how the Global HashCost Index (GHI) can continue to exist,
be audited and remain usable in the event of temporary or permanent unavailability
of its founder.

The objective is **continuity of the standard**, not organizational succession
or commercial continuity.

---

## 2. Scope of continuity

This continuity plan applies to:
- the GHI methodology,
- public documentation and governance rules,
- published data snapshots and indexes.

It does **not** cover:
- private data sources,
- internal experimental tooling,
- commercial or legal entities (if any).

---

## 3. Source of truth

The authoritative source of the GHI standard is the public GitHub repository:
https://github.com/ghi-standard/GHI-public

Specifically:
- versioned documents in `public/docs/`,
- published snapshots and indexes,
- Git tags and commit history.

Any third party can independently audit, reproduce or fork the standard
based on these public materials.

---

## 4. Reproducibility baseline

The GHI methodology is designed to be:
- documented,
- deterministic at the specification level,
- reproducible in principle by independent third parties.

Reproducibility relies on:
- publicly documented methodology,
- explicit assumptions and parameters,
- immutable published snapshots.

Private data sources are explicitly excluded from the continuity scope.

---

## 5. Decision and change continuity

If the founder becomes unavailable:

- No new methodological changes are introduced automatically.
- Existing versions remain valid and auditable.
- Published snapshots remain immutable and accessible.
- All governance documents continue to serve as reference.

The absence of new releases does **not** invalidate the standard
or its historical outputs.

---

## 6. Temporary delegation (optional)

In case of temporary unavailability, limited delegation may be considered:

- delegation is explicitly documented,
- scope and duration are clearly defined,
- delegation does not imply transfer of ownership or authority.

No automatic delegation is defined at this stage.

---

## 7. Long-term continuity options

If GHI usage, dependency or exposure justifies it,
additional continuity mechanisms may be evaluated, such as:
- naming trusted external reviewers,
- introducing neutral arbitration mechanisms,
- adapting governance structure as described in `GOVERNANCE_ROADMAP.md`.

No such mechanism is pre-committed at this stage.

---

## 8. Guiding principle

> Continuity is achieved through transparency, documentation
> and auditability — not through premature institutionalization.

---

## 9. Notes

- This document is intentionally minimal.
- It may evolve based on real-world usage and exposure.
- Any evolution of this plan follows the standard change process
  defined in `CHANGE_PROCESS.md`.
