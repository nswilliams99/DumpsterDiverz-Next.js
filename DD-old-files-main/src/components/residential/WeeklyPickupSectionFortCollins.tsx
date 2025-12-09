'use client';

import { Button } from '@/components/ui/button';
import { Trash2, Recycle, Calendar, MapPin, Handshake, Clock, DollarSign, Phone } from 'lucide-react';
import { usePageSection } from '@/hooks/usePageSections';
import OptimizedImage from '@/components/ui/OptimizedImage';

const WeeklyPickupSectionFortCollins = () => {
  const { section } = usePageSection('residential-fort-collins', 'weekly-pickup');
  
  const serviceFeatures = [
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <Trash2 className="w-6 h-6 text-white" />
      </div>,
      title: "Bins Delivered Across Fort Collins",
      description: "Choose a 64 or 96-gallon cart for homes from Old Town to Rigden Farm."
    },
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <Recycle className="w-6 h-6 text-white" />
      </div>,
      title: "Optional Recycling for $10/month",
      description: "Same-day pickup for mixed recycling — paper, cans, plastics #1–2."
    },
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <Calendar className="w-6 h-6 text-white" />
      </div>,
      title: "Weekly Service Without Delays",
      description: "Reliable Monday/Tuesday pickups — snow or shine — across city ZIPs."
    },
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <MapPin className="w-6 h-6 text-white" />
      </div>,
      title: "Fort Collins-Based Drivers",
      description: "Our team knows your alleys, student rentals, and HOA placement rules."
    },
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <Handshake className="w-6 h-6 text-white" />
      </div>,
      title: "Month-to-Month, Student-Friendly",
      description: "No contracts — great for renters, families, and HOA neighborhoods."
    }
  ];
  
  return (
    <section className="bg-professional-light py-[80px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-professional-dark mb-4 font-poppins">
            {section?.title || "How Our Weekly Pickup Works"}
          </h2>
          <p className="text-lg text-professional-medium font-inter">
            {section?.description || "Simple, reliable service that fits your schedule"}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <OptimizedImage 
              alt="Weekly residential trash pickup service with proper bin placement in Fort Collins" 
              className="w-full rounded-lg shadow-lg" 
              src={section?.image_path 
                ? `https://cgizicrrzdbzvfniffhw.supabase.co/storage/v1/object/public/${encodeURI(section.image_path)}`
                : "https://cgizicrrzdbzvfniffhw.supabase.co/storage/v1/object/public/website_pics/pages/residential/resi_heroimg.webp"
              }
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-6" role="list">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4" role="listitem">
                  {feature.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-professional-dark mb-2 font-poppins">
                      {feature.title}
                    </h3>
                    <p className="text-professional-medium font-inter font-normal text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Content Section - Fort Collins Trash Collection */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-professional-dark mb-6 font-poppins">
                Fort Collins Trash Collection Schedule
              </h2>
              <p className="text-professional-medium font-inter mb-4">
                Our Fort Collins trash collection runs Monday through Friday, with most neighborhoods receiving weekly pickup on consistent days. When you sign up for trash service in Fort Collins, we'll assign your pickup day based on your location and provide text notifications before each collection.
              </p>
              <p className="text-professional-medium font-inter mb-6">
                Fort Collins trash pickup includes curbside collection of household waste in your provided cart. Set your bin out by 6 AM on your scheduled day, and our local drivers will handle the rest.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-professional-dark mb-3 font-poppins flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Fort Collins Pickup Schedule
                </h3>
                <ul className="space-y-2 text-professional-medium font-inter">
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Weekly trash collection (same day each week)</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Recycling available same day for $10/month</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Holiday schedule adjustments with advance notice</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-primary rounded-full mr-3"></span>Text notifications before each pickup</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-professional-dark mb-6 font-poppins">
                Why Fort Collins Chooses Our Garbage Service
              </h2>
              <p className="text-professional-medium font-inter mb-4">
                Unlike large national waste management companies, Dumpster Diverz is a local Fort Collins garbage service run by people who live here. We serve neighborhoods from Old Town and CSU campus housing to Harmony Road, Fossil Creek, and the growing Timnath border areas.
              </p>
              <p className="text-professional-medium font-inter mb-6">
                Our Fort Collins garbage pickup customers enjoy month-to-month service with no long-term contracts. Whether you're a homeowner, renter, landlord, or property manager, our flexible trash service works for you.
              </p>
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="font-semibold text-professional-dark mb-4 font-poppins flex items-center">
                  <DollarSign className="w-5 h-5 text-primary mr-2" />
                  Fort Collins Trash Service Pricing
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-professional-medium font-inter">64-gallon cart</span>
                    <span className="font-semibold text-professional-dark">$29/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-professional-medium font-inter">96-gallon cart</span>
                    <span className="font-semibold text-professional-dark">$33/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-professional-medium font-inter">Add recycling</span>
                    <span className="font-semibold text-primary">+$10/month</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" asChild>
                  <a href="tel:970-888-7274">
                    <Phone className="w-4 h-4 mr-2" />
                    Call 970-888-7274
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyPickupSectionFortCollins;
