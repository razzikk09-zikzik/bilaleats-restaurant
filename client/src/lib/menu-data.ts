export interface MenuItem {
  id: string;
  name: string;
  category: 'biriyani' | 'kebabs' | 'starters' | 'drinks' | 'desserts';
  price: number;
  description: string;
  image: string;
}

export const menuItems: MenuItem[] = [
  // Biriyani
  {
    id: 'chicken-biriyani',
    name: 'Chicken Biriyani',
    category: 'biriyani',
    price: 280,
    description: 'Aromatic basmati rice layered with tender chicken, slow-cooked with traditional spices',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mutton-biriyani',
    name: 'Mutton Biriyani',
    category: 'biriyani',
    price: 350,
    description: 'Succulent mutton pieces marinated and cooked with fragrant rice and exotic spices',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'special-dum-biriyani',
    name: 'Special Dum Biriyani',
    category: 'biriyani',
    price: 400,
    description: 'Our signature dum biriyani with premium cuts, cooked in traditional Hyderabadi style',
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  // Kebabs
  {
    id: 'seekh-kebab',
    name: 'Seekh Kebab',
    category: 'kebabs',
    price: 220,
    description: 'Minced meat kebabs infused with aromatic herbs and spices, grilled to perfection',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    category: 'kebabs',
    price: 240,
    description: 'Chicken marinated in yogurt and spices, roasted in traditional tandoor oven',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    category: 'kebabs',
    price: 260,
    description: 'Boneless chicken chunks marinated in a creamy blend of spices and grilled',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  // Starters
  {
    id: 'samosa',
    name: 'Samosa (2 pcs)',
    category: 'starters',
    price: 60,
    description: 'Crispy pastry filled with spiced potatoes and peas, served with chutney',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'onion-pakora',
    name: 'Onion Pakora',
    category: 'starters',
    price: 80,
    description: 'Crispy onion fritters mixed with aromatic herbs and traditional spices',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chicken-lollipop',
    name: 'Chicken Lollipop',
    category: 'starters',
    price: 180,
    description: 'Spicy chicken drumsticks marinated and deep-fried to golden perfection',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  // Drinks
  {
    id: 'mango-lassi',
    name: 'Mango Lassi',
    category: 'drinks',
    price: 80,
    description: 'Refreshing yogurt-based drink blended with sweet mango pulp',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sweet-lassi',
    name: 'Sweet Lassi',
    category: 'drinks',
    price: 60,
    description: 'Traditional sweet yogurt drink, perfect complement to spicy dishes',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fresh-lime-soda',
    name: 'Fresh Lime Soda',
    category: 'drinks',
    price: 50,
    description: 'Zesty lime drink with a hint of mint and spices for refreshment',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  // Desserts
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun (2 pcs)',
    category: 'desserts',
    price: 70,
    description: 'Soft milk-based balls soaked in rose-flavored sugar syrup',
    image: 'https://pixabay.com/get/g7404e7da327fadff211d53fc6c191d3e8b6148aeb9da0d6370211500a9db8170a565e62a12623dd0771c2efbdb6a6c1d0c2809d5d40644a8e217542946f5cadf_1280.jpg'
  },
  {
    id: 'kheer',
    name: 'Kheer',
    category: 'desserts',
    price: 90,
    description: 'Traditional rice pudding cooked in milk with cardamom and nuts',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kulfi',
    name: 'Kulfi',
    category: 'desserts',
    price: 80,
    description: 'Traditional Indian ice cream with cardamom and pistachio flavors',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
];

export const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'biriyani', label: 'Biriyani' },
  { id: 'kebabs', label: 'Kebabs' },
  { id: 'starters', label: 'Starters' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Desserts' },
] as const;
