import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-24 pb-12 mt-auto border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(184,138,68,0.04),transparent_40%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Logo & Narrative */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3" aria-label="Build Dream Homes Home">
              <img
                src="/assets/logo.png"
                alt="Build Dream Homes Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <span className="font-sans font-bold tracking-wider text-white text-lg uppercase">
                Build Dream Homes
              </span>
            </Link>
            <p className="text-sm font-light text-stone-gray leading-relaxed max-w-xs">
              Architectural precision, premium craftsmanship, and a tailored client experience. Over 25 years of combined experience crafting bespoke residences across Calgary.
            </p>
            <div className="flex flex-col gap-1 text-xs text-stone-gray/60 font-light">
              <p>✔ Calgary Licensed Contractor</p>
              <p>✔ Comprehensive $5M Liability Insured</p>
              <p>✔ WCB Alberta Registered</p>
            </div>
          </div>

          {/* Navigation Directory */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold">Company</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                About Our Firm
              </Link>
              <Link to="/process" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                Our Construction Process
              </Link>
              <Link to="/faq" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                Frequently Asked Questions
              </Link>
              <Link to="/contact" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                Book Consultation
              </Link>
            </nav>
          </div>

          {/* Services Directory */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold">Renovation Services</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/services/kitchen-cabinets" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                Bespoke Kitchen Cabinets
              </Link>
              <Link to="/services/bathroom-renovation" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                Luxury Bathroom Renovation
              </Link>
              <Link to="/services/flooring" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                Premium Flooring Sourcing
              </Link>
              <Link to="/services/painting" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                Interior & Exterior Painting
              </Link>
              <Link to="/services/landscaping" className="text-sm font-light text-stone-gray hover:text-white transition-colors duration-200">
                Bespoke Landscape Design
              </Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h4 className="text-xs uppercase font-bold tracking-widest text-gold">Office Details</h4>
            <address className="not-italic flex flex-col gap-4 text-sm font-light text-stone-gray">
              <div>
                <p className="font-semibold text-white mb-1">Calgary Head Office</p>
                <p>Calgary, Alberta, Canada</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Call Our Representatives</p>
                <p className="hover:text-white transition-colors duration-200">
                  <a href="tel:+15875008393">+1 (587) 500-8393</a>
                </p>
                <p className="hover:text-white transition-colors duration-200">
                  <a href="tel:+15878908393">+1 (587) 890-8393</a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Inquiries</p>
                <p className="hover:text-white transition-colors duration-200">
                  <a href="mailto:info@builddream.homes">info@builddream.homes</a>
                </p>
              </div>
            </address>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 text-xs text-stone-gray/50 font-light">
          <p>© {currentYear} Build Dream Homes Ltd. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors duration-200">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
