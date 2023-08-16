export type Item = {
  id: string;
  name: string;
  price: number;
  department: string;
  category: string;
  path: string;
  released_at: string;
  sizes: string[];
}

export const AllItems: Item[]= [
  {
    id: '000000',
    name: 'Basic Tee',
    price: 5000,
    department: 'unisex',
    category: 'Tees',
    path: '/images/items/unisex/tees/un_basic_tee.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  }, 
  {
    id: '000001',
    name: 'Logo Hoodie',
    price: 18000,
    department: 'men',
    category: 'sweaters',
    path: '/images/items/men/sweaters/m_logo_hoodie.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '000002',
    name: 'Tailored Jacket',
    price: 18000,
    department: 'men',
    category: 'jackets',
    path: '/images/items/men/jackets/m_tailored_jacket.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '000003',
    name: 'Rugby Polo',
    price: 22000,
    department: 'men',
    category: 'shirts',
    path: '/images/items/men/shirts/m_rugby_polo.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000004',
    name: 'Box Logo Tee',
    price: 5000,
    department: 'men',
    category: 'Tees',
    path: '/images/items/men/tees/m_box_logo.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  }, 
  {
    id: '000005',
    name: 'Heavy Weight Tee',
    price: 7800,
    department: 'unisex',
    category: 'tees',
    path: '/images/items/unisex/tees/un_heavy_weight.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '000006',
    name: 'Neon Logo Tee',
    price: 5000,
    department: 'men',
    category: 'tees',
    path: '/images/items/men/tees/m_neon_logo.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '000007',
    name: 'Crown Logo Tee',
    price: 6500,
    department: 'men',
    category: 'tees',
    path: '/images/items/men/tees/m_crown_log.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '000008',
    name: 'Pocket Tee',
    price: 6500,
    department: 'men',
    category: 'tees',
    path: '/images/items/men/tees/m_pocket_tee.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  }, 
  {
    id: '000009',
    name: 'Basic Sweat',
    price: 8000,
    department: 'men',
    category: 'sweaters',
    path: '/images/items/men/sweaters/m_basic_sweat.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '000010',
    name: 'Light Weight Hoodie',
    price: 12000,
    department: 'unisex',
    category: 'sweaters',
    path: '/images/items/unisex/sweaters/un_light_weight_hoodie.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '000011',
    name: 'Oxford Shirts',
    price: 18000,
    department: 'men',
    category: 'shirts',
    path: '/images/items/men/shirts/m_oxford_shirts.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000012',
    name: 'Denim Shirts',
    price: 18000,
    department: 'men',
    category: 'shirts',
    path: '/images/items/men/shirts/m_denim_shirts.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000013',
    name: 'Linen Shirts',
    price: 18000,
    department: 'men',
    category: 'shirts',
    path: '/images/items/men/shirts/m_linen_shirts.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000014',
    name: 'Leather Jacket',
    price: 58000,
    department: 'men',
    category: 'jackets',
    path: '/images/items/men/jackets/m_leather_jacket.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000015',
    name: 'Boa Leather Jacket',
    price: 88000,
    department: 'men',
    category: 'jackets',
    path: '/images/items/men/jackets/m_boa_leather_jacket.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000016',
    name: 'Smooth Slim Jacket',
    price: 88000,
    department: 'men',
    category: 'jackets',
    path: '/images/items/men/jackets/m_smooth_slim_jacket.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000017',
    name: 'Denim Jacket',
    price: 28000,
    department: 'men',
    category: 'jackets',
    path: '/images/items/men/jackets/m_denim_jacket.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000018',
    name: 'Chino Pants',
    price: 18000,
    department: 'men',
    category: 'bottoms',
    path: '/images/items/men/bottoms/m_chino_pants.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000019',
    name: 'Skinny Jeans',
    price: 18000,
    department: 'men',
    category: 'bottoms',
    path: '/images/items/men/bottoms/m_skinny_jeans.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000020',
    name: 'Bleach Wash Denim',
    price: 18000,
    department: 'men',
    category: 'bottoms',
    path: '/images/items/men/bottoms/m_bleach_wash_denim.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000021',
    name: 'One Cares Tee',
    price: 5000,
    department: 'Women',
    category: 'tees',
    path: '/images/items/women/tees/w_one_cares_tee.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000022',
    name: 'Logo Tee',
    price: 5000,
    department: 'Women',
    category: 'tees',
    path: '/images/items/women/tees/w_logo_tee.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000023',
    name: 'Circle Logo Tee',
    price: 6500,
    department: 'Women',
    category: 'tees',
    path: '/images/items/women/tees/w_circle_logo_tee.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000024',
    name: 'Slim Sweat',
    price: 8000,
    department: 'Women',
    category: 'sweaters',
    path: '/images/items/women/sweaters/w_slim_sweat.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000025',
    name: 'Cropped Hoodie',
    price: 18000,
    department: 'Women',
    category: 'sweaters',
    path: '/images/items/women/sweaters/w_cropped_hoodie.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000026',
    name: 'Satin Shirts',
    price: 18000,
    department: 'Women',
    category: 'shirts',
    path: '/images/items/women/shirts/w_satin_shirts.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000026',
    name: 'Standard Shirts',
    price: 18000,
    department: 'Women',
    category: 'shirts',
    path: '/images/items/women/shirts/w_standard_shirts.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000027',
    name: 'Riders Jacket',
    price: 35000,
    department: 'Women',
    category: 'jackets',
    path: '/images/items/women/jackets/w_riders_jacket.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000028',
    name: 'Cropped Denim Jacket',
    price: 22000,
    department: 'Women',
    category: 'jackets',
    path: '/images/items/women/jackets/w_cropped_denim_jacket.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000029',
    name: 'Blue Relax Jeans',
    price: 18000,
    department: 'Women',
    category: 'bottoms',
    path: '/images/items/women/bottoms/w_blue_relax_jeans.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
  {
    id: '000030',
    name: 'Relax Corduroy Pants',
    price: 18000,
    department: 'Women',
    category: 'bottoms',
    path: '/images/items/women/bottoms/w_relax_corduroy_pants.jpg',
    released_at: '2023-04-01',
    sizes: ['S', 'M', 'L','XL']
  },
]