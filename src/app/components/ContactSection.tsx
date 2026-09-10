import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitContact } from "../../services/contact";

const benefits = [
  "Free 30-minute consultation",
  "Response within 24 hours",
  "Transparent pricing",
  "Custom business solutions",
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nsldigitallab.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: (
      <>
        Remote-First Agency
        <br />
        Serving clients across India, USA, UK, Canada & Australia.
      </>
    ),
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon – Sat • 10:00 AM – 7:00 PM (IST)",
  },
];

export default function ContactCTA() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      const result = await submitContact(form);

      if (!result.success) {
        alert("Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        navigate("/thank-you?type=contact");
      }, 1200);
    } finally {
      setLoading(false);
    }
  }

  const inputClassName =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-400/60 focus:bg-white/[0.06] sm:px-5 sm:py-4 sm:text-base";

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden bg-[#060b14] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">
              Free  Counsultation
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Ready to Grow
              <br />
              Your Business?
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Whether you need a modern website,
              UI/UX design, SEO optimization,
              or digital marketing, we're here to
              help your business grow online.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-300 sm:text-base"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 sm:h-5 sm:w-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-5 border-t border-white/[0.06] pt-10">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-2.5">
                    <detail.icon className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white sm:text-base">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm sm:rounded-3xl sm:p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Start Your Project
            </h3>

            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              <input
                required
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className={inputClassName}
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className={inputClassName}
              />

              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={form.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                className={inputClassName}
              />

              <select
                value={form.service}
                onChange={(e) =>
                  setForm({
                    ...form,
                    service: e.target.value,
                  })
                }
                className={inputClassName}
              >
                <option value="" className="text-black">
                  Select Service (Optional)
                </option>

                <option className="text-black">Website Design</option>

                <option className="text-black">UI/UX Design</option>

                <option className="text-black">SEO Services</option>

                <option className="text-black">Digital Marketing</option>

                <option className="text-black">Landing Page Design</option>

                <option className="text-black">Other</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className={inputClassName}
              />

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-[#060b14] transition-all duration-200 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70 sm:py-4 sm:text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                🔒 Your information is secure. We never share your data.
              </p>

              {success && (
                <div className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-medium sm:text-base">
                      Thank you! Your request has been submitted successfully.
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-green-300">
                    We'll review your project and get back to you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
