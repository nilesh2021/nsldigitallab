import { resources } from "../../../data/resources";
import ResourceCard from "./ResourceCard";

export default function FeaturedResources() {
  const featuredResources = resources.filter(
    (resource) => resource.featured
  );

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-12">

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Featured Resources
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Most Popular Downloads
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Explore our most downloaded free resources for UI/UX Design,
            SEO and Digital Marketing.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {featuredResources.map((resource) => (
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