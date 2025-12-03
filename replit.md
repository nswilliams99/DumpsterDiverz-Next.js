# Dumpster Diverz - Next.js Waste Management Platform

## Overview

Dumpster Diverz is a Next.js 15 application providing professional waste management services throughout Northern Colorado. The platform serves Windsor, Fort Collins, Wellington, Greeley, and surrounding communities with three primary service lines: residential trash pickup, commercial dumpster rentals, and roll-off container rentals. The application features location-based service pages, quote request systems, knowledge base articles, and integrated analytics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with App Router (React Server Components)
- **Routing**: Migrated from Pages Router to App Router; `src/pages/` renamed to `src/page-components/` to eliminate routing conflicts
- **Component Structure**: Client components in `src/components/`, page components in `src/page-components/`
- **Static Generation**: Homepage uses static imports for root route; other routes use dynamic imports
- **State Management**: React hooks with TanStack Query for server state
- **Styling**: Tailwind CSS with custom design system (CSS variables in `globals.css`)
- **UI Components**: Radix UI primitives with custom theming via `shadcn/ui` patterns

**Key Design Decisions**:
- Chosen App Router for improved performance and modern React patterns
- Static import required for root route (`/`) to avoid hydration mismatches
- Dynamic imports acceptable for non-root routes
- Component-based architecture with heavy use of composition

**Performance Optimizations**:
- Bundle analyzer integration (`@next/bundle-analyzer`)
- Image optimization via Next.js Image component with WebP/AVIF formats
- Service worker for caching critical assets (`public/sw.js`)
- Lazy loading for non-critical components
- Font optimization with `next/font` (Inter and Poppins)

### Backend Architecture

**Data Layer**: Hybrid approach combining Supabase and static data
- **Primary Database**: Supabase (PostgreSQL) for dynamic content
- **Static Data**: Hardcoded TypeScript files in `src/data/` for frequently-accessed data
- **Rationale**: Reduces database calls for stable content (town lists, service sizes, FAQs)

**Data Access Pattern**:
- Custom React hooks in `src/hooks/` abstract data fetching
- TanStack Query manages caching and invalidation
- Fallback to static data when Supabase unavailable

**API Structure**:
- Server-side data fetching via Supabase client
- Server Components fetch data directly without API routes
- Edge functions for specialized operations (image generation)

### Authentication & Authorization

**Current State**: No authentication system implemented
- Application is public-facing
- Admin mode toggled via URL parameter (`?admin=true`) and localStorage
- No protected routes or user sessions

**Future Consideration**: Authentication would likely be needed for customer portal or admin dashboard

### Design System & Theming

**Color System**:
- CSS custom properties defined in `globals.css`
- Brand colors: Primary pink (`--primary: 340 82% 52%`), professional grays, eco-friendly accents
- Theme provider supports color palette switching via Supabase `color_palettes` table
- Dynamic color injection through `ColorSystemProvider` component

**Typography**:
- Headings: Poppins (variable font)
- Body: Inter (variable font)
- Font loading optimized with `next/font` preloading

**Accessibility**:
- Skip links, ARIA labels, semantic HTML
- Focus management in modals and mobile menus
- Keyboard navigation support
- WCAG AA contrast compliance

### SEO Architecture

**Structured Data**:
- LocalBusiness schema for company information
- Service schemas for each service type
- Breadcrumb navigation schemas
- FAQ schemas for knowledge base

**Meta Tags**:
- Dynamic metadata via Next.js Metadata API
- OpenGraph and Twitter card support
- Canonical URLs to prevent duplicate content

**Sitemap Generation**:
- Dynamic sitemap at `/sitemap.ts` fetches active services/articles
- Robots.txt configuration at `/robots.ts`
- 1-hour revalidation for sitemap freshness

### Form Handling & Quote System

**Quote Request Types**:
1. General quote requests → `quote_requests` table
2. HOA-specific quotes → `hoa_quote_requests` table
3. Roll-off rentals → `rolloff_quote_requests` table

**Form Architecture**:
- React Hook Form for validation
- Zod schemas (referenced but not visible in codebase)
- Direct Supabase inserts (no API middleware)
- SMS consent tracking for TCPA compliance

**Validation Strategy**:
- Client-side validation for UX
- Database constraints as final validation layer
- Error boundaries catch submission failures

### Search & Discovery

**Search Implementation**:
- Semantic search via Supabase edge functions
- Client-side filtering across multiple content types (services, FAQs, articles, testimonials, towns, sizes)
- Search analytics tracking (queries, clicks, results)
- Recently searched queries and popular queries

