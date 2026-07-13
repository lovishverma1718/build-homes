import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Lazy load pages for optimized bundle size & Lighthouse performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Flooring = lazy(() => import('./pages/services/Flooring'));
const Painting = lazy(() => import('./pages/services/Painting'));
const KitchenCabinets = lazy(() => import('./pages/services/KitchenCabinets'));
const BathroomRenovation = lazy(() => import('./pages/services/BathroomRenovation'));
const Landscaping = lazy(() => import('./pages/services/Landscaping'));
const Process = lazy(() => import('./pages/Process'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Scroll Restoration helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Instant scroll resets are standard for route changes to prevent flash transitions
    });
  }, [pathname]);

  return null;
};

// Luxury loading fallback indicator
const LoadingPlaceholder = () => (
  <div className="flex-grow flex items-center justify-center min-h-[60vh] bg-soft-cream">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-[2px] bg-gold/30 relative overflow-hidden rounded-full">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gold animate-[loadingLine_1.5s_infinite_ease-in-out]" />
      </div>
      <span className="text-[10px] tracking-widest text-navy/40 uppercase font-semibold">
        Loading Space
      </span>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        
        {/* Sticky Header */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow flex flex-col pt-0">
          <Suspense fallback={<LoadingPlaceholder />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              
              {/* Services & Sub-Services */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/flooring" element={<Flooring />} />
              <Route path="/services/painting" element={<Painting />} />
              <Route path="/services/kitchen-cabinets" element={<KitchenCabinets />} />
              <Route path="/services/bathroom-renovation" element={<BathroomRenovation />} />
              <Route path="/services/landscaping" element={<Landscaping />} />
              
              <Route path="/process" element={<Process />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsAndConditions />} />
              
              {/* 404 Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
