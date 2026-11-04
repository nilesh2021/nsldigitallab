import type { CareerSubmitResult } from "../../../services/career";

export const RESUME_URL_PATTERN = /^https?:\/\/\S+$/i;

/** Returns an error message, or null if empty or valid https URL. */
export function validateOptionalResumeUrl(resume: string): string | null {
  const trimmed = resume.trim();
  if (!trimmed) return null;
  if (!RESUME_URL_PATTERN.test(trimmed)) {
    return "Portfolio / sample link must start with http:// or https://";
  }
  return null;
}

export function applicationErrorMessage(result: CareerSubmitResult): string {
  return result.error ?? "Something went wrong. Please try again.";
}
