import { Link } from "react-router-dom";
import SEO from "../../../seo/SEO";
import { PAGE_SEO } from "../../../seo/pages";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState } from "react";
import { submitCareerApplication } from "../../../services/career";
import { CAREER_JOBS } from "../data/jobs";

const JOB = CAREER_JOBS["seo-executive-job"];
import RelatedRoles from "../components/RelatedRoles";
import ClosedJobNotice from "../components/ClosedJobNotice";
import CareerApplyModal from "../components/CareerApplyModal";
import CareerApplySuccess from "../components/CareerApplySuccess";
import { trackJobApplication } from "../../../utils/analytics";
import JobPostingSchema from "../../../seo/schemas/JobPostingSchema";

export default function SeoExecutiveJob() {
    const [showModal, setShowModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState("");

const [isSubmitting, setIsSubmitting] = useState(false);

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
      jobTitle: JOB.applicationJobTitle,
      jobSlug: "seo-executive-job",
    });

    if (!result.success) {
      alert("Something went wrong.");
      return;
    }

    trackJobApplication(result, "seo-executive-job", JOB.applicationJobTitle);
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
};    return (

        <>
            <SEO {...PAGE_SEO.seoExecutiveJob} />
            <JobPostingSchema job={JOB} />
      <ClosedJobNotice job={JOB} />
            <Navigation />

            {/* HERO */}
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
                        <span>SEO Executive Job</span>
                    </nav>

                    <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
                        Remote Opportunity
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        SEO Executive
                        <span className="text-cyan-400">
                            &nbsp;Remote Job
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl">
                        Join NSL Digital Lab as a SEO Executive and work
                        from anywhere with flexible hours and career growth opportunities.
                    </p>

                </div>
            </section>

            {/* JOB INFO BAR */}
        <section className="-mt-12 relative z-10">
  <div className="max-w-6xl mx-auto px-6">
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>
          <p className="text-slate-500 text-sm">Location</p>
          <h3 className="font-bold text-xl">{JOB.infoBar.location}</h3>
        </div>

        <div>
          <p className="text-slate-500 text-sm">Job Type</p>
          <h3 className="font-bold text-xl">{JOB.infoBar.jobType}</h3>
        </div>

        <div>
          <p className="text-slate-500 text-sm">Experience</p>
          <h3 className="font-bold text-xl">{JOB.infoBar.experience}</h3>
        </div>

        <div>
          <p className="text-slate-500 text-sm">Salary</p>
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
            {/* CONTENT */}
            <main className="bg-slate-50 py-20">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-3 gap-8">

                        <div className="lg:col-span-2 space-y-8">

                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-4">
                                    Job Overview
                                </h2>

                               <p className="text-slate-600 leading-8">
  NSL Digital Lab is looking for passionate SEO Executives who
  can help improve website rankings, optimize content,
  conduct keyword research, and drive organic traffic through
  proven SEO strategies.
</p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6">
                                    Responsibilities
                                </h2>

                               <ul className="space-y-4 text-slate-700">
  <li>✓ Perform keyword research and analysis</li>
  <li>✓ Optimize website pages for search engines</li>
  <li>✓ Conduct on-page SEO audits</li>
  <li>✓ Build high-quality backlinks</li>
  <li>✓ Monitor rankings and SEO performance</li>
  <li>✓ Prepare SEO reports</li>
</ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6">
                                    Requirements
                                </h2>

                               <ul className="space-y-4 text-slate-700">
  <li>✓ Basic SEO knowledge</li>
  <li>✓ Understanding of Google Search Console</li>
  <li>✓ Knowledge of keyword research tools</li>
  <li>✓ Good analytical skills</li>
  <li>✓ Strong communication skills</li>
</ul>
                            </div>

                        </div>

                        {/* SIDEBAR */}
                        <div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-28">
                                <h3 className="text-2xl font-bold mb-6">
                                    Why Join NSL Digital Lab?
                                </h3>

                              <ul className="space-y-4 text-slate-700">
  <li>🚀 Fast Career Growth</li>
  <li>🏠 Remote Work Opportunity</li>
  <li>📈 Learn Advanced SEO Strategies</li>
  <li>💰 Performance Bonuses</li>
  <li>🤝 Supportive Team Environment</li>
</ul>

                                <button
                                    onClick={handleApplyNow}
                                    className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
                                >
                                    Apply Now
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </main>
            <section className="bg-white rounded-3xl shadow-sm p-8 mt-8">
                <h2 className="text-3xl font-bold mb-6">
                    Remote SEO Executive Jobs – Work From Home Opportunity
                </h2>

                <p className="text-slate-700 leading-8 mb-4">
                    Looking for remote SEO Executive Jobs? NSL Digital Lab offers work from home
                    Content Writer opportunities for candidates who want flexible online work.
                    Whether you are a fresher, student, homemaker, or experienced
                    professional, this position provides a great opportunity to earn income
                    while working remotely.
                </p>

                <p className="text-slate-700 leading-8 mb-4">
                    SEO Executive Jobs involve entering, updating, and maintaining information
                    in digital systems. Candidates should have basic computer knowledge,
                    attention to detail, and the ability to work independently.
                </p>

                <p className="text-slate-700 leading-8 mb-4">
                    Our SEO Executive executives work with spreadsheets, databases,
                    reports, and business information. Training and guidance are provided
                    to help new team members succeed.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Who Can Apply?
                </h3>

                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                    <li>Freshers looking for work from home jobs</li>
                    <li>Students seeking part-time online jobs</li>
                    <li>Housewives looking for flexible remote work</li>
                    <li>Professionals seeking additional income opportunities</li>
                    <li>Candidates with basic computer and typing skills</li>
                </ul>
            </section><section className="bg-white rounded-3xl shadow-sm p-8 mt-8">
                <h2 className="text-3xl font-bold mb-6">
                    Frequently Asked Questions
                </h2>

            <div>
  <h3 className="font-semibold text-xl">
    Can freshers apply?
  </h3>

  <p className="text-slate-700 mt-2">
    Yes. Freshers with basic SEO knowledge are welcome.
  </p>
</div>

<div>
  <h3 className="font-semibold text-xl">
    Is this a remote SEO job?
  </h3>

  <p className="text-slate-700 mt-2">
    Yes. This is a fully remote SEO Executive position.
  </p>
</div>

<div>
  <h3 className="font-semibold text-xl">
    What SEO tools should I know?
  </h3>

  <p className="text-slate-700 mt-2">
    Google Search Console, Google Analytics, Ahrefs,
    SEMrush, and keyword research tools are beneficial.
  </p>
</div>

<div>
  <h3 className="font-semibold text-xl">
    What is the salary range?
  </h3>

  <p className="text-slate-700 mt-2">
    Salary ranges from ₹10,000 to ₹25,000 depending
    on experience and performance.
  </p>
</div>
            </section>
           

            <CareerApplyModal
                open={showModal}
                onClose={closeApplyModal}
                title="Apply for SEO Executive Job"
                description="Fill out the form below and our team will review your application."
            >
                {submitted ? (
                    <CareerApplySuccess />
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="seo-name" className="block text-sm font-medium text-slate-700">
                                Full Name
                            </label>
                            <input
                                id="seo-name"
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="seo-phone" className="block text-sm font-medium text-slate-700">
                                Phone Number <span className="font-normal text-slate-500">(optional)</span>
                            </label>
                            <input
                                id="seo-phone"
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                            />
                        </div>
                        <div>
                            <label htmlFor="seo-email" className="block text-sm font-medium text-slate-700">
                                Email Address
                            </label>
                            <input
                                id="seo-email"
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="seo-resume" className="block text-sm font-medium text-slate-700">
                                Resume / LinkedIn / Portfolio URL{" "}
                                <span className="font-normal text-slate-500">(optional)</span>
                            </label>
                            <input
                                id="seo-resume"
                                type="text"
                                placeholder="Drive, LinkedIn, or portfolio URL"
                                value={resume}
                                onChange={(e) => setResume(e.target.value)}
                                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            aria-busy={isSubmitting}
                            className="w-full rounded-2xl bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-70"
                        >
                            Submit Application
                        </button>
                    </form>
                )}
            </CareerApplyModal>
            <section className="bg-slate-50 pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <RelatedRoles slug="seo-executive-job" />
                </div>
            </section>

            <Footer />
        </>

    );
}