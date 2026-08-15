# Component specifications

All components support light/dark themes, keyboard/screen-reader semantics where applicable and FI/EN/RU text expansion.

## Button
Variants: Primary, Secondary, Ghost, Danger, Text. Default height 48; compact 40 only outside critical mobile actions. States: default/pressed/focus/disabled/loading. One Primary per local decision area.

## EventCard
Variants: standard list, compact horizontal, map-selected.
Required content hierarchy follows selected EventOccurrence. Skeleton matches final geometry.

EventCard supports **two independent action concepts**:
- `SocialAction`: Join / Request / Waitlist / Joined / View;
- `AdmissionAction`: Get tickets / Register / Free indicator when relevant.

Do not collapse them into one enum/CTA. When both are actionable, social action remains the primary Meet action and external admission is clearly secondary unless a specific screen context intentionally prioritizes purchasing.

Card click opens detail; nested actions remain accessible without conflicting tap targets.

## OccurrenceSelector
For recurring Event detail, compact accessible list/chips of upcoming occurrences showing date/time and material location differences. Selecting an occurrence refreshes admission/social capacity/location truth. Never imply series-wide address/capacity when occurrence overrides exist.

## AdmissionAction
External admission opens validated trusted external URL. Visual/copy never implies ticket purchase state unless verified integration knows it. External-link affordance is explicit.

## SocialAction
Derived from ParticipationMode/current participation/capacity/waitlist. Before final mutation, high-impact state is revalidated server-side.

## Avatar / Facepile
Sizes 24/32/40/56/80. Facepile max 3 visible + `+N`; accessible participant count. Missing image uses neutral fallback.

## Badge
Official, Verified organizer, Community, Imported/source, Identity verified, Age/audience. Factual, not prestige gamification.

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
Explain why + one useful action. Discovery can widen radius/date/create.

## Error/StaleState
Human explanation + retry. Preserve form data. When event truth cannot be verified, display stale/degraded state rather than confident join/ticket/location information.

## Bottom navigation
5 destinations, icon + label, safe-area aware.

## Event status
Cancelled/removed/full/waitlisted/approval/confirmed each have text + non-color signal.

## Safety/trust block
Join/private-home/host reusable pattern: verification facts, address policy, report/share-plans. Normal verified state is calm, not fear-red.

## Map pin
Neutral brand/category pin, selected distinct, clusters count. Private-home pin is deliberately coarse.
