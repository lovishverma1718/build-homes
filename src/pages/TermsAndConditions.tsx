import React from 'react';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageTransition } from '../components/PageTransition';

export const TermsAndConditions: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for accessing and using the Build Dream Homes website."
        canonicalUrl="/terms-conditions"
      />

      <section className="relative pt-32 pb-16 bg-light-gray border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          <Breadcrumbs />
          <div className="max-w-3xl mt-8">
            <Reveal direction="up">
              <h1 className="text-4xl md:text-5xl font-light text-navy tracking-tight">
                Terms & Conditions
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-xs text-stone-gray font-light uppercase tracking-widest mt-2">
                Last updated: July 2026
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-left">
        <div className="max-w-[720px] mx-auto px-6 font-light text-muted-text text-sm md:text-base leading-relaxed flex flex-col gap-8">
          <Reveal direction="up">
            <h2 className="text-xl font-semibold text-navy mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and browsing our website at builddream.homes, you agree to comply with and be bound by these terms and conditions. If you do not agree with any part of these terms, you must discontinue your use of our site.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-xl font-semibold text-navy mb-4">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, Build Dream Homes Ltd. owns all intellectual property rights and materials contained in this website, including but not limited to the brand name, typography layouts, code structure, custom vector graphics, and specific digital copy.
            </p>
            <p className="mt-2">
              You are granted a limited, non-sublicensable license to view and read the site content for personal, non-commercial purposes. You must not copy, reprint, republish, or distribute any site graphics or images without our written consent.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-xl font-semibold text-navy mb-4">3. Accuracy of Estimations & Services</h2>
            <p>
              Information, project case figures, materials specifications, and general timelines listed on this website are provided for illustrative design purposes only. Initial estimates or scheduling projections are subject to alteration following on-site engineering evaluations, material market volatility, and custom fixed-price contract alignments.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <h2 className="text-xl font-semibold text-navy mb-4">4. Limitation of Liability</h2>
            <p>
              In no event shall Build Dream Homes Ltd., nor any of its directors, craftsmen, or employees, be held liable for any damages arising out of or in connection with your use of this website.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <h2 className="text-xl font-semibold text-navy mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Province of Alberta, Canada. You submit to the exclusive jurisdiction of the provincial and federal courts located in Calgary, Alberta, for the resolution of any disputes.
            </p>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default TermsAndConditions;
