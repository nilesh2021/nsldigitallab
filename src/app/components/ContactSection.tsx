import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitContact } from "../../services/contact";

const benefits = [
  "30-minute consult",
  "Reply in 24 hours",
  "Clear pricing",
];

type FormErrors = {
  name?: string;
  email?: string;
  form?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactCTA() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [showOptional, setShowOptional] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function updateField(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === "name" || field === "email") {
      setErrors((prev) => ({ ...prev, [field]: undefined, form: undefined }));
    } else {
      setErrors((prev) => ({ ...prev, form: undefined }));
    }
  }

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (!form.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!emailRegex.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }

    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const nextErrors = validate();
    if (nextErrors.name || nextErrors.email) {
      setErrors(nextErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const result = await submitContact(form);

      if (!result.success) {
        setErrors({ form: "Something went wrong. Please try again." });
        setLoading(false);
        return;
      }

      navigate("/thank-you?type=contact");
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
      setLoading(false);
    }
  }

  const inputClassName =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-cyan-400/60 focus:bg-white/[0.06] sm:px-5 sm:py-4 sm:text-base";

  const errorInputClassName =
    "border-red-400/50 focus:border-red-400/70";

  const labelClassName =
    "mb-1.5 block text-sm font-medium text-slate-300";

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative overflow-hidden bg-[#060b14] py-20 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-500/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">
              Free consultation
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Ready to grow
              <br />
              your business?
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Free 30-minute consult · reply within 24 hours. Tell us what you
              need — website, UI/UX, SEO, or marketing — and we’ll follow up.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {benefits.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-white/[0.06] pt-8 lg:mt-10 lg:pt-10">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Other ways to reach us
              </p>

              <a
                href="mailto:hello@nsldigitallab.com"
                className="flex items-start gap-4 rounded-xl p-1 -m-1 hover:bg-white/[0.03]"
              >
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-2.5">
                  <Mail className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Email
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white sm:text-base">
                    hello@nsldigitallab.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-2.5">
                  <Clock className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Hours
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white sm:text-base">
                    Mon – FRI · 10:00 AM – 7:00 PM (IST)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-2.5">
                  <MapPin className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Location
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white sm:text-base">
                    Remote-first, All Over world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm sm:rounded-3xl sm:p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Get a free consultation
            </h3>

            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Three fields. We’ll reply within 24 hours.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 space-y-4 sm:mt-8 sm:space-y-5"
            >
              <div>
                <label htmlFor="contact-name" className={labelClassName}>
                  Name <span className="text-cyan-300">*</span>
                </label>
                <input
                  id="contact-name"
                  required
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`${inputClassName} ${errors.name ? errorInputClassName : ""}`}
                />
                {errors.name && (
                  <p id="contact-name-error" className="mt-1.5 text-sm text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClassName}>
                  Email <span className="text-cyan-300">*</span>
                </label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={`${inputClassName} ${errors.email ? errorInputClassName : ""}`}
                />
                {errors.email && (
                  <p id="contact-email-error" className="mt-1.5 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClassName}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="What do you need help with?"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className={inputClassName}
                />
              </div>

              <button
                type="button"
                onClick={() => setShowOptional((open) => !open)}
                className="flex items-center gap-1.5 text-sm font-medium text-cyan-300 hover:text-cyan-200"
                aria-expanded={showOptional}
              >
                Add phone or service
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${showOptional ? "rotate-180" : ""}`}
                />
              </button>

              {showOptional && (
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label htmlFor="contact-phone" className={labelClassName}>
                      Phone <span className="font-normal text-slate-500">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className={labelClassName}>
                      Service <span className="font-normal text-slate-500">(optional)</span>
                    </label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className={inputClassName}
                    >
                      <option value="" className="text-black">
                        Select a service
                      </option>
                      <option className="text-black">Website Design</option>
                      <option className="text-black">UI/UX Design</option>
                      <option className="text-black">SEO Services</option>
                      <option className="text-black">Digital Marketing</option>
                      <option className="text-black">Landing Page Design</option>
                      <option className="text-black">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {errors.form && (
                <p className="text-sm text-red-400" role="alert">
                  {errors.form}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-[#060b14] transition-all duration-200 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70 sm:py-4 sm:text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get a free consultation
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                Your information is secure. We never share your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
