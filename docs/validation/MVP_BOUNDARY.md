# MVP boundary — minimum proof product

This file is an implementation gate. Pre-PMF, Codex/engineers must not implement deferred scope merely because architecture supports it.

## User promise
**Find something worth doing nearby. If you do not want to go alone, find company.**

## Minimum consumer surface
- useful public discovery before signup;
- search/filters and low-choice `Today/Nearby/Weekend/Free` style discovery;
- event/occurrence detail with time, place, price/admission, language, organizer/source and accessibility where known;
- arrival-confidence information where available;
- save;
- `I'm going`/participation where enabled;
- `Find company` / event-scoped small-group flow where enabled;
- event-scoped chat sufficient for coordination;
- minimal profile and progressive identity/trust;
- My plans: saved/going/past;
- report/block/safety controls;
- lightweight attendance confirmation/evidence reconciliation;
- simple evidence-based recommendations with explicit reset/pause/exclusion controls.

## Minimum organizer surface
- create/edit/cancel public-venue/outdoor event;
- recurrence only to the accepted domain subset;
- participation/capacity/waitlist where needed;
- participant management and basic moderation;
- attendance confirmation;
- useful source/organization identity.

## Minimum admin/ops surface
- reports/cases/actions required for launch safety;
- users/events/source health;
- ingestion freshness/cancellation monitoring;
- experiment/PMF/liquidity observability;
- staff controls required by security policy.

## UX constraints
- Do not require hobbies/interests/gender to obtain discovery value.
- Do not expose `Pod` as required consumer vocabulary; prefer validated action language.
- Do not show `0 going` as negative social proof.
- Do not require phone verification for public browsing.
- Do not turn attendance confirmation into a mandatory high-friction ceremony when lower-friction credible evidence works.
- Do not optimize for time-in-app.

## Explicitly NOT V1 / evidence-gated
- consumer PRIVATE_HOME rollout;
- native ticketing/marketplace;
- consumer premium that affects core social participation;
- custom ML recommendation stack;
- sophisticated public reputation/badge systems;
- public human star scores;
- broad persistent social graph/follower UX;
- persistent communities/groups unrelated to a concrete occurrence;
- random/open DMs;
- stories/reels/voice/video/social feed;
- advanced Org Pro analytics/role UX beyond pilot need;
- gamification whose primary purpose is engagement;
- active multi-region architecture or service extraction without measured need.

## Exit gate
Scope may expand only when the relevant assumption in `ASSUMPTION_REGISTER.md` and PMF/liquidity gate has credible evidence. An accepted architecture design alone is not an exit criterion.