'use client';

import { useParams } from 'next/navigation';
import SkipLink from '@/components/SkipLink';
import AccessibleHeader from '@/components/AccessibleHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import RolloffHero from './RolloffHero';
import LocalBlurb from './LocalBlurb';
import DumpsterSizes from './DumpsterSizes';
import HowItWorks from './HowItWorks';
import RolloffQuoteForm from './RolloffQuoteForm';
import GoogleReviewBar from './GoogleReviewBar';
import RolloffFAQ from './RolloffFAQ';
import { useRolloffTownBySlug } from '@/hooks/useRolloffTowns';
// import { useRolloffFaqs } from '@/hooks/useRolloffFaqs'; // Hook doesn't exist yet
import { generateSchemas } from '@/components/seo/SchemaFactory';

// Hardcoded optimized SEO data for rolloff towns
const getRolloffSEOData = (slug: string) => {
  const seoData: Record<string, { title: string; description: string }> = {
    'berthoud': {
      title: 'Roll-Off Dumpster Rental Berthoud CO | Dumpster Diverz',
      description: 'Dumpster rental in Berthoud, Colorado. 12-30 yard roll-off containers. Same-day delivery, competitive prices. Family-owned since 2008. 970-888-7274'
    },
    'fort-collins': {
      title: 'Roll-Off Dumpster Rental Fort Collins | Dumpster Diverz',
      description: 'Fort Collins dumpster rental services. 12-30 yard roll-off containers for any project. Fast delivery, fair pricing. Local family-owned. 970-888-7274'
    },
    'greeley': {
      title: 'Roll-Off Dumpster Rental Greeley CO | Dumpster Diverz',
      description: 'Greeley roll-off dumpster rentals. 12-30 yard containers for construction and cleanouts. Next-day delivery available. Call 970-888-7274'
    },
    'longmont': {
      title: 'Roll-Off Dumpster Rental Longmont CO | Dumpster Diverz',
      description: 'Longmont dumpster rental services. All sizes available for home and business projects. Reliable delivery, great prices. Call 970-888-7274'
    },
    'loveland': {
      title: 'Roll-Off Dumpster Rental Loveland CO | Dumpster Diverz',
      description: 'Loveland roll-off dumpster rentals. 12-30 yard containers. Perfect for renovations and cleanouts. Family-owned, local service. 970-888-7274'
    },
    'northern-communities': {
      title: 'Dumpster Rental Northern Colorado | Dumpster Diverz',
      description: 'Roll-off dumpster rentals serving all Northern Colorado communities. 12-30 yard sizes. Reliable service since 2008. Call 970-888-7274'
    },
    'severance': {
      title: 'Roll-Off Dumpster Rental Severance CO | Dumpster Diverz',
      description: 'Severance dumpster rental services. All container sizes for residential and commercial projects. Fast, reliable delivery. Call 970-888-7274'
    },
    'wellington': {
      title: 'Roll-Off Dumpster Rental Wellington CO | Dumpster Diverz',
      description: 'Wellington roll-off dumpster rentals. 12-30 yard containers for any project size. Same-day delivery available. Family-owned. 970-888-7274'
    },
    'windsor': {
      title: 'Roll-Off Dumpster Rental Windsor CO | Dumpster Diverz',
      description: 'Windsor dumpster rental services. Complete range of roll-off sizes. Competitive pricing, excellent service since 2008. Call 970-888-7274'
    }
  };

  return seoData[slug] || null;
};

