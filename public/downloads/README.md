# Downloadable files

Place static files in this folder so they are served at `/downloads/<filename>`.

## Expected files

| File | Used by |
|------|---------|
| `500-tongue-twisters-english-pronunciation.pdf` | [500 Tongue Twisters resource](/resources/500-tongue-twisters-english-pronunciation) |
| `ATS-Resume-Template-Pack.zip` | [Free ATS Resume Template for Freshers (2026)](/resources/free-ats-resume-template-freshers-2026) |
| `Job-Application-Tracker.xlsx` | [Free Job Application Tracker](/resources/free-job-application-tracker) |
| `AI-Prompt-Pack-for-Job-Seekers.zip` | [100 ChatGPT Prompts for Job Seekers (2026)](/resources/free-chatgpt-prompts-job-seekers-2026) |

Until a file listed above is added here, the email unlock flow on the matching landing page still works, but the download link will return 404.

Editable source copies of the ATS pack live in `content/career-lead-magnets/ats-resume-template/` (not served publicly). Prompt-pack source lives in `content/career-lead-magnets/ai-prompt-pack-for-job-seekers/`. Rebuild the ZIP into this folder after editing those files.

Other PDFs in this folder are referenced from `src/data/resources.ts`.
