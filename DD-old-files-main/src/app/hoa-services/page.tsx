import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOA Waste Management Services | Homeowners Association Trash Solutions',
  description: 'Specialized waste management services for HOAs in Northern Colorado. Customized pricing, community-focused service, and reliable trash pickup for homeowners associations. Call 970-888-7274',
  keywords: ['HOA trash service', 'homeowners association waste', 'HOA dumpster service', 'Northern Colorado HOA', 'community trash pickup', 'HOA waste management'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/hoa-services',
  },
  openGraph: {
    title: 'HOA Waste Management Services | Homeowners Association Trash Solutions | Dumpster Diverz',
    description: 'Specialized waste management services for HOAs in Northern Colorado. Customized pricing and community-focused service.',
    url: 'https://www.dumpsterdiverz.com/hoa-services',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOA Waste Management Services | Dumpster Diverz',
    description: 'Specialized waste management services for HOAs in Northern Colorado with customized pricing.',
  },
};

const HOAServicesPage = dynamic(() => import("@/page-components/HOAServices"));

export default function HOAServices() {
  return <HOAServicesPage />;
}
