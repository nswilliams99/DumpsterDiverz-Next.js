export interface ResidentialTown {
  id: number;
  slug: string;
  name: string;
  meta_title: string | null;
  meta_description: string | null;
  local_blurb: string | null;
  hero_image_url: string | null;
  pricing_info: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const RESIDENTIAL_HERO_URL = 'https://cgizicrrzdbzvfniffhw.supabase.co/storage/v1/object/public/website_pics/pages/residential/resi_heroimg.webp';

export const staticResidentialTowns: ResidentialTown[] = [
  {
    id: 1,
    slug: 'windsor',
    name: 'Windsor',
    meta_title: 'Trash Service Windsor CO | Weekly Trash Pickup & Garbage Collection',
    meta_description: 'Windsor CO trash service starting at $29/month. Weekly trash pickup, recycling, and garbage collection. Local drivers, no contracts. Call 970-888-7274.',
    local_blurb: 'Looking for reliable trash service in Windsor CO? Dumpster Diverz provides weekly trash pickup and garbage collection throughout Windsor, from Water Valley to Highland Meadows. Our Windsor-area drivers deliver consistent, on-time service with flexible month-to-month plans.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Windsor trash service starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    slug: 'fort-collins',
    name: 'Fort Collins',
    meta_title: 'Trash Service Fort Collins CO | Weekly Trash Collection & Garbage Pickup',
    meta_description: 'Fort Collins trash service starting at $29/month. Weekly trash collection, recycling, and garbage pickup. No contracts, local drivers. Call 970-888-7274.',
    local_blurb: 'Looking for reliable trash service in Fort Collins? Dumpster Diverz provides weekly trash collection and garbage pickup throughout Fort Collins, from Old Town to Timnath. Our Fort Collins-based drivers know your neighborhood and deliver consistent, on-time service every week.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Fort Collins trash service starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    slug: 'wellington',
    name: 'Wellington',
    meta_title: 'Residential Trash & Recycling Services in Wellington, CO | Dumpster Diverz',
    meta_description: 'Reliable residential trash and recycling services in Wellington, Colorado. Weekly pickup, easy online management. Call 970-888-7274.',
    local_blurb: 'Wellington families choose Dumpster Diverz for hassle-free trash and recycling service. Our headquarters is right here in Wellington!',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    slug: 'greeley',
    name: 'Greeley',
    meta_title: 'Residential Trash & Recycling Services in Greeley, CO | Dumpster Diverz',
    meta_description: 'Professional residential trash and recycling services in Greeley, Colorado. Reliable weekly pickup with no contracts. Call 970-888-7274.',
    local_blurb: 'Greeley residents enjoy reliable trash and recycling service from Dumpster Diverz. We offer competitive pricing and excellent customer service.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    slug: 'north-county',
    name: 'North County',
    meta_title: 'Residential Trash & Recycling Services in North County, CO | Dumpster Diverz',
    meta_description: 'Reliable residential trash and recycling services in North County communities. Weekly pickup with no contracts. Call 970-888-7274.',
    local_blurb: 'North County communities trust Dumpster Diverz for dependable waste management. We serve the northern communities with pride.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 6,
    slug: 'severance',
    name: 'Severance',
    meta_title: 'Residential Trash & Recycling Services in Severance, CO | Dumpster Diverz',
    meta_description: 'Professional residential trash and recycling services in Severance, Colorado. Weekly pickup, no contracts required. Call 970-888-7274.',
    local_blurb: 'Severance residents enjoy reliable trash and recycling service from Dumpster Diverz. Growing community, growing service!',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const getResidentialTownBySlug = (slug: string): ResidentialTown | null => {
  return staticResidentialTowns.find(town => town.slug === slug) || null;
};
