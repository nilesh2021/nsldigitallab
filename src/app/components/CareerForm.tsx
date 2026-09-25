import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Link as LinkIcon,
  MessageSquare,
  ArrowRight,
  Loader2,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import { submitCareerApplication } from "../../services/career";

type Props = {
  jobTitle: string;
};

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-400/60 focus:bg-white/[0.06]";

export default function CareerForm({ jobTitle }: Props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (error) setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await submitCareerApplication({
        ...form,
        jobTitle,
      });

      if (!result.success) {
        setError("Something went wrong. Please try again.");
        return;
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        resume: "",
        message: "",
      });

      navigate("/thank-you?type=career");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1220]/85 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-sm">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      <div className="border-b border-white/[0.06] px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Apply now
            </p>
            <h3 className="mt-1 text-xl font-bold tracking-tight text-white">
              Join the team
            </h3>
            <p className="mt-1 max-w-md text-sm leading-6 text-slate-400">
              We review every application within a few business days.
            </p>
          </div>

          {jobTitle ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-slate-200">
              <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
              <span className="font-medium">{jobTitle}</span>
            </div>
          ) : null}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-200">
              Full name <span className="text-cyan-400">*</span>
            </label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                id="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Jane Doe"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-200">
              Email address <span className="text-cyan-400">*</span>
            </label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                id="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-200">
              Phone number{" "}
              <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                id="phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="resume" className="text-sm font-medium text-slate-200">
              Resume / portfolio{" "}
              <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <div className="relative">
              <LinkIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                id="resume"
                value={form.resume}
                onChange={(e) => update("resume", e.target.value)}
                type="text"
                name="resume"
                placeholder="Drive, LinkedIn, or portfolio URL"
                className={fieldClass}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-200">
            Why do you want to join nsldigitallab?{" "}
            <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <div className="relative">
            <MessageSquare className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              name="message"
              rows={3}
              placeholder="A short note about your experience and what you'd like to work on..."
              className={`${fieldClass} resize-none`}
            />
          </div>
        </div>

        {error ? (
          <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-[#060b14] transition-all duration-200 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit application
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-500 sm:text-sm">
          <ShieldCheck className="h-4 w-4 text-cyan-400/80" />
          Your details are used only to process this application.
        </p>
      </form>
    </div>
  );
}
