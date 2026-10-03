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
