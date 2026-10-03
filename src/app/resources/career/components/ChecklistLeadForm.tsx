import { FormEvent, useState } from "react";

import { useCareerPageSlug } from "../context/CareerTrackingContext";
import { submitChecklistLead } from "../utils/checklistLead";
import { trackLeadMagnetSubmit } from "../utils/trackLeadMagnet";

type Props = {
  submitLabel?: string;
  onSuccess: () => void;
  id?: string;
};

export default function ChecklistLeadForm({
  submitLabel = "Send Me the Checklist",
  onSuccess,
  id = "get-checklist",
}: Props) {
  const pageSlug = useCareerPageSlug();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const name = firstName.trim();
    const address = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !address || !emailRegex.test(address)) {
      setError("Please enter your first name and a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const result = await submitChecklistLead({
        firstName: name,
        email: address,
        sourcePage: pageSlug,
      });

      if (result.success) {
        trackLeadMagnetSubmit(pageSlug);
        onSuccess();
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id={id} className="scroll-mt-24">
      <form className="grid max-w-md gap-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor={`lead-first-name-${pageSlug}`}
            className="block text-sm font-medium text-slate-800"
          >
            First Name
          </label>
          <input
            id={`lead-first-name-${pageSlug}`}
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1.5 w-full min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-400 focus:ring-2"
          />
        </div>
        <div>
          <label
            htmlFor={`lead-email-${pageSlug}`}
            className="block text-sm font-medium text-slate-800"
          >
            Email Address
          </label>
          <input
            id={`lead-email-${pageSlug}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full min-h-[44px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-400 focus:ring-2"
          />
        </div>
        {error ? (
          <p className="text-sm text-red-600" role="alert">{error}</p>
        ) : null}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60 sm:w-fit"
        >
          {loading ? "Sending…" : submitLabel}
        </button>
        <p className="text-xs leading-5 text-slate-500">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </section>
  );
}
