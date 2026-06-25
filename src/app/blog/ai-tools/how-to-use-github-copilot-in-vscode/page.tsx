import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Lightbulb,
  MessageSquareText,
  Rocket,
  Sparkles,
  Terminal,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Breadcrumbs from "../../../components/Breadcrumbs";

const workflowSteps = [
  {
    title: "Install the extension",
    text: "Open the Extensions view in VS Code, search for GitHub Copilot, and install it from the Marketplace.",
  },
  {
    title: "Sign in to GitHub",
    text: "Authenticate with your GitHub account and authorize Copilot for your editor.",
  },
  {
    title: "Start coding naturally",
    text: "Begin typing a function, comment, or prompt and let Copilot suggest the next lines for you.",
  },
  {
    title: "Review and refine",
    text: "Treat Copilot as a smart teammate, not an autopilot. Always review the output before using it.",
  },
];

const useCases = [
  "Generate boilerplate for React, Node, and TypeScript projects",
  "Write unit tests and helper functions faster",
  "Explain unfamiliar code snippets in plain English",
  "Refactor messy code and suggest cleaner patterns",
  "Create comments, documentation, and API examples",
];

const prompts = [
  "Create a reusable React hook for debouncing input values in TypeScript.",
  "Write a Node.js Express route for creating a user with validation and error handling.",
  "Explain this function in simple terms and suggest improvements.",
  "Generate a Jest test for this component and include edge cases.",
];

export default function HowToUseGithubCopilotInVscodePage() {
  return (
    <>
      <Helmet>
        <title>How to Use GitHub Copilot in VS Code | NSL Digital Lab</title>
        <meta
          name="description"
          content="Learn how to use GitHub Copilot in VS Code with practical workflows, prompts, and tips for writing better code faster."
        />
        <meta
          name="keywords"
          content="GitHub Copilot, VS Code, coding assistant, AI coding, developer productivity"
        />
        <link
          rel="canonical"
          href="https://www.nsldigitallab.co.in/blog/ai-tools/how-to-use-github-copilot-in-vscode"
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-[#050816] text-slate-100">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#050816_0%,_#0b1023_100%)] py-20 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
          <div className="absolute left-[-8rem] top-[-6rem] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute bottom-[-6rem] right-[-4rem] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

          <div className="container relative z-10 mx-auto px-6 lg:px-10">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: "AI Tools", href: "/blog/ai-tools" },
                  { label: "GitHub Copilot in VS Code" },
                ]}
              />
            </div>

            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  AI Coding
                </span>
                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  VS Code
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  Developer Productivity
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                How to use GitHub Copilot in VS Code
                <span className="mt-3 block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  and build faster with AI support
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                GitHub Copilot can help you write code faster, understand unfamiliar logic, and reduce repetitive work. The real value comes when you use it as a focused coding partner instead of a shortcut for everything.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#guide" className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                  Start the guide
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link to="/services" className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                  Explore our services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-cyan-300" />
                  9 min read
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-violet-300" />
                  Practical examples
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  Beginner-friendly
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="guide" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="font-medium text-cyan-400">Getting started</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Set up Copilot in VS Code in a few minutes
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                The setup is simple, but the biggest difference comes from how you use it once it is installed. Copilot works best when you give it tasks that are specific, contextual, and easy to review.
              </p>
            </div>

            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-semibold text-cyan-300">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-medium text-cyan-400">What Copilot is great at</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Use it for repeated work, boilerplate, and faster iteration
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-2 text-cyan-300">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <p className="text-base leading-7 text-slate-400">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="font-medium text-cyan-400">Best practices</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Get better results by prompting it clearly
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Copilot is powerful, but it is not magic. The quality of the suggestions improves when you explain your goal, your stack, and the constraints you care about. A vague prompt often leads to vague code.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-2 text-cyan-300">
                  <Lightbulb className="h-5 w-5" />
                  <span className="font-semibold">Use prompts like this</span>
                </div>
                <ul className="space-y-3">
                  {prompts.map((prompt) => (
                    <li key={prompt} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span>{prompt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-2 text-emerald-300">
                <ShieldCheck className="h-5 w-5" />
                <span className="font-semibold">Safety and review</span>
              </div>
              <p className="text-base leading-8 text-slate-400">
                Always verify the code generated by Copilot. Check for security issues, outdated APIs, edge cases, and business logic. The tool can accelerate your workflow, but you remain responsible for the final result.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5 text-sm leading-7 text-slate-300">
                <p className="font-semibold text-white">A good workflow looks like this:</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-cyan-300" />Ask for a small, focused change first.</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-cyan-300" />Review the suggestion before accepting it.</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-cyan-300" />Refine the prompt if the result is too generic.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <span className="font-medium text-cyan-400">Real-world workflow</span>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  How developers actually use Copilot in daily coding
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Many developers use Copilot in small but meaningful ways. It helps them move faster during the repetitive parts of coding so they can spend more energy on architecture, debugging, and product decisions.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3 text-violet-300">
                  <Terminal className="h-5 w-5" />
                  <span className="font-semibold">Example flow</span>
                </div>
                <p className="text-base leading-8 text-slate-400">
                  Start by asking Copilot to scaffold a component, then ask it to add loading states, error handling, and accessibility improvements. Once the base is there, you can ask for tests and documentation. This keeps the work paced and reduces the chance of getting stuck on boilerplate.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-cyan-400">Final thoughts</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Copilot is best when it supports your thinking, not replaces it
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              The best developers use GitHub Copilot as a force multiplier. It can help you generate ideas, speed up repetitive work, and reduce friction, but your judgment still matters. When you combine clear prompts, thoughtful review, and strong fundamentals, Copilot becomes a powerful daily tool in VS Code.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link to="/blog/ai-tools/how-to-use-chatgpt" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">How to use ChatGPT</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Explore another practical AI workflow for writing, learning, and everyday productivity.</p>
            </Link>
            <Link to="/blog/ui-ux/ui-ux-design-process-explained" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">UI/UX design process</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">See how design thinking and product workflows connect with modern development.</p>
            </Link>
            <Link to="/services" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">Our services</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Let us help you build faster, smarter digital experiences for your brand.</p>
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#050816] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to work faster in VS Code?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              GitHub Copilot can make your development workflow smoother when paired with strong coding habits and clear review.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/services" className="rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3 font-semibold text-white transition hover:opacity-90">
                Explore services
              </Link>
              <a href="/#contact" className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                Let’s talk
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
