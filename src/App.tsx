import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { QuickViewModal } from './components/common/QuickViewModal';
import { Toast } from './components/common/Toast';
import { CartDrawer } from './components/cart/CartDrawer';
import { RegisterGymModal } from './components/home/RegisterGymModal';
import { ServiceBookingModal } from './components/services/ServiceBookingModal';
import { HomePage } from './pages/HomePage';
import { MarketplacePage } from './pages/MarketplacePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ServicesPage } from './pages/ServicesPage';

const AppContent: React.FC = () => {
  const { currentPage } = useApp();

  return (
    <div className="min-h-screen bg-[#090909] text-white font-sans antialiased flex flex-col justify-between overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
      <Navbar />

      <div className="flex-1">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'marketplace' && <MarketplacePage />}
        {currentPage === 'product-detail' && <ProductDetailPage />}
        {currentPage === 'services' && <ServicesPage />}
      </div>

      <Footer />

      {/* Global Modals, Drawers & Micro Toast */}
      <CartDrawer />
      <QuickViewModal />
      <ServiceBookingModal />
      <RegisterGymModal />
      <Toast />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
