# FRONTEND — Engineering rules

## Applications
- `apps/mobile`: React Native + Expo + Expo Router.
- `apps/web`: public consumer web, Next.js.
- `apps/b2b`: organization dashboard, Next.js.
- `apps/admin`: isolated staff app, Next.js.

## State
- Server state: TanStack Query.
- Small local UI state: Zustand only where React/navigation state is insufficient.
- Forms: React Hook Form + shared Zod schemas.
- Do not mirror server entities into a global client store.

## API/contracts
Generated typed client from OpenAPI/shared contracts. No guessed response shapes.
Mobile request metadata includes platform/app version/build/runtime/capabilities through shared client infrastructure.
Follow `CLIENT_COMPATIBILITY.md`; do not assume latest app and backend deploy together.

## Event model in UI
UI consumes separate fields for:
- Event canonical identity;
- selected EventOccurrence;
- Admission (`Tickets/Free/...`);
- Meet social participation (`Join/Request/Waitlist/...`).

Never recreate a single `joinMode` that treats `EXTERNAL_TICKET` as social participation state.

## High-impact revalidation
Cached lists/details may render quickly, but before join/waitlist acceptance/check-in/exact private address and other high-impact actions the client uses current server truth. Push/WebSocket cannot mark a mutation successful by themselves.

## Design implementation
- Tokens originate `design/tokens.json` via `packages/ui`.
- No raw ad-hoc visual system.
- Shared primitives, not giant cross-platform screens.
- Event imagery/activity context has higher hierarchy than person browsing.

## Mobile navigation
Home, Map, Create, Chats, Profile. Labels visible. Create may be visually emphasized but remains accessible navigation/action.

## Deep links
Canonical HTTPS URLs are primary share links. Expo Router maps verified iOS Universal Links / Android App Links to Event/Occurrence/Organization screens. See `DEEP_LINKS_SEO.md`.

## Async/offline states
Every async screen supports loading, refreshing, empty, partial-error/stale and full-error states.
Offline browsing may use cached data; mutations never pretend durable success without server confirmation unless explicitly designed optimistic behavior is reversible/safe.

## Lists/maps/images
- virtualize growing lists;
- responsive image derivatives/placeholders;
- avoid layout shift;
- map requests viewport clusters/pages; never load nationwide events client-side.

## Realtime
Follow `REALTIME.md`. Clients expect disconnect/reconnect, reauth/resubscribe and REST recovery. Presence/typing are approximate and disposable.

## Accessibility
- semantic labels/roles;
- dynamic text scaling;
- minimum target 44pt iOS / 48dp Android, shared token 48 logical px where practical;
- WCAG 2.2 AA web contrast/semantics;
- no color-only meaning;
- keyboard/focus web/B2B/admin;
- reduced motion.

## Visual verification
User-facing PR affecting layout provides automated/agent-captured screenshots for defined reference states/viewports and follows `design-docs/visual-qa.md`.

## Performance budgets
Initial goals:
- avoid blocking JS work >50ms in normal interaction paths;
- smooth list scroll on target mid-range devices;
- public web LCP <2.5s p75 when feasible;
- incremental image/card loading;
- bounded map/search results.

## Mobile release
Follow `MOBILE_RELEASES.md`; no production-only behavior depends on an OTA update being received immediately.

## Frontend anti-patterns
- business authorization in UI only;
- giant screen components;
- duplicate DTOs;
- unbounded `useEffect` orchestration;
- inline arbitrary design values;
- icon-only critical action without accessible name;
- fighting native navigation conventions;
- treating push/realtime as source of truth;
- assuming old supported clients do not exist.
