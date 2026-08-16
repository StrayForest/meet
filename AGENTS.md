# AGENTS.md — Meet

Meet is an event-first IRL participation product. Architecture **1.3**.

## Context budget
- Start from the task. Do **not** preload `ARCHITECTURE.md`, all `docs/`, `schemas/`, `MASTER_*` or research.
- If the prompt/plan does not name the needed sources, open `docs/00_INDEX.md` and load the **smallest context pack** only. Add another doc only when the change actually touches it.
- Search before reading: prefer `rg --files`, `rg -n`, then bounded file ranges. Do not dump whole logs, lockfiles, generated artifacts or `database.dbml` unless the task requires the whole artifact.
- For large command output, capture it and inspect targeted errors/tail first; widen only when needed.
- Plans/prompts link to specs instead of copying them. Prefer one coherent backlog item/PR and a fresh session for a new task when practical.

## Global invariants
- `Event → EventOccurrenceTemplate + optional EventRecurrence → physical EventOccurrence`.
- V1 consumer product is physical-only and exposes `PUBLIC_VENUE` / `OUTDOOR`; `PRIVATE_HOME` may remain represented in the domain for future compatibility but is **NOT V1 user-facing scope**.
- Admission/ticketing and Meet participation are separate.
- Participation/waitlist/company-finding groups/check-in/occurrence chat target `EventOccurrence`.
- 18+ initial network; no dating positioning, sexual solicitation or random/open DMs.
- Exact private-home data, if future-enabled, is occurrence-scoped, encrypted and absent from generic DTOs.
- Backend default: NestJS + Fastify TypeScript modular monolith. PostgreSQL/PostGIS is authoritative; Valkey is ephemeral and only activated when useful.
- REST/OpenAPI. Durable async work uses transactional outbox/versioned events; managed transports are evidence-gated rather than mandatory pre-PMF.
- Mobile: React Native + Expo with old-client compatibility. Web/B2B/Admin: Next.js.
- GCP `europe-north1` is the current production preference; Stockholm DR is a recovery target, not mandatory active pre-PMF infrastructure. Cloudflare/Terraform remain implementation defaults.
- Operational/safety flags are first-party where needed; product experimentation analytics are not operational truth.
- UI uses `design/tokens.json`; user-visible changes require visual/accessibility checks.
- Launch languages are fixed end-to-end: Finnish (`fi`), English (`en`), Russian (`ru`).

## Product/business discipline
- North-star outcome is **successful IRL participation**; repeat successful IRL participation is the strongest early PMF signal.
- Helsinki is the first social-liquidity/GTM proof even though nationwide event coverage may exist.
- Liquidity is multidimensional: city × category/intent × time × language compatibility × radius/area. Aggregate MAU/event count must not hide empty cells.
- Immediate promise: help users find something worth doing nearby and, when going alone is a barrier, find suitable company.
- A persistent IRL social graph is a **hypothesis**, not a predetermined destination. Do not build graph/community breadth unless evidence shows it improves future IRL participation.
- Before adding feature breadth, prefer work that improves the proof loop: discovery → arrival/social confidence → meaningful intent → attendance → repeat useful IRL action.
- `Pod` may remain a domain term; consumer copy should use validated plain-language actions such as `Find company` / `Join group` equivalents in fi/en/ru.
- Public value comes before unnecessary signup. Do not add mandatory hobbies/interests/gender/phone gates to public discovery.
- Consumer `PRIVATE_HOME` rollout is explicitly excluded from V1 and requires a separate evidence/safety/legal/ops gate.
- Architecture 1.3 is sufficiently specified. Do not add infrastructure for hypothetical scale unless blocked by implementation, measured workload/SLO, safety/legal need or accepted ADR.
- AI-agent output is not a success metric. Code must close a product/engineering milestone under normal tests/CI/review.

## Validation boundary
For any pre-PMF feature/scope decision, load `VAL` from `docs/00_INDEX.md` and obey:
- `docs/validation/MVP_BOUNDARY.md`
- `docs/validation/ASSUMPTION_REGISTER.md`
- `docs/business/PMF_HYPOTHESES.md`

Architecture support does **not** authorize implementation. If a proposed feature crosses the MVP boundary without evidence, stop and surface the gate instead of implementing it.

## Source of truth
Before P0-006, `schemas/database.dbml` is the schema design blueprint. After P0-006, Drizzle schema + ordered migrations + DB-native constraints are executable schema truth; DBML becomes generated/verified. Architecture changes require an accepted ADR. Business/product decisions use the smallest `BIZ`/`VAL` pack from `docs/00_INDEX.md`.

## Workflow
Use the relevant product spec + context pack, implement inside module boundaries, test the changed scope, then broaden checks only when the gate requires it. Record discoveries in the active exec plan rather than expanding chat history.

Done means `docs/11_DEFINITION_OF_DONE.md` passes and no validation/business contract is violated.