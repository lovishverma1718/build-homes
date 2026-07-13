import React from 'react';
import { Shield, Sparkles, Hammer, Clock, Users, Compass } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PremiumButton } from '../components/UI/PremiumButton';
import { PageTransition } from '../components/PageTransition';

export const About: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="About Our Firm"
        description="Learn about the design philosophy, values, and story of Build Dream Homes. We are Calgary's premier luxury home renovation company."
        canonicalUrl="/about"
      />

      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-16 bg-light-gray border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          <Breadcrumbs />
          <div className="max-w-3xl mt-8">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                The Firm
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-light text-navy tracking-tight leading-tight mb-6">
                Crafting Homes Around Fine Architecture and <em className="font-serif italic text-gold font-normal">Details</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                Build Dream Homes was founded in Calgary, Alberta, on a simple premise: residential remodeling should be handled with the structural precision of commercial engineering and the elegant touch of fine art.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. STORY SPLIT LAYOUT */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Copy - Left */}
            <div className="lg:col-span-6 text-left">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Our Origins
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-light text-navy tracking-tight mb-6">
                  The Pursuit of Architectural <em className="font-serif italic text-gold font-normal">Longevity</em>.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-muted-text font-light leading-relaxed mb-4">
                  For over two decades, our team has observed the shifting landscapes of residential construction in Alberta. We noticed a recurring gap: many homeowners struggled to find contractors who could execute bespoke, designer-drawn layouts without introducing structural compromise or administrative confusion.
                </p>
                <p className="text-muted-text font-light leading-relaxed mb-4">
                  Build Dream Homes emerged to fill that gap. We chose Calgary as our home base because we appreciate the rugged elegance of Western Canada's landscape—a landscape that demands durable building materials and climate-resilient engineering.
                </p>
                <p className="text-muted-text font-light leading-relaxed mb-8">
                  We started with specialized fine millwork and soon expanded into a comprehensive luxury renovation firm. Today, we work closely with Calgary's most respected engineers, interior designers, and local suppliers, ensuring that every tile transition, structural beam, and custom cabinet is installed with absolute fidelity to the blueprints.
                </p>
              </Reveal>
            </div>

            {/* Story Image - Right */}
            <div className="lg:col-span-6">
              <Reveal direction="right" delay={0.3}>
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-md border border-black/5">
                  <img
                    src="/assets/image2.png"
                    alt="Premium cabinetry millwork design showing gold hardware"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & VALUES CARDS */}
      <section className="py-24 md:py-32 bg-soft-cream border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          
          <div className="max-w-2xl mb-16">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Core Foundation
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-light text-navy tracking-tight">
                Our Mission, Vision, and Structural <em className="font-serif italic text-gold font-normal">Values</em>.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Reveal direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 min-h-[300px] flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-10 h-10 bg-warm-beige rounded-xl text-gold flex items-center justify-center mb-6">
                    <Compass size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-navy tracking-tight mb-3">Our Mission</h3>
                  <p className="text-xs text-muted-text leading-relaxed font-light">
                    To deliver premium residential transformations that honor elegant aesthetics and structural longevity. We believe in providing Calgary homeowners with a transparent, highly scheduled remodeling process that eliminates stress and delivers enduring quality.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 min-h-[300px] flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-10 h-10 bg-warm-beige rounded-xl text-gold flex items-center justify-center mb-6">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-navy tracking-tight mb-3">Our Vision</h3>
                  <p className="text-xs text-muted-text leading-relaxed font-light">
                    To define the standard of high-end home renovations in Calgary. We envision residential spaces that do not rely on passing interior design trends, but instead stand as timeless examples of architectural balance, ergonomic layout, and elite craftsmanship.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Values */}
            <Reveal direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 min-h-[300px] flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-10 h-10 bg-warm-beige rounded-xl text-gold flex items-center justify-center mb-6">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-navy tracking-tight mb-3">Our Core Values</h3>
                  <p className="text-xs text-muted-text leading-relaxed font-light">
                    Meticulous design fidelity, transparent fixed budgets, local accountability, and sustainable sourcing. We respect our clients' homes, maintaining clean worksites and utilizing low-emission materials to protect indoor environments.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 4. OUR QUALITY PROMISE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <Reveal direction="left" delay={0.1}>
                <div className="rounded-[24px] overflow-hidden aspect-[3/4] shadow-md border border-black/5 relative">
                  <img
                    src="/assets/image6.png"
                    alt="Build Dream Homes renovation construction precision in progress"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent pointer-events-none" />
                </div>
              </Reveal>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7">
              <Reveal direction="up">
                <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                  Quality Commitment
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-light text-navy tracking-tight leading-tight mb-6">
                  The Build Dream Homes Quality <em className="font-serif italic text-gold font-normal">Promise</em>.
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <p className="text-muted-text font-light leading-relaxed mb-8">
                  A high-end renovation is a major asset investment. We honor your trust by backing every project with concrete operational promises. We never cut corners, source substandard materials, or utilize unverified sub-trades.
                </p>
              </Reveal>

              {/* Specific Promises */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Reveal direction="up" delay={0.3} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Shield size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Guaranteed Fixed Pricing</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We protect you from unexpected billings. Our contracts outline explicit costs for all building materials and custom trade commissions.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.35} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Meticulous Scheduling</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We map logistics in advance. You receive dynamic updates tracking material delivery, inspections, and construction phases.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.4} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Hammer size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">True Red-Seal Quality</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      All custom framing, subfloor preparation, and cabinetry installations are conducted under senior Red-Seal carpenter oversight.
                    </p>
                  </div>
                </Reveal>

                <Reveal direction="up" delay={0.45} className="flex gap-4">
                  <div className="text-gold flex-shrink-0 mt-1">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy mb-1">Dust & Environment Care</h4>
                    <p className="text-xs text-muted-text font-light leading-relaxed">
                      We utilize advanced dust-containment systems, keeping active work zones isolated to protect your family's air quality.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 md:py-32 bg-light-gray text-center border-t border-black/5">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal direction="up">
            <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
              Consultation
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-light text-navy tracking-tight mb-6">
              Ready to Design Your <em className="font-serif italic text-gold font-normal">Dream</em> Residence?
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-muted-text font-light max-w-md mx-auto mb-8 leading-relaxed text-sm">
              Connect with our Calgary office to schedule an initial design review and structural planning meeting with our architectural advisors.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <PremiumButton variant="primary" to="/contact">
              Connect With Us
            </PremiumButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default About;
