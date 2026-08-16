# Architecture Fitness Functions — Architecture 1.3

Architecture rules are executable constraints. Documentation alone is not sufficient; violations fail CI once the affected code surface exists.

## Mandatory dependency rules
1. `apps/*` may depend on `packages/*`; `packages/*` never depend on `apps/*`.
2. Domain code imports no framework, DB, transport, cloud-provider or UI adapters.
3. Application code depends on domain + ports, not concrete infrastructure.
4. Infrastructure implements ports and depends inward only.
5. Consumer/public surfaces never import staff/admin-only modules.
6. Generic event/feed/map contracts never expose/import exact private-location payloads.
7. Web/mobile never import server-only DB, secret, KMS or privileged packages.
8. Analytics/experiments never control OperationalFlags or safety-critical policy.
9. Modules never reach directly into another module's persistence implementation; use owned application contracts/events.
10. Durable event consumers are duplicate-safe and use registered versioned contracts.

## CI implementation
Phase 0 adds `scripts/check-architecture-contracts.mjs` plus static dependency tooling when code exists. CI must fail for forbidden dependency direction, direct cross-module persistence access, server-only client imports, exact-location leakage, unregistered event contracts, or generated schema/contract drift.

## Exceptions
No permanent inline ignore. An exception requires an accepted ADR or expiring exception record with owner, reason, paths and removal condition.
