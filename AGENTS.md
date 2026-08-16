# AGENTS.md — Meet

Meet is an event-first IRL social marketplace. Architecture **1.3**.

## Context budget
- Start from the task. Do **not** preload `ARCHITECTURE.md`, all `docs/`, `schemas/`, `MASTER_*` or research.
- If the prompt/plan does not name the needed sources, open `docs/00_INDEX.md` and load the **smallest context pack** only. Add another doc only when the change actually touches it.
- Search before reading: prefer `rg --files`, `rg -n`, then bounded file ranges. Do not dump whole logs, lockfiles, generated artifacts or `database.dbml` unless the task requires the whole artifact.
- For large command output, capture it and inspect targeted errors/tail first; widen only when needed.
- Plans/prompts link to specs instead of copying them. Prefer one coherent backlog item/PR and a fresh session for a new task when practical.

## Global invariants
- `Event → EventOccurrenceTemplate + optional EventRecurrence → physical EventOccurrence`.
- V1 is physical-only. Admission/ticketing and Meet participation are separate.
- Participation/waitlist/Pods/check-in/occurrence chat target `EventOccurrence`.
- 18+ initial network; no dating positioning, sexual solicitation or random DMs.
- Exact private-home data is occurrence-scoped, encrypted and absent from generic DTOs.
- Backend: NestJS + Fastify TypeScript modular monolith. PostgreSQL/PostGIS is authoritative; Valkey is ephemeral.
- REST/OpenAPI; transactional outbox + versioned domain events; consumers idempotent.
- Mobile: React Native + Expo with old-client compatibility. Web/B2B/Admin: Next.js.
- GCP primary `europe-north1`, DR target `europe-north2`; Cloudflare edge; Terraform.
- Operational/safety flags are first-party, versioned and audited; PostHog is for experiments.
- UI uses `design/tokens.json`; user-visible changes require visual/accessibility checks.
- Launch languages are fixed end-to-end: Finnish (`fi`), English (`en`), Russian (`ru`).

## Product/business discipline
- North-star outcome is successful IRL participation; repeat successful IRL participation is the strongest early PMF signal.
- Helsinki is the first social-liquidity/GTM proof even though nationwide event coverage may exist.
- Events are the launch context; long-term defensibility is attendance/social/trust/organizer outcome graphs and local density, not listings or infrastructure.
- Before adding feature breadth, prefer work that improves the minimum proof loop: discovery → social confidence → intent → attendance → repeat/connection.
- PRIVATE_HOME broad rollout is not required for PMF and remains flag-gated until safety evidence supports it.
- Architecture 1.3 is sufficiently specified. Do not add architecture/infrastructure for hypothetical scale unless blocked by implementation, measured workload/SLO, safety/legal need or accepted ADR.
- AI-agent output is not a success metric. Code must close a product/engineering milestone under normal tests/CI/review.

## Source of truth
Before P0-006, `schemas/database.dbml` is the schema design blueprint. After P0-006, Drizzle schema + ordered migrations + DB-native constraints are executable schema truth; DBML becomes generated/verified. Architecture changes require an accepted ADR. Business/product decisions use the smallest `BIZ` pack from `docs/00_INDEX.md`.

## Workflow
Use the relevant product spec + context pack, implement inside module boundaries, test the changed scope, then broaden checks only when the gate requires it. Record discoveries in the active exec plan rather than expanding chat history.

Done means `docs/11_DEFINITION_OF_DONE.md` passes.