# Meet — Architecture 1.3 map

Detailed truth lives in `docs/`; this is the short system map.

## Product/domain
Meet is an event-first IRL social network.

Core model:
`Event → EventOccurrenceTemplate + optional EventRecurrence → EventOccurrence → Participation / Pods / Attendance`.

- Event = stable canonical/series identity.
- Template = defaults required to generate a physical occurrence.
- Occurrence = concrete physical date/time/location users attend.
- V1 is physical-only.
- Admission/ticketing is independent from Meet social participation.

## Runtime topology
`Mobile/Web/B2B/Admin → Cloudflare → authenticated/restricted GCP External Application Load Balancer → Cloud Run API/Realtime → PostgreSQL/PostGIS + Valkey + Pub/Sub/Cloud Tasks + Cloud Storage`.

Cloud Run direct public bypass is disabled/restricted. Exact origin controls are in `docs/ORIGIN_SECURITY.md`.

## Backend/data
NestJS + Fastify TypeScript modular monolith. Module-owned writes/persistence. PostgreSQL authoritative; Valkey ephemeral. Durable async effects use transactional outbox and versioned event contracts.

Before first migration, `schemas/database.dbml` is design truth. After P0-006, Drizzle schema+migrations are executable truth and DBML is generated/verified.

## Mobile
React Native + Expo. EAS Build/Submit for binaries; EAS Update only inside compatible runtimeVersion. Backend supports minimum-supported mobile clients.

## Safety/privacy
18+ adult network. Strong identity for private-home hosts. Exact private location is occurrence-scoped and self-describing envelope ciphertext. Moderation evidence uses immutable snapshots when required. Staff identity is isolated/MFA/audited.

## Reliability/DR
Tier-0 correctness includes join/capacity, imminent event truth, cancellation, safety controls and exact-location authorization. Primary region Finland (`europe-north1`); recoverability target Stockholm (`europe-north2`) evolves from tested restore to warm standby based on business-impact triggers, not MAU.

## Security/governance
- first-party OperationalFlags for kill switches;
- supply-chain controls, pinned CI actions, SBOM/provenance where plan permits;
- append-only/tamper-evident security audit;
- protected PR/release workflow;
- SLI/SLO/error budgets gate risky releases.
