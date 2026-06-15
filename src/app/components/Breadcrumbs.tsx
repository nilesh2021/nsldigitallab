import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm">

        {items.map((item, index) => {

          const isLast =
            index === items.length - 1;

          return (
            <li
              key={index}
              className="flex items-center gap-2"
            >

              {item.href && !isLast ? (

                <Link
                  to={item.href}
                  className="
                    text-gray-400
                    hover:text-cyan-400
                    transition-colors
                    duration-200
                  "
                >
                  {item.label}
                </Link>

              ) : (

                <span className="text-white font-medium">
                  {item.label}
                </span>

              )}

              {!isLast && (
                <ChevronRight className="h-4 w-4 text-gray-600" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}