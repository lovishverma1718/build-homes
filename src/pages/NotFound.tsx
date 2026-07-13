import React from 'react';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { PremiumButton } from '../components/UI/PremiumButton';
import { PageTransition } from '../components/PageTransition';

export const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Page Not Found"
        description="The requested page could not be found. Return to Build Dream Homes luxury home renovations in Calgary."
        canonicalUrl="/404"
      />

      <section className="flex-grow flex items-center justify-center min-h-[70vh] bg-soft-cream py-24 px-6 relative overflow-hidden">
        {/* Decorative layout background detail */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,138,68,0.03),transparent_60%)] pointer-events-none" />

        <div className="max-w-md mx-auto text-center relative z-10">
          <Reveal direction="up">
            <span className="font-serif text-8xl md:text-9xl font-light text-gold block mb-6 tracking-tight">
              404
            </span>
          </Reveal>
          
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-2xl md:text-3xl font-medium text-navy tracking-tight mb-4">
              Page Not Found
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="text-muted-text font-light text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">
              The architectural path you requested does not exist or has been relocated. Return to our main pages to continue exploring.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3} className="flex justify-center gap-4">
            <PremiumButton variant="primary" to="/">
              Return Home
            </PremiumButton>
            <PremiumButton variant="outline" to="/services">
              View Services
            </PremiumButton>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default NotFound;
