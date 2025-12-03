"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy, Terms & SMS Terms | Dumpster Diverz"
        description="Learn how Dumpster Diverz collects, protects, and uses your data. Includes our full Privacy Policy, SMS Terms, and legal service conditions."
        canonical="https://www.dumpsterdiverz.com/privacy-policy"
      />
      <Header />
      <main className="py-16">
        <div className="max-w-[768px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 font-poppins text-foreground">
            Privacy Policy
          </h1>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-inter">
            <em>Effective Date: June 25, 2025</em>
          </p>
          
          <div className="space-y-8 font-inter">
            <p className="text-base text-foreground leading-relaxed mb-8">
              Dumpster Diverz LLC maintains strict privacy policies, ensuring that personal information and mobile information of our users and members is not sold, shared, rented, released, or traded to third parties for marketing/promotional purposes.
            </p>

            {/* Consent and Control Notice */}
            <div className="bg-accent/10 border-l-4 border-primary p-6 rounded-lg mb-8">
              <h3 className="text-lg font-medium text-foreground mb-3">Consent and Control:</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                We obtain explicit consent via our cookie consent banner. You may accept, decline, or customize your consent preferences at any time. Users can withdraw consent or request the removal of their data by contacting us through the details provided in our Privacy Policy.
              </p>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                By continuing to use this site, you acknowledge that you have read and understood these terms and our use of Google Analytics and associated features.
              </p>
              <p className="text-sm text-foreground">
                Please see our full Privacy Policy for more detailed information about data collection, use, and your rights.
              </p>
            </div>

            <div className="space-y-8">
              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  1. Information We Collect
                </h2>
                <div className="text-base text-foreground leading-relaxed">
                  <p className="mb-4">
                    Dumpster Diverz LLC ("we," "our," or "us") collects both personal and non-personal data to provide and improve our services.
                  </p>
                  <p className="mb-2">Personal information may include:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Mailing address</li>
                    <li>Service location</li>
                    <li>Billing preferences</li>
                    <li>IP address, browser info, and site behavior</li>
                  </ul>
                  <p>Non-personal data includes analytics like session duration and general site usage patterns.</p>
                </div>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  2. How We Collect Information
                </h2>
                <ul className="list-disc pl-6 space-y-1 text-base text-foreground leading-relaxed">
                  <li>Information you provide directly through forms, emails, or quote requests</li>
                  <li>Automatically collected via cookies, analytics tools, or embedded widgets</li>
                  <li>From third-party tools integrated with our platform (e.g., scheduling tools)</li>
                </ul>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-1 text-base text-foreground leading-relaxed">
                  <li>To deliver and manage waste services</li>
                  <li>To respond to service inquiries</li>
                  <li>To handle billing and account management</li>
                  <li>To improve customer experience and site usability</li>
                  <li>For fraud prevention, compliance, and legal obligations</li>
                </ul>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  4. Sharing Your Information
                </h2>
                <div className="text-base text-foreground leading-relaxed">
                  <p className="mb-2">We do not sell or trade your personal data. We may share information only with:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Legal authorities when required</li>
                    <li>Contractors who operate on our behalf under confidentiality agreements</li>
                    <li>Technology vendors supporting site operations</li>
                  </ul>
                </div>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  5. SMS Terms & Conditions
                </h2>
                <div className="space-y-6 text-base text-foreground leading-relaxed">
                  <p>Dumpster Diverz LLC maintains strict privacy policies. Personal information and mobile information of our users and members will never be sold, shared, rented, released, or traded to third parties for marketing or promotional purposes.</p>

                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Opt-In Statement</h3>
                    <p>By submitting your phone number through a form on our website, you consent to receive text messages from Dumpster Diverz at the number provided. These may include service notifications, appointment confirmations, payment reminders, and promotional offers. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. You may unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). For help, reply HELP. Please also review our Privacy Policy & Terms.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Types of SMS Messages You May Receive</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Service notifications</li>
                      <li>Appointment confirmations</li>
                      <li>Payment reminders</li>
                      <li>Marketing and promotional offers</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Message Frequency & Costs</h3>
                    <p>Message frequency varies depending on your service interactions. Standard message and data rates may apply based on your wireless plan.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Opt-Out Information</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>To stop receiving texts, reply STOP to any message.</li>
                      <li>For customer support, reply HELP or email{' '}
                        <a 
                          href="mailto:dumpsterdiverz@gmail.com" 
                          className="text-primary hover:text-primary/80 transition-colors underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          dumpsterdiverz@gmail.com
                        </a>.
                      </li>
                      <li>For privacy-related inquiries, please refer to our Privacy Policy.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2 text-foreground">Contact Information</h3>
                    <div className="space-y-1">
                      <p><strong>Business Name:</strong> Dumpster Diverz LLC</p>
                      <p><strong>Email:</strong>{' '}
                        <a 
                          href="mailto:dumpsterdiverz@gmail.com" 
                          className="text-primary hover:text-primary/80 transition-colors underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          dumpsterdiverz@gmail.com
                        </a>
                      </p>
                      <p><strong>Phone:</strong> (970) 888-7274</p>
                      <p><strong>Address:</strong> 1100 South St Louis Ave, Loveland, CO 80537</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  6. Cookies and Tracking
                </h2>
                <p className="text-base text-foreground leading-relaxed">We use cookies to enhance site experience and monitor traffic. You can disable cookies via browser settings, though it may impact functionality.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  7. Data Security
                </h2>
                <p className="text-base text-foreground leading-relaxed">We use encryption, firewalls, and limited access protocols to safeguard your information. No method of transmission over the Internet is 100% secure, but we strive to protect your data.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  8. Your Rights
                </h2>
                <div className="text-base text-foreground leading-relaxed">
                  <p className="mb-2">Depending on your location, you may:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>Request access or deletion of your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Object to data use</li>
                    <li>Request data portability (transfer of your data to another provider)</li>
                  </ul>
                  <p>
                    Contact us to exercise these rights:{' '}
                    <a 
                      href="mailto:dumpsterdiverz@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dumpsterdiverz@gmail.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  9. Data Retention
                </h2>
                <p className="text-base text-foreground leading-relaxed">We retain information only as long as necessary to provide services, meet legal obligations, and support business functions. You may request deletion, subject to legal and operational limitations.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  10. Scope of Policy
                </h2>
                <p className="text-base text-foreground leading-relaxed">This Privacy Policy applies to all users of our website and customers of Dumpster Diverz services, including trash pickup and dumpster rentals. Future tools (e.g. mobile apps or client portals) will follow this policy unless otherwise stated.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  11. Service Usage Data
                </h2>
                <p className="text-base text-foreground leading-relaxed">In addition to website data, we may store address-based service data (like delivery instructions, pickup history, or service modifications). This helps us fulfill services accurately and efficiently.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  12. Third-Party Tools
                </h2>
                <p className="text-base text-foreground leading-relaxed">We use tools like Google Analytics, embedded forms, and scheduling widgets. These may collect non-personal data under their own privacy terms.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  13. Children's Privacy
                </h2>
                <p className="text-base text-foreground leading-relaxed">Our services are not intended for users under 13. If we become aware of collecting such data, we will delete it immediately.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  14. Marketing Communications
                </h2>
                <p className="text-base text-foreground leading-relaxed">You may receive emails or messages from us. You can opt out at any time using the unsubscribe link or by emailing us directly.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  15. Do Not Track
                </h2>
                <p className="text-base text-foreground leading-relaxed">Our website does not currently respond to Do Not Track (DNT) signals from browsers.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  16. Limitation of Liability
                </h2>
                <p className="text-base text-foreground leading-relaxed">We are not liable for unauthorized access or loss of personal information due to third-party actions or force majeure events beyond our control.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  17. Governing Law
                </h2>
                <p className="text-base text-foreground leading-relaxed">This policy is governed by the laws of the State of Colorado. All disputes shall be resolved in courts located in Larimer County, Colorado.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  18. Changes to This Policy
                </h2>
                <p className="text-base text-foreground leading-relaxed">We may revise this policy at any time. Updates will be posted with a revised "Effective Date" at the top of the page.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  19. Your Consent
                </h2>
                <p className="text-base text-foreground leading-relaxed">By using our website or services, you agree to the terms of this Privacy Policy.</p>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  20. Privacy Disclosure and User Data Collection Acknowledgment
                </h2>
                <div className="text-base text-foreground leading-relaxed space-y-4">
                  <p>
                    This website uses Google Analytics, including advanced features such as Google Signals, User-ID, and Ads Personalization, to collect anonymized and pseudonymized data about visitor behavior, page views, user interactions, and site usage patterns.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-foreground">Google Analytics:</h4>
                      <p>We collect standard website usage data, anonymized IP addresses, and usage statistics.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2 text-foreground">Google Signals:</h4>
                      <p>If you are signed into a Google account and have consented to personalized advertising, we may collect additional information such as end-user location, search history, YouTube history, and data from sites that partner with Google to better understand visitor behaviors across devices and enhance personalized ad experiences.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2 text-foreground">User-ID:</h4>
                      <p>If applicable, we may assign unique identifiers to track user interactions across multiple devices and sessions, enhancing our ability to analyze user engagement and improve site performance.</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2 text-foreground">Ads Personalization:</h4>
                      <p>Data collected may be used to personalize advertising content shown to users, provided explicit consent has been given.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="border-b border-border pb-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground font-poppins">
                  21. Contact Us
                </h2>
                <div className="text-base text-foreground leading-relaxed space-y-2">
                  <p><strong>Dumpster Diverz LLC</strong></p>
                  <p>1100 South St Louis Ave, Loveland, CO 80537</p>
                  <p>
                    Email:{' '}
                    <a 
                      href="mailto:dumpsterdiverz@gmail.com" 
                      className="text-primary hover:text-primary/80 transition-colors underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      dumpsterdiverz@gmail.com
                    </a>
                  </p>
                  <p>Phone: (970) 888-7274</p>
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

export default PrivacyPolicy;
