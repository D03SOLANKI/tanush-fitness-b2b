import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { EnquiryCartDrawer } from './components/cart/EnquiryCartDrawer';
import { Toast } from './components/common/Toast';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EquipmentPage } from './pages/EquipmentPage';
import { ManpowerPage } from './pages/ManpowerPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { AdminHeader } from './components/admin/AdminHeader';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'equipment':
        return <EquipmentPage />;
      case 'manpower':
        return <ManpowerPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  const isAdmin = currentPage === 'admin';

  return (
    <div className="min-h-screen bg-[#090C10] text-[#E2E8F0] flex flex-col justify-between selection:bg-[#C5A880] selection:text-[#090C10] font-sans antialiased luxury-noise">
      {isAdmin ? <AdminHeader /> : <Navbar />}
      <div className="flex-1">{renderPage()}</div>
      {!isAdmin && <Footer />}
      <EnquiryCartDrawer />
      <Toast />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
