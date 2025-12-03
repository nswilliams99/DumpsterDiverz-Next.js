"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SizeCalculator = () => {
  const [projectType, setProjectType] = useState('');
  const [roomCount, setRoomCount] = useState('1');
  const [materialType, setMaterialType] = useState('');
  const [recommendedSize, setRecommendedSize] = useState('');

  const calculateSize = () => {
    let size = 12; // Start with 12 yard as base

    // Adjust based on project type
    if (projectType === 'renovation') size += 3;
    if (projectType === 'roofing') size += 8;
    if (projectType === 'construction') size += 18;
    if (projectType === 'cleanout') size += 3;

    // Adjust based on room count
    const rooms = parseInt(roomCount);
    if (rooms > 2) size += (rooms - 2) * 2;

    // Adjust based on material type
    if (materialType === 'heavy') size += 5;
    if (materialType === 'bulky') size += 8;

    // Cap at 30 yards
    size = Math.min(size, 30);

    setRecommendedSize(`${size} Yard Dumpster`);
  };

  const canonicalUrl = 'https://www.dumpsterdiverz.com/size-calculator';

  return (
    <div className="min-h-screen">
      <SEO
        title="Dumpster Size Calculator | Find Right Size | Dumpster Diverz"
        description="Free dumpster size calculator. Find the perfect container size for your project. Save money by choosing the right dumpster. 970-888-7274"
        canonical={canonicalUrl}
        keywords={[
          'dumpster size calculator',
          'dumpster size guide',
          'right dumpster size',
          'project waste calculator',
          'Northern Colorado dumpster rental'
        ]}
      />

      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-dark-neutral mb-6 text-center">
              Dumpster Size Calculator
            </h1>
            <p className="text-lg text-professional-medium mb-8 text-center">
              Answer a few questions to find the perfect dumpster size for your project.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select 
                    value={projectType} 
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  >
                    <option value="">Select project type</option>
                    <option value="cleanout">Home/Garage Cleanout</option>
                    <option value="renovation">Room Renovation</option>
                    <option value="roofing">Roofing Project</option>
                    <option value="construction">Construction/Demolition</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Number of Rooms/Areas</label>
                  <select 
                    value={roomCount} 
                    onChange={(e) => setRoomCount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  >
                    <option value="1">1 Room/Area</option>
                    <option value="2">2 Rooms/Areas</option>
                    <option value="3">3 Rooms/Areas</option>
                    <option value="4">4+ Rooms/Areas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Material Type</label>
                  <select 
                    value={materialType} 
                    onChange={(e) => setMaterialType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  >
                    <option value="">Select material type</option>
                    <option value="light">Light (furniture, clothing, paper)</option>
                    <option value="mixed">Mixed (general household items)</option>
                    <option value="heavy">Heavy (appliances, concrete, dirt)</option>
                    <option value="bulky">Bulky (large furniture, mattresses)</option>
                  </select>
                </div>

                <Button 
                  onClick={calculateSize}
                  disabled={!projectType || !materialType}
                  className="w-full bg-primary-pink hover:bg-cta-accent text-white"
                >
                  Calculate Recommended Size
                </Button>

                {recommendedSize && (
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Recommended Size: {recommendedSize}
                      </h3>
                      <p className="text-green-700 mb-4">
                        Based on your project details, we recommend a {recommendedSize.toLowerCase()}.
                      </p>
                      <Button className="bg-primary-pink hover:bg-cta-accent text-white">
                        <a href="tel:970-888-7274">Call 970-888-7274 for Quote</a>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Dumpster Size Guide</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>12-15 Yard Dumpsters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Perfect for small cleanouts, minor renovations, and garage cleanouts.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>20 Yard Dumpsters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Most popular size. Great for roofing, large cleanouts, and medium renovations.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>30 Yard Dumpsters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Ideal for construction, demolition, and major renovation projects.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Still Unsure?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Call us at 970-888-7274 for personalized recommendations!</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SizeCalculator;