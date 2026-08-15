# Meet design artifacts

- `tokens.json` is the machine-readable V1 design-token contract.
- `DESIGN_SYSTEM_PREVIEW.html` is a human visual reference and may be used by Codex for screenshot comparison.

Source rationale and component behavior live in `docs/design-docs/`.

Implementation rule: code consumes generated/shared token exports from `packages/ui`; product screens do not invent raw values.