import { useState } from "react";
import { Download, Mail, ShieldCheck, LoaderCircle } from "lucide-react";

type ResourceDownloadProps = {
  resourceTitle: string;
  downloadUrl: string;
  type?: string;
};

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec";

export default function ResourceDownload({
  resourceTitle,
  downloadUrl,
  type = "file",
}: ResourceDownloadProps) {
  const [email, setEmail] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const ctaLabel = type.toLowerCase().includes("pdf")
    ? "Download PDF"
    : "Open download";

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

      // Google Ads conversion: Website Template Bundle Signup
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-11521753483/BdRPCLqNWYEdEIuDpPYq",
        });
      }

      setIsUnlocked(true);
    } catch (error) {
      console.error("Resource download form error:", error);
      setError("Unable to unlock the download. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {!isUnlocked ? (
        <>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-cyan-600" />
            <h2 className="text-base font-semibold text-[#0f172a]">
              Unlock this resource
            </h2>
          </div>
          <p className="mt-1.5 text-sm leading-6 text-slate-600">
            Enter your email to get the {resourceTitle}. No spam.
          </p>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex flex-col gap-2 sm:flex-row">
              <label htmlFor="resource-email" className="sr-only">
                Email address
              </label>
              <input
                id="resource-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                disabled={isSubmitting}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={isSubmitting || !isEmailValid}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Unlocking
                  </>
                ) : (
                  "Unlock download"
                )}
              </button>
            </div>

            {(error || (!isEmailValid && email.length > 0)) && (
              <p className="mt-2 text-xs font-medium text-red-600" aria-live="polite">
                {error || "Enter a valid email address."}
              </p>
            )}
          </form>

          <p className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-600" />
            Privacy protected · unsubscribe anytime
          </p>
        </>
      ) : (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              Your resource is unlocked
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Download is ready. Keep the file for later reference.
            </p>
          </div>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:bg-cyan-300"
          >
            <Download className="h-4 w-4" />
            {ctaLabel}
          </a>
        </div>
      )}
    </div>
  );
}
