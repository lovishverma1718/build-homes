import React from 'react';
import { Check } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Reveal } from '../../components/Reveal';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PremiumButton } from '../../components/UI/PremiumButton';
import { PageTransition } from '../../components/PageTransition';

export const Painting: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Interior & Exterior Painting Services"
        description="Architectural-grade interior and exterior paint finishing in Calgary. Dustless sanding, priming, and zero-VOC paint applications."
        canonicalUrl="/services/painting"
      />

      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-16 bg-light-gray border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          <Breadcrumbs />
          <div className="max-w-3xl mt-8">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Renovation Sector
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-light text-navy tracking-tight leading-tight mb-6">
                Interior & Exterior Paint <em className="font-serif italic text-gold font-normal">Finishes</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                A premium paint job is 90% preparation and 10% application. We deliver flawless architectural finishes on walls, trim, and ceilings, utilizing dustless preparation tools and zero-VOC coatings.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SPLIT INTERIOR / EXTERIOR */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image - Hero */}
            <div className="lg:col-span-5">
              <Reveal direction="left">
                <div className="rounded-[24px] overflow-hidden aspect-[3/4] shadow-md border border-black/5">
                  <img
                    src="/assets/image7.png"
                    alt="Interior wall paint application detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 text-left">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Paint Systems
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-light text-navy mb-8">
                  Flawless Coating Systems
                </h2>
              </Reveal>

              <div className="flex flex-col gap-8">
                {/* Interior */}
                <Reveal direction="up" delay={0.2} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy mb-1">Architectural Interior Painting</h3>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We execute interior painting using premium Benjamin Moore Aura and Sherwin-Williams Emerald paints. We spray cabinetry and trim to a factory-smooth level and hand-roll ceilings and walls to a consistent, trackless matte texture.
                    </p>
                  </div>
                </Reveal>

                {/* Exterior */}
                <Reveal direction="up" delay={0.25} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy mb-1">Weather-Resistant Exterior Coatings</h3>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      Calgary exterior surfaces face freezing snow and intense UV light. We prep siding, stucco, and wood trim with elastomeric and alkyd primers before applying specialized, breathable acrylic coatings designed to prevent peeling.
                    </p>
                  </div>
                </Reveal>

                {/* Cabinet Refinishing */}
                <Reveal direction="up" delay={0.3} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy mb-1">Fine Millwork & Trim Refinishing</h3>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We paint baseboards, crown moldings, casings, and built-in bookshelves using durable urethane enamel coatings. This ensures a clean, washable surface that handles years of impact.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PREPARATION PROCESS */}
      <section className="py-24 bg-soft-cream border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          
          <div className="max-w-2xl mb-16">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                The Standard
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-light text-navy">
                Our Rigorous Surface Preparation
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">1. Dustless Sanding</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  We hook all sanders to HEPA-certified vacuum extractors, removing 99% of dry plaster dust at the source before it drifts into your home's air systems.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">2. Patching & Caulking</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  We patch trim screw holes, fix joint shrinkage, and fill baseboard gaps using high-flex elastomeric caulking to prevent future cracking.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">3. Multi-Coat System</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  We apply one coat of blocking primer followed by two full coats of premium paint, ensuring complete opacity, rich tint, and accurate colors.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal direction="up">
            <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
              Consultation
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-light text-navy tracking-tight mb-6">
              Schedule Your Painting Consult
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs text-muted-text leading-relaxed max-w-md mx-auto mb-8 font-light">
              Connect with our Calgary coordinators to review paint catalogs, select gloss levels, and arrange on-site structural inspections.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <PremiumButton variant="primary" to="/contact">
              Book Paint Consultation
            </PremiumButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default Painting;
