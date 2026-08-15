# B2B and Admin design specifications

## Shared desktop shell
Left navigation 240–280px, top context/header, responsive content width, semantic H1, breadcrumbs only for real hierarchy. Long tables may use sticky headers; filters above table; detail uses route/side panel based on complexity.

## B2B
Navigation: Overview, Events, Recurring, Attendees, Check-in, Announcements, Analytics, Team, Settings; Promotions/Integrations/Billing when enabled.

### Overview
Upcoming occurrences, attendance/fill summary, actions needing attention, source/verification state. Avoid vanity clutter.

### Event list
Columns prioritize:
- next occurrence date/time;
- Event title;
- occurrence state;
- Meet social capacity/fill;
- ParticipationMode;
- AdmissionMode/ticket indicator as a **separate** field;
- source;
- actions.

Never label a single column `join mode` if it mixes external ticketing and social participation.

Recurring series row opens Event/series management; concrete occurrence overrides are visible and manageable without rewriting the whole series.

### Create/edit
Organization event wizard uses same domain model as consumer creation: physical place, admission, Meet participation, capacity/waitlist, audience, safety. External ticket link is not a participation mode.

### Attendees
Nickname, participation state, task-necessary trust facts, check-in. Ticket ownership is not inferred from Meet attendance unless future verified ticket integration provides it. Bulk operations limited/audited; no unnecessary PII.

### Check-in
Large scan/code target, manual fallback/search, immediate result, duplicate-safe. Mobile/tablet responsive for door staff.

### Team
Role/status/invited by/date/actions. Explain privileged permission before role grant.

## Admin
Higher density, neutral visuals. Severity uses text/icon + color. Every high-impact action shows exact target/reason and produces audit/timeline entry. Admin identity is StaffAccount, never consumer impersonation.

### Moderation case
Two-column desktop: evidence/context + action/timeline; stack on small widths.

### Dedupe
Compare Event and occurrence candidate fields, source/provenance/rights. Merge preview must show canonical target, aliases that will be created, affected public links/references and occurrence mappings. Merge/link is distinct from destructive content replacement.

### Operational flags/client policy
Admin surface clearly separates:
- product experiments (PostHog-linked/reference only);
- first-party operational flags/kill switches;
- mobile minimum/recommended version and force-update client policy.

Safety-critical flag/client-policy changes require explicit confirmation, reason and audit.

## Accessibility
Full keyboard support, focus management, table semantics, non-color severity, no hover-only actions.
