"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

type ChangeFreq = 'always'|'hourly'|'daily'|'weekly'|'monthly'|'yearly'|'never';

interface SitemapUrl {
  url: string;
  priority: number;   // 0.0 - 1.0
  changefreq: ChangeFreq;
  lastmod?: string;   // YYYY-MM-DD
}

const CANONICAL = 'https://www.dumpsterdiverz.com';

const corePages: SitemapUrl[] = [
  { url: `${CANONICAL}/`,                   priority: 1.0, changefreq: 'daily'  },
  { url: `${CANONICAL}/about`,              priority: 0.8, changefreq: 'weekly' },
  { url: `${CANONICAL}/services`,           priority: 0.9, changefreq: 'weekly' },
  { url: `${CANONICAL}/contact`,            priority: 0.7, changefreq: 'monthly'},
  // Service hubs
  { url: `${CANONICAL}/residential`,        priority: 0.9, changefreq: 'weekly' },
  { url: `${CANONICAL}/commercial`,         priority: 0.9, changefreq: 'weekly' },
  { url: `${CANONICAL}/roll-off-dumpsters`, priority: 0.9, changefreq: 'weekly' },
  // Commercial sizes (ONLY 2 & 3 yard)
  { url: `${CANONICAL}/commercial/2-yard`,  priority: 0.8, changefreq: 'weekly' },
  { url: `${CANONICAL}/commercial/3-yard`,  priority: 0.8, changefreq: 'weekly' },
  // Utility pages
  { url: `${CANONICAL}/help`,               priority: 0.7, changefreq: 'weekly' },
  { url: `${CANONICAL}/pay-my-bill`,        priority: 0.5, changefreq: 'monthly'},
  { url: `${CANONICAL}/privacy-policy`,     priority: 0.3, changefreq: 'yearly' },
  { url: `${CANONICAL}/terms-of-service`,   priority: 0.3, changefreq: 'yearly' },
  { url: `${CANONICAL}/hoa-services`,       priority: 0.6, changefreq: 'monthly'},
  { url: `${CANONICAL}/hoa-quote`,          priority: 0.5, changefreq: 'monthly'},
  { url: `${CANONICAL}/hoa/eagle-lake-association`, priority: 0.6, changefreq: 'monthly'},
  { url: `${CANONICAL}/size-calculator`,    priority: 0.6, changefreq: 'monthly'},
];

export default function SitemapXML() {
  const [xml, setXml] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      const today = new Date().toISOString().split('T')[0];

      try {
        // Expect tables:
        //   rolloff_towns (slug text, updated_at timestamptz, is_active bool)
        //   residential_towns (slug text, updated_at timestamptz, is_active bool)
        //   rolloff_sizes (slug text: '12-yard'|'15-yard'|'20-yard'|'30-yard', updated_at timestamptz)
        const [
          rolloffTownsRes,
          residentialTownsRes,
          rolloffSizesRes
        ] = await Promise.all([
          supabase.from('rolloff_towns')
            .select('slug, updated_at')
            .eq('is_active', true),
          supabase.from('residential_towns')
            .select('slug, updated_at')
            .eq('is_active', true),
          supabase.from('rolloff_sizes')
            .select('slug, updated_at')
        ]);

        if (rolloffTownsRes.error) throw rolloffTownsRes.error;
        if (residentialTownsRes.error) throw residentialTownsRes.error;
        if (rolloffSizesRes.error) throw rolloffSizesRes.error;

        const urls: SitemapUrl[] = corePages.map(u => ({ ...u, lastmod: today }));

        // Residential towns -> /residential/:slug (validate slug format)
        (residentialTownsRes.data ?? []).forEach(t => {
          const slug = String(t.slug || '').trim();
          if (!slug || !/^[a-z0-9\-]+$/.test(slug)) return;
          urls.push({
            url: `${CANONICAL}/residential/${slug}`,
            priority: 0.8,
            changefreq: 'weekly',
            lastmod: (t.updated_at?.split('T')[0]) || today
          });
        });

        // Roll-off towns -> /roll-off-dumpsters/:slug (validate slug format)
        (rolloffTownsRes.data ?? []).forEach(t => {
          const slug = String(t.slug || '').trim();
          if (!slug || !/^[a-z0-9\-]+$/.test(slug)) return;
          urls.push({
            url: `${CANONICAL}/roll-off-dumpsters/${slug}`,
            priority: 0.7,
            changefreq: 'weekly',
            lastmod: (t.updated_at?.split('T')[0]) || today
          });
        });

        // Roll-off sizes -> flat: /rolloff-12-yard, etc. (only valid sizes)
        const allowedSizes = new Set(['12-yard', '15-yard', '20-yard', '30-yard']);
        (rolloffSizesRes.data ?? []).forEach(s => {
          const slug = String(s.slug || '').trim();
          if (!allowedSizes.has(slug)) return;
          urls.push({
            url: `${CANONICAL}/rolloff-${slug}`,
            priority: 0.6,
            changefreq: 'monthly',
            lastmod: (s.updated_at?.split('T')[0]) || today
          });
        });

        // Build XML
        const body = urls.map(u => {
          const lastmod = u.lastmod || today;
          const priority = Math.max(0, Math.min(1, u.priority)).toFixed(1);
          return (
`  <url>
    <loc>${u.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
          );
        }).join('\n');

        const xmlDoc =
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;

        setXml(xmlDoc);
      } catch (e: any) {
        console.error('Sitemap generation error:', e);
        setError(e?.message || 'Unknown error generating sitemap');
      }
    })();
  }, []);

  // UI (keep simple; primary goal is to render XML & allow download)
  if (error) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">XML Sitemap Generator</h1>
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!xml) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">XML Sitemap Generator</h1>
        <p>Generating sitemap...</p>
      </div>
    );
  }

  const download = () => {
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">XML Sitemap</h1>
      <p className="mb-4">Generated from live database content and aligned to your router.</p>
      <pre className="bg-muted p-4 rounded-lg overflow-auto text-sm">{xml}</pre>
      <button
        onClick={download}
        className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90"
      >
        Download sitemap.xml
      </button>
    </div>
  );
}
