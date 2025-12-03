import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/QueryProvider";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dumpsterdiverz.com'),
  title: {
    default: 'Dumpster Diverz - Waste Management Services in Northern Colorado',
    template: '%s | Dumpster Diverz',
  },
  description: "Professional waste management services including residential, commercial, and roll-off dumpsters in Fort Collins, Windsor, Wellington, Greeley, and surrounding areas.",
  keywords: ['dumpster rental', 'waste management', 'Northern Colorado', 'Fort Collins', 'Windsor', 'Wellington', 'Greeley', 'trash service', 'recycling', 'roll-off dumpsters'],
  authors: [{ name: 'Dumpster Diverz' }],
  creator: 'Dumpster Diverz',
  publisher: 'Dumpster Diverz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.dumpsterdiverz.com',
    siteName: 'Dumpster Diverz',
    title: 'Dumpster Diverz - Waste Management Services in Northern Colorado',
    description: 'Professional waste management services including residential, commercial, and roll-off dumpsters in Fort Collins, Windsor, Wellington, Greeley, and surrounding areas.',
    images: [
      {
        url: '/images/og/home.webp',
        width: 1200,
        height: 630,
        alt: 'Dumpster Diverz - Professional Waste Management in Northern Colorado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Diverz - Waste Management Services in Northern Colorado',
    description: 'Professional waste management services including residential, commercial, and roll-off dumpsters in Fort Collins, Windsor, Wellington, Greeley, and surrounding areas.',
    images: ['/images/og/home.webp'],
    creator: '@DumpsterDiverz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.dumpsterdiverz.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Critical Resource Hints for Core Web Vitals */}
        {/* Preconnect to critical third-party origins - establishes early connection */}
        <link rel="preconnect" href="https://cgizicrrzdbzvfniffhw.supabase.co" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://app.trashjoes.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS Prefetch for additional third-party domains - faster DNS resolution */}
        <link rel="dns-prefetch" href="//cgizicrrzdbzvfniffhw.supabase.co" />
        <link rel="dns-prefetch" href="//app.trashjoes.com" />
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//elfsightcdn.com" />
        
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C0E6YGLW9W"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C0E6YGLW9W');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <QueryProvider>
          <TooltipProvider>
            <div className="relative z-10">
              {children}
            </div>
            <Toaster />
            <Sonner />
            <Analytics />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
