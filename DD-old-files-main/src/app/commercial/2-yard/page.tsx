import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2 Yard Commercial Dumpster Rental | Northern Colorado',
  description: '2 yard commercial dumpster rental perfect for small businesses, offices, and restaurants in Northern Colorado. Flexible pickup schedules, competitive rates. Call 970-888-7274',
  keywords: ['2 yard dumpster', 'small commercial dumpster', 'office trash service', 'restaurant dumpster', 'Northern Colorado commercial', '2 yard commercial'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/commercial/2-yard',
  },
  openGraph: {
    title: '2 Yard Commercial Dumpster Rental | Northern Colorado | Dumpster Diverz',
    description: '2 yard commercial dumpster rental perfect for small businesses and offices. Flexible pickup schedules and competitive rates.',
    url: 'https://www.dumpsterdiverz.com/commercial/2-yard',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2 Yard Commercial Dumpster Rental | Dumpster Diverz',
    description: '2 yard commercial dumpster rental for small businesses in Northern Colorado.',
  },
};

const TwoYardPage = dynamic(() => import("@/page-components/commercial/TwoYard"));

export default function TwoYard() {
  return <TwoYardPage />;
}
