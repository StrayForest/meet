# Product spec — Participation, approval, admission and waitlist

## Goal
Joining the Meet social layer is fast and trustworthy while social capacity is transactionally correct. Admission/ticketing is explicitly separate.

## Admission
Occurrence admission may be:
- NONE
- FREE
- EXTERNAL_TICKET
- INTERNAL_TICKET (future/feature-gated)

External ticket status does not prove or deny Meet social participation.

## Social participation outcomes
ParticipationMode:
- OPEN → CONFIRMED if social capacity permits
- APPROVAL_REQUIRED → REQUESTED
- INVITE_ONLY → valid invite required
- DISABLED → no Meet social join CTA

If capacity is full and WaitlistPolicy=ENABLED → WAITLISTED.

A common imported concert is `EXTERNAL_TICKET + OPEN`: show external `Get tickets` separately from `I'm going`.

## Capacity invariant
The last social slot cannot be assigned twice. User+occurrence participation is unique. Retry with same idempotency key returns same logical outcome.

External provider ticket inventory is not decremented/managed by Meet unless a future native ticket integration explicitly owns that inventory.

## Waitlist
Stable ordering policy. Released capacity offers next eligible user a time-limited slot. Offer acceptance is atomic; expiry advances queue. Duplicate Cloud Tasks/PubSub deliveries are harmless.

## Cancellation
User can leave; host can remove with reason. Cancellation/no-show feeds private reliability signals but does not create public shaming.

## Revalidation
Before join/offer acceptance/cancel, server authoritative occurrence version/state is used. Cached client state cannot make a cancelled/full/restricted occurrence joinable.

## Acceptance
- concurrency test for final slot;
- duplicate request/task/event safe;
- EXTERNAL_TICKET + OPEN supported;
- Pods cannot receive admission/ticket modes;
- blocked/restricted users excluded;
- notification deliveries deduped;
- UI exposes ticket action and social action without implying ticket ownership.
