// Hardcoded rolloff town data to replace Supabase dependency
export interface RolloffTown {
  id: string;
  name: string;
  slug: string;
  hero_image_url: string;
  hero_alt_text: string;
  hero_subheading: string;
  local_blurb: string;
  meta_description: string;
  meta_title: string;
  is_active: boolean;
  state: string;
  embedding: string;
  kml_polygon_data: string;
  map_center_lat: number;
  map_center_lng: number;
  created_at: string;
  updated_at: string;
}

export const rolloffTownsData: RolloffTown[] = [
  {
    id: '1',
    name: 'Fort Collins',
    slug: 'fort-collins',
    hero_image_url: 'website_pics/pages/rolloff-fort-collins/rolloff_town_hero.webp',
    hero_alt_text: 'Dumpster rental service in Fort Collins, Colorado',
    hero_subheading: 'Reliable Dumpster Rentals in Fort Collins',
    local_blurb: 'Serving Fort Collins with reliable dumpster rental services for home renovations, construction projects, and cleanouts throughout the city and surrounding areas.',
    meta_description: 'Professional dumpster rental services in Fort Collins, CO. Same-day delivery, competitive rates, and excellent customer service for all your waste management needs.',
    meta_title: 'Roll-Off Dumpster Rentals in Fort Collins | Dumpster Diverz',
    is_active: true,
    state: 'Colorado',
    embedding: '',
    kml_polygon_data: '',
    map_center_lat: 40.5853,
    map_center_lng: -105.0844,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Greeley',
    slug: 'greeley',
    hero_image_url: 'website_pics/pages/rolloff-greeley/rolloff_town_hero.webp',
    hero_alt_text: 'Roll-off dumpster rentals in Greeley, Colorado',
    hero_subheading: 'Professional Dumpster Rentals in Greeley',
    local_blurb: 'Professional dumpster rental services in Greeley, supporting residential and commercial projects with flexible rental periods and competitive pricing.',
    meta_description: 'Affordable dumpster rental services in Greeley, CO. Fast delivery, flexible rental periods, and professional service for all your project needs.',
    meta_title: 'Roll-Off Dumpster Rentals in Greeley | Dumpster Diverz',
    is_active: true,
    state: 'Colorado',
    embedding: '',
    kml_polygon_data: '',
    map_center_lat: 40.4233,
    map_center_lng: -104.7091,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Loveland',
    slug: 'loveland',
    hero_image_url: 'website_pics/pages/rolloff-loveland/rolloff_town_hero.webp',
    hero_alt_text: 'Dumpster rental services in Loveland, Colorado',
    hero_subheading: 'Comprehensive Dumpster Solutions in Loveland',
    local_blurb: 'Serving Loveland with comprehensive dumpster rental solutions for construction debris, home cleanouts, and renovation projects of all sizes.',
    meta_description: 'Top-rated dumpster rental services in Loveland, CO. Reliable service, competitive pricing, and quick delivery for residential and commercial projects.',
    meta_title: 'Roll-Off Dumpster Rentals in Loveland | Dumpster Diverz',
    is_active: true,
    state: 'Colorado',
    embedding: '',
    kml_polygon_data: '',
    map_center_lat: 40.3978,
    map_center_lng: -105.0750,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '4',
    name: 'Longmont',
    slug: 'longmont',
    hero_image_url: 'website_pics/pages/rolloff-longmont/rolloff_town_hero.webp',
    hero_alt_text: 'Roll-off dumpster services in Longmont, Colorado',
    hero_subheading: 'Efficient Waste Management in Longmont',
    local_blurb: 'Reliable dumpster rental services in Longmont, helping residents and businesses manage waste efficiently for projects large and small.',
    meta_description: 'Efficient dumpster rental services in Longmont, CO. Professional waste management solutions with same-day delivery and competitive rates.',
    meta_title: 'Roll-Off Dumpster Rentals in Longmont | Dumpster Diverz',
    is_active: true,
    state: 'Colorado',
    embedding: '',
    kml_polygon_data: '',
    map_center_lat: 40.1672,
    map_center_lng: -105.1019,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '5',
    name: 'Berthoud',
    slug: 'berthoud',
    hero_image_url: 'website_pics/pages/rolloff-berthoud/rolloff_town_hero.webp',
    hero_alt_text: 'Dumpster rental services in Berthoud, Colorado',
    hero_subheading: 'Quality Dumpster Services in Berthoud',
    local_blurb: 'Quality dumpster rental services in Berthoud, providing convenient waste management solutions for residential and commercial customers.',
    meta_description: 'Convenient dumpster rental services in Berthoud, CO. Quality service, flexible scheduling, and competitive pricing for all project sizes.',
    meta_title: 'Roll-Off Dumpsters in Berthoud | Dumpster Diverz',
    is_active: true,
    state: 'Colorado',
    embedding: '',
    kml_polygon_data: '',
    map_center_lat: 40.3081,
    map_center_lng: -105.0808,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'Windsor',
    slug: 'windsor',
    hero_image_url: 'website_pics/pages/rolloff-windsor/rolloff_town_hero.webp',
    hero_alt_text: 'Roll-off dumpster rentals in Windsor, Colorado',
    hero_subheading: 'Professional Dumpster Rentals in Windsor',
    local_blurb: 'Professional dumpster rental services in Windsor, supporting home improvement projects, construction work, and property cleanouts.',
    meta_description: 'Professional dumpster rental services in Windsor, CO. Supporting home improvement and construction projects with reliable service.',
    meta_title: 'Roll-Off Dumpster Rentals in Windsor | Dumpster Diverz',
    is_active: true,
    state: 'Colorado',
    embedding: '',
    kml_polygon_data: '',
    map_center_lat: 40.4775,
    map_center_lng: -104.9014,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '7',
    name: 'Wellington',
    slug: 'wellington',
    hero_image_url: 'website_pics/pages/rolloff-wellington/rolloff_town_hero.webp',
    hero_alt_text: 'Dumpster rental services in Wellington, Colorado',
    hero_subheading: 'Dependable Dumpster Services in Wellington',
    local_blurb: 'Serving Wellington with dependable dumpster rental services for residential cleanouts, remodeling projects, and construction debris removal.',
    meta_description: 'Dependable dumpster rental services in Wellington, CO. Residential cleanouts, remodeling projects, and construction debris removal.',
    meta_title: 'Roll-Off Dumpster Rentals in Wellington | Dumpster Diverz',
    is_active: true,
    state: 'Colorado',
    embedding: '',
    kml_polygon_data: '',
    map_center_lat: 40.7000,
    map_center_lng: -105.0067,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '8',
    name: 'Severance',
    slug: 'severance',
    hero_image_url: 'website_pics/pages/rolloff-severance/rolloff_town_hero.webp',
    hero_alt_text: 'Roll-off dumpster services in Severance, Colorado',
    hero_subheading: 'Reliable Dumpster Solutions in Severance',
    local_blurb: 'Reliable dumpster rental solutions in Severance, offering flexible rental periods and competitive rates for all your waste management needs.',
    meta_description: 'Reliable dumpster rental solutions in Severance, CO. Flexible rental periods and competitive rates for all waste management needs.',
    meta_title: 'Roll-Off Dumpster Rentals in Severance | Dumpster Diverz',
    is_active: true,
    state: 'Colorado',
    embedding: '',
    kml_polygon_data: '',
    map_center_lat: 40.5239,
    map_center_lng: -104.8628,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '9',
    name: 'Northern Communities',
    slug: 'northern-communities',
    hero_image_url: 'website_pics/pages/rolloff-northern-communities/rolloff_town_hero.webp',
    hero_alt_text: 'Dumpster rental services for Northern Colorado communities',
    hero_subheading: 'Specialized Rural & Mountain Dumpster Services',
    local_blurb: 'Serving rural and mountain communities throughout Northern Colorado with specialized dumpster rental services for remote locations and challenging terrain.',
    meta_description: 'Specialized dumpster rental services for rural and mountain communities in Northern Colorado. Remote location service and challenging terrain access.',
    meta_title: 'Rural & Mountain Dumpster Rentals | Dumpster Diverz',
    is_active: true,
    state: 'Colorado',
    embedding: '',
    kml_polygon_data: '',
    map_center_lat: 40.5853,
    map_center_lng: -105.5000,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const getRolloffTownBySlug = (slug: string): RolloffTown | null => {
  return rolloffTownsData.find(town => town.slug === slug) || null;
};

export const getAllRolloffTowns = (): RolloffTown[] => {
  return rolloffTownsData.filter(town => town.is_active);
};