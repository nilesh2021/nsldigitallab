import { useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  Instagram,
  Linkedin,
  LoaderCircle,
  Mail,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { INSTAGRAM_URL, LINKEDIN_COMPANY_URL } from "../../../data/social";

type ResourceDownloadProps = {
  slug: string;
  resourceTitle: string;
  downloadUrl: string;
  type?: string;
};

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxRaUoQNewWCzj8MQHEUkQplWd8oAUBxrCfa-7Optv5jtcEO4U5N_zzPZncjx-LWYLB/exec";

const WEBSITE_TEMPLATE_BUNDLE_SLUG = "1000-website-templates-mega-bundle";
const WEBSITE_TEMPLATE_BUNDLE_CONVERSION =
  "AW-11521753483/BdRPCLqNWYEdEIuDpPYq";

const downloadButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.6)] transition hover:bg-slate-800";

const perks = ["Instant access", "No spam, unsubscribe anytime", "Free forever"];

export default function ResourceDownload({
  slug,
  resourceTitle,
  downloadUrl,
  type = "file",
}: ResourceDownloadProps) {
  const [email, setEmail] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialog, setDialog] = useState<"unlocked" | "follow" | null>(null);
  const conversionFiredRef = useRef(false);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const ctaLabel = type.toLowerCase().includes("pdf")
    ? "Download PDF"
    : "Open download";

  function handleDownloadClick() {
    window.setTimeout(() => setDialog("follow"), 0);
  }

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

      if (
        slug === WEBSITE_TEMPLATE_BUNDLE_SLUG &&
        !conversionFiredRef.current &&
        typeof window !== "undefined" &&
        typeof window.gtag === "function"
      ) {
        conversionFiredRef.current = true;
        window.gtag("event", "conversion", {
          send_to: WEBSITE_TEMPLATE_BUNDLE_CONVERSION,
        });
      }

      setIsUnlocked(true);
      setDialog("unlocked");
    } catch (error) {
      console.error("Resource download form error:", error);
      setError("Unable to unlock the download. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/70">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
          <Mail className="h-3.5 w-3.5" />
          Free download
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
          {type}
        </span>
      </div>
      <h2 className="mt-3 text-xl font-bold leading-snug tracking-tight text-slate-900">
        {resourceTitle}
      </h2>

      {!isUnlocked ? (
        <>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Enter your email to unlock the download instantly.
          </p>

          <form onSubmit={handleSubmit} className="mt-5">
            <div className="flex flex-col gap-3">
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
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={isSubmitting || !isEmailValid}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
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

          <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                {perk}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="mt-5">
          <div className="flex items-start gap-3 rounded-2xl bg-emerald-50 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-emerald-800">
                Your resource is unlocked
              </p>
              <p className="mt-0.5 text-sm text-emerald-700/80">
                Download is ready. Keep the file for later reference.
              </p>
            </div>
          </div>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
            onClick={handleDownloadClick}
            className={`${downloadButtonClass} mt-4 w-full`}
          >
            <Download className="h-4 w-4" />
            {ctaLabel}
          </a>
        </div>
      )}

      <Dialog
        open={dialog !== null}
        onOpenChange={(open) => {
          if (!open) {
            setDialog(null);
          }
        }}
      >
        <DialogContent className="overflow-hidden rounded-2xl border-slate-200 bg-white p-0 sm:max-w-[420px]">
          {dialog === "follow" ? (
            <div className="px-6 pb-6 pt-8">
              <DialogHeader className="items-center space-y-0 text-center sm:text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/70">
                  <CheckCircle2 className="h-7 w-7" aria-hidden />
                </div>
                <DialogTitle className="mt-5 text-xl font-bold tracking-tight text-[#0f172a]">
                  Your download is ready.
                </DialogTitle>
                <DialogDescription className="mt-2 text-[15px] leading-6 text-slate-600">
                  While you're here, follow NSL Digital Lab for more free
                  resources.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 grid gap-2.5">
                <a
                  href={LINKEDIN_COMPANY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-[#0A66C2] px-3.5 py-3 text-white shadow-[0_8px_24px_rgba(10,102,194,0.28)] transition hover:bg-[#0c75dc]"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block text-sm font-semibold">
                      Follow on LinkedIn
                    </span>
                    <span className="mt-0.5 block text-xs text-white/80">
                      Career notes and project ideas
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_45%,#8134af_100%)] px-3.5 py-3 text-white shadow-[0_8px_24px_rgba(221,42,123,0.28)] transition hover:brightness-110"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block text-sm font-semibold">
                      Follow on Instagram
                    </span>
                    <span className="mt-0.5 block text-xs text-white/80">
                      Short design and marketing updates
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-[#0f172a]">
                  Your resource is unlocked
                </DialogTitle>
                <DialogDescription className="text-slate-600">
                  Download is ready.
                </DialogDescription>
              </DialogHeader>
              <a
                href={downloadUrl}
                target="_blank"
                rel="noreferrer"
                onClick={handleDownloadClick}
                className={`${downloadButtonClass} mt-2 w-full`}
              >
                <Download className="h-4 w-4" />
                {ctaLabel}
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
