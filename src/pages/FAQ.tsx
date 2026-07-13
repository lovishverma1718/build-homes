import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CustomAccordion } from '../components/CustomAccordion';
import { PremiumButton } from '../components/UI/PremiumButton';
import { PageTransition } from '../components/PageTransition';

interface FAQItem {
  id: string;
  category: 'planning' | 'millwork' | 'materials' | 'timeline';
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqList: FAQItem[] = [
    {
      id: 'f1',
      category: 'timeline',
      question: 'How long does a luxury home renovation typically take?',
      answer: 'Project timelines depend heavily on scope. A custom kitchen cabinet and layout remodel generally spans 6 to 10 weeks, whereas a comprehensive whole-home structural renovation may take 4 to 8 months. During the planning phase, we provide a detailed, binding schedule so you know exactly what to expect at every phase.',
    },
    {
      id: 'f2',
      category: 'planning',
      question: 'Do you provide detailed project estimates before construction starts?',
      answer: 'Yes. We practice complete financial transparency. Following our initial consultation and planning phase, we provide a comprehensive architectural-grade estimate outlining all materials, craftsmanship hours, sub-trades, and municipal permits. We work with fixed-price agreements to ensure there are no unexpected costs.',
    },
    {
      id: 'f3',
      category: 'planning',
      question: 'Do you serve all areas of Calgary and surrounding municipalities?',
      answer: 'Yes, we specialize in luxury renovations throughout Calgary, including Mount Royal, Britannia, Altadore, Aspen Woods, Springbank, and surrounding communities. Our team is fully licensed for residential construction within the City of Calgary and rural districts.',
    },
    {
      id: 'f4',
      category: 'planning',
      question: 'Can I renovate just one room, or do you only execute whole-home projects?',
      answer: 'We specialize in targeted luxury upgrades as well as whole-home transformations. Whether you wish to build custom cabinets for your kitchen, execute a luxury bathroom renovation, or carry out a complete interior paint finish, we apply the same high architectural standards and meticulous precision to every project.',
    },
    {
      id: 'f5',
      category: 'millwork',
      question: 'Do you design and build your custom cabinets locally?',
      answer: 'Every custom cabinet is designed in-house and built in Calgary using high-grade sustainable materials, premium structural hardware, and architectural finishes. This gives us complete control over quality and allows us to accommodate bespoke layouts that standard factory cabinets cannot fit.',
    },
    {
      id: 'f6',
      category: 'materials',
      question: 'What premium flooring options do you install?',
      answer: 'We source and install custom wide-plank engineered hardwood, solid natural hardwood, premium Italian porcelain tile, natural stone (marble, travertine), and wool carpeting. Our flooring installations include extensive subfloor preparation to ensure a lifetime of structural stability.',
    },
    {
      id: 'f7',
      category: 'planning',
      question: 'How much does a luxury bathroom renovation cost in Calgary?',
      answer: 'Luxury bathroom renovations generally range from $35,000 to over $90,000, depending on structural reconfiguring, custom stone tile selections, steam shower installations, and premium plumbing fixtures. We design each project to maximize both architectural aesthetic and functional luxury.',
    },
    {
      id: 'f8',
      category: 'planning',
      question: 'How do I get started with Build Dream Homes?',
      answer: 'Getting started is simple. You can schedule an initial consultation through our website form, or call our Calgary office. We start with a brief design call to discuss your ideas, budget expectations, and timeline, followed by an on-site structural evaluation and planning phase.',
    },
    {
      id: 'f9',
      category: 'materials',
      question: 'Do you use eco-friendly or low-emission paints and finishes?',
      answer: 'Yes. We protect your home environment by sourcing zero-VOC or low-VOC interior paints (e.g. Benjamin Moore Aura) and water-borne lacquers. These materials have virtually no odor, allowing you to return to your home comfortably and safely.',
    },
    {
      id: 'f10',
      category: 'timeline',
      question: 'Are there ever delays in your home renovation schedules?',
      answer: 'We minimize schedule changes through critical-path planning, locking in material shipments and trades weeks in advance. While severe weather or hidden structural damage can occasionally affect external works, we log trade tasks daily to resolve potential delays instantly.',
    },
    {
      id: 'f11',
      category: 'planning',
      question: 'Are you licensed, insured, and registered with WCB Alberta?',
      answer: 'Yes. Build Dream Homes carries a City of Calgary business license, has WCB Alberta coverage for all builders, and holds $5,000,000 in comprehensive commercial liability insurance. We provide documentation for these credentials before any project begins.',
    },
    {
      id: 'f12',
      category: 'millwork',
      question: 'Can you match custom cabinets to my existing home trim and doors?',
      answer: 'Our custom woodwork shop matches existing styles exactly. We match wood grains (walnut, oak, fir), trim details, and lacquer colors, creating a cohesive design that fits your home perfectly.',
    },
  ];

  // Categories map
  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'planning', label: 'Planning & Budgets' },
    { value: 'millwork', label: 'Custom Millwork' },
    { value: 'materials', label: 'Material Sourcing' },
    { value: 'timeline', label: 'Project Timelines' },
  ];

  // Filter and search logic
  const filteredFAQs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesQuery =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <PageTransition>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about Build Dream Homes luxury renovations in Calgary, including estimates, licensing, cabinetry, and schedules."
        canonicalUrl="/faq"
      />

      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-16 bg-light-gray border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          <Breadcrumbs />
          <div className="max-w-3xl mt-8">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Resources
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-light text-navy tracking-tight leading-tight mb-6">
                Frequently Answered <em className="font-serif italic text-gold font-normal">Questions</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                Explore our detailed FAQs to learn more about budgets, schedules, and build standards. If you have an unlisted question, connect with our Calgary team.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & FAQ ACCORDION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[960px] mx-auto px-6">
          
          {/* Search Bar */}
          <Reveal direction="up" className="mb-12">
            <div className="relative w-full max-w-xl mx-auto">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-stone-gray pointer-events-none">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search FAQs by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border border-black/10 rounded-full text-sm focus:outline-none focus:border-gold bg-soft-cream/30 transition-all shadow-inner"
              />
            </div>
          </Reveal>

          {/* Category Tabs */}
          <Reveal direction="up" delay={0.1} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.value
                      ? 'bg-navy text-white'
                      : 'bg-light-gray text-navy hover:bg-warm-beige'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* FAQ Accordion Results */}
          <div className="text-left min-h-[300px]">
            {filteredFAQs.length > 0 ? (
              <Reveal direction="up" delay={0.2}>
                <CustomAccordion items={filteredFAQs} />
              </Reveal>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-text font-light text-base mb-2">No answers match your query.</p>
                <p className="text-xs text-stone-gray font-light">Try searching for generic terms like "estimate", "cabinet", or "permit".</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section className="py-24 bg-soft-cream border-t border-black/5 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal direction="up">
            <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
              Still Have Questions?
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-light text-navy tracking-tight mb-6">
              Connect With Our Calgary Advisors
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-xs text-muted-text leading-relaxed max-w-md mx-auto mb-8 font-light">
              We discuss custom layout queries and budget planning during our design calls. Let us resolve your renovation questions.
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
export default FAQ;
