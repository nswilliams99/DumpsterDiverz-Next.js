import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_vercel/',
          '/.well-known/',
          '/lovable-uploads/temp/',
          '/*?utm_*',
          '/*?ref=*',
          '/*?source=*',
        ],
      },
    ],
    sitemap: 'https://www.dumpsterdiverz.com/sitemap.xml',
  };
}
