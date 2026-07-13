import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Check, ShieldCheck, Award, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { PremiumButton } from '../components/UI/PremiumButton';
import { LuxuryCard } from '../components/UI/LuxuryCard';
import { FeatureCard } from '../components/UI/FeatureCard';
import { StatCard } from '../components/UI/StatCard';
import { CustomAccordion } from '../components/CustomAccordion';
import { ContactForm } from '../components/ContactForm';
import { PageTransition } from '../components/PageTransition';

export const Home: React.FC = () => {
  // FAQs list for Home Page
  const faqItems = [
    {
      id: 'h1',
      question: 'How long does a luxury home renovation typically take?',
      answer: 'Project timelines depend heavily on scope. A custom kitchen cabinet and layout remodel generally spans 6 to 10 weeks, whereas a comprehensive whole-home structural renovation may take 4 to 8 months. During the planning phase, we provide a detailed, binding schedule so you know exactly what to expect at every phase.',
    },
    {
      id: 'h2',
      question: 'Do you provide detailed project estimates before construction starts?',
      answer: 'Yes. We practice complete financial transparency. Following our initial consultation and planning phase, we provide a comprehensive architectural-grade estimate outlining all materials, craftsmanship hours, sub-trades, and municipal permits. We work with fixed-price agreements to ensure there are no unexpected costs.',
    },
    {
      id: 'h3',
      question: 'Do you serve all areas of Calgary and surrounding municipalities?',
      answer: 'Yes, we specialize in luxury renovations throughout Calgary, including Mount Royal, Britannia, Altadore, Aspen Woods, Springbank, and surrounding communities. Our team is fully licensed for residential construction within the City of Calgary and rural districts.',
    },
    {
      id: 'h4',
      question: 'Can I renovate just one room, or do you only execute whole-home projects?',
      answer: 'We specialize in targeted luxury upgrades as well as whole-home transformations. Whether you wish to build custom cabinets for your kitchen, execute a luxury bathroom renovation, or carry out a complete interior paint finish, we apply the same high architectural standards and meticulous precision to every project.',
    },
    {
      id: 'h5',
      question: 'Do you design and build your custom cabinets locally?',
      answer: 'Every custom cabinet is designed in-house and built in Calgary using high-grade sustainable materials, premium structural hardware, and architectural finishes. This gives us complete control over quality and allows us to accommodate bespoke layouts that standard factory cabinets cannot fit.',
    },
    {
      id: 'h6',
      question: 'What premium flooring options do you install?',
      answer: 'We source and install custom wide-plank engineered hardwood, solid natural hardwood, premium Italian porcelain tile, natural stone (marble, travertine), and wool carpeting. Our flooring installations include extensive subfloor preparation to ensure a lifetime of structural stability.',
    },
    {
      id: 'h7',
      question: 'How much does a luxury bathroom renovation cost in Calgary?',
      answer: 'Luxury bathroom renovations generally range from $35,000 to over $90,000, depending on structural reconfiguring, custom stone tile selections, steam shower installations, and premium plumbing fixtures. We design each project to maximize both architectural aesthetic and functional luxury.',
    },
    {
      id: 'h8',
      question: 'How do I get started with Build Dream Homes?',
      answer: 'Getting started is simple. You can schedule an initial consultation through our website form, or call our Calgary office. We start with a brief design call to discuss your ideas, budget expectations, and timeline, followed by an on-site structural evaluation and planning phase.',
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Luxury Home Renovations Calgary"
        description="Build Dream Homes specializes in high-end residential renovations, custom kitchen cabinets, bathrooms, flooring, painting, and landscaping in Calgary, AB."
        ogType="website"
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-navy">
        {/* Cinematic static image background with zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/image1.png"
            alt="Luxury modern home architectural renovation"
            className="w-full h-full object-cover opacity-60 animate-image-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 flex flex-col justify-between h-[75vh]">
          <div className="max-w-2xl text-left mt-auto">
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-white text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-6">
                Renovating Homes.<br />
                <em className="font-serif italic text-gold font-normal">Elevating</em> Everyday Living.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="text-stone-gray text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
                We design and execute thoughtful, high-end residential renovations that combine elite craftsmanship, architectural precision, and a seamless customer experience for homeowners throughout Calgary.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <div className="flex flex-wrap items-center gap-4">
                <PremiumButton variant="secondary" to="/contact">
                  Book a Free Consultation
                </PremiumButton>
                <PremiumButton variant="outline" to="/services" className="border-white/20 text-white hover:bg-white hover:text-navy">
                  Explore Our Services
                </PremiumButton>
              </div>
            </Reveal>
          </div>

          {/* Floating Trust Card */}
          <div className="mt-auto pt-12 flex flex-wrap gap-6 text-xs text-white/90 font-medium">
            <Reveal direction="up" delay={0.45} className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full">
              <Check size={14} className="text-gold" />
              <span>Calgary Based</span>
            </Reveal>
            <Reveal direction="up" delay={0.5} className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full">
              <ShieldCheck size={14} className="text-gold" />
              <span>Licensed Professionals</span>
            </Reveal>
            <Reveal direction="up" delay={0.55} className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full">
              <Award size={14} className="text-gold" />
              <span>Premium Craftsmanship</span>
            </Reveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase">
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-24 md:py-40 bg-soft-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] shadow-lg">
                  <img
                    src="/assets/image2.png"
                    alt="Luxury kitchen cabinet styling and craftsmanship detail"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-black/5 p-4 rounded-xl max-w-xs hidden sm:block">
                    <p className="text-xs text-navy font-semibold uppercase tracking-wider mb-1">Architectural Focus</p>
                    <p className="text-[11px] text-muted-text font-light leading-relaxed">
                      Every project is designed in unity with your residence's existing architectural landscape.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Editorial Copy Column */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <Reveal direction="right" delay={0.1}>
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Design Philosophy
                </span>
              </Reveal>
              
              <Reveal direction="right" delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-light text-navy tracking-tight leading-tight mb-6">
                  Designed Around the Way You <em className="font-serif italic text-gold font-normal">Live</em>.
                </h2>
              </Reveal>

              <Reveal direction="right" delay={0.3}>
                <p className="text-muted-text font-light leading-relaxed mb-6 text-base">
                  At Build Dream Homes, we believe luxury is not merely about ornamentation; it is about architectural balance, tactile materials, and structural integrity. Our firm approaches home renovations through a lens of classic proportion and modern elegance.
                </p>
                <p className="text-muted-text font-light leading-relaxed mb-8 text-base">
                  We collaborate with Calgary's finest designers and engineers to transform residential spaces. From custom kitchen cabinets that balance utility and grace, to rich flooring and detailed interior paint, our meticulous execution ensures a lifetime of value.
                </p>
              </Reveal>

              <Reveal direction="right" delay={0.4}>
                <PremiumButton variant="text" to="/about" showIcon>
                  Learn More About Our Philosophy
                </PremiumButton>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL SERVICES GRID */}
      <section className="py-24 md:py-40 bg-white border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-left mb-16 md:mb-24">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Areas of Expertise
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-light text-navy tracking-tight leading-tight max-w-xl">
                Bespoke Sourcing & Craftsmanship <em className="font-serif italic text-gold font-normal">Services</em>.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.1} className="lg:col-span-1">
              <LuxuryCard
                image="/assets/image8.png"
                title="Kitchen Cabinets & Millwork"
                serifWord="cabinets"
                description="Bespoke kitchen layouts featuring custom wood cabinets, integrated structural appliances, and hand-finished premium stone workspaces."
                to="/services/kitchen-cabinets"
              />
            </Reveal>
            
            <Reveal direction="up" delay={0.2} className="lg:col-span-1">
              <LuxuryCard
                image="/assets/image10.png"
                title="Luxury Bathroom Renovation"
                serifWord="bathroom"
                description="Spa-grade master retreats incorporating steam systems, custom floor tile layouts, floating custom vanities, and precise architectural hardware."
                to="/services/bathroom-renovation"
              />
            </Reveal>

            <Reveal direction="up" delay={0.3} className="lg:col-span-1">
              <LuxuryCard
                image="/assets/image3.png"
                title="Premium Flooring Installation"
                serifWord="flooring"
                description="Exquisite wide-plank engineered hardwood, solid oak, and premium natural stone. Installed with detailed subfloor prep for structural longevity."
                to="/services/flooring"
              />
            </Reveal>

            <Reveal direction="up" delay={0.1} className="lg:col-span-1 md:col-span-2 lg:col-span-1">
              <LuxuryCard
                image="/assets/image7.png"
                title="Interior & Exterior Painting"
                serifWord="painting"
                description="Flawless architectural finishes. Meticulous wall preparation, dustless sanding, and premium zero-VOC paints for crisp, elegant surfaces."
                to="/services/painting"
              />
            </Reveal>

            <Reveal direction="up" delay={0.2} className="lg:col-span-2 md:col-span-2 lg:col-span-2">
              <LuxuryCard
                image="/assets/image13.png"
                title="Premium Landscape Architecture"
                serifWord="landscape"
                description="Bespoke outdoor living spaces. Fine stone patios, structural masonry retaining walls, custom woodwork, and local horticultural landscaping."
                to="/services/landscaping"
              />
            </Reveal>
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-24 md:py-40 bg-light-gray relative overflow-hidden">
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(184,138,68,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Heading and Stats */}
            <div className="lg:col-span-5 text-left lg:sticky lg:top-32">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Why Build Dream Homes
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-light text-navy tracking-tight leading-tight mb-8">
                  Uncompromising Standards. Calgary <em className="font-serif italic text-gold font-normal">Credibility</em>.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-muted-text font-light leading-relaxed mb-12 max-w-sm">
                  We approach luxury remodeling as a collaborative architectural journey, combining strict schedules, clear contracts, and exceptional material selections.
                </p>
              </Reveal>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Reveal direction="up" delay={0.3}>
                  <StatCard
                    value="25+"
                    label="Years Combine"
                    description="Our project managers and lead craftsmen represent decades of luxury building expertise."
                  />
                </Reveal>
                <Reveal direction="up" delay={0.4}>
                  <StatCard
                    value="100%"
                    label="Custom Design"
                    description="No templated layouts. Every cabinet, tile pattern, and custom molding is designed uniquely."
                  />
                </Reveal>
              </div>
            </div>

            {/* Right Column: Values Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal direction="up" delay={0.1}>
                <FeatureCard
                  number="01"
                  title="Quality Craftsmanship"
                  description="We partner with Calgary's finest artisans. From custom furniture-grade cabinetry to flawless stone edge profiling, our details define luxury."
                />
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <FeatureCard
                  number="02"
                  title="Experienced Lead Team"
                  description="All projects are directed by senior building technologists and red-seal carpenters, ensuring correct structural solutions."
                />
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <FeatureCard
                  number="03"
                  title="Transparent Pricing"
                  description="We believe in clarity. Our contracts are fixed-price with detailed specifications, protecting your investment from market volatility."
                />
              </Reveal>
              <Reveal direction="up" delay={0.4}>
                <FeatureCard
                  number="04"
                  title="Attention to Detail"
                  description="We inspect everything under laser-level alignments. We focus on exact transitions between flooring types and grain-matched millwork."
                />
              </Reveal>
              <Reveal direction="up" delay={0.5}>
                <FeatureCard
                  number="05"
                  title="Reliable Timelines"
                  description="Using advanced critical-path scheduling, we log trade logistics dynamically, delivering your custom residence on the exact week promised."
                />
              </Reveal>
              <Reveal direction="up" delay={0.6}>
                <FeatureCard
                  number="06"
                  title="Calgary Sourced"
                  description="We prioritize premium local suppliers and custom millwork shops, supporting our Albertan economy while ensuring quick logistics."
                />
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PROCESS TIMELINE PREVIEW */}
      <section className="py-24 md:py-40 bg-white border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                The Master Plan
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-light text-navy tracking-tight leading-tight">
                Our Meticulous <em className="font-serif italic text-gold font-normal">Renovation</em> Process.
              </h2>
            </Reveal>
          </div>

          {/* Timeline Horizontal Layout on Desktop / Vertical on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line for large viewports */}
            <div className="absolute top-20 left-12 right-12 h-[1px] bg-black/10 hidden lg:block z-0" />

            {/* Step 1 */}
            <Reveal direction="up" delay={0.1} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-14 h-14 bg-warm-beige border-2 border-gold rounded-full flex items-center justify-center font-serif text-xl italic text-gold font-bold mb-6 hover:bg-gold hover:text-white transition-colors duration-300">
                1
              </div>
              <h3 className="text-lg font-medium text-navy mb-3">Consultation</h3>
              <p className="text-xs text-muted-text leading-relaxed font-light max-w-xs">
                We meet in your home to explore your design ideas, review spatial potentials, and define initial project scopes and budgets.
              </p>
            </Reveal>

            {/* Step 2 */}
            <Reveal direction="up" delay={0.2} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-14 h-14 bg-warm-beige border-2 border-gold rounded-full flex items-center justify-center font-serif text-xl italic text-gold font-bold mb-6 hover:bg-gold hover:text-white transition-colors duration-300">
                2
              </div>
              <h3 className="text-lg font-medium text-navy mb-3">Planning & Design</h3>
              <p className="text-xs text-muted-text leading-relaxed font-light max-w-xs">
                Our engineering team drafts construction plans, specifies premium materials, and structures fixed contracts with permit filings.
              </p>
            </Reveal>

            {/* Step 3 */}
            <Reveal direction="up" delay={0.3} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-14 h-14 bg-warm-beige border-2 border-gold rounded-full flex items-center justify-center font-serif text-xl italic text-gold font-bold mb-6 hover:bg-gold hover:text-white transition-colors duration-300">
                3
              </div>
              <h3 className="text-lg font-medium text-navy mb-3">Precision Construction</h3>
              <p className="text-xs text-muted-text leading-relaxed font-light max-w-xs">
                Our senior red-seal builders execute construction under rigid schedules, keeping site noise and dust controlled via dust extraction.
              </p>
            </Reveal>

            {/* Step 4 */}
            <Reveal direction="up" delay={0.4} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-14 h-14 bg-warm-beige border-2 border-gold rounded-full flex items-center justify-center font-serif text-xl italic text-gold font-bold mb-6 hover:bg-gold hover:text-white transition-colors duration-300">
                4
              </div>
              <h3 className="text-lg font-medium text-navy mb-3">Final Walkthrough</h3>
              <p className="text-xs text-muted-text leading-relaxed font-light max-w-xs">
                We review the finished surfaces together, resolving minor touchups, before handing over structural booklets and warranties.
              </p>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.5} className="mt-16 text-center">
            <PremiumButton variant="outline" to="/process">
              Read Our Process Guide
            </PremiumButton>
          </Reveal>

        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section className="py-24 md:py-40 bg-soft-cream">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5 text-left">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Have Questions?
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-light text-navy tracking-tight leading-tight mb-6">
                  Frequently Answered <em className="font-serif italic text-gold font-normal">Questions</em>.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-muted-text font-light leading-relaxed mb-8 max-w-sm">
                  Find structural details about estimates, construction timelines, and service scopes for homeowners in Calgary.
                </p>
                <PremiumButton variant="text" to="/faq" showIcon>
                  Go to Searchable FAQ Page
                </PremiumButton>
              </Reveal>
            </div>

            {/* Right Column Accordion */}
            <div className="lg:col-span-7 text-left">
              <Reveal direction="up" delay={0.3}>
                <CustomAccordion items={faqItems.slice(0, 5)} />
              </Reveal>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Let's Build Something Exceptional Together - Middle CTA Banner */}
      <section className="py-32 md:py-40 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/image16.png"
            alt="Premium custom architectural millwork layout"
            className="w-full h-full object-cover opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
          <Reveal direction="up">
            <span className="text-xs uppercase font-bold tracking-widest text-gold mb-4 block">
              Start Your Remodeling Journey
            </span>
          </Reveal>
          
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight max-w-3xl mb-8">
              Let's Build Something <em className="font-serif italic text-gold font-normal">Exceptional</em> Together.
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-stone-gray font-light max-w-lg mb-10 leading-relaxed text-sm md:text-base">
              Work with Calgary's premier residential renovation specialists. Experience transparent coordination, fixed contracts, and timeless home design.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <PremiumButton variant="secondary" to="/contact">
              Schedule Your Consultation
            </PremiumButton>
          </Reveal>
        </div>
      </section>

      {/* 8. CONTACT PREVIEW */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Contact Card and Image */}
            <div className="lg:col-span-5 text-left">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Get In Touch
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-light text-navy tracking-tight leading-tight mb-8">
                  Connect With Our Calgary <em className="font-serif italic text-gold font-normal">Firm</em>.
                </h2>
              </Reveal>

              <Reveal direction="up" delay={0.2} className="mb-8 rounded-[24px] overflow-hidden aspect-[4/3] shadow-md border border-black/5">
                <img
                  src="/assets/image14.png"
                  alt="Build Dream Homes Calgary Office Lounge Consultation Area"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </Reveal>

              {/* Office Details */}
              <div className="flex flex-col gap-6">
                <Reveal direction="up" delay={0.3} className="flex items-start gap-4">
                  <div className="p-3 bg-warm-beige rounded-xl text-gold mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-navy mb-1">Corporate Office</h4>
                    <p className="text-xs text-muted-text font-light">Calgary, Alberta, Canada</p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.35} className="flex items-start gap-4">
                  <div className="p-3 bg-warm-beige rounded-xl text-gold mt-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-navy mb-1">Contact Numbers</h4>
                    <p className="text-xs text-muted-text font-light hover:text-gold transition-colors">
                      <a href="tel:+15875008393">Office: +1 (587) 500-8393</a>
                    </p>
                    <p className="text-xs text-muted-text font-light hover:text-gold transition-colors mt-0.5">
                      <a href="tel:+15878908393">Direct: +1 (587) 890-8393</a>
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={0.3}>
                <ContactForm />
              </Reveal>
            </div>

          </div>

        </div>
      </section>

    </PageTransition>
  );
};
export default Home;
