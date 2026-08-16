# ADR-0003 — React Native/Expo mobile and controlled client lifecycle

Status: ACCEPTED
Date: 2026-08-16
Owner: Mobile architecture

## Context
Meet needs iOS/Android delivery with a small team, rapid iteration and explicit protection against backend changes breaking installed clients that cannot be upgraded immediately.

## Decision
Use React Native + Expo + Expo Router. Use EAS Build/Submit. OTA updates use EAS Update only within explicit `runtimeVersion` compatibility. Backend exposes documented client capability/version policy and supports a defined old-client window. Mobile privacy manifests/store disclosures and SDK inventory are release gates. App Attest/Play Integrity may be risk signals for abuse-prone actions but are never sole user-trust or permanent-ban authority.

## Alternatives
- Separate native Swift/Kotlin clients: rejected for initial team velocity/cost; reconsider only for measured platform-specific constraints.
- Flutter: viable but rejected to keep TypeScript shared skills/contracts across client/backend tooling.
- Unbounded OTA updates: rejected because native/runtime mismatches can brick clients.
- Force-update-by-default: rejected because store propagation/offline users make backend compatibility a reliability requirement.

## Compatibility impact
API and feature changes must account for supported installed versions. Client bootstrap/capabilities cannot be used to bypass product evidence gates. Native SDK additions change privacy/store disclosure scope and must be reviewed.

## Migration
P0 establishes Expo/EAS project, runtimeVersion strategy, generated API clients, SDK/privacy inventory and client bootstrap contract before user-facing dependence on OTA or forced updates.

## Rollback
A bad JS-compatible OTA is rolled back through the EAS channel. Native/runtime-incompatible changes require a new build and backend compatibility with older supported clients until policy permits deprecation. Framework replacement requires a superseding ADR and staged client migration.

## Validation
CI/build checks generated clients and TypeScript; release checks runtimeVersion compatibility, minimum/recommended client policy, privacy disclosures and old-client critical flows. Security tests verify device-integrity failure never becomes sole irreversible enforcement.

## Approval
Existing Architecture 1.3 ACCEPTED decision retained. Replacing the mobile framework, removing old-client compatibility or changing OTA safety semantics requires a superseding accepted ADR.
