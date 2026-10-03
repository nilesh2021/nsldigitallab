import { createContext, useContext, type ReactNode } from "react";

const CareerTrackingContext = createContext<string>("career-hub");

export function CareerTrackingProvider({
  pageSlug,
  children,
}: {
  pageSlug: string;
  children: ReactNode;
}) {
  return (
    <CareerTrackingContext.Provider value={pageSlug}>
      {children}
    </CareerTrackingContext.Provider>
  );
}

export function useCareerPageSlug(): string {
  return useContext(CareerTrackingContext);
}
