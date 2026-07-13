import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'business.business';
  ogImage?: string;
  schemas?: Array<Record<string, any>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = '/assets/image1.png',
  schemas,
}) => {
  const siteUrl = 'https://builddream.homes';
  const fullTitle = `${title} | Build Dream Homes`;
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Core organization schema
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteUrl}/#organization`,
    'name': 'Build Dream Homes',
    'url': siteUrl,
    'logo': `${siteUrl}/assets/logo.png`,
    'image': `${siteUrl}/assets/image1.png`,
    'description': 'Thoughtful high-end luxury residential home renovations and architectural design in Calgary, Alberta.',
    'telephone': '+1-587-500-8393',
    'email': 'info@builddream.homes',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Calgary Corporate Office',
      'addressLocality': 'Calgary',
      'addressRegion': 'AB',
      'postalCode': 'T2P',
      'addressCountry': 'CA',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '51.0447',
      'longitude': '-114.0719',
    },
    'priceRange': '$$$$',
    'areaServed': [
      {
        '@type': 'AdministrativeArea',
        'name': 'Calgary',
      },
      {
        '@type': 'AdministrativeArea',
        'name': 'Calgary Metropolitan Region',
      },
    ],
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '08:00',
      'closes': '17:00',
    },
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Build Dream Homes" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Accessibility / Robots */}
      <meta name="robots" content="index, follow" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>

      {schemas && schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
