# Meet screen reference pack

Static HTML examples for every major consumer, organization and staff page defined by Architecture 1.3.

## Open
- `index.html` — surface index
- `consumer.html` — M01–M88
- `b2b.html` — B01–B18
- `admin.html` — A01–A20

Serve locally from the repository root, for example `python -m http.server`, then open `/design/screens/index.html`.

## Contract
These files are **visual references**, not executable product truth. Product/domain/security/state contracts remain authoritative. `design/tokens.json` remains the token source; application code must not copy CSS from `prototype.css` as a substitute for `packages/ui`.

Each visual reference has a stable screen ID, conceptual route and source spec. A task should load only the relevant surface file/ID, not all screen data.

When architecture adds/removes a user-facing page, update this pack and `docs/design-docs/index.md`. Visual QA should eventually capture implemented equivalents of the high-priority references.