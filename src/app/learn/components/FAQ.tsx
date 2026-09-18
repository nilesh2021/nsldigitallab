import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const learnFaqs = [
  {
    q: "Are these courses completely free?",
    a: "Yes. Every course on NSL Digital Lab is free to access.",
  },
  {
    q: "Do I need prior experience?",
    a: "No. Our learning paths start from the basics and gradually move to advanced concepts.",
  },
  {
    q: "Will more lessons be added?",
    a: "Yes. New tutorials, projects and resources will be published every week.",
  },
  {
    q: "Can I learn at my own pace?",
    a: "Absolutely. You can study whenever it suits you.",
  },
  {
    q: "Will certificates be available?",
    a: "Certificates and assessments are part of our future roadmap.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-slate-100 bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            FAQ
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {learnFaqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-[#0f172a]">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition ${
                      isOpen ? "rotate-180 text-cyan-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
