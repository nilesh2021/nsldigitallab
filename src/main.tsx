import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './styles/index.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import RouteScrollToTop from './app/components/RouteScrollToTop';

import BlogPage from './app/blog/page';



import ClaudeLandingPage from "./app/landing/ai-tools/claudeLandingpage/page";



import App from './app';
import learnRoutes from "./routes/learnRoutes";
import resourceRoutes from './routes/resourceRoutes';
import serviceRoutes from "./routes/serviceRoutes";
import careerRoutes from "./routes/careerRoutes";
import internshipRoutes from "./routes/internshipRoutes";
import policyRoutes from "./routes/policyRoutes";

import blogRoutes from "./routes/blog";

createRoot(document.getElementById('root')!).render(
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

        <Route
          path="/blog"
          element={<BlogPage />}
        />


        <Route
          path="/claude-ai"
          element={<ClaudeLandingPage />}
        />

      </Routes>
    </BrowserRouter>

  </HelmetProvider>
);