import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Quote',
  description: 'Contact Dumpster Diverz for residential, commercial, or roll-off dumpster services in Northern Colorado. Call 970-888-7274 or email dumpsterdiverz@gmail.com. Serving Windsor, Fort Collins, Wellington, and Greeley.',
  keywords: ['contact dumpster diverz', 'waste management quote', 'Northern Colorado trash service', 'dumpster rental quote', 'Fort Collins contact', 'Windsor trash service'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Get a Free Quote | Dumpster Diverz',
    description: 'Contact Dumpster Diverz for waste management services in Northern Colorado. Call 970-888-7274 for residential, commercial, or roll-off dumpsters.',
    url: 'https://www.dumpsterdiverz.com/contact',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Get a Free Quote | Dumpster Diverz',
    description: 'Contact Dumpster Diverz for waste management services in Northern Colorado. Call 970-888-7274.',
  },
};

const ContactPage = dynamic(() => import("@/page-components/Contact"));

export default function Contact() {
  return <ContactPage />;
}
