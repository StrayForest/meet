# MOBILE_PRIVACY_COMPLIANCE — Store disclosures and SDK inventory

## Goal
Store privacy declarations must match actual app/SDK behavior.

## iOS
Maintain:
- `PrivacyInfo.xcprivacy` as required by current Apple rules/SDK usage;
- inventory of Required Reason APIs used by app/transitive SDKs;
- third-party SDK privacy manifest/signature review;
- App Store privacy details mapped to actual data collection/linking/tracking behavior;
- ATT only if product ever performs behavior that legally/platform-wise constitutes tracking; do not add ad tracking by default.

## Android
Maintain Google Play Data Safety declaration for all production/required testing tracks and keep it synchronized with SDK/provider behavior.

## Permission inventory
Every permission has owner, user-visible purpose and screen/flow: location, notifications, camera/photos and any future permission. Request just in time, not all at onboarding.

## SDK inventory
CI/build produces a reviewable mobile SDK/dependency list. Adding analytics, ads, identity, maps, crash or device-integrity SDK triggers privacy/security review and store disclosure diff.

## Release gate
A mobile release that changes collected/shared data, SDKs, permissions or required-reason APIs cannot ship until privacy manifest/store declarations are reviewed.
