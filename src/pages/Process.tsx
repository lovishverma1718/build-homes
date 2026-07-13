import React from 'react';
import { Shield, Clock, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PremiumButton } from '../components/UI/PremiumButton';
import { PageTransition } from '../components/PageTransition';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Initial Consultation',
      subtitle: 'Spatial Exploration & Intent',
      desc: 'Our journey begins in your home. We review your layout ideas, discuss budget goals, and identify structural limits. This stage is about aligning on feasibility and defining a clear design direction.',
      image: '/assets/image15.png',
    },
    {
      num: '02',
      title: 'Structural Planning',
      subtitle: 'Feasibility & Permitting',
      desc: 'We conduct detailed measurements, verify existing electrical and load-bearing walls, and coordinate with engineers. We structure a preliminary schedule and outline municipal permit requirements in Calgary.',
      image: '/assets/image2.png',
    },
    {
      num: '03',
      title: 'Bespoke Design & Sourcing',
      subtitle: 'Materials & Detailed Millwork',
      desc: 'We finalize cabinet profiles, flooring species, and tile patterns. You review exact material samples, and we structure a comprehensive fixed-price contract, locking in your project costs.',
      image: '/assets/image8.png',
    },
    {
      num: '04',
      title: 'Precision Construction',
      subtitle: 'Managed Execution',
      desc: 'Our red-seal carpenters and trades begin construction, keeping to our strict schedule. We maintain a clean work site, using dust extraction systems and protective sheeting to isolate the construction zones.',
      image: '/assets/image6.png',
    },
    {
      num: '05',
      title: 'Final Walkthrough & Handover',
      subtitle: 'Quality Review & Warranties',
      desc: 'We conduct a detailed walkthrough of all finished surfaces to resolve minor touchups. We then deliver your structural manuals, appliance warranty details, and construction documentation.',
      image: '/assets/image16.png',
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Our Renovation Process"
        description="Learn about Build Dream Homes 5-step residential renovation process: consultation, structural planning, bespoke design, construction, and final walkthrough."
        canonicalUrl="/process"
      />

      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-16 bg-light-gray border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          <Breadcrumbs />
          <div className="max-w-3xl mt-8">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                The Method
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-light text-navy tracking-tight leading-tight mb-6">
                Our Meticulous Five-Step Residential <em className="font-serif italic text-gold font-normal">Process</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                A premium home renovation requires more than craftsmanship; it demands a structured, transparent process. From initial ideas to final handover, we keep you informed at every stage.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. TIMELINE STEPS - EDITORIAL STAGGERED VERTICAL TIMELINE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-24 md:gap-32 relative">
            
            {/* Center connecting line for large viewports */}
            <div className="absolute left-[28px] md:left-1/2 top-10 bottom-10 w-[1px] bg-black/5 -translate-x-1/2 z-0 hidden md:block" />

            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center relative z-10">
                  
                  {/* Image Column - Staggered layout on desktop */}
                  <div className={`col-span-1 md:col-span-6 ${isEven ? 'md:order-1' : 'md:order-12'}`}>
                    <Reveal direction={isEven ? 'left' : 'right'}>
                      <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-md border border-black/5">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </Reveal>
                  </div>

                  {/* Spacer with Number Indicator for center line */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 bg-warm-beige border border-gold rounded-full text-xs font-semibold text-gold z-20">
                    {step.num}
                  </div>

                  {/* Copy Column */}
                  <div className={`col-span-1 md:col-span-6 text-left ${isEven ? 'md:order-12 md:pl-8' : 'md:order-1 md:pr-8'}`}>
                    <Reveal direction="up">
                      <span className="text-xs uppercase font-bold tracking-widest text-gold mb-2 block">
                        Phase {step.num}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light text-navy tracking-tight mb-1">
                        {step.title}
                      </h3>
                      <h4 className="text-xs uppercase font-semibold text-stone-gray tracking-wider mb-4">
                        {step.subtitle}
                      </h4>
                      <p className="text-sm text-muted-text font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </Reveal>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 3. COMMUNICATION VALUES */}
      <section className="py-24 bg-soft-cream border-y border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          
          <div className="max-w-2xl mb-16">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Collaboration
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-light text-navy">
                Clear Communication & Process Transparency
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <div className="text-gold mb-4"><Calendar size={24} /></div>
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Dynamic Logs</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  We use advanced scheduling tools to log active trades and material delivery dates, keeping you updated on project progress.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <div className="text-gold mb-4"><Shield size={24} /></div>
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Liaison Managers</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  You are paired with a dedicated project manager who handles all sub-trades, permit filings, and material logistics.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-[20px] border border-black/5 shadow-sm min-h-[220px]">
                <div className="text-gold mb-4"><Clock size={24} /></div>
                <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">Strict Schedules</h4>
                <p className="text-xs text-muted-text font-light leading-relaxed">
                  Our schedules are locked in before construction. We coordinate trades to prevent site delays and ensure timely handover.
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
              Start Your Project Scribing
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs text-muted-text leading-relaxed max-w-md mx-auto mb-8 font-light">
              Connect with our Calgary office to arrange an initial design call and discuss your structural renovation ideas.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <PremiumButton variant="primary" to="/contact">
              Book Initial Design Review
            </PremiumButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default Process;
