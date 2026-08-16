# Assumption register

This is the pre-PMF uncertainty ledger. Architecture readiness is not evidence that a product assumption is true.

## Rules
- Every high-cost product assumption has an accountable functional owner, confidence, recorded evidence status and cheapest credible test.
- `UNMEASURED` means no direct user/behaviour evidence has been recorded in this register yet; it must never be presented as validation.
- Synthetic focus groups, expert audits and competitor analogies create hypotheses; they do not count as measured user evidence.
- High-cost/low-confidence assumptions must be tested before dependent feature breadth.
- When evidence contradicts a roadmap assumption, change the roadmap before defending sunk work.
- Every evidence update records date, cohort/cell, method, sample quality, result, confidence change, decision and a durable evidence link/reference.

| ID | Assumption | Owner | Confidence | Cost if wrong | Evidence status | First credible test | Gate |
|---|---|---|---|---|---|---|---|
| A1 | Helsinki users have enough relevant physical-event supply | Supply/Product | medium | critical | UNMEASURED | supply map + real discovery cohort | before broad acquisition |
| A2 | Users value discovering events through Meet beyond existing channels | Product | low | critical | UNMEASURED | concierge/public discovery experiment | before scaling discovery UI |
| A3 | Going alone/no suitable company is a material participation barrier | Product/Research | low | critical | UNMEASURED | interviews + reason capture + concierge company matching | before social breadth |
| A4 | Social context/company finding increases real attendance | Product/Analytics | low | critical | UNMEASURED | controlled comparable-cohort experiment | before persistent social graph |
| A5 | Event-scoped group/chat is sufficient to reduce social friction | Product | low | high | UNMEASURED | lightweight occurrence group pilot | before richer messaging |
| A6 | Persistent connections improve future IRL participation | Product/Analytics | very low | high | UNMEASURED | post-event opt-in + repeat analysis | before graph-centric UX |
| A7 | Users tolerate progressive verification when risk/action explains it | Trust/Product | low | high | UNMEASURED | funnel experiment by action | before broad phone/ID gates |
| A8 | Organizer/venue partners will seed supply and distribute Meet | Partnerships/Growth | low | critical | UNMEASURED | Helsinki partner pilot | before paid growth |
| A9 | Imported supply is fresh/accurate enough to create trust | Supply/Data | medium | high | UNMEASURED | freshness/cancellation audit | before nationwide discovery claims |
| A10 | fi/en/ru launch support improves reachable liquidity without destructive fragmentation | Product/Growth | medium | high | UNMEASURED | cohort/cross-language analysis | continuous |
| A11 | Attendance evidence improves recommendations enough to justify behavioural data use | Product/Privacy/Analytics | medium | medium | UNMEASURED | rules-based offline/online comparison | before custom ML |
| A12 | Users want arrival-confidence information | Product/Research | medium | medium | UNMEASURED | event-detail test/interviews | before complex social proof |
| A13 | Organizer willingness to pay exists for qualified reach/attendance/repeat value | B2B/Product | low | high | UNMEASURED | pricing/WTP interviews + pilots | before Org Pro breadth |
| A14 | PRIVATE_HOME can eventually be operated safely enough to justify risk | Trust/Safety/Legal | very low | critical | UNMEASURED | separate safety/legal/ops review | explicitly NOT V1 |

## Evidence log
Append one entry per meaningful experiment. Do not overwrite earlier evidence, including failed or contradictory results.

| Date | Assumption | Cohort/cell | Method | Sample quality | Result | Confidence change | Decision | Evidence reference |
|---|---|---|---|---|---|---|---|---|

## Review discipline
- The functional owner is accountable for keeping the row current; it does not imply one individual must execute every test.
- A confidence increase requires stronger evidence than the evidence already recorded.
- A product/architecture review may mark an assumption as risky but cannot change `UNMEASURED` to validated.
- Before a gate is opened, link the supporting evidence-log rows from the relevant exec plan or decision record.
