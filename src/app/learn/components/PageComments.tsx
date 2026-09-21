import { useState } from "react";
import { Loader2, MessageSquare } from "lucide-react";
import { submitContact } from "../../../services/contact";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  pageTitle: string;
};

export default function PageComments({ pageTitle }: Props) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim() || !emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!form.message.trim()) {
      setError("Please write a comment.");
      return;
    }

    setLoading(true);
    setError("");

    const result = await submitContact({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: "",
      service: `${pageTitle} comment`,
      message: form.message.trim(),
    });

    setLoading(false);

    if (!result.success) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section
      id="comments"
      className="scroll-mt-24 border-t border-slate-100 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
          <MessageSquare className="h-3.5 w-3.5" />
          Comments
        </span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
          Leave a comment
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Questions about this path, or something that clicked for you? Send a
          note — we read every one.
        </p>

        {sent ? (
          <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-7 text-sm leading-6 text-emerald-800">
            Thanks. Your comment was sent. We will get back to you if a reply
            is needed.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">
                  Name
                </span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-cyan-400 focus:bg-white"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-cyan-400 focus:bg-white"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">
                Comment
              </span>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="w-full resize-y rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-cyan-400 focus:bg-white"
                placeholder="Share a question or a takeaway from this lesson."
              />
            </label>

            {error ? (
              <p className="text-sm font-medium text-red-600">{error}</p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending
                </>
              ) : (
                "Post comment"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
