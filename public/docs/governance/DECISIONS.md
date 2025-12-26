# GHI — Decision Log

This document records significant governance and methodological decisions
related to the Global HashCost Index (GHI).

Its purpose is to provide **traceability and rationale**, not to seek consensus
or formal approval.

Decisions are recorded to allow external observers to understand:
- what was decided,
- why it was decided,
- which alternatives were considered.

---

## Decision 001 — Governance model (founder-led)

**Date:** 2025-12-26  
**Scope:** Governance  
**Status:** Active

### Decision
Adopt a **founder-led governance model** for the early stages of the GHI project.

### Rationale
At the current stage, centralized decision-making ensures:
- coherence of the methodology,
- execution speed,
- clear accountability.

Trust is pursued primarily through **radical transparency and auditability**
(public documentation, changelog, and decision log),
rather than through formal voting or committee-based governance.

### Alternatives considered
- Immediate creation of a formal governance body  
  *(rejected as premature and overly complex).*
- Committee- or vote-based decision-making  
  *(rejected due to early-stage constraints and coordination overhead).*

---

## Decision 002 — Governance evolution approach

**Date:** 2025-12-26  
**Scope:** Governance  
**Status:** Active

### Decision
Adopt a **conditional, usage-driven governance evolution model**
documented in a non-binding governance roadmap.

### Rationale
Governance requirements should evolve based on:
- actual external usage,
- dependency risk,
- exposure to conflicts or disputes,

rather than predefined timelines or assumptions.

This approach preserves flexibility while signaling readiness
to adapt governance when justified by real-world conditions.

### Alternatives considered
- Fixed, time-based governance milestones  
  *(rejected as disconnected from actual usage).*
- Immediate legal or institutional structuring  
  *(rejected as unnecessary at the current stage).*

---

## Decision 003 — Transparency and change discipline

**Date:** 2025-12-26  
**Scope:** Governance / Methodology  
**Status:** Active

### Decision
Require that all material governance or methodological decisions be:
- documented,
- versioned,
- publicly traceable.

### Rationale
Transparency and traceability are the primary trust mechanisms of GHI.
Documented decisions allow third parties to audit reasoning over time,
even when they disagree with outcomes.

### Implementation
- Public changelog (`CHANGELOG.md`)
- Public decision log (`DECISIONS.md`)
- Semantic versioning for published documents

---

## Decision 004 — Immutability of published data

**Date:** 2025-12-26  
**Scope:** Data governance  
**Status:** Active

### Decision
Treat all published GHI snapshots and public indexes as **immutable**.

### Rationale
Immutability ensures:
- historical integrity,
- auditability,
- reproducibility of past analyses.

Corrections or improvements must be handled through
the publication of **new snapshots**, never by altering historical data.

### Alternatives considered
- Retroactive correction of published data  
  *(rejected due to loss of traceability and audit confidence).*

---

## Notes

- This document is intentionally concise.
- Only **material decisions** are recorded here.
- Minor implementation details are handled through commits and pull requests.