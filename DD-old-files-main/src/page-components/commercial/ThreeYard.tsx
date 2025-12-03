'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CommercialSizeSection from '@/components/commercial/CommercialSizeSection';
import CommercialStructuredData from '@/components/CommercialStructuredData';
import { useCommercialSizes } from '@/hooks/useCommercialSizes';

const ThreeYardCommercial = () => {
  const { data: commercialSizes, isLoading } = useCommercialSizes();
  
  const threeYardSize = commercialSizes?.find(size => size.size_value === 3);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-diverz-purple"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!threeYardSize) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-professional-dark">3 Yard Commercial Dumpster</h1>
            <p className="text-professional-medium mt-2">Information not available</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="3 Yard Commercial Dumpster Service | Dumpster Diverz"
        description="3-yard commercial dumpsters for retail and offices. Reliable weekly waste management in Fort Collins area. Get a quote: 970-888-7274"
        canonical="https://www.dumpsterdiverz.com/commercial/3-yard"
        keywords={[
          '3 yard dumpster',
          'commercial dumpster rental',
          'medium business waste',
          'retail store dumpster',
          'restaurant waste service',
          'Fort Collins commercial trash'
        ]}
      />

      <SEO
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "mainEntity": {
            "@type": "Service",
            "name": threeYardSize?.title,
            "description": threeYardSize?.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Dumpster Diverz",
              "telephone": "970-888-7274",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Wellington",
                "@addressRegion": "Colorado",
                "addressCountry": "US"
              }
            }
          }
        }}
      />

      <CommercialStructuredData
        pageType="size-specific"
        sizeName="3 Yard Commercial Dumpster"
        sizeValue={3}
      />

      <Header />
      <main>
        <CommercialSizeSection size={threeYardSize} />
      </main>
      <Footer />
    </div>
  );
};

export default ThreeYardCommercial;
