# Screen/state matrix

Every implemented screen covers applicable states before acceptance. This matrix follows `validation/MVP_BOUNDARY.md`; future/evidence-gated surfaces are excluded until activated by their gate.

| Surface | Loading | Empty | Partial/offline/stale | Error | Restricted/safety | Success/live |
|---|---|---|---|---|---|---|
| Progressive onboarding | skeleton/progress | n/a | preserved form | retry/auth error | under-18/policy | requested action resumed |
| Discover | card skeletons | widen radius/date | cached + freshness | retry | filtered/restricted | live feed |
| Map discovery mode | map placeholders | no pins + suggestions | cached tiles/data | retry/manual city | unsafe/removed hidden | clusters/selection |
| Search | suggestion skeleton | no matches + adjust | recent query | retry | hidden unsafe | ranked results |
| Event detail | geometry skeleton | unavailable | last-known + refresh banner | retry | removed/cancelled/policy | occurrence + social/admission actions |
| Occurrence switcher | date skeleton | no future dates | cached dates + refresh | retry | occurrence unavailable | selected occurrence truth |
| Admission action | pending external handoff | none/free | source freshness warning | external unavailable | policy/source disabled | trusted external action |
| Social participation | CTA pending | disabled | authoritative refresh | recoverable conflict | eligibility/block | confirmed/request/waitlist |
| Find company/group | skeleton | no active group yet | cached membership + refresh | retry | removed/blocked | occurrence-scoped group state |
| Occurrence chat | message skeleton | no messages | offline compose/recovery | resend/error | membership revoked/block | realtime + durable sync |
| My plans | skeleton | no saved/going/past yet | cached + freshness | retry | hidden unsafe/removed | saved/going/past |
| Attendance confirmation | pending | no request | retryable local state | retry | ineligible/expired | evidence recorded |
| Create event | draft loading | new draft | autosaved local/server | field/server error | verification/policy block | published |
| Waitlist offer | pending | expired | refresh authoritative offer | retry safely | no longer eligible | accepted/declined |
| Profile | skeleton | sparse profile | cached | retry | suspended/private | profile |
| Verification | provider pending | unverified | provider degraded | failed/retry | restricted | verified |
| Client update | bootstrap | n/a | latest policy cached briefly | bootstrap retry/degraded | unsupported version | continue/soft update/force update |
| B2B Events | table skeleton | create event | cached/read-only | retry | permission denied | table |
| Admin queue | rows skeleton | zero queue | degraded warning | retry/escalate | permission denied | active queue |

## Special rules
- A cached event may be browsed, but high-impact action revalidates current occurrence truth.
- Ticket/admission and Meet social participation may both be visible; one must not overwrite the state of the other.
- Material cancellation/safety state is never toast-only.
- PRIVATE_HOME has no V1 consumer screen/map/disclosure state. If that feature is later activated through its evidence/ADR gate, it gets a separate reviewed state matrix before implementation.
- Consumer copy uses `Find company` / `Join group`; `Pod` remains internal domain vocabulary only where needed.
- Preserve user-entered form data after recoverable errors.
- Skeletons approximate final layout to avoid visual shift.