**Content Discovery**:
- Service area pages (residential towns, roll-off towns)
- Size-specific pages (commercial sizes, roll-off sizes)
- Knowledge base with categorization
- FAQ system with town-specific variants

### Error Handling & Resilience

**Error Boundaries**:
- Top-level `ErrorBoundary` component wraps critical sections
- `ErrorFallback` provides graceful degradation
- Development mode shows detailed error information

**Fallback Strategies**:
- Static data fallbacks when Supabase unavailable
- Default content when database queries fail
- Skeleton loaders during data fetching
- Toast notifications for user-facing errors

### Build & Deployment

**Build Configuration**:
- Standalone output mode for containerization
- Compression enabled
- React strict mode enforced
- Trailing slashes disabled for URL consistency

**Development Environment**:
- Replit-specific configurations (`allowedDevOrigins`)
- Port 5000 binding to `0.0.0.0` for Replit iframe compatibility
- Hot reload and fast refresh enabled

## External Dependencies

### Primary Services

**Supabase** (Backend-as-a-Service)
- **Purpose**: Primary database, authentication (future), storage, edge functions
- **Tables**: `quote_requests`, `hoa_quote_requests`, `rolloff_quote_requests`, `page_sections`, `color_palettes`, `services`, `faqs`, `kb_articles`, `testimonials`, `residential_towns`, `rolloff_towns`, `commercial_sizes`, `rolloff_sizes`
- **Storage**: Image hosting at `cgizicrrzdbzvfniffhw.supabase.co/storage/v1/`
- **Edge Functions**: Semantic search, image generation
- **Client Libraries**: `@supabase/supabase-js`, `@supabase/ssr`

**Vercel Analytics**
- **Purpose**: Web analytics and performance monitoring
- **Integration**: `@vercel/analytics` package
- **Usage**: Page views, user interactions, Core Web Vitals

### Third-Party Integrations

**Google Maps**
- **Purpose**: Service area visualization
- **Implementation**: Embedded Google My Maps iframe
- **Map URL**: `https://www.google.com/maps/d/embed?mid=1g5Tx0w-UhgglPLo5yTiSKzuUD2m7Dfg`

**Elfsight (Google Reviews Widget)**
- **Purpose**: Display Google Business Reviews
- **Implementation**: Lazy-loaded external script
- **Performance**: Preconnect hints, intersection observer for deferred loading

**IPInfo.io** (Geo-Location)
- **Purpose**: Geographic redirection (currently disabled)
- **Implementation**: Client-side IP lookup
- **Status**: Commented out in `GeoRedirector` component

### UI & Component Libraries

**Radix UI**
- **Purpose**: Accessible, unstyled UI primitives
- **Components**: Accordion, Dialog, Dropdown, Select, Toast, Tooltip, etc.
- **Packages**: 20+ `@radix-ui/react-*` packages

**Headless UI**
- **Purpose**: Accessible components for React
- **Integration**: Minimal usage, may be legacy

**Embla Carousel**
- **Purpose**: Touch-friendly carousels
- **Implementation**: Service showcase, testimonials

**Lucide React**
- **Purpose**: Icon library
- **Integration**: Via `@heroicons/react` and `lucide-react`

### Development Tools

**TypeScript**
- **Configuration**: Strict mode, path aliases (`@/*`)
- **Target**: ES2017

**Tailwind CSS**
- **Version**: Latest with JIT compiler
- **Plugins**: Custom color palette, shadcn/ui utilities
- **Configuration**: Extended theme in `tailwind.config.ts`

**Bundle Analyzer**
- **Purpose**: Optimize bundle size
- **Activation**: `ANALYZE=true` environment variable

### Fonts & Assets

**Google Fonts** (via next/font)
- Inter: Body text, 400-700 weights
- Poppins: Headings, 400-700 weights

**Image Hosting**
- **Primary**: Supabase Storage
- **CDN**: Supabase CDN with 1-year cache TTL
- **Formats**: WebP, AVIF with fallbacks

### External Scripts & Resources

**Service Worker**
- **File**: `public/sw.js`
- **Purpose**: Cache critical assets (fonts, images, pages)
- **Strategy**: Cache-first for static assets, network-first for dynamic content

**Structured Data**
- **Implementation**: JSON-LD scripts in page components
- **Schemas**: LocalBusiness, Organization, Service, FAQPage
- **Purpose**: Enhanced search engine visibility