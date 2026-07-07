import { useParams, Navigate } from "react-router-dom";
import { resources } from "../../data/resources";
import ResourceDownload from "./components/ResourceDownload";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ResourceDetails() {
  const { slug } = useParams();

  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <>
      <Navigation />

     <main className="relative min-h-screen overflow-hidden bg-[#07142B]">
  {/* Dark background glow */}
  <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-br from-[#07142B] via-[#172B63] to-[#2D4B96]" />

  <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-[140px]" />
  <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />
  <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

  <section className="relative z-10 pb-20 pt-36 sm:pb-28 sm:pt-40">
    <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
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