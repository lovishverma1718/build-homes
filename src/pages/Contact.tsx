import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Reveal } from '../components/Reveal';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { PageTransition } from '../components/PageTransition';

export const Contact: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Book a Free Consultation"
        description="Connect with Build Dream Homes in Calgary. Fill out our consultation request form, email us, or call our office."
        canonicalUrl="/contact"
      />

      {/* 1. HERO HEADER */}
      <section className="relative pt-32 pb-16 bg-light-gray border-b border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-left">
          <Breadcrumbs />
          <div className="max-w-3xl mt-8">
            <Reveal direction="up">
              <span className="text-xs uppercase font-bold tracking-widest text-gold mb-3 block">
                Connect
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-light text-navy tracking-tight leading-tight mb-6">
                Start Your Home Renovation <em className="font-serif italic text-gold font-normal">Journey</em>.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-muted-text font-light leading-relaxed text-base md:text-lg max-w-2xl">
                We are ready to design and construct your custom space. Connect with our Calgary office to schedule an initial design review and planning call.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT FOR DETAILS & FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Image & Details */}
            <div className="lg:col-span-5 text-left">
              <Reveal direction="up">
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] shadow-md border border-black/5 mb-10">
                  <img
                    src="/assets/image14.png"
                    alt="Build Dream Homes office lounge space in Calgary"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>

              <div className="flex flex-col gap-8">
                {/* Location */}
                <Reveal direction="up" delay={0.1} className="flex gap-4">
                  <div className="p-3 bg-warm-beige rounded-xl text-gold mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-1">Corporate Location</h3>
                    <p className="text-sm text-muted-text font-light">Calgary, Alberta, Canada</p>
                    <p className="text-xs text-stone-gray font-light mt-1">Serving Calgary, Aspen Woods, Springbank, Altadore, and surrounding areas.</p>
                  </div>
                </Reveal>

                {/* Telephone */}
                <Reveal direction="up" delay={0.2} className="flex gap-4">
                  <div className="p-3 bg-warm-beige rounded-xl text-gold mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-1">Contact Numbers</h3>
                    <p className="text-sm text-muted-text font-light hover:text-gold transition-colors duration-200">
                      <a href="tel:+15875008393">Calgary Office: +1 (587) 500-8393</a>
                    </p>
                    <p className="text-sm text-muted-text font-light hover:text-gold transition-colors duration-200 mt-1">
                      <a href="tel:+15878908393">Direct Inquiries: +1 (587) 890-8393</a>
                    </p>
                  </div>
                </Reveal>

                {/* Email */}
                <Reveal direction="up" delay={0.3} className="flex gap-4">
                  <div className="p-3 bg-warm-beige rounded-xl text-gold mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-1">Electronic Inquiries</h3>
                    <p className="text-sm text-muted-text font-light hover:text-gold transition-colors duration-200">
                      <a href="mailto:info@builddream.homes">info@builddream.homes</a>
                    </p>
                  </div>
                </Reveal>

                {/* Hours */}
                <Reveal direction="up" delay={0.4} className="flex gap-4">
                  <div className="p-3 bg-warm-beige rounded-xl text-gold mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-navy mb-1">Office Hours</h3>
                    <p className="text-xs text-muted-text font-light">Monday to Friday: 8:00 AM – 5:00 PM</p>
                    <p className="text-xs text-stone-gray font-light mt-0.5">Closed Saturdays, Sundays, and public holidays.</p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal direction="up" delay={0.2}>
                <ContactForm />
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};
export default Contact;
