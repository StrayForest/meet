# 01 — Product and complete feature specification

## 1. Product thesis
Build the default real-world social layer for cities: a user opens Meet and understands **what is happening nearby, who is going, and how to participate**.

Category: **event-first IRL social network / real-world social marketplace**.

Core loop:
`official/imported supply → discovery → social participation → Pods → IRL attendance → trust/connections → community supply → organizations → more discovery`.

## 2. Launch
- Coverage: Finland nationwide.
- Community activation: city-by-city, Helsinki metro first.
- Locales: Finnish, English, Russian.
- Adult network: 18+.
- Expansion: country configuration + connectors, not forks.

## 3. Product principles
1. Events before profiles.
2. Offline outcome before screen time.
3. Imported/official events solve cold start.
4. Any eligible in-person event can gain a Meet social layer even when admission/ticketing happens elsewhere.
5. Trust/reputation are marketplace infrastructure.
6. Privacy and mobile backward compatibility are architectural.
7. No dating drift and no random DMs.
8. Organizations are supply partners before revenue customers.
9. Push notifications are hints; server/event state is truth.
10. Country expansion is configuration, connectors, localization and policy.

## 4. Core product object model

### Event
Stable social/canonical identity for an activity or recurring series. Owns organizer, translations, category, default policies and provenance.

### EventOccurrence
A concrete visitable instance. **This is the physical participation unit.** It owns/overrides start/end, venue/location, capacity, admission policy, social participation policy and state.

### EventRecurrence
Optional recurrence definition. V1 supports only:
- `FREQ=DAILY|WEEKLY|MONTHLY`
- `INTERVAL`
- `BYDAY`
- `COUNT`
- `UNTIL`

Recurrence stores local DTSTART + IANA timezone; generated occurrences preserve local wall-clock semantics across DST. Unsupported RRULE clauses from imported sources may be expanded by connectors into concrete occurrences rather than becoming editable native recurrence definitions.

## 5. Event origin/access
Origin:
- IMPORTED
- ORGANIZATION
- COMMUNITY
- PLATFORM

Access/visibility:
- PUBLIC
- UNLISTED
- PRIVATE
- ORGANIZATION_ONLY

## 6. Admission and social participation are separate

### AdmissionMode
How the real-world activity itself is entered/paid for:
- NONE — no separate admission mechanism
- FREE — free admission/registration outside Meet not required
- EXTERNAL_TICKET — ticket/registration is purchased or obtained externally
- INTERNAL_TICKET — reserved for future native ticketing; feature-gated until implemented

Admission can include external URL, price display and provider/source metadata.

### ParticipationMode
How a user joins the **Meet social layer** for an occurrence:
- OPEN
- APPROVAL_REQUIRED
- INVITE_ONLY
- DISABLED

A concert can therefore be `EXTERNAL_TICKET + OPEN`: the user gets a ticket elsewhere and still taps **I'm going** in Meet.

Pods use ParticipationMode only; they never have admission/ticket modes.

### WaitlistPolicy
- DISABLED
- ENABLED

Waitlist applies only to Meet-managed social capacity, not external ticket inventory unless a future ticketing integration explicitly owns that inventory.

## 7. Place model
V1 discoverable Meet events are physical:
- PUBLIC_VENUE
- OUTDOOR
- PRIVATE_HOME
- HYBRID

`ONLINE_ONLY` is intentionally excluded from V1 discovery to protect the IRL product thesis. Hybrid events must have a real physical occurrence location; online participation may be represented as supplemental metadata later.

## 8. Discovery
Home sections:
- For You
- Now
- Today
- Weekend
- Nearby
- Saved

Event card prioritizes:
- title/category
- start/time-to-start
- distance/location
- source badge
- admission indicator (`Free`, `Tickets`) where relevant
- Meet social capacity/people/Pods
- language
- primary CTA based on social participation (`Join`, `Request`, `I'm going`, `View`) and secondary ticket action where needed

