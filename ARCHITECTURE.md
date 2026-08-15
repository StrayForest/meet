# Meet — Architecture 1.3 map

Cross-domain map only; task contracts live in `docs/`.

`Event → EventOccurrenceTemplate + optional EventRecurrence → physical EventOccurrence → Participation / Pods / Attendance`.

Clients: React Native/Expo mobile + Next.js web/B2B/admin. Backend: NestJS/Fastify TypeScript modular monolith. Data: PostgreSQL/PostGIS authoritative, Valkey ephemeral. API: REST/OpenAPI. Async: transactional outbox → Pub/Sub/Cloud Tasks with versioned idempotent consumers.

Runtime: `Cloudflare → GCP external load balancer → Cloud Run → Cloud SQL/Memorystore/Storage`; primary `europe-north1`, DR `europe-north2`. Terraform owns infrastructure.

Critical invariants: physical-only V1; admission != social participation; exact private-home data separately encrypted/authorized; staff identity isolated/MFA/audited; old mobile clients remain compatible; first-party kill switches; tamper-evident privileged audit; SLO/error budgets gate risky releases.

Schema authority changes at P0-006: DBML design blueprint → Drizzle+migrations executable truth.

For implementation context, use `docs/00_INDEX.md`; do not use this map as a feature spec.
