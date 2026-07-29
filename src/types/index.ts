export interface Product {
  id: string;
  name: string;
  brand: string; // TitanForge, PowerCore, EliteMotion, PrimeFit, IronEdge, Velocity Pro, etc.
  category: string; // 'Strength Equipment', 'Cardio Equipment', 'Supplements', etc.
  categoryId: string;
  price: number;
  bulkPrice?: number;
  bulkThreshold?: number; // e.g. 3+ units
  rating: number;
  reviewCount: number;
  inStock: boolean;
  leadTime: string; // e.g. "3-5 Business Days"
  badge?: string; // "Top B2B Seller", "Leasing Available", "Commercial Grade"
  image: string;
  gallery: string[];
  description: string;
  specs: Record<string, string>;
  vendor: {
    id: string;
    name: string;
    logo: string;
    verified: boolean;
    rating: number;
    responseRate: string;
    fulfillmentRate: string;
    location: string;
  };
  features: string[];
}

export interface ServiceProvider {
  id: string;
  name: string;
  title: string;
  company?: string;
  category: string;
  categoryId: string;
  experience: string; // e.g. "12+ Years Experience"
  rating: number;
  reviewCount: number;
  pricing: string; // e.g. "$85 / hr" or "From $1,200 / project"
  pricingPeriod: string;
  location: string;
  badge: string; // "Master Certified", "24/7 Dispatch", "Enterprise AI"
  image: string;
  bio: string;
  specialties: string[];
}

export interface CategoryTile {
  id: string;
  name: string;
  type: 'equipment' | 'service';
  iconName: string;
  itemCount: number;
  isPopulated: boolean;
  description: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: string;
  searchQuery: string;
  priceRange: [number, number];
  brands: string[];
  minRating: number;
  inStockOnly: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating';
}
