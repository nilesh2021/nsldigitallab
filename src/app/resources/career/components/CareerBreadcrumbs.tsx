import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type Item = { label: string; href?: string };

type Props = {
  items: Item[];
  className?: string;
};

export default function CareerBreadcrumbs({
  items,
  className = "mb-6",
}: Props) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="text-slate-400 transition-colors hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-white">{item.label}</span>
              )}
              {!isLast && (
                <ChevronRight className="h-4 w-4 text-slate-600" aria-hidden />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
