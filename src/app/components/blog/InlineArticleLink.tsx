import { type ReactNode } from "react";
import { Link } from "react-router-dom";

type InlineArticleLinkProps = {
  to: string;
  children: ReactNode;
  variant?: "dark" | "light";
};

/**
 * Contextual in-content internal link — styled for readability, not over-optimization.
 */
export default function InlineArticleLink({
  to,
  children,
  variant = "dark",
}: InlineArticleLinkProps) {
  const className =
    variant === "light"
      ? "font-medium text-violet-600 underline decoration-violet-200 underline-offset-2 hover:text-violet-700 hover:decoration-violet-400 transition"
      : "font-medium text-cyan-400 underline decoration-cyan-500/40 underline-offset-2 hover:text-cyan-300 transition";

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
