import { resources } from "../../../data/resources";
import ResourceCard from "./ResourceCard";

export default function ResourceGrid() {
  return (
    <section className="bg-white py-12" id="resourcesGrid">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            Free Learning Library
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900">
            Browse All Resources
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-7 text-slate-600">
            Discover free templates, checklists, interview questions, Figma
            resources, guides and practical tools to help you learn faster and
            grow your career.
          </p>
        </div>

        <div
          className={`grid gap-8 ${
            resources.length === 1
              ? "max-w-md"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  );
}