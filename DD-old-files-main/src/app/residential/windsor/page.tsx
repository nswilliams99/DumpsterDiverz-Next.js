import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Trash Service Windsor CO | Weekly Pickup & Recycling',
  description: 'Weekly residential trash pickup and recycling in Windsor, CO. Local family-owned company with competitive rates and reliable service. 96-gal and 64-gal carts. Call 970-888-7274',
  keywords: ['Windsor trash service', 'Windsor recycling', 'Windsor waste management', 'residential trash Windsor', 'curbside pickup Windsor', 'Windsor trash pickup'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential/windsor',
  },
  openGraph: {
    title: 'Residential Trash Service Windsor CO | Weekly Pickup & Recycling | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Windsor, CO. Local family-owned company with competitive rates.',
    url: 'https://www.dumpsterdiverz.com/residential/windsor',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Trash Service Windsor CO | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Windsor with local, reliable service.',
  },
};

const WindsorPage = dynamic(() => import("@/page-components/residential/Windsor"));

export default function Windsor() {
  return <WindsorPage />;
}
