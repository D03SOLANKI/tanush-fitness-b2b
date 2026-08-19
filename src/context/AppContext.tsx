import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PageType,
  Product,
  CartItem,
  FilterState,
  JobListing,
  JobApplication,
  BusinessService,
  EquipmentEnquiry,
  ServiceEnquiry,
  ContactEnquiry,
} from '../types';
import { PRODUCTS } from '../data/products';
import { INITIAL_JOBS } from '../data/jobs';
import { BUSINESS_SERVICES } from '../data/services';
import { AuthModal } from '../components/auth/AuthModal';
import { API_BASE_URL } from '../config/api';

interface ToastState {
  message: string;
  type: 'success' | 'info' | 'error';
  visible: boolean;
}

export interface PlatformSettings {
  supportPhone: string;
  supportEmail: string;
  corporateAddress: string;
  gstRate: string;
  bannerText: string;
  bannerEnabled: boolean;
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  mobile: string;
  role: 'GYM_OWNER' | 'JOB_SEEKER' | 'ADMIN';
  gstNumber?: string;
  companyName?: string;
  isVerified: boolean;
  status: 'ACTIVE' | 'SUSPENDED' | 'DEACTIVATED';
  createdAt: string;
}

interface AppContextType {
  currentPage: PageType;
  navigateTo: (page: PageType, productId?: string) => void;
  selectedProductId: string | null;

