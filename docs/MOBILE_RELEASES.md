# MOBILE_RELEASES — Expo/EAS production lifecycle

React Native + Expo. EAS Build for native binaries, EAS Submit for stores, EAS Update only for JS/assets compatible with explicit runtimeVersion. Store adoption is asynchronous; backend follows CLIENT_COMPATIBILITY.

Environments/channels: development, preview/staging, production. Production signing access is restricted; credentials are not normal app env vars.

OTA cannot change native dependencies/permissions/privacy declarations. A native/SDK/permission/data-collection change requires a new binary and `MOBILE_PRIVACY_COMPLIANCE.md` review.

App Attest/Play Integrity integration, if enabled, follows `DEVICE_APP_INTEGRITY.md` and must degrade according to risk policy rather than blocking all users blindly.

Rollback: compatible EAS Update rollback for JS; native emergency uses operational mitigation + expedited reviewed store binary. Release telemetry includes app/build/runtime/capabilities/crash health/update funnel.
