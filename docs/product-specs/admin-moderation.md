# Product spec — Admin and moderation

## Goal
Privileged operations are safe, auditable and impossible to confuse with ordinary consumer ownership.

## Staff identity
Admin/moderation uses separate StaffAccount identity, mandatory MFA and explicit roles/scopes. A consumer User flag does not grant staff access. Staff never “becomes” a consumer user to perform privileged actions.

## Core surfaces
- moderation queue/cases/evidence;
- reports;
- appeals;
- users/account restrictions;
- events/occurrences;
- organizations/claims;
- identity verification status (not documents);
- ingestion/source health;
- dedupe/alias management;
- first-party operational flags;
- mobile client policy;
- audit/operations links.

## Dedupe merge
Before merge show canonical target, source/provenance, occurrence mappings, aliases/public URLs that will be preserved and affected references. Merge cannot create alias cycles/self-alias.

## Operational flags
Safety-critical changes require reason/confirmation/audit. PostHog product experiments are visually/architecturally separate.

## Client policy
Changing minimum supported app version/forceUpdate requires reason, platform/version, effective time and audit; UI warns about active-user impact where telemetry exists.

## Moderation
Reason-coded case/action/appeal workflow. Evidence access is least-privilege. Permanent/high-impact action follows policy/human review requirements.

## Acceptance
- staff auth/scope tests;
- no consumer impersonation authorization path;
- every high-impact command audited;
- operational flag works independently of PostHog;
- alias merge preserves old route resolution;
- client-policy change is audited;
- exact private location staff access remains exceptional/authorized/audited.
