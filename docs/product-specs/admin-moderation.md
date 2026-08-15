# Product spec — Admin and moderation — Architecture 1.3

Privileged operations use separate StaffAccount/MFA/scopes and never consumer impersonation.

Surfaces: moderation queue/cases/reports/appeals, users/restrictions, events/occurrences, org claims, identity status, ingestion/parser versions, dedupe/aliases, OperationalFlags/change approvals, ClientPolicy, audit/operations.

Multiple Reports may link to one ModerationCase. Evidence used for decisions is immutable/minimized snapshot/reference with source entity/version/hash so later edits/deletes do not erase the reviewed state.

Safety-critical OperationalFlag changes use optimistic version checks; re-enable may require second staff approval. All high-impact commands audited.

Acceptance: staff auth/scope, report-case linking, evidence immutability, no consumer impersonation, alias preservation, flag concurrency/two-person rule, exceptional private-location access audit.
