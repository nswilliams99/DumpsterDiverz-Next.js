import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '20 Yard Roll-Off Dumpster Rental | Northern Colorado',
  description: '20 yard roll-off dumpster rental perfect for large remodels, roofing, and construction projects. Includes 3 tons, up to 2 weeks. Northern Colorado. Call 970-888-7274',
  keywords: ['20 yard dumpster', 'large dumpster rental', 'roofing dumpster', 'Northern Colorado roll-off', '20 yard roll-off', 'construction debris'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/rolloff-20-yard',
  },
  openGraph: {
    title: '20 Yard Roll-Off Dumpster Rental | Northern Colorado | Dumpster Diverz',
    description: '20 yard roll-off dumpster rental perfect for large remodels and roofing projects. Includes 3 tons. Serving Northern Colorado.',
    url: 'https://www.dumpsterdiverz.com/rolloff-20-yard',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '20 Yard Roll-Off Dumpster Rental | Dumpster Diverz',
    description: '20 yard roll-off dumpster rental for large remodels and roofing projects in Northern Colorado.',
  },
};

const TwentyYardPage = dynamic(() => import("@/page-components/rolloff/TwentyYard"));

export default function RolloffTwentyYard() {
  return <TwentyYardPage />;
}
