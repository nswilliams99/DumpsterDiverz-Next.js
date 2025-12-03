'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Link from 'next/link';

const TwentyYardRolloff = () => {
  const canonicalUrl = 'https://www.dumpsterdiverz.com/rolloff-20-yard';

  return (
    <div className="min-h-screen">
      <SEO
        title="20 Yard Dumpster Rental | Large Projects | Dumpster Diverz"
        description="20-yard roll-off containers for roofing and large renovations. Most popular size. Holds 8-10 pickup loads. Serving Northern Colorado. 970-888-7274"
        canonical={canonicalUrl}
        keywords={[
          '20 yard dumpster',
          'roofing project',
          'large renovation',
          'construction dumpster',
          'popular dumpster size',
          'Northern Colorado dumpster rental'
        ]}
      />

      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-dark-neutral mb-6">20 Yard Dumpster Rental</h1>
          <p className="text-lg text-professional-medium mb-8">
            Our most popular size! Perfect for roofing projects, large renovations, and major cleanouts. 
            Holds approximately 8-10 pickup truck loads of waste.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Perfect For:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Roofing projects</li>
                <li>Large home renovations</li>
                <li>Whole house cleanouts</li>
                <li>Major landscaping projects</li>
                <li>Multi-room remodels</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Specifications:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Capacity: 20 cubic yards</li>
                <li>Equivalent: 8-10 pickup truck loads</li>
                <li>Weight limit: 4-5 tons</li>
                <li>Dimensions: 22' x 8' x 4'</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/roll-off-dumpsters" 
              className="bg-primary-pink hover:bg-cta-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Quote for 20 Yard Dumpster
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

export default TwentyYardRolloff;