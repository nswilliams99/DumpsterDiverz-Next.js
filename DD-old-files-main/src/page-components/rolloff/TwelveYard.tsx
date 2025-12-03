import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Link from 'next/link';

const TwelveYardRolloff = () => {
  const canonicalUrl = 'https://www.dumpsterdiverz.com/rolloff-12-yard';

  return (
    <div className="min-h-screen">
      <SEO
        title="12 Yard Dumpster Rental | Small Projects | Dumpster Diverz"
        description="Rent a 12-yard roll-off dumpster for small renovations and cleanouts. Holds 4-6 pickup loads. Same-day delivery in Northern Colorado. Call 970-888-7274"
        canonical={canonicalUrl}
        keywords={[
          '12 yard dumpster',
          'small dumpster rental',
          'home renovation',
          'garage cleanout',
          'small projects',
          'Fort Collins dumpster rental'
        ]}
      />

      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-dark-neutral mb-6">12 Yard Dumpster Rental</h1>
          <p className="text-lg text-professional-medium mb-8">
            Perfect for small renovations, garage cleanouts, and yard debris removal. 
            Holds approximately 4-6 pickup truck loads of waste.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Perfect For:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Small kitchen remodels</li>
                <li>Garage cleanouts</li>
                <li>Basement cleanouts</li>
                <li>Small yard debris removal</li>
                <li>Minor home renovations</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Specifications:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Capacity: 12 cubic yards</li>
                <li>Equivalent: 4-6 pickup truck loads</li>
                <li>Weight limit: 2-3 tons</li>
                <li>Dimensions: 14' x 8' x 3.5'</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/roll-off-dumpsters" 
              className="bg-primary-pink hover:bg-cta-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Quote for 12 Yard Dumpster
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

export default TwelveYardRolloff;