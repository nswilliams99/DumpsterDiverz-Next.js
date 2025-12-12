import dynamic from "next/dynamic";
import type { Metadata } from 'next';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Residential Trash Pickup & Waste Collection | Northern Colorado',
  description: 'Weekly residential trash pickup, garbage collection, and curbside waste services in Windsor, Fort Collins, Wellington, Greeley, and Severance. 96-gal and 64-gal carts available. Call 970-888-7274',
  keywords: ['residential trash pickup', 'residential garbage pickup', 'residential waste pickup', 'residential trash collection', 'residential waste collection', 'residential garbage collection', 'curbside recycling', 'Northern Colorado', 'Windsor trash service', 'Fort Collins waste', 'weekly trash collection', 'home trash service'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential',
  },
  openGraph: {
    title: 'Residential Trash Pickup & Waste Collection | Northern Colorado | Dumpster Diverz',
    description: 'Weekly residential trash pickup, garbage collection, and curbside waste services in Windsor, Fort Collins, Wellington, Greeley, and Severance.',
    url: 'https://www.dumpsterdiverz.com/residential',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Trash Pickup & Waste Collection | Dumpster Diverz',
    description: 'Weekly residential trash pickup, garbage collection, and waste services in Northern Colorado.',
  },
};

const ResidentialServicePage = dynamic(() => import("@/page-components/ResidentialService"));

export default function Residential() {
  const serviceSchema = generateServiceSchema({
    name: 'Residential Trash Pickup Service',
    description: 'Weekly curbside trash and recycling pickup for homes in Northern Colorado. We provide 96-gallon and 64-gallon carts with matching recycling containers.',
    url: 'https://www.dumpsterdiverz.com/residential',
    serviceType: 'Residential Waste Collection',
    areaServed: ['Windsor', 'Fort Collins', 'Wellington', 'Greeley', 'Severance']
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.dumpsterdiverz.com' },
    { name: 'Residential Services', url: 'https://www.dumpsterdiverz.com/residential' }
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
      <ResidentialServicePage />
    </>
  );
}
