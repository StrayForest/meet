# Meet — Architecture map

Detailed truth lives in `docs/`; this is the short system map.

## Product/domain
Meet is an event-first IRL social network.

Core model:
`Event (canonical/series identity) → EventOccurrence (physical instance) → Meet Participation / Pods / Attendance`.

Admission/ticketing is independent from Meet social participation:
`AdmissionMode` ≠ `ParticipationMode`.

V1 public discovery is physical/hybrid only. Native recurrence is a limited local-time/timezone-aware subset.

## Runtime topology
`Mobile/Web/B2B/Admin → Cloudflare → GCP HTTPS LB → Cloud Run API/Realtime → PostgreSQL/PostGIS + Valkey + Pub/Sub/Cloud Tasks + Cloud Storage`.

External event sources enter through connector/import-run/raw-record/normalize/dedupe pipeline. Merges preserve canonical aliases and provenance.

## Backend
NestJS + Fastify TypeScript modular monolith. Domain modules own writes/persistence. Cross-domain durable async effects use transactional outbox. PostgreSQL is authoritative; Valkey is ephemeral.

## Mobile
React Native + Expo. EAS Build/Submit for binaries; EAS Update only for compatible runtimeVersion. Backend supports old supported mobile clients through `CLIENT_COMPATIBILITY.md`; WebSocket/push are never source of truth.

## Safety
Adult network. Strong verification for private-home hosts. Exact private location is occurrence-scoped and encrypted, exposed only through dedicated authorization. Staff identity is separate/MFA/audited.

## Operational controls
PostHog handles analytics/experiments. Safety/core kill switches are first-party PostgreSQL-backed OperationalFlags cached in Valkey.

## Repository map
- `apps/`: deployable apps
- `packages/`: shared contracts/DB/config/UI/testing
- `infra/`: Terraform
- `docs/product-specs/`: feature contracts
- `docs/design-docs/`: UX/UI decisions
- `docs/adr/`: accepted architectural rationale
- `docs/exec-plans/`: active/completed implementation plans
- `docs/references/`: provider/policy/research registries
- `design/`: tokens/visual reference
- `schemas/database.dbml`: V2 DB blueprint
- `schemas/*.mmd`: architecture flows

## Agent rule
Start with `AGENTS.md` and `docs/00_INDEX.md`. Never implement from chat memory when indexed source exists. If accepted docs conflict, reconcile them before code/migrations.
