import React from 'react';

import { SEO } from '../../components/SEO';
import { Reveal } from '../../components/Reveal';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PremiumButton } from '../../components/UI/PremiumButton';
import { PageTransition } from '../../components/PageTransition';

export const Landscaping: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Luxury Landscape Architecture & Masonry"
        description="Premium landscape architecture, custom masonry patios, stone retaining walls, and outdoor living space construction in Calgary."
        canonicalUrl="/services/landscaping"
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
                Premium Landscaping & <em className="font-serif italic text-gold font-normal">Architecture</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                Luxury extends beyond the threshold of your home. We design and build high-end outdoor living environments, combining custom stone masonry, architectural timber framing, and site drainage.
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
                    src="/assets/image13.png"
                    alt="Premium custom flagstone patio and landscape styling"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 text-left">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Outdoor Living
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-light text-navy mb-6">
                  Extending Your Residential Footprint
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-muted-text font-light leading-relaxed mb-6">
                  We construct outdoor spaces designed to handle the Calgary climate. Our developments focus on functional zones, creating cohesive flow between indoor living areas and exterior lounges.
                </p>
                <p className="text-muted-text font-light leading-relaxed">
                  Whether you wish to build a custom timber pergola, install a natural stone fireplace, lay large-format paver patios, or structure retaining walls to manage property slopes, our builders apply commercial-grade foundations for structural stability.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID */}
      <section className="py-24 bg-soft-cream border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          
          <div className="max-w-2xl mb-16">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Developments
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-light text-navy">
                Our Landscape Engineering Capabilities
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Custom Patios & Masonry</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  We lay natural flagstone, slate, and premium concrete pavers on compacted aggregate bases, securing borders with reinforced mortar to prevent settling.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Retaining Walls & Grading</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  We build structural brick and stone retaining walls, incorporating gravel backfill and drainage pipes to manage frost heave and prevent soil erosion.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Timber Structures & Plants</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  We build custom timber pergolas, decks, and screens using cedar and fir. Planting layouts incorporate hardy, drought-tolerant species suited to Calgary.
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
              Design Your Outdoor Living Space
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs text-muted-text leading-relaxed max-w-md mx-auto mb-8 font-light">
              Connect with our Calgary design specialists to schedule a site review. We coordinate grading plans, stone selections, and woodwork designs.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <PremiumButton variant="primary" to="/contact">
              Book Landscape Consultation
            </PremiumButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default Landscaping;
