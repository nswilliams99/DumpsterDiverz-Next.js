
import { Helmet } from '@/components/seo/HelmetStub';

interface SEOOptimizerProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  h1Text?: string;
  pageType?: 'service' | 'location' | 'calculator' | 'about' | 'contact';
  locationData?: {
    city?: string;
    state?: string;
  };
  structuredData?: any[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const SEOOptimizer = ({
  title,
  description,
  canonical,
  keywords = [],
  h1Text,
  pageType,
  locationData,
  structuredData = [],
  ogImage,
  ogTitle,
  ogDescription
}: SEOOptimizerProps) => {
  // Generate enhanced keywords based on page type and location
  const generateEnhancedKeywords = () => {
    const baseKeywords = [...keywords];
    
    if (locationData?.city) {
      baseKeywords.push(
        `${locationData.city} dumpster rental`,
        `${locationData.city} waste management`,
        `${locationData.city} trash service`
      );
    }
    
    if (pageType === 'service') {
      baseKeywords.push('professional waste service', 'local dumpster company');
    }
    
    return baseKeywords.filter(Boolean).slice(0, 10); // Limit to 10 keywords
  };

  const enhancedKeywords = generateEnhancedKeywords();

  return (
    <Helmet>
      {/* Enhanced Title Structure */}
      <title>{title}</title>
      
      {/* Meta Description with proper length */}
      <meta 
        name="description" 
        content={description.length > 160 ? `${description.substring(0, 157)}...` : description} 
      />
      
      {/* Enhanced Keywords */}
      {enhancedKeywords.length > 0 && (
        <meta name="keywords" content={enhancedKeywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Geographic Meta Tags */}
      {locationData?.city && locationData?.state && (
        <>
          <meta name="geo.region" content={`US-${locationData.state}`} />
          <meta name="geo.placename" content={locationData.city} />
        </>
      )}
      
      {/* Enhanced Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dumpster Diverz" />
      <meta property="og:locale" content="en_US" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* OG Image - Use custom image if provided, otherwise default */}
      <meta property="og:image" content={ogImage || "https://www.dumpsterdiverz.com/images/og/home.webp"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dumpster Diverz - Professional Waste Management in Northern Colorado" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || "https://www.dumpsterdiverz.com/images/og/home.webp"} />
      <meta name="twitter:image:alt" content="Dumpster Diverz - Professional Waste Management in Northern Colorado" />
      
      {/* Structured Data */}
      {structuredData.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOOptimizer;
