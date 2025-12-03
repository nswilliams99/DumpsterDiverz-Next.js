import { MetadataRoute } from 'next';
import { createServerSupabaseClient } from '@/lib/supabase-server';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.dumpsterdiverz.com';
  const currentDate = new Date();
  
  const supabase = await createServerSupabaseClient();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roll-off-dumpsters`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/commercial/2-yard`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/commercial/3-yard`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/rolloff-12-yard`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rolloff-15-yard`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rolloff-20-yard`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rolloff-30-yard`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hoa-services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hoa-quote`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hoa/eagle-lake-association`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/size-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pay-my-bill`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const residentialTownPages: MetadataRoute.Sitemap = [];
  const { data: residentialTowns } = await supabase
    .from('residential_towns')
    .select('slug, updated_at')
    .eq('is_active', true);

  if (residentialTowns) {
    residentialTowns.forEach((town) => {
      residentialTownPages.push({
        url: `${baseUrl}/residential/${town.slug}`,
        lastModified: town.updated_at ? new Date(town.updated_at) : currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  }

  const rolloffTownSlugs = [
    'fort-collins',
    'windsor',
    'wellington',
    'greeley',
    'severance',
    'loveland',
    'berthoud',
    'longmont',
    'northern-communities'
  ];

  const rolloffTownPages: MetadataRoute.Sitemap = rolloffTownSlugs.map((slug) => ({
    url: `${baseUrl}/roll-off-dumpsters/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const knowledgeBasePages: MetadataRoute.Sitemap = [];
  const { data: kbArticles } = await supabase
    .from('kb_articles')
    .select('slug, updated_at')
    .eq('is_published', true);

  if (kbArticles) {
    kbArticles.forEach((article) => {
      knowledgeBasePages.push({
        url: `${baseUrl}/help/${article.slug}`,
        lastModified: article.updated_at ? new Date(article.updated_at) : currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  }

  return [
    ...staticPages,
    ...residentialTownPages,
    ...rolloffTownPages,
    ...knowledgeBasePages,
  ];
}
