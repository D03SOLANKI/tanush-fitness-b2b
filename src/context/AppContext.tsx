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

interface ToastState {
  message: string;
  type: 'success' | 'info' | 'error';
  visible: boolean;
}

interface AppContextType {
  currentPage: PageType;
  navigateTo: (page: PageType, productId?: string) => void;
  selectedProductId: string | null;

  // Admin Auth Security
  isAdminAuthenticated: boolean;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;

  // Enquiry Cart (No monetary pricing)
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
  submitJobApplication: (app: Omit<JobApplication, 'id' | 'submittedAt' | 'status'>) => void;

  // Service Enquiries
  serviceEnquiries: ServiceEnquiry[];
  selectedServiceModal: BusinessService | null;
  openServiceModal: (service: BusinessService) => void;
  closeServiceModal: () => void;
  submitServiceEnquiry: (enquiry: Omit<ServiceEnquiry, 'id' | 'createdAt' | 'status'>) => void;

  // Equipment Enquiries
  equipmentEnquiries: EquipmentEnquiry[];
  submitEquipmentEnquiry: (enquiry: Omit<EquipmentEnquiry, 'id' | 'createdAt' | 'status'>) => void;

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

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Admin Auth State (Persisted in localStorage)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('tanush_admin_auth') === 'true';
  });

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

  // Admin Auth Methods (Passcode: admin2026 or tanushadmin)
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

  const clearEnquiryCart = () => setEnquiryCart([]);

  // Wishlist
  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from Wishlist', 'info');
        return prev.filter(id => id !== productId);
      }
      showToast('Saved to Wishlist');
      return [...prev, productId];
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  // Filters
  const setFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => setFilters(defaultFilters);

  // Quick View
  const openQuickView = (product: Product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  // Service Modal
  const openServiceModal = (service: BusinessService) => setSelectedServiceModal(service);
  const closeServiceModal = () => setSelectedServiceModal(null);

  // Submit Handlers
  const addJobListing = (newJobData: Omit<JobListing, 'id' | 'createdAt' | 'applicationsCount'>) => {
    const newJob: JobListing = {
      ...newJobData,
      id: `job-${Date.now()}`,
      createdAt: 'Just now',
      applicationsCount: 0,
    };
    setJobListings(prev => [newJob, ...prev]);
    showToast(`Job listing "${newJob.title}" posted successfully!`);
  };

  const submitJobApplication = (appData: Omit<JobApplication, 'id' | 'submittedAt' | 'status'>) => {
    const newApp: JobApplication = {
      ...appData,
      id: `app-${Date.now()}`,
      submittedAt: new Date().toLocaleDateString(),
      status: 'Pending Review',
    };
    setJobApplications(prev => [newApp, ...prev]);

    setJobListings(prev =>
      prev.map(j => (j.id === appData.jobId ? { ...j, applicationsCount: j.applicationsCount + 1 } : j))
    );

    showToast('Job Application submitted successfully!');
  };

  const submitEquipmentEnquiry = (enquiryData: Omit<EquipmentEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: EquipmentEnquiry = {
      ...enquiryData,
      id: `eq-${Date.now()}`,
      createdAt: new Date().toLocaleString(),
      status: 'New RFQ',
    };
    setEquipmentEnquiries(prev => [newEnquiry, ...prev]);
    clearEnquiryCart();
    setIsEnquiryCartOpen(false);
    showToast('Quotation Request submitted! Sales team will email/WhatsApp your quote.');
  };

  const submitServiceEnquiry = (enquiryData: Omit<ServiceEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: ServiceEnquiry = {
      ...enquiryData,
      id: `srv-${Date.now()}`,
      createdAt: new Date().toLocaleString(),
      status: 'New',
    };
    setServiceEnquiries(prev => [newEnquiry, ...prev]);
    closeServiceModal();
    showToast('Service Request received! A Tanush consultant will contact you within 2 hours.');
  };

  const submitContactEnquiry = (contactData: Omit<ContactEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newContact: ContactEnquiry = {
      ...contactData,
      id: `cnt-${Date.now()}`,
      createdAt: new Date().toLocaleString(),
      status: 'Unread',
    };
    setContactEnquiries(prev => [newContact, ...prev]);
    showToast('Message sent successfully! Our executive team will reach out shortly.');
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigateTo,
        selectedProductId,
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,
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
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
