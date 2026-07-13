import React from 'react';

import { SEO } from '../../components/SEO';
import { Reveal } from '../../components/Reveal';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { PremiumButton } from '../../components/UI/PremiumButton';
import { PageTransition } from '../../components/PageTransition';

export const BathroomRenovation: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Luxury Bathroom Renovation & Master Suites"
        description="Spa-grade master bathroom renovations in Calgary. Schluter waterproofing, heated tile floors, steam showers, and custom marble vanities."
        canonicalUrl="/services/bathroom-renovation"
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
                Luxury Bathroom <em className="font-serif italic text-gold font-normal">Renovation</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                A master suite bathroom should function as a private sanctuary. We execute premium bath renovations, focusing on waterproofing systems, custom stone tiling, steam showers, and high-end plumbing layouts.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT WITH IMAGES CAROUSEL/GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image - Hero */}
            <div className="lg:col-span-6">
              <Reveal direction="left">
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-md border border-black/5">
                  <img
                    src="/assets/image10.png"
                    alt="Spa grade master bathroom vanity design"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 text-left">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Design Layouts
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-light text-navy mb-6">
                  Spa-Grade Master Suite Elements
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-muted-text font-light leading-relaxed mb-6">
                  We specialize in redesigning outdated bathroom layouts to maximize flow and utility. Our spa-grade developments include floor-level curbless walk-in showers, freestanding soaking tubs, custom water closets, and double vanities with back-lit mirrors.
                </p>
                <p className="text-muted-text font-light leading-relaxed">
                  We integrate hidden conveniences like heated towel rails, thermostatic shower controls that store temperature settings, floor-warming networks, and built-in niches with integrated LED lighting.
                </p>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MULTI-IMAGE GALLERY DISPLAY */}
      <section className="py-24 bg-soft-cream border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          
          <div className="max-w-2xl mb-16">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                The Details
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-light text-navy">
                Meticulous Waterproofing & Finishes
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Reveal direction="left" className="rounded-[20px] overflow-hidden aspect-[4/3] shadow-sm border border-black/5 bg-white">
              <img
                src="/assets/image11.png"
                alt="Walk-in shower tile precision detail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal direction="right" className="rounded-[20px] overflow-hidden aspect-[4/3] shadow-sm border border-black/5 bg-white">
              <img
                src="/assets/image12.png"
                alt="Bespoke floating vanity details and plumbing fixtures"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Schluter Waterproofing</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  We construct all shower surrounds using Schluter-KERDI membrane and boards, creating a sealed moisture barrier that prevents drywall rot and mildew growth.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Custom Tiling & Grout</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  Our tile setters hand-align large-format stone and ceramic tiles. We seal all corners with flexible silicone caulk and use epoxy grouts to prevent water staining.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Ventilation & Plumbing</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  We install high-volume, silent Panasonic ventilation fans, correctly routed to external vents, to manage humidity. Upgraded plumbing features copper and PEX piping.
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
              Create Your Private Sanctuary
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs text-muted-text leading-relaxed max-w-md mx-auto mb-8 font-light">
              Connect with our Calgary design team to schedule a dimension evaluation and review steam shower setups, custom vanities, and marble tiling.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <PremiumButton variant="primary" to="/contact">
              Book Bath Consultation
            </PremiumButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default BathroomRenovation;
