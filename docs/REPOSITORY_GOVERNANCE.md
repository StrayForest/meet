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
The repository-level predevelopment status check is the `predevelopment-contracts` job in `.github/workflows/predevelopment-contracts.yml`.

When GitHub repository settings permit enforcement, `main` must require:
- pull request before merge;
- `predevelopment-contracts` status check;
- branch up to date before merge when the implementation CI graph makes that safe/useful;
- CODEOWNER review for sensitive paths once more than one qualified reviewer exists;
- dismissal/reapproval after material sensitive changes;
- no force push or branch deletion.

If repository settings/API permissions cannot enforce a control yet, document that as a **repository-host configuration gap**, not as an architectural exception. The temporary manual equivalent is PR + passing check + explicit owner review; production/team scale cannot proceed while a material required protection remains unenforced without a risk acceptance.

## Public repository hygiene
Because the repository is public, secrets and private-key material must never be committed, even temporarily. `scripts/check-public-repo-hygiene.mjs` provides a high-confidence repository check, but it does not replace GitHub secret scanning or provider-side secret detection/revocation. Any exposed credential is treated as compromised and rotated; deleting the commit is not sufficient remediation.

## Emergency changes
SEV mitigation may use expedited review but still produces repository commit, audit trail and follow-up normal review/postmortem. No permanent console-only infrastructure drift.
