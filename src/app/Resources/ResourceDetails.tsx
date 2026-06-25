import { useParams, Navigate } from "react-router-dom";
import { resources } from "../../data/resources";
import ResourceDownload from "./components/ResourceDownload";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ResourceDetails() {
  const { slug } = useParams();

  const resource = resources.find(
    (r) => r.slug === slug
  );

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-slate-50">
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <img
                src={resource.image}
                alt={resource.title}
                className="h-[320px] w-full object-cover"
              />

              <div className="p-8 md:p-10">
                <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                  {resource.category}
                </span>

                <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                  {resource.title}
                </h1>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {resource.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                  <div>
                    <div className="text-slate-500">Type</div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {resource.type}
                    </div>
                  </div>

                  <div>
                    <div className="text-slate-500">Downloads</div>
                    <div className="mt-1 font-semibold text-slate-900">
                      {resource.downloads.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ResourceDownload
              resourceTitle={resource.title}
              downloadUrl={resource.downloadUrl}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}