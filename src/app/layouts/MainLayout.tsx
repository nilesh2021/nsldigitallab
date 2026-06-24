import { ReactNode } from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
};

export default function MainLayout({
  children,
}: Props) {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">

        {children}

      </main>

      <Footer />
    </>
  );
}