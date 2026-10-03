import { Link } from "react-router-dom";

export default function AffiliateDisclosure() {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
      <p>
        <span className="font-semibold text-slate-800">Disclosure:</span> Some
        links on this page may be affiliate links. If you purchase through them,
        NSL Digital Lab may earn a commission at no additional cost to you. Read
        the full{" "}
        <Link
          to="/affiliate-disclosure"
          className="font-medium text-cyan-700 underline-offset-2 hover:underline"
        >
          affiliate disclosure
        </Link>
        .
      </p>
    </aside>
  );
}
