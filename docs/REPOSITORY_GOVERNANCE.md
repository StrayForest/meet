# REPOSITORY_GOVERNANCE — Human + Codex change control

## Default flow after Phase 0 bootstrap
`task/exec-plan → branch/worktree → PR → CI → review → merge → staging → protected production promotion`.

Codex may create implementation commits/PRs but may not bypass accepted architecture, required CI or privileged production approval.

## Change size
Prefer one coherent backlog item per PR. Do not ask an agent to implement an entire multi-phase architecture in one opaque commit. Large migrations use an exec plan and staged PRs.

## Ownership
Start with `.github/CODEOWNERS` owned by founder; split ownership as team grows. Sensitive paths require explicit owners:
- infra/security/auth/staff/admin;
- database migrations;
- mobile release/signing;
- safety/moderation;
- billing.

## Main protection
When GitHub plan supports protected private-repo rules, require PR, required status checks, dismissal/reapproval after sensitive changes and CODEOWNER review for owned paths. If plan cannot enforce a control, document the temporary manual equivalent and upgrade requirement before team/production risk justifies it.

## Emergency changes
SEV mitigation may use expedited review but still produces repository commit, audit trail and follow-up normal review/postmortem. No permanent console-only infrastructure drift.
