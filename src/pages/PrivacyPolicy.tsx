import React from 'react';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageTransition } from '../components/PageTransition';

export const PrivacyPolicy: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Privacy Policy"
        description="Privacy policy details for visitors of Build Dream Homes. Learn how we handle and protect project information."
        canonicalUrl="/privacy-policy"
      />

      <section className="relative pt-32 pb-16 bg-light-gray border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          <Breadcrumbs />
          <div className="max-w-3xl mt-8">
            <Reveal direction="up">
              <h1 className="text-4xl md:text-5xl font-light text-navy tracking-tight">
                Privacy Policy
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
            <h2 className="text-xl font-semibold text-navy mb-4">Introduction</h2>
            <p>
              Build Dream Homes ("we," "us," or "our") operates the website builddream.homes. We respect your privacy and are committed to protecting any personal information you share with us through our digital inquiries or consultation scheduling.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="text-xl font-semibold text-navy mb-4">Information We Collect</h2>
            <p>
              When you submit a consultation request or contact us through our website, we collect personal information you explicitly provide:
            </p>
            <ul className="list-disc pl-5 mt-2 flex flex-col gap-2">
              <li>Contact details such as your full name, email address, and telephone number.</li>
              <li>Project details, including your home location in Calgary and specific renovation preferences.</li>
              <li>Any message content or attachments you include in your project description.</li>
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-xl font-semibold text-navy mb-4">How We Use Your Information</h2>
            <p>
              We utilize collected information exclusively to:
            </p>
            <ul className="list-disc pl-5 mt-2 flex flex-col gap-2">
              <li>Coordinate and schedule your complimentary renovation consultation.</li>
              <li>Evaluate project viability and formulate preliminary material sourcing and permit briefs.</li>
              <li>Respond directly to your email or telephone inquiries.</li>
              <li>Comply with local residential building and insurance compliance files.</li>
            </ul>
            <p className="mt-4 font-semibold text-navy">
              We do not sell, trade, or lease your personal contact details to external marketing agencies.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <h2 className="text-xl font-semibold text-navy mb-4">Information Security</h2>
            <p>
              We implement standard digital security measures to safeguard your personal data. Consultation request forms are encrypted and transmitted securely over HTTPS protocols. Access to customer project sheets is restricted to authorized designers and project managers at our Calgary headquarters.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <h2 className="text-xl font-semibold text-navy mb-4">Contact Information</h2>
            <p>
              For inquiries regarding this privacy policy or your stored customer data, please connect with our office:
            </p>
            <address className="not-italic mt-2 flex flex-col gap-1 text-xs font-semibold text-navy">
              <p>Build Dream Homes Ltd.</p>
              <p>Calgary, Alberta, Canada</p>
              <p>Email: info@builddream.homes</p>
              <p>Phone: +1 (587) 500-8393</p>
            </address>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
};
export default PrivacyPolicy;
