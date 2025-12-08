import { Button } from '@/components/ui/button';
import { Leaf, Calendar, DollarSign, MapPin } from 'lucide-react';

const LawnPickupSection = () => {
  return (
    <section className="py-16 bg-soft-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-professional-dark font-poppins mb-4">
              Seasonal Lawn & Grass Pickup
            </h2>
            <p className="text-xl text-professional-dark leading-relaxed font-inter max-w-3xl mx-auto">
              Keep your yard clean with our convenient seasonal lawn and grass clipping pickup service. 
              Perfect for maintaining a beautiful landscape throughout the growing season.
            </p>
          </div>

          {/* Service Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Service Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-diverz-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-professional-dark font-poppins mb-2">
                    What's Included
                  </h3>
                  <p className="text-professional-dark font-inter">
                    One dedicated 64-gallon can for lawn clippings and grass with weekly pickup service
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-diverz-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-professional-dark font-poppins mb-2">
                    Seasonal Service
                  </h3>
                  <p className="text-professional-dark font-inter">
                    Available <span className="text-primary font-semibold">May 1st - November 1st</span> during peak growing season
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-diverz-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-professional-dark font-poppins mb-2">
                    Service Areas
                  </h3>
                  <p className="text-professional-dark font-inter">
                    Fort Collins, Loveland, Windsor, Greeley, Wellington and surrounding areas
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-light-neutral">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-diverz-pink" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-professional-dark font-poppins">
                      $20<span className="text-lg font-normal">/month</span>
                    </div>
                    <p className="text-sm font-inter">
                      <span className="text-primary font-semibold">May 1st - November 1st</span>
                    </p>
                  </div>
                </div>

                <p className="text-professional-dark font-inter mb-6">
                  Simple monthly billing through our secure TrashJoes system. 
                  No contracts, cancel anytime.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-diverz-pink hover:bg-diverz-pink-dark text-white font-semibold font-inter transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-12"
                >
                  <a 
                    href="https://app.trashjoes.com/h/dumpster-diverz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order lawn pickup service online through TrashJoes"
                  >
                    <Leaf className="w-5 h-5 mr-2" />
                    Order Lawn Pickup Online
                  </a>
                </Button>

                <p className="text-xs text-professional-dark/60 font-inter mt-3">
                  Secure billing through TrashJoes integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawnPickupSection;