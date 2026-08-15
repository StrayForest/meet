# Component specifications

All components support light/dark themes, keyboard/screen-reader semantics where applicable and FI/EN/RU text expansion.

## Button
Variants: Primary, Secondary, Ghost, Danger, Text.
Sizes: 48 default, 40 compact only outside critical mobile actions.
States: default, pressed, focus, disabled, loading.
Only one Primary in a local decision area.

## EventCard
Variants: standard list, compact horizontal, map-selected.
Required skeleton matches final geometry. Card click opens detail; nested CTA remains accessible and must not create conflicting tap targets.

## Avatar / Facepile
Sizes 24/32/40/56/80. Facepile shows max 3 visible avatars + `+N`; accessible text describes participant count. Missing image uses initials/category-neutral fallback.

## Badge
Types: Official, Verified organizer, Community, Imported/source, Identity verified, Age/audience. Badges are factual, not prestige gamification.

## Chip
Filter/selectable/status forms. Selected state uses fill + icon/label difference, not color alone. Horizontal filter rows remain scrollable with obvious start/end padding.

## Input
Persistent label; placeholder is example, never substitute for label. Error text appears near control and in summary for complex web forms. Date/time uses locale-aware picker/input.

## SearchField
Clear button, search icon, semantic search role on web. Search query does not commit on every keypress without debouncing/cancellation.

## Sheet/Modal
Mobile uses bottom sheet for contextual secondary decisions; full-screen route for complex forms. Destructive/safety decisions require explicit labels, not ambiguous “Yes/No”.

## Banner/Alert
Info, success, warning, danger. Persistent material event updates use banner, not transient toast.

## Toast
Only for lightweight confirmation; never the sole place for cancellation, safety, payment failure or important error information.

## Skeleton
Used for predictable network loading. Avoid indefinite spinner-only screens.

## EmptyState
Always explains why and offers one useful next action. Discovery empty state may widen radius/change date/create event.

## ErrorState
Shows human explanation + retry when safe. Preserve user form data after recoverable failures.

## Bottom navigation
5 destinations, icon + label, safe-area aware. Create visual emphasis cannot reduce label/target semantics.

## Event status
Cancelled/removed/full/waitlisted/approval/confirmed each have text label + icon/shape and consistent state copy.

## Safety/trust block
Reusable pattern on join/private-home/host surfaces: verification facts, address policy, report/share-plans actions. Do not create fear-heavy red UI for normal verified state.

## Map pin
Category-neutral brand pin by default; selected pin clearly distinct. Cluster contains count. Private-home pin is coarse and visually does not imply exact entrance/location.