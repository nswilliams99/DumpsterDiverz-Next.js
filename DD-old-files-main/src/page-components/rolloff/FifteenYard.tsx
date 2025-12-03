'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Link from 'next/link';

const FifteenYardRolloff = () => {
  const canonicalUrl = 'https://www.dumpsterdiverz.com/rolloff-15-yard';

  return (
    <div className="min-h-screen">
      <SEO
        title="15 Yard Dumpster Rental | Home Remodels | Dumpster Diverz"
        description="15-yard roll-off dumpsters perfect for kitchen remodels and garage cleanouts. Holds 6-8 pickup loads. Fast delivery in Fort Collins. Call 970-888-7274"
        canonical={canonicalUrl}
        keywords={[
          '15 yard dumpster',
          'kitchen remodel',
          'bathroom renovation',
          'medium dumpster rental',
          'home improvement',
          'Fort Collins dumpster rental'
        ]}
      />

      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-dark-neutral mb-6">15 Yard Dumpster Rental</h1>
          <p className="text-lg text-professional-medium mb-8">
            Ideal for kitchen remodels, bathroom renovations, and medium-sized cleanouts. 
            Holds approximately 6-8 pickup truck loads of waste.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Perfect For:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Kitchen remodels</li>
                <li>Bathroom renovations</li>
                <li>Flooring replacement</li>
                <li>Large garage cleanouts</li>
                <li>Medium home renovations</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Specifications:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Capacity: 15 cubic yards</li>
                <li>Equivalent: 6-8 pickup truck loads</li>
                <li>Weight limit: 3-4 tons</li>
                <li>Dimensions: 16' x 8' x 4'</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/roll-off-dumpsters" 
              className="bg-primary-pink hover:bg-cta-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Quote for 15 Yard Dumpster
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

export default FifteenYardRolloff;