# Threat model — Account takeover and session recovery

Status: **V1 launch-required**

## Scope
Consumer authentication, session issuance/refresh/revocation, account recovery, device/session management and identity-requiring actions. Public browsing remains available without an account.

## Assets
- account control and authenticated identity;
- active/refresh sessions and recovery credentials;
- email/phone identifiers where present;
- participation, chat, block/report and organizer permissions;
- privacy/export/deletion actions.

## Adversaries
Credential-stuffing actors, phishing attackers, malware/session thieves, abusive acquaintances with device access, automated bot operators and attackers exploiting recovery flows.

## Trust boundaries
Client ↔ auth provider ↔ Meet API; device secure storage ↔ application; recovery channel ↔ auth provider; API ↔ authoritative user/session state.

## Attack paths
- credential stuffing or password spraying against the upstream identity system;
- stolen refresh/session token replay;
- recovery flow takeover through weak email/phone recovery;
- session fixation or failure to rotate/revoke after recovery;
- CSRF/cross-origin misuse on cookie-backed web sessions;
- enumeration of registered accounts;
- old or compromised devices retaining sensitive access after password/recovery changes;
- abuse of an authenticated session to change recovery identifiers, export/delete data or impersonate an organizer.

## Preventive controls
- use a mature identity provider or equivalent hardened authentication implementation; do not invent password cryptography;
- short-lived access sessions and bounded refresh/session lifetime appropriate to client type;
- rotate/revoke sessions on credential or recovery events and expose session/device revocation where supported;
- rate-limit and abuse-protect login/recovery endpoints without blocking public discovery;
- generic responses for account-existence-sensitive recovery paths;
- secure mobile credential storage and secure/HttpOnly/SameSite cookie policy where cookies are used;
- CSRF protection for state-changing cookie-authenticated web requests;
- step-up authentication for high-impact account/security changes when risk warrants it;
- deny-by-default authorization independent of authentication success;
- do not treat device-integrity signals as sole permanent-ban or identity authority.

## Detection
Track abnormal login/recovery rate, repeated failed recovery, session reuse after revocation, sudden device/country changes where lawfully collected, high-impact account mutations and abuse-rate-limit triggers. Security telemetry must follow data-classification and retention rules.

## Response and recovery
Revoke sessions, disable compromised credentials through the identity provider, preserve minimized security/audit evidence, notify the user where appropriate, restore only verified account control and investigate privileged/organizer actions made during the compromise window.

## Residual risk
Phishing and compromise of the user's email/device cannot be eliminated. Stronger verification can reduce some attacks but creates conversion/privacy cost; it must be applied progressively to risk, not as a universal browsing gate.

## Validation mapping
Before authenticated V1 launch, tests must cover session revocation, recovery-state invalidation, authorization after account-state changes, rate limits, account-enumeration-safe responses, CSRF where applicable and old-client behavior. Add provider-specific abuse/recovery tests when the auth provider is selected.
