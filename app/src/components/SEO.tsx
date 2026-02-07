import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  schema?: object;
}

const SEO = ({ 
  title, 
  description, 
  keywords = '', 
  ogImage = '/logo.png',
  ogType = 'website',
  canonical = '',
  schema
}: SEOProps) => {
  const siteName = 'SARMAK';
  const fullTitle = `${title} | ${siteName}`;
  const defaultKeywords = 'IT services, managed IT services, AI solutions, cloud services, database management, DevOps, middleware, Power Platform, IT infrastructure, technology consulting, India';
  const allKeywords = keywords ? `${defaultKeywords}, ${keywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="SARMAK" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data / JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SARMAK',
  url: 'https://sarmak.in',
  logo: 'https://sarmak.in/logo.png',
  description: 'SARMAK provides innovative IT solutions including managed services, AI-powered IT management, cloud services, database management, DevOps, and IT training.',
  sameAs: [
    'https://linkedin.com/company/sarmak',
    'https://twitter.com/sarmak',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-99999-99999',
    contactType: 'customer service',
    email: 'info@sarmak.in',
    availableLanguage: ['English', 'Hindi']
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India'
  }
});

export const generateServiceSchema = (serviceName: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'SARMAK',
    url: 'https://sarmak.in'
  },
  url: url,
  areaServed: {
    '@type': 'Country',
    name: 'India'
  }
});

export default SEO;
