import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  // Map path segments to user-friendly titles
  const routeNameMap: Record<string, string> = {
    services: 'Services',
    flooring: 'Flooring',
    painting: 'Painting',
    'kitchen-cabinets': 'Kitchen Cabinets',
    'bathroom-renovation': 'Bathroom Renovation',
    landscaping: 'Landscaping',
    process: 'Our Process',
    faq: 'FAQ',
    contact: 'Contact Us',
    'privacy-policy': 'Privacy Policy',
    'terms-conditions': 'Terms & Conditions',
  };

  return (
    <nav className="flex items-center gap-2 py-4 text-xs tracking-wider uppercase text-stone-gray font-medium" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-gold transition-colors duration-200">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const displayName = routeNameMap[value] || value.replace(/-/g, ' ');

        return (
          <React.Fragment key={to}>
            <ChevronRight size={10} className="text-stone-gray/50" />
            {last ? (
              <span className="text-gold" aria-current="page">
                {displayName}
              </span>
            ) : (
              <Link to={to} className="hover:text-gold transition-colors duration-200">
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
