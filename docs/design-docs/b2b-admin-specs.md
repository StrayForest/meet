# B2B and Admin design specifications — Architecture 1.3

## B2B shell
Desktop left nav: Overview, Events, Recurring, Attendees, Check-in, Announcements, Analytics, Team, Settings; promotions/integrations/billing when enabled.

## Events
Rows distinguish next concrete occurrence, Event series identity, occurrence state, social capacity/fill, ParticipationMode, AdmissionMode, source and actions. Never collapse ticket and Meet participation.

Recurring series management exposes EventOccurrenceTemplate/default recurrence separately from concrete occurrence overrides.

## Team — multi-role
A membership may have multiple assigned roles. Team table shows member status plus role chips/list, not a single `Role` field. Role editor supports add/remove of OWNER/ADMIN/EVENT_MANAGER/MODERATOR/ANALYST/BILLING subject to permission invariants and prevents accidental last-owner lockout according to domain policy. Every privilege change shows impact and is audited.

## Attendees/check-in
Show only task-necessary profile/trust/participation data. Ticket ownership is not inferred from Meet attendance. Check-in is duplicate-safe and usable on tablet/mobile.

## Admin
Neutral high-density UI. Moderation case can contain multiple reports and immutable evidence snapshots. Dedupe preview shows aliases/references/provenance. OperationalFlag editor shows current version, expected-version conflict, reason and second-approver requirement where safety-critical re-enable requires it. Client policy changes show affected app-version telemetry when available.

All high-impact actions require explicit target/reason and audit. Exact private-location staff access remains exceptional, authorization-gated and audited.
