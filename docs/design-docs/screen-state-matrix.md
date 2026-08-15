# Screen/state matrix

Every implemented screen covers applicable states before acceptance.

| Surface | Loading | Empty | Partial/offline | Error | Restricted/safety | Success/live |
|---|---|---|---|---|---|---|
| Onboarding | skeleton/progress | n/a | preserved form | retry/auth error | under-18/policy | next/completed |
| Home | card skeletons | widen radius/create | cached + freshness | retry | filtered/restricted | live feed |
| Map | map placeholders | no pins + suggestions | cached tiles/data | retry/manual city | private coarse pins | clusters/selection |
| Search | suggestion skeleton | no matches + adjust | recent query | retry | hidden unsafe | ranked results |
| Event detail | geometry skeleton | unavailable | last-known freshness | retry | removed/cancelled/private policy | contextual CTA |
| Create event | draft loading | new draft | autosaved local/server | field/server error | verification/policy block | published |
| Participation | CTA pending | n/a | state refresh | recoverable conflict | eligibility/block | confirmed/request/waitlist |
| Waitlist offer | pending | expired | n/a | retry safely | no longer eligible | accepted/declined |
| Pod | skeleton | no Pods/create | cached members | retry | removed/blocked | live membership |
| Chat | message skeleton | no messages | offline compose policy | resend/error | membership revoked/block | realtime |
| Profile | skeleton | sparse profile | cached | retry | suspended/private | profile |
| Verification | provider pending | unverified | provider degraded | failed/retry | restricted | verified |
| B2B Events | table skeleton | create event | cached/read-only | retry | permission denied | table |
| Admin queue | rows skeleton | zero queue | degraded warning | retry/escalate | permission denied | active queue |

Material cancellation/safety state is never represented only by a toast. Preserve user-entered form data after recoverable errors. Skeletons approximate final layout to avoid visual shift.