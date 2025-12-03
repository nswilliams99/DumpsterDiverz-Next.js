import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dumpster Diverz | Local Waste Company | Northern Colorado',
  description: 'Meet Dumpster Diverz, Northern Colorado\'s family-owned waste management company founded by Nicole Hicks in 2008. Serving Windsor, Fort Collins & Wellington for over 16 years with honest pricing and reliable service.',
  keywords: ['about dumpster diverz', 'local waste company', 'northern colorado trash service', 'locally owned hauler', 'windsor trash company', 'family owned business', 'colorado waste management', 'nicole hicks founder', 'since 2008'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/about',
  },
  openGraph: {
    title: 'About Dumpster Diverz | Family-Owned Since 2008 | Northern Colorado',
    description: 'Meet the family-owned waste management company serving Northern Colorado since 2008. Founded by Nicole Hicks with honest pricing and reliable service.',
    url: 'https://www.dumpsterdiverz.com/about',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og/home.webp',
        width: 1200,
        height: 630,
        alt: 'About Dumpster Diverz - Family-Owned Waste Management Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dumpster Diverz | Family-Owned Since 2008 | Northern Colorado',
    description: 'Meet the family-owned waste management company serving Northern Colorado since 2008. Founded by Nicole Hicks.',
    images: ['/images/og/home.webp'],
  },
};

const AboutPage = dynamic(() => import("@/page-components/About"));

export default function About() {
  return <AboutPage />;
}
