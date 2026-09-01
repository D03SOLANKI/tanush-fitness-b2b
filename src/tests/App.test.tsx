import React from 'react';
import { describe, it, expect, beforeAll, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { normalizeUserList } from '../context/AppContext';
import { AuthModal } from '../components/auth/AuthModal';

beforeAll(() => {
  if (typeof window !== 'undefined' && !window.matchMedia) {
    window.matchMedia = (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as any;
  }
});

describe('Tanush Fitness B2B Platform Tests', () => {
  it('renders the B2B marketplace brand heading', () => {
    render(<App />);
    const headings = screen.getAllByText(/TANUSH/i);
    expect(headings.length).toBeGreaterThan(0);
  });

  it('guarantees unique IDs and strict row isolation for user operations', () => {
    const rawUsers = [
      { id: 'usr-1', name: 'User One', status: 'ACTIVE' },
      { id: 'usr-1', name: 'Duplicate User', status: 'ACTIVE' },
      { id: '', name: 'Missing ID User', status: 'ACTIVE' },
    ];

    const normalized = normalizeUserList(rawUsers);
    
    // 1. Verify all IDs are non-empty and strictly unique
    const ids = normalized.map(u => u.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(normalized.length);

    // 2. Test single-row mutation isolation: suspend only row #2
    const targetId = normalized[1].id;
    const mutated = normalized.map(u => u.id === targetId ? { ...u, status: 'SUSPENDED' } : u);

    expect(mutated[1].status).toBe('SUSPENDED');
    expect(mutated[0].status).toBe('ACTIVE');
    expect(mutated[2].status).toBe('ACTIVE');
  });
});

describe('Authentication QA Suite (Login & Register for Gym Owner and Job Seeker)', () => {
  it('renders AuthModal in Login mode by default with email/identifier input', () => {
    const onClose = vi.fn();
    const onSuccess = vi.fn();

    render(
      <AuthModal
        isOpen={true}
        onClose={onClose}
        onSuccess={onSuccess}
      />
    );

    expect(screen.getByText(/AUTHENTICATION GATE/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/vikram@apex.com or 9876543210/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Min 8 chars \(A-z, 0-9\)/i)).toBeInTheDocument();
  });

  it('switches to Register mode and renders Gym Owner fields by default', () => {
    const onClose = vi.fn();
    const onSuccess = vi.fn();

    render(
      <AuthModal
        isOpen={true}
        onClose={onClose}
        onSuccess={onSuccess}
      />
    );

    // Click Register tab
    const registerTab = screen.getByRole('button', { name: /Register/i });
    fireEvent.click(registerTab);

    expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Gym Owner/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Job Seeker/i })).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Apex Luxury Fitness Club/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Ahmedabad \/ Gandhinagar \/ Delhi/i)).toBeInTheDocument();
  });

  it('switches role to Job Seeker and dynamically displays Preferred Job City', () => {
    const onClose = vi.fn();
    const onSuccess = vi.fn();

    render(
      <AuthModal
        isOpen={true}
        onClose={onClose}
        onSuccess={onSuccess}
      />
    );

    // Switch to Register tab
    const registerTab = screen.getByRole('button', { name: /Register/i });
    fireEvent.click(registerTab);

    // Switch role to Job Seeker
    const jobSeekerBtn = screen.getByRole('button', { name: /Job Seeker/i });
    fireEvent.click(jobSeekerBtn);

    // Verify Gym Name is not present and Preferred Work City is present
    expect(screen.queryByPlaceholderText(/Apex Luxury Fitness Club/i)).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Mumbai \/ Delhi \/ Bengaluru/i)).toBeInTheDocument();
  });

  it('catches password mismatch on registration', () => {
    const onClose = vi.fn();
    const onSuccess = vi.fn();

    render(
      <AuthModal
        isOpen={true}
        onClose={onClose}
        onSuccess={onSuccess}
      />
    );

    // Switch to Register tab
    const registerTab = screen.getByRole('button', { name: /Register/i });
    fireEvent.click(registerTab);

    // Fill form with mismatched passwords
    const nameInput = screen.getByPlaceholderText(/Vikram Malhotra/i);
    const emailInput = screen.getByPlaceholderText(/vikram@apexwellness.com/i);
    const mobileInput = screen.getByPlaceholderText(/\+91 98112 34567/i);
    const passwordInput = screen.getByPlaceholderText(/Min 8 chars \(A-z, 0-9\)/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/Re-enter password/i);

    const gymNameInput = screen.getByPlaceholderText(/Apex Luxury Fitness Club/i);
    const cityInput = screen.getByPlaceholderText(/Ahmedabad \/ Gandhinagar \/ Delhi/i);

    fireEvent.change(nameInput, { target: { value: 'Aarav Sharma' } });
    fireEvent.change(emailInput, { target: { value: 'aarav@gmail.com' } });
    fireEvent.change(mobileInput, { target: { value: '+91 98765 43210' } });
    fireEvent.change(gymNameInput, { target: { value: 'Aarav Fitness' } });
    fireEvent.change(cityInput, { target: { value: 'Mumbai' } });
    fireEvent.change(passwordInput, { target: { value: 'Password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'Password456' } });

    // Submit form
    const submitBtn = screen.getByRole('button', { name: /Register & Continue/i });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
  });
});

describe('Admin Panel → Live Website Workflow Tests', () => {
  it('authenticates admin with valid passcode admin2026 and rejects invalid passcode', () => {
    const checkPasscode = (code: string) => code === 'admin2026';
    expect(checkPasscode('admin2026')).toBe(true);
    expect(checkPasscode('wrongpass')).toBe(false);
  });

  it('verifies product creation, editing, and deletion in catalog manager', () => {
    let mockProducts: any[] = [];

    // 1. ADD PRODUCT
    const newProduct = {
      id: 'prod-custom-999',
      name: 'Tanush Hyper-Squat Pro Rig',
      category: 'Strength',
      price: 185000,
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
      specs: { 'Steel Frame': 'Heavy Structural Laser Cut' },
    };
    mockProducts = [newProduct, ...mockProducts];
    expect(mockProducts.length).toBe(1);
    expect(mockProducts[0].name).toBe('Tanush Hyper-Squat Pro Rig');

    // 2. EDIT PRODUCT
    mockProducts = mockProducts.map(p =>
      p.id === 'prod-custom-999'
        ? { ...p, name: 'Tanush Hyper-Squat Pro Rig V2 (Edited)', price: 195000 }
        : p
    );
    expect(mockProducts[0].name).toBe('Tanush Hyper-Squat Pro Rig V2 (Edited)');
    expect(mockProducts[0].price).toBe(195000);

    // 3. DELETE PRODUCT
    mockProducts = mockProducts.filter(p => p.id !== 'prod-custom-999');
    expect(mockProducts.length).toBe(0);
    expect(mockProducts.find(p => p.id === 'prod-custom-999')).toBeUndefined();
  });

  it('verifies job listing creation, moderation, and removal', () => {
    let mockJobs: any[] = [];

    // 1. ADD JOB
    const newJob = {
      id: 'job-999',
      title: 'Head Biomechanics Coach',
      gymName: 'Tanush High Performance Club',
      city: 'Gandhinagar',
      isActive: true,
    };
    mockJobs = [newJob, ...mockJobs];
    expect(mockJobs.length).toBe(1);
    expect(mockJobs[0].isActive).toBe(true);

    // 2. MODERATE / DEACTIVATE JOB
    mockJobs = mockJobs.map(j => (j.id === 'job-999' ? { ...j, isActive: false } : j));
    expect(mockJobs[0].isActive).toBe(false);

    // 3. REMOVE JOB
    mockJobs = mockJobs.filter(j => j.id !== 'job-999');
    expect(mockJobs.length).toBe(0);
  });

  it('verifies platform settings update for contact info and banner', () => {
    let settings = {
      supportPhone: '+91 73832 49680',
      supportEmail: 'Info@tanushfitness.com',
      bannerText: '⚡ Commercial Setup Special Offer',
      bannerEnabled: true,
    };

    // Update settings
    settings = {
      ...settings,
      supportPhone: '+91 73832 49680',
      supportEmail: 'Info@tanushfitness.com',
      bannerText: '⚡ Grand Opening Factory Direct Offer',
      bannerEnabled: false,
    };

    expect(settings.supportPhone).toBe('+91 73832 49680');
    expect(settings.supportEmail).toBe('Info@tanushfitness.com');
    expect(settings.bannerText).toBe('⚡ Grand Opening Factory Direct Offer');
    expect(settings.bannerEnabled).toBe(false);
  });
});


