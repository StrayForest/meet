# Threat model — Staff compromise and privileged access

Status: **V1 launch-required before production admin access**

## Scope
StaffAccount authentication, privileged admin/B2B-support access, moderation, OperationalFlags, data access, organization verification and production support operations.

## Assets
Privileged credentials, moderation/safety controls, sensitive user data, audit integrity, production configuration, operational flags and organization/account enforcement authority.

## Adversaries
External attackers stealing staff credentials, malicious insiders, compromised endpoints, session-cookie/token thieves and attackers abusing over-broad staff roles.

## Trust boundaries
Staff device ↔ staff identity provider ↔ admin application/API; staff authorization ↔ privileged command handlers; privileged commands ↔ audit/evidence store; production support tooling ↔ application/database/cloud control plane.

## Attack paths
- stolen staff password/session used to access admin;
- consumer account accidentally/implicitly granted staff authority;
- over-broad role allows unrelated data access or enforcement;
- compromised staff session changes safety-critical flags;
- staff impersonates a consumer or performs silent data mutation;
- attacker deletes/changes audit evidence;
- long-lived sessions survive role removal or incident response;
- shared credentials or console-only emergency changes evade repository/audit controls.

## Preventive controls
- separate StaffAccount identity domain from consumer identity;
- mandatory MFA, with phishing-resistant hardware/security keys preferred for privileged staff;
- least-privilege roles/scopes and deny-by-default authorization at every privileged command;
- short privileged sessions and immediate revocation after role/account changes;
- no silent consumer impersonation; support views/actions are explicit and audited;
- sensitive/safety-critical re-enable may require two-person approval when policy activates it;
- privileged mutations write append-only application audit records and independent evidence export where required;
- production infrastructure changes follow reviewed repository/IaC flow except documented emergency mitigation;
- direct database access is minimized, read-only by default for support, and never a substitute for application authorization.

## Detection
Alert on new staff role grants, MFA changes, unusual staff login/session geography where lawful, abnormal data reads/actions, repeated authorization denials, safety-critical flag changes, audit-chain/export failures and console/IaC drift.

## Response and recovery
Disable/revoke the staff identity and sessions, rotate affected credentials/secrets, freeze high-risk privileged actions if necessary, preserve/export audit evidence, review every action in the compromise window, restore altered state through explicit commands/migrations and perform post-incident access review.

## Residual risk
A sufficiently privileged insider may still cause harm before detection. Two-person controls reduce but do not eliminate collusion risk; independent logging and narrow scopes remain necessary.

## Validation mapping
Before production staff access, test staff/consumer identity separation, MFA enforcement, role revocation, authorization matrices, audit immutability, safety-critical flag approval semantics where enabled, session expiry/revocation and emergency access/runbook behavior.
