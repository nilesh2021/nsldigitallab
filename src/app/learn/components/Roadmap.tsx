const steps = [
  {
    step: "01",
    title: "Beginner",
    items: [
      "Introduction",
      "Fundamentals",
      "Tools setup",
      "Basic projects",
      "Career guidance",
    ],
  },
  {
    step: "02",
    title: "Intermediate",
    featured: true,
    items: [
      "Real projects",
      "Case studies",
      "Optimization",
      "Problem solving",
      "Portfolio",
    ],
  },
  {
    step: "03",
    title: "Advanced",
    items: [
      "Advanced projects",
      "Interview prep",
      "Resume building",
      "Freelancing",
      "Career support",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="border-t border-slate-100 bg-[#f5f7fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            Roadmap
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Your learning journey
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Move from foundations to client-ready work in three stages.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((stage) => (
            <div
              key={stage.step}
              className={`rounded-3xl border p-7 ${
                stage.featured
                  ? "border-cyan-300 bg-white shadow-lg shadow-cyan-100/60"
                  : "border-slate-200 bg-white"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                Step {stage.step}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-[#0f172a]">
                {stage.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {stage.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
