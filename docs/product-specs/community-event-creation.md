# Product spec — Community event creation

## Goal
A normal user can create a safe, clear activity without learning event-management jargon.

## Wizard
1. Activity/category + title.
2. Date/time/recurrence eligibility.
3. Location type and place.
4. Capacity/join mode/language/audience.
5. Description/media/accessibility/cost/ticket link if permitted.
6. Preview + safety/verification checks + publish.

Autosave draft. Back does not lose data. Validation occurs per step and again server-side.

## Private home
Selecting Private Home immediately explains strong-ID/phone requirement and exact-address privacy. Publish blocked until verification policy passes.

## Moderation
Risk pre-screen before broad visibility. Policy failure provides reason/remediation where safe. Safety removal cannot be bypassed by editing/reposting duplicate content.

## Host controls
Edit, close joins, approve/reject, remove with reason, announce, cancel occurrence/series, check-in.

## Acceptance
Idempotent publish; recurrence time/DST tests; media quarantine; cancellation notifications; audit relevant host actions.