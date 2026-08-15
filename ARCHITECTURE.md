# Meet — Architecture map

This file is the short top-level technical map. Detailed truth lives in `docs/`.

## Product
Event-first IRL social network / real-world social marketplace. `Event` and `EventOccurrence` are the central discovery units; participation, Pods, attendance and trusted connections add the social layer.

## Runtime topology
`Mobile/Web/B2B/Admin → Cloudflare → GCP HTTPS LB → Cloud Run API/Realtime → PostgreSQL/PostGIS + Valkey + Pub/Sub/Cloud Tasks + Cloud Storage`.

## Backend model
NestJS + Fastify modular monolith. Business domains have explicit ownership and dependency direction. Cross-domain async effects use the transactional outbox. PostgreSQL is authoritative; Valkey is ephemeral.

## Repository map
- `apps/`: deployable applications.
- `packages/`: shared contracts, DB tooling, config, design primitives and test helpers.
- `infra/`: Terraform.
- `docs/product-specs/`: feature behavior and acceptance criteria.
- `docs/design-docs/`: UX/UI decisions and visual contracts.
- `docs/exec-plans/`: active/completed implementation plans.
- `docs/references/`: compact agent references and researched external constraints.
- `docs/generated/`: generated artifacts; never hand-edit generated truth.
- `design/`: machine-readable design tokens and visual reference.
- `schemas/`: DB and architecture diagrams.

## Fixed decisions
Read `docs/09_FIXED_ARCHITECTURE_DECISIONS.md`. A conflicting implementation requires an ADR before code changes.

## Agent rule
Start with `AGENTS.md`, then use progressive disclosure through `docs/00_INDEX.md`; do not load every spec for every task.