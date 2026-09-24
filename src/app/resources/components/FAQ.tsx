import { ArrowRight, Plus } from "lucide-react";

const faqs = [
  {
    question: "Are all resources free?",
    answer:
      "Yes. Most resources are free to download after providing your email address.",
  },
  {
    question: "Who are these resources for?",
    answer:
      "Students, job seekers, designers, marketers, business owners and anyone building digital skills.",
  },
  {
    question: "How often do you add new resources?",
    answer:
      "We regularly publish new templates, guides, checklists and learning materials.",
  },
  {
    question: "Can I use these resources professionally?",
    answer:
      "Yes. Most are for personal learning and professional use. Any restrictions are listed on the resource page.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#fafaf7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Questions, answered.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Quick answers about downloads, access and usage.
            </p>
            <a
              href="/#contact"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-cyan-500"
            >
              Still have questions? Contact us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 transition group-open:rotate-45 group-open:bg-slate-900 group-open:text-white group-open:ring-slate-900">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 pr-12 text-base leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
