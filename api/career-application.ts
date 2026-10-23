const DEFAULT_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec";

const MAX = { name: 120, email: 200, phone: 30, resume: 500, jobTitle: 150, jobSlug: 80, message: 2000 };

export interface CareerApplicationInput {
  name: string;
  email: string;
  phone: string;
  resume: string;
  jobTitle: string;
  jobSlug: string;
  message: string;
  website?: string;
}

export type ApplicationResult =
  | { status: "confirmed"; id: string }
  | { status: "unconfirmed" }
  | { status: "rejected"; error: string }
  | { status: "failed" };

export function validateApplication(body: unknown): CareerApplicationInput | string {
  if (!body || typeof body !== "object") return "Invalid request body.";
  const b = body as Record<string, unknown>;
  const str = (k: keyof typeof MAX) => (typeof b[k] === "string" ? (b[k] as string).trim() : "");

  const input: CareerApplicationInput = {
    name: str("name"),
    email: str("email"),
    phone: str("phone"),
    resume: str("resume"),
    jobTitle: str("jobTitle"),
    jobSlug: str("jobSlug"),
    message: str("message"),
    website: typeof b.website === "string" ? b.website : "",
  };

  for (const key of Object.keys(MAX) as (keyof typeof MAX)[]) {
    if (input[key].length > MAX[key]) return `${key} is too long.`;
  }
  if (!input.name) return "Name is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) return "A valid email is required.";
  if (!input.jobTitle || !/^[a-z0-9-]+$/.test(input.jobSlug)) return "Job is required.";
  if (input.resume && !/^https?:\/\/\S+$/i.test(input.resume)) return "Resume must be a URL.";
  return input;
}

/** Only an explicit `{ ok: true, id }` from the Apps Script counts as accepted. */
export function interpretScriptResponse(status: number, text: string): ApplicationResult {
  if (status < 200 || status >= 300) return { status: "failed" };
  try {
    const data = JSON.parse(text) as { ok?: unknown; id?: unknown };
    if (data.ok === true && typeof data.id === "string" && data.id) {
      return { status: "confirmed", id: data.id };
    }
    if (data.ok === false) return { status: "rejected", error: "Application was not accepted." };
  } catch {
    // Non-JSON replies (e.g. the legacy HTML response) cannot confirm acceptance.
  }
  return { status: "unconfirmed" };
}

const json = (status: number, body: ApplicationResult) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json(400, { status: "rejected", error: "Invalid JSON." });
  }

  const input = validateApplication(body);
  if (typeof input === "string") return json(400, { status: "rejected", error: input });

  // Honeypot: pretend success to bots without forwarding.
  if (input.website) return json(202, { status: "unconfirmed" });

  const { website: _ignored, ...payload } = input;
  const scriptUrl = process.env.APPS_SCRIPT_CAREER_URL || DEFAULT_SCRIPT_URL;

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        type: "career",
        ...payload,
        source: "Career Page",
        createdAt: new Date().toISOString(),
      }),
    });
    const result = interpretScriptResponse(res.status, await res.text());
    const code = result.status === "confirmed" ? 200 : result.status === "unconfirmed" ? 202 : 502;
    return json(code, result);
  } catch {
    return json(502, { status: "failed" });
  }
}
