import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ServiceProvider, CartItem, FilterState } from '../types';
import { PRODUCTS } from '../data/products';

interface Toast {
  id: string;
  title: string;
  subtitle?: string;
  type?: 'cart' | 'wishlist' | 'info';
}

interface AppContextType {
  // Navigation & Page state
  currentPage: 'home' | 'marketplace' | 'product-detail' | 'services';
  selectedProductId: string | null;
  navigateTo: (page: 'home' | 'marketplace' | 'product-detail' | 'services', productId?: string) => void;

  // Cart state
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  // Wishlist state
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;

  // Modals state
  isQuickViewOpen: boolean;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;

  isBookingModalOpen: boolean;
  bookingService: ServiceProvider | null;
  openBookingModal: (service: ServiceProvider) => void;
  closeBookingModal: () => void;

  isRegisterGymModalOpen: boolean;
  setIsRegisterGymModalOpen: (open: boolean) => void;

  isVendorModalOpen: boolean;
  setIsVendorModalOpen: (open: boolean) => void;

  // Filtering state
  filters: FilterState;
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;

  // Loading & Toast simulation
  isLoading: boolean;
  triggerLoading: (durationMs?: number) => void;
  toast: Toast | null;
  showToast: (title: string, subtitle?: string, type?: 'cart' | 'wishlist' | 'info') => void;
}

const initialFilters: FilterState = {
  category: 'all',
  searchQuery: '',
  priceRange: [0, 10000],
  brands: [],
  minRating: 0,
  inStockOnly: false,
  sortBy: 'featured',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<'home' | 'marketplace' | 'product-detail' | 'services'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>('titanforge-power-rack-pro');

  const [cart, setCart] = useState<CartItem[]>(() => [
    { product: PRODUCTS[0], quantity: 2 },
    { product: PRODUCTS[8], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [wishlist, setWishlist] = useState<string[]>(['titanforge-power-rack-pro', 'elitemotion-ultrarun-curved-treadmill']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState<ServiceProvider | null>(null);

  const [isRegisterGymModalOpen, setIsRegisterGymModalOpen] = useState(false);
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  // Scroll to top on page navigation
  const navigateTo = (page: 'home' | 'marketplace' | 'product-detail' | 'services', productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    triggerLoading(600);
  };

  const triggerLoading = (durationMs: number = 600) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), durationMs);
  };

  const showToast = (title: string, subtitle?: string, type: 'cart' | 'wishlist' | 'info' = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToast({ id, title, subtitle, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Cart operations
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added to B2B Cart`, `${product.name} (x${quantity})`, 'cart');
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => {
    const unitPrice = (item.product.bulkPrice && item.quantity >= (item.product.bulkThreshold || 3))
      ? item.product.bulkPrice
      : item.product.price;
    return sum + unitPrice * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Wishlist operations
  const toggleWishlist = (id: string) => {
    setWishlist(prev => {
      const exists = prev.includes(id);
      if (exists) {
        showToast('Removed from Wishlist', undefined, 'wishlist');
        return prev.filter(item => item !== id);
      } else {
        showToast('Saved to B2B Wishlist', 'Item stored in your account saved items.', 'wishlist');
        return [...prev, id];
      }
    });
  };

  const isInWishlist = (id: string) => wishlist.includes(id);

  // Modal handlers
  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  const openBookingModal = (service: ServiceProvider) => {
    setBookingService(service);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setBookingService(null);
  };

  // Filter state handlers
  const setFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    triggerLoading(500);
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        selectedProductId,
        navigateTo,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        isQuickViewOpen,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        isBookingModalOpen,
        bookingService,
        openBookingModal,
        closeBookingModal,
        isRegisterGymModalOpen,
        setIsRegisterGymModalOpen,
        isVendorModalOpen,
        setIsVendorModalOpen,
        filters,
        setFilter,
        resetFilters,
        isLoading,
        triggerLoading,
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
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
