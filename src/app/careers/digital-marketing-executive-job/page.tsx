import { useState } from "react";
import { Link } from "react-router-dom";

import SEO from "../../../seo/SEO";
import { PAGE_SEO } from "../../../seo/pages";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import JobPostingSchema from "../../../seo/schemas/JobPostingSchema";
import FAQSchema from "../../../seo/schemas/FAQSchema";
import { submitCareerApplication } from "../../../services/career";

const faqs = [
  {
    question: "Is this a work from home digital marketing job?",
    answer:
      "Yes. This is a fully remote digital marketing executive role. You can work from home anywhere in India with a laptop and a stable internet connection.",
  },
  {
    question: "Can freshers apply for these remote digital marketing jobs?",
    answer:
      "Yes. Freshers, graduates, and career switchers are welcome if you can write clearly, follow a campaign checklist, and are willing to learn Google Analytics, Search Console, and ads dashboards.",
  },
  {
    question: "How is this different from the SEO Executive job?",
    answer:
      "The SEO Executive listing is search-only. This Digital Marketing Executive role covers SEO plus social media, Google Ads, Meta ads, and content for client campaigns. If you only want organic search, apply on the SEO Executive page.",
  },
  {
    question: "Which tools will I use?",
    answer:
      "Google Analytics (GA4), Google Search Console, Google Ads, Meta Ads Manager, Google Business Profile, Canva or similar, and spreadsheets for weekly reporting. We walk you through our templates before you start.",
  },
  {
    question: "Is this part-time or full-time?",
    answer:
      "This opening is part-time (about 2–4 hours a day) with flexible hours. Full-time hours may be offered later based on campaign load and your results.",
  },
];

