import dynamic from "next/dynamic";
import type { Metadata } from 'next';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Roll-Off Dumpster Rental | 12, 15, 20, 30 Yard Sizes | Northern Colorado',
  description: 'Rent roll-off dumpsters for construction, renovation, and cleanout projects. 12-30 yard sizes available. Serving Fort Collins, Windsor, Wellington, Greeley, Loveland, Longmont. Call 970-888-7274',
  keywords: ['roll-off dumpster rental', 'construction dumpster', '12 yard dumpster', '15 yard dumpster', '20 yard dumpster', '30 yard dumpster', 'Northern Colorado dumpster', 'Fort Collins roll-off'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/roll-off-dumpsters',
  },
  openGraph: {
    title: 'Roll-Off Dumpster Rental | 12-30 Yard Sizes | Northern Colorado | Dumpster Diverz',
    description: 'Rent roll-off dumpsters for construction, renovation, and cleanout projects. Multiple sizes available in Northern Colorado.',
    url: 'https://www.dumpsterdiverz.com/roll-off-dumpsters',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roll-Off Dumpster Rental | 12-30 Yard Sizes | Dumpster Diverz',
    description: 'Rent roll-off dumpsters for construction, renovation, and cleanout projects in Northern Colorado.',
  },
};

const RollOffServicePage = dynamic(() => import("@/page-components/RollOffService"));

export default function RollOffDumpsters() {
  const serviceSchema = generateServiceSchema({
    name: 'Roll-Off Dumpster Rental Service',
    description: 'Rent roll-off containers for construction, renovation, cleanout, and demolition projects. Available in 12, 15, 20, and 30-yard sizes. Perfect for residential and commercial projects of all sizes.',
    url: 'https://www.dumpsterdiverz.com/roll-off-dumpsters',
    serviceType: 'Roll-Off Container Rental',
    areaServed: ['Fort Collins', 'Windsor', 'Wellington', 'Greeley', 'Loveland', 'Longmont', 'Estes Park']
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.dumpsterdiverz.com' },
    { name: 'Roll-Off Dumpsters', url: 'https://www.dumpsterdiverz.com/roll-off-dumpsters' }
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
      <RollOffServicePage />
    </>
  );
}
