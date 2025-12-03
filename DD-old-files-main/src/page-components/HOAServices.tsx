"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import HOAQuoteForm from '@/components/HOAQuoteForm';
import { generateSchemas } from '@/components/seo/SchemaFactory';
import { useFAQs } from '@/hooks/useFAQs';
import { usePageSection } from '@/hooks/usePageSections';
import { Button } from '@/components/ui/button';
import { Phone, Mail, CheckCircle, Users, Truck, Shield, Clock } from 'lucide-react';

const HOAServices = () => {
  const canonicalPageUrl = "https://www.dumpsterdiverz.com/hoa-services";
  const { data: faqs } = useFAQs();
  
  // Load dynamic content sections
  const { section: heroSection } = usePageSection('hoa-services', 'hero');
  const { section: howItWorksIntro } = usePageSection('hoa-services', 'how-it-works-intro');
  const { section: stepReachOut } = usePageSection('hoa-services', 'step-reach-out');
  const { section: stepCustomPlan } = usePageSection('hoa-services', 'step-custom-plan');
  const { section: stepPickupStarts } = usePageSection('hoa-services', 'step-pickup-starts');
  const { section: stepSupport } = usePageSection('hoa-services', 'step-support');
  const { section: whatsIncludedIntro } = usePageSection('hoa-services', 'whats-included-intro');
  const { section: includedServices } = usePageSection('hoa-services', 'included-services');
  const { section: whyChooseIntro } = usePageSection('hoa-services', 'why-choose-intro');
  const { section: advantages } = usePageSection('hoa-services', 'advantages');
  const { section: bottomCTA } = usePageSection('hoa-services', 'bottom-cta');
  
  // Filter FAQs that might be relevant to HOA services
  const hoaFaqs = faqs?.filter(faq => 
    faq.category?.toLowerCase().includes('hoa') || 
    faq.question.toLowerCase().includes('hoa') ||
    faq.question.toLowerCase().includes('community') ||
    faq.question.toLowerCase().includes('neighborhood')
  ) || [];
  
  // Generate enhanced schemas for HOA services
  const hoaSchemas = generateSchemas({
    pageType: 'hoa',
    serviceName: 'HOA Waste Management Services',
    faqs: hoaFaqs.map(faq => ({ question: faq.question, answer: faq.answer })),
    canonicalUrl: canonicalPageUrl
  });

  // Dynamic how it works steps using database content
  const howItWorksSteps = [
    {
      icon: Phone,
      title: stepReachOut?.title || "Reach Out to Our Team",
      description: stepReachOut?.description || "Tell us about your community's needs."
    },
    {
      icon: Users,
      title: stepCustomPlan?.title || "Get a Custom Plan", 
      description: stepCustomPlan?.description || "We'll build a pickup schedule and service plan just for your HOA."
    },
    {
      icon: Truck,
      title: stepPickupStarts?.title || "Trash + Bulk Pickup Starts",
      description: stepPickupStarts?.description || "Enjoy weekly service with HOA-compliant bins."
    },
    {
      icon: Shield,
      title: stepSupport?.title || "Support On-Call",
      description: stepSupport?.description || "Local team available for questions, service changes, or overflow pickup."
    }
  ];

  // Dynamic included services from database
  const includedServicesList = includedServices?.description?.split(', ') || [
    "Weekly Trash Pickup",
    "Recycling Service", 
    "Bulk Item Removal",
    "Yard Waste (optional)",
    "Roll-Off Dumpster Access",
    "HOA-Compliant Bin Placement"
  ];

  // Dynamic advantages from database
  const advantagesList = advantages?.description?.split(', ') || [
    "Local service, fast response times",
    "Same-day support when needed", 
    "Clean, uniform bin placement",
    "Experience with gated and private communities",
    "No surprise fees or confusing billing"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="HOA Trash & Dumpster Services | Dumpster Diverz"
        description="Custom waste solutions for neighborhoods with HOAs across Northern Colorado — including trash pickup, bulk disposal, and roll-off rentals."
        canonical={canonicalPageUrl}
        structuredData={hoaSchemas}
        pageType="hoa"
        keywords={[
          'HOA trash service',
          'HOA waste management',
          'neighborhood trash pickup',
          'Colorado HOA services',
          'community waste solutions'
        ]}
        ogTitle="HOA Trash & Dumpster Services | Dumpster Diverz"
        ogDescription="Custom waste solutions for neighborhoods with HOAs across Northern Colorado — including trash pickup, bulk disposal, and roll-off rentals."
      />

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-professional-dark via-professional-medium to-diverz-purple text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight font-poppins mb-6">
                {heroSection?.title || 'HOA Trash & Dumpster Services'}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 font-medium font-inter leading-relaxed max-w-3xl mx-auto mb-8">
                {heroSection?.description || 'Reliable trash and recycling service for HOAs across Northern Colorado. Weekly pickup, bulk disposal, and roll-off rentals — tailored to your community\'s needs.'}
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold font-inter shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-12 lg:h-14 px-8 py-3 text-base lg:text-lg"
                  asChild
                >
                  <a href={heroSection?.button_url || "#hoa-request"} aria-label="Request HOA Service">
                    {heroSection?.button_text || "Request HOA Service"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-professional-dark font-poppins">
                {howItWorksIntro?.title || "How Our HOA Service Works"}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-diverz-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-professional-dark font-poppins">
                      {step.title}
                    </h3>
                    <p className="text-professional-medium font-inter">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-12 md:py-16 bg-dark-neutral">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-poppins">
                {whatsIncludedIntro?.title || "What's Included in HOA Service"}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {includedServicesList.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white font-medium font-inter">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Dumpster Diverz Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-professional-dark font-poppins">
                  {whyChooseIntro?.title || "Why HOAs Choose Dumpster Diverz"}
                </h2>
                <p className="text-base md:text-lg text-professional-medium font-inter leading-relaxed mb-8">
                  {whyChooseIntro?.description || "We understand the unique needs of HOA communities and deliver reliable, professional service that keeps your neighborhood looking its best."}
                </p>
              </div>

              <div className="space-y-4">
                {advantagesList.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-diverz-purple flex-shrink-0 mt-0.5" />
                    <span className="text-professional-dark font-inter text-lg">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-diverz-pink to-diverz-purple text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
                {bottomCTA?.title || "Need Trash Service for Your Neighborhood?"}
              </h2>
              <p className="text-lg md:text-xl mb-8 font-inter leading-relaxed">
                {bottomCTA?.description || "Let's talk about your HOA's needs — we'll build a solution that works."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-diverz-purple hover:bg-gray-100 font-semibold font-inter shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-12 lg:h-14 px-8 py-3 text-base lg:text-lg"
                  asChild
                >
                  <a href={bottomCTA?.button_url || "tel:970-888-7274"} aria-label="Call 970-888-7274 for HOA services">
                    <Phone className="w-5 h-5 mr-2" />
                    {bottomCTA?.button_text || "Call for HOA Quote"}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 hover:border-white font-semibold font-inter transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-12 lg:h-14 px-8 py-3 text-base lg:text-lg"
                  asChild
                >
                  <a href="mailto:dumpsterdiverz@gmail.com?subject=HOA Service Request" aria-label="Email for HOA service request">
                    <Mail className="w-5 h-5 mr-2" />
                    Request HOA Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* HOA Request Form Section */}
        <section id="hoa-request" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <HOAQuoteForm />
          </div>
        </section>

        {/* HOAs We Currently Service Section */}
        <section className="py-12 md:py-16 bg-professional-light">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-professional-dark mb-4 font-poppins">
                HOAs We Currently Service
              </h2>
            </div>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-diverz-purple hover:bg-diverz-purple-dark text-white font-semibold font-inter shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-12 lg:h-14 px-8 py-3 text-base lg:text-lg"
                asChild
              >
                <a href="/hoa/eagle-lake-association">Eagle Lake Association HOA</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HOAServices;