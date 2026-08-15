# Product spec — Community event creation

## Goal
A normal user creates a safe, clear physical activity without learning event-management jargon.

## Wizard
1. Activity/category + title.
2. One-time or supported recurrence.
3. Physical place: Public Venue / Outdoor / Private Home / Hybrid.
4. Admission: None / Free / External ticket-registration.
5. Meet participation: Open / Approval required / Invite only / Disabled.
6. Social capacity + waitlist policy + language/audience.
7. Description/media/accessibility.
8. Preview + safety/verification checks + publish.

Online-only creation is not part of V1.

Autosave draft. Back does not lose data. Validation occurs per step and server-side.

## Recurrence
Native editable recurrence is deliberately limited to DAILY/WEEKLY/MONTHLY with INTERVAL/BYDAY/COUNT/UNTIL, local DTSTART and timezone. UI exposes only combinations supported by domain tests.

Host can override/cancel a single occurrence without unintentionally rewriting the entire series.

## Private home
Selecting Private Home immediately explains phone/strong-ID requirement and address privacy. Exact location is stored separately and assigned to the concrete occurrence; it is not inherited as an unavoidable series-level address.

Publish is blocked until verification/policy passes.

## Admission vs social join
External ticket link is a separate field/action. It never becomes the social join mode. A ticketed event may still allow Open/Approval/Invite Meet participation.

## Moderation
Risk pre-screen before broad visibility. Policy failure provides reason/remediation where safe. Safety removal cannot be bypassed by editing/reposting duplicate content.

## Host controls
Edit defaults/series, override occurrence, close social joining, approve/reject, remove with reason, announce, cancel occurrence/series, check-in.

## Acceptance
- idempotent publish;
- recurrence local-time/DST tests;
- unsupported recurrence rejected safely;
- private location leak tests;
- admission/participation independence test;
- media quarantine;
- cancellation/material-update durable notifications;
- relevant host actions audited.
