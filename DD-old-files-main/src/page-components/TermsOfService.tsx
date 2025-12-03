"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms of Service | Dumpster Diverz"
        description="Review the Terms of Service for Dumpster Diverz, including service rules, liability, cancellation policy, and billing expectations."
        canonical="https://www.dumpsterdiverz.com/terms-of-service"
      />
      <Header />
      <main className="py-16">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 font-poppins text-black">
            Terms of Service
          </h1>
          
          <p className="text-sm text-gray-600 leading-relaxed mb-8 font-inter">
            <em>Effective Date: June 25, 2025</em>
          </p>
          
          <div className="space-y-8 font-inter">
            <p className="text-base text-black leading-relaxed mb-8">
              By using Dumpster Diverz LLC services, you agree to these Terms of Service. Please read them carefully before booking any services.
            </p>

            <div className="space-y-8">
              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-black font-poppins">
                  1. Services Offered
                </h2>
                <div className="text-base text-black leading-relaxed">
                  <p className="mb-2">Dumpster Diverz LLC provides:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Weekly residential trash collection</li>
                    <li>Commercial waste services</li>
                    <li>Roll-off dumpster rentals for cleanup, remodeling, and construction projects</li>
                    <li>HOA and multi-unit pickup options</li>
                  </ul>
                  <p>Service availability may vary based on location and operational capacity.</p>
                </div>
              </section>

              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-black font-poppins">
                  2. Customer Responsibilities
                </h2>
                <div className="text-base text-black leading-relaxed">
                  <p className="mb-2">By using our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Provide accurate information during booking</li>
                    <li>Ensure clear, safe, and accessible placement location (e.g., driveways or curbs)</li>
                    <li>Avoid placing hazardous materials, electronics, chemicals, batteries, or flammables in any dumpster</li>
                    <li>Prevent overflow or debris exceeding the fill line or weight limits</li>
                    <li>Keep lids closed on residential carts to avoid spillage</li>
                    <li>Obtain HOA or landlord approval for placements where applicable</li>
                  </ul>
                  <p>Failure to comply may result in extra fees, service refusal, or removal without refund.</p>
                </div>
              </section>

              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-black font-poppins">
                  3. Payment Terms
                </h2>
                <div className="text-base text-black leading-relaxed">
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Full payment is due at the time of booking unless otherwise stated</li>
                    <li>Accepted methods include credit/debit cards and bank transfers</li>
                    <li>Late payments may result in suspended or delayed service</li>
                    <li>Services are non-refundable once completed</li>
                    <li>Roll-off rentals are not considered booked until payment clears and placement is confirmed</li>
                  </ul>
                </div>
              </section>

              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-black font-poppins">
                  4. Cancellations and Refunds
                </h2>
                <div className="text-base text-black leading-relaxed">
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li><strong>Residential Service:</strong> Cancel at least 24 hours before your pickup day to avoid charges</li>
                    <li><strong>Roll-Offs:</strong> Cancel at least 24 hours before scheduled delivery for a refund (less card processing fees)</li>
                    <li>Same-day cancellations may incur a dry-run or delivery fee</li>
                    <li>No refunds once service is performed or dumpster is delivered</li>
                  </ul>
                </div>
              </section>

              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-black font-poppins">
                  5. Limitation of Liability
                </h2>
                <div className="text-base text-black leading-relaxed">
                  <p className="mb-2">Dumpster Diverz LLC is not liable for:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Property damage resulting from container placement on driveways, lawns, or pavement</li>
                    <li>Delays due to weather, traffic, equipment issues, or acts of nature</li>
                    <li>Injuries or damages caused by misuse of dumpsters or blocked access</li>
                  </ul>
                  <p>By using our services, you agree to assume all responsibility for safe placement and use of containers. Liability is strictly limited to the amount paid for the specific service.</p>
                </div>
              </section>

              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-black font-poppins">
                  6. Changes to Terms
                </h2>
                <p className="text-base text-black leading-relaxed">
                  We reserve the right to update these Terms at any time. The latest version will always be available on this page. Updates are effective immediately upon posting and are reflected with a new "Effective Date" at the top of the page.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-black font-poppins">
                  7. Governing Law
                </h2>
                <p className="text-base text-black leading-relaxed">
                  These Terms are governed by the laws of the State of Colorado. Any legal disputes must be resolved in courts located within Larimer County, Colorado.
                </p>
              </section>

              <section className="border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-black font-poppins">
                  8. Contact Information
                </h2>
                <div className="text-base text-black leading-relaxed space-y-2">
                  <p><strong>Dumpster Diverz LLC</strong></p>
                  <p>1100 South St Louis Ave, Loveland, CO 80537</p>
                  <p>
                    Email:{' '}
                    <a 
                      href="mailto:dumpsterdiverz@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 transition-colors underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dumpsterdiverz@gmail.com
                    </a>
                  </p>
                  <p>
                    Phone:{' '}
                    <a 
                      href="tel:970-888-7274" 
                      className="text-blue-600 hover:text-blue-800 transition-colors underline"
                    >
                      (970) 888-7274
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default TermsOfService;
