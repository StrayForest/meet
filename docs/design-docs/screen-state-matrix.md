# Screen/state matrix

Every implemented screen covers applicable states before acceptance.

| Surface | Loading | Empty | Partial/offline/stale | Error | Restricted/safety | Success/live |
|---|---|---|---|---|---|---|
| Onboarding | skeleton/progress | n/a | preserved form | retry/auth error | under-18/policy | next/completed |
| Home | card skeletons | widen radius/create | cached + freshness | retry | filtered/restricted | live feed |
| Map | map placeholders | no pins + suggestions | cached tiles/data | retry/manual city | private coarse pins | clusters/selection |
| Search | suggestion skeleton | no matches + adjust | recent query | retry | hidden unsafe | ranked results |
| Event detail | geometry skeleton | unavailable | last-known + refresh banner | retry | removed/cancelled/private policy | occurrence + social/admission actions |
| Occurrence switcher | date skeleton | no future dates | cached dates + refresh | retry | occurrence unavailable | selected occurrence truth |
| Admission action | pending external handoff | none/free | source freshness warning | external unavailable | policy/source disabled | trusted external action |
| Social participation | CTA pending | disabled | authoritative refresh | recoverable conflict | eligibility/block | confirmed/request/waitlist |
| Create event | draft loading | new draft | autosaved local/server | field/server error | verification/policy block | published |
| Waitlist offer | pending | expired | refresh authoritative offer | retry safely | no longer eligible | accepted/declined |
| Pod | skeleton | no Pods/create | cached members | retry | removed/blocked | live membership |
| Chat | message skeleton | no messages | offline compose/recovery | resend/error | membership revoked/block | realtime + durable sync |
| Profile | skeleton | sparse profile | cached | retry | suspended/private | profile |
| Verification | provider pending | unverified | provider degraded | failed/retry | restricted | verified |
| Client update | bootstrap | n/a | latest policy cached briefly | bootstrap retry/degraded | unsupported version | continue/soft update/force update |
| B2B Events | table skeleton | create event | cached/read-only | retry | permission denied | table |
| Admin queue | rows skeleton | zero queue | degraded warning | retry/escalate | permission denied | active queue |

## Special rules
- A cached event may be browsed, but high-impact action revalidates current occurrence truth.
- Ticket/admission and Meet social participation may both be visible; one must not overwrite the state of the other.
- Material cancellation/safety state is never toast-only.
- Exact private-home location is never part of ordinary partial/offline cache unless explicitly authorized and product policy permits secure local handling; default is refetch current authorized truth.
- Preserve user-entered form data after recoverable errors.
- Skeletons approximate final layout to avoid visual shift.
