# MOBILE_RELEASES — Expo production lifecycle

## Status
Fixed delivery architecture for `apps/mobile`.

## 1. Build/distribution
Use Expo EAS:
- EAS Build for signed iOS/Android binaries
- EAS Submit for App Store / Google Play delivery
- EAS Update only for compatible JS/assets hotfixes and controlled rollout

Do not build a custom signing/distribution pipeline unless an accepted ADR replaces EAS.

## 2. Channels/environments
At minimum:
- development builds
- preview/internal QA
- staging
- production

Production updates are isolated from preview/staging channels.

## 3. Native runtime compatibility
Every production binary has:
- semantic app version
- monotonically increasing iOS build number / Android versionCode
- explicit Expo/EAS `runtimeVersion`

OTA update is delivered only to compatible runtimeVersion. Native dependency/config changes require a new store binary/runtime.

## 4. OTA policy
EAS Update is allowed for:
- JS/TS bug fixes
- safe styling/copy/localization changes
- compatible asset changes
- feature-flagged JS behavior compatible with installed native runtime

OTA is not used to bypass store review for functionality that materially changes native permissions/capabilities or violates store rules.

High-risk OTA rollout:
1. internal/preview
2. small production cohort/channel rollout where supported by chosen release process
3. monitor crashes/core journeys
4. expand
5. rollback/republish known-good update if necessary

## 5. App-store binary policy
New binary required for:
- Expo SDK/native runtime upgrade
- new native module
- permission/entitlement changes
- signing/certificate/provisioning changes
- native config incompatible with old runtime
- changes that cannot be safely represented in current runtimeVersion

## 6. Client/server compatibility
Mobile release never assumes backend is deployed simultaneously. Follow `CLIENT_COMPATIBILITY.md`.
Backend must support currently supported store versions through the compatibility window.

## 7. Minimum supported version
Server bootstrap returns minimum/recommended app version and capability policy. Force update is reserved for:
- security/safety-critical incompatibility
- backend contract no longer safely supportable
- store/platform requirement

Do not use force update as routine release convenience.

## 8. Signing/secrets
- signing credentials managed through approved EAS/Apple/Google mechanisms
- repository contains no signing secrets
- access limited to release operators
- recovery/rotation procedure documented before public launch

## 9. CI release flow
PR: lint/typecheck/tests/build/dev checks.
Release candidate:
- deterministic version/build metadata
- EAS preview/staging build
- mobile E2E + visual/accessibility QA
- backend compatibility tests
- production build
- protected approval
- store submission
- post-release crash/core-journey monitoring

## 10. Emergency release
Runbook covers:
- disabling risky feature via first-party operational flag
- OTA hotfix when runtime-compatible
- store emergency binary when native change required
- rollback to known-good EAS update
- communication/support notes

## 11. Deep links
Production app must register verified Universal Links/App Links for canonical Meet web URLs. See `DEEP_LINKS_SEO.md`.

## 12. Telemetry
Every client request includes safe client metadata headers/fields as defined by API client package:
- platform
- app version
- build
- runtimeVersion/capabilities

Do not use mutable User-Agent parsing as the only compatibility signal.
