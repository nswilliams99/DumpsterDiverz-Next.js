import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  trailingSlash: false,
  allowedDevOrigins: ['*.replit.dev', '*.picard.replit.dev', '*.kirk.replit.dev', '*.janeway.replit.dev', '*.spock.replit.dev', '127.0.0.1', 'localhost'],
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cgizicrrzdbzvfniffhw.supabase.co',
        port: '',
        pathname: '/storage/v1/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/placeholders/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/lovable-uploads/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:filename.(svg|png|jpg|jpeg|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  async redirects() {
    return [
      {
        source: "/residential-fort-collins",
        destination: "/residential/fort-collins",
        permanent: true,
      },
      {
        source: "/residential-greeley",
        destination: "/residential/greeley",
        permanent: true,
      },
      {
        source: "/residential-wellington",
        destination: "/residential/wellington",
        permanent: true,
      },
      {
        source: "/residential-windsor",
        destination: "/residential/windsor",
        permanent: true,
      },
      {
        source: "/residential-north-county",
        destination: "/residential/north-county",
        permanent: true,
      },
      {
        source: "/residential-northern-communities",
        destination: "/residential/north-county",
        permanent: true,
      },
      {
        source: "/residential-severance",
        destination: "/residential/severance",
        permanent: true,
      },
      {
        source: "/northern-communities",
        destination: "/residential/north-county",
        permanent: true,
      },
      {
        source: "/berthoud",
        destination: "/residential",
        permanent: true,
      },
      {
        source: "/longmont",
        destination: "/residential",
        permanent: true,
      },
      {
        source: "/loveland",
        destination: "/residential",
        permanent: true,
      },
      {
        source: "/rolloffs",
        destination: "/roll-off-dumpsters",
        permanent: true,
      },
      {
        source: "/rolloffs/:path*",
        destination: "/roll-off-dumpsters/:path*",
        permanent: true,
      },
      {
        source: "/rolloff-dumpsters/12-yard",
        destination: "/rolloff-12-yard",
        permanent: true,
      },
      {
        source: "/rolloff-dumpsters/15-yard",
        destination: "/rolloff-15-yard",
        permanent: true,
      },
      {
        source: "/rolloff-dumpsters/20-yard",
        destination: "/rolloff-20-yard",
        permanent: true,
      },
      {
        source: "/rolloff-dumpsters/30-yard",
        destination: "/rolloff-30-yard",
        permanent: true,
      },
      {
        source: "/rolloff-dumpsters/:town",
        destination: "/roll-off-dumpsters/:town",
        permanent: true,
      },
      {
        source: "/commercial/4-yard",
        destination: "/commercial",
        permanent: true,
      },
      {
        source: "/commercial/6-yard",
        destination: "/commercial",
        permanent: true,
      },
      {
        source: "/commercial/8-yard",
        destination: "/commercial",
        permanent: true,
      },
      {
        source: "/commercial/10-yard",
        destination: "/commercial",
        permanent: true,
      },
      {
        source: "/commercial/40-yard",
        destination: "/commercial",
        permanent: true,
      },
      {
        source: "/roll-off-dumpsters/10-yard",
        destination: "/roll-off-dumpsters",
        permanent: true,
      },
      {
        source: "/roll-off-dumpsters/40-yard",
        destination: "/roll-off-dumpsters",
        permanent: true,
      },
      {
        source: "/rolloff-10-yard",
        destination: "/roll-off-dumpsters",
        permanent: true,
      },
      {
        source: "/rolloff-40-yard",
        destination: "/roll-off-dumpsters",
        permanent: true,
      },
      {
        source: "/recycling",
        destination: "/residential",
        permanent: true,
      },
      {
        source: "/knowledge-base",
        destination: "/help",
        permanent: true,
      },
      {
        source: "/knowledge-base/:slug",
        destination: "/help/:slug",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
