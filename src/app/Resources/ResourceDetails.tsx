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

      <main className="bg-slate-50 min-h-screen">

        {/* Hero */}

        <section className="py-20">

          <div className="max-w-5xl mx-auto px-6">

            <div className="rounded-3xl bg-white shadow-lg overflow-hidden">

              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-[350px] object-cover"
              />

              <div className="p-10">

                <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">

                  {resource.category}

                </span>

                <h1 className="mt-6 text-5xl font-bold">

                  {resource.title}

                </h1>

                <p className="mt-6 text-lg text-slate-600 leading-8">

                  {resource.description}

                </p>

                <div className="mt-8 flex gap-8">

                  <div>

                    <div className="text-sm text-slate-500">
                      Type
                    </div>

                    <div className="font-semibold">
                      {resource.type}
                    </div>

                  </div>

                  <div>

                    <div className="text-sm text-slate-500">
                      Downloads
                    </div>

                    <div className="font-semibold">
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