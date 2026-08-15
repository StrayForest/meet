# FRONTEND — Engineering rules

## Applications
- `apps/mobile`: React Native + Expo + Expo Router.
- `apps/web`: public consumer web, Next.js.
- `apps/b2b`: organization dashboard, Next.js.
- `apps/admin`: isolated staff app, Next.js.

## State
- Server state: TanStack Query.
- Small local UI state: Zustand only where React/local navigation state is insufficient.
- Forms: React Hook Form + shared Zod schemas.
- Do not mirror server entities into global client stores.

## API
Generated typed client from OpenAPI/shared contracts. No hand-written guessed response shapes. Boundary data is validated or comes from generated typed SDK contracts.

## Design implementation
- Tokens originate from `design/tokens.json` and are exposed through `packages/ui`.
- No raw hex colors, ad-hoc spacing or arbitrary radii in product screens except documented one-off media data.
- Shared primitives: Button, Text, Icon, Avatar, Badge, Chip, Card shell, Input, Sheet/Modal, Toast, Skeleton, EmptyState, ErrorState.
- Share tokens/primitives across platforms, not giant screens.

## Mobile navigation
Five persistent destinations: Home, Map, Create, Chats, Profile. Labels stay visible. Create may receive visual emphasis but must remain a normal accessible tab/action.

## Rendering rules
- Lists must virtualize once data can grow.
- Images use responsive derivatives and placeholders.
- Avoid layout shift.
- All async screens implement loading, refreshing, empty, partial-error and full-error states.
- Offline behavior is explicit; never pretend a mutation succeeded before durable confirmation unless the operation has designed optimistic semantics.

## Accessibility
- Semantic labels/roles.
- Dynamic text scaling.
- Minimum target 44pt iOS / 48dp Android; shared design token uses 48 logical px where possible.
- Contrast meets WCAG 2.2 AA.
- No color-only state meaning.
- Keyboard/focus support on web/admin/B2B.
- Respect reduced motion.

## Visual verification
Every user-facing PR affecting layout must provide automated or agent-captured screenshots for defined reference viewports and compare against `docs/design-docs/visual-qa.md`.

## Performance budgets
Initial goals:
- avoid blocking JS work >50ms in normal interaction paths;
- list scroll stays smooth on target mid-range devices;
- public web LCP target <2.5s p75 when feasible;
- image/card loading must be incremental;
- map must not load all national events client-side.

## Frontend anti-patterns
- business authorization in UI only;
- huge screen components without feature boundaries;
- duplicate API DTOs;
- unbounded `useEffect` orchestration;
- inline colors/spacing;
- icon-only critical actions without accessible label/tooltips where needed;
- custom navigation behavior that fights iOS/Android conventions.