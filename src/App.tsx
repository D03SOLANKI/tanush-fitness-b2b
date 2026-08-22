import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { VaultNavbar } from './components/vault/VaultNavbar';
import { VaultFooter } from './components/vault/VaultFooter';
import { Toast } from './components/common/Toast';
import { VaultHomePage } from './pages/VaultHomePage';
import { VaultMembershipPage } from './pages/VaultMembershipPage';
import { VaultTrainingPage } from './pages/VaultTrainingPage';
import { VaultClubsPage } from './pages/VaultClubsPage';
import { VaultFranchisePage } from './pages/VaultFranchisePage';
import { VaultBlogsPage } from './pages/VaultBlogsPage';
import { VaultContactPage } from './pages/VaultContactPage';
import { VaultTncPage } from './pages/VaultTncPage';
import { AdminPage } from './pages/AdminPage';
import { AdminHeader } from './components/admin/AdminHeader';

const MainContent: React.FC = () => {
  const { currentPage } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <VaultHomePage />;
      case 'membership-benefit':
      case 'services':
        return <VaultMembershipPage />;
      case 'training-facilities':
      case 'equipment':
      case 'manpower':
        return <VaultTrainingPage />;
      case 'clubs':
        return <VaultClubsPage />;
      case 'franchise':
        return <VaultFranchisePage />;
      case 'blogs':
        return <VaultBlogsPage />;
      case 'contact':
        return <VaultContactPage />;
      case 'tnc':
        return <VaultTncPage />;
      case 'about':
        return <VaultHomePage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <VaultHomePage />;
    }
  };

  const isAdmin = currentPage === 'admin';

  return (
    <div className="min-h-screen bg-[#090C10] text-[#E2E8F0] flex flex-col justify-between selection:bg-[#D26539] selection:text-white font-sans antialiased luxury-noise">
      {isAdmin ? <AdminHeader /> : <VaultNavbar />}
      <div className="flex-1">{renderPage()}</div>
      {!isAdmin && <VaultFooter />}
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
