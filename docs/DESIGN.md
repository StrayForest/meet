# DESIGN — Product design source of truth

## Status
**V1 DESIGN CONTRACT — APPROVED FOR IMPLEMENTATION.**

The visual system is original. Competitors are used to identify interaction patterns, not copied layouts, assets, branding or text.

## Design thesis
Meet should feel **calm, practical, trustworthy and lightly optimistic**. It must look like an activity product, not a dating app, nightlife app or content network.

### Priorities
1. Activity before profile.
2. User understands `what / when / where / who / how to join` in under a few seconds.
3. One primary action per decision surface.
4. Trust and safety are visible but not alarming.
5. Real human warmth comes mainly from event photography and attendee context, not decorative UI noise.
6. Accessibility and cognitive clarity are baseline requirements.
7. UI works for 18–70+ without an “older person” visual mode.

## Required reading for UI work
1. `design-docs/core-beliefs.md`
2. `design-docs/visual-language.md`
3. `design-docs/navigation-screen-specs.md`
4. `design-docs/component-specs.md`
5. `design-docs/accessibility-content-localization.md`
6. `design-docs/visual-qa.md`
7. `../design/tokens.json`

## Visual direction
- Light-first with system-driven dark mode.
- Restrained Nordic visual language: neutral surfaces, clear hierarchy, limited decoration.
- Event imagery has higher visual weight than avatar/profile imagery.
- Borders and spacing are preferred over heavy shadows.
- Icons are simple outline icons; labels remain visible for primary navigation.
- Avoid gradients as default UI decoration, glassmorphism, neon palettes, gamified streak visuals and swipe-card dating metaphors.

## Design governance
Design token or core interaction changes require a design decision entry in `design-docs/index.md`. Product experiments may change ordering/copy behind feature flags, but must preserve accessibility and component contracts.

## Human validation
The design is a market-informed hypothesis, not a claim about universal Finnish taste. Before broad Finland launch, run usability tests with Finnish residents across age groups and Finnish/English language use. Validate comprehension, trust, event scanning, join confidence and home-event safety.