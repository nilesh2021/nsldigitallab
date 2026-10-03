import { subscribeNewsletter } from "../../../../services/newsletter";
import { CHECKLIST_STORAGE_KEY } from "../data/atsChecklistContent";

export type ChecklistLeadPayload = {
  firstName: string;
  email: string;
  sourcePage: string;
};

export async function submitChecklistLead({
  firstName,
  email,
  sourcePage,
}: ChecklistLeadPayload): Promise<{ success: boolean }> {
  const name = firstName.trim();
  const address = email.trim();

  // Uses existing newsletter endpoint; dedicated checklist email delivery is TODO.
  const result = await subscribeNewsletter(
    address,
    "Free ATS Resume Checklist",
    `career/${sourcePage}`,
    "newsletter",
    { firstName: name },
  );

  if (result.success) {
    try {
      sessionStorage.setItem(CHECKLIST_STORAGE_KEY, "1");
    } catch {
      // sessionStorage may be unavailable; checklist still shown this session via state.
    }
  }

  return result;
}

export function isChecklistUnlockedInSession(): boolean {
  try {
    return sessionStorage.getItem(CHECKLIST_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}
