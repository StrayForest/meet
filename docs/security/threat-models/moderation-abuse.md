# Threat model — Moderation and report abuse

Status: **V1 launch-required**

## Scope
User reports, moderation cases, evidence capture, staff actions, notices and appeals for consumer, event and social surfaces.

## Assets
Fair enforcement, reporter/subject privacy, evidence integrity, staff accountability, user access, appeal rights and safety-response availability.

## Adversaries
Users filing malicious or coordinated reports, targets attempting evidence deletion/tampering, compromised or abusive staff, bots flooding queues and attackers attempting to learn reporter identity.

## Trust boundaries
Reporter client ↔ report API; mutable user/event/message content ↔ immutable/minimized evidence snapshot; moderation queue ↔ privileged StaffAccount; staff action ↔ authoritative enforcement state; appeal ↔ independent review workflow where policy requires it.

## Attack paths
- report brigading to silence a user/organizer;
- queue flooding that hides severe cases;
- deleting/editing source content before review;
- unauthorized staff lookup or action outside assigned scope;
- staff changing/deleting audit/evidence after enforcement;
- leaking reporter identity to the reported user;
- duplicate sanctions from retried commands;
- automated/AI triage becoming the sole irreversible decision maker;
- appeal handled by an actor with an inappropriate conflict or insufficient evidence.

## Preventive controls
- authenticated/rate-limited reporting with emergency paths preserved;
- report → case linkage with explicit severity/triage state;
- immutable/minimized evidence snapshot/reference including source version/hash where relevant;
- separate StaffAccount, MFA, scoped RBAC and short privileged sessions;
- privileged commands are audited and application audit storage is append-only/insert-only;
- idempotent moderation actions with case/action relationship recorded atomically;
- reporter identity minimized and disclosed only when legally/policy required;
- AI may rank/triage but cannot be sole authority for irreversible high-impact actions;
- notice/reason/appeal path for appealable actions;
- safety-critical operational controls can disable affected capabilities without deleting evidence.

## Detection
Monitor report floods, coordinated reporters, anomalous staff access/action volume, privilege escalation attempts, repeated overturned actions, evidence-access anomalies, queue age by severity and audit-chain/export failures.

## Response and recovery
Throttle abusive reporters without disabling legitimate emergency reporting, re-prioritize severe cases, suspend compromised staff sessions/accounts, preserve and export audit/evidence, reverse incorrect sanctions through explicit appeal/action records, and conduct incident review for systemic policy/tool failures.

## Residual risk
Moderation necessarily involves judgment and may produce false positives/negatives. Automation can reduce queue cost but cannot remove governance, appeal and staff-abuse risk.

## Validation mapping
Before V1 moderation is launch-critical, test report/case linkage, evidence persistence after source edit/delete, staff RBAC/MFA integration, duplicate-action idempotency, reporter privacy, appeal state transitions, audit immutability permissions and degraded-mode access to report/block controls.
