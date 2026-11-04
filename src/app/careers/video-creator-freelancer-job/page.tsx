import { useState } from "react";
import { Link } from "react-router-dom";

import SEO from "../../../seo/SEO";
import { PAGE_SEO } from "../../../seo/pages";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import JobPostingSchema from "../../../seo/schemas/JobPostingSchema";
import { CAREER_JOBS } from "../data/jobs";
import RelatedRoles from "../components/RelatedRoles";
import ClosedJobNotice from "../components/ClosedJobNotice";
import CareerApplyModal from "../components/CareerApplyModal";
import CareerApplySuccess from "../components/CareerApplySuccess";
import { trackJobApplication } from "../../../utils/analytics";
import FAQSchema from "../../../seo/schemas/FAQSchema";
import { submitCareerApplication } from "../../../services/career";

const JOB = CAREER_JOBS["video-creator-freelancer-job"];
const faqs = JOB.faqItems ?? [];
const SLUG = "video-creator-freelancer-job";

export default function VideoCreatorFreelancerJob() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const closeApplyModal = () => {
    setSubmitted(false);
    setShowModal(false);
  };

  const handleApplyNow = () => {
    setSubmitted(false);
    if (JOB.status === "open") setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    const sampleUrl = resume.trim();
    const ratesNote = message.trim();
    if (sampleUrl && !/^https?:\/\/\S+$/i.test(sampleUrl)) {
      alert("Sample link must start with http:// or https://");
      return;
    }
    if (!ratesNote) {
      alert("Please describe your charges per short video or package.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitCareerApplication({
        name,
        email,
        phone,
        resume: sampleUrl,
        message: ratesNote,
        jobSlug: SLUG,
        jobTitle: JOB.applicationJobTitle,
      });

      if (!result.success) {
        alert("Something went wrong.");
        return;
      }

      setSubmitted(true);
      trackJobApplication(result, SLUG, JOB.applicationJobTitle);
      setName("");
      setPhone("");
      setEmail("");
      setResume("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO {...PAGE_SEO.videoCreatorFreelancerJob} />

      <JobPostingSchema job={JOB} />
      <ClosedJobNotice job={JOB} />
      <FAQSchema faqs={faqs} />

      <Navigation />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 pt-36 pb-24">
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
            <span>Video Creator / Editor</span>
          </nav>

          <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
            Remote · Freelancer · Creative
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Freelance Video Creator / Editor
            <span className="text-cyan-400">&nbsp;— Remote</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            Edit short-form videos for NSL Digital Lab’s agency promotion and
            YouTube channel. Work from home anywhere in India. Apply with sample
            links and your per-video rates.
          </p>
        </div>
      </section>

      <section className="-mt-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-slate-500 text-sm">Location</p>
                <h3 className="font-bold text-xl">{JOB.infoBar.location}</h3>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Engagement</p>
                <h3 className="font-bold text-xl">{JOB.infoBar.jobType}</h3>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Experience</p>
                <h3 className="font-bold text-xl">{JOB.infoBar.experience}</h3>
              </div>
              <div>
                <p className="text-slate-500 text-sm">Pay</p>
                <h3 className="font-bold text-xl">{JOB.infoBar.salary}</h3>
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
                  NSL Digital Lab needs a freelance video creator and editor on
                  a remote, project basis. You will cut and polish{" "}
                  <strong>short-form videos</strong> that promote our digital
                  agency services and grow our <strong>YouTube</strong> presence
                  — think YouTube Shorts, Reels-style vertical edits, and quick
                  promos with captions and clean audio.
                </p>
                <p className="text-slate-600 leading-8 mt-4">
                  This is fully remote work from home anywhere in India. When you
                  apply, share links to sample edits and tell us your{" "}
                  <strong>charges per short video</strong> (or package), what is
                  included, and how fast you can deliver.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Responsibilities</h2>
                <ul className="space-y-4 text-slate-700">
                  <li>✓ Edit short vertical and YouTube Shorts-style videos from briefs or raw clips</li>
                  <li>✓ Add captions, basic motion, and brand-safe text overlays when needed</li>
                  <li>✓ Export publish-ready files (format and specs per project)</li>
                  <li>✓ Turn around revisions within agreed limits</li>
                  <li>✓ Support agency promo and YouTube channel content on a freelance schedule</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Requirements</h2>
                <ul className="space-y-4 text-slate-700">
                  <li>✓ Proven short-form editing (sample links encouraged in your application)</li>
                  <li>✓ Comfortable with captions, pacing, and hook-first cuts</li>
                  <li>✓ Your own laptop, licensed or free editing software, and reliable internet</li>
                  <li>✓ Clear communication on rates, scope, and delivery dates</li>
                  <li>✓ Basic understanding of YouTube / social safe zones and aspect ratios</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">How to apply</h2>
                <ol className="list-decimal pl-6 space-y-3 text-slate-700 leading-8">
                  <li>
                    Click Apply and describe your <strong>charges</strong> in the rates box — INR per
                    short video or package, length, revisions, and turnaround (required).
                  </li>
                  <li>
                    Optionally add one sample video link, or paste extra sample links in the rates box.
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const open = openFaq === index;
                    return (
                      <div key={faq.question} className="border rounded-2xl overflow-hidden">
                        <button
                          type="button"
                          className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                          onClick={() => setOpenFaq(open ? null : index)}
                        >
                          <span>{faq.question}</span>
                          <span>{open ? "−" : "+"}</span>
                        </button>
                        {open && (
                          <div className="px-5 pb-5 text-slate-600">{faq.answer}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-28">
                <h3 className="text-2xl font-bold mb-6">Why apply</h3>
                <ul className="space-y-4 text-slate-700">
                  <li>Remote freelancer — no commute</li>
                  <li>Short-form first (Reels / Shorts)</li>
                  <li>Agency + YouTube growth content</li>
                  <li>Project-based pay you quote upfront</li>
                  <li>Portfolio-building real brand work</li>
                </ul>
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

      <CareerApplyModal
        open={showModal}
        onClose={closeApplyModal}
        title="Apply — Freelance Video Creator / Editor"
        description="Share your charges for short-form edits. Sample video links are optional but help us review your style faster."
      >
        {submitted ? (
          <CareerApplySuccess />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="vc-name" className="block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                id="vc-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                required
              />
            </div>
            <div>
              <label htmlFor="vc-phone" className="block text-sm font-medium text-slate-700">
                Phone Number <span className="font-normal text-slate-500">(optional)</span>
              </label>
              <input
                id="vc-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="vc-email" className="block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                id="vc-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                required
              />
            </div>
            <div>
              <label htmlFor="vc-sample" className="block text-sm font-medium text-slate-700">
                Sample video link{" "}
                <span className="font-normal text-slate-500">(optional)</span>
              </label>
              <input
                id="vc-sample"
                type="text"
                placeholder="https://youtube.com/shorts/… or Drive / portfolio link"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
              />
              <p className="mt-1 text-xs text-slate-500">
                Link must start with http:// or https://
              </p>
            </div>
            <div>
              <label htmlFor="vc-rates" className="block text-sm font-medium text-slate-700">
                Your charges &amp; scope <span className="text-red-600">*</span>
              </label>
              <textarea
                id="vc-rates"
                rows={4}
                placeholder="Example: ₹X per 30–45s Short, 2 revisions, 48h delivery. Add more sample links here if needed."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-blue-700 disabled:opacity-70"
            >
              Submit Application
            </button>
          </form>
        )}
      </CareerApplyModal>

      <section className="bg-slate-50 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <RelatedRoles slug={SLUG} />
        </div>
      </section>

      <Footer />
    </>
  );
}
