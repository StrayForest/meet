# 01 — Product and complete feature specification — Architecture 1.3

## Product thesis
Meet helps people turn local opportunities into real-world participation: understand what is happening nearby, decide whether it feels worth/comfortable attending, and find company when going alone is a barrier.

Events are the launch context. A privacy-governed graph of real participation is a **long-term hypothesis**, not a predetermined destination. Persistent connections/communities earn scope only when evidence shows they improve future IRL participation. See `business/PRODUCT_STRATEGY.md`.

Core proof loop: physical supply → relevant discovery → arrival/social confidence → intent → credible IRL attendance → repeat IRL action and/or explicitly desired connection.

**Business proof:** passive browsing, registration and time-in-app are not PMF. Successful IRL participation is the north-star outcome. Falsifiable hypotheses live in `business/PMF_HYPOTHESES.md`; pre-PMF scope is governed by `validation/MVP_BOUNDARY.md`.

## Launch
Finland nationwide coverage; **social activation and paid growth city-by-city with Helsinki metro first**; 18+ adult network. Nationwide coverage is not a claim of nationwide social liquidity.

**Launch languages are fixed: Finnish (`fi`), English (`en`) and Russian (`ru`).** All three remain end-to-end supported across onboarding, discovery, participation, safety and notifications. Measure outcomes by language and cross-language participation without creating three isolated products.

## Minimum proof loop
Before roadmap breadth, prove: relevant discovery → trustworthy arrival/social context → meaningful intent → credible attendance → repeat useful IRL action. Social graph formation is optional evidence, not a required user outcome.

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
The domain supports PUBLIC_VENUE, OUTDOOR and PRIVATE_HOME; consumer V1 exposes **PUBLIC_VENUE and OUTDOOR only**. PRIVATE_HOME is architecturally represented for future compatibility but user-facing rollout is prohibited until a separate trust/safety/legal/operations evidence gate. No online/hybrid placeholder in Architecture 1.3.

## Admission vs social participation
AdmissionMode: NONE, FREE, EXTERNAL_TICKET, future feature-gated INTERNAL_TICKET.
ParticipationMode: OPEN, APPROVAL_REQUIRED, INVITE_ONLY, DISABLED.
Waitlist applies to Meet-managed social capacity, not external ticket inventory.

A concert may be EXTERNAL_TICKET + OPEN, showing both `Tickets` and `I'm going` as distinct actions.

## Discovery
Primary low-choice surfaces include Today, Weekend, Nearby, Free and Saved/Plans; broader search/filter/map remains available. Event cards prioritize occurrence time/location/distance, source/organizer, admission, language and useful social context only when it helps the decision. Never use `0 going` as negative social proof.

Public web/event/category/organization pages provide real value without signup and are indexable where appropriate. Registration is requested at the first action that genuinely needs identity, then the original action resumes.

## Event detail and arrival confidence
The occurrence page is the center of the consumer product. Prioritize: title, time, location/distance, price/admission, language, concise description, suitability/context, accessibility where known, organizer/source, truthful social context and clear primary actions.

Test structured `solo-friendly` / `newcomer-friendly` information, but never infer or display it without defensible evidence. Arrival information should answer practical uncertainty: where to meet, how to recognize the host/group, what happens first and other concise facts that make arriving alone easier.

## Progressive trust
Public browsing requires no phone verification. Save/account actions use the minimum identity necessary. Social participation may require stronger verification only when justified by abuse/risk evidence. Organizer, private-home and other high-risk capabilities use progressively stronger controls. Do not front-load trust friction before value.

## Event creation
Category → title/description/languages → one-time/recurrence → physical public place → admission → Meet participation/capacity/waitlist → eligibility → media → safety → preview/publish. Recurrence writes template + recurrence; materializer generates occurrences.

## Participation / company finding / chat
Occurrence-targeted, idempotent and capacity-safe. `Pod` may remain a domain term but is not required consumer vocabulary. V1 UI defaults to plain validated actions such as `Find company` / `Join group` in fi/en/ru.

Social communication is occurrence-scoped for the proof loop. No random/open DM. Persistent connection/DM UX is evidence-gated, mutual and secondary to helping users take another useful IRL action.

## Attendance and recommendations
Attendance evidence may combine check-in, host, peer, post-event confirmation or equivalent reconciled signals; no continuous tracking. Do not make routine attendance depend on a high-friction ceremony when lower-friction credible evidence is sufficient.

Credible attendance/repeat evidence is the strongest recommendation signal. Users can reset/pause personalization and exclude activity from recommendation learning. Public trust uses structured aggregates/badges only where evidence supports them; no public human stars/free-form negative review scores.

## Accessibility
Accessibility is a product requirement, not only QA: scalable text, screen-reader semantics, sufficient targets/contrast, reduced-motion support, keyboard-accessible web, non-map location alternatives and no color-only meaning. Event-level accessibility facts (for example wheelchair access, seating, accessible toilet where reliably known) should be structured and useful in discovery/detail rather than buried in prose.

## Private home
Security/domain support remains specified, including exact-location isolation/encryption, but **PRIVATE_HOME is NOT V1** and must not appear in normal consumer creation/discovery. Future rollout requires explicit safety, moderation, operations, legal/privacy and user-evidence approval.

## Organizations
UNCLAIMED→CLAIM_PENDING→VERIFIED→SUSPENDED/CLOSED. Domain roles may include OWNER/ADMIN/EVENT_MANAGER/MODERATOR/ANALYST/BILLING, while V1 UI implements only roles needed by validated organizer workflows.

B2B hypotheses are tested early. Qualified reach, attendance and repeat-audience value matter more than feature count.

## Mobile/reliability
Old supported clients remain compatible; push/realtime are not truth; imminent high-impact state revalidates server truth.

## Monetization
Free supply acquisition → promoted-event/Org Pro experiments when organizer evidence supports them → affiliate tickets where terms allow. Native ticketing requires separate post-PMF legal/payment review. Consumer premium must never paywall core social participation.

## Growth discipline
Liquidity is measured as a multidimensional marketplace (`city × category/intent × time × language compatibility × radius/area`), not city MAU alone. Expansion follows `business/CITY_LIQUIDITY_MODEL.md`; spend follows attendance/repeat economics, not installs.

## Capital-efficiency discipline
Architecture preserves seams for future scale without forcing services/features active pre-PMF. `architecture ready` is not `build/deploy now`. Validation contracts override completeness-seeking.

## Deferred
Minors; online/hybrid; consumer PRIVATE_HOME; open/random DMs; stories/reels; voice/video; persistent general Groups; broad social/follower graph UX; sophisticated reputation/gamification; in-house KYC; custom ML before data quality/evidence; native ticket marketplace before PMF; advanced Org Pro breadth; consumer premium affecting core participation; active multi-region/service extraction without measured need.