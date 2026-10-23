# Careers JobPosting schema status

Generated from [src/app/careers/data/jobs.ts](../src/app/careers/data/jobs.ts) and
[src/seo/schemas/JobPostingSchema.tsx](../src/seo/schemas/JobPostingSchema.tsx).
Do not add placeholder values to make a row “eligible”.

## Required vs recommended

**Required** (schema suppressed if missing): open `status`, `title`, `description`, `datePosted`, and either `remoteIndiaOnly: true` (only when the page explicitly states fully remote within India) or a complete `address`.

**Recommended** (included when present, never block): `validThrough`, `employmentType`, `baseSalary`, `identifier`.

## Per-job table

| Slug | JobPosting in HTML | TELECOMMUTE + India | Missing required / employer facts |
|------|-------------------|---------------------|-----------------------------------|
| `data-entry-jobs-remote` | Yes (when open) | Yes (explicit FAQ/page copy) | `validThrough`; salary amount + pay period for optional `baseSalary` |
| `digital-marketing-executive-job` | Yes (when open) | Yes | `validThrough`; salary amount + pay period |
| `data-entry-remote-job` | No | No (WFH stated, not India-only) | Confirm fully remote within India; `validThrough`; salary period |
| `content-writer-job` | No | No | `datePosted`; confirm India-remote; `validThrough`; salary period |
| `seo-executive-job` | No | No | `datePosted`; confirm India-remote; `validThrough`; salary period |
| `ui-ux-designer-job` | No | No | Location basis (Pune address or confirmed India-remote); resolve `conflicts[]` (employment, experience, salary); `validThrough` |

## Pages without JobPosting

- `/careers` listing
- All `/blog/career/*` articles
- `/careers/thank-you` (noindex)

## SEO internship pages (Pune / Mumbai)

Inline `JobPosting` was removed (duplicate remote internship, wrong org domain, unverified `validThrough`).
Before adding schema again, confirm one canonical internship on `/remote-seo-internship` with real dates, location basis, and stipend only if confirmed.

## After employer updates

1. Edit fields in `jobs.ts` only with confirmed facts.
2. Run `npm run build` (prerender regenerates HTML and JSON-LD).
3. Re-test with Rich Results Test URLs in [JOB-MARKETING-SETUP.md](../JOB-MARKETING-SETUP.md).
