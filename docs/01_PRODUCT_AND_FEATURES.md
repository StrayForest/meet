# 01 — Product and complete feature specification — Architecture 1.3

## Product thesis
Meet is the real-world social layer for cities: understand what is happening nearby, who is going and how to participate.

Core loop: official/imported physical supply → discovery → Meet participation → Pods → IRL attendance → trust/connections → community supply → organizations → more discovery.

## Launch
Finland nationwide coverage; city-by-city activation; fi/en/ru; 18+ adult network.

## Core model
### Event
Stable canonical/social identity for an activity or recurring series.

### EventOccurrenceTemplate
Defaults needed to generate concrete occurrences: duration, physical location, admission, Meet participation, waitlist/capacity and join-close offset.

### EventRecurrence
Optional limited DAILY/WEEKLY/MONTHLY + INTERVAL/BYDAY/COUNT/UNTIL using local DTSTART + IANA timezone.

### EventOccurrence
Concrete **physical** instance users attend. Owns current start/end, physical public location, optional encrypted private-location reference, admission/participation/capacity and state.

## V1 place model
PUBLIC_VENUE, OUTDOOR, PRIVATE_HOME only. No online-only or hybrid placeholder in Architecture 1.3. A future virtual/hybrid capability requires explicit product/domain ADR.

## Admission vs social participation
AdmissionMode: NONE, FREE, EXTERNAL_TICKET, future feature-gated INTERNAL_TICKET.
ParticipationMode: OPEN, APPROVAL_REQUIRED, INVITE_ONLY, DISABLED.
Waitlist applies to Meet-managed social capacity, not external ticket inventory.

Example: a concert may be EXTERNAL_TICKET + OPEN, showing both `Tickets` and `I'm going` as distinct actions.

## Discovery
For You, Now, Today, Weekend, Nearby, Saved. Event cards prioritize occurrence time/location/distance, source, admission, social people/capacity/Pods, language and one dominant Meet social action. Search/map filters remain physical-event oriented.

## Event creation
Category → title/description/languages → one-time/recurrence → physical place → admission → Meet participation/capacity/waitlist → eligibility → media → safety → preview/publish. Recurrence writes template + recurrence; materializer generates occurrences.

## Participation/Pods/chat
Occurrence-targeted, idempotent, capacity-safe. No random DM. Pods attach to one occurrence and have social participation semantics only.

## Attendance/reputation
Check-in/host/peer signals; no continuous tracking. Public trust uses badges/structured aggregates, not public human stars/free-form negative reviews.

## Private home
18+, phone + strong identity host, public coarse occurrence location, separately encrypted exact payload, authorized disclosure only, participant cap, Share My Plans and heightened safety.

## Organizations
UNCLAIMED→CLAIM_PENDING→VERIFIED→SUSPENDED/CLOSED. A member can hold multiple roles among OWNER/ADMIN/EVENT_MANAGER/MODERATOR/ANALYST/BILLING.

## Mobile/reliability
Old supported clients remain compatible; push/realtime are not truth; imminent high-impact state revalidates server truth.

## Monetization
Free supply acquisition → promoted events → Org Pro → affiliate tickets → native ticketing only after separate legal/payment review → optional consumer premium without paywalling core social participation.

## Deferred
Minors, online/hybrid participation, open DMs, stories/reels, voice/video, full Groups, in-house KYC, custom ML before data quality, native ticket marketplace before PMF.
