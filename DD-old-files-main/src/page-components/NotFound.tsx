"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Phone, Mail, FileText, Trash2, Building2, MapPin } from "lucide-react";

const NotFound = () => {
  const pathname = usePathname() || "";
  const path = pathname.toLowerCase();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  // Suggest correct URLs based on the attempted path
  const getSuggestions = () => {
    const suggestions = [];

    if (path.includes('rolloff') || path.includes('dumpster')) {
      suggestions.push({
        title: 'Roll-Off Dumpster Rentals',
        path: '/roll-off-dumpsters',
        description: 'Temporary dumpster rentals for construction and cleanup projects'
      });
    }

    if (path.includes('residential')) {
      suggestions.push({
        title: 'Residential Waste Services',
        path: '/residential',
        description: 'Weekly pickup services for homes and communities'
      });
    }

    if (path.includes('commercial')) {
      suggestions.push({
        title: 'Commercial Waste Services', 
        path: '/commercial',
        description: 'Regular waste collection for businesses'
      });
    }

    if (path.includes('windsor')) {
      suggestions.push({
        title: 'Windsor Residential Service',
        path: '/residential/windsor',
        description: 'Weekly residential pickup in Windsor, CO'
      });
    }

    if (path.includes('fort-collins') || path.includes('fortcollins')) {
      suggestions.push({
        title: 'Fort Collins Residential Service',
        path: '/residential/fort-collins', 
        description: 'Weekly residential pickup in Fort Collins, CO'
      });
    }

    if (path.includes('greeley')) {
      suggestions.push({
        title: 'Greeley Residential Service',
        path: '/residential/greeley',
        description: 'Weekly residential pickup in Greeley, CO'
      });
    }

    if (path.includes('wellington')) {
      suggestions.push({
        title: 'Wellington Residential Service',
        path: '/residential/wellington',
        description: 'Weekly residential pickup in Wellington, CO'
      });
    }

    // Default suggestions if no matches
    if (suggestions.length === 0) {
      suggestions.push(
        {
          title: 'Home',
          path: '/',
          description: 'Return to our homepage'
        },
        {
          title: 'All Services',
          path: '/services',
          description: 'View all our waste management services'
        },
        {
          title: 'Contact Us',
          path: '/contact',
          description: 'Get in touch for personalized assistance'
        }
      );
    }

    return suggestions;
  };

  const suggestions = getSuggestions();

  const commonPages = [
    { title: 'Home', path: '/', icon: Home, description: 'Back to homepage' },
    { title: 'Residential Services', path: '/residential', icon: Trash2, description: 'Weekly trash & recycling' },
    { title: 'Commercial Services', path: '/commercial', icon: Building2, description: 'Business waste solutions' },
    { title: 'Roll-Off Dumpsters', path: '/roll-off-dumpsters', icon: MapPin, description: 'Temporary rentals' },
    { title: 'All Services', path: '/services', icon: FileText, description: 'Complete service list' },
    { title: 'Contact Us', path: '/contact', icon: Mail, description: 'Get in touch' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary-pink/5 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <CardTitle className="text-8xl font-bold text-primary-pink">404</CardTitle>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cta-accent rounded-full animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-dark-neutral mb-3">Oops! Page Not Found</h1>
            <p className="text-dark-neutral/70 max-w-md mx-auto">
              We couldn't find the page you're looking for. The URL <code className="px-2 py-1 bg-light-neutral/50 rounded text-primary-pink text-sm">{pathname}</code> doesn't exist on our site.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {suggestions.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-dark-neutral mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-pink" />
                  Looking for this?
                </h2>
                <div className="grid gap-3">
                  {suggestions.map((suggestion, index) => (
                    <Link key={index} href={suggestion.path} className="block group">
                      <div className="p-4 border-2 border-light-neutral rounded-lg hover:border-primary-pink hover:bg-primary-pink/5 transition-all duration-200 hover:shadow-md">
                        <h3 className="font-semibold text-dark-neutral mb-1 group-hover:text-primary-pink transition-colors">{suggestion.title}</h3>
                        <p className="text-sm text-dark-neutral/70">{suggestion.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-xl font-semibold text-dark-neutral mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary-pink" />
                Popular Pages
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {commonPages.map((page, index) => {
                  const Icon = page.icon;
                  return (
                    <Link key={index} href={page.path} className="block group">
                      <div className="p-4 border border-light-neutral rounded-lg hover:border-primary-pink hover:bg-primary-pink/5 transition-all duration-200 h-full">
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 text-primary-pink flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-medium text-dark-neutral mb-0.5 group-hover:text-primary-pink transition-colors">{page.title}</h3>
                            <p className="text-xs text-dark-neutral/70">{page.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-light-neutral">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="flex-1 h-12">
                  <Link href="/" className="flex items-center justify-center gap-2">
                    <Home className="w-4 h-4" />
                    Return Home
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1 h-12">
                  <a href="tel:(970) 888-7274" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 888-7274
                  </a>
                </Button>
              </div>
              <p className="text-center text-sm text-dark-neutral/60 mt-4">
                Need help? Our team is available to assist you with any questions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
