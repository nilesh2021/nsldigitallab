import { useState } from "react";
import { Download, Mail, ShieldCheck, LoaderCircle } from "lucide-react";

type ResourceDownloadProps = {
  resourceTitle: string;
  downloadUrl: string;
};

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec";

export default function ResourceDownload({
  resourceTitle,
  downloadUrl,
}: ResourceDownloadProps) {
  const [email, setEmail] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          type: "resource_download",
          email: trimmedEmail,
          interest: resourceTitle,
          source: window.location.href,
        }),
      });

      setIsUnlocked(true);
    } catch (error) {
      console.error("Resource download form error:", error);
      setError("Unable to unlock the download. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-[#07142B]/20 md:p-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-5 lg:items-center">
  <div className="lg:col-span-2">
          <div className="flex h-full flex-col justify-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
              Free Resource
            </span>

            <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Get the {resourceTitle}
            </h2>

            <p className="leading-7 text-slate-600">
              Enter your email to unlock the bundle. We only use your email to
              deliver this resource — no spam, ever.
            </p>

            <div className="mt-2 flex items-center gap-3 text-sm text-slate-500">
              <ShieldCheck className="h-4 w-4 text-cyan-600" />
              <span>Privacy protected • unsubscribe anytime</span>
            </div>
          </div>
        </div>

       <div className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
            {!isUnlocked ? (
              <form onSubmit={handleSubmit}>
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
    <label htmlFor="resource-email" className="sr-only">
      Email address
    </label>

    <div className="relative min-w-0 flex-1">
      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-600" />

      <input
        id="resource-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        disabled={isSubmitting}
        required
        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:opacity-70"
      />
    </div>

    <button
      type="submit"
      disabled={isSubmitting || !isEmailValid}
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:from-cyan-600 hover:to-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isSubmitting ? (
        <>
          <LoaderCircle className="h-5 w-5 animate-spin" />
          Unlocking...
        </>
      ) : (
        "Unlock Download"
      )}
    </button>
  </div>

  {(error || (!isEmailValid && email.length > 0)) && (
    <p className="mt-3 text-sm font-medium text-red-600" aria-live="polite">
      {error || "Enter a valid email address."}
    </p>
  )}
</form>
            ) : (
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
  <div className="min-w-0">
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
        <ShieldCheck className="h-5 w-5 text-emerald-600" />
      </div>

      <div>
        <p className="font-semibold text-emerald-600">
          Your resource is unlocked
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          Open the template bundle in Google Drive and download the files you need.
        </p>
      </div>
    </div>
  </div>

  <a
    href={downloadUrl}
    target="_blank"
    rel="noreferrer"
    className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#16B9E8] to-[#2563EB] px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:from-[#0EA5D5] hover:to-[#1D4ED8] hover:shadow-xl md:w-auto"
  >
    <Download className="h-5 w-5" />
    Open Template Bundle
  </a>
</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}