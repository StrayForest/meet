# Pre-development gate

This is the final binary gate before implementation begins. It is intentionally short and must stay machine-checkable.

## Product
- [x] Product thesis is fixed around real-world participation, not passive engagement.
- [x] Helsinki is the first social-liquidity proof; nationwide coverage is not treated as nationwide social liquidity.
- [x] Launch languages are fixed: `fi`, `en`, `ru`.
- [x] Persistent IRL social graph is a hypothesis, not a predetermined destination.
- [x] Successful IRL participation is the north-star outcome.

## MVP boundary
- [x] Public discovery is available before signup.
- [x] No mandatory hobbies/interests/gender/phone gate exists for public discovery.
- [x] Consumer V1 exposes `PUBLIC_VENUE` and `OUTDOOR`; `PRIVATE_HOME` is NOT V1 user-facing scope.
- [x] Consumer social language uses `Find company` / equivalent instead of requiring `Pod` vocabulary.
- [x] Persistent connections, custom ML, native ticketing, consumer premium affecting core participation, broad communities/social graph and active multi-region complexity are evidence-gated/deferred.

## Architecture / implementation
- [x] Architecture decisions are classified as LOCKED / DEFAULT / DEFERRED.
- [x] Active consumer design source is `design/screens/consumer-v1-data.js`.
- [x] Active Phase 0 plan is constrained to executable foundation needed for the proof loop.
- [x] P0-000 documentation/contract consistency audit is complete.
- [x] GitHub Actions CI runs all pre-development contract checks on PRs and pushes to `main`.

## Executable checks
These must all pass:

```bash
node scripts/check-context-budget.mjs
node scripts/check-architecture-contracts.mjs
node scripts/check-business-contracts.mjs
node scripts/check-validation-scope.mjs
node scripts/check-pre-dev-gate.mjs
```

## Exit rule
When this gate is green, stop architecture polishing and begin implementation from the next unchecked item in `docs/exec-plans/active/phase-0-foundation.md`. Product-validation work in the V0 track runs in parallel with engineering.
