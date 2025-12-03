import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '12 Yard Roll-Off Dumpster Rental | Northern Colorado',
  description: '12 yard roll-off dumpster rental perfect for small projects, garage cleanouts, and light demolition. Includes 2 tons, up to 2 weeks. Serving Northern Colorado. Call 970-888-7274',
  keywords: ['12 yard dumpster', 'small dumpster rental', 'garage cleanout', 'Northern Colorado roll-off', '12 yard roll-off', 'construction dumpster'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/rolloff-12-yard',
  },
  openGraph: {
    title: '12 Yard Roll-Off Dumpster Rental | Northern Colorado | Dumpster Diverz',
    description: '12 yard roll-off dumpster rental perfect for small projects and garage cleanouts. Includes 2 tons. Serving Northern Colorado.',
    url: 'https://www.dumpsterdiverz.com/rolloff-12-yard',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '12 Yard Roll-Off Dumpster Rental | Dumpster Diverz',
    description: '12 yard roll-off dumpster rental for small projects and garage cleanouts in Northern Colorado.',
  },
};

const TwelveYardPage = dynamic(() => import("@/page-components/rolloff/TwelveYard"));

export default function RolloffTwelveYard() {
  return <TwelveYardPage />;
}
