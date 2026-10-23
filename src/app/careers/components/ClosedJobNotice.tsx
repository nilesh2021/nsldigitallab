import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import type { CareerJob } from "../data/jobs";

export default function ClosedJobNotice({ job }: { job: CareerJob }) {
  if (job.status !== "closed") return null;

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="bg-amber-50 border-b border-amber-200 pt-28 pb-4 text-center text-amber-900">
        This position is closed and no longer accepting applications.{" "}
        <Link to="/careers" className="font-semibold underline">
          See open roles
        </Link>
      </div>
    </>
  );
}
