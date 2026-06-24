import { Route } from "react-router-dom";

import SeoInternshipPune from "../app/Internship/SeoInternshipPune";
import SeoInternshipMumbai from "../app/Internship/SeoInternshipMumbai";
import RemoteSeoInternship from "../app/Internship/RemoteSeoInternship";

const internshipRoutes = (
  <>
    <Route
      path="/seo-internship-pune"
      element={<SeoInternshipPune />}
    />

    <Route
      path="/seo-internship-mumbai"
      element={<SeoInternshipMumbai />}
    />

    <Route
      path="/remote-seo-internship"
      element={<RemoteSeoInternship />}
    />
  </>
);

export default internshipRoutes;