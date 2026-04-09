export const LocalBusinessSchema = (config = {}) => {
  const defaultConfig = {
    name: 'Flyttdirekt',
    description: 'Professionell flyttfirma för alla typer av flytt i Stockholm och Sverige',
    url: 'https://www.flyttdirekt.se',
    telephone: '+46XXXXXXXXX', // Update with actual number
    email: 'info@flyttdirekt.se', // Update with actual email
    address: {
      street: '', // Update with actual address
      locality: 'Stockholm',
      postalCode: '', // Update with actual zip
      country: 'SE',
    },
    image: 'https://www.flyttdirekt.se/logo.png',
    sameAs: [
      'https://www.facebook.com/flyttdirekt',
      'https://www.instagram.com/flyttdirekt',
      // Add other social media URLs
    ],
  };

  const finalConfig = { ...defaultConfig, ...config };

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: finalConfig.name,
    image: finalConfig.image,
    description: finalConfig.description,
    url: finalConfig.url,
    telephone: finalConfig.telephone,
    email: finalConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: finalConfig.address.street,
      addressLocality: finalConfig.address.locality,
      postalCode: finalConfig.address.postalCode,
      addressCountry: finalConfig.address.country,
    },
    sameAs: finalConfig.sameAs,
  };
};

export const ServiceSchema = (serviceName, description, config = {}) => {
  const defaultConfig = {
    areaServed: 'Stockholm, Sweden',
    price: 'Kontakta för offert',
    priceCurrency: 'SEK',
  };

  const finalConfig = { ...defaultConfig, ...config };

  return {
    '@context': 'https://schema.org/',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Flyttdirekt',
      url: 'https://www.flyttdirekt.se',
    },
    areaServed: finalConfig.areaServed,
    serviceType: serviceName,
    offers: {
      '@type': 'Offer',
      priceCurrency: finalConfig.priceCurrency,
      price: finalConfig.price,
    },
  };
};

export const BreadcrumbSchema = (items) => {
  const breadcrumbList = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbList,
  };
};

export const OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Flyttdirekt',
  url: 'https://www.flyttdirekt.se',
  logo: 'https://www.flyttdirekt.se/logo.png',
  description: 'Professionell flyttfirma för alla typer av flytt',
  sameAs: [
    'https://www.facebook.com/flyttdirekt',
    'https://www.instagram.com/flyttdirekt',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+46XXXXXXXXX', // Update with actual number
    contactType: 'Customer Service',
  },
};

export const FAQSchema = (faqs) => {
  const mainEntity = faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity,
  };
};
