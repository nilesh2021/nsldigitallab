
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Link,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { submitCareerApplication } from "../../services/career";

type Props = {
  jobTitle: string;
};

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const result = await submitCareerApplication({
        ...form,
        jobTitle,
      });

      if (!result.success) {
        alert("Something went wrong.");
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
    <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-2xl">
       

      <form onSubmit={handleSubmit} className="space-y-6 px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-3">
            <label htmlFor="name" className="text-sm font-medium text-slate-200">
              Full Name
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <User className="h-5 w-5" />
              </div>
              <input
                id="name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full rounded-[24px] border border-white/10 bg-slate-950/80 py-4 pl-14 pr-4 text-white outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/10"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="email" className="text-sm font-medium text-slate-200">
              Email Address
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Mail className="h-5 w-5" />
              </div>
              <input
                id="email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-[24px] border border-white/10 bg-slate-950/80 py-4 pl-14 pr-4 text-white outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/10"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-3">
            <label htmlFor="phone" className="text-sm font-medium text-slate-200">
              Phone Number
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Phone className="h-5 w-5" />
              </div>
              <input
                id="phone"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="w-full rounded-[24px] border border-white/10 bg-slate-950/80 py-4 pl-14 pr-4 text-white outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/10"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="resume" className="text-sm font-medium text-slate-200">
              Resume / Portfolio Link (optional)
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <Link className="h-5 w-5" />
              </div>
              <input
                id="resume"
                value={form.resume}
                onChange={(e) =>
                  setForm({
                    ...form,
                    resume: e.target.value,
                  })
                }
                type="text"
                name="resume"
                placeholder="Google Drive, LinkedIn or Portfolio URL"
                className="w-full rounded-[24px] border border-white/10 bg-slate-950/80 py-4 pl-14 pr-4 text-white outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/10"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <label htmlFor="message" className="text-sm font-medium text-slate-200">
            Why do you want to join nsldigitallab? <span className="text-slate-500">(Optional)</span>
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute top-4 left-4 text-slate-400">
              <MessageSquare className="h-5 w-5" />
            </div>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              name="message"
              rows={5}
              placeholder="Share a short note..."
              className="w-full rounded-[24px] border border-white/10 bg-slate-950/80 py-4 pl-14 pr-4 text-white outline-none resize-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-500/10"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-[0_20px_50px_rgba(56,189,248,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_25px_60px_rgba(56,189,248,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>

        <p className="text-center text-sm text-slate-500">
          Your details are secure and only used for application processing.
        </p>
      </form>
    </div>
  );
}