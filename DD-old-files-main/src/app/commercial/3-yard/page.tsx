import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3 Yard Commercial Dumpster Rental | Northern Colorado',
  description: '3 yard commercial dumpster rental ideal for medium-sized businesses, retail stores, and restaurants in Northern Colorado. Reliable service, flexible schedules. Call 970-888-7274',
  keywords: ['3 yard dumpster', 'medium commercial dumpster', 'retail trash service', 'business dumpster', 'Northern Colorado commercial', '3 yard commercial'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/commercial/3-yard',
  },
  openGraph: {
    title: '3 Yard Commercial Dumpster Rental | Northern Colorado | Dumpster Diverz',
    description: '3 yard commercial dumpster rental ideal for medium-sized businesses and retail stores. Reliable service and flexible schedules.',
    url: 'https://www.dumpsterdiverz.com/commercial/3-yard',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Yard Commercial Dumpster Rental | Dumpster Diverz',
    description: '3 yard commercial dumpster rental for medium-sized businesses in Northern Colorado.',
  },
};

const ThreeYardPage = dynamic(() => import("@/page-components/commercial/ThreeYard"));

export default function ThreeYard() {
  return <ThreeYardPage />;
}
