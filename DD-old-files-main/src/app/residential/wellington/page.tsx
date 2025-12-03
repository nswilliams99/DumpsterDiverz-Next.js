import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Trash Service Wellington CO | Weekly Pickup & Recycling',
  description: 'Weekly residential trash pickup and recycling in Wellington, CO. Local family-owned service with competitive rates and reliable pickup. 96-gal and 64-gal carts. Call 970-888-7274',
  keywords: ['Wellington trash service', 'Wellington recycling', 'Wellington waste management', 'residential trash Wellington', 'curbside pickup Wellington', 'Wellington trash pickup'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential/wellington',
  },
  openGraph: {
    title: 'Residential Trash Service Wellington CO | Weekly Pickup & Recycling | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Wellington, CO. Local family-owned service with competitive rates.',
    url: 'https://www.dumpsterdiverz.com/residential/wellington',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Trash Service Wellington CO | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Wellington with local service.',
  },
};

const WellingtonPage = dynamic(() => import("@/page-components/residential/Wellington"));

export default function Wellington() {
  return <WellingtonPage />;
}
