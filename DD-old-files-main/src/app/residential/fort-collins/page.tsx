import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trash Service Fort Collins CO | Weekly Trash Collection & Garbage Pickup',
  description: 'Fort Collins trash service starting at $29/month. Weekly trash collection, recycling, and garbage pickup for Fort Collins homes. No contracts, local drivers. Call 970-888-7274.',
  keywords: ['trash service fort collins', 'trash collection fort collins', 'fort collins garbage service', 'fort collins trash pickup', 'fort collins garbage pickup', 'residential trash fort collins', 'fort collins waste management', 'trash service fort collins co'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential/fort-collins',
  },
  openGraph: {
    title: 'Trash Service Fort Collins CO | Weekly Trash Collection & Garbage Pickup',
    description: 'Fort Collins trash service starting at $29/month. Weekly trash collection and garbage pickup for homes. No contracts required.',
    url: 'https://www.dumpsterdiverz.com/residential/fort-collins',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trash Service Fort Collins CO | Dumpster Diverz',
    description: 'Fort Collins trash service and garbage collection. Weekly pickup, local drivers, no contracts. Starting at $29/month.',
  },
};

const FortCollinsPage = dynamic(() => import("@/page-components/residential/FortCollins"));

export default function FortCollins() {
  return <FortCollinsPage />;
}