Filters:
- distance/date/time/category
- free/paid/ticketed
- language
- age/audience eligibility
- indoor/outdoor/private-home/hybrid
- accessibility
- Meet social seats available
- source type
- connections attending
- verification requirement

Map never exposes private-home exact coordinates to unauthorized actors.

## 9. Event detail
Display:
- canonical/translated title and description
- source/origin and organizer
- concrete occurrence start/end/timezone
- venue/location
- admission/ticket information
- Meet participation mode/capacity
- participants/Pods subject to privacy
- accessibility/language/eligibility
- safety/verification requirements
- save/share/report

For critical/imminent events, the client revalidates current occurrence truth before displaying a joinable/cancel-safe state or exact private address. Cached data must show freshness/degraded state when appropriate.

## 10. Community event creation
Wizard:
1. category
2. title/description/languages
3. one-time or supported recurrence
4. physical place/location
5. admission mode
6. Meet participation mode + capacity + waitlist
7. eligibility/audience
8. media
9. safety/verification
10. preview/publish

Host can update/cancel individual occurrence or series where rules allow.

## 11. Participation
Outcomes:
- OPEN → confirmed if social capacity permits
- APPROVAL_REQUIRED → requested
- INVITE_ONLY → invite required
- DISABLED → no Meet social join
- full + waitlist enabled → waitlisted

External ticketing never automatically means Meet participation is disabled.

Capacity is transactionally correct and scoped to occurrence/Pod. Join/leave/approval/waitlist operations are idempotent.

## 12. Pods
Pod is a small social group attached to one EventOccurrence.
- OPEN / APPROVAL_REQUIRED / INVITE_ONLY / DISABLED participation semantics as applicable
- optional capacity
- meeting point
- contextual chat
- report/block

Examples: “Going from Espoo”, “English speakers”, “Meet before the concert”.

## 13. Chat/connections
Conversation types:
- EventOccurrence chat
- Pod chat
- Connection DM
- Organization announcement

No random DM. Connection DM requires mutual connection/approved post-event flow.

Launch messages: text, emoji, image, meeting point, system. No arbitrary files/voice/video/calls.

## 14. Attendance/reputation
Attendance signals: check-in code/QR, organizer confirmation, peer confirmation, optional coarse geo assist. No continuous tracking.

Public reputation uses badges/bands and structured positive signals; never a public 1–5 human rating or public negative free-form review.

## 15. Private-home events
- host 18+
- phone + strong identity verified
- exact address bound to the **occurrence/location assignment**, encrypted and excluded from generic DTOs
- only coarse area is public
- disclosure only to authorized confirmed/approved participants according to policy/window
- participant cap
- Share My Plans
- heightened safety moderation

## 16. Organizations
States: UNCLAIMED, CLAIM_PENDING, VERIFIED, SUSPENDED, CLOSED.

Roles: OWNER, ADMIN, EVENT_MANAGER, MODERATOR, ANALYST, BILLING.

Launch B2B: claim, verification, team/RBAC, events/recurrence, attendees, check-in, announcements, basic analytics.

## 17. Staff
Staff identity is separate from consumer User identity. Staff authentication requires MFA; StaffAccount/roles/scopes are explicit and sensitive actions are audited.

## 18. Notifications
In-app notification is durable. Push/email are delivery channels, not truth.
Critical event cancellation/material update must remain visible in app even if push delivery fails.

## 19. Mobile compatibility
Production supports a documented mobile compatibility window, minimum supported version, runtime version and capability negotiation. Server changes cannot assume all mobile clients update immediately.

## 20. Monetization sequence
1. free B2B supply acquisition
2. promoted events
3. Organization Pro
4. ticket affiliate revenue where permitted
5. native ticketing
6. Stripe Connect only when marketplace payouts exist
7. Consumer Plus only without paywalling core participation

## 21. Explicitly deferred
- users under 18 / Youth Mode
- online-only discovery
- open DMs
- stories/reels
- voice/video calls
- full persistent Groups
- in-house KYC
- custom ML before reliable data
- native ticket marketplace before PMF/legal/payment review
