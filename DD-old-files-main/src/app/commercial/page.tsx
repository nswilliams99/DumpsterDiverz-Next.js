import dynamic from "next/dynamic";
import type { Metadata } from 'next';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Commercial Dumpster Service | 2-3 Yard Sizes | Northern Colorado',
  description: 'Commercial dumpster rental for businesses in Windsor, Fort Collins & Wellington. 2-3 yard containers, flexible pickup schedules. Professional service for restaurants, offices, retail. Call 970-888-7274',
  keywords: ['commercial dumpster rental', 'business waste pickup', 'office trash collection', '2 yard dumpster', '3 yard dumpster', 'Fort Collins commercial trash', 'Northern Colorado business waste'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/commercial',
  },
  openGraph: {
    title: 'Commercial Dumpster Service | Northern Colorado | Dumpster Diverz',
    description: 'Professional commercial dumpster service for businesses. All sizes available with flexible pickup schedules. Serving Northern Colorado since 2008.',
    url: 'https://www.dumpsterdiverz.com/commercial',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Dumpster Service | Northern Colorado | Dumpster Diverz',
    description: 'Professional commercial dumpster service for businesses with flexible pickup schedules.',
  },
};

const CommercialServicePage = dynamic(() => import("@/page-components/CommercialService"));

export default function Commercial() {
  const serviceSchema = generateServiceSchema({
    name: 'Commercial Dumpster Rental Service',
    description: 'Professional commercial waste management services for businesses. We provide 2-yard and 3-yard dumpsters with flexible pickup schedules for restaurants, offices, retail stores, and other businesses.',
    url: 'https://www.dumpsterdiverz.com/commercial',
    serviceType: 'Commercial Waste Management',
    areaServed: ['Windsor', 'Fort Collins', 'Wellington', 'Greeley']
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.dumpsterdiverz.com' },
    { name: 'Commercial Services', url: 'https://www.dumpsterdiverz.com/commercial' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CommercialServicePage />
    </>
  );
}
