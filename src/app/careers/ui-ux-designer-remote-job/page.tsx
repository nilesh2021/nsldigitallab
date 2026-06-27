import { Link } from "react-router-dom";
import SEO from "../../../seo/SEO";
import { PAGE_SEO } from "../../../seo/pages";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useState } from "react";
import JobPostingSchema from "../../../seo/schemas/JobPostingSchema";

import { submitCareerApplication } from "../../../services/career";
export default function UiuxDesignerJob() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const handleApplyNow = () => {
    setSubmitted(false);   // Reset success state
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
      jobTitle: "UI/UX Designer"
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
  }
  return (

    <>
      <SEO {...PAGE_SEO.UiuxDesignerJob} />

      <JobPostingSchema
    title="UI/UX Designer"

    description="NSL Digital Lab is hiring a creative UI/UX Designer experienced in Figma, wireframing, prototyping, responsive web design, usability testing, and user-centered design."

    datePosted="2026-06-27"

    employmentType="PART/FULL_TIME"

    location="Pune, India"

    salary="500000-900000"
/>

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
            <span>Remote UI/UX Designer Jobs</span>
          </nav>

          <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-medium mb-6">
            Remote Opportunity
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
         UI/UX Designer  
            <span className="text-cyan-400">
              &nbsp;Remote Job
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            Join NSL Digital Lab as a UI/UX Designer. Design intuitive web and mobile experiences using Figma, user research, wireframing, prototyping, and responsive design principles. Work with developers to create modern, user-friendly digital products.
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
                <h3 className="font-bold text-xl">Remote</h3>
              </div>

              <div>
                <p className="text-slate-500 text-sm">Job Type</p>
                <h3 className="font-bold text-xl">Part-Time</h3>
              </div>

              <div>
                <p className="text-slate-500 text-sm">Experience</p>
                <h3 className="font-bold text-xl">0-2 Years</h3>
              </div>

              <div>
                <p className="text-slate-500 text-sm">Salary</p>
                <h3 className="font-bold text-xl">₹5K - ₹40K</h3>
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

  <p className="text-slate-700 leading-8 mb-4">
    NSL Digital Lab is looking for a passionate and creative <strong>UI/UX Designer</strong> to design intuitive, user-friendly, and visually engaging digital experiences for web and mobile applications. You will collaborate with developers, project managers, and stakeholders to transform business requirements into modern, responsive, and user-centered interfaces.
  </p>

  <p className="text-slate-700 leading-8 mb-4">
    As a UI/UX Designer, you will work throughout the complete design process, including <strong>User Research</strong>, competitor analysis, information architecture, <strong>Wireframing</strong>, <strong>Prototyping</strong>, visual interface design, and <strong>Usability Testing</strong>. You will use <strong>Figma</strong> to create high-fidelity mockups, interactive prototypes, reusable <strong>Design Systems</strong>, and design components that ensure consistency across products.
  </p>

  <p className="text-slate-700 leading-8 mb-4">
    You will contribute to designing responsive websites, enterprise web applications, dashboards, and <strong>Mobile App Design</strong> projects while following modern UI/UX best practices, accessibility standards, and responsive design principles. Knowledge of HTML, CSS, Bootstrap, and front-end development concepts will be an added advantage.
  </p>

  <p className="text-slate-700 leading-8">
    This opportunity is ideal for designers who enjoy solving real user problems, creating exceptional digital experiences, and continuously improving their skills in user experience design, interface design, and product design.
  </p>
</div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">
                  Responsibilities
                </h2>

                <ul className="space-y-4 text-slate-700">
                  <li>✓ Design user-friendly web and mobile interfaces</li>
                  <li>✓ Create wireframes and interactive prototypes</li>
                  <li>✓ Conduct user research and usability testing</li>
                  <li>✓ Build reusable design systems</li>
                  <li>✓ Collaborate with developers and stakeholders</li>
                  <li>✓ Ensure accessibility and responsive design</li>
                  <li>✓ Maintain UI consistency across products</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">
                  Requirements
                </h2>

                <ul className="space-y-4 text-slate-700">
                  <li>✓ 0-2 Years  of UI/UX experience</li>
                  <li>✓ knowledge of Figma, </li>
                  <li>✓ Ux research, Competitive analysis</li>
                  <li>✓ Wireframing & Prototyping</li>
                  <li>✓ User Research</li>
                  <li>✓ Design Systems</li>
                  <li>✓ HTML & CSS knowledge (good to have)</li>
                  <li>✓ Responsive Design</li>
                  <li>✓ Portfolio required</li>
                </ul>
              </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">
                Why Choose a Career in UI/UX Design?
                </h2>

                <p>UI/UX Design is one of the fastest-growing fields in the digital industry.

Businesses increasingly rely on user-centered design to improve customer satisfaction, increase conversions, and create better digital products.

A career in UI/UX Design offers opportunities in product design, web design, mobile app design, user research, interaction design, and design systems.</p>
              </div>

              {/* WHO CAN APPLY */}
             <section className="bg-white rounded-3xl shadow-sm p-8 mt-8"><h2 className="text-3xl font-bold mb-6">Remote UI UX Designer Jobs</h2><p className="text-slate-700 leading-8 mb-4">Looking for UI UX Designer Jobs? NSL Digital Lab offers remote opportunities for designers passionate about creating user-friendly digital experiences.</p><p className="text-slate-700 leading-8 mb-4">As a UI UX Designer, you will work on website design, mobile app interfaces, user research, wireframing, prototyping, and design systems.</p><p className="text-slate-700 leading-8 mb-4">This position is ideal for candidates who enjoy problem-solving, visual design, user-centered thinking, and creating products that improve customer experiences.</p><h3 className="text-2xl font-semibold mt-8 mb-4">Who Can Apply?</h3><ul className="list-disc pl-6 space-y-2 text-slate-700"><li>UI UX Design Freshers</li><li>Figma Designers</li><li>Web Designers transitioning to UI UX</li><li>Graphic Designers interested in Product Design</li><li>Design Students building their portfolio</li><li>Freelance UI UX Designers</li><li>Candidates passionate about user experience and interface design</li></ul></section>

              {/* FAQ */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">

                  {/* FAQ 1 */}
                  <div className="border rounded-2xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                      onClick={() =>
                        setOpenFaq(openFaq === 1 ? null : 1)
                      }
                    >
                      <span>Is this a work from home UI UX designer job?</span>
                      <span>{openFaq === 1 ? "−" : "+"}</span>
                    </button>

                    {openFaq === 1 && (
                      <div className="px-5 pb-5 text-slate-600">
                        Yes, this is a fully remote UI UX designer position that allows
                        candidates to work from home.
                      </div>
                    )}
                  </div>

                  {/* FAQ 2 */}
                  <div className="border rounded-2xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                      onClick={() =>
                        setOpenFaq(openFaq === 2 ? null : 2)
                      }
                    >
                      <span>Can freshers apply?</span>
                      <span>{openFaq === 2 ? "−" : "+"}</span>
                    </button>

                    {openFaq === 2 && (
                      <div className="px-5 pb-5 text-slate-600">
                       Freshers with a strong portfolio and knowledge of Figma, wireframing, and UX principles are encouraged to apply.
                      </div>
                    )}
                  </div>

                  {/* FAQ 3 */}
                  <div className="border rounded-2xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                      onClick={() =>
                        setOpenFaq(openFaq === 3 ? null : 3)
                      }
                    >
                      <span>What skills are required?</span>
                      <span>{openFaq === 3 ? "−" : "+"}</span>
                    </button>

                    {openFaq === 3 && (
                      <div className="px-5 pb-5 text-slate-600">
                        Figma is the primary design tool. Knowledge of Adobe XD, Photoshop, Illustrator, or other design tools is a plus.
                      </div>
                    )}
                  </div>

                  {/* FAQ 4 */}
                  <div className="border rounded-2xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-slate-50 transition"
                      onClick={() =>
                        setOpenFaq(openFaq === 4 ? null : 4)
                      }
                    >
                      <span>Is this a part-time or full-time job?</span>
                      <span>{openFaq === 4 ? "−" : "+"}</span>
                    </button>

                    {openFaq === 4 && (
                      <div className="px-5 pb-5 text-slate-600">
                        Both part-time and full-time opportunities may be available
                        depending on business requirements.
                      </div>
                    )}
                  </div>

                </div>
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
                  type="button"
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

                    <span className="text-5xl text-green-600">
                      ✓
                    </span>

                  </div>

                  <h2 className="mt-6 text-3xl font-bold text-slate-900">
                    Application Submitted
                  </h2>

                  <p className="mt-4 text-slate-600">
                    Thank you for applying at
                    <strong> NSL Digital Lab</strong>.
                  </p>

                  <p className="text-slate-600">
                    Our HR team will review your application and contact you soon.
                  </p>

                </div>

              ) : (

                <>  <h2
                  id="apply-heading"
                  className="text-2xl font-semibold text-slate-900"
                >
                  Apply for UI UX designer Job
                </h2>

                  <p
                    id="apply-description"
                    className="mt-3 text-sm leading-6 text-slate-600"
                  >
                    Complete the form below and our team will review your application.
                  </p>


                  <form onSubmit={handleSubmit} className="mt-4 space-y-5">
                    <div>
                      <label htmlFor="applicant-name" className="block text-sm font-medium text-slate-700">
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
                      <label htmlFor="applicant-phone" className="block text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <input
                        id="applicant-phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="applicant-email" className="block text-sm font-medium text-slate-700">
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
                      <label htmlFor="applicant-resume" className="block text-sm font-medium text-slate-700">
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
                  </form> </>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>

  );
}