  // Products Dynamic State
  products: Product[];
  addProduct: (productData: any) => Product;
  updateProduct: (id: string, productData: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  // Platform Settings State
  platformSettings: PlatformSettings;
  updatePlatformSettings: (newSettings: Partial<PlatformSettings>) => void;

  // User Management
  userList: UserAccount[];
  updateUserStatus: (userId: string, status: 'ACTIVE' | 'SUSPENDED' | 'DEACTIVATED') => void;
  verifyUserGST: (userId: string, isVerified: boolean) => void;

  // Admin Auth Security
  isAdminAuthenticated: boolean;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;

  // User Authentication Gate
  currentUser: any | null;
  accessToken: string | null;
  isAuthModalOpen: boolean;
  authModalRole: 'GYM_OWNER' | 'JOB_SEEKER';
  authModalSubtitle: string;
  openAuthModal: (defaultRole?: 'GYM_OWNER' | 'JOB_SEEKER', subtitle?: string) => void;
  closeAuthModal: () => void;
  logoutUser: () => void;
  handleAuthSuccess: (user: any, token: string) => void;

  // Enquiry Cart
  enquiryCart: CartItem[];
  addToEnquiryCart: (product: Product, quantity?: number) => void;
  removeFromEnquiryCart: (productId: string) => void;
  updateEnquiryCartQuantity: (productId: string, quantity: number) => void;
  clearEnquiryCart: () => void;
  isEnquiryCartOpen: boolean;
  setIsEnquiryCartOpen: (open: boolean) => void;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Filters for Equipment
  filters: FilterState;
  setFilter: (key: keyof FilterState, value: any) => void;
  resetFilters: () => void;

  // Quick View Modal
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  // Manpower Services State
  jobListings: JobListing[];
  jobApplications: JobApplication[];
  addJobListing: (job: Omit<JobListing, 'id' | 'createdAt' | 'applicationsCount'>) => void;
  moderateJob: (jobId: string, action: 'APPROVE' | 'REJECT') => void;
  submitJobApplication: (app: Omit<JobApplication, 'id' | 'submittedAt' | 'status'>) => void;

  // Service Enquiries
  serviceEnquiries: ServiceEnquiry[];
  selectedServiceModal: BusinessService | null;
  openServiceModal: (service: BusinessService) => void;
  closeServiceModal: () => void;
  submitServiceEnquiry: (enquiry: Omit<ServiceEnquiry, 'id' | 'createdAt' | 'status'>) => void;

  // Equipment Enquiries
  equipmentEnquiries: EquipmentEnquiry[];
  submitEquipmentEnquiry: (enquiryData: any) => Promise<boolean>;

  // Contact Form Submissions
  contactEnquiries: ContactEnquiry[];
  submitContactEnquiry: (enquiry: Omit<ContactEnquiry, 'id' | 'createdAt' | 'status'>) => void;

  // Toast Banner
  toast: ToastState;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

const defaultFilters: FilterState = {
  category: 'all',
  searchQuery: '',
  brands: [],
  minRating: 0,
  inStockOnly: false,
  sortBy: 'featured',
};

const INITIAL_USERS: UserAccount[] = [
  {
    id: 'usr-101',
    name: 'Vikram Malhotra',
    email: 'vikram@fitplusgym.com',
    mobile: '+91 98112 34567',
    role: 'GYM_OWNER',
    companyName: 'FitPlus Commercial Gym',
    gstNumber: '07AAAAA0000A1Z5',
    isVerified: true,
    status: 'ACTIVE',
    createdAt: '2026-02-01',
  },
  {
    id: 'usr-102',
    name: 'Rajesh Kumar',
    email: 'rajesh@powerhouse.in',
    mobile: '+91 98991 22334',
    role: 'GYM_OWNER',
    companyName: 'PowerHouse Fitness Club',
    gstNumber: '09BBBCC1111B2Z3',
    isVerified: false,
    status: 'ACTIVE',
    createdAt: '2026-02-15',
  },
  {
    id: 'usr-103',
    name: 'Neha Sharma',
    email: 'neha.trainer@gmail.com',
    mobile: '+91 97110 55443',
    role: 'JOB_SEEKER',
    isVerified: true,
    status: 'ACTIVE',
    createdAt: '2026-03-01',
  },
  {
    id: 'usr-104',
    name: 'Spam Bot Account',
    email: 'spam.bot99@tempmail.com',
    mobile: '+91 90000 00000',
    role: 'GYM_OWNER',
    companyName: 'Unverified Fake Gym',
    isVerified: false,
    status: 'SUSPENDED',
    createdAt: '2026-03-10',
  },
  {
    id: 'usr-105',
    name: 'Amitabh Sen',
    email: 'amitabh@apexwellness.org',
    mobile: '+91 98223 99881',
    role: 'GYM_OWNER',
    companyName: 'Apex Luxury Health Club',
    gstNumber: '27AABCA1234F1Z8',
    isVerified: true,
    status: 'ACTIVE',
    createdAt: '2026-03-12',
  },
  {
    id: 'usr-106',
    name: 'Karan Mehra',
    email: 'karan.strength@outlook.com',
    mobile: '+91 98450 11223',
    role: 'JOB_SEEKER',
    isVerified: false,
    status: 'DEACTIVATED',
    createdAt: '2026-03-14',
  },
];

export const normalizeUserList = (users: any[]): UserAccount[] => {
  if (!Array.isArray(users) || users.length === 0) return INITIAL_USERS;
  const seenIds = new Set<string>();
  return users.map((u: any, idx: number) => {
    let rawId = u?.id !== undefined && u?.id !== null && String(u.id).trim() !== '' ? String(u.id).trim() : `usr-${101 + idx}`;
    let finalId = rawId;
    let counter = 1;
    while (seenIds.has(finalId)) {
      finalId = `${rawId}-${counter}`;
      counter++;
    }
    seenIds.add(finalId);

    const validStatus: 'ACTIVE' | 'SUSPENDED' | 'DEACTIVATED' =
      u?.status === 'SUSPENDED' ? 'SUSPENDED' :
      u?.status === 'DEACTIVATED' ? 'DEACTIVATED' : 'ACTIVE';

    return {
      id: finalId,
      name: String(u?.name || `User ${idx + 1}`),
      email: String(u?.email || `user${idx + 1}@domain.com`),
      mobile: String(u?.mobile || `+91 98000 ${String(10000 + idx).slice(1)}`),
      role: u?.role === 'JOB_SEEKER' ? 'JOB_SEEKER' : u?.role === 'ADMIN' ? 'ADMIN' : 'GYM_OWNER',
      companyName: u?.companyName || (u?.role === 'GYM_OWNER' ? `Club ${idx + 1}` : undefined),
      gstNumber: u?.gstNumber,
      isVerified: Boolean(u?.isVerified),
      status: validStatus,
      createdAt: u?.createdAt || '2026-02-01',
    };
  });
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Dynamic Products State
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('tanush_products');
    return saved ? JSON.parse(saved) : PRODUCTS;
  });

