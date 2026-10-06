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
    question: "Is this a work from home data entry job?",
    answer:
      "Yes. This is a fully remote data entry role. You can work from home anywhere in India with a laptop and a stable internet connection.",
  },
  {
    question: "Can freshers apply for these remote data entry jobs?",
    answer:
      "Yes. Freshers, students, and career starters are welcome if you are accurate, comfortable with Google Sheets or Excel, and can follow a simple catalog checklist.",
  },
  {
    question: "What are digital products in this job?",
    answer:
      "Digital products here means NSL Digital Lab assets such as website template bundles, SEO and marketing checklists, Figma wireframe kits, ChatGPT prompt packs, and learning-path listings. You will enter and check catalog data for those products—not physical inventory.",
  },
  {
    question: "Which tools will I use?",
    answer:
      "Most work is in Google Sheets or Microsoft Excel, plus shared folders for file names and download links. We give a short walkthrough of our catalog format before you start.",
  },
  {
    question: "Is this part-time or full-time?",
    answer:
      "This opening is part-time (about 2–4 hours a day) with flexible hours. Full-time hours may be offered later based on catalog volume and your accuracy.",
  },
];

export default function DataEntryJobsRemote() {
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
        jobTitle: "Data Entry Jobs Remote – Digital Products",
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
      <SEO {...PAGE_SEO.dataEntryJobsRemote} />

      <JobPostingSchema
        title="Remote Data Entry Executive – Digital Products"
        description="Remote data entry jobs for NSL Digital Lab digital products. Work from home cataloguing website templates, checklists, Figma kits, prompt packs, and learning assets in Google Sheets or Excel."
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
            <span>Data Entry Jobs Remote</span>
          </nav>

          <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
            Remote · Digital products
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Data Entry Jobs Remote
            <span className="text-cyan-400">&nbsp;— Digital Products</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            Work-from-home data entry for NSL Digital Lab’s digital product
            catalog: website templates, checklists, Figma kits, and downloadable
            resources. Freshers welcome.
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
                  NSL Digital Lab is hiring for remote data entry jobs focused
                  on our digital products—not generic office records. You will
                  enter, check, and update catalog rows for template bundles,
                  resource PDFs, Figma wireframe kits, ChatGPT prompt packs, and
                  course or module listings so customers and the team can find
                  the right file every time.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Responsibilities</h2>
                <ul className="space-y-4 text-slate-700">
                  <li>✓ Add and update product catalog rows in Google Sheets or Excel</li>
                  <li>✓ Enter titles, short descriptions, categories, and tags</li>
                  <li>✓ Check file names, download links, and folder paths</li>
                  <li>✓ Flag missing, duplicate, or mismatched listings</li>
                  <li>✓ Keep digital product data consistent across sheets and CMS notes</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-4 text-slate-700">
                  <li>✓ Google Sheets or Microsoft Excel (formulas not required)</li>
                  <li>✓ Accurate typing and attention to detail</li>
                  <li>✓ Basic written English for product titles and notes</li>
                  <li>✓ Stable internet and a laptop</li>
                  <li>✓ No degree required — freshers can apply</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">
                  Remote data entry for digital products
                </h2>
                <p className="text-slate-700 leading-8 mb-4">
                  Looking for data entry jobs work from home that are tied to
                  real products? This role is catalog data entry: you help keep
                  NSL Digital Lab’s online library of templates, checklists, and
                  downloadable assets accurate so listings stay usable.
                </p>
                <p className="text-slate-700 leading-8 mb-4">
                  Unlike general operations data entry, you will work on product
                  listing data—SKU-style rows, categories, and file metadata for
                  digital goods. Training covers our sheet columns and a simple
                  QA checklist.
                </p>
                <p className="text-slate-700 leading-8">
                  Hours are flexible. Part-time remote data entry is the default;
                  we review work for accuracy, not how many hours you sit
                  online.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Who Can Apply?</h2>
                <ul className="space-y-4 text-slate-700">
                  <li>✓ Freshers looking for online data entry jobs in India</li>
                  <li>✓ Students who want part-time work from home typing jobs</li>
                  <li>✓ Homemakers seeking flexible catalog data entry remote work</li>
                  <li>✓ Anyone comfortable with spreadsheets and following a list</li>
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
                  <li>Digital product catalog — not generic office records</li>
                  <li>Fully remote, work from home</li>
                  <li>Flexible part-time hours</li>
                  <li>Clear spreadsheet format and checklist</li>
                  <li>Freshers welcome</li>
                </ul>
                <p className="mt-6 text-sm text-slate-500">
                  For general operations data entry, see our{" "}
                  <Link
                    to="/careers/data-entry-remote-job"
                    className="font-medium text-cyan-700 hover:underline"
                  >
                    Remote Data Entry Executive
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
                    Apply for Digital Products Data Entry
                  </h2>
                  <p
                    id="apply-description"
                    className="mt-3 text-sm leading-6 text-slate-600"
                  >
                    Complete the form below. Use this form only for the digital
                    products catalog role.
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
