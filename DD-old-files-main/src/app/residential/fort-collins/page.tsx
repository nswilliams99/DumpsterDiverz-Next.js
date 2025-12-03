import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Trash Service Fort Collins CO | Weekly Pickup & Recycling',
  description: 'Weekly residential trash pickup and recycling in Fort Collins, CO. Reliable service, competitive rates, eco-friendly waste management. 96-gal and 64-gal carts available. Call 970-888-7274',
  keywords: ['Fort Collins trash service', 'Fort Collins recycling', 'Fort Collins waste management', 'residential trash Fort Collins', 'curbside pickup Fort Collins', 'Fort Collins trash pickup'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential/fort-collins',
  },
  openGraph: {
    title: 'Residential Trash Service Fort Collins CO | Weekly Pickup & Recycling | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Fort Collins, CO. Reliable service, competitive rates, eco-friendly waste management.',
    url: 'https://www.dumpsterdiverz.com/residential/fort-collins',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Trash Service Fort Collins CO | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in Fort Collins with reliable, eco-friendly service.',
  },
};

const FortCollinsPage = dynamic(() => import("@/page-components/residential/FortCollins"));

export default function FortCollins() {
  return <FortCollinsPage />;
}
