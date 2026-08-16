# Module Ownership and Criticality — Architecture 1.3

Each executable backend/module/package must eventually expose machine-readable ownership metadata validated in CI.

Required fields: module ID, owning team/person, service tier, data classes touched, primary SLI, on-call/escalation owner, upstream/downstream dependencies and privileged/safety status.

Example:
```yaml
module: participation
owner: founder
service_tier: 0
data_classes: [PERSONAL]
primary_sli: join-correctness
oncall: founder
dependencies: [events, notifications]
privileged: false
safety_critical: false
```

Initial founder ownership is valid. Before multiple engineering teams operate production, CODEOWNERS and module metadata must reflect real team ownership. Tier-0/safety modules require explicit review ownership and runbook links.
