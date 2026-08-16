# ADR-0005 — Adult-network trust, identity and safety boundaries

Status: ACCEPTED
Date: 2026-08-16
Owner: Trust/Safety architecture

## Context
Meet facilitates physical meetings between people who may not know each other. Trust controls must reduce abuse without turning public discovery into high-friction identity collection. Future private-home support has materially higher risk than public-place events.

## Decision
Meet is an 18+ network. No dating positioning, sexual-solicitation product mechanics, random/open DMs or public human star scores. Identity/trust requirements are progressive and action/risk based; public browsing does not require phone/ID verification.

External identity verification stores provider result/reference rather than identity-document images/numbers. Staff identity is separate from consumer identity and requires MFA. Moderation supports report → case → immutable/minimized evidence → action → notice/appeal. AI may assist triage but is not sole irreversible authority.

PRIVATE_HOME remains domain-representable but explicitly NOT V1. If ever enabled, exact location is occurrence-scoped, envelope-encrypted, accessed through a dedicated authorization path and subject to a separate evidence/safety/legal/ops gate.

## Alternatives
- Mandatory ID/phone for every user: rejected for privacy/conversion cost and mismatch with low-risk public browsing.
- Public reputation/star scoring: rejected because it creates social-credit/gaming/privacy risk and is not required for the proof loop.
- Store identity documents directly: rejected because it unnecessarily increases highly sensitive data liability.
- Treat private-home like an ordinary venue: rejected due to fundamentally different disclosure/safety risk.

## Compatibility impact
Authorization, data classification, logging, analytics, staff tooling and UX must preserve progressive trust. Generic DTOs must remain incapable of exact private-location disclosure.

## Migration
P0/V1 implements only trust controls required by reachable public-place, chat, moderation and staff flows. PRIVATE_HOME implementation remains blocked even if schema seams exist.

## Rollback
Risky social/creation capabilities must have operational disable paths. Identity-provider changes require provider-reference migration and compatibility planning; raw identity documents must not be introduced as a rollback shortcut.

## Validation
Concrete threat models and tests cover account takeover, host abuse, moderation, staff compromise, ingestion, media and realtime before their boundaries launch. Public browsing works without phone/ID. Private-home leak-prevention architecture tests remain negative/design guards only until a future activation gate.

## Approval
Existing Architecture 1.3 ACCEPTED decision retained. Lowering age scope, enabling dating/random DMs/private-home rollout, storing identity documents or weakening staff separation requires explicit product/legal/safety review and a superseding accepted ADR.
