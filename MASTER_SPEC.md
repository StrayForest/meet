# Meet — Master specification map

This file does not duplicate full specs. The repository is the source of truth; load the smallest relevant context.

## Start
- `AGENTS.md`
- `ARCHITECTURE.md`
- `docs/00_INDEX.md`
- `docs/09_FIXED_ARCHITECTURE_DECISIONS.md`
- accepted `docs/adr/`

## Product
- `docs/PRODUCT_SENSE.md`
- `docs/01_PRODUCT_AND_FEATURES.md`
- `docs/product-specs/`

## Design/frontend/mobile
- `docs/DESIGN.md`
- `docs/FRONTEND.md`
- `docs/design-docs/`
- `design/tokens.json`
- `design/DESIGN_SYSTEM_PREVIEW.html`
- `docs/MOBILE_RELEASES.md`
- `docs/CLIENT_COMPATIBILITY.md`
- `docs/DEEP_LINKS_SEO.md`

## Architecture/backend/data/realtime
- `docs/BACKEND.md`
- `docs/02_DOMAIN_AND_DATABASE.md`
- `docs/03_API_AND_STATE_MACHINES.md`
- `docs/04_EVENT_INGESTION_AND_DISCOVERY.md`
- `docs/REALTIME.md`
- `schemas/database.dbml` — V2 authoritative blueprint before migration generation

## Safety/security/reliability
- `docs/05_TRUST_SECURITY_PRIVACY.md`
- `docs/SECURITY.md`
- `docs/RELIABILITY.md`

## Infrastructure/operations
- `docs/06_INFRASTRUCTURE_DEVOPS.md`
- `docs/OPERATIONS.md`
- `docs/07_ANALYTICS_I18N_SCALING.md`

## Implementation governance
- `docs/PLANS.md`
- `docs/exec-plans/`
- `docs/10_IMPLEMENTATION_BACKLOG.md`
- `docs/11_DEFINITION_OF_DONE.md`
- `docs/QUALITY_SCORE.md`

## Current architecture generation
Architecture version **1.2**. The V2 domain/schema corrections (Event/Occurrence, admission vs participation, occurrence private location, client compatibility, first-party operational flags, EAS lifecycle and canonical aliases) supersede earlier illustrative schema semantics.

If accepted ADR/prose/DBML conflict, stop implementation and reconcile docs before code/migrations.
