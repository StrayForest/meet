# 09 — Fixed architecture decisions — Architecture 1.3

Accepted decisions are implementation constraints until superseded by accepted ADR.

1. Event-first IRL social marketplace.
2. Event stable identity + EventOccurrenceTemplate defaults + concrete EventOccurrence participation unit.
3. V1 physical-only; PUBLIC_VENUE/OUTDOOR/PRIVATE_HOME. No online/hybrid placeholder.
4. Admission/ticketing separate from Meet participation/waitlist.
5. Limited timezone-aware recurrence subset.
6. TypeScript monorepo; React Native+Expo mobile; Next.js web/B2B/admin; NestJS+Fastify backend.
7. Modular monolith first; extraction only on measured scaling/reliability/ownership need.
8. PostgreSQL 18 + PostGIS authoritative; Valkey ephemeral; Drizzle + targeted SQL.
9. REST + OpenAPI clients.
10. Transactional outbox + governed versioned event contracts + Pub/Sub/Cloud Tasks.
11. Before P0-006 DBML design truth; after P0-006 Drizzle+migrations executable schema truth and DBML generated/verified.
12. GCP primary Finland `europe-north1`; preferred DR Stockholm `europe-north2`; Cloud Run/Cloud SQL/Memorystore/Storage; Terraform.
13. Cloudflare edge with explicit origin bypass prevention/authentication.
14. First-party versioned/audited OperationalFlags; PostHog only product experiments/analytics.
15. External event provenance includes source rights and connector/normalizer versions.
16. 18+ adult network, no dating drift/random DM/public human stars.
17. External identity verification; no identity documents stored.
18. Exact private-home payload envelope-encrypted and occurrence-scoped.
19. Staff identity separate/MFA; privileged audit append-only/tamper-evident.
20. Mobile EAS lifecycle, compatibility policy, store privacy compliance and optional device-integrity risk signals.
21. Reliability uses user-journey SLIs/error budgets; DR and scaling triggers are business/workload based, not MAU.
22. Production engineering uses protected PR/release/supply-chain governance.
23. Architecture boundaries are executable fitness functions and CI release gates, not prose-only conventions.
24. Data carries an effective classification that drives logging, retention, analytics, encryption and access controls.
25. Critical commands have explicit concurrency/consistency/idempotency semantics backed by DB invariants.
26. External dependencies have bounded failure policies and declared degraded modes; outages never weaken safety/privacy gates.
27. High-risk boundaries require concrete threat models reviewed against implementation/tests.
28. Executable modules carry ownership/criticality metadata as team size and production operations require.
29. Architecture maturity changes are evidence-driven; valuation/MAU alone never justify extraction or multi-region complexity.

Accepted ADRs: 0001 event/domain, 0002 backend/data/contracts, 0003 mobile, 0004 GCP/reliability, 0005 safety/identity, 0006 schema/event contracts, 0007 DR/SLO, 0008 supply-chain/origin/governance. Decisions 23–29 are baseline governance contracts until folded into the next accepted ADR revision.
