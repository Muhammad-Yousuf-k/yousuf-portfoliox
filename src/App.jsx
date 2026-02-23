import { Suspense, lazy } from "react";
import Navbar from "./component/Navbar";

// Lazy load all sections
const HeroSection = lazy(() => import("./sections/HeroSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const ServiceSection = lazy(() => import("./sections/ServiceSection"));
const ShowCaseSection = lazy(() => import("./sections/ShowCaseSection"));
const TestimonialSection = lazy(() => import("./sections/TestimonialSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));
const FooterSection = lazy(() => import("./sections/FooterSection"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading Hero...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading About...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div>Loading Services...</div>}>
        <ServiceSection />
      </Suspense>
      <Suspense fallback={<div>Loading Showcase...</div>}>
        <ShowCaseSection />
      </Suspense>
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<div>Loading Contact...</div>}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <FooterSection />
      </Suspense>
    </>
  );
};

export default App;