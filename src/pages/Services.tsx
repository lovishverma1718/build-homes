import React from 'react';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LuxuryCard } from '../components/UI/LuxuryCard';
import { PremiumButton } from '../components/UI/PremiumButton';
import { PageTransition } from '../components/PageTransition';

export const Services: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Our Renovation Services"
        description="Explore Build Dream Homes custom renovation services in Calgary: kitchen cabinets, luxury bathroom remodel, flooring, painting, and landscaping."
        canonicalUrl="/services"
      />

      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-16 bg-light-gray border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          <Breadcrumbs />
          <div className="max-w-3xl mt-8">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Expertise
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-light text-navy tracking-tight leading-tight mb-6">
                Our Premium Sourcing & Architectural <em className="font-serif italic text-gold font-normal">Renovations</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                We believe that every aspect of a home should reflect intentional design and structural care. Explore our specialized renovation areas, each managed by certified construction technologists and Red-Seal builders in Calgary.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kitchen */}
            <Reveal direction="up" delay={0.1}>
              <LuxuryCard
                image="/assets/image8.png"
                title="Bespoke Kitchen Cabinets & Millwork"
                serifWord="cabinets"
                description="Custom-engineered cabinet configurations constructed from high-grade hardwoods, featuring integrated appliances, soft-close hardware, and custom-milled crown moldings."
                to="/services/kitchen-cabinets"
              />
            </Reveal>

            {/* Bathroom */}
            <Reveal direction="up" delay={0.2}>
              <LuxuryCard
                image="/assets/image10.png"
                title="Luxury Bathroom Renovation"
                serifWord="bathroom"
                description="High-end master bath suites incorporating custom waterproofing systems, heated floors, steam showers, wall-mount faucets, and custom-fabricated marble double vanities."
                to="/services/bathroom-renovation"
              />
            </Reveal>

            {/* Flooring */}
            <Reveal direction="up" delay={0.3}>
              <LuxuryCard
                image="/assets/image3.png"
                title="Premium Flooring Installation"
                serifWord="flooring"
                description="Wide-plank engineered oak, solid hardwood, natural stone tiles, and premium luxury vinyl tile. Meticulous leveling and floor acoustic dampening preps included."
                to="/services/flooring"
              />
            </Reveal>

            {/* Painting */}
            <Reveal direction="up" delay={0.1}>
              <LuxuryCard
                image="/assets/image7.png"
                title="Architectural Interior & Exterior Painting"
                serifWord="painting"
                description="Perfect paint finishes using dustless sanding, detailed taping, structural priming, and zero-VOC premium paints from Benjamin Moore and Sherwin-Williams."
                to="/services/painting"
              />
            </Reveal>

            {/* Landscaping */}
            <Reveal direction="up" delay={0.2} className="lg:col-span-2">
              <LuxuryCard
                image="/assets/image13.png"
                title="Luxury Landscape Architecture & Masonry"
                serifWord="landscape"
                description="Bespoke outdoor developments. Solid flagstone patios, custom timber pergolas, structural brick retaining walls, custom grading drainage, and local Calgary floral layouts."
                to="/services/landscaping"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. TRUST BANNER */}
      <section className="py-24 md:py-32 bg-soft-cream border-t border-black/5 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal direction="up">
            <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
              Calgary Construction Credentials
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-light text-navy tracking-tight mb-6">
              Our Professional Building Standards
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs text-muted-text leading-relaxed max-w-lg mx-auto mb-10 font-light">
              All renovations are fully permitted by the City of Calgary. We hold $5,000,000 in comprehensive general liability insurance, are fully registered with WCB Alberta, and maintain an active record of compliance and structural safety.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <PremiumButton variant="primary" to="/contact">
              Discuss Your Renovation Vision
            </PremiumButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default Services;
