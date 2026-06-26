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

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-[#07142B] via-[#202851] to-[#24356d] py-24"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">

              Free  Counsultation 
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white">

              Ready to Grow
              <br />
              Your Business?

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">

              Whether you need a modern website,
              UI/UX design, SEO optimization,
              or digital marketing, we're here to
              help your business grow online.

            </p>

            <div className="mt-10 space-y-5">

              {[
                "Free 30-minute consultation",
                "Response within 24 hours",
                "Transparent pricing",
                "Custom business solutions",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-slate-200"
                >

                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3">

                  <Mail className="text-cyan-400" />

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Email

                  </p>

                  <p className="text-white">

                    hello@nsldigitallab.com

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3">

                  <MapPin className="text-cyan-400" />

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Location

                  </p>

                  <p className="text-white">

             
 Remote-First Agency
Serving clients across India, USA, UK, Canada & Australia.

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-cyan-500/10 p-3">

                  <Clock className="text-cyan-400" />

                </div>

                <div>

                  <p className="text-sm text-slate-500">

                    Availability

                  </p>

                  <p className="text-white">

                 Mon – Sat • 10:00 AM – 7:00 PM (IST)

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

            <h3 className="text-3xl font-bold text-white">

              Start Your Project

            </h3>

            <p className="mt-3 text-slate-400">

              Tell us about your project and we'll get back to you within 24 hours.

            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5"
            >              <input
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
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
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
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
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
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
              />

              <select
                value={form.service}
                onChange={(e) =>
                  setForm({
                    ...form,
                    service: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
              >
                <option value="" className="text-black">
                  Select Service (Optional)
                </option>

                <option className="text-black">
                  Website Design
                </option>

                <option className="text-black">
                  UI/UX Design
                </option>

                <option className="text-black">
                  SEO Services
                </option>

                <option className="text-black">
                  Digital Marketing
                </option>

                <option className="text-black">
                  Landing Page Design
                </option>

                <option className="text-black">
                  Other
                </option>
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
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-xl
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
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

                    <span className="font-medium">
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