import { Route } from "react-router-dom";

import BootstrapTailwindTemplatesPage from "../../app/blog/web-development/500-bootstrap-5-500-tailwind-html-templates/page";

const webDevelopmentRoutes = (
  <>
    <Route
      path="/blog/web-development/500-bootstrap-5-500-tailwind-html-templates"
      element={<BootstrapTailwindTemplatesPage />}
    />
  </>
);

export default webDevelopmentRoutes;
