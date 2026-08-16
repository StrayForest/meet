# 01 — Product and complete feature specification — Architecture 1.3

## Product thesis
Meet is the real-world social layer for cities: understand what is happening nearby, who is going and how to participate.

Events are the launch context, not the end-state moat. Long-term, Meet aims to become a privacy-governed graph of real participation: **who actually does things with whom**, anchored in physical activities and organizations. See `business/PRODUCT_STRATEGY.md`.

Core loop: official/imported physical supply → discovery → Meet participation → Pods/social context → IRL attendance → trust/connections → repeat/community supply → organizations → more discovery.

**Business proof:** Meet succeeds only if this loop produces repeated successful IRL participation. Passive browsing/registration is not PMF. Falsifiable launch hypotheses live in `business/PMF_HYPOTHESES.md`.

## Launch
Finland nationwide coverage; **social activation and paid growth city-by-city with Helsinki metro first**; 18+ adult network. Finland is the first PMF/operating market, not the assumed end-state TAM.

**Launch languages are fixed: Finnish (`fi`), English (`en`) and Russian (`ru`).** All three serve potential starting users and must remain end-to-end supported across onboarding, discovery, core participation, safety and notifications. Measure product outcomes by language cohort and cross-language participation without turning Meet into a language-exclusive brand. See `business/BEACHHEAD_MARKET.md`.

## Minimum proof loop
Before roadmap breadth, prove: relevant discovery → trustworthy social context → intent/join → credible attendance → repeat participation/connection. Product prioritization follows this loop; weak H2–H4 results trigger investigation of liquidity/cohort/trust/positioning before unrelated feature expansion.

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
PUBLIC_VENUE, OUTDOOR, PRIVATE_HOME only. No online-only or hybrid placeholder in Architecture 1.3. PRIVATE_HOME remains architecturally supported but flag-gated/limited; broad rollout is not required for PMF and waits for explicit trust/safety evidence. A future virtual/hybrid capability requires explicit product/domain ADR.

## Admission vs social participation
AdmissionMode: NONE, FREE, EXTERNAL_TICKET, future feature-gated INTERNAL_TICKET.
ParticipationMode: OPEN, APPROVAL_REQUIRED, INVITE_ONLY, DISABLED.
Waitlist applies to Meet-managed social capacity, not external ticket inventory.

Example: a concert may be EXTERNAL_TICKET + OPEN, showing both `Tickets` and `I'm going` as distinct actions.

## Discovery
For You, Now, Today, Weekend, Nearby, Saved. Event cards prioritize occurrence time/location/distance, source, admission, social people/capacity/Pods, language and one dominant Meet social action. Search/map filters remain physical-event oriented.

Public web/event/category/organization pages are a first-class product and acquisition surface: genuinely useful without signup, indexable where appropriate, and designed to convert relevant local demand into Meet social participation without leaking private social data or producing thin SEO pages.

## Event creation
Category → title/description/languages → one-time/recurrence → physical place → admission → Meet participation/capacity/waitlist → eligibility → media → safety → preview/publish. Recurrence writes template + recurrence; materializer generates occurrences.

## Participation/Pods/chat
Occurrence-targeted, idempotent, capacity-safe. No random DM. Pods attach to one occurrence and have social participation semantics only. Pods/chat/attendee context are retained only when evidence shows they improve trust, attendance or repeat participation.

## Attendance/reputation
Check-in/host/peer signals; no continuous tracking. Public trust uses badges/structured aggregates, not public human stars/free-form negative reviews. Successful IRL participation is the business north-star outcome; repeat successful IRL participation is the strongest early PMF signal.

## Private home
18+, phone + strong identity host, public coarse occurrence location, separately encrypted exact payload, authorized disclosure only, participant cap, Share My Plans and heightened safety. Broad rollout is deferred until trust/safety evidence supports it; PUBLIC_VENUE/OUTDOOR are sufficient for initial PMF proof.

## Organizations
UNCLAIMED→CLAIM_PENDING→VERIFIED→SUSPENDED/CLOSED. A member can hold multiple roles among OWNER/ADMIN/EVENT_MANAGER/MODERATOR/ANALYST/BILLING.

B2B value hypotheses should be tested early with organizers even if full Org Pro ships later. The strongest hypothesis is measurable qualified reach/attendance/repeat-audience value, not merely paid event listing. Willingness to pay is evidence, not a reason to inflate the feature set.

## Mobile/reliability
Old supported clients remain compatible; push/realtime are not truth; imminent high-impact state revalidates server truth.

## Monetization
Free supply acquisition → promoted events → Org Pro → affiliate tickets → native ticketing only after separate legal/payment review → optional consumer premium without paywalling core social participation. Bottom-up economics live in `business/BUSINESS_MODEL_AND_UNIT_ECONOMICS.md`.

## Growth discipline
Nationwide coverage does not imply nationwide paid activation. City expansion follows `business/CITY_LIQUIDITY_MODEL.md`; GTM spend follows downstream attendance/repeat economics, not installs. Mature consumer acquisition optimizes CAC per repeat successful IRL participant. SEO/public web, organizer distribution, communities and referrals are first-class distribution hypotheses.

## Capital-efficiency discipline
Architecture should preserve future scale without forcing all infrastructure/features to be active pre-PMF. `architecture ready` is not `everything deployed`. AI-agent output is valuable only when it closes product/business milestones under normal engineering gates. See `business/OPERATING_MODEL.md`.

## Deferred
Minors, online/hybrid participation, broad PRIVATE_HOME rollout, open DMs, stories/reels, voice/video, full Groups, in-house KYC, custom ML before data quality, native ticket marketplace before PMF, feature breadth whose only justification is engagement or architecture completeness.