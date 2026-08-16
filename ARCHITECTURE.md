# Meet — Architecture 1.3 map

Cross-domain map only; task contracts live in `docs/`.

`Event → EventOccurrenceTemplate + optional EventRecurrence → physical EventOccurrence → Participation / company-finding group / Attendance`.

Clients: React Native/Expo mobile + Next.js web/B2B/admin. Backend: NestJS/Fastify TypeScript modular monolith. Data: PostgreSQL/PostGIS authoritative; Valkey is optional ephemeral infrastructure when measured useful. API: REST/OpenAPI. Durable async boundaries use transactional outbox + versioned idempotent event contracts; managed transports such as Pub/Sub/Cloud Tasks are activated only when current workload/reliability needs justify them.

Runtime preference when production maturity requires it: `Cloudflare → GCP external load balancer → Cloud Run → Cloud SQL/Storage`; primary `europe-north1`. Stockholm `europe-north2` is the preferred DR target, not mandatory active pre-PMF topology. Terraform owns activated infrastructure.

Critical invariants: physical-only domain; consumer V1 exposes PUBLIC_VENUE/OUTDOOR only; admission != Meet participation; PRIVATE_HOME remains future-compatible but NOT V1 and exact private-home data is separately encrypted/authorized; staff identity isolated/MFA/audited; old mobile clients remain compatible; first-party operational controls where required; high-risk actions and releases follow explicit safety/reliability gates.

Product invariant: successful IRL participation is the north-star outcome. Persistent social graph/community features are evidence-gated hypotheses, not architectural launch requirements. Consumer company finding uses plain action language even if internal domain objects retain legacy names.

Schema authority changes at P0-006: DBML design blueprint → Drizzle+migrations executable truth.

For implementation context, use `docs/00_INDEX.md`. For pre-PMF product scope, `docs/validation/MVP_BOUNDARY.md` and `docs/business/PMF_HYPOTHESES.md` override architecture completeness. Do not use this map as a feature spec.