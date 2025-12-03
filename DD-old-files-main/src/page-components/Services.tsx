"use client";


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

import SEOOptimizer from '@/components/seo/SEOOptimizer';

const ServicesPage = () => {
  const canonicalUrl = 'https://www.dumpsterdiverz.com/services';
  
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Comprehensive Waste Management Services",
      "description": "Professional dumpster rental services including residential, commercial, and roll-off dumpsters in Windsor, Fort Collins, and Wellington, Colorado.",
      "provider": {
        "@type": "Organization",
        "name": "Dumpster Diverz LLC",
        "telephone": "970-888-7274",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wellington",
          "addressRegion": "Colorado",
          "addressCountry": "US"
        },
        "url": "https://www.dumpsterdiverz.com"
      },
      "areaServed": [
        {"@type": "City", "name": "Windsor", "addressRegion": "Colorado"},
        {"@type": "City", "name": "Fort Collins", "addressRegion": "Colorado"},
        {"@type": "City", "name": "Wellington", "addressRegion": "Colorado"},
        {"@type": "City", "name": "Greeley", "addressRegion": "Colorado"},
        {"@type": "City", "name": "Loveland", "addressRegion": "Colorado"},
        {"@type": "City", "name": "Severance", "addressRegion": "Colorado"}
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Waste Management Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Trash Service",
              "description": "Weekly trash and recycling pickup for homes"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Dumpster Service",
              "description": "Regular waste pickup for businesses"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Roll-Off Container Rental",
              "description": "Temporary dumpsters for construction and large projects"
            }
          }
        ]
      }
    }
  ];

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.dumpsterdiverz.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEOOptimizer
        title="Professional Dumpster Rental Services | Residential, Commercial & Roll-Off | Dumpster Diverz"
        description="Complete dumpster rental services including residential trash pickup, commercial dumpsters, and roll-off containers in Windsor, Fort Collins, and Wellington, Colorado."
        canonical={canonicalUrl}
        pageType="service"
        locationData={{ city: "Northern Colorado", state: "CO" }}
        keywords={[
          'dumpster rental services',
          'residential trash pickup',
          'commercial dumpster',
          'roll-off containers',
          'Windsor Colorado',
          'Fort Collins waste management',
          'Northern Colorado',
          'professional waste service',
          'local dumpster company'
        ]}
        structuredData={[structuredData[0], breadcrumbStructuredData]}
      />
      
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
