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
    meta_title: 'Residential Garbage Pickup Windsor CO | Weekly Waste Collection',
    meta_description: 'Residential garbage pickup in Windsor CO starting at $29/month. Weekly waste collection and trash services with no contracts. Local drivers. Call 970-888-7274.',
    local_blurb: 'Looking for residential garbage pickup in Windsor CO? Dumpster Diverz provides weekly waste collection and trash services throughout Windsor, from Water Valley to Highland Meadows. Our Windsor-area drivers deliver consistent, on-time service with flexible month-to-month plans.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Windsor residential garbage pickup starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    slug: 'fort-collins',
    name: 'Fort Collins',
    meta_title: 'Residential Trash Pickup Fort Collins CO | Weekly Garbage Collection',
    meta_description: 'Residential trash pickup in Fort Collins starting at $29/month. Weekly garbage collection and waste services with no contracts. Local drivers. Call 970-888-7274.',
    local_blurb: 'Looking for residential trash pickup in Fort Collins? Dumpster Diverz provides weekly garbage collection and waste services throughout Fort Collins, from Old Town to Timnath. Our Fort Collins-based drivers know your neighborhood and deliver consistent, on-time service every week.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Fort Collins residential trash pickup starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    slug: 'wellington',
    name: 'Wellington',
    meta_title: 'Residential Waste Collection Wellington CO | Weekly Trash Pickup',
    meta_description: 'Residential waste collection in Wellington starting at $29/month. Weekly trash pickup and garbage services. Our HQ is right here! Call 970-888-7274.',
    local_blurb: 'Looking for residential waste collection in Wellington? Wellington families choose Dumpster Diverz for hassle-free trash pickup and garbage services. Our headquarters is right here in Wellington!',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Wellington residential waste collection starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    slug: 'greeley',
    name: 'Greeley',
    meta_title: 'Residential Trash Collection Greeley CO | Weekly Garbage Pickup',
    meta_description: 'Residential trash collection in Greeley starting at $29/month. Weekly garbage pickup and waste services with no contracts. Call 970-888-7274.',
    local_blurb: 'Looking for residential trash collection in Greeley? Greeley residents enjoy reliable garbage pickup and waste services from Dumpster Diverz. Competitive pricing with no contracts.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Greeley residential trash collection starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    slug: 'north-county',
    name: 'Laporte & Bellvue',
    meta_title: 'Residential Trash Collection Laporte & Bellvue CO | Weekly Garbage Pickup',
    meta_description: 'Residential trash collection in Laporte & Bellvue starting at $29/month. Weekly garbage pickup and waste services for North County. Call 970-888-7274.',
    local_blurb: 'Looking for residential trash collection in Laporte or Bellvue? North County communities trust Dumpster Diverz for dependable garbage pickup and waste services.',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Laporte & Bellvue residential trash collection starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 6,
    slug: 'severance',
    name: 'Severance',
    meta_title: 'Residential Waste Pickup Severance CO | Weekly Garbage Collection',
    meta_description: 'Residential waste pickup in Severance starting at $29/month. Weekly garbage collection and trash services with no contracts. Call 970-888-7274.',
    local_blurb: 'Looking for residential waste pickup in Severance? Severance residents enjoy reliable garbage collection and trash services from Dumpster Diverz. Growing community, growing service!',
    hero_image_url: RESIDENTIAL_HERO_URL,
    pricing_info: 'Severance residential waste pickup starting at $29/month for 65-gallon cart, $33/month for 96-gallon cart. Add recycling for just $10/month.',
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const getResidentialTownBySlug = (slug: string): ResidentialTown | null => {
  return staticResidentialTowns.find(town => town.slug === slug) || null;
};
