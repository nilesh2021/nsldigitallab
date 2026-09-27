import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Laptop,
  Palette,
} from "lucide-react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CareerForm from "../components/CareerForm";
import FAQSchema from "../../seo/schemas/FAQSchema";

const faqs = [
  {
    question: "Who can apply for this UI/UX internship?",
    answer:
      "Students, freshers, and career switchers who can use a computer and want to learn Figma, research, wireframing, and portfolio work. No design degree is required.",
  },
  {
    question: "Is the internship remote?",
    answer:
      "Yes. This is a remote UI/UX internship for candidates across India, with live project work and reviews.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Selected candidates who complete the internship work receive a completion certificate.",
  },
  {
    question: "What should I prepare before applying?",
    answer:
      "A one-page resume, a link to any Figma file or case study (even a class project), and a short note on why you want design work. Download the UI/UX internship starter kit if you are starting from zero.",
  },
];

const skills = [
  "Figma: frames, components, Auto Layout",
  "User research notes and simple personas",
  "Wireframes and user flows",
  "UI screens and basic prototyping",
  "Usability feedback and iteration",
  "Case study writing for a portfolio",
];

export default function UiUxInternship() {
  return (
    <>
      <Helmet>
        <title>
          UI/UX Internship for Freshers | Remote Design Internship | NSL Digital Lab
        </title>
        <meta
          name="description"
          content="Apply for a remote UI/UX internship at NSL Digital Lab. Learn Figma, Auto Layout, wireframing, research, and portfolio case studies. Freshers welcome."
        />
        <meta
          name="keywords"
          content="UI UX internship, UI UX internship for freshers, remote UI UX internship, design internship India, Figma internship"
        />
        <link rel="canonical" href="https://nsldigitallab.com/ui-ux-internship" />
      </Helmet>
      <FAQSchema faqs={faqs} />

      <Navigation />
      <main className="min-h-screen bg-[#060b14] text-white">
        <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-300">
              Remote · Freshers welcome
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              UI/UX Internship for
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                students and career switchers
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Learn research, wireframing, Figma Auto Layout, and case-study
              writing on real work — then leave with a portfolio you can show.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#060b14] transition hover:-translate-y-0.5"
              >
                Apply now
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/resources/ui-ux-internship-starter-kit"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Download the starter kit
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">What you will practise</h2>
              <p className="mt-4 text-slate-400">
                The internship follows the same process as our free UI/UX
                Foundations path, with reviews on live or studio projects.
              </p>
              <div className="mt-8 space-y-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Figma craft", icon: Palette, body: "Auto Layout, components, and developer-ready files." },
                { title: "Mentored reviews", icon: GraduationCap, body: "Feedback on process, not only visuals." },
                { title: "Portfolio proof", icon: Laptop, body: "One case study you can walk through in interviews." },
                { title: "Free prep kit", icon: CheckCircle2, body: "30-day plan and interview prompts before you join." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <item.icon className="h-6 w-6 text-cyan-300" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold">FAQ</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-slate-500">
              New to design? Start with the{" "}
              <Link to="/learn/ui-ux-design" className="font-semibold text-cyan-300 hover:underline">
                free UI/UX Foundations path
              </Link>{" "}
              and the{" "}
              <Link
                to="/blog/ui-ux/how-to-become-a-ui-ux-designer"
                className="font-semibold text-cyan-300 hover:underline"
              >
                how to become a UI/UX designer
              </Link>{" "}
              guide.
            </p>
          </div>
        </section>

        <section id="apply" className="scroll-mt-24 border-t border-white/10 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-xl">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold">Apply for the internship</h2>
              <p className="mt-3 text-slate-400">
                Share your name, email, and a resume or Figma link.
              </p>
            </div>
            <CareerForm jobTitle="UI/UX Intern" />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
