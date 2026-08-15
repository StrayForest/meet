# Permission matrix — baseline

Organization membership can contain **multiple roles**; effective permissions are the union of assigned roles, then narrowed by resource/state/safety/country policy.

| Action | Consumer/Host | EVENT_MANAGER | ANALYST | BILLING | ADMIN | OWNER | Staff Moderator/Admin |
|---|---:|---:|---:|---:|---:|---:|---:|
| View eligible public event | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create community event | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Manage own hosted event | host | — | — | — | — | — | audited override only |
| Create/manage org event | — | ✓ | — | — | ✓ | ✓ | audited override |
| View org analytics | — | role policy | ✓ | role policy | ✓ | ✓ | restricted |
| Manage billing | — | — | — | ✓ | ✓ | ✓ | restricted staff |
| Manage org members/roles | — | — | — | — | ✓ | ✓ | restricted staff |
| Moderate org community scope | — | optional MODERATOR role | — | — | ✓ | ✓ | staff policy |
| Permanent platform ban | — | — | — | — | — | — | policy-limited staff |
| Exact private address | only currently authorized participant/host; org/staff role alone never grants it |

KYC documents are never stored/viewable.
