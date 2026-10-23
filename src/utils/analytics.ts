/** Lightweight gtag wrapper — never throws or blocks navigation. */
export function trackEvent(
  eventName: string,
  params: Record<string, string | number | undefined>,
): void {
  try {
    if (typeof window === "undefined") return;
    const gtag = window.gtag;
    if (typeof gtag !== "function") return;

    const cleaned: Record<string, string | number> = {};
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== "") {
        cleaned[key] = value;
      }
    }

    gtag("event", eventName, cleaned);
  } catch {
    // Analytics must not break the app.
  }
}

const SENT_KEY = "nsl_sent_application_ids";
const sentIds = new Set<string>();

function alreadySent(id: string): boolean {
  if (sentIds.has(id)) return true;
  try {
    const stored = JSON.parse(sessionStorage.getItem(SENT_KEY) ?? "[]") as string[];
    return stored.includes(id);
  } catch {
    return false;
  }
}

function markSent(id: string): void {
  sentIds.add(id);
  try {
    const stored = JSON.parse(sessionStorage.getItem(SENT_KEY) ?? "[]") as string[];
    sessionStorage.setItem(SENT_KEY, JSON.stringify([...stored, id].slice(-50)));
  } catch {
    // sessionStorage unavailable; in-memory guard still applies.
  }
}

/**
 * Fires generate_lead only for an application the receiving system confirmed,
 * at most once per confirmation id. Never pass applicant personal data here.
 */
export function trackJobApplication(
  result: { status: string; id?: string },
  jobSlug: string,
  jobTitle: string,
): boolean {
  if (result.status !== "confirmed" || !result.id) return false;
  if (alreadySent(result.id)) return false;
  markSent(result.id);
  trackEvent("generate_lead", {
    lead_type: "job_application",
    job_slug: jobSlug,
    job_title: jobTitle,
  });
  return true;
}
