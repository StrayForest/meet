# Product spec — Discovery, map and search — Architecture 1.3

User finds a credible **physical** activity for now/today/weekend quickly, including before account creation where the data is public.

**Consumer V1 eligible place supply: PUBLIC_VENUE and OUTDOOR only.** PRIVATE_HOME may exist in the domain for future compatibility but must not appear in normal V1 discovery/search/map/creation. Online/hybrid is not a placeholder capability.

## Home/discovery
Primary discovery is low-choice and action-oriented: Today, Nearby, Weekend, Free and `What should I do today?`, with broader search/filter/map available. Event cards represent a concrete EventOccurrence while retaining Event identity.

`What should I do today?` returns a small diverse set of actionable options using current time, travel tolerance, language, explicit filters/session intent, quality/freshness, admission and useful social/arrival context. It must work without a historical profile.

## Ranking and learning
Cold start does **not** require declared hobbies/interests. Rank after eligibility using current query/filter/session intent, time, travel cost, event languages, quality/trust, freshness/diversity and useful social availability.

As evidence accumulates, recommendations may use privacy-safe behaviour with explicit signal strength:
1. credible attendance/repeat attendance and successful participation — strongest positive evidence;
2. join/save/company-finding participation — medium evidence;
3. repeated opens/search/filter/category behaviour — weak/short-lived evidence;
4. mere impression — near-zero evidence.

Do not infer that one accidental click equals a durable preference. Apply recency/decay and exploration/diversity. Users must always be able to search/filter outside inferred affinity and reset/pause personalization or exclude an activity from recommendation learning.

Optimize ranking toward Opportunity Success, successful attendance and repeat, not clicks or time-in-app.

## Arrival and social confidence
Decision support should answer: `Is this worth going to, and will I understand/feel comfortable arriving, especially alone?`

Useful truthful signals may include:
- organizer/source trust;
- event language;
- public venue/meeting-point clarity;
- accessibility facts where reliable;
- concise arrival instructions / how to recognize the host/group;
- whether newcomers/solo attendees can reasonably join;
- privacy-safe participant/social context;
- `Find company` availability.

`Solo-friendly` or newcomer signals must be supported by organizer-provided facts or sufficiently reliable evidence; never fabricate them.

Never render `0 going` as a prominent negative signal. If social density is not decision-useful, omit/de-emphasize it and present the event on its merits.

Admission/ticket and Meet participation are separate. `I'm going` must unlock clear value (relevant updates, company-finding eligibility/context, attendance flow) rather than acting as unpaid data entry.

## Low density
Expand travel window/date, include licensed imported public physical supply, explain widened area and offer create/host options where appropriate. Never fabricate/hide distance or people. Measure empty-social-card exposure separately from ordinary event supply.

## Travel model
List and Map are first-class discovery modes, but Map does not need to be a dedicated primary tab. Support radius **and** human travel tolerance where feasible (for example `within 30 min`), because users outside dense cores may reason in travel time rather than kilometres. Never imply precise travel-time accuracy when routing data is unavailable.

## Map/search
Map: bounded viewport clusters for public/outdoor occurrences. Search: FTS/trigram/structured filters. Event-language filter is independent of interface language. High-impact actions revalidate current occurrence truth.

## Acceptance
Useful unauthenticated discovery where public; no declared-interest dependency; no PRIVATE_HOME in V1 discovery; zero social density is not negative social proof; arrival/accessibility/company-finding context is structured where reliable; recommendation controls are available; Opportunity Success/social confidence/travel tolerance are measurable concepts.