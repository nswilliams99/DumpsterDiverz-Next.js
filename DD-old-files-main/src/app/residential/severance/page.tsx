import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Trash Service Severance CO | Weekly Pickup & Recycling',
  description: 'Weekly residential trash pickup and recycling in Severance, CO. Reliable local service with competitive rates and eco-friendly waste management. 96-gal and 64-gal carts. Call 970-888-7274',
  keywords: ['Severance trash service', 'Severance recycling', 'Severance waste management', 'residential trash Severance', 'curbside pickup Severance', 'Severance trash pickup'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential/severance',
  },
  openGraph: {
    title: 'Residential Trash Service Severance CO | Weekly Pickup & Recycling | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Severance, CO. Reliable local service with competitive rates.',
    url: 'https://www.dumpsterdiverz.com/residential/severance',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Trash Service Severance CO | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Severance with reliable service.',
  },
};

const SeverancePage = dynamic(() => import("@/page-components/residential/Severance"));

export default function Severance() {
  return <SeverancePage />;
}
