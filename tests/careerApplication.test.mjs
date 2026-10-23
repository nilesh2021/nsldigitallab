import { test, beforeEach } from "node:test";
import assert from "node:assert/strict";

const store = new Map();
globalThis.sessionStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
};
const gtagCalls = [];
globalThis.window = { gtag: (...args) => gtagCalls.push(args) };

const api = await import("../api/career-application.ts");
const { submitCareerApplication } = await import("../src/services/career.ts");
const { trackJobApplication } = await import("../src/utils/analytics.ts");

const validBody = {
  name: "Test Applicant",
  email: "applicant@example.com",
  phone: "9999999999",
  resume: "https://example.com/cv",
  jobTitle: "Data Entry Remote Job",
  jobSlug: "data-entry-remote-job",
  message: "",
};

const jsonResponse = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

beforeEach(() => {
  gtagCalls.length = 0;
});

// ---- Endpoint -------------------------------------------------------------

test("endpoint confirms only when Apps Script returns ok:true with an id", async () => {
  globalThis.fetch = async () => new Response(JSON.stringify({ ok: true, id: "row-42" }), { status: 200 });
  const res = await api.POST(new Request("http://x/api", { method: "POST", body: JSON.stringify(validBody) }));
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { status: "confirmed", id: "row-42" });
});

test("endpoint returns unconfirmed for the legacy non-JSON script reply", async () => {
  globalThis.fetch = async () => new Response("<html>Success</html>", { status: 200 });
  const res = await api.POST(new Request("http://x/api", { method: "POST", body: JSON.stringify(validBody) }));
  assert.equal(res.status, 202);
  assert.equal((await res.json()).status, "unconfirmed");
});

test("endpoint rejects invalid input without calling the script", async () => {
  let called = false;
  globalThis.fetch = async () => ((called = true), new Response("{}"));
  const res = await api.POST(
    new Request("http://x/api", { method: "POST", body: JSON.stringify({ ...validBody, email: "nope" }) }),
  );
  assert.equal(res.status, 400);
  assert.equal(called, false);
});

test("endpoint reports failure when the script is unreachable or errors", async () => {
  globalThis.fetch = async () => {
    throw new Error("network down");
  };
  let res = await api.POST(new Request("http://x/api", { method: "POST", body: JSON.stringify(validBody) }));
  assert.equal(res.status, 502);
  globalThis.fetch = async () => new Response("boom", { status: 500 });
  res = await api.POST(new Request("http://x/api", { method: "POST", body: JSON.stringify(validBody) }));
  assert.equal(res.status, 502);
});

test("endpoint treats ok:false as rejected", () => {
  assert.equal(api.interpretScriptResponse(200, '{"ok":false}').status, "rejected");
});

test("honeypot submissions are not forwarded", async () => {
  let called = false;
  globalThis.fetch = async () => ((called = true), new Response("{}"));
  const res = await api.POST(
    new Request("http://x/api", { method: "POST", body: JSON.stringify({ ...validBody, website: "spam" }) }),
  );
  assert.equal(res.status, 202);
  assert.equal(called, false);
});

// ---- Client + tracking ----------------------------------------------------

async function submitAndTrack(fetchImpl) {
  const result = await submitCareerApplication(validBody, fetchImpl);
  const fired = trackJobApplication(result, validBody.jobSlug, validBody.jobTitle);
  return { result, fired };
}

test("confirmed submission fires generate_lead once, without personal data", async () => {
  const { result, fired } = await submitAndTrack(async () =>
    jsonResponse(200, { status: "confirmed", id: "conf-1" }),
  );
  assert.equal(result.success, true);
  assert.equal(fired, true);
  assert.equal(gtagCalls.length, 1);
  const [, eventName, params] = gtagCalls[0];
  assert.equal(eventName, "generate_lead");
  const serialized = JSON.stringify(params);
  for (const pii of [validBody.name, validBody.email, validBody.phone, validBody.resume]) {
    assert.ok(!serialized.includes(pii), `analytics payload leaked ${pii}`);
  }
});

test("duplicate confirmation id (retry, double click, Strict Mode) does not fire again", async () => {
  const confirmed = async () => jsonResponse(200, { status: "confirmed", id: "conf-dup" });
  await submitAndTrack(confirmed);
  await submitAndTrack(confirmed);
  trackJobApplication({ status: "confirmed", id: "conf-dup" }, "x", "y");
  assert.equal(gtagCalls.length, 1);
});

test("refresh: an id already stored in sessionStorage does not fire", async () => {
  store.set("nsl_sent_application_ids", JSON.stringify(["conf-before-refresh"]));
  const fired = trackJobApplication({ status: "confirmed", id: "conf-before-refresh" }, "x", "y");
  assert.equal(fired, false);
  assert.equal(gtagCalls.length, 0);
});

test("unconfirmed submission shows success to the applicant but fires nothing", async () => {
  const { result, fired } = await submitAndTrack(async () => jsonResponse(202, { status: "unconfirmed" }));
  assert.equal(result.success, true);
  assert.equal(fired, false);
  assert.equal(gtagCalls.length, 0);
});

test("rejected submission shows error and fires nothing", async () => {
  const { result, fired } = await submitAndTrack(async () =>
    jsonResponse(400, { status: "rejected", error: "bad" }),
  );
  assert.equal(result.success, false);
  assert.equal(fired, false);
  assert.equal(gtagCalls.length, 0);
});

test("network failure shows error and fires nothing", async () => {
  const { result, fired } = await submitAndTrack(async () => {
    throw new Error("offline");
  });
  assert.equal(result.success, false);
  assert.equal(fired, false);
  assert.equal(gtagCalls.length, 0);
});

test("200 without a confirmation id is not treated as confirmed", async () => {
  const { fired } = await submitAndTrack(async () => jsonResponse(200, { status: "confirmed" }));
  assert.equal(fired, false);
  assert.equal(gtagCalls.length, 0);
});
