import dynamic from "next/dynamic";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy, Terms & SMS Terms',
  description: 'Learn how Dumpster Diverz collects, protects, and uses your data. Includes our full Privacy Policy, SMS Terms, and legal service conditions.',
  keywords: ['privacy policy', 'data protection', 'SMS terms', 'privacy rights', 'customer data'],
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPolicyPage = dynamic(() => import("@/page-components/PrivacyPolicy"));

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}
