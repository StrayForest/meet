# Product spec — Organizations and B2B2C — Architecture 1.3

Organizations increase trustworthy physical supply before monetization.

Lifecycle: UNCLAIMED→CLAIM_PENDING→VERIFIED→SUSPENDED/CLOSED. Source mappings survive claim.

Membership is separate from roles. One organization member may hold multiple roles: OWNER, ADMIN, EVENT_MANAGER, MODERATOR, ANALYST, BILLING. Permission union remains subject to resource/state/safety policy.

Organizations manage Event series/default template/recurrence separately from concrete occurrence overrides. Admission and Meet participation remain independent.

Launch B2B: org switcher/profile/team multi-role RBAC/events/recurrence/attendees/check-in/announcements/basic analytics.

Acceptance: tenant isolation, multi-role union/no duplicate role, claim provenance, occurrence override, audited changes and no ticket-ownership inference from Meet participation.
