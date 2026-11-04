# Career applications → marketing & hiring

How to use job applications (especially [Video Creator / Editor](https://nsldigitallab.com/careers/video-creator-freelancer-job)) for **more applicants**, **freelancer bench**, and **ethical follow-up**.

## What the site sends now

| Field | Purpose |
|--------|---------|
| `name`, `email`, `phone`, `resume`, `message`, `jobTitle`, `jobSlug` | Hiring / sheet row |
| `marketingOptIn` | Optional checkbox on `/careers` form and video job modal — **only** these people may get NSL updates / future roles marketing |
| `utmSource`, `utmMedium`, `utmCampaign`, `utmTerm`, `utmContent`, `landingPage` | First-touch campaign (session); stored in sheet when Apps Script reference is deployed |
| GA4 `generate_lead` | Fires on confirmed apply with `job_slug`, `job_title`, + UTM params (**no** email/phone in analytics) |

Attribution is captured on first page load (`src/utils/campaignAttribution.ts`). Use tagged links in ads and social.

### Example campaign URL (video freelancer)

```
https://nsldigitallab.com/careers/video-creator-freelancer-job?utm_source=google&utm_medium=cpc&utm_campaign=video-freelancer-india-2026
```

LinkedIn:

```
https://nsldigitallab.com/careers/video-creator-freelancer-job?utm_source=linkedin&utm_medium=social&utm_campaign=video-freelancer-hiring
```

## Google Sheet columns (after you update Apps Script)

Merge **`docs/APPS-SCRIPT-REFERENCE.gs`** into your project and add headers on **Job Applications** to match (or adjust the script to your existing columns):

`id`, name, email, phone, resume, jobTitle, jobSlug, message, source, createdAt, **marketingOptIn**, **utmSource**, **utmMedium**, **utmCampaign**, **landingPage**, receivedAt

Internal email to **hello@nsldigitallab.com** is sent on each career row when `notifyCareerApplication` is in the script (requires MailApp authorize once).

## Scale more applicants (paid / analytics)

1. GA4: mark **`generate_lead`** as a key event.
2. Google Ads: import that conversion; optimize campaigns to the video job URL (with UTMs above).
3. In GA4 Explorations, break down **`generate_lead`** by `job_slug` and `utm_campaign`.
4. Do **not** upload applicant emails to ad platforms unless they checked **marketing opt-in** and you document that use in privacy policy.

## Use email & phone for hiring (recommended)

- Filter sheet by `jobSlug = video-creator-freelancer-job`.
- WhatsApp / email: paid test clip, brief, payment terms.
- Tag strong rows in a column (e.g. `shortlist`) for your freelancer bench.

## Use email for marketing (opt-in only)

- Export or filter rows where **marketingOptIn = yes**.
- Nurture with future freelance roles, not unrelated agency pitches unless copy clearly covers that.
- Prefer a tool (Brevo, Mailchimp) connected to the sheet via Zapier/Make for sequences.

## Remarketing without PII

- GA4 / Google Ads **website audiences**: visitors of `/careers/video-creator-freelancer-job` who did not convert (no email upload).
- Optimize toward **`generate_lead`**, not toward selling NSL services to applicants by default.

## Client leads (NSL services)

Use separate funnels: homepage contact form, resource downloads, blog — not the raw applicant list.

See also [JOB-MARKETING-SETUP.md](../JOB-MARKETING-SETUP.md) and [APPS-SCRIPT-REFERENCE.gs](./APPS-SCRIPT-REFERENCE.gs).
