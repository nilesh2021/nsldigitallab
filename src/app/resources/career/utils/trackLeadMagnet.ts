import { trackEvent } from "../../../../utils/analytics";
import { CHECKLIST_LEAD_MAGNET_ID } from "../data/atsChecklistContent";

export function trackLeadMagnetView(sourcePage: string): void {
  trackEvent("lead_magnet_view", {
    lead_magnet: CHECKLIST_LEAD_MAGNET_ID,
    source_page: sourcePage,
  });
}

export function trackLeadMagnetSubmit(sourcePage: string): void {
  trackEvent("lead_magnet_submit", {
    lead_magnet: CHECKLIST_LEAD_MAGNET_ID,
    source_page: sourcePage,
  });
}

export function trackChecklistView(sourcePage: string): void {
  trackEvent("checklist_view", {
    lead_magnet: CHECKLIST_LEAD_MAGNET_ID,
    source_page: sourcePage,
  });
}

export function trackChecklistPrint(sourcePage: string): void {
  trackEvent("checklist_print", {
    lead_magnet: CHECKLIST_LEAD_MAGNET_ID,
    source_page: sourcePage,
  });
}