  const addProduct = (productData: any): Product => {
    const newProd: Product = {
      id: `p-${Date.now()}`,
      slug: productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: productData.name,
      brand: productData.brand,
      categoryId: productData.categoryId,
      category: productData.categoryName || 'Commercial Strength',
      minOrderQty: productData.minOrderQty || 1,
      leadTime: productData.leadTime || '7-14 Days',
      badge: productData.badge || 'ISO-Certified',
      rating: 4.9,
      reviewCount: 12,
      inStock: true,
      image: productData.image || 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
      gallery: [productData.image || 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'],
      description: productData.description || '',
      equipmentType: productData.equipmentType || 'Strength',
      features: productData.features || ['Commercial Heavy Duty', '1 Year Warranty'],
      specs: productData.specs || { Frame: 'Heavy Duty Steel' },
    };
    setProducts(prev => {
      const updated = [newProd, ...prev];
      localStorage.setItem('tanush_products', JSON.stringify(updated));
      return updated;
    });
    showToast(`Product "${newProd.name}" added to catalog!`);
    return newProd;
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    setProducts(prev => {
      const updated = prev.map(p => (p.id === id ? { ...p, ...productData } : p));
      localStorage.setItem('tanush_products', JSON.stringify(updated));
      return updated;
    });
    showToast('Product updated successfully!');
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => {
      const updated = prev.filter(p => p.id !== id);
      localStorage.setItem('tanush_products', JSON.stringify(updated));
      return updated;
    });
    showToast('Product removed from catalog', 'info');
  };

  // Platform Settings State
  const [platformSettings, setPlatformSettings] = useState<PlatformSettings>(() => {
    const saved = localStorage.getItem('tanush_settings');
    return saved
      ? JSON.parse(saved)
      : {
          supportPhone: '+91 90678 00048',
          supportEmail: 'Info@tanushfitness.com',
          corporateAddress: 'The Landmark Complex, A-301-304, Near Podar International School, Urjanagar 1, Kudasan, Gandhinagar, Gujarat 382419',
          gstRate: '18',
          bannerText: '⚡ Special B2B Bulk Discount: Up to 25% Off Commercial Gym Setup Bundles This Month!',
          bannerEnabled: true,
        };
  });

