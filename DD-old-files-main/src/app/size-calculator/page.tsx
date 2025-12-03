import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dumpster Size Calculator | Find the Right Size for Your Project',
  description: 'Not sure which dumpster size you need? Use our size calculator to find the perfect roll-off dumpster for your project. Get recommendations based on your project type. Call 970-888-7274',
  keywords: ['dumpster size calculator', 'which dumpster size', 'dumpster sizing guide', 'roll-off calculator', 'Northern Colorado', 'project dumpster'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/size-calculator',
  },
  openGraph: {
    title: 'Dumpster Size Calculator | Find the Right Size | Dumpster Diverz',
    description: 'Use our size calculator to find the perfect roll-off dumpster for your project. Get recommendations based on your project type.',
    url: 'https://www.dumpsterdiverz.com/size-calculator',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Size Calculator | Dumpster Diverz',
    description: 'Find the perfect roll-off dumpster size for your project with our interactive calculator.',
  },
};

const SizeCalculatorPage = dynamic(() => import("@/page-components/SizeCalculator"));

export default function SizeCalculator() {
  return <SizeCalculatorPage />;
}
