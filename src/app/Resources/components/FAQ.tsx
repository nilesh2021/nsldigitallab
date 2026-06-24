import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are all resources free?",
    answer:
      "Yes. Most resources are completely free to download after providing your email address.",
  },
  {
    question: "Who are these resources for?",
    answer:
      "Students, job seekers, designers, marketers, business owners and anyone interested in learning digital skills.",
  },
  {
    question: "How often do you add new resources?",
    answer:
      "We regularly publish new templates, guides, checklists and learning materials.",
  },
  {
    question: "Can I use these resources professionally?",
    answer:
      "Yes. Most resources are intended for personal learning and professional development. Any specific usage restrictions will be mentioned on the individual resource page.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Have Questions?
          </h2>

          <p className="mt-5 text-slate-600">
            Here are some of the most common questions about our free learning resources.
          </p>

        </div>

        <div className="mt-14 space-y-5">

          {faqs.map((faq) => (

            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-6"
            >

              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">

                {faq.question}

                <ChevronDown className="transition group-open:rotate-180" />

              </summary>

              <p className="mt-5 text-slate-600 leading-7">

                {faq.answer}

              </p>

            </details>

          ))}

        </div>

      </div>

    </section>
  );
}