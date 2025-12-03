import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Dumpster Rental Services | Residential, Commercial & Roll-Off',
  description: 'Complete dumpster rental services including residential trash pickup, commercial dumpsters, and roll-off containers in Windsor, Fort Collins, and Wellington, Colorado. Call 970-888-7274',
  keywords: ['dumpster rental services', 'residential trash pickup', 'commercial dumpster', 'roll-off containers', 'Windsor Colorado', 'Fort Collins waste management', 'Northern Colorado', 'professional waste service'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/services',
  },
  openGraph: {
    title: 'Professional Dumpster Rental Services | Residential, Commercial & Roll-Off | Dumpster Diverz',
    description: 'Complete dumpster rental services including residential trash pickup, commercial dumpsters, and roll-off containers in Northern Colorado.',
    url: 'https://www.dumpsterdiverz.com/services',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Dumpster Rental Services | Dumpster Diverz',
    description: 'Complete dumpster rental services including residential trash pickup, commercial dumpsters, and roll-off containers.',
  },
};

const ServicesPage = dynamic(() => import("@/page-components/Services"));

export default function Services() {
  return <ServicesPage />;
}
