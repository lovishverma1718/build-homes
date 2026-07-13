import React from 'react';

import { SEO } from '../../components/SEO';
import { Reveal } from '../../components/Reveal';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PremiumButton } from '../../components/UI/PremiumButton';
import { PageTransition } from '../../components/PageTransition';

export const Flooring: React.FC = () => {
  const materials = [
    { name: 'Engineered Hardwood', desc: 'Bespoke wide-plank European white oak and maple, designed to resist Albertan moisture fluctuations.' },
    { name: 'Solid Hardwood', desc: 'Classic white oak, walnut, and cherry planks, finished in place with high-end oil and matte sealants.' },
    { name: 'Natural Stone & Porcelain', desc: 'Premium Italian marble, travertine, and large-format porcelain tiles for custom laundry rooms, entries, and mudrooms.' },
    { name: 'Wool Carpeting', desc: 'Ultra-luxurious, stain-resistant natural wool carpets for upper bedroom suites and media rooms.' },
  ];

  return (
    <PageTransition>
      <SEO
        title="Premium Flooring Sourcing & Installation"
        description="High-end engineered hardwood, solid wood, porcelain, and stone flooring installations in Calgary. Explore material selections and subfloor prep methods."
        canonicalUrl="/services/flooring"
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
                Premium Flooring Sourcing & <em className="font-serif italic text-gold font-normal">Installation</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                Flooring is the structural anchor of your home's aesthetic. We source and install architectural-grade wood, tile, and stone surfaces, emphasizing subfloor flatness and correct expansion clearances.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SPLIT INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image - Hero */}
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-md border border-black/5">
                  <img
                    src="/assets/image3.png"
                    alt="Premium flooring material selection layout"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 text-left">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Material Standards
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-light text-navy mb-6">
                  Sourced for Beauty. Built for the Alberta <em className="font-serif italic text-gold font-normal">Climate</em>.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-muted-text font-light leading-relaxed mb-6">
                  Calgary's dry winters and humid summers place high stress on timber flooring. Standard materials will expand, contract, and cup. To prevent this, we prioritize wide-plank engineered hardwood constructed with a multi-ply Birch core.
                </p>
                <p className="text-muted-text font-light leading-relaxed">
                  Our tile installations utilize advanced Schluter systems, establishing a neutral base that decouples the porcelain from your subfloor. This prevents mortar cracks and guarantees tile longevity.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MATERIALS LIST */}
      <section className="py-24 bg-soft-cream border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          
          <div className="max-w-2xl mb-16">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Selections
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-light text-navy">
                Our Curated Materials Library
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((mat, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-[20px] border border-black/5 shadow-sm min-h-[200px] flex flex-col justify-between">
                  <h3 className="text-base font-semibold text-navy mb-3">{mat.name}</h3>
                  <p className="text-xs text-muted-text font-light leading-relaxed">{mat.desc}</p>
                </div>
              </Reveal>
            ))}
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
                  Installation Methods
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-light text-navy mb-8">
                  Our Precision Flooring Process
                </h2>
              </Reveal>

              <div className="flex flex-col gap-6">
                <Reveal direction="up" delay={0.2} className="flex gap-4">
                  <div className="w-8 h-8 bg-warm-beige rounded-full flex items-center justify-center text-gold font-semibold text-xs flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Acclimatization</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      All wood flooring is stored in your home's regulated air environment for 10-14 days prior to laying, stabilizing humidity levels.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.25} className="flex gap-4">
                  <div className="w-8 h-8 bg-warm-beige rounded-full flex items-center justify-center text-gold font-semibold text-xs flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Laser Leveling Subfloor</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We sand down subfloor high spots and fill dips using self-leveling underlayment, targeting a variation limit of less than 1/8 inch across 10 feet.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.3} className="flex gap-4">
                  <div className="w-8 h-8 bg-warm-beige rounded-full flex items-center justify-center text-gold font-semibold text-xs flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Acoustic & Moisture Underlayment</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We install premium vapor barriers and structural wood adhesives to prevent future subfloor creaking and absorb floor sound transmission.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.35} className="flex gap-4">
                  <div className="w-8 h-8 bg-warm-beige rounded-full flex items-center justify-center text-gold font-semibold text-xs flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Detailed Trim Work</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We finish board borders with custom flush-mount air vents and solid wood baseboards, creating seamless transitions to drywall.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Left Image - Completed */}
            <div className="lg:col-span-5">
              <Reveal direction="right" delay={0.4}>
                <div className="rounded-[24px] overflow-hidden aspect-[3/4] shadow-md border border-black/5">
                  <img
                    src="/assets/image4.png"
                    alt="Finished wide plank hardwood flooring installation"
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
              Discuss Your Flooring Requirements
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs text-muted-text leading-relaxed max-w-md mx-auto mb-8 font-light">
              Connect with our design team for custom samples of oak, walnut, and marble. We coordinate material sourcing and site layout planning.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <PremiumButton variant="primary" to="/contact">
              Schedule Sourcing Review
            </PremiumButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default Flooring;
