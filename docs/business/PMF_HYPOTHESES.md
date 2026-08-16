# PMF hypotheses — falsifiable business contract

Meet must prove that it changes offline social behaviour, not merely that users browse events.

## North-star outcome
**Successful IRL participation:** a user discovers an occurrence through Meet, expresses relevant intent where applicable, and attendance is later supported by credible reconciled evidence.

## Supporting outcome metrics
- **Opportunity Success Rate:** share of activated discovery users who find at least one opportunity they seriously consider within the measurement window.
- **Decision Success:** discovery-intent sessions ending in a meaningful action such as save, Meet participation, find-company intent or external-ticket action.
- **Solo-to-social attendance:** users who lacked suitable company, used Meet social context/company finding, and then show credible attendance evidence.
- **Repeat successful IRL participation:** successful participants who complete another successful IRL participation in the target window.

Raw event count, registrations, MAU, impressions and time-in-app are diagnostic metrics, not PMF.

## Launch hypotheses
Starting thresholds for Helsinki experiments; revise from evidence, never soften merely to declare success.

| ID | Hypothesis | Initial signal | Failure response |
|---|---|---|---|
| H1 | New activated users find enough relevant supply | >=80% see >=10 relevant upcoming physical opportunities in configured radius/7 days **and** Opportunity Success Rate is healthy | improve supply/category/ranking; do not optimize raw count alone |
| H2 | Discovery converts to meaningful intent | >=30% of activated users save/join/find-company/qualified-ticket-action within 7 days | fix relevance, trust, event detail, arrival confidence and onboarding |
| H3 | Intent becomes attendance | >=50% of Meet joiners show credible attendance evidence | fix reminders, commitment UX, event quality and no-show friction |
| H4 | Attendance creates repeat value | >=25% of first-time attendees complete another successful IRL participation within 30 days | fix outcomes, follow-up, density and cohort targeting |
| H5 | Social layer adds value beyond directory discovery | comparable opportunities with useful social context/company finding materially outperform controls on attendance and/or repeat | simplify/remove weak social mechanics |
| H6 | Going-alone friction is a meaningful wedge | find-company/arrival-confidence treatment measurably increases attendance for users reporting no suitable company | reposition social wedge if effect is weak |
| H7 | Persistent social graph is valuable | mutually desired post-event connections or repeat co-attendance predict additional IRL participation | keep persistent graph secondary or remove from core loop if unsupported |

## Cohorts and fragmentation
Segment by city, acquisition channel, language (`fi`, `en`, `ru`), event category, time window, travel radius/area, first-use intent and newcomer status only where voluntarily supplied/derived safely. Never hide weak cells inside city-wide averages.

## Hard escalation gate
Feature breadth beyond the minimum proof loop is blocked until adequate Helsinki liquidity and repeated experiments provide credible H2–H5 evidence. H7 is **not** required to validate the social-attendance product.

## Pivot / kill review
After at least three materially different controlled iterations in a cohort with adequate supply/liquidity and sufficient sample quality:
- persistent H2 failure → review discovery proposition/cohort/market;
- H2 works but H3 fails → review commitment, event quality and participation mechanics;
- H3 works but H4 fails → review whether Meet creates durable user value;
- H3/H4 work but H5 fails → simplify toward event discovery/attendance rather than forcing social mechanics;
- social company finding works but H7 fails → keep relationships event-scoped and do not force a social graph;
- persistent H2–H5 failure after the above → board-level pivot/stop decision before major new feature investment.

Exact sample-size/power requirements belong to each experiment plan; do not declare success/failure from tiny cohorts.

## Evidence discipline
Pair quantitative cohorts with interviews of attendees/repeaters, joiners who no-showed, browse-only users, users who considered going alone, users who used/rejected company finding, and organizers with strong/weak outcomes. Synthetic focus groups and expert reviews generate hypotheses; they are never recorded as measured user evidence.