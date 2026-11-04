import { getStoredCareerAttribution } from "../utils/campaignAttribution.ts";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec";

export type CareerSubmitStatus = "confirmed" | "unconfirmed" | "rejected" | "failed";

export interface CareerSubmitResult {
  status: CareerSubmitStatus;
  id?: string;
  /** True when the applicant should see the success state. */
  success: boolean;
  /** Server validation or rejection message when success is false. */
  error?: string;
}

export interface CareerApplicationData {
  name: string;
  email: string;
  phone: string;
  resume: string;
  jobTitle: string;
  jobSlug?: string;
  message: string;
  marketingOptIn?: boolean;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  landingPage?: string;
}

function withAttribution(data: CareerApplicationData): CareerApplicationData {
  const att = getStoredCareerAttribution();
  return {
    ...data,
    utmSource: data.utmSource ?? att.utmSource,
    utmMedium: data.utmMedium ?? att.utmMedium,
    utmCampaign: data.utmCampaign ?? att.utmCampaign,
    utmTerm: data.utmTerm ?? att.utmTerm,
    utmContent: data.utmContent ?? att.utmContent,
    landingPage: data.landingPage ?? att.landingPage,
    marketingOptIn: Boolean(data.marketingOptIn),
  };
}

const toResult = (
  status: CareerSubmitStatus,
  id?: string,
  error?: string,
): CareerSubmitResult => ({
  status,
  id,
  success: status === "confirmed" || status === "unconfirmed",
  error,
});

/** Vite dev has no /api route; post directly so local forms still work. Never confirmed. */
async function submitDirectForDev(data: CareerApplicationData): Promise<CareerSubmitResult> {
  const payload = withAttribution(data);
  await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      type: "career",
      ...payload,
      source: "Career Page",
      createdAt: new Date().toISOString(),
    }),
  });
  return toResult("unconfirmed");
}

export async function submitCareerApplication(
  data: CareerApplicationData,
  fetchImpl: typeof fetch = fetch,
): Promise<CareerSubmitResult> {
  const payload = withAttribution(data);
  try {
    const res = await fetchImpl("/api/career-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, jobSlug: payload.jobSlug ?? "general" }),
    });

    if (res.status === 404 && import.meta.env?.DEV) {
      return await submitDirectForDev(payload);
    }

    const body = (await res.json().catch(() => ({}))) as {
      status?: string;
      id?: string;
      error?: string;
    };

    if (res.status === 200 && body.status === "confirmed" && body.id) {
      return toResult("confirmed", body.id);
    }
    if (res.status === 202) return toResult("unconfirmed");
    if (res.status === 400) {
      return { status: "rejected", success: false, error: body.error ?? "Please check your answers and try again." };
    }
    if (res.status === 502) {
      return {
        status: "failed",
        success: false,
        error:
          body.error ??
          "We could not reach the application server. Please try again in a few minutes.",
      };
    }
    return { status: "failed", success: false, error: "Something went wrong. Please try again." };
  } catch (error) {
    console.error(error);
    return {
      status: "failed",
      success: false,
      error: "Network error. Check your connection and try again.",
    };
  }
}
