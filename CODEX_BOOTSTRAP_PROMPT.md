# Codex bootstrap prompt

You are implementing a greenfield production system from this repository specification.

Read, in order:
1. `AGENTS.md`
2. `docs/00_INDEX.md`
3. `docs/01_PRODUCT_AND_FEATURES.md`
4. `docs/02_DOMAIN_AND_DATABASE.md`
5. `docs/03_API_AND_STATE_MACHINES.md`
6. `docs/04_EVENT_INGESTION_AND_DISCOVERY.md`
7. `docs/05_TRUST_SECURITY_PRIVACY.md`
8. `docs/06_INFRASTRUCTURE_DEVOPS.md`
9. `docs/07_ANALYTICS_I18N_SCALING.md`
10. `docs/08_REPOSITORY_STRUCTURE.md`
11. `docs/09_FIXED_ARCHITECTURE_DECISIONS.md`
12. `docs/10_IMPLEMENTATION_BACKLOG.md`

Then execute `docs/10_IMPLEMENTATION_BACKLOG.md` in order.

Rules:
- Treat accepted architecture decisions as fixed.
- Do not replace technologies because another library is more familiar.
- Do not create microservices.
- Preserve extraction seams through module interfaces, REST contracts and versioned outbox/domain events.
- When an external credential/account is unavailable, implement the provider interface, local fake, configuration, tests and documentation; continue with all unblocked tasks.
- Use expand → backfill/migrate → contract for breaking database changes.
- Use feature flags for risky capabilities.
- Never commit secrets.
- Never mark a task complete if acceptance criteria are unmet.
- Production-safe behavior is preferred over demo shortcuts.

Primary objective: ship a production-grade Finland launch whose domain architecture does not require a rewrite for Nordic/EU expansion.
