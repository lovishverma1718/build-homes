import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { PremiumButton } from './UI/PremiumButton';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits.' })
    .regex(/^[+]?[0-9\- \(\)]+$/, { message: 'Please enter a valid phone number.' }),
  service: z.string().min(1, { message: 'Please select a service.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API request to backend/email server
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmittedData(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    console.log('Form data submitted:', data);
    reset();
  };

  const getWhatsAppCompanyUrl = () => {
    if (!submittedData) return '#';
    const serviceNameMap: Record<string, string> = {
      'kitchen-cabinets': 'Bespoke Kitchen Cabinets',
      'bathroom-renovation': 'Luxury Bathroom Renovation',
      'flooring': 'Premium Flooring Sourcing & Installation',
      'painting': 'Interior & Exterior Paint Execution',
      'landscaping': 'Luxury Outdoor Living & Landscapes',
      'whole-home': 'Complete Custom Residential Remodel',
    };
    const focusService = serviceNameMap[submittedData.service] || submittedData.service;
    
    const message = `Hi Build Dream Homes,\n\nI would like to request a home renovation consultation. Here are my project details:\n\n• *Name*: ${submittedData.name}\n• *Email*: ${submittedData.email}\n• *Phone*: ${submittedData.phone}\n• *Project Focus*: ${focusService}\n• *Description*: ${submittedData.message}`;
    return `https://wa.me/15875008393?text=${encodeURIComponent(message)}`;
  };

  const getWhatsAppClientUrl = () => {
    if (!submittedData) return '#';
    const serviceNameMap: Record<string, string> = {
      'kitchen-cabinets': 'Bespoke Kitchen Cabinets',
      'bathroom-renovation': 'Luxury Bathroom Renovation',
      'flooring': 'Premium Flooring Sourcing & Installation',
      'painting': 'Interior & Exterior Paint Execution',
      'landscaping': 'Luxury Outdoor Living & Landscapes',
      'whole-home': 'Complete Custom Residential Remodel',
    };
    const focusService = serviceNameMap[submittedData.service] || submittedData.service;
    
    const message = `Hello ${submittedData.name},\n\nThank you for requesting a renovation consultation with Build Dream Homes Calgary.\n\n*Your Project Details*:\n• *Project*: ${focusService}\n• *Status*: Under review by our design advisors\n• *Direct Office Line*: +1 (587) 500-8393\n\nWe will contact you shortly to coordinate your structural review.`;
    
    // Sanitize phone number to contain only digits and optional leading + for wa.me API
    let cleanPhone = submittedData.phone.replace(/[^0-9]/g, '');
    // If phone doesn't start with country code, default to North America (1)
    if (cleanPhone.length === 10) {
      cleanPhone = `1${cleanPhone}`;
    }
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  if (isSuccess && submittedData) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-[24px] border border-black/5 shadow-lg flex flex-col items-center text-center animate-fade-in-up">
        <div className="p-4 bg-warm-beige rounded-full text-gold mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-medium text-navy tracking-tight mb-3">
          Consultation Requested
        </h3>
        <p className="text-muted-text font-light leading-relaxed max-w-md mb-8 text-sm">
          Thank you, <strong>{submittedData.name}</strong>. Your project brief is registered. A Calgary design coordinator will review it shortly.
        </p>

        {/* WhatsApp Redirection Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">
          <a
            href={getWhatsAppCompanyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold tracking-widest text-white uppercase bg-[#25D366] hover:bg-[#20ba5a] rounded-full transition-all duration-300 shadow-sm"
          >
            Chat with Design Firm
          </a>
          <a
            href={getWhatsAppClientUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold tracking-widest text-navy uppercase border border-navy/20 hover:bg-navy hover:text-white rounded-full transition-all duration-300"
          >
            Send Receipt to My WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setSubmittedData(null);
          }}
          className="text-xs text-navy hover:text-gold uppercase tracking-wider font-semibold border-b border-navy/10 hover:border-gold/50 pb-1 transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 md:p-12 rounded-[24px] border border-black/5 shadow-lg flex flex-col gap-6"
      noValidate
    >
      <div>
        <h3 className="text-2xl font-medium text-navy tracking-tight mb-2">
          Request Consultation
        </h3>
        <p className="text-sm text-muted-text font-light">
          Fill out the details below to schedule an initial design call with our Calgary team.
        </p>
      </div>

      {/* Name Input */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-navy">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="e.g., Katherine Sterling"
          aria-invalid={errors.name ? 'true' : 'false'}
          className={`w-full px-5 py-4 border rounded-xl text-sm transition-all focus:outline-none focus:border-gold bg-soft-cream/30 ${
            errors.name ? 'border-red-500 bg-red-50/10' : 'border-black/10'
          }`}
          {...register('name')}
        />
        {errors.name && (
          <span className="text-xs text-red-500 font-light">{errors.name.message}</span>
        )}
      </div>

      {/* Email and Phone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-navy">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g., katherine@example.com"
            aria-invalid={errors.email ? 'true' : 'false'}
            className={`w-full px-5 py-4 border rounded-xl text-sm transition-all focus:outline-none focus:border-gold bg-soft-cream/30 ${
              errors.email ? 'border-red-500 bg-red-50/10' : 'border-black/10'
            }`}
            {...register('email')}
          />
          {errors.email && (
            <span className="text-xs text-red-500 font-light">{errors.email.message}</span>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-navy">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="e.g., 587-555-0199"
            aria-invalid={errors.phone ? 'true' : 'false'}
            className={`w-full px-5 py-4 border rounded-xl text-sm transition-all focus:outline-none focus:border-gold bg-soft-cream/30 ${
              errors.phone ? 'border-red-500 bg-red-50/10' : 'border-black/10'
            }`}
            {...register('phone')}
          />
          {errors.phone && (
            <span className="text-xs text-red-500 font-light">{errors.phone.message}</span>
          )}
        </div>
      </div>

      {/* Service Dropdown */}
      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-navy">
          Project Focus
        </label>
        <select
          id="service"
          aria-invalid={errors.service ? 'true' : 'false'}
          className={`w-full px-5 py-4 border rounded-xl text-sm transition-all focus:outline-none focus:border-gold bg-soft-cream/30 appearance-none ${
            errors.service ? 'border-red-500 bg-red-50/10' : 'border-black/10'
          }`}
          {...register('service')}
        >
          <option value="">Select a renovation service...</option>
          <option value="kitchen-cabinets">Bespoke Kitchen Cabinets</option>
          <option value="bathroom-renovation">Luxury Bathroom Renovation</option>
          <option value="flooring">Premium Flooring Sourcing & Installation</option>
          <option value="painting">Interior & Exterior Paint Execution</option>
          <option value="landscaping">Luxury Outdoor Living & Landscapes</option>
          <option value="whole-home">Complete Custom Residential Remodel</option>
        </select>
        {errors.service && (
          <span className="text-xs text-red-500 font-light">{errors.service.message}</span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-navy">
          Project Description
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Briefly describe your vision, home location, and design preferences..."
          aria-invalid={errors.message ? 'true' : 'false'}
          className={`w-full px-5 py-4 border rounded-xl text-sm transition-all focus:outline-none focus:border-gold bg-soft-cream/30 resize-none ${
            errors.message ? 'border-red-500 bg-red-50/10' : 'border-black/10'
          }`}
          {...register('message')}
        />
        {errors.message && (
          <span className="text-xs text-red-500 font-light">{errors.message.message}</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <PremiumButton
          type="submit"
          variant="primary"
          disabled={isSubmitting}
          className="w-full py-4 text-center justify-center flex items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Processing Request...
            </>
          ) : (
            'Request Free Consultation'
          )}
        </PremiumButton>
      </div>
    </form>
  );
};
export default ContactForm;
