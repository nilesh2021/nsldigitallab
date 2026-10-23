import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./styles/index.css";

import AppRoutes from "./AppRoutes";

const container = document.getElementById("root")!;

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// Prerendered routes ship server HTML inside #root; everything else is client-rendered.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
