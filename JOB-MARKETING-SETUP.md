# Job marketing setup (manual steps)

Code changes are in the repo. Everything below must be done by someone with access to the
Google Apps Script, Vercel, Search Console, GA4, and Google Ads accounts. Nothing here spends money.

## 1. Enable confirmed application conversions

All six job forms (and the general form on `/careers`) post to `/api/career-application`
(`api/career-application.ts`), which forwards to the existing Apps Script server-side.
`generate_lead` fires **only** when the script replies with JSON `{ "ok": true, "id": "..." }`.
Until the script is updated, applications are still delivered and the applicant still sees the
success message, but **no conversion is sent**.

### 1a. Update the Apps Script `doPost`

The same script also handles newsletter, contact, and resource posts, so change the
response for `type === "career"` only. Keep your existing sheet and email logic; return
`ok: true` only after both have succeeded.

```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  if (data.type === "career") {
    try {
      var id = Utilities.getUuid();

      // --- existing career handling, unchanged ---
      // e.g. sheet.appendRow([...existing columns..., id]);
      // e.g. MailApp.sendEmail(...);

      return ContentService.createTextOutput(JSON.stringify({ ok: true, id: id }))
        .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }

  // --- existing handling for other types, unchanged ---
}
```

Then **Deploy > Manage deployments > Edit > New version** so the existing `/exec` URL serves
the new code. If you create a new deployment instead, its URL changes; set it in step 1b.

Note: `content-writer-job` and `seo-executive-job` previously posted without `type`, `source`,
`message`, or `createdAt`. They now send the same payload as the other career forms
(`type: "career"`, plus `jobSlug`). Check that your sheet still receives them in the expected tab.

### 1b. Vercel environment variable (optional)

`APPS_SCRIPT_CAREER_URL` = the Apps Script `/exec` URL. If unset, the endpoint uses the URL
already in the code.

### 1c. Verify after deploying

1. Submit a test application on a job page.
2. Check that the sheet row and notification email arrived.
3. In the browser Network tab, `/api/career-application` should return `200` with
   `{"status":"confirmed","id":"..."}`. `202` means the script reply was not a confirmation.
4. In GA4 **Admin > DebugView**, confirm one `generate_lead` event with `job_slug`, `job_title`,
   and `lead_type` only (no name, email, phone, or resume).

## Analytics vs email (separate systems)

| System | What it does | Status |
|--------|----------------|--------|
| **Apps Script** | Delivers applications to your sheet and sends email notifications | Working — unchanged destination; `/api/career-application` proxies server-side in production |
| **GA4 `generate_lead`** | Marketing conversion in Google Analytics / Ads | **Off** until the script returns `{ "ok": true, "id": "..." }` after deploy |

- Job detail modals and the `/careers` form call `trackJobApplication` only when the API response is `confirmed`.
- Local Vite dev uses a `no-cors` fallback to the script; it always returns `unconfirmed`, so **no** `generate_lead` fires in dev (avoids false conversions).
- Job pages no longer treat `no-cors` completion as success.
- Event payload includes only `job_slug`, `job_title`, and `lead_type` — never applicant PII.

See also [docs/CAREERS-SCHEMA-STATUS.md](docs/CAREERS-SCHEMA-STATUS.md).

### Consent

The site loads gtag without Consent Mode or a cookie banner. Conversions currently follow that
existing behaviour. If you add a consent banner, set Consent Mode v2 defaults in `index.html`
before the `gtag('config', ...)` calls; `trackEvent` needs no changes.

## 2. Rich Results Test (one per job URL)

Eligible now (one JobPosting expected):

- https://search.google.com/test/rich-results?url=https%3A%2F%2Fnsldigitallab.com%2Fcareers%2Fdata-entry-jobs-remote
- https://search.google.com/test/rich-results?url=https%3A%2F%2Fnsldigitallab.com%2Fcareers%2Fdigital-marketing-executive-job

Suppressed until employer facts are confirmed (expect no JobPosting):

