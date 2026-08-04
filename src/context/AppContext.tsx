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

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

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

  // Enquiry Cart Functions (Frictionless Local Storage)
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
    if (!currentUser) {
      openAuthModal('GYM_OWNER', 'Login or Register as a Gym Owner to post jobs');
      return;
    }
    if (currentUser.role !== 'GYM_OWNER') {
      showToast('Only Gym Owners can post jobs.', 'error');
      return;
    }
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
    if (!currentUser) {
      openAuthModal('JOB_SEEKER', 'Login or Register as a Job Seeker to apply for jobs');
      return;
    }
    if (currentUser.role !== 'JOB_SEEKER') {
      showToast('Only Job Seekers can apply for jobs.', 'error');
      return;
    }
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

  /**
   * Submit Equipment RFQ Enquiry to Express Backend
   * Gated: Requires GYM_OWNER authentication
   */
  const submitEquipmentEnquiry = async (enquiryData: any): Promise<boolean> => {
    // 1. Check Authentication Gate
    if (!currentUser || !accessToken) {
      openAuthModal(
        'GYM_OWNER',
        'Login or Register as a Gym Owner to submit an official RFQ quotation request'
      );
      return false;
    }

    // 2. Check Role Gate
    if (currentUser.role !== 'GYM_OWNER') {
      showToast('Only Gym Owners can submit equipment enquiries.', 'error');
      return false;
    }

    // 3. Send HTTP Request to Express Backend
    try {
      const payload = {
        gymName: enquiryData.companyGymName || enquiryData.gymName,
        city: enquiryData.city || 'Mumbai',
        contactName: enquiryData.name || currentUser.name,
        contactEmail: enquiryData.email || currentUser.email,
        contactPhone: enquiryData.mobile || currentUser.mobile || '9876543210',
        notes: enquiryData.requirements,
        items: enquiryCart.map(item => ({
          productId: item.product.id,
          quantity: item.quantity,
        })),
      };

      const res = await fetch('http://localhost:5000/api/v1/equipment/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit RFQ');
      }

      const newEnquiry: EquipmentEnquiry = {
        id: data.data.enquiry.id,
        rfqReference: data.data.enquiry.rfqReference,
        name: enquiryData.name,
        companyGymName: enquiryData.companyGymName,
        mobile: enquiryData.mobile,
        email: enquiryData.email,
        city: enquiryData.city,
        requirements: enquiryData.requirements,
        timeframe: enquiryData.timeframe,
        selectedProducts: enquiryCart.map(item => ({
          id: item.product.id,
          name: item.product.name,
          quantity: item.quantity,
        })),
        createdAt: new Date().toLocaleString(),
        status: 'New RFQ',
      };

      setEquipmentEnquiries(prev => [newEnquiry, ...prev]);
      clearEnquiryCart();
      showToast('Official B2B RFQ Quotation submitted to Express Backend!');
      return true;
    } catch (err: any) {
      showToast(err.message || 'Error submitting RFQ to backend', 'error');
      return false;
    }
  };

  const submitServiceEnquiry = (enquiryData: Omit<ServiceEnquiry, 'id' | 'createdAt' | 'status'>) => {
    if (!currentUser) {
      openAuthModal('GYM_OWNER', 'Login or Register as a Gym Owner to request service consultation');
      return;
    }
    if (currentUser.role !== 'GYM_OWNER') {
      showToast('Only Gym Owners can submit service enquiries.', 'error');
      return;
    }
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
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
