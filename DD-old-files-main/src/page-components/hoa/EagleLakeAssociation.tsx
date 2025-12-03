import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Phone, Mail, CheckCircle, MapPin, Users, Calendar, Trash2 } from 'lucide-react';
import EagleLakeSignupForm from '@/components/hoa/EagleLakeSignupForm';
import QuoteRequestForm from '@/components/QuoteRequestForm';

const EagleLakeAssociation = () => {
  const canonicalPageUrl = "https://www.dumpsterdiverz.com/hoa/eagle-lake-association";

  return (
    <div className="min-h-screen">
      <SEO
        title="Eagle Lake Association HOA - Trash & Waste Services | Dumpster Diverz"
        description="Professional waste management services for Eagle Lake Association HOA in Northern Colorado. Weekly trash pickup, recycling, and bulk disposal for your community."
        canonical={canonicalPageUrl}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-diverz-pink to-diverz-purple text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-poppins">
                Eagle Lake Association HOA
              </h1>
              <p className="text-lg md:text-xl font-inter leading-relaxed">
                Professional waste management services tailored for the Eagle Lake Association community
              </p>
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <EagleLakeSignupForm />
          </div>
        </section>

        {/* Pickup Schedule Notice */}
        <section className="py-8 bg-gradient-to-r from-professional-dark to-gray-900 border-y-4 border-diverz-pink">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-diverz-pink mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-white font-poppins">
                  Important Pickup Information
                </h3>
              </div>
              <p className="text-lg md:text-xl font-semibold text-gray-200 font-inter mb-2">
                Thursday Pickup Schedule
              </p>
              <p className="text-base md:text-lg text-gray-200 font-inter">
                Please place both trash and recycling carts out <span className="font-bold text-diverz-pink">the night before</span> for Thursday morning pickup
              </p>
            </div>
          </div>
        </section>

        {/* Rolloff Specials Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-professional-dark to-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center mb-4">
                  <Trash2 className="w-8 h-8 text-diverz-pink mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins">
                    Roll-Off Specials for Eagle Lake HOA
                  </h2>
                </div>
                <p className="text-lg text-gray-200 font-inter">
                  Special pricing for Eagle Lake Association residents on dumpster rentals
                </p>
              </div>

              {/* Pricing Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {/* 12 Yard */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-diverz-purple transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-diverz-purple font-poppins mb-2">12 Yard</h3>
                    <div className="text-4xl font-bold text-professional-dark font-poppins mb-3">$325</div>
                    <div className="text-sm text-professional-dark font-inter mb-4">
                      <p className="font-semibold">2 tons included</p>
                      <p className="text-xs text-gray-600 mt-1">Up to 2 week rental</p>
                    </div>
                  </div>
                </div>

                {/* 15 Yard */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-diverz-purple transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-diverz-purple font-poppins mb-2">15 Yard</h3>
                    <div className="text-4xl font-bold text-professional-dark font-poppins mb-3">$375</div>
                    <div className="text-sm text-professional-dark font-inter mb-4">
                      <p className="font-semibold">2.5 tons included</p>
                      <p className="text-xs text-gray-600 mt-1">Up to 2 week rental</p>
                    </div>
                  </div>
                </div>

                {/* 20 Yard */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-diverz-purple transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-diverz-purple font-poppins mb-2">20 Yard</h3>
                    <div className="text-4xl font-bold text-professional-dark font-poppins mb-3">$450</div>
                    <div className="text-sm text-professional-dark font-inter mb-4">
                      <p className="font-semibold">3 tons included</p>
                      <p className="text-xs text-gray-600 mt-1">Up to 2 week rental</p>
                    </div>
                  </div>
                </div>

                {/* 30 Yard */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-diverz-purple transition-all duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-diverz-purple font-poppins mb-2">30 Yard</h3>
                    <div className="text-4xl font-bold text-professional-dark font-poppins mb-3">$550</div>
                    <div className="text-sm text-professional-dark font-inter mb-4">
                      <p className="font-semibold">4 tons included</p>
                      <p className="text-xs text-gray-600 mt-1">Up to 2 week rental</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-xl p-6 shadow-md text-center mb-10">
                <p className="text-lg font-semibold text-professional-dark font-poppins mb-2">
                  Additional Weight Charges
                </p>
                <p className="text-2xl font-bold text-diverz-purple font-poppins">
                  $95 per ton over included weight
                </p>
              </div>

              {/* Contact Section */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left Column - Contact Info */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-professional-dark font-poppins mb-4">
                    Ready to Order?
                  </h3>
                  <p className="text-professional-dark font-inter mb-6">
                    Call our office or submit the form to get your roll-off dumpster delivered to your Eagle Lake property.
                  </p>
                  <div>
                    <Button 
                      size="lg" 
                      className="w-full bg-diverz-purple hover:bg-diverz-purple/90 text-white font-semibold font-inter"
                      asChild
                    >
                      <a href="tel:970-888-7274">
                        <Phone className="w-5 h-5 mr-2" />
                        Call 970-888-7274
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right Column - Quote Form */}
                <div>
                  <QuoteRequestForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Eagle Lake Association Section */}
        <section className="py-12 md:py-16 bg-professional-light">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-diverz-purple mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-professional-dark font-poppins">
                  About Eagle Lake Association
                </h2>
              </div>
              <p className="text-lg text-professional-dark font-inter leading-relaxed mb-12">
                Dumpster Diverz is proud to serve the Eagle Lake Association community with comprehensive waste management solutions. Our services are designed to keep your neighborhood clean, organized, and compliant with HOA standards.
              </p>
              
              {/* Services Grid */}
              <h3 className="text-xl font-bold text-professional-dark mb-6 font-poppins">
                Services We Provide
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-diverz-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg text-professional-dark font-poppins">Weekly Trash Pickup</h4>
                    <p className="text-professional-dark font-inter">Reliable weekly collection for all residents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-diverz-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg text-professional-dark font-poppins">Recycling Service</h4>
                    <p className="text-professional-dark font-inter">Single-stream recycling for easy sorting</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <h3 className="text-xl font-bold text-professional-dark mb-6 font-poppins">
                Why Choose Dumpster Diverz
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-diverz-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-professional-dark font-poppins">Local & Responsive</h4>
                    <p className="text-sm text-professional-dark font-inter">Northern Colorado owned with same-day support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-6 h-6 text-diverz-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-professional-dark font-poppins">Flexible Scheduling</h4>
                    <p className="text-sm text-professional-dark font-inter">Custom pickup schedules for your community</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-diverz-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-professional-dark font-poppins">No Hidden Fees</h4>
                    <p className="text-sm text-professional-dark font-inter">Transparent pricing with no surprise charges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Contact CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-diverz-pink to-diverz-purple text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
                Questions About Your Eagle Lake Service?
              </h2>
              <p className="text-lg md:text-xl mb-8 font-inter leading-relaxed">
                Our team is here to help with service changes, special pickups, or any questions about your HOA waste management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-diverz-purple hover:bg-gray-100 font-semibold font-inter shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  asChild
                >
                  <a href="tel:970-888-7274">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 970-888-7274
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 hover:border-white font-semibold font-inter transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  asChild
                >
                  <a href="mailto:dumpsterdiverz@gmail.com?subject=Eagle Lake Association Service">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Our Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EagleLakeAssociation;
