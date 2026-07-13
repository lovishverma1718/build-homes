import React from 'react';
import { Check } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Reveal } from '../../components/Reveal';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PremiumButton } from '../../components/UI/PremiumButton';
import { PageTransition } from '../../components/PageTransition';

export const KitchenCabinets: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Bespoke Kitchen Cabinets & Millwork"
        description="Furniture-grade kitchen cabinet planning, design, and installation in Calgary. Hardwood materials, integrated soft-close hardware, and lacquer finishes."
        canonicalUrl="/services/kitchen-cabinets"
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
                Bespoke Kitchen Cabinets & <em className="font-serif italic text-gold font-normal">Millwork</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                The kitchen is the center of the home. We design and install custom, furniture-grade cabinetry and architectural trim that align with your lifestyle, providing maximum storage and classic visual rhythm.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image - Hero */}
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-md border border-black/5">
                  <img
                    src="/assets/image8.png"
                    alt="Premium kitchen island and custom cabinet design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 text-left">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Cabinet Sourcing
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-light text-navy mb-6">
                  Furniture-Grade Construction
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-muted-text font-light leading-relaxed mb-6">
                  Every cabinet box is constructed using 3/4-inch multi-ply maple plywood—never cheap particle board. This prevents box sagging and guarantees that hinges remain seated for decades.
                </p>
                <p className="text-muted-text font-light leading-relaxed">
                  We integrate Blum undermount drawer slides and heavy-duty soft-close hinges. Door faces are milled from solid walnut, white oak, or premium paints-grade wood, grain-matched across all rows for a seamless architectural flow.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DETAILS GRID */}
      <section className="py-24 bg-soft-cream border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          
          <div className="max-w-2xl mb-16">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Specifications
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-light text-navy">
                Bespoke Cabinet Engineering Details
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[240px] flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Custom Cabinet Cases</h4>
                  <p className="text-xs text-muted-text font-light leading-relaxed">
                    Built using dowel and screw joints, ensuring rigid cabinet boxes that stand perfectly level. Interior shelves are fully adjustable and finished in clean maple veneer.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[240px] flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Cabinet Finishes</h4>
                  <p className="text-xs text-muted-text font-light leading-relaxed">
                    We apply polyurethane lacquer coatings in an isolated spray booth. This creates a highly durable surface that resists water, food oils, and standard cleaning soaps.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[240px] flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Bespoke Millwork</h4>
                  <p className="text-xs text-muted-text font-light leading-relaxed">
                    From integrated pantry pullouts and hidden spice drawers to custom crown moldings and floating island details, we tailor every piece to your kitchen layout.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 4. INSTALLATION PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Process Copy */}
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  On-Site Execution
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-light text-navy mb-8">
                  Meticulous Kitchen Installation
                </h2>
              </Reveal>

              <div className="flex flex-col gap-6">
                <Reveal direction="up" delay={0.2} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Laser Level Alignment</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We set the upper and base cabinet rows using high-end cross-line lasers, adjusting wall shim tolerances to less than 1/16 of an inch for square stone countertops.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.25} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Custom Island Scribe</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We scribe base panels directly to your flooring contours, eliminating gaps and ensuring a solid base for large granite or quartz islands.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.3} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Appliance Panel Integration</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We mount custom matching panels to integrated refrigerators, dishwashers, and range hoods, creating clean architectural lines throughout the kitchen space.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Left Image - Installation */}
            <div className="lg:col-span-5">
              <Reveal direction="right" delay={0.4}>
                <div className="rounded-[24px] overflow-hidden aspect-[3/4] shadow-md border border-black/5">
                  <img
                    src="/assets/image9.png"
                    alt="Precision kitchen cabinet leveling and installation work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 bg-light-gray text-center border-t border-black/5">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal direction="up">
            <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
              Consultation
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-light text-navy tracking-tight mb-6">
              Design Your Custom Kitchen
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs text-muted-text leading-relaxed max-w-md mx-auto mb-8 font-light">
              Connect with our Calgary specialists to schedule an on-site dimension review and browse walnut, oak, and paint sample panels.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <PremiumButton variant="primary" to="/contact">
              Book Millwork Consultation
            </PremiumButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default KitchenCabinets;
