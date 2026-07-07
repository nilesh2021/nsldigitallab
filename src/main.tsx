import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./styles/index.css";

import App from "./app";
import RouteScrollToTop from "./app/components/RouteScrollToTop";

import BlogPage from "./app/blog/page";
import ClaudeLandingPage from "./app/landing/ai-tools/claudeLandingpage/page";
import CareerCrudPage from "./app/career-crud/page";
import CareerThankYouPage from "./app/careers/thank-you/page";
import ContactThankYouPage from "./app/contact/thank-you/page";
import ThankYouPage from "./app/thank-you/page";

import learnRoutes from "./routes/learnRoutes";
import resourceRoutes from "./routes/resourceRoutes";
import serviceRoutes from "./routes/serviceRoutes";
import careerRoutes from "./routes/careerRoutes";
import internshipRoutes from "./routes/internshipRoutes";
import policyRoutes from "./routes/policyRoutes";
import blogRoutes from "./routes/blog";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RouteScrollToTop />

        <Routes>
          {resourceRoutes}
          {learnRoutes}
          {serviceRoutes}
          {careerRoutes}
          {internshipRoutes}
          {policyRoutes}
          {blogRoutes}

          <Route path="/" element={<App />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/claude-ai" element={<ClaudeLandingPage />} />
          <Route path="/career-crud" element={<CareerCrudPage />} />

          <Route
            path="/careers/thank-you"
            element={<CareerThankYouPage />}
          />

          <Route
            path="/contact/thank-you"
            element={<ContactThankYouPage />}
          />

          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);