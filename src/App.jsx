import React, { Suspense, useState, useEffect } from 'react';
import Navbar from './component/navbar';
import HeroSection from './component/heroSec/heroSection';

const Carusol = React.lazy(() => import('./component/carusol'));
const AboutSection = React.lazy(() => import('./component/aboutSec/aboutSection'));
const ServiceSection = React.lazy(() => import('./component/serviceSec/serviceSection'));
const ShowCaseSection = React.lazy(() => import('./component/showCaseSec/showCaseSection'));
const Testimonial = React.lazy(() => import('./component/testimonial/testimonial'));
const ContactSection = React.lazy(() => import('./component/contactSec/contactSection'));
const Footer = React.lazy(() => import('./component/footer'));

const FullPageLoader = () => (
  <div
    className="fixed inset-0 z-50 flex flex-col items-center justify-center"
    style={{ backgroundColor: "var(--light)" }}
  >
    {/* Glowing spinner */}
    <div className="relative flex items-center justify-center">
      <div
        className="absolute h-24 w-24 rounded-full opacity-20 animate-ping"
        style={{
          background: "radial-gradient(circle, var(--secondary) 0%, transparent 70%)",
        }}
      ></div>
      <div
        className="h-16 w-16 border-4 border-t-transparent rounded-full animate-spin"
        style={{ borderColor: `var(--secondary) transparent var(--secondary) var(--secondary)` }}
      ></div>
    </div>

    {/* Loading text */}
    <p
      className="mt-6 text-lg font-semibold tracking-wider animate-pulse"
      style={{ color: "var(--primary)" }}
    >
      Loading...
    </p>

  </div>
);



const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--secondary)] border-t-transparent" />
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);


  return (
    <>
      {loading && <FullPageLoader />}
      <main className="exo2">
        <Navbar />
        <HeroSection />

        <Suspense fallback={<SectionLoader />}>
          <Carusol />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
          <ServiceSection />
          <ShowCaseSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Testimonial />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default App;
