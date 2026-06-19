import { useEffect } from "react";

// SEO
import SEO from "./seo/SEO";
import OrganizationSchema from "./seo/schemas/OrganizationSchema";
import WebsiteSchema from "./seo/schemas/WebsiteSchema";

// Components
import Navigation from "./app/components/Navigation";
import Hero from "./app/components/Hero";
import Services from "./app/components/Services";
import About from "./app/components/About";
import FeaturedWork from "./app/components/FeaturedWork";
import ContactSection from "./app/components/ContactSection";
import Footer from "./app/components/Footer";
import ScrollToTop from "./app/components/ScrollToTop";
import { PAGE_SEO } from "./seo/pages";

export default function App() {

  // Auto scroll to section after redirect

  useEffect(() => {

    const handleHashScroll = () => {

      const hash = window.location.hash;

      if (hash) {

        const id = hash.replace('#', '');

        setTimeout(() => {

          const element = document.getElementById(id);

          if (element) {

            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });

          }

        }, 300);

      }

    };

    handleHashScroll();

    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };

  }, []);

  return (

    <>

<SEO {...PAGE_SEO.home} />

    <OrganizationSchema />

    <WebsiteSchema />
    

 

      <div className="min-h-screen">

        <Navigation />

        <div id="home">
          <Hero />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="featured-work">
          <FeaturedWork />
        </div>

        <div id="contact">
          <ContactSection />
        </div>

        <ScrollToTop />

        <Footer />

      </div>

    </>

  );
}