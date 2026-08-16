# Architecture Decision Records — Architecture 1.3

`../09_FIXED_ARCHITECTURE_DECISIONS.md` is the commitment-level index; rationale, alternatives, migration/rollback and validation live here.

## Accepted
- `0001-event-first-domain.md` — Event/OccurrenceTemplate/Recurrence/physical Occurrence and admission separation.
- `0002-backend-data.md` — modular monolith, PostgreSQL/PostGIS, REST/OpenAPI, governed outbox.
- `0003-mobile-expo.md` — Expo/EAS, compatibility/privacy/integrity lifecycle.
- `0004-gcp-runtime.md` — GCP Finland, Stockholm DR path, origin controls and evidence-gated managed services.
- `0005-safety-identity.md` — adult network, progressive identity, safety/private-home boundaries and moderation evidence.
- `0006-schema-event-contract-governance.md` — executable schema authority + event contract versions.
- `0007-reliability-dr-slo.md` — SLI/error budgets/DR based on business impact.
- `0008-supply-chain-origin-governance.md` — repository, artifact and origin security.

## ADR quality contract
Every ACCEPTED ADR must retain: Context, Decision, Alternatives, Compatibility impact, Migration, Rollback, Validation and Approval. `scripts/check-predevelopment-readiness.mjs` enforces this minimum for the Architecture 1.3 baseline ADRs.

New fixed decisions start from `TEMPLATE.md` as PROPOSED and are not implementation authority until explicitly accepted/indexed. Superseded ADRs remain historical and point to the replacement; do not silently rewrite history to hide a decision change.
