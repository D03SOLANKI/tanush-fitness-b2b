export interface ProductSpec {
  [key: string]: string;
}

export interface Vendor {
  id: string;
  name: string;
  logo: string;
  verified: boolean;
  rating: number;
  responseRate: string;
  fulfillmentRate: string;
  location: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  categoryId: string; // 'cardio' | 'strength' | 'free-weights' | 'functional' | 'flooring' | 'lockers' | 'accessories'
  rating: number;
  reviewCount: number;
  inStock: boolean;
  leadTime: string;
  badge?: string;
  image: string;
  gallery: string[];
  description: string;
  specs: ProductSpec;
  vendor: Vendor;
  features: string[];
  minOrderQty?: number;
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

export interface EquipmentEnquiry {
  id: string;
  name: string;
  companyGymName: string;
  mobile: string;
  email: string;
  city: string;
  requirements: string;
  selectedProducts: { id: string; name: string; quantity: number }[];
  createdAt: string;
  status: 'New RFQ' | 'Quotation Sent' | 'Closed';
}
