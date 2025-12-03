
import { Helmet } from '@/components/seo/HelmetStub';

const OrganizationSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Dumpster Diverz LLC",
    "legalName": "Dumpster Diverz LLC",
    "url": "https://www.dumpsterdiverz.com",
    "logo": "https://cgizicrrzdbzvfniffhw.supabase.co/storage/v1/object/public/website_pics/pages/home/dumpster_diverz_logo_desktop.webp",
    "description": "Professional dumpster rental and waste management services in Northern Colorado, including residential trash pickup, commercial dumpsters, and roll-off containers.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1100 South St Louis Ave",
      "addressLocality": "Loveland",
      "addressRegion": "CO",
      "postalCode": "80537",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-970-888-7274",
      "contactType": "customer service",
      "email": "dumpsterdiverz@gmail.com",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/DumpsterDiverz",
      "https://www.google.com/maps/place/Dumpster+Diverz"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 40.4774,
        "longitude": -104.9014
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Waste Management Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Trash Collection",
            "description": "Weekly curbside trash and recycling pickup for homes"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Dumpster Service",
            "description": "2-3 yard commercial dumpsters with flexible pickup schedules"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roll-Off Container Rental",
            "description": "10-40 yard roll-off dumpsters for construction and large projects"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Nicole Hicks"
    },
    "numberOfEmployees": "2-10",
    "foundingDate": "2008-01",
    "slogan": "Reliable Waste Management Solutions for Northern Colorado"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
