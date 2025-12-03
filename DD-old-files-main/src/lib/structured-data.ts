import { Thing, WithContext } from 'schema-dts';

/**
 * Generates LocalBusiness schema for the homepage
 * This helps Google understand business information for local search
 */
export function generateLocalBusinessSchema(): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.dumpsterdiverz.com/#organization',
    name: 'Dumpster Diverz',
    alternateName: 'Dumpster Diverz Waste Management',
    description: 'Professional waste management services including residential trash pickup, commercial dumpsters, and roll-off container rentals serving Northern Colorado since 2008.',
    url: 'https://www.dumpsterdiverz.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.dumpsterdiverz.com/logo.png',
      width: '250',
      height: '60'
    },
    image: 'https://www.dumpsterdiverz.com/logo.png',
    telephone: '+1-970-888-7274',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '14700 N County Road 7',
      addressLocality: 'Wellington',
      addressRegion: 'CO',
      postalCode: '80549',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7016,
      longitude: -105.0086
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Windsor',
        '@id': 'https://www.dumpsterdiverz.com/residential/windsor'
      },
      {
        '@type': 'City',
        name: 'Fort Collins',
        '@id': 'https://www.dumpsterdiverz.com/residential/fort-collins'
      },
      {
        '@type': 'City',
        name: 'Wellington',
        '@id': 'https://www.dumpsterdiverz.com/residential/wellington'
      },
      {
        '@type': 'City',
        name: 'Greeley',
        '@id': 'https://www.dumpsterdiverz.com/residential/greeley'
      },
      {
        '@type': 'City',
        name: 'Severance',
        '@id': 'https://www.dumpsterdiverz.com/residential/severance'
      }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/dumpsterdiverz',
      'https://www.instagram.com/dumpsterdiverz'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Waste Management Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Trash Pickup',
            description: 'Weekly curbside trash and recycling pickup for homes',
            serviceType: 'Residential Waste Collection'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Dumpster Rental',
            description: '2-yard and 3-yard dumpster rentals for businesses',
            serviceType: 'Commercial Waste Management'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roll-Off Container Rental',
            description: '12, 15, 20, and 30-yard roll-off dumpsters for projects',
            serviceType: 'Roll-Off Dumpster Rental'
          }
        }
      ]
    }
  };
}

/**
 * Generates Organization schema with social profiles
 */
export function generateOrganizationSchema(): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.dumpsterdiverz.com/#organization',
    name: 'Dumpster Diverz',
    url: 'https://www.dumpsterdiverz.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.dumpsterdiverz.com/logo.png'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-970-888-7274',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.facebook.com/dumpsterdiverz',
      'https://www.instagram.com/dumpsterdiverz'
    ]
  };
}

/**
 * Service area city data with URLs for proper linking
 */
const SERVICE_CITIES = {
  Windsor: 'https://www.dumpsterdiverz.com/residential/windsor',
  'Fort Collins': 'https://www.dumpsterdiverz.com/residential/fort-collins',
  Wellington: 'https://www.dumpsterdiverz.com/residential/wellington',
  Greeley: 'https://www.dumpsterdiverz.com/residential/greeley',
  Severance: 'https://www.dumpsterdiverz.com/residential/severance',
  Loveland: 'https://www.dumpsterdiverz.com/residential/north-county',
  Longmont: 'https://www.dumpsterdiverz.com/residential/north-county',
  'Estes Park': 'https://www.dumpsterdiverz.com/residential/north-county'
};

/**
 * Generates Service schema for a specific service
 */
export function generateServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
}): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: params.url,
    serviceType: params.serviceType,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.dumpsterdiverz.com/#organization',
      name: 'Dumpster Diverz',
      telephone: '+1-970-888-7274',
      url: 'https://www.dumpsterdiverz.com'
    },
    areaServed: params.areaServed?.map(city => ({
      '@type': 'City',
      name: city,
      '@id': SERVICE_CITIES[city as keyof typeof SERVICE_CITIES] || undefined
    }))
  };
}

/**
 * Generates BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): WithContext<Thing> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

