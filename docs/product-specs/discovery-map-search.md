# Product spec — Discovery, map and search — Architecture 1.3

User finds a credible **physical** activity for now/today/weekend quickly, including before account creation where the data is public.

Eligible V1 supply: PUBLIC_VENUE, OUTDOOR, PRIVATE_HOME only. Online/hybrid is not a placeholder capability. Broad PRIVATE_HOME rollout remains flag-gated.

## Home/discovery
Home: city/area, search, quick time chips, **What should I do today?**, Now/For You/Today/Weekend/Nearby. Event card represents concrete EventOccurrence while retaining Event identity.

`What should I do today?` is a low-choice mode: return a small diverse set of actionable options using current time, travel tolerance, language, explicit filters/session intent, quality/freshness, admission and useful social context. It must work without a historical profile.

## Ranking and learning
Cold start does **not** require declared hobbies/interests. Rank after eligibility using current query/filter/session intent, time, travel cost, event languages, quality/trust, freshness/diversity and useful social availability.

As evidence accumulates, recommendations may use privacy-safe behaviour with explicit signal strength:
1. credible attendance/repeat attendance and successful participation — strongest positive evidence;
2. join/save/Pod participation — medium evidence;
3. repeated opens/search/filter/category behaviour — weak/short-lived evidence;
4. mere impression — near-zero evidence.

Do not infer that one accidental click equals a durable preference. Apply recency/decay and exploration/diversity so the feed does not trap users in a narrow history bubble. Users must always be able to search/filter outside inferred affinity and reset/limit personalization.

Optimize ranking toward successful attendance/repeat, not clicks or time-in-app.

## Social confidence
Social context exists to answer: `Will I feel comfortable going, especially alone?` Useful signals include privacy-safe participant count/context, event/host trust, language, Pod/group availability, clear meeting point/process and whether newcomers/solo participants can join.

Never fabricate social proof. Never render `0 going` as a prominent negative signal on imported/low-density cards. If social density is not useful, omit/de-emphasize the social count and present the event on its own merits. Surface social modules when they become decision-useful.

Admission/ticket and Meet social participation are separate display/rank signals. `I'm going` must unlock clear user value (social context/Pod eligibility, relevant updates/reminders, attendance flow) rather than acting as unpaid data entry.

## Low density
Expand travel window/date, include licensed imported physical supply, explain widened area and offer create/host options. Never fabricate/hide distance or people. Measure empty-social-card exposure separately from ordinary event supply.

## Travel model
List and Map are first-class. Support radius **and** human travel tolerance where feasible (for example `within 30 min`), because Finnish users outside dense cores may reason in travel time rather than kilometres. Never imply precise travel-time accuracy when routing data is unavailable.

## Map/search
Map: bounded viewport clusters; private-home public coarse point only. Search: FTS/trigram/structured filters. Event-language filter is independent of interface language. High-impact actions revalidate current occurrence truth.

## Acceptance
Useful unauthenticated discovery where public; filters never depend on a declared-interest profile; zero social density does not become negative social proof; recommendation explanations/settings allow user control; social confidence and travel tolerance are measurable product concepts.