  const updatePlatformSettings = (newSettings: Partial<PlatformSettings>) => {
    setPlatformSettings(prev => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem('tanush_settings', JSON.stringify(updated));
      return updated;
    });
    showToast('Platform System Settings Updated!');
  };

  // Users State with Unique ID Guarantee
  const [userList, setUserList] = useState<UserAccount[]>(() => {
    const saved = localStorage.getItem('tanush_user_list');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return normalizeUserList(parsed);
        }
      } catch (err) {
        console.error('Error parsing tanush_user_list', err);
      }
    }
    return normalizeUserList(INITIAL_USERS);
  });

  const updateUserStatus = (userId: string, status: 'ACTIVE' | 'SUSPENDED' | 'DEACTIVATED') => {
    if (!userId || typeof userId !== 'string' || userId.trim() === '') {
      console.warn('updateUserStatus called without a valid userId');
      return;
    }

    const cleanTargetId = userId.trim();

    setUserList(prev => {
      const normalized = normalizeUserList(prev);
      const targetUser = normalized.find(u => u.id === cleanTargetId);
      const updated = normalized.map(u => {
        if (u.id === cleanTargetId) {
          return { ...u, status };
        }
        return u;
      });
      localStorage.setItem('tanush_user_list', JSON.stringify(updated));
      const userName = targetUser ? targetUser.name : 'Selected account';
      showToast(`${userName} status changed to ${status}`, status === 'ACTIVE' ? 'success' : 'info');
      return updated;
    });
  };

  const verifyUserGST = (userId: string, isVerified: boolean) => {
    if (!userId || typeof userId !== 'string' || userId.trim() === '') {
      console.warn('verifyUserGST called without a valid userId');
      return;
    }

    const cleanTargetId = userId.trim();

    setUserList(prev => {
      const normalized = normalizeUserList(prev);
      const targetUser = normalized.find(u => u.id === cleanTargetId);
      const updated = normalized.map(u => {
        if (u.id === cleanTargetId) {
          return { ...u, isVerified };
        }
        return u;
      });
      localStorage.setItem('tanush_user_list', JSON.stringify(updated));
      const userName = targetUser ? targetUser.name : 'Selected account';
      showToast(isVerified ? `${userName} GST credentials verified!` : `${userName} verification removed`, isVerified ? 'success' : 'info');
      return updated;
    });
  };

  // Admin Auth State (Persisted in localStorage)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('tanush_admin_auth') === 'true';
  });

  // User Auth State
  const [currentUser, setCurrentUser] = useState<any | null>(() => {
    const saved = localStorage.getItem('tanush_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [accessToken, setAccessToken] = useState<string | null>(() => {
    return localStorage.getItem('tanush_token');
  });

  // Auth Modal State
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalRole, setAuthModalRole] = useState<'GYM_OWNER' | 'JOB_SEEKER'>('GYM_OWNER');
  const [authModalSubtitle, setAuthModalSubtitle] = useState('');

  const openAuthModal = (defaultRole: 'GYM_OWNER' | 'JOB_SEEKER' = 'GYM_OWNER', subtitle = '') => {
    setAuthModalRole(defaultRole);
    setAuthModalSubtitle(subtitle || `Login or Register as a ${defaultRole === 'GYM_OWNER' ? 'Gym Owner' : 'Job Seeker'} to perform this business action`);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  const handleAuthSuccess = (user: any, token: string) => {
    setCurrentUser(user);
    setAccessToken(token);
    localStorage.setItem('tanush_user', JSON.stringify(user));
    if (token) localStorage.setItem('tanush_token', token);

    // Ensure logged-in / registered user is present in userList with a distinct unique ID
    if (user) {
      const userUniqueId = user.id || user._id || `usr-reg-${Date.now()}`;
      setUserList(prev => {
        const existingIndex = prev.findIndex(u => u.id === userUniqueId || u.email === user.email);
        if (existingIndex >= 0) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            id: userUniqueId,
            name: user.name || updated[existingIndex].name,
            email: user.email || updated[existingIndex].email,
            mobile: user.mobile || updated[existingIndex].mobile,
            role: user.role || updated[existingIndex].role,
            companyName: user.gymOwnerProfile?.companyName || user.companyName || updated[existingIndex].companyName,
            gstNumber: user.gymOwnerProfile?.gstNumber || user.gstNumber || updated[existingIndex].gstNumber,
          };
          localStorage.setItem('tanush_user_list', JSON.stringify(updated));
          return updated;
        } else {
          const newUser: UserAccount = {
            id: userUniqueId,
            name: user.name || 'Registered User',
            email: user.email,
            mobile: user.mobile || '+91 90000 00000',
            role: user.role || 'GYM_OWNER',
            companyName: user.gymOwnerProfile?.companyName || user.companyName,
            gstNumber: user.gymOwnerProfile?.gstNumber || user.gstNumber,
            isVerified: Boolean(user.isVerified),
            status: user.status || 'ACTIVE',
            createdAt: user.createdAt || new Date().toISOString().split('T')[0],
          };
          const updated = [newUser, ...prev];
          localStorage.setItem('tanush_user_list', JSON.stringify(updated));
          return updated;
        }
      });
    }

    showToast(`Welcome back, ${user.name || user.email}!`);
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setAccessToken(null);
    localStorage.removeItem('tanush_user');
    localStorage.removeItem('tanush_token');
    showToast('Logged out successfully', 'info');
  };

  const [enquiryCart, setEnquiryCart] = useState<CartItem[]>([]);
  const [isEnquiryCartOpen, setIsEnquiryCartOpen] = useState(false);

  const [wishlist, setWishlist] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Manpower
  const [jobListings, setJobListings] = useState<JobListing[]>(INITIAL_JOBS);
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);

  // Services & Enquiries
  const [serviceEnquiries, setServiceEnquiries] = useState<ServiceEnquiry[]>([]);
  const [selectedServiceModal, setSelectedServiceModal] = useState<BusinessService | null>(null);

  // Equipment Enquiries
  const [equipmentEnquiries, setEquipmentEnquiries] = useState<EquipmentEnquiry[]>([]);

  // Contact Enquiries
  const [contactEnquiries, setContactEnquiries] = useState<ContactEnquiry[]>([]);

  // Toast
  const [toast, setToast] = useState<ToastState>({
    message: '',
    type: 'success',
    visible: false,
  });

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 3500);
  };

  // Admin Auth Methods
  const loginAdmin = (passcode: string): boolean => {
    const validPasscodes = ['admin2026', 'tanushadmin', 'admin123', 'tanush2026'];
    if (validPasscodes.includes(passcode.toLowerCase().trim())) {
      setIsAdminAuthenticated(true);
      localStorage.setItem('tanush_admin_auth', 'true');
      showToast('Admin Credentials Verified. Access Granted.');
      return true;
    }
    showToast('Invalid Security Passcode. Access Denied.', 'error');
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    localStorage.removeItem('tanush_admin_auth');
    showToast('Admin Session Ended.', 'info');
    setCurrentPage('home');
  };

  const navigateTo = (page: PageType, productId?: string) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enquiry Cart Functions
  const addToEnquiryCart = (product: Product, quantity = 1) => {
    setEnquiryCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to Enquiry Cart`);
  };

  const removeFromEnquiryCart = (productId: string) => {
    setEnquiryCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from Enquiry Cart', 'info');
  };

  const updateEnquiryCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromEnquiryCart(productId);
      return;
    }
    setEnquiryCart(prev =>
      prev.map(item => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearEnquiryCart = () => {
    setEnquiryCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist', 'info');
        return prev.filter(id => id !== productId);
      }
      showToast('Added to Wishlist');
      return [...prev, productId];
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const setFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  const addJobListing = (job: Omit<JobListing, 'id' | 'createdAt' | 'applicationsCount'>) => {
    const newJob: JobListing = {
      ...job,
      id: `job-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      applicationsCount: 0,
      isActive: true,
    };
    setJobListings(prev => [newJob, ...prev]);
    showToast('Job listing posted successfully!');
  };

  const moderateJob = (jobId: string, action: 'APPROVE' | 'REJECT') => {
    setJobListings(prev =>
      prev.map(j => (j.id === jobId ? { ...j, isActive: action === 'APPROVE' } : j))
    );
    showToast(`Job listing ${action === 'APPROVE' ? 'Approved & Live' : 'Rejected & Flagged'}`);
  };

  const submitJobApplication = (app: Omit<JobApplication, 'id' | 'submittedAt' | 'status'>) => {
    const newApp: JobApplication = {
      ...app,
      id: `app-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      status: 'Pending Review',
    };
    setJobApplications(prev => [newApp, ...prev]);

    setJobListings(prev =>
      prev.map(j => (j.id === app.jobId ? { ...j, applicationsCount: j.applicationsCount + 1 } : j))
    );

    showToast('Application submitted successfully!');
  };

  const openServiceModal = (service: BusinessService) => setSelectedServiceModal(service);
  const closeServiceModal = () => setSelectedServiceModal(null);

  const submitServiceEnquiry = (enquiry: Omit<ServiceEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: ServiceEnquiry = {
      ...enquiry,
      id: `se-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'New',
    };
    setServiceEnquiries(prev => [newEnquiry, ...prev]);
    showToast('Service enquiry submitted! A representative will contact you soon.');
    closeServiceModal();
  };

  const submitEquipmentEnquiry = async (enquiryData: any): Promise<boolean> => {
    try {
      const payload = {
        name: enquiryData.name || currentUser?.name || 'Gym Owner',
        email: enquiryData.email || currentUser?.email,
        mobile: enquiryData.mobile || currentUser?.mobile,
        companyGymName: enquiryData.companyGymName || currentUser?.companyName || 'Gym Center',
        city: enquiryData.city || 'Delhi',
        gstNumber: enquiryData.gstNumber,
        notes: enquiryData.notes,
        items: enquiryCart.map(item => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      };

      fetch(`${API_BASE_URL}/api/v1/equipment/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(err => console.log('Backend sync notice:', err.message));

      const newEnquiry: EquipmentEnquiry = {
        id: `rfq-${Date.now()}`,
        rfqReference: `RFQ-${Math.floor(100000 + Math.random() * 900000)}`,
        name: payload.name,
        companyGymName: payload.companyGymName,
        email: payload.email,
        mobile: payload.mobile,
        city: payload.city,
        requirements: payload.notes || '',
        selectedProducts: enquiryCart.map(item => ({
          id: item.product.id,
          name: item.product.name,
          quantity: item.quantity,
        })),
        createdAt: new Date().toISOString(),
        status: 'New RFQ',
      };

      setEquipmentEnquiries(prev => [newEnquiry, ...prev]);
      clearEnquiryCart();
      return true;
    } catch (error) {
      console.error('Submission failed', error);
      showToast('Enquiry submission failed. Please try again.', 'error');
      return false;
    }
  };

  const submitContactEnquiry = (enquiry: Omit<ContactEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: ContactEnquiry = {
      ...enquiry,
      id: `ce-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'Unread',
    };
    setContactEnquiries(prev => [newEnquiry, ...prev]);
    showToast('Message sent! Our support team will get back to you within 24 hours.');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigateTo,
        selectedProductId,
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        platformSettings,
        updatePlatformSettings,
        userList,
        updateUserStatus,
        verifyUserGST,
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,
        currentUser,
        accessToken,
        isAuthModalOpen,
        authModalRole,
        authModalSubtitle,
        openAuthModal,
        closeAuthModal,
        logoutUser,
        handleAuthSuccess,
        enquiryCart,
        addToEnquiryCart,
        removeFromEnquiryCart,
        updateEnquiryCartQuantity,
        clearEnquiryCart,
        isEnquiryCartOpen,
        setIsEnquiryCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        filters,
        setFilter,
        resetFilters,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        jobListings,
        jobApplications,
        addJobListing,
        moderateJob,
        submitJobApplication,
        serviceEnquiries,
        selectedServiceModal,
        openServiceModal,
        closeServiceModal,
        submitServiceEnquiry,
        equipmentEnquiries,
        submitEquipmentEnquiry,
        contactEnquiries,
        submitContactEnquiry,
        toast,
        showToast,
      }}
    >
      {children}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={closeAuthModal}
        onSuccess={handleAuthSuccess}
        defaultRole={authModalRole}
        subtitle={authModalSubtitle}
      />
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
