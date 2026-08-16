# AGENTS.md — Meet

Meet is an event-first IRL participation product. Architecture **1.3**.

## Context discipline
- Start from the task; do not preload `ARCHITECTURE.md`, all `docs/`, `schemas/`, `MASTER_*` or research.
- If sources are not named, open `docs/00_INDEX.md` and load the **smallest context pack**. Add another source only when the diff crosses that boundary.
- Search before reading; avoid dumping whole logs, lockfiles, generated artifacts or full `database.dbml` unless required.
- Plans/prompts link to specs instead of copying them. Prefer one coherent backlog item/PR.

## Global invariants
- `Event → EventOccurrenceTemplate + optional EventRecurrence → physical EventOccurrence`.
- Consumer V1 exposes `PUBLIC_VENUE` / `OUTDOOR`; `PRIVATE_HOME` may remain domain-represented but is **NOT V1 user-facing scope**.
- Admission/ticketing and Meet participation are separate.
- Participation, waitlist, company-finding, check-in and occurrence chat target `EventOccurrence`.
- Initial network is 18+; no dating positioning, sexual solicitation or random/open DMs.
- Exact private-home data, if later enabled, is occurrence-scoped, encrypted and absent from generic DTOs.
- Backend default: NestJS + Fastify TypeScript modular monolith. PostgreSQL/PostGIS is authoritative; Valkey is ephemeral and activated only when useful.
- REST/OpenAPI. Durable async work uses governed outbox/events; managed transports are evidence-gated, not mandatory pre-PMF.
- Mobile: React Native + Expo with old-client compatibility. Web/B2B/Admin: Next.js.
- GCP `europe-north1` is the production preference; Stockholm DR is a recovery target, not mandatory active pre-PMF infrastructure.
- Launch languages are fixed end-to-end: Finnish (`fi`), English (`en`), Russian (`ru`).

## Product/business discipline
- North-star outcome: **successful IRL participation**; repeat successful IRL participation is the strongest early PMF signal.
- Helsinki is the first social-liquidity/GTM proof even with nationwide event coverage.
- Liquidity is multidimensional: city × category/intent × time × language compatibility × radius/area.
- Immediate promise: find something worth doing nearby and, when going alone is a barrier, find suitable company.
- A persistent IRL social graph is a **hypothesis**, not a predetermined destination. Do not build graph/community breadth unless evidence shows it improves future IRL participation.
- Prefer work that improves discovery → arrival/social confidence → meaningful intent → attendance → repeat useful IRL action.
- `Pod` may remain a domain term; consumer copy uses validated plain-language actions such as `Find company` / `Join group` in fi/en/ru.
- Public value comes before unnecessary signup. No mandatory hobbies/interests/gender/phone gates for public discovery.
- Consumer `PRIVATE_HOME` rollout requires a separate evidence/safety/legal/ops gate.
- Architecture 1.3 is sufficiently specified. Do not add infrastructure for hypothetical scale without implementation, measured workload/SLO, safety/legal need or accepted ADR.

## Validation boundary
For pre-PMF feature/scope decisions, load `VAL` from `docs/00_INDEX.md` and obey `docs/validation/MVP_BOUNDARY.md`, `docs/validation/ASSUMPTION_REGISTER.md` and `docs/business/PMF_HYPOTHESES.md`.

Architecture support does **not** authorize implementation. If a feature crosses the MVP boundary without evidence, surface the gate instead of implementing it.

## Source of truth / workflow
Before P0-006, `schemas/database.dbml` is the schema blueprint. After P0-006, Drizzle schema + ordered migrations + DB constraints are executable schema truth; DBML becomes generated/verified. Architecture changes require an accepted ADR.

Use the relevant product spec + smallest context pack, implement inside module boundaries, test changed scope, then broaden checks only when required. Done means `docs/11_DEFINITION_OF_DONE.md` passes and no validation/business contract is violated.