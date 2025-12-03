import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '30 Yard Roll-Off Dumpster Rental | Northern Colorado',
  description: '30 yard roll-off dumpster rental for major construction, demolition, and large estate cleanouts. Includes 4 tons, up to 2 weeks. Northern Colorado. Call 970-888-7274',
  keywords: ['30 yard dumpster', 'large construction dumpster', 'demolition dumpster', 'Northern Colorado roll-off', '30 yard roll-off', 'estate cleanout'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/rolloff-30-yard',
  },
  openGraph: {
    title: '30 Yard Roll-Off Dumpster Rental | Northern Colorado | Dumpster Diverz',
    description: '30 yard roll-off dumpster rental for major construction and demolition projects. Includes 4 tons. Serving Northern Colorado.',
    url: 'https://www.dumpsterdiverz.com/rolloff-30-yard',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '30 Yard Roll-Off Dumpster Rental | Dumpster Diverz',
    description: '30 yard roll-off dumpster rental for major construction and demolition in Northern Colorado.',
  },
};

const ThirtyYardPage = dynamic(() => import("@/page-components/rolloff/ThirtyYard"));

export default function RolloffThirtyYard() {
  return <ThirtyYardPage />;
}
