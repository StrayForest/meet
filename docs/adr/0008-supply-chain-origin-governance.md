# ADR-0008 — Supply-chain, repository and origin governance

Status: ACCEPTED
Date: 2026-08-16
Owner: Platform/security architecture

## Context
A compromised CI dependency, unreviewed production change or bypassable origin can invalidate otherwise strong application security. Meet also expects AI-assisted implementation, so repository controls must make architectural/product boundaries executable rather than relying on memory.

## Decision
Production changes flow through branch/PR → CI → review → merge → staging/protected promotion. GitHub Actions are pinned by full commit SHA, jobs use least permissions, cloud CI uses workload identity rather than long-lived keys, dependencies are deterministic and production images are promoted by immutable digest. SBOM/provenance are added where the toolchain supports them and production maturity requires them.

Cloudflare must not be trivially bypassable. Cloud Run ingress/default endpoint restrictions and GCP load-balancer/origin controls are configured/tested; stronger authenticated-origin mechanisms such as validated mTLS/AOP may be activated when implementation compatibility is proven.

## Alternatives
- Direct pushes to production/main: rejected because review/CI/auditability are required safety controls.
- Floating GitHub Action tags only: rejected because upstream tag compromise/movement weakens reproducibility.
- Static cloud service-account keys in GitHub secrets: rejected in favor of workload identity/short-lived credentials.
- Public origin with only obscurity of hostname: rejected because edge WAF/rate limits could be bypassed.
- Kubernetes admission/supply-chain platform from day one: rejected as premature operational complexity.

## Compatibility impact
Repository workflows and CODEOWNERS become part of delivery architecture. Sensitive paths require explicit review ownership. Emergency fixes still produce repository history and follow-up review; permanent console drift is prohibited.

## Migration
Phase 0 adds pinned CI workflows, architecture/business/validation/predevelopment gates, deterministic package tooling and required status-check names. Production IaC later adds WIF, artifact scanning/provenance and origin restrictions before broad launch.

## Rollback
A bad workflow is reverted by reviewed commit; pinned actions are upgraded deliberately after source/release review. Origin changes must keep a tested recovery/fallback path that does not silently expose a public bypass. Emergency mitigations are reconciled back to IaC/repository state immediately after stabilization.

## Validation
CI rejects unpinned third-party/official actions under policy, contract scripts pass on fresh checkout, branch protection requires the named predevelopment/CI status when repository settings permit it, origin-bypass tests fail closed, and production artifacts are traceable to reviewed source/revision.

## Approval
Existing Architecture 1.3 ACCEPTED decision retained. Weakening reviewed production flow, action pinning, short-lived cloud identity or origin-bypass prevention requires explicit security review and a superseding accepted ADR.
