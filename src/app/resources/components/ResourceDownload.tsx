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
          formType: "resource-download",
          email: trimmedEmail,
          resourceTitle,
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString(),
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
    <section className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl shadow-[#07142B]/20 md:p-10">
      <div className="max-w-2xl">
        <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
          Free Resource
        </span>

        <h2 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
          Get the {resourceTitle}
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Enter your email to unlock this free resource. You will then be able
          to download the complete bundle.
        </p>

        {!isUnlocked ? (
          <form onSubmit={handleSubmit} className="mt-7">
            <label
              htmlFor="resource-email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email address
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-600" />

                <input
                  id="resource-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 disabled:cursor-not-allowed disabled:opacity-70"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:from-cyan-600 hover:to-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
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

            {error && (
              <p className="mt-3 text-sm font-medium text-red-600">
                {error}
              </p>
            )}
          </form>
        ) : (
          <div className="mt-7">
            <p className="mb-4 font-semibold text-emerald-600">
              Your download is ready.
            </p>

            <a
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <Download className="h-5 w-5" />
              Download Free Bundle
            </a>
          </div>
        )}

        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
          <ShieldCheck className="h-4 w-4 text-cyan-600" />
          Your email is used only to unlock this resource.
        </div>
      </div>
    </section>
  );
}