const skillGroups = [
  {
    label: "Design",
    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    label: "Growth",
    skills: [
      "SEO",
      "Technical SEO",
      "Google Analytics",
      "Google Ads",
      "Digital Marketing",
      "Affiliate Marketing",
    ],
  },
  {
    label: "Career",
    skills: [
      "Content Writing",
      "AI Tools",
      "Portfolio Building",
      "Responsive Design",
    ],
  },
];

export default function Skills() {
  return (
    <section className="border-t border-slate-100 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            Skills
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            What you will practice
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Tools and methods used on live websites, campaigns, and product
            interfaces — grouped by how you will use them.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-700">
                {group.label}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
