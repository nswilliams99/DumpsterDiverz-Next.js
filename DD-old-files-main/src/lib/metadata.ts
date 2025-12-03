import { Metadata } from 'next';

export interface PageMetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  locale?: string;
}

const SITE_NAME = 'Dumpster Diverz';
const SITE_URL = 'https://www.dumpsterdiverz.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/home.webp`;
const TWITTER_HANDLE = '@DumpsterDiverz';

export function generateMetadata(config: PageMetadataConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    noIndex = false,
    locale = 'en_US',
  } = config;

  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical || SITE_URL;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    
    // Robots meta tags
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
      },
    },
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Professional Waste Management in Northern Colorado`,
        },
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [ogImage],
    },
    
    // Additional meta tags
    other: {
      'application-name': SITE_NAME,
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': SITE_NAME,
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
      'msapplication-TileColor': '#d94085',
      'msapplication-tap-highlight': 'no',
      'theme-color': '#ffffff',
    },
  };
}

// Geographic metadata helper
export function addGeographicMetadata(city: string, state: string = 'CO'): Record<string, string> {
  return {
    'geo.region': `US-${state}`,
    'geo.placename': city,
  };
}

// Structured data helper for JSON-LD
export function generateStructuredData(data: any): string {
  return JSON.stringify(data);
}
