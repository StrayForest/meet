# B2B and Admin design specifications

## Shared desktop shell
Left navigation 240–280px, top context/header, responsive content width, semantic page H1, breadcrumbs only for real hierarchy. Tables use sticky header when long, filters above table, detail in route or side panel depending complexity.

## B2B
Navigation: Overview, Events, Recurring, Attendees, Check-in, Announcements, Analytics, Team, Settings; Promotions/Integrations/Billing when enabled.

### Overview
Upcoming events, attendance/fill summary, actions needing attention, source/verification state. Avoid vanity dashboard clutter.

### Event list
Date/time, title, occurrence status, capacity/fill, join mode, source, actions. Filters date/status/category. Creation CTA primary.

### Attendees
Name/nickname, participation state, trust facts necessary for host task, check-in. Bulk operations are limited/audited and never expose unnecessary PII.

### Check-in
Large scan/code target, fast manual fallback/search, immediate result, duplicate check-in safe. Mobile/tablet responsive for door staff.

### Team
Role, status, invited by/date, actions. Permission explanation before privileged role grant.

## Admin
Higher density, neutral visuals. Severity uses text/icon + color. Every destructive/high-impact action displays exact target/reason and produces timeline entry.

### Moderation case
Two-column desktop: evidence/context + action/timeline. On smaller widths stack; action panel remains reachable without hiding evidence.

### Dedupe
Compare canonical candidate fields side-by-side with source/provenance/rights; merge/link action clearly distinguishes source linkage from destructive content replacement.

## Accessibility
Full keyboard support, focus management for panels/modals, table semantics, non-color severity, no hover-only actions.