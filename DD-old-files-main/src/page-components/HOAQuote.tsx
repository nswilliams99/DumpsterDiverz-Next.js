"use client";


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import HOAQuoteForm from '@/components/HOAQuoteForm';

const HOAQuote = () => {
  const canonicalPageUrl = "https://www.dumpsterdiverz.com/hoa-quote";

  return (
    <div className="min-h-screen">
      <SEO
        title="HOA Waste Management Quote | Dumpster Diverz"
        description="Get a custom quote for HOA waste management services. Bulk pricing for communities in Northern Colorado. Free consultation. 970-888-7274"
        canonical={canonicalPageUrl}
        keywords={[
          'HOA trash service quote',
          'HOA waste management request',
          'Colorado HOA services',
          'community trash pickup'
        ]}
        ogTitle="Request HOA Trash Service | Dumpster Diverz"
        ogDescription="Submit a quote request for trash and recycling services for your HOA community in Northern Colorado."
      />

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/80 to-accent text-primary-foreground py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-poppins mb-6">
                Request Trash Service for Your <span className="text-accent">HOA</span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 font-medium font-inter leading-relaxed max-w-3xl mx-auto">
                Get a custom quote for your community's waste management needs.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <HOAQuoteForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HOAQuote;
