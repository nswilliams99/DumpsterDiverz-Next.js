
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOOptimizer from '@/components/seo/SEOOptimizer';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import CommercialSizeSection from '@/components/commercial/CommercialSizeSection';
import CommercialStructuredData from '@/components/CommercialStructuredData';
import { useCommercialSizes } from '@/hooks/useCommercialSizes';
import { generateSchemas } from '@/components/seo/SchemaFactory';

const TwoYardCommercial = () => {
  const canonicalUrl = 'https://www.dumpsterdiverz.com/commercial/2-yard';
  const { data: commercialSizes, isLoading } = useCommercialSizes();
  
  const twoYardSize = commercialSizes?.find(size => size.size_value === 2);
  
  // Generate enhanced schemas using SchemaFactory
  const enhancedSchemas = twoYardSize ? generateSchemas({
    commercialSize: twoYardSize as any,
    faqs: twoYardSize.faqs?.map(faq => ({ question: faq.question, answer: faq.answer })) || [],
    pageType: 'commercial',
    serviceName: twoYardSize.title,
    canonicalUrl
  }) : [];

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

  if (!twoYardSize) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-professional-dark">2 Yard Commercial Dumpster</h1>
            <p className="text-professional-medium mt-2">Information not available</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Preload hero image for LCP optimization */}
      <link
        rel="preload"
        as="image"
        href={twoYardSize?.hero_image_url || '/lovable-uploads/services-commercial-new.jpg'}
        fetchPriority="high"
      />
      
      <SEOOptimizer
        title="2 Yard Commercial Dumpster Service | Dumpster Diverz"
        description="2-yard commercial dumpsters perfect for restaurants and small businesses. Weekly pickup service in Northern Colorado. Call 970-888-7274 for pricing"
        canonical={canonicalUrl}
        pageType="service"
        locationData={{ city: "Northern Colorado", state: "CO" }}
        keywords={[
          '2 yard dumpster',
          'commercial dumpster rental',
          'small business waste',
          'office trash service',
          'restaurant dumpster',
          'Fort Collins commercial waste',
          'Northern Colorado business'
        ]}
        structuredData={enhancedSchemas}
      />

      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.dumpsterdiverz.com" },
        { name: "Commercial Service", url: "https://www.dumpsterdiverz.com/commercial" },
        { name: "2 Yard Dumpster", url: canonicalUrl }
      ]} />

      <Header />
      <main>
        <CommercialSizeSection size={twoYardSize} />
      </main>
      <Footer />
    </div>
  );
};

export default TwoYardCommercial;
