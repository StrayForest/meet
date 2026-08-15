# Design docs index

Status legend: APPROVED = implement; EXPERIMENT = feature-flag/test; RESEARCH = informative.

| Doc | Status | Purpose |
|---|---|---|
| `core-beliefs.md` | APPROVED | design principles |
| `competitor-finland-research.md` | RESEARCH | evidence and pattern selection |
| `visual-language.md` | APPROVED | color/type/spacing/imagery/motion |
| `navigation-screen-specs.md` | APPROVED | mobile/web screen architecture |
| `component-specs.md` | APPROVED | reusable UI behavior/states |
| `accessibility-content-localization.md` | APPROVED | WCAG, Finnish UX, copy/locales |
| `visual-qa.md` | APPROVED | screenshot/manual verification |

## Design decision log
- DD-001: event-first visual hierarchy; profiles are secondary.
- DD-002: restrained light-first Nordic UI with system dark mode.
- DD-003: blue primary action + teal trust/accent palette defined in `design/tokens.json`.
- DD-004: 5-tab mobile navigation Home/Map/Create/Chats/Profile.
- DD-005: map is secondary to feed, never the only discovery mode.
- DD-006: no swipe-card person browsing or dating visual metaphors.
- DD-007: event photo + factual metadata + single CTA is default card pattern.

A change to DD-001..007 requires an explicit design decision update with reason and validation.