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
    meta_title: 'Residential Trash & Recycling Services in Windsor, CO | Dumpster Diverz',
    meta_description: 'Reliable residential trash and recycling services in Windsor, Colorado. Weekly pickup, online management, and no contracts required. Call 970-888-7274.',
    local_blurb: 'Dumpster Diverz proudly serves Windsor with reliable weekly trash and recycling pickup. Our local team understands the needs of Windsor families and businesses.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    slug: 'fort-collins',
    name: 'Fort Collins',
    meta_title: 'Residential Trash & Recycling Services in Fort Collins, CO | Dumpster Diverz',
    meta_description: 'Professional residential trash and recycling services in Fort Collins, Colorado. Weekly pickup with no contracts. Call 970-888-7274.',
    local_blurb: 'Fort Collins residents trust Dumpster Diverz for dependable trash and recycling service. We offer flexible pickup schedules and excellent customer support.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
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
