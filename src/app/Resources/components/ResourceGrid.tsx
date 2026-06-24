import { resources } from "../../../data/resources";
import ResourceCard from "./ResourceCard";

export default function ResourceGrid() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-12">

          <h2 className="text-4xl font-bold text-slate-900">
            Browse All Resources
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl">
            Discover free templates, checklists, interview questions,
            Figma resources, guides and practical tools to help you
            learn faster and grow your career.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
            />
          ))}

        </div>

      </div>

    </section>
  );
}