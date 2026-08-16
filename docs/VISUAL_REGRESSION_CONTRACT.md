# Visual Regression Contract — Architecture 1.3

Every production UI surface with a stable screen ID can define deterministic visual QA metadata.

Required dimensions: `screen_id`, conceptual route, viewport/device, locale, theme, fixture, state, reduced-motion setting and accessibility expectation.

Example:
```yaml
screen_id: M42
viewport: iphone-15
locale: fi-FI
theme: light
fixture: popular_public_event
state: default
reduced_motion: false
```

Phase 0 fixtures must be deterministic. As executable apps appear, CI snapshots representative default, error, empty, loading, permission-denied and high-risk safety states. Snapshot changes require intentional review; prototype CSS is never production truth. `design/tokens.json`, `packages/ui`, product contracts and implementation remain authoritative.
