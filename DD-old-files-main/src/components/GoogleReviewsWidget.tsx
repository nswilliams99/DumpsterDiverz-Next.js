"use client";

import { useEffect, useState, useRef } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const GoogleReviewsWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when section is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Load 200px before entering viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Preconnect to Elfsight domains when intersection happens
  useEffect(() => {
    if (!isVisible) return;

    // Add preconnect hints for faster loading
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://elfsightcdn.com';
    document.head.appendChild(preconnectLink);

    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = 'https://elfsightcdn.com';
    document.head.appendChild(dnsPrefetch);

    return () => {
      document.head.removeChild(preconnectLink);
      document.head.removeChild(dnsPrefetch);
    };
  }, [isVisible]);

  // Load Elfsight script only when visible
  useEffect(() => {
    if (!isVisible || scriptLoaded) return;

    const scriptId = 'elfsight-platform';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        setScriptLoaded(true);
      };
      
      script.onerror = () => {
        console.error('Failed to load Elfsight widget');
        setScriptError(true);
      };
      
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, [isVisible, scriptLoaded]);

  return (
    <section ref={sectionRef} className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {scriptError ? (
          <div className="text-center text-muted-foreground py-8">
            <p>Unable to load reviews at this time.</p>
          </div>
        ) : isVisible && scriptLoaded ? (
          <div 
            className="elfsight-app-59830a05-c475-4033-9501-902f38342bbd" 
            data-elfsight-app-lazy
          />
        ) : isVisible && !scriptLoaded ? (
          <div className="space-y-4 max-w-4xl mx-auto">
            <Skeleton className="h-8 w-48 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
          </div>
        ) : (
          <div className="h-40" aria-hidden="true" />
        )}
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;