export default function DigitalMarketingExecutiveJob() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleApplyNow = () => {
    setSubmitted(false);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitCareerApplication({
        name,
        email,
        phone,
        resume,
        message: "",
        jobTitle: "Digital Marketing Executive – Remote",
      });

      if (!result.success) {
        alert("Something went wrong.");
        return;
      }

      setSubmitted(true);
      setName("");
      setPhone("");
      setEmail("");
      setResume("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO {...PAGE_SEO.digitalMarketingExecutiveJob} />

      <JobPostingSchema
        title="Digital Marketing Executive – Remote"
        description="Remote digital marketing executive jobs at NSL Digital Lab. Work from home on SEO, social media, Google Ads, Meta ads, and content for real client campaigns."
        datePosted="2026-10-06"
        employmentType="PART_TIME"
        location="Remote"
        salary="5000-10000"
      />

      <FAQSchema faqs={faqs} />

      <Navigation />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="text-slate-300 text-sm mb-8">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/careers" className="hover:text-white">
              Careers
            </Link>
            <span className="mx-2">/</span>
            <span>Digital Marketing Executive</span>
          </nav>

          <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
            Remote · Marketing
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Digital Marketing Executive Jobs
            <span className="text-cyan-400">&nbsp;— Remote</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            Work-from-home digital marketing executive jobs at NSL Digital Lab:
            SEO, social media, Google Ads, Meta ads, and content for live
            client campaigns. Freshers welcome.
          </p>
        </div>
      </section>

      <section className="-mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-slate-500 text-sm">Location</p>
                <h3 className="font-bold text-xl">Remote</h3>
              </div>

              <div>
                <p className="text-slate-500 text-sm">Job Type</p>
                <h3 className="font-bold text-xl">Part-Time</h3>
              </div>

              <div>
                <p className="text-slate-500 text-sm">Experience</p>
                <h3 className="font-bold text-xl">0–2 Years</h3>
              </div>

              <div>
                <p className="text-slate-500 text-sm">Salary</p>
                <h3 className="font-bold text-xl">₹5K – ₹10K</h3>
              </div>

              <button
                type="button"
                onClick={handleApplyNow}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition-all duration-300"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-4">Job Overview</h2>
                <p className="text-slate-600 leading-8">
                  NSL Digital Lab is hiring for remote digital marketing
                  executive jobs—not an SEO-only seat. You will plan and run
                  search, social, paid ads, and content for client websites and
                  our in-house digital products so campaigns stay consistent
                  and measurable week to week.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Responsibilities</h2>
                <ul className="space-y-4 text-slate-700">
                  <li>✓ Support keyword research and on-page SEO for client landing pages</li>
                  <li>✓ Plan social calendars and Google Business Profile posts</li>
                  <li>✓ Help set up and report on Google Ads and Meta ads campaigns</li>
                  <li>✓ Check landing-page copy, CTAs, and tracking notes</li>
                  <li>✓ Send weekly performance notes from Search Console, GA4, and Ads</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-4 text-slate-700">
                  <li>✓ Google Analytics (GA4) and Search Console basics</li>
                  <li>✓ Familiarity with Google Ads or Meta Ads Manager</li>
                  <li>✓ Canva or similar for simple social creatives</li>
                  <li>✓ Clear written English for ads, captions, and reports</li>
                  <li>✓ Laptop, stable internet — no degree required</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">
                  Remote digital marketing jobs that cover the full funnel
                </h2>
                <p className="text-slate-700 leading-8 mb-4">
                  Looking for digital marketing jobs work from home that are not
                  limited to one channel? This performance marketing seat mixes
                  SEO and content marketing with social media marketing jobs
                  work and paid search or Meta ads reporting.
                </p>
                <p className="text-slate-700 leading-8 mb-4">
                  You will work on live client campaigns and NSL Digital Lab
                  products. Training covers our reporting sheet, campaign
                  checklist, and how we brief ads versus organic posts.
                </p>
                <p className="text-slate-700 leading-8">
                  Hours are flexible. Part-time remote work is the default; we
                  review quality of reports and campaign hygiene, not how long
                  you sit online.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Who Can Apply?</h2>
                <ul className="space-y-4 text-slate-700">
                  <li>✓ Freshers looking for online digital marketing jobs in India</li>
                  <li>✓ Graduates who want digital marketing executive jobs remote</li>
                  <li>✓ Career switchers with social, content, or ads interest</li>
                  <li>✓ Anyone who can follow a campaign checklist part-time from home</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const open = openFaq === index;

                    return (
                      <div
                        key={faq.question}
                        className="border rounded-2xl overflow-hidden"
                      >
                        <button
                          type="button"
                          className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                          onClick={() => setOpenFaq(open ? null : index)}
                        >
                          <span>{faq.question}</span>
                          <span>{open ? "−" : "+"}</span>
                        </button>
                        {open && (
                          <div className="px-5 pb-5 text-slate-600">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-28">
                <h3 className="text-2xl font-bold mb-6">
                  Why this role is different
                </h3>
                <ul className="space-y-4 text-slate-700">
                  <li>SEO, social, ads, and content — not search-only</li>
                  <li>Fully remote, work from home</li>
                  <li>Flexible part-time hours</li>
                  <li>Live client campaigns and reporting</li>
                  <li>Freshers welcome</li>
                </ul>
                <p className="mt-6 text-sm text-slate-500">
                  For an SEO-only seat, see our{" "}
                  <Link
                    to="/careers/seo-executive-job"
                    className="font-medium text-cyan-700 hover:underline"
                  >
                    SEO Executive
                  </Link>{" "}
                  listing.
                </p>
                <button
                  type="button"
                  onClick={handleApplyNow}
                  className="mt-6 inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="apply-heading"
            aria-describedby="apply-description"
            className="relative w-full max-w-xl rounded-3xl bg-white shadow-xl ring-1 ring-slate-200"
          >
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setShowModal(false);
              }}
              aria-label="Close application form"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              ×
            </button>

            <div className="px-6 py-8 sm:px-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <span className="text-5xl text-green-600">✓</span>
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-slate-900">
                    Application Submitted
                  </h2>
                  <p className="mt-4 text-slate-600">
                    Thank you for applying at
                    <strong> NSL Digital Lab</strong>.
                  </p>
                  <p className="text-slate-600">
                    Our team will review your application and contact you if
                    there is a match.
                  </p>
                </div>
              ) : (
                <>
                  <h2
                    id="apply-heading"
                    className="text-2xl font-semibold text-slate-900"
                  >
                    Apply for Digital Marketing Executive
                  </h2>
                  <p
                    id="apply-description"
                    className="mt-3 text-sm leading-6 text-slate-600"
                  >
                    Complete the form below. Use this form only for the remote
                    Digital Marketing Executive role.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-4 space-y-5">
                    <div>
                      <label
                        htmlFor="applicant-name"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Full Name
                      </label>
                      <input
                        id="applicant-name"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="applicant-phone"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Phone Number{" "}
                        <span className="font-normal text-slate-500">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="applicant-phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="applicant-email"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="applicant-email"
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="applicant-resume"
                        className="block text-sm font-medium text-slate-700"
                      >
                        Resume / LinkedIn / Portfolio URL
                      </label>
                      <input
                        id="applicant-resume"
                        type="text"
                        placeholder="Optional URL"
                        value={resume}
                        onChange={(e) => setResume(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting && (
                        <span className="mr-2 inline-flex h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      )}
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