const RolloffTownPage = () => {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || '';
  
  console.log('🎯 === ROLLOFF TOWN PAGE RENDERING ===');
  console.log('🎯 Slug from URL params:', slug);
  if (typeof window !== 'undefined') {
    console.log('🎯 Current window location:', window.location.href);
  }
  
  const { data: town, isLoading, error } = useRolloffTownBySlug(slug || '');
  // const { data: rolloffFaqs } = useRolloffFaqs(); // Hook doesn't exist yet
  const rolloffFaqs: any[] = []; // Placeholder until hook is implemented

  console.log('🎯 Hook results - isLoading:', isLoading);
  console.log('🎯 Hook results - error:', error);
  console.log('🎯 Hook results - town data:', town);
  console.log('🎯 === END ROLLOFF TOWN PAGE DEBUG ===');

  if (isLoading) {
    
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-diverz-purple" aria-label="Loading page content"></div>
      </div>
    );
  }

  if (error) {
    console.error('Error loading town:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Page</h1>
          <p className="text-gray-600">There was an error loading the rolloff service page.</p>
          <p className="text-sm text-gray-500 mt-2">Error: {error.message}</p>
        </div>
      </div>
    );
  }

  if (!town) {
    console.log(`RolloffTownPage - No town found for slug: ${slug}. Available towns should include: berthoud, fort-collins, greeley, longmont, loveland, northern-communities, severance, wellington, windsor`);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested rolloff service page could not be found.</p>
          <p className="text-sm text-gray-500 mt-2">Available locations: Fort Collins, Loveland, Windsor, Northern Communities</p>
          <div className="mt-4 space-y-2">
            <a href="/roll-off-dumpsters/fort-collins" className="block text-diverz-purple hover:underline">Fort Collins</a>
            <a href="/roll-off-dumpsters/loveland" className="block text-diverz-purple hover:underline">Loveland</a>
            <a href="/roll-off-dumpsters/windsor" className="block text-diverz-purple hover:underline">Windsor</a>
            <a href="/roll-off-dumpsters/greeley" className="block text-diverz-purple hover:underline">Greeley</a>
            <a href="/roll-off-dumpsters/longmont" className="block text-diverz-purple hover:underline">Longmont</a>
            <a href="/roll-off-dumpsters/wellington" className="block text-diverz-purple hover:underline">Wellington</a>
            <a href="/roll-off-dumpsters/berthoud" className="block text-diverz-purple hover:underline">Berthoud</a>
          </div>
        </div>
      </div>
    );
  }

  
  const canonicalUrl = `https://www.dumpsterdiverz.com/roll-off-dumpsters/${town.slug}`;

  // Generate enhanced schemas using SchemaFactory
  const enhancedSchemas = generateSchemas({
    town,
    faqs: rolloffFaqs?.map(faq => ({ question: faq.question, answer: faq.answer })),
    pageType: 'rolloff',
    canonicalUrl
  });

  // Use hardcoded optimized SEO data
  const optimizedSEO = getRolloffSEOData(town.slug);
  const seoData = {
    title: optimizedSEO?.title || `Roll-Off Dumpster Rental in ${town.name}, CO | Dumpster Diverz`,
    description: optimizedSEO?.description || `Professional roll-off dumpster rentals in ${town.name}, Colorado. 10-40 yard containers for construction and cleanup projects. Same-day delivery available.`,
    keywords: [
      'rolloff dumpster rental',
      `${town.name} dumpster rental`,
      'construction dumpster',
      `${town.name} Colorado`,
      'roll off containers',
      'debris removal',
      'Northern Colorado'
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Preload hero image for LCP optimization */}
      {town.hero_image_url && (
        <>
          <link
            rel="preload"
            as="image"
            href={town.hero_image_url}
            fetchPriority="high"
          />
          <link rel="preconnect" href="https://images.unsplash.com" />
          <link rel="dns-prefetch" href="//images.unsplash.com" />
        </>
      )}
      
      <SkipLink />
      <SEO
        title={seoData.title}
        description={seoData.description}
        canonical={canonicalUrl}
        keywords={seoData.keywords}
        ogImage={town.hero_image_url}
        structuredData={enhancedSchemas}
      />

      <AccessibleHeader />
      <main id="main">
        <RolloffHero
          townName={town.name}
          heroImage={town.hero_image_url ? `https://cgizicrrzdbzvfniffhw.supabase.co/storage/v1/object/public/${town.hero_image_url}` : undefined}
          heroAltText={town.hero_alt_text || `Roll-off dumpster rental service in ${town.name}, Colorado`}
        />
        <GoogleReviewBar />
        <LocalBlurb content={town.local_blurb || ''} townName={town.name} />
        <DumpsterSizes townName={town.name} />
        <HowItWorks townName={town.name} />
        <RolloffQuoteForm townSlug={town.slug} townName={town.name} />
        <RolloffFAQ townSlug={town.slug} />
      </main>
      <Footer />
    </div>
  );
};

export default RolloffTownPage;
