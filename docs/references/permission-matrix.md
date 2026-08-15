# Permission matrix — baseline

`✓` allowed by role when resource/state policy also permits; all server-side.

| Action | Consumer | Host | Org Event Manager | Org Admin | Org Owner | Staff Moderator | Staff Admin |
|---|---:|---:|---:|---:|---:|---:|---:|
| View public event | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Join eligible event | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create community event | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Manage own hosted event | — | ✓ | — | — | — | ✓* | ✓* |
| Create/manage org event | — | — | ✓ | ✓ | ✓ | ✓* | ✓* |
| Manage org members | — | — | — | ✓ | ✓ | — | ✓* |
| Billing | — | — | role-specific | BILLING/ADMIN | ✓ | — | restricted staff |
| Review ordinary reports | — | — | — | — | — | ✓ | ✓ |
| Permanent ban | — | — | — | — | — | policy-limited | ✓ |
| View exact private address | confirmed participant/authorized host only, regardless of role; staff access exceptional/audited |
| View KYC document | never — documents are not stored |

`*` Staff acts through audited moderation/admin commands, not by impersonating ordinary ownership.

Block/restriction/organization state/country policy can further deny an otherwise allowed action.