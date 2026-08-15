# DEEP_LINKS_SEO — Canonical public URLs and app linking

## Goal
Every public event/organization URL is stable, shareable, indexable where appropriate and opens the native app when installed.

## 1. Canonical URL shapes
Use stable opaque IDs/slugs without locale-specific identity:
- `/events/{eventId}`
- `/events/{eventId}/occurrences/{occurrenceId}` where direct occurrence link is needed
- `/organizations/{organizationId-or-stable-slug}`

Localized presentation does not create competing canonical identities.

## 2. Event aliases/merges
If event B merges into canonical A:
- API resolves B → A;
- public web returns permanent canonical redirect when safe;
- canonical tag points to A;
- old shared links keep working;
- alias chains are flattened and cycles prohibited.

## 3. Mobile app links
Configure:
- iOS Universal Links + associated domains
- Android App Links + verified asset links
- Expo Router deep-link mapping

Installed app opens native Event/Organization route. Not installed → canonical web page.

## 4. Share payload
Share uses canonical HTTPS URL, not custom scheme. Custom schemes may exist only as internal fallback/development convenience.

## 5. Public web SEO
Public eligible event/organization pages:
- server-rendered/SEO-capable Next.js output
- unique title/description
- Open Graph/social metadata
- canonical link
- locale alternates where appropriate
- structured data such as Schema.org `Event` only when fields are accurate
- clear cancellation/reschedule state

Do not generate misleading structured data from stale/low-confidence records.

## 6. Indexing policy
Index:
- public physical events with sufficient quality and rights
- verified/public organization pages

Noindex/private:
- private/unlisted/organization-only events as policy dictates
- private-home exact address never in HTML/metadata
- user profiles by default unless a later deliberate product/privacy decision enables public indexing
- chats/Pods/member lists/admin/B2B

## 7. Sitemaps
Generate bounded/current sitemaps for canonical public events/organizations. Expired events may remain accessible for a retention period but do not dominate active discovery sitemaps.

## 8. Robots
Robots policy is explicit and tested. `robots.txt` and sitemap URLs are valid plain directives/URLs, not Markdown-formatted links.

## 9. Social previews
Use event imagery only where rights permit. Fallback branded preview does not expose private participant data.

## 10. Redirect/security
Validate redirects/external URLs; never create open redirect behavior from event ticket/source URLs. External ticket links are clearly external and use safe navigation policy.

## 11. Analytics
Track deep-link source/campaign without leaking private user identifiers into public URLs.
