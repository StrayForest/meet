# Product spec — Admin and moderation console

## Goal
Resolve safety/operational cases quickly without giving staff invisible unlimited power.

## Areas
Moderation queue, reports, cases, appeals, users, events, organizations/claims, verification status (not documents), ingestion/dedupe, feature flags, audit/operations links.

## Case screen
Severity/status, target, reports, evidence versions/references, relevant limited history, existing restrictions, suggested policy reasons, action controls, notice/appeal state, immutable timeline.

## Guardrails
Mandatory staff MFA; least privilege; sensitive actions reason-coded/audited; no raw KYC documents; exceptional private-address access separately permissioned/audited; destructive/high-impact actions may require elevated role/confirmation.

## Queue UX
Prioritize severe/offline-imminent cases. Filters by severity/type/age/assignee. Keyboard-efficient desktop workflow. Never hide old unresolved cases merely due to sorting.

## Appeals
Reviewer sees original action/reason/evidence and appeal statement. Outcome upheld/overturned/partial, with notice and audit.

## Acceptance
Permission matrix tests; all actions route through domain/application APIs; no direct DB edit controls; audit search; private data minimization; operational latency metrics.