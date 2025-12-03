import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Trash Service Greeley CO | Weekly Pickup & Recycling',
  description: 'Weekly residential trash pickup and recycling in Greeley, CO. Reliable local service with competitive rates and eco-friendly waste management. 96-gal and 64-gal carts. Call 970-888-7274',
  keywords: ['Greeley trash service', 'Greeley recycling', 'Greeley waste management', 'residential trash Greeley', 'curbside pickup Greeley', 'Greeley trash pickup'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential/greeley',
  },
  openGraph: {
    title: 'Residential Trash Service Greeley CO | Weekly Pickup & Recycling | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Greeley, CO. Reliable local service with competitive rates.',
    url: 'https://www.dumpsterdiverz.com/residential/greeley',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Trash Service Greeley CO | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Greeley with reliable service.',
  },
};

const GreeleyPage = dynamic(() => import("@/page-components/residential/Greeley"));

export default function Greeley() {
  return <GreeleyPage />;
}
