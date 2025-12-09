import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trash Service Windsor CO | Weekly Trash Pickup & Garbage Collection',
  description: 'Windsor CO trash service starting at $29/month. Weekly trash pickup, recycling, and garbage collection for Windsor homes. Local drivers, no contracts. Call 970-888-7274.',
  keywords: ['trash service windsor co', 'windsor trash pickup', 'windsor trash service', 'windsor garbage collection', 'windsor co trash pickup', 'residential trash windsor', 'windsor waste management', 'dumpster rental windsor co'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/residential/windsor',
  },
  openGraph: {
    title: 'Trash Service Windsor CO | Weekly Trash Pickup & Garbage Collection',
    description: 'Windsor CO trash service starting at $29/month. Weekly trash pickup and garbage collection for homes. No contracts required.',
    url: 'https://www.dumpsterdiverz.com/residential/windsor',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trash Service Windsor CO | Dumpster Diverz',
    description: 'Windsor CO trash service and garbage collection. Weekly pickup, local drivers, no contracts. Starting at $29/month.',
  },
};

const WindsorPage = dynamic(() => import("@/page-components/residential/Windsor"));

export default function Windsor() {
  return <WindsorPage />;
}
