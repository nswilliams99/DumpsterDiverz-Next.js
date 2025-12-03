"use client";

import IndexPage from '@/page-components/Index';
import { generateLocalBusinessSchema, generateOrganizationSchema } from '@/lib/structured-data';

// Note: metadata cannot be exported from client components
// SEO is handled by SEOOptimizer component inside IndexPage

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      <IndexPage />
    </>
  );
}
