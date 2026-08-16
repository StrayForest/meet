# Product spec — Community event creation — Architecture 1.3

User creates a safe physical activity without event-management jargon.

## V1 flow
Wizard: category/title → one-time or supported recurrence → physical place (**Public Venue / Outdoor only**) → admission → Meet participation/capacity/waitlist → audience/language → media/accessibility → preview/safety → publish.

Publishing a recurring Event creates/updates EventOccurrenceTemplate plus EventRecurrence; materializer generates concrete occurrences. Template includes duration and default physical location/policies. Single occurrence overrides do not rewrite series defaults.

## Scope boundary
`PRIVATE_HOME` may remain represented in the domain/schema for future safety-compatible evolution, but **it is not a V1 creation option and must not be rendered in consumer creation UI**. Future enablement requires the separate validation/safety/legal/operations gate defined by `validation/MVP_BOUNDARY.md` and the relevant safety ADR/specs.

External ticket is a separate action; never social join mode. V1 has no online/hybrid creation.

## UX
Creation should explain only concepts needed for the current step. Accessibility facts should be structured where the creator can reliably provide them. Do not expose `EventOccurrenceTemplate`, `ParticipationMode` or other domain jargon in ordinary consumer copy.

## Acceptance
Idempotent publish; recurrence/DST/template tests; unsupported recurrence rejection; admission/participation independence; cancellation notifications; accessibility fields survive recurrence/occurrence overrides; no PRIVATE_HOME option in V1 consumer creation; any private-location code path remains unreachable from V1 UI/API policy unless explicitly enabled by a later accepted gate.