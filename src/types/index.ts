export type PageType = 'home' | 'about' | 'equipment' | 'manpower' | 'services' | 'contact' | 'admin';

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

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: string;
  searchQuery: string;
  brands: string[];
  minRating: number;
  inStockOnly: boolean;
  sortBy: 'featured' | 'rating' | 'name';
}

// MANPOWER / GYM HIRING TYPES
export type JobRoleCategory =
  | 'Personal Trainer'
  | 'Gym Trainer'
  | 'Receptionist'
  | 'Sales Executive'
  | 'Housekeeping'
  | 'Cleaning Staff'
  | 'Nutritionist'
  | 'Gym Manager';

export interface JobListing {
  id: string;
  title: string;
  category: JobRoleCategory;
  gymName: string;
  location: string;
  salaryRange: string; // e.g. "₹25,000 - ₹40,000 / month"
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string; // e.g. "2+ Years"
  description: string;
  requirements: string[];
  createdAt: string;
  applicationsCount: number;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  gymName: string;
  fullName: string;
  mobile: string;
  email: string;
  resumeFileName: string;
  experience: string;
  preferredLocation: string;
  certifications: string;
  submittedAt: string;
  status: 'Pending Review' | 'Shortlisted' | 'Contacted' | 'Rejected';
}

// GYM BUSINESS SERVICES TYPES
export interface ServiceCaseStudy {
  clientGym: string;
  result: string;
  quote: string;
}

export interface BusinessService {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  overview: string;
  benefits: string[];
  portfolioItems: { title: string; image: string }[];
  caseStudies: ServiceCaseStudy[];
  image: string;
  badge?: string;
}

// ENQUIRY FORMS TYPES
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

export interface ServiceEnquiry {
  id: string;
  name: string;
  gymName: string;
  serviceRequired: string;
  mobile: string;
  email: string;
  additionalRequirements: string;
  createdAt: string;
  status: 'New' | 'In Touch' | 'Completed';
}

export interface ContactEnquiry {
  id: string;
  name: string;
  gymName: string;
  email: string;
  mobile: string;
  message: string;
  createdAt: string;
  status: 'Unread' | 'Replied';
}
