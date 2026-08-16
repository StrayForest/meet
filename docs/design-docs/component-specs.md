# Component specifications

All components support light/dark themes, keyboard/screen-reader semantics where applicable and FI/EN/RU text expansion.

## Button
Variants: Primary, Secondary, Ghost, Danger, Text. Default height 48; compact 40 only outside critical mobile actions. States: default/pressed/focus/disabled/loading. One Primary per local decision area.

## EventCard
Variants: standard list, compact horizontal, map-selected.
Required hierarchy follows selected EventOccurrence: time, title, public place/distance, price/admission, language and only decision-useful trust/social context.

EventCard supports **two independent action concepts**:
- `ParticipationAction`: Join / Request / Waitlist / Joined / View;
- `AdmissionAction`: Get tickets / Register / Free indicator when relevant.

Do not collapse them into one enum/CTA. External admission must not masquerade as Meet participation. Social counts are optional: never render `0 going` as negative proof and do not make facepiles required card chrome.

Card click opens detail; nested actions remain accessible without conflicting tap targets.

## FindCompanyAction
Consumer-facing action that may map to the internal Pod/group domain. Copy uses validated plain language (`Find company` / `Join group` equivalents), never requires users to learn `Pod`. The action is available only when the occurrence/company-finding policy allows it.

## ArrivalConfidenceBlock
Structured optional block for public meeting point, host/group recognition, first-minutes expectation, reliable accessibility facts and defensible solo/newcomer context. Unknown data is omitted or marked unknown, never invented.

## OccurrenceSelector
For recurring Event detail, compact accessible list/chips of upcoming occurrences showing date/time and material location differences. Selecting an occurrence refreshes admission/participation capacity/location truth. Never imply series-wide address/capacity when occurrence overrides exist.

## AdmissionAction
External admission opens validated trusted external URL. Visual/copy never implies ticket purchase state unless verified integration knows it. External-link affordance is explicit.

## ParticipationAction
Derived from ParticipationMode/current participation/capacity/waitlist. Before final mutation, high-impact state is revalidated server-side.

## Avatar / Facepile
Sizes 24/32/40/56/80. Facepile, when genuinely useful, shows max 3 visible + `+N` with accessible participant count. It is not mandatory social proof.

## Badge
Official, Verified organizer, Community, Imported/source, Identity verified, Age/audience. Factual, not prestige gamification. `Solo-friendly`/newcomer/accessibility signals require reliable structured evidence and are not prestige badges.

## Chip
Filter/selectable/status. Selected uses fill + icon/label difference, not color alone.

## Input
Persistent label; placeholder only example. Nearby error text; locale-aware date/time.

## SearchField
Clear/search semantics; debounced/cancelled requests.

## Sheet/Modal
Bottom sheet for secondary mobile decisions; full-screen route for complex forms. Destructive/safety actions use explicit labels.

## Banner/Alert
Info/success/warning/danger. Material event update/cancellation is persistent banner, never toast-only.

## Toast
Lightweight confirmation only; never sole cancellation/safety/payment/important-error surface.

## Skeleton
Predictable geometry; avoid indefinite spinner-only screens.

## EmptyState
Explain why + one useful action. Discovery can widen radius/date or offer creation where appropriate.

## Error/StaleState
Human explanation + retry. Preserve form data. When event truth cannot be verified, display stale/degraded state rather than confident join/ticket/location information.

## Bottom navigation
V1 has **4 destinations**: Discover, My plans, Social, Profile. Each uses icon + label and safe-area handling. Map is a discovery mode; Create is contextual rather than a permanent primary destination.

## Event status
Cancelled/removed/full/waitlisted/approval/confirmed each have text + non-color signal.

## Safety/trust block
Reusable trust/safety facts for join/host/report flows. Normal verified state is calm, not fear-red. PRIVATE_HOME-specific UI is future-gated and must not appear in normal V1 consumer surfaces.

## Map pin
Neutral brand/category pin, selected distinct, clusters count. V1 map contains PUBLIC_VENUE/OUTDOOR occurrences only; no private-home pin is rendered pre-gate.