- https://search.google.com/test/rich-results?url=https%3A%2F%2Fnsldigitallab.com%2Fcareers%2Fdata-entry-remote-job
- https://search.google.com/test/rich-results?url=https%3A%2F%2Fnsldigitallab.com%2Fcareers%2Fcontent-writer-job
- https://search.google.com/test/rich-results?url=https%3A%2F%2Fnsldigitallab.com%2Fcareers%2Fseo-executive-job
- https://search.google.com/test/rich-results?url=https%3A%2F%2Fnsldigitallab.com%2Fcareers%2Fui-ux-designer-job

## 3. Search Console

- URL Inspection (paste each job and article URL, then **Request indexing**):
  https://search.google.com/search-console/inspect
- Sitemaps (resubmit `https://nsldigitallab.com/sitemap.xml`):
  https://search.google.com/search-console/sitemaps
- Job postings enhancement report (appears after Google processes JobPosting pages):
  https://search.google.com/search-console/r/jobposting

Article URLs to inspect:

- https://nsldigitallab.com/blog/career/how-to-get-remote-data-entry-jobs-in-india
- https://nsldigitallab.com/blog/career/data-entry-skills-for-beginners
- https://nsldigitallab.com/blog/career/how-to-check-if-remote-data-entry-job-is-legit

## 4. GA4 and Google Ads

1. GA4 **Admin > Data display > Events**: after the first confirmed test, mark `generate_lead` as a
   **key event**.
2. Google Ads **Goals > Conversions > New > Import > Google Analytics 4**: import `generate_lead`.
3. Set it as **primary** or **secondary** manually in the Google Ads UI. This cannot be configured
   from the code.
4. Do not enable campaigns or change budgets as part of this setup.

## 5. Rebuild and revalidation

Job pages, `/careers`, and the three career articles are prerendered at build time
(`src/scripts/prerender.mjs`, list in `src/seo/routes.cjs`). There is no runtime revalidation:
any change to `src/app/careers/data/jobs.ts` or article content needs a redeploy.

To close a vacancy, set `status: "closed"` in `jobs.ts` and redeploy. The page stays at the same
URL, shows a closed notice, hides Apply, removes JobPosting, adds `noindex`, and drops off `/careers`.

## 6. Employer confirmations still needed

| Job | Needed before JobPosting can be emitted or completed |
|---|---|
| data-entry-remote-job | Fully remote within India? Closing date. Pay period for ₹5K–₹10K. Part-time only (FAQ says full-time "may be available")? |
| data-entry-jobs-remote | Closing date. Pay period. Same vacancy as data-entry-remote-job or separate? |
| digital-marketing-executive-job | Closing date. Pay period. |
| content-writer-job | Real posting date. Fully remote within India? Closing date. Pay period. Part-time vs FAQ "both may be available". |
| seo-executive-job | Real posting date. Fully remote within India? Closing date. Pay period. |
| ui-ux-designer-job | Employment type (Part-Time vs Full Time), experience (0-2 vs 1–3 years), location (Remote vs Pune, with address if Pune), salary and period (₹5K–₹40K vs ₹5–9 lakh). Closing date. |
| SEO internships (Pune/Mumbai pages) | JobPosting removed: one remote internship was posted twice under city titles with a wrong organisation name/domain and an unverified 2026-12-31 deadline. Confirm the internship's real dates to add a single posting to `/remote-seo-internship`. |

## 7. Verification log

**Run locally (in repo):**

- `npm run build` — client bundle, SSR prerender, `verify-prerender.mjs`, sitemap (156 URLs including 3 career articles)
- `npm test` — application API + conversion dedupe tests
- `node tests/serve-dist.mjs` — optional; mimics Vercel `cleanUrls` static HTML before SPA fallback

**Not run automatically (manual after deploy):**

- Rich Results Test links in section 2 (live `nsldigitallab.com` URLs)
- Search Console URL Inspection and sitemap resubmit (section 3)
- Live end-to-end application with confirmed `{ok:true,id}` from Apps Script
- GA4 key event and Google Ads conversion import (section 4)

**Hosting:** Vercel serves `dist/careers/*.html` and `dist/blog/career/*.html` as static files when `cleanUrls` is enabled; the catch-all rewrite applies only when no static file exists. Output directory must remain `dist`.
