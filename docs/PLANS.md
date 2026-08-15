# PLANS — Execution-plan policy

Complex work is tracked as repository-local execution plans.

## Locations
- `exec-plans/active/`: current multi-step plans.
- `exec-plans/completed/`: completed plans retained as design/decision history.
- `exec-plans/tech-debt-tracker.md`: known debt and cleanup commitments.

## When a plan is required
Use an execution plan when work:
- spans multiple modules/apps;
- changes data/migrations;
- has rollout/rollback steps;
- involves a new integration/provider;
- is expected to take more than one focused Codex task;
- has meaningful safety/privacy/reliability risk.

## Required plan sections
Goal; non-goals; source specs; current state; milestones; acceptance criteria; migrations; test plan; telemetry; rollout; rollback; risks; progress log; decisions/deviations.

## Agent behavior
Codex updates the active plan as work proceeds. Unexpected discoveries are written into the plan rather than kept in chat memory. On completion, move the plan to `completed/` and update quality/tech-debt docs.