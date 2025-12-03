import type { Metadata } from 'next';
import TerryShoresPage from "@/page-components/hoa/TerryShoresAssociation";

export const metadata: Metadata = {
  title: 'Terry Shores Association HOA - Trash & Waste Services',
  description: 'Professional waste management services for Terry Shores Association HOA in Northern Colorado. Weekly trash pickup, bi-weekly recycling, seasonal grass pickup. Monday pickup - carts out the night before. Call 970-888-7274',
  keywords: ['Terry Shores Association', 'HOA trash service', 'Terry Shores HOA', 'Northern Colorado HOA', 'HOA waste management', 'residential trash pickup', 'roll-off dumpsters', 'Monday pickup', 'bi-weekly recycling', 'seasonal grass pickup'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/hoa/terry-shores-association',
  },
  openGraph: {
    title: 'Terry Shores Association HOA - Trash & Waste Services | Dumpster Diverz',
    description: 'Professional waste management services for Terry Shores Association HOA. Weekly trash pickup, bi-weekly recycling, and special roll-off pricing for residents.',
    url: 'https://www.dumpsterdiverz.com/hoa/terry-shores-association',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/home.webp',
        width: 1200,
        height: 630,
        alt: 'Terry Shores Association HOA Waste Services - Dumpster Diverz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terry Shores Association HOA - Trash & Waste Services | Dumpster Diverz',
    description: 'Professional waste management services for Terry Shores Association HOA. Monday pickup, bi-weekly recycling, special roll-off pricing.',
    images: ['/images/og/home.webp'],
  },
};

export default function TerryShoresAssociation() {
  return <TerryShoresPage />;
}
