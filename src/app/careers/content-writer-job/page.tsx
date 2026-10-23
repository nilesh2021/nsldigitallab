import { Link } from "react-router-dom";
import SEO from "../../../seo/SEO";
import { PAGE_SEO } from "../../../seo/pages";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import JobPostingSchema from "../../../seo/schemas/JobPostingSchema";

import { submitCareerApplication } from "../../../services/career";
import { useState } from "react";
import { CAREER_JOBS } from "../data/jobs";

const JOB = CAREER_JOBS["content-writer-job"];
import RelatedRoles from "../components/RelatedRoles";
import ClosedJobNotice from "../components/ClosedJobNotice";
import { trackJobApplication } from "../../../utils/analytics";

export default function ContentWriterJob() {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState("");

const [isSubmitting, setIsSubmitting] = useState(false);

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
      jobSlug: "content-writer-job",
    });

    if (!result.success) {
      alert("Something went wrong.");
      return;
    }

    trackJobApplication(result, "content-writer-job", JOB.applicationJobTitle);
    alert("Application Submitted Successfully!");

    setName("");
    setPhone("");
    setEmail("");
    setResume("");
    setShowModal(false);

  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};    return (

        <>
            <SEO {...PAGE_SEO.contentWriterJob} />
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
                        <span>Content Writer Job</span>
                    </nav>

                    <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
                        Remote Opportunity
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Content Writer
                        <span className="text-cyan-400">
                            &nbsp;Remote Job
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl">
                        Join NSL Digital Lab as a Remote Content Writer and work
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
          onClick={() => JOB.status === "open" && setShowModal(true)}
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
                                    NSL Digital Lab is looking for detail-oriented individuals
                                    for remote content writing positions. Candidates should possess
                                    strong writing skills, good grammar, and the ability to create
                                    engaging content for various platforms.
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6">
                                    Responsibilities
                                </h2>

                                <ul className="space-y-4 text-slate-700">
                                    <li>✓ Write SEO-friendly blog posts</li>
                                    <li>✓ Create website content</li>
                                    <li>✓ Optimize content with keywords</li>
                                    <li>✓ Research topics and competitors</li>
                                    <li>✓ Proofread and edit content</li>

                                    




                                </ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h2 className="text-3xl font-bold mb-6">
                                    Requirements
                                </h2>

                                <ul className="space-y-4 text-slate-700">
                                    <li>✓ Excellent English writing skills</li>
                                    <li>✓ Basic SEO knowledge</li>
                                    <li>✓ Research skills</li>
                                    <li>✓ Grammar and proofreading</li>
                                    <li>✓ Internet connection</li>
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
                                    <li>🚀 Career Growth</li>
                                    <li>🏠 Work From Home</li>
                                    <li>⏰ Flexible Schedule</li>
                                    <li>💰 Performance Incentives</li>
                                    <li>🤝 Supportive Team</li>
                                </ul>

                                <button
                                    onClick={() => JOB.status === "open" && setShowModal(true)}
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
                    Remote Content Writer Jobs – Work From Home Opportunity
                </h2>

                <p className="text-slate-700 leading-8 mb-4">
                    Looking for remote Content Writer jobs? NSL Digital Lab offers work from home
                    Content Writer opportunities for candidates who want flexible online work.
                    Whether you are a fresher, student, homemaker, or experienced
                    professional, this position provides a great opportunity to earn income
                    while working remotely.
                </p>

                <p className="text-slate-700 leading-8 mb-4">
                    Content writing work includes blog posts, website copy, social captions,
                    and light editing. You should be comfortable researching a topic, drafting
                    clear sentences, and revising for grammar and tone before submission.
                </p>

                <p className="text-slate-700 leading-8 mb-4">
                    Our remote content writers collaborate with the marketing team on briefs,
                    style notes, and SEO keywords when needed. Training and feedback are provided
                    to help you match NSL Digital Lab&apos;s voice.
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

                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-xl">
                            Is this a work from home Content Writer job?
                        </h3>
                        <p className="text-slate-700 mt-2">
                            Yes, this is a fully remote Content Writer position allowing candidates
                            to work from home.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            Can freshers apply?
                        </h3>
                        <p className="text-slate-700 mt-2">
                            Yes, freshers with basic computer skills and attention to detail are
                            encouraged to apply.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            What skills are required?
                        </h3>
                        <p className="text-slate-700 mt-2">
                            Basic computer knowledge, typing skills, internet access, and
                            accuracy in data handling.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl">
                            Is this a part-time or full-time job?
                        </h3>
                        <p className="text-slate-700 mt-2">
                            Both part-time and full-time opportunities may be available based on
                            business requirements.
                        </p>
                    </div>
                </div>
            </section>
           

            {showModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
                    <div className="relative w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">

                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="absolute top-5 right-5 text-2xl text-slate-500 hover:text-slate-900"
                        >
                            ×
                        </button>

                        <h2 className="mb-2 text-3xl font-bold">
                            Apply for Content Writer Job
                        </h2>

                        <p className="mb-6 text-slate-600">
                            Fill out the form below and our team will review your application.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 p-4"
                                required
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number (optional)"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 p-4"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 p-4"
                                required
                            />

                            <input
                                type="url"
                                placeholder="Google Drive Resume Link"
                                value={resume}
                                onChange={(e) => setResume(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 p-4"
                                                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                aria-busy={isSubmitting}
                                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700"
                            >
                                Submit Application
                            </button>

                        </form>
                    </div>
                </div>
            )}
            <section className="bg-slate-50 pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <RelatedRoles slug="content-writer-job" />
                </div>
            </section>

            <Footer />
        </>

    );
}