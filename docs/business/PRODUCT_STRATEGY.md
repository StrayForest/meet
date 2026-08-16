# Product strategy — from event discovery to IRL social graph

## Strategic thesis
Meet is not trying to win by being the largest event directory. Events are the context that makes real-world social participation easier, safer and less awkward.

The long-term product thesis is: **Meet becomes a privacy-governed social graph of who actually does things with whom, anchored in real physical activities and organizations.**

The value chain is:
`physical supply → relevant discovery → social confidence → commitment → IRL attendance → repeat co-attendance/connections → communities/organizers → better local supply`.

## Evidence over self-description
Meet should not require people to tell us what they supposedly like before receiving value. Declared interests are low-cost claims and may differ from actual behaviour. Cold-start discovery is driven by explicit filters/search/session intent, time, travel tolerance, language and event quality.

Personalization is learned progressively from privacy-safe evidence, with **credible attendance and repeat participation weighted much more strongly than clicks**. Join/save behaviour is useful but weaker; impressions are not preference evidence. Users retain explicit filters and personalization controls so observed history never becomes a cage.

Do not expose inferred interests as public identity labels unless the user explicitly chooses to do so.

## Wedge vs destination
Launch wedge: help an adult answer `what can I do nearby, who is going, and how can I participate?`.

Long-term destination: a trusted local participation network where event, attendance, connection and organizer graphs improve discovery and make future participation easier.

Meet must not become a passive calendar with social decoration. If social mechanics do not materially improve attendance or repeat behaviour, simplify or change the thesis.

## Minimum proof loop
Before expanding feature breadth, prove this loop in Helsinki:
1. relevant physical event is discovered;
2. user has enough **social confidence** to act;
3. user joins/saves/commits;
4. user actually attends;
5. user repeats participation and/or forms a useful connection.

The minimum proof loop has priority over advanced reputation, broad B2B analytics, native ticketing, custom ML and additional social surfaces.

## Social confidence
Social confidence is the user's decision-stage belief that joining will be comfortable, understandable and safe enough — especially when arriving alone. It is not a vanity score.

Measure it through decision behaviour and lightweight reason capture: social context viewed, Pod/group opened, participant/host trust context viewed, join completed/abandoned, and optional reasons such as `not enough information`, `no suitable company`, `language`, `too far`, `too expensive`, `timing`, `safety/comfort`.

Never optimize social confidence through fake urgency, fake attendee counts or manipulative popularity cues.

## Product prioritization test
A proposed feature is high priority only if it materially improves at least one of:
- relevant opportunity density;
- discovery → social confidence;
- social confidence → intent;
- intent → attendance;
- attendance quality/safety;
- repeat IRL participation;
- endogenous supply/liquidity;
- organizer willingness to pay without degrading consumer value.

Features that mainly increase browsing time, vanity engagement or architecture sophistication are not strategic by default.

## Social mechanics
Pods, attendee context, chat, connections and reputation are means, not goals. Keep them only when evidence shows they reduce participation friction, improve trust, increase attendance or improve repeat behaviour.

User-facing terminology should explain the action before teaching Meet jargon. `Pods` may remain an internal/domain name; UI copy should be tested against plain concepts such as `find company` / `join a group` in fi/en/ru.

No random DMs and no dating positioning.

## Public web and progressive identity
Public event/organization/category/city pages are both useful product surfaces and a distribution engine. Let users see real value before demanding a profile. Ask for identity only when the requested action needs it, then resume that action after onboarding.

## Social proof
Imported event supply and Meet social supply are different truths. Never turn lack of Meet activity into prominent negative social proof. `0 going` is not a useful badge. Show social context when it helps a decision; otherwise show the event without pretending or shaming low density.

## Private homes
PRIVATE_HOME remains architecturally supported but rollout-limited/flagged. Public venues and outdoor activities are sufficient to prove PMF. Expansion requires explicit trust/safety evidence; do not accept avoidable liability merely to increase feature completeness.

## Product expansion rule
Do not respond to weak conversion/attendance/repeat by adding unrelated features. First investigate relevance, liquidity, social confidence, cohort choice, trust, event quality, commitment UX and positioning. Feature breadth follows evidence.