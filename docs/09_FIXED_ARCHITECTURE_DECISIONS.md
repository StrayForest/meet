# 09 — Architecture decisions by commitment level — Architecture 1.3

Architecture decisions do not all have the same reversibility. This file separates durable product/domain constraints from implementation defaults and evidence-gated infrastructure activation.

## LOCKED — expensive to change / product or safety truth
Changes require an accepted ADR and explicit migration/compatibility analysis.

1. Event-first physical participation model; the product proves real-world participation, not passive engagement.
2. Event stable identity + EventOccurrenceTemplate defaults + concrete EventOccurrence participation unit.
3. V1 domain is physical-only; PUBLIC_VENUE/OUTDOOR are launch surfaces. PRIVATE_HOME remains architecturally representable but consumer rollout is evidence-gated and NOT V1. No online/hybrid placeholder.
4. Admission/ticketing is separate from Meet participation/waitlist.
5. Limited timezone-aware recurrence subset.
6. Modular monolith first; extraction only on measured scaling/reliability/ownership need.
7. PostgreSQL + PostGIS is authoritative relational/geospatial truth.
8. Critical commands have explicit concurrency/consistency/idempotency semantics backed by DB invariants.
9. Data has effective classification driving logging, retention, analytics, encryption and access controls.
10. 18+ adult network; no dating drift, random/open DMs or public human star scores.
11. Exact private-home payload, if ever enabled, is occurrence-scoped and envelope-encrypted; exact location never leaks through generic discovery DTOs.
12. External identity verification stores provider result/reference, not identity-document images/numbers.
13. Staff identity is separate/MFA; privileged actions are auditable.
14. External event provenance includes source rights and connector/normalizer versions.
15. External dependency outages never weaken safety/privacy authorization gates.
16. High-risk boundaries require concrete threat models reviewed against implementation/tests.

## DEFAULT — preferred implementation, changeable by ADR when evidence justifies
These are not product truths.

17. TypeScript monorepo; React Native+Expo mobile; Next.js web/B2B/admin; NestJS+Fastify backend.
18. Drizzle + targeted SQL; after schema cutover Drizzle+migrations are executable schema truth and DBML is generated/verified.
19. REST + OpenAPI generated clients.
20. Valkey for ephemeral/cache coordination where measured useful; authoritative state remains PostgreSQL.
21. Transactional outbox + governed versioned domain-event contracts for durable async boundaries.
22. Cloudflare edge with explicit origin-bypass prevention/authentication.
23. First-party versioned/audited OperationalFlags; analytics/experimentation tooling is not operational truth.
24. Mobile EAS lifecycle and explicit client compatibility/store-privacy policy.
25. Production engineering uses protected PR/release/supply-chain governance.
26. Architecture boundaries use executable fitness functions/CI gates where they protect real invariants.
27. Executable modules carry ownership/criticality metadata when team/operations scale makes it useful.

## DEFERRED / ACTIVATE ON EVIDENCE
Architecture may preserve seams for these, but pre-PMF implementation/deployment is prohibited unless required by a launch blocker, safety/legal obligation or measured reliability/workload need.

28. Pub/Sub/Cloud Tasks as managed async transports beyond the minimum durable-outbox need.
29. Memorystore/managed Valkey deployment when local/in-process/DB-backed behaviour is sufficient.
30. Stockholm `europe-north2` DR activation and advanced multi-region topology. Recovery design may exist; active complexity follows RTO/RPO/business evidence.
31. Service extraction/microservices.
32. Advanced immutable/tamper-evident external audit sinks beyond the minimum launch-risk requirement.
33. Sophisticated custom recommendation ML/data infrastructure.
34. Infrastructure scale changes based on valuation/MAU alone.

## Current deployment preference
When production maturity requires managed infrastructure, current preference remains GCP primary Finland `europe-north1` with Cloud Run/Cloud SQL/Storage/Terraform and Stockholm as the preferred DR region. This is a deployment default, not a reason to activate every service pre-PMF.

## Product evidence boundary
Architecture support does not authorize product scope. `validation/MVP_BOUNDARY.md`, `validation/ASSUMPTION_REGISTER.md` and `business/PMF_HYPOTHESES.md` govern what may be built before PMF evidence.

Accepted ADRs remain the detailed source for decisions they own: 0001 event/domain, 0002 backend/data/contracts, 0003 mobile, 0004 GCP/reliability, 0005 safety/identity, 0006 schema/event contracts, 0007 DR/SLO, 0008 supply-chain/origin/governance. If an older ADR wording implies mandatory pre-PMF activation contrary to this classification, reconcile it before implementation rather than silently expanding scope.