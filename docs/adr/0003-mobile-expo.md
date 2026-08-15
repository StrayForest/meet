# ADR-0003 — React Native/Expo mobile delivery and compatibility

Status: ACCEPTED

## Context
Meet is mobile-first, but a small team cannot maintain separate native iOS/Android implementations. Mobile clients update asynchronously through app stores, so backend compatibility must be designed explicitly.

## Decision
- React Native + Expo + Expo Router.
- EAS Build for signed binaries, EAS Submit for stores.
- EAS Update only for runtime-compatible JS/assets changes with explicit runtimeVersion.
- Backend supports a documented mobile compatibility window and capability negotiation.
- Force update is exceptional, not routine.
- Universal Links/App Links use canonical HTTPS Meet URLs.

## Alternatives considered
- Separate Swift/Kotlin apps: rejected for duplicated product/engineering cost at current stage.
- Flutter: viable, but rejected in favor of TypeScript end-to-end/shared contracts/tooling.
- Web/PWA only: rejected because push, maps, native UX and consumer retention justify native mobile packaging.

## Consequences
Positive: one mobile codebase, fast iteration, strong Codex/tooling compatibility.
Cost: Expo/EAS operational dependency; native-runtime changes still require store binaries; compatibility matrix must be maintained.
