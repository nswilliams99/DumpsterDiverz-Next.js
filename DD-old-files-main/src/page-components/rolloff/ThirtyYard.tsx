'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Link from 'next/link';

const ThirtyYardRolloff = () => {
  const canonicalUrl = 'https://www.dumpsterdiverz.com/rolloff-30-yard';

  return (
    <div className="min-h-screen">
      <SEO
        title="30 Yard Dumpster Rental | Construction | Dumpster Diverz"
        description="30-yard roll-off dumpsters for construction and demolition. Holds 12-15 pickup loads. Commercial projects in Fort Collins area. Call 970-888-7274"
        canonical={canonicalUrl}
        keywords={[
          '30 yard dumpster',
          'construction dumpster',
          'demolition project',
          'commercial dumpster',
          'large construction',
          'Fort Collins construction waste'
        ]}
      />

      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-dark-neutral mb-6">30 Yard Dumpster Rental</h1>
          <p className="text-lg text-professional-medium mb-8">
            Our largest size for major construction and demolition projects. 
            Holds approximately 12-15 pickup truck loads of waste.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Perfect For:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Major construction projects</li>
                <li>Demolition work</li>
                <li>Commercial renovations</li>
                <li>Large estate cleanouts</li>
                <li>New home construction</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Specifications:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Capacity: 30 cubic yards</li>
                <li>Equivalent: 12-15 pickup truck loads</li>
                <li>Weight limit: 6-8 tons</li>
                <li>Dimensions: 22' x 8' x 6'</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/roll-off-dumpsters" 
              className="bg-primary-pink hover:bg-cta-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Quote for 30 Yard Dumpster
            </Link>
            <p className="mt-4 text-professional-medium">
              Call us today: <a href="tel:970-888-7274" className="text-primary-pink font-semibold">970-888-7274</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThirtyYardRolloff;