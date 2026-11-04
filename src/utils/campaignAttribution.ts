const STORAGE_KEY = "nsl_career_attribution";

export type CareerAttribution = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  landingPage: string;
};

const empty = (): CareerAttribution => ({
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmTerm: "",
  utmContent: "",
  landingPage: "",
});

function readStored(): CareerAttribution {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Partial<CareerAttribution>;
    return { ...empty(), ...parsed };
  } catch {
    return empty();
  }
}

/** Call once on app load; keeps first-touch UTMs for the session. */
export function captureCampaignFromLocation(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const hasUtm =
      params.has("utm_source") ||
      params.has("utm_medium") ||
      params.has("utm_campaign") ||
      params.has("utm_term") ||
      params.has("utm_content");
    const hasClickId = params.has("gclid") || params.has("fbclid");
    const hadStored = Boolean(sessionStorage.getItem(STORAGE_KEY));

    let stored = readStored();

    if (!hadStored) {
      stored.landingPage = window.location.pathname.slice(0, 500);
    }

    if (!hasUtm && !hasClickId) {
      if (!hadStored) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
      return;
    }

    if (params.get("utm_source")) stored.utmSource = params.get("utm_source")!.trim();
    else if (params.get("gclid")) stored.utmSource = "google";
    else if (params.get("fbclid")) stored.utmSource = "facebook";

    if (params.get("utm_medium")) stored.utmMedium = params.get("utm_medium")!.trim();
    else if (params.get("gclid")) stored.utmMedium = "cpc";
    else if (params.get("fbclid")) stored.utmMedium = "paid_social";

    if (params.get("utm_campaign")) stored.utmCampaign = params.get("utm_campaign")!.trim();
    if (params.get("utm_term")) stored.utmTerm = params.get("utm_term")!.trim();
    if (params.get("utm_content")) stored.utmContent = params.get("utm_content")!.trim();
    stored.landingPage = window.location.pathname.slice(0, 500);

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // sessionStorage blocked
  }
}

export function getStoredCareerAttribution(): CareerAttribution {
  if (typeof window === "undefined") return empty();
  return readStored();
}

/** GA4-safe params (no PII). */
export function careerAttributionEventParams(): Record<string, string> {
  const a = getStoredCareerAttribution();
  const out: Record<string, string> = {};
  if (a.utmSource) out.utm_source = a.utmSource.slice(0, 100);
  if (a.utmMedium) out.utm_medium = a.utmMedium.slice(0, 100);
  if (a.utmCampaign) out.utm_campaign = a.utmCampaign.slice(0, 100);
  if (a.landingPage) out.landing_page = a.landingPage.slice(0, 200);
  return out;
}
