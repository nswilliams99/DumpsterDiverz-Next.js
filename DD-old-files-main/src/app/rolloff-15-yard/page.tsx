import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '15 Yard Roll-Off Dumpster Rental | Northern Colorado',
  description: '15 yard roll-off dumpster rental ideal for medium-sized remodels, flooring removal, and cleanouts. Includes 2.5 tons, up to 2 weeks. Northern Colorado. Call 970-888-7274',
  keywords: ['15 yard dumpster', 'medium dumpster rental', 'remodel dumpster', 'Northern Colorado roll-off', '15 yard roll-off', 'renovation dumpster'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/rolloff-15-yard',
  },
  openGraph: {
    title: '15 Yard Roll-Off Dumpster Rental | Northern Colorado | Dumpster Diverz',
    description: '15 yard roll-off dumpster rental ideal for medium-sized remodels and cleanouts. Includes 2.5 tons. Serving Northern Colorado.',
    url: 'https://www.dumpsterdiverz.com/rolloff-15-yard',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '15 Yard Roll-Off Dumpster Rental | Dumpster Diverz',
    description: '15 yard roll-off dumpster rental for medium-sized remodels in Northern Colorado.',
  },
};

const FifteenYardPage = dynamic(() => import("@/page-components/rolloff/FifteenYard"));

export default function RolloffFifteenYard() {
  return <FifteenYardPage />;
}
