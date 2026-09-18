import { CheckCircle2, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://www.linkedin.com/company/nsldigitallab/";
const INSTAGRAM_URL = "https://www.instagram.com/nsldigitallab";

export default function CareerThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
        <CheckCircle2 className="mx-auto h-14 w-14 text-green-400" />

        <h1 className="mt-6 text-3xl font-bold text-white">
          Application submitted
        </h1>

        <p className="mt-3 text-base text-slate-300">
          We&apos;ll review it and get back to you if there&apos;s a match.
        </p>

        <p className="mt-8 text-sm text-slate-400">Follow us</p>
        <div className="mt-3 flex justify-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0c75dc]"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
        </div>

        <Link
          to="/resources"
          className="mt-8 inline-block text-sm font-semibold text-slate-400 transition hover:text-white"
        >
          Check out our free resources
        </Link>
      </div>
    </main>
  );
}
