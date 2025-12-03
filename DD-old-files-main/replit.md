# Dumpster Diverz - Next.js Application

## Overview

Dumpster Diverz is a Next.js 15 application providing professional waste management services in Northern Colorado. The platform offers residential trash pickup, commercial dumpster rentals, and roll-off container services with online ordering, location-based content, and an advanced search system. It emphasizes local service, transparent pricing, and eco-friendly solutions, utilizing Supabase for dynamic content management and Radix UI for accessible user interfaces. The project aims to provide comprehensive SEO optimization and a seamless user experience.

## Recent Changes

**November 24, 2025 - Routing Architecture Fix & Homepage Static Import Solution**
- Resolved critical Next.js routing conflict where both Pages Router (src/pages/) and App Router (src/app/) existed simultaneously
- Pages Router was taking priority, causing all App Router edits to be ignored on live site
- Renamed src/pages/ to src/page-components/ to preserve component code while removing routing behavior
- Updated all 35+ imports from @/pages/ to @/page-components/ across App Router files
- Fixed homepage "Invalid hook call" error by changing from dynamic to static import in src/app/page.tsx:
  - Changed from `const IndexPage = dynamic(() => import("@/page-components/Index"))` to `import IndexPage from '@/page-components/Index'`
  - Root route "/" requires static import in Next.js App Router environment while other routes work fine with dynamic imports
  - Homepage now loads successfully with clean browser console (no hydration errors)
