import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";

import AppRoutes from "./AppRoutes";

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>,
  );

  const h = helmetContext.helmet;
  const head = h
    ? [h.title, h.meta, h.link, h.script].map((part) => part.toString()).join("\n")
    : "";

  return { html, head };
}
