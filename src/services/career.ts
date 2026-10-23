const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec";

export type CareerSubmitStatus = "confirmed" | "unconfirmed" | "rejected" | "failed";

export interface CareerSubmitResult {
  status: CareerSubmitStatus;
  id?: string;
  /** True when the applicant should see the success state. */
  success: boolean;
}

export interface CareerApplicationData {
  name: string;
  email: string;
  phone: string;
  resume: string;
  jobTitle: string;
  jobSlug?: string;
  message: string;
}

const toResult = (status: CareerSubmitStatus, id?: string): CareerSubmitResult => ({
  status,
  id,
  success: status === "confirmed" || status === "unconfirmed",
});

/** Vite dev has no /api route; post directly so local forms still work. Never confirmed. */
async function submitDirectForDev(data: CareerApplicationData): Promise<CareerSubmitResult> {
  await fetch(SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      type: "career",
      ...data,
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
  try {
    const res = await fetchImpl("/api/career-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, jobSlug: data.jobSlug ?? "general" }),
    });

    if (res.status === 404 && import.meta.env?.DEV) {
      return await submitDirectForDev(data);
    }

    const body = (await res.json().catch(() => ({}))) as { status?: string; id?: string };

    if (res.status === 200 && body.status === "confirmed" && body.id) {
      return toResult("confirmed", body.id);
    }
    if (res.status === 202) return toResult("unconfirmed");
    if (res.status === 400) return toResult("rejected");
    return toResult("failed");
  } catch (error) {
    console.error(error);
    return toResult("failed");
  }
}
