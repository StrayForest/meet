# DEVICE_APP_INTEGRITY — Anti-abuse signal, not social score

## Goal
Reduce fake-account farms, tampered-client abuse and high-risk automated actions without excluding legitimate users solely because an integrity API is unavailable.

## Providers
- iOS: Apple App Attest/DeviceCheck capability where feasible with Expo/native integration.
- Android: Google Play Integrity API.

## Use
Integrity is a risk signal for sensitive/high-abuse actions such as repeated signup, spam event creation, mass invites/messages, suspicious private-home hosting or account recovery. It is not proof of human trustworthiness.

## Server model
Store minimal attestation metadata/status, provider key/reference/public key where protocol requires, counters/timestamps and derived risk reason codes. Never send raw integrity payloads to general product analytics.

## Policy
- default product use should degrade gracefully when device attestation is unavailable unless an action is demonstrably high risk;
- do not permanently ban solely from one failed/unevaluated verdict;
- combine with account history, rate limits, verification and abuse signals;
- provider terms/data processing are included in mobile privacy review.

## Replay/request binding
Use provider-prescribed challenge/request-hash mechanisms for high-value assertions. Server validates nonce/request binding and expected app/package/bundle/signature identifiers.
