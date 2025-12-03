import dynamic from "next/dynamic";
import type { Metadata } from 'next';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Residential Trash Pickup & Recycling Services | Northern Colorado',
  description: 'Weekly residential trash pickup and recycling in Windsor, Fort Collins, Wellington, Greeley, and Severance. 96-gal and 64-gal carts available. Eco-friendly service. Call 970-888-7274',
  keywords: ['residential trash pickup', 'curbside recycling', 'Northern Colorado', 'Windsor trash service', 'Fort Collins waste', 'weekly trash collection', 'home trash service', 'eco-friendly recycling'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential',
  },
  openGraph: {
    title: 'Residential Trash Pickup & Recycling Services | Northern Colorado | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Windsor, Fort Collins, Wellington, Greeley, and Severance. Eco-friendly local service.',
    url: 'https://www.dumpsterdiverz.com/residential',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Trash Pickup & Recycling Services | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Northern Colorado. Eco-friendly local service.',
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
