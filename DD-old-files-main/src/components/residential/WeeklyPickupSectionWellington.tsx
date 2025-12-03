'use client';

import { Button } from '@/components/ui/button';
import { Trash2, Recycle, Calendar, MapPin, Handshake } from 'lucide-react';
import { usePageSection } from '@/hooks/usePageSections';
import OptimizedImage from '@/components/ui/OptimizedImage';

const WeeklyPickupSectionWellington = () => {
  const { section } = usePageSection('residential-wellington', 'weekly-pickup');
  const serviceFeatures = [
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <Trash2 className="w-6 h-6 text-white" />
      </div>,
      title: "Carts Delivered Across Wellington",
      description: "We provide 64 or 96-gallon bins to neighborhoods like The Meadows and Viewpointe."
    },
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <Recycle className="w-6 h-6 text-white" />
      </div>,
      title: "Recycling Optional for $10/month",
      description: "Add mixed recycling — picked up the same day as trash."
    },
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <Calendar className="w-6 h-6 text-white" />
      </div>,
      title: "Weekly Pickup on Time",
      description: "Reliable Monday pickups — snow or shine — across all Wellington ZIPs."
    },
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <MapPin className="w-6 h-6 text-white" />
      </div>,
      title: "Local Drivers Know Your Streets",
      description: "From Park Meadows to Sage Meadows, our team navigates HOAs and rural lanes."
    },
    {
      icon: <div className="w-12 h-12 bg-diverz-pink rounded-full flex items-center justify-center">
        <Handshake className="w-6 h-6 text-white" />
      </div>,
      title: "Month-to-Month, No Contracts",
      description: "Perfect for new homeowners and renters — no long-term agreements."
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
              alt="Weekly residential trash pickup service with proper bin placement in Wellington" 
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
      </div>
    </section>
  );
};

export default WeeklyPickupSectionWellington;
