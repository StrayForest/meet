# Product spec — Organizations and B2B2C

## Goal
Organizations increase trustworthy supply first; monetization comes after consumer activity proof.

## Organization lifecycle
UNCLAIMED → CLAIM_PENDING → VERIFIED → SUSPENDED/CLOSED.

## Claim
Request → relationship evidence → claimant strong identity where policy requires → automated/staff review → owner role → audit.

## Roles
OWNER, ADMIN, EVENT_MANAGER, MODERATOR, ANALYST, BILLING with explicit permission matrix in `../references/permission-matrix.md`.

## Launch B2B
Organization switcher, profile, team, events/recurrence, attendee approval/removal, QR check-in, announcements, basic analytics.

## UX
Desktop information-dense but simple; consumer event appearance remains consistent regardless of source. “Official/verified” is factual, not a paid badge.

## Monetization later
Organization Pro, promoted events, affiliate tickets, native ticketing. Paid promotion is labeled and cannot bypass relevance/safety.

## Acceptance
Tenant isolation tests; role escalation tests; all sensitive changes audited; imported unclaimed profile can be claimed without losing provenance.