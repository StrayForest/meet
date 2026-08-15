# Product spec — Participation, approval and waitlist

## Goal
Joining is fast and trustworthy while capacity is transactionally correct.

## Outcomes
OPEN → confirmed if capacity.
APPROVAL_REQUIRED → requested.
Full → waitlisted if allowed.
INVITE_ONLY → valid invite acceptance.
EXTERNAL_TICKET → external ticket action plus separate social intent where supported.

## Capacity invariant
The last slot cannot be assigned twice. User+occurrence participation is unique. Retry with same idempotency key returns same logical result.

## Waitlist
Stable ordering policy. Released capacity offers next eligible user a time-limited slot. Offer acceptance is atomic; expiry advances queue. Notify user clearly.

## Cancellation
User can leave; host can remove with reason. Cancellation/no-show feeds private reliability signals but does not create public shaming.

## Acceptance
Concurrency tests; duplicate Pub/Sub/Cloud Task safe; blocked/restricted users excluded; notifications deduped; UI states match state machine.