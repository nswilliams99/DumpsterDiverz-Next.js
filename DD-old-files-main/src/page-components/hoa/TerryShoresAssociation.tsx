'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Phone, Mail, CheckCircle, MapPin, Users, Calendar, Trash2, Recycle, Leaf, DollarSign } from 'lucide-react';
import TerryShoresSignupForm from '@/components/hoa/TerryShoresSignupForm';
import QuoteRequestForm from '@/components/QuoteRequestForm';

const TerryShoresAssociation = () => {
  const canonicalPageUrl = "https://www.dumpsterdiverz.com/hoa/terry-shores-association";

  return (
    <div className="min-h-screen">
      <SEO
        title="Terry Shores Association HOA - Trash & Waste Services | Dumpster Diverz"
        description="Professional waste management services for Terry Shores Association HOA in Northern Colorado. Weekly trash pickup, bi-weekly recycling, seasonal grass pickup. Monday pickup - carts out the night before. Call 970-888-7274"
        canonical={canonicalPageUrl}
      />

      <Header />

      <main>
        {/* Hero Section - Enhanced with pink/magenta gradient */}
        <section className="relative bg-gradient-to-r from-diverz-pink to-diverz-purple text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-poppins">
                Terry Shores Association HOA
              </h1>
              <p className="text-lg md:text-xl font-inter leading-relaxed mb-6">
                Welcome, Terry Shores Residents! Dumpster Diverz is your dedicated waste management partner, 
                providing reliable Monday pickup service with exclusive benefits for your community.
              </p>
              
              {/* Key Benefits List */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Calendar className="w-5 h-5 mr-2 text-white" />
                  <span className="font-inter font-medium">Monday Pickup</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Recycle className="w-5 h-5 mr-2 text-white" />
                  <span className="font-inter font-medium">Bi-Weekly Recycling Included</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <Leaf className="w-5 h-5 mr-2 text-white" />
                  <span className="font-inter font-medium">Seasonal Grass Service Available</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="bg-white text-diverz-purple hover:bg-gray-100 font-semibold font-inter shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-12 lg:h-14 px-8 py-3 text-base lg:text-lg"
                asChild
              >
                <a href="#signup-form">
                  Sign Up for Service
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Terry Shores Exclusive Services Section - Modeled after LawnPickupSection */}
        <section className="py-16 bg-soft-neutral">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-professional-dark font-poppins mb-4">
                  Terry Shores Exclusive Services
                </h2>
                <p className="text-xl text-professional-dark leading-relaxed font-inter max-w-3xl mx-auto">
                  Special benefits available only to Terry Shores Association residents. 
                  Experience premium waste management tailored to your community.
                </p>
              </div>

              {/* Two Column Layout */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* Bi-Weekly Recycling Section */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-light-neutral">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                      <Recycle className="w-7 h-7 text-diverz-pink" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-professional-dark font-poppins">
                        Bi-Weekly Recycling
                      </h3>
                      <div className="inline-flex items-center bg-diverz-pink/10 text-diverz-pink font-semibold px-3 py-1 rounded-full text-sm mt-1">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Included with All Service Plans
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-diverz-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-professional-dark font-poppins">
                          No Extra Charge
                        </h4>
                        <p className="text-professional-dark font-inter">
                          Recycling pickup every other week at no additional cost
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                        <Recycle className="w-5 h-5 text-diverz-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-professional-dark font-poppins">
                          Single-Stream Recycling
                        </h4>
                        <p className="text-professional-dark font-inter">
                          Easy recycling - no sorting required
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                        <Trash2 className="w-5 h-5 text-diverz-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-professional-dark font-poppins">
                          HOA-Compliant Cart
                        </h4>
                        <p className="text-professional-dark font-inter">
                          Clean, uniform recycling cart for your home
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seasonal Grass Pickup Section - Matching Bi-Weekly Recycling styling */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-light-neutral">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                      <Leaf className="w-7 h-7 text-diverz-pink" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-professional-dark font-poppins">
                        Seasonal Grass Pickup
                      </h3>
                      <div className="inline-flex items-center bg-diverz-pink/10 text-diverz-pink font-semibold px-3 py-1 rounded-full text-sm mt-1">
                        <Leaf className="w-4 h-4 mr-1" />
                        Optional Add-On Service
                      </div>
                    </div>
                  </div>

                  {/* Pricing Callout */}
                  <div className="bg-gradient-to-r from-diverz-pink to-diverz-purple rounded-xl p-4 mb-6 text-white text-center">
                    <div className="text-3xl font-bold font-poppins">
                      <span className="text-white font-extrabold">$20</span><span className="text-lg font-semibold text-white/90">/month</span>
                    </div>
                    <p className="text-white/90 font-inter text-sm font-medium">
                      May 1st - November 1st
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                        <Trash2 className="w-5 h-5 text-diverz-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-professional-dark font-poppins">
                          Dedicated 64-Gallon Can
                        </h4>
                        <p className="text-professional-dark font-inter">
                          One dedicated can for lawn clippings and grass
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-diverz-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-professional-dark font-poppins">
                          Weekly Pickup
                        </h4>
                        <p className="text-professional-dark font-inter">
                          Weekly collection during growing season
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-diverz-pink/20 rounded-full flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-diverz-pink" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-professional-dark font-poppins">
                          Simple Monthly Billing
                        </h4>
                        <p className="text-professional-dark font-inter">
                          Easy billing through TrashJoes - no contracts
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
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
                Monday Pickup Schedule
              </p>
              <p className="text-base md:text-lg text-gray-200 font-inter">
                Please place both trash and recycling carts out <span className="font-bold text-diverz-pink">the night before</span> for Monday morning pickup
              </p>
            </div>
          </div>
        </section>

        {/* Signup Form Section */}
        <section id="signup-form" className="py-12 md:py-16 bg-professional-light">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <TerryShoresSignupForm />
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
                    Roll-Off Specials for Terry Shores HOA
                  </h2>
                </div>
                <p className="text-lg text-gray-200 font-inter">
                  Special pricing for Terry Shores Association residents on dumpster rentals
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
                    Call our office or submit the form to get your roll-off dumpster delivered to your Terry Shores property.
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

        {/* About Terry Shores Association Section */}
        <section className="py-12 md:py-16 bg-professional-light">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-diverz-purple mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-professional-dark font-poppins">
                  About Terry Shores Association
                </h2>
              </div>
              <p className="text-lg text-professional-dark font-inter leading-relaxed mb-12">
                Dumpster Diverz is proud to serve the Terry Shores Association community with comprehensive waste management solutions. Our services are designed to keep your neighborhood clean, organized, and compliant with HOA standards.
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
                    <h4 className="font-semibold text-lg text-professional-dark font-poppins">Bi-Weekly Recycling</h4>
                    <p className="text-professional-dark font-inter">Single-stream recycling every other week</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-diverz-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg text-professional-dark font-poppins">Seasonal Grass Pickup</h4>
                    <p className="text-professional-dark font-inter">Available May through November for $20/month</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-diverz-purple flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg text-professional-dark font-poppins">Roll-Off Dumpsters</h4>
                    <p className="text-professional-dark font-inter">Special pricing for Terry Shores residents</p>
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
                Questions About Your Terry Shores Service?
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
                  <a href="mailto:dumpsterdiverz@gmail.com?subject=Terry Shores Association Service">
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

export default TerryShoresAssociation;