- Fixed "Explore Commercial Dumpster Sizes" section styling in DynamicCommercialSizeCards.tsx:
  - Changed background from dark charcoal to bg-gray-700 (#374151) for better readability
  - Updated description text from text-white/90 to text-gray-100 for optimal contrast
  - Achieved WCAG AA compliance with 10.3:1 contrast ratio (white text) and 9.5:1 (gray-100 text)
- Cleared all build caches (.next, node_modules/.cache) and verified successful compilation
- Both homepage (/) and commercial page (/commercial) confirmed functional via screenshots with clean console logs

**November 21, 2025 - Brand Color Consistency Audit & Fixes**
- Fixed critical color inconsistency: changed `--primary` from purple (303 81% 64%) to vibrant hot pink (340 82% 52%)
- Updated `--color-primary-pink` to brand hot pink (340 82% 52%) ≈ #E91E63
- Replaced all hardcoded #D11768 hex codes with Tailwind utility classes
- Updated text-purple-* classes to text-white/90 and text-white/80 for better readability on pink backgrounds
- Fixed form focus states: replaced purple-400/500 with ring-primary and border-primary
- Updated body::before background gradient to use correct brand color
- Fixed theme-color meta tags in SEO.tsx and About.tsx
- All 40+ components now display consistent vibrant hot pink across buttons, CTAs, badges, and accents
- Legacy utility classes (bg-diverz-purple, text-diverz-purple) correctly reference updated CSS variables
- Corrected initial mistake of applying too-light pastel pink (327 87% 62%); now uses bold, saturated hot pink

**November 21, 2025 - Replit Migration & Hydration Fixes**
- Fixed critical hydration mismatch in Index.tsx by moving `window.location.search` to useEffect
- Added `allowedDevOrigins` configuration to next.config.ts for Replit iframe compatibility
- Removed Google verification placeholder from layout.tsx
- Created `useHOAQuotes.ts` hook for Supabase integration (similar to useRolloffQuotes.ts)
- Updated HOAQuoteForm.tsx to submit directly to Supabase `hoa_quote_requests` table instead of simulated API
- All form fields properly mapped: contact_name, hoa_name, email, phone, town, num_units, and notes (containing service type, current provider, address, additional info)
- Dev server running successfully on port 5000 with no hydration or cross-origin warnings
- Site fully functional in Replit environment with live Supabase integration

**November 19, 2025 - URL Structure & Redirects Enhancement**
- Configured trailing slash consistency (`trailingSlash: false`) for clean, uniform URLs
- Enhanced 404 page with improved visual design and navigation
- Added intelligent URL suggestions based on attempted path (e.g., suggests "/residential/fort-collins" if path contains "fort-collins")
- Implemented Popular Pages grid with icons (Home, Residential, Commercial, Roll-Off, Services, Contact)
- Added gradient background and animated accent dot to 404 page
- Fixed Link component bug (changed React Router `to` to Next.js `href`)
- Comprehensive 301 redirect configuration already in place (50+ redirects in next.config.ts)
- All URLs are clean and descriptive with no random IDs (e.g., `/residential/windsor`, `/roll-off-dumpsters/fort-collins`)
- Dynamic routes use semantic slugs: `/help/[slug]`, `/roll-off-dumpsters/[slug]`

**November 19, 2025 - Performance Optimization Suite**
- Implemented next/font/google for Poppins and Inter fonts with display='swap' optimization
- Self-hosted fonts eliminate external Google Fonts requests and reduce FOUT
- Configured Next.js Image optimization with Supabase domain
- Enabled WebP and AVIF formats for 30-50% smaller image files
- Implemented comprehensive caching headers for static assets (1-year immutable cache)
- All 30+ App Router pages already use next/dynamic for code splitting
- Installed @next/bundle-analyzer for JavaScript bundle analysis
- Created optional Image component wrapper for future next/image migration

**November 19, 2025 - Dynamic Sitemap & Robots.txt**
- Implemented Next.js 15 dynamic sitemap using MetadataRoute.Sitemap API
- Created server-side Supabase client using @supabase/ssr
- Dynamic sitemap with hourly revalidation (3600 seconds)
- Generates 36 URLs from database (21 static + 6 residential + 9 roll-off towns)
- Dynamic robots.txt with proper crawl directives

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application is built with Next.js 15 App Router and TypeScript, utilizing a component-based architecture. Styling is handled with Tailwind CSS, a custom design system, and Radix UI primitives for accessible components, further enhanced by shadcn/ui. TanStack React Query manages server state and caching, while client-side state uses React hooks. Routing leverages Next.js file-based routing with dynamic routes. Performance optimizations include dynamic imports, an `OptimizedImage` component, and critical CSS inlining. SEO is managed with a comprehensive system including structured data, meta tag management, and sitemap generation.

### Backend Architecture
Supabase serves as the primary backend, providing a PostgreSQL database, file storage, and real-time subscriptions. Row Level Security (RLS) is implemented for data access control. Key data models include services, locations, FAQs, testimonials, page sections, quote requests, and commercial/rolloff sizes. Content management is dynamic, with page sections and image assets stored in Supabase. An enhanced search system is in place, leveraging vector embeddings for semantic capabilities across various content types.

### Design System
The design system features a custom color palette including Primary Brand Pink (`hsl(340 82% 52%)` ≈ #E91E63 - vibrant hot pink), CTA Accent (same as primary), and Eco Green (`hsl(148 17% 70%)`), along with a neutral palette. Typography uses Poppins for headings and Inter for body text, with `next/font` for optimization. Layouts are container-based, responsive, and utilize Tailwind for consistent spacing and grid systems.

### Accessibility Features
Accessibility is a core focus, including keyboard navigation, focus management (e.g., `AccessibleHeader`, `SkipLink` components), and screen reader support with semantic HTML and ARIA attributes. Visual accessibility is ensured through high contrast colors, focus indicators, and responsive text sizing.

### Error Handling & Resilience
The application incorporates React Error Boundaries for graceful error handling, custom fallback components, and retry mechanisms. Loading states are managed with skeleton components and Suspense boundaries. Form validation is robust, utilizing React Hook Form with Zod resolvers for client-side validation and user-friendly error messages.

## External Dependencies

### Third-Party Services
- **Supabase**: Primary backend for PostgreSQL database, file storage, and real-time features. URL: `https://cgizicrrzdbzvfniffhw.supabase.co`
- **Vercel Analytics**: For performance and user analytics.
- **Google Analytics (GA4)**: User behavior tracking (ID: `G-C0E6YGLW9W`).
- **Google Maps**: Embedded for service area visualization (Map ID: `1g5Tx0w-UhgglPLo5yTiSKzuUD2m7Dfg`).
- **TrashJoes**: External platform for online ordering. URL: `https://app.trashjoes.com/h/dumpster-diverz`

### NPM Packages
- **Core Framework**: `next`, `react`, `react-dom`, `typescript`.
- **UI & Styling**: `@radix-ui/*` (28+ packages), `tailwindcss`, `class-variance-authority`, `clsx`, `lucide-react`.
- **Data & State**: `@tanstack/react-query`, `@supabase/supabase-js`.
- **Forms**: `@hookform/resolvers`, `react-hook-form`, `zod`.
- **Utilities**: `date-fns`, `embla-carousel-react`, `cmdk`, `input-otp`, `focus-trap-react`.
- **Developer Tools**: `@vercel/analytics`, `eslint`, `autoprefixer`, `postcss`.

### API Integrations
- **OpenAI**: Used for text embeddings in semantic search (`text-embedding-3-small` model).

### Content Delivery
- **Supabase Storage**: Hosts primary images (path: `website_pics/pages/`) in WebP format.
- **Google Fonts**: Or custom hosting for Poppins and Inter.