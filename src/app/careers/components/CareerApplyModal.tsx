import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

type CareerApplyModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
};

export default function CareerApplyModal({
  open,
  onClose,
  title,
  description,
  children,
}: CareerApplyModalProps) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="career-apply-title"
        aria-describedby={description ? "career-apply-description" : undefined}
        className="relative max-h-[min(90vh,720px)] w-full max-w-xl overflow-y-auto rounded-3xl bg-white shadow-xl ring-1 ring-slate-200"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close application form"
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        >
          ×
        </button>

        <div className="px-6 py-8 sm:px-8">
          <h2 id="career-apply-title" className="pr-10 text-2xl font-semibold text-slate-900">
            {title}
          </h2>
          {description ? (
            <p id="career-apply-description" className="mt-3 text-sm leading-6 text-slate-600">
              {description}
            </p>
          ) : null}
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
