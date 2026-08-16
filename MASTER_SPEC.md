# Meet Master Specification — Architecture 1.3

This repository is the implementation system of record for a Finland-first, Nordic/EU-ready event-first IRL participation product.

Core product invariant: help users find worthwhile physical activities and turn them into successful real-world participation. A persistent IRL social graph is an evidence-gated hypothesis, not a predetermined destination.

Key architecture/domain invariants: physical-only domain; consumer V1 exposes PUBLIC_VENUE/OUTDOOR only; Event/OccurrenceTemplate/Recurrence/Occurrence separation; admission independent from Meet participation; PostgreSQL/PostGIS modular monolith; explicit private-location safety boundary for future compatibility; mobile backward compatibility; first-party operational controls where required; GCP Finland as current deployment preference with Stockholm as a deferred DR target; supply-chain/repository governance.

Pre-PMF implementation scope is governed by `docs/validation/MVP_BOUNDARY.md`, `docs/validation/ASSUMPTION_REGISTER.md` and `docs/business/PMF_HYPOTHESES.md`. Architecture support never authorizes feature rollout by itself.

Use `docs/00_INDEX.md`; this file is only an executive pointer.