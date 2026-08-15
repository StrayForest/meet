# Design docs index

Status: APPROVED = implementation contract; RESEARCH = evidence; EXAMPLE = visual implementation reference.

| Doc | Status | Purpose |
|---|---|---|
| `core-beliefs.md` | APPROVED | design principles |
| `competitor-finland-research.md` | RESEARCH | market/Finnish evidence |
| `visual-language.md` | APPROVED | color/type/spacing/imagery/motion |
| `navigation-screen-specs.md` | APPROVED | consumer IA/screens |
| `component-specs.md` | APPROVED | reusable UI states/components |
| `b2b-admin-specs.md` | APPROVED | organization/staff UX |
| `screen-state-matrix.md` | APPROVED | loading/empty/stale/error/restricted/live states |
| `accessibility-content-localization.md` | APPROVED | WCAG/copy/FI-EN-RU |
| `visual-qa.md` | APPROVED | screenshot/manual verification |
| `screen-reference-pack.md` | EXAMPLE | map to HTML page references under `design/screens/` |

## Visual page references
`../../design/screens/index.html` links to the complete example pack:
- consumer `M01–M88`;
- organization/B2B `B01–B18`;
- staff/Admin `A01–A20`.

The HTML pack is subordinate to APPROVED product/design/security contracts. Use one screen ID as a visual reference; do not bulk-read all mockups during implementation.

## Design decisions
DD-001 event-first hierarchy; profiles secondary.
DD-002 restrained light-first UI + system dark mode.
DD-003 Lake blue primary + Pine trust/accent tokens.
DD-004 mobile nav Home/Map/Create/Chats/Profile.
DD-005 map secondary to feed.
DD-006 no swipe-card/person-shopping dating metaphors.
DD-007 EventCard has one dominant **Meet social action**; when admission is separate (for example external ticket), an explicit secondary admission action may coexist and must never be conflated with social participation.
DD-008 recurring Event detail always makes the selected concrete EventOccurrence/time/location/capacity understandable.
DD-009 stale/critical event truth is shown honestly; UI does not let cached state imply successful join, valid ticket status or private-address access.

Changes to approved design decisions require rationale/validation recorded here or a dedicated design decision document. Design decisions cannot contradict accepted architecture/domain ADRs.
