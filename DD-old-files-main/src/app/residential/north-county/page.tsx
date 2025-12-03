import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residential Trash Service North County CO | Weekly Pickup & Recycling',
  description: 'Weekly residential trash pickup and recycling in North County, Northern Colorado. Serving rural areas with reliable service and competitive rates. 96-gal and 64-gal carts. Call 970-888-7274',
  keywords: ['North County trash service', 'North County recycling', 'Northern Colorado waste', 'residential trash North County', 'rural trash pickup', 'North County trash'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential/north-county',
  },
  openGraph: {
    title: 'Residential Trash Service North County CO | Weekly Pickup & Recycling | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in North County, Northern Colorado. Serving rural areas with reliable service.',
    url: 'https://www.dumpsterdiverz.com/residential/north-county',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Trash Service North County CO | Dumpster Diverz',
    description: 'Weekly residential trash pickup and recycling in North County with reliable service.',
  },
};

const NorthCountyPage = dynamic(() => import("@/page-components/residential/NorthCounty"));

export default function NorthCounty() {
  return <NorthCountyPage />;
}
