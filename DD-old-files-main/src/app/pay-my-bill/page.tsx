import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pay My Bill | Online Bill Payment',
  description: 'Pay your Dumpster Diverz bill online securely through TrashBilling.com. Fast, easy, and secure payment processing for your waste management services.',
  keywords: ['pay bill', 'online payment', 'bill payment', 'trash bill', 'waste management payment'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/pay-my-bill',
  },
  openGraph: {
    title: 'Pay My Bill | Online Bill Payment | Dumpster Diverz',
    description: 'Pay your Dumpster Diverz bill online securely through TrashBilling.com. Fast and easy payment processing.',
    url: 'https://www.dumpsterdiverz.com/pay-my-bill',
    siteName: 'Dumpster Diverz',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pay My Bill | Online Bill Payment | Dumpster Diverz',
    description: 'Pay your Dumpster Diverz bill online securely. Fast and easy payment processing.',
  },
};

const PayMyBillPage = dynamic(() => import("@/page-components/PayMyBill"));

export default function PayMyBill() {
  return <PayMyBillPage />;
}
