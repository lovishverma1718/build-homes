import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const serviceLinks = [
    { name: 'Kitchen Cabinets', path: '/services/kitchen-cabinets' },
    { name: 'Bathroom Renovation', path: '/services/bathroom-renovation' },
    { name: 'Flooring Installation', path: '/services/flooring' },
    { name: 'Interior & Exterior Painting', path: '/services/painting' },
    { name: 'Premium Landscaping', path: '/services/landscaping' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 focus-visible:outline-2" aria-label="Build Dream Homes Home">
            <img
              src="/assets/logo.png"
              alt="Build Dream Homes Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
            <span className="font-sans font-bold tracking-wider text-navy text-lg uppercase hidden sm:inline-block">
              Build Dream Homes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                  isActive ? 'text-gold' : 'text-navy'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                  isActive ? 'text-gold' : 'text-navy'
                }`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold flex items-center gap-1 cursor-pointer ${
                  location.pathname.startsWith('/services') ? 'text-gold' : 'text-navy'
                }`}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-md border border-black/5 mt-4 p-3 rounded-2xl shadow-xl z-50 flex flex-col gap-1"
                  >
                    <Link
                      to="/services"
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-gray hover:text-gold border-b border-black/5 mb-1"
                    >
                      All Services
                    </Link>
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="px-4 py-2.5 text-sm font-medium text-navy hover:text-gold hover:bg-light-gray rounded-lg transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              to="/process"
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                  isActive ? 'text-gold' : 'text-navy'
                }`
              }
            >
              Our Process
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                  isActive ? 'text-gold' : 'text-navy'
                }`
              }
            >
              FAQ
            </NavLink>
          </nav>

          {/* CTA Link - Desktop */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-widest text-white uppercase bg-navy hover:bg-gold rounded-full transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2"
            >
              Book Consultation
            </Link>
          </div>

          {/* Hamburger Menu Toggle - Tablet & Mobile */}
          <button
            className="lg:hidden p-2 text-navy focus-visible:outline-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-navy z-40 lg:hidden flex flex-col justify-between pt-32 pb-16 px-8 backdrop-blur-lg"
          >
            {/* Background luxury overlay details */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(184,138,68,0.08),transparent_50%)] pointer-events-none" />

            <nav className="flex flex-col gap-6 text-left relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Link
                  to="/"
                  className="text-3xl font-light tracking-wide text-white hover:text-gold transition-colors duration-300"
                >
                  Home
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <Link
                  to="/about"
                  className="text-3xl font-light tracking-wide text-white hover:text-gold transition-colors duration-300"
                >
                  About
                </Link>
              </motion.div>

              {/* Collapsible Services Sub-list on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="flex flex-col gap-2"
              >
                <Link
                  to="/services"
                  className="text-3xl font-light tracking-wide text-white hover:text-gold transition-colors duration-300"
                >
                  Services
                </Link>
                <div className="pl-4 mt-2 flex flex-col gap-3 border-l border-white/10">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-base font-light text-stone-gray hover:text-gold transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <Link
                  to="/process"
                  className="text-3xl font-light tracking-wide text-white hover:text-gold transition-colors duration-300"
                >
                  Our Process
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Link
                  to="/faq"
                  className="text-3xl font-light tracking-wide text-white hover:text-gold transition-colors duration-300"
                >
                  FAQ
                </Link>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col gap-6 relative z-10"
            >
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center py-4 text-sm font-semibold tracking-wider text-navy uppercase bg-white hover:bg-gold hover:text-white rounded-full transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              
              <div className="flex flex-col gap-2 text-center text-xs text-stone-gray/60">
                <p>Calgary, Alberta, Canada</p>
                <p>info@builddream.homes • +1 (587) 500-8393</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
