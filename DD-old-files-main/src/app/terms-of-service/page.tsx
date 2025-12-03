import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Review the Terms of Service for Dumpster Diverz, including service rules, liability, cancellation policy, and billing expectations for our waste management services.',
  keywords: ['terms of service', 'service agreement', 'waste management terms', 'dumpster rental terms', 'legal terms'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TermsOfServicePage = dynamic(() => import("@/page-components/TermsOfService"));

export default function TermsOfService() {
  return <TermsOfServicePage />;
}
