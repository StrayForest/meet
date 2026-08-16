# Assumption register

This is the pre-PMF uncertainty ledger. Architecture readiness is not evidence that a product assumption is true.

## Rules
- Every high-cost product assumption has an owner, confidence, evidence and cheapest credible test.
- Synthetic focus groups, expert audits and competitor analogies create hypotheses; they do not count as measured user evidence.
- High-cost/low-confidence assumptions must be tested before dependent feature breadth.
- When evidence contradicts a roadmap assumption, change the roadmap before defending sunk work.

| ID | Assumption | Confidence | Cost if wrong | First credible test | Gate |
|---|---|---|---|---|---|
| A1 | Helsinki users have enough relevant physical-event supply | medium | critical | supply map + real discovery cohort | before broad acquisition |
| A2 | Users value discovering events through Meet beyond existing channels | low | critical | concierge/public discovery experiment | before scaling discovery UI |
| A3 | Going alone/no suitable company is a material participation barrier | low | critical | interviews + reason capture + concierge company matching | before social breadth |
| A4 | Social context/company finding increases real attendance | low | critical | controlled comparable-cohort experiment | before persistent social graph |
| A5 | Event-scoped group/chat is sufficient to reduce social friction | low | high | lightweight occurrence group pilot | before richer messaging |
| A6 | Persistent connections improve future IRL participation | very low | high | post-event opt-in + repeat analysis | before graph-centric UX |
| A7 | Users tolerate progressive verification when risk/action explains it | low | high | funnel experiment by action | before broad phone/ID gates |
| A8 | Organizer/venue partners will seed supply and distribute Meet | low | critical | Helsinki partner pilot | before paid growth |
| A9 | Imported supply is fresh/accurate enough to create trust | medium | high | freshness/cancellation audit | before nationwide discovery claims |
| A10 | fi/en/ru launch support improves reachable liquidity without destructive fragmentation | medium | high | cohort/cross-language analysis | continuous |
| A11 | Attendance evidence improves recommendations enough to justify behavioural data use | medium | medium | rules-based offline/online comparison | before custom ML |
| A12 | Users want arrival-confidence information | medium | medium | event-detail test/interviews | before complex social proof |
| A13 | Organizer willingness to pay exists for qualified reach/attendance/repeat value | low | high | pricing/WTP interviews + pilots | before Org Pro breadth |
| A14 | PRIVATE_HOME can eventually be operated safely enough to justify risk | very low | critical | separate safety/legal/ops review | explicitly NOT V1 |

## Update format
For each meaningful experiment append: date, cohort/cell, method, sample quality, result, confidence change, decision and link to evidence. Never replace failed evidence with a weaker proxy.