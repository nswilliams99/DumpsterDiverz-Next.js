import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOA Quote Request | Get Custom Pricing for Your Community',
  description: 'Request a customized quote for HOA waste management services. Competitive pricing, reliable service, and community-focused solutions for homeowners associations in Northern Colorado.',
  keywords: ['HOA quote', 'HOA pricing', 'homeowners association quote', 'HOA trash quote', 'community waste services', 'Northern Colorado HOA'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/hoa-quote',
  },
  openGraph: {
    title: 'HOA Quote Request | Get Custom Pricing | Dumpster Diverz',
    description: 'Request a customized quote for HOA waste management services. Competitive pricing and reliable service for homeowners associations.',
    url: 'https://www.dumpsterdiverz.com/hoa-quote',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOA Quote Request | Get Custom Pricing | Dumpster Diverz',
    description: 'Request a customized quote for HOA waste management services in Northern Colorado.',
  },
};

const HOAQuotePage = dynamic(() => import("@/page-components/HOAQuote"));

export default function HOAQuote() {
  return <HOAQuotePage />;
}
