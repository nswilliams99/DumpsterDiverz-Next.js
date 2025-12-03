import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eagle Lake Association HOA - Trash & Waste Services',
  description: 'Professional waste management services for Eagle Lake Association HOA in Northern Colorado. Weekly trash pickup, recycling, roll-off specials. Thursday pickup - carts out the night before. Call 970-888-7274',
  keywords: ['Eagle Lake Association', 'HOA trash service', 'Eagle Lake HOA', 'Northern Colorado HOA', 'HOA waste management', 'residential trash pickup', 'roll-off dumpsters', 'Thursday pickup'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/hoa/eagle-lake-association',
  },
  openGraph: {
    title: 'Eagle Lake Association HOA - Trash & Waste Services | Dumpster Diverz',
    description: 'Professional waste management services for Eagle Lake Association HOA. Weekly trash pickup, recycling, and special roll-off pricing for residents.',
    url: 'https://www.dumpsterdiverz.com/hoa/eagle-lake-association',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/home.webp',
        width: 1200,
        height: 630,
        alt: 'Eagle Lake Association HOA Waste Services - Dumpster Diverz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle Lake Association HOA - Trash & Waste Services | Dumpster Diverz',
    description: 'Professional waste management services for Eagle Lake Association HOA. Thursday pickup, special roll-off pricing.',
    images: ['/images/og/home.webp'],
  },
};

const EagleLakePage = dynamic(() => import("@/page-components/hoa/EagleLakeAssociation"));

export default function EagleLakeAssociation() {
  return <EagleLakePage />;
}
