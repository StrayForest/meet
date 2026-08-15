# ADR-0005 — Adult-network trust, identity and private-home safety

Status: ACCEPTED

## Context
Meet facilitates offline meetings between strangers and may allow private-home events. Safety failures can cause real-world harm. At the same time, storing identity documents creates unnecessary privacy/security liability.

## Decision
- Initial public network is 18+.
- No dating positioning, sexual solicitation or random DMs.
- Strong identity required for private-home hosts and other explicitly high-risk roles/policies.
- Identity verification is external; Meet stores verification result/provider reference, not passport/document images/numbers.
- Exact private-home location is occurrence-scoped, separately encrypted and never part of generic event/feed DTOs.
- Staff identity is separate from consumer User identity and requires MFA.
- Moderation has reports, evidence, reason-coded actions and appeals; AI is triage/pre-screening, not sole irreversible authority.
- No public 1–5 star rating of people.

## Alternatives considered
- Mandatory KYC for every user: rejected for onboarding/privacy/cost unless future risk evidence justifies it.
- Store documents ourselves: rejected as unnecessary high-risk data custody.
- Public free-form human reviews: rejected due harassment/retaliation/social-rating risk.
- Youth users in same network: rejected; any future Youth Mode requires separate architecture/policy ADR.

## Consequences
Positive: lower document-data risk, explicit high-risk safeguards, cleaner product identity.
Cost: external verification dependency, moderation operations and some conversion friction for private-home hosting.
