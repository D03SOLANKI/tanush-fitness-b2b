import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, Building2, User, LogIn, UserPlus, AlertCircle } from 'lucide-react';

import { API_BASE_URL } from '../../config/api';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userData: any, accessToken: string) => void;
  defaultRole?: 'GYM_OWNER' | 'JOB_SEEKER';
  subtitle?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  defaultRole = 'GYM_OWNER',
  subtitle = 'Login or Register as a Gym Owner to request B2B quotations',
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'GYM_OWNER' | 'JOB_SEEKER'>(defaultRole);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form Fields
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gymName, setGymName] = useState('');
  const [city, setCity] = useState('');
  const [preferredCity, setPreferredCity] = useState('');

  const resetForm = () => {
    setErrorMessage('');
    setIdentifier('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    setEmail('');
    setMobile('');
    setGymName('');
    setCity('');
    setPreferredCity('');
  };

  const handleSwitchTab = (loginTab: boolean) => {
    setIsLogin(loginTab);
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    const baseUrl = `${API_BASE_URL}/api/v1/auth`;

    try {
      if (isLogin) {
        // LOGIN REQUEST
        const res = await fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier, password }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || 'Invalid login credentials');
        }

        onSuccess(data.data.user, data.data.accessToken);
        resetForm();
        onClose();
      } else {
        // REGISTER REQUEST
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match');
        }

        const payload: any = {
          name,
          email,
          mobile,
          password,
          confirmPassword,
          role,
        };

        if (role === 'GYM_OWNER') {
          payload.gymName = gymName;
          payload.city = city;
        } else {
          payload.preferredCity = preferredCity;
        }

        const res = await fetch(`${baseUrl}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          const firstErr = data.errors?.[0]?.message;
          throw new Error(firstErr || data.message || 'Registration failed');
        }

        // Auto login after registration
        const loginRes = await fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ identifier: email, password }),
        });

        const loginData = await loginRes.json();
        if (loginRes.ok && loginData.success) {
          onSuccess(loginData.data.user, loginData.data.accessToken);
        } else {
          onSuccess(data.data.user, '');
        }

        resetForm();
        onClose();
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An authentication error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0C1015]/80 backdrop-blur-md flex items-center justify-center p-4 font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-[#E8E8E8] rounded-2xl max-w-md w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-[#2A2A2B]/20 relative my-8 text-[#0F1926]"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#0F1926]/10 text-[#2A2A2B] hover:text-[#0F1926] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F1926]/10 text-[#0F1926] text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#0F1926]/15">
              <Lock className="w-3 h-3 text-[#0F1926]" />
              <span>AUTHENTICATION GATE</span>
            </div>
            <h2 className="text-xl font-black text-[#0F1926] font-satoshi uppercase tracking-[0.03em] leading-snug">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-xs text-[#2A2A2B]/80 mt-1 font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Toggle Tabs (Login vs Register) */}
          <div className="flex bg-[#0F1926]/10 p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => handleSwitchTab(true)}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isLogin ? 'bg-[#0F1926] text-white shadow-sm font-black' : 'text-[#2A2A2B] hover:text-[#0F1926]'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </button>
            <button
              type="button"
              onClick={() => handleSwitchTab(false)}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                !isLogin ? 'bg-[#0F1926] text-white shadow-sm font-black' : 'text-[#2A2A2B] hover:text-[#0F1926]'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Register</span>
            </button>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-4 p-3.5 rounded-xl bg-white border border-[#2A2A2B]/20 text-[#0F1926] text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="font-medium leading-snug">{errorMessage}</span>
            </div>
          )}

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {!isLogin && (
              <>
                {/* Role Picker (Gym Owner vs Job Seeker) */}
                <div>
                  <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1.5">
                    Account Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRole('GYM_OWNER')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        role === 'GYM_OWNER'
                          ? 'border-[#0F1926] bg-[#0F1926] text-white font-bold'
                          : 'border-[#0F1926]/20 text-[#2A2A2B] hover:bg-[#0F1926]/5'
                      }`}
                    >
                      <Building2 className="w-4 h-4 mx-auto mb-1 text-current" />
                      <div className="text-[11px] font-bold uppercase">Gym Owner</div>
                      <div className="text-[9px] text-[#D0CFCA] font-normal">Buy Gear & Post Jobs</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRole('JOB_SEEKER')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        role === 'JOB_SEEKER'
                          ? 'border-[#0F1926] bg-[#0F1926] text-white font-bold'
                          : 'border-[#0F1926]/20 text-[#2A2A2B] hover:bg-[#0F1926]/5'
                      }`}
                    >
                      <User className="w-4 h-4 mx-auto mb-1 text-current" />
                      <div className="text-[11px] font-bold uppercase">Job Seeker</div>
                      <div className="text-[9px] text-[#D0CFCA] font-normal">Apply for Careers</div>
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vikram Malhotra"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full bg-white border border-[#0F1926]/20 rounded-xl py-2.5 px-3 text-[#0F1926] focus:outline-none focus:border-[#0F1926]"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@apexwellness.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#0F1926]/20 rounded-xl py-2.5 px-3 text-[#0F1926] focus:outline-none focus:border-[#0F1926]"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98112 34567"
                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                    className="w-full bg-white border border-[#0F1926]/20 rounded-xl py-2.5 px-3 text-[#0F1926] focus:outline-none focus:border-[#0F1926]"
                  />
                </div>

                {role === 'GYM_OWNER' ? (
                  <>
                    {/* Gym / Facility Name */}
                    <div>
                      <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1">
                        Gym / Club Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Apex Luxury Fitness Club"
                        value={gymName}
                        onChange={e => setGymName(e.target.value)}
                        className="w-full bg-white border border-[#0F1926]/20 rounded-xl py-2.5 px-3 text-[#0F1926] focus:outline-none focus:border-[#0F1926]"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1">
                        Operating City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ahmedabad / Gandhinagar / Delhi"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="w-full bg-white border border-[#0F1926]/20 rounded-xl py-2.5 px-3 text-[#0F1926] focus:outline-none focus:border-[#0F1926]"
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1">
                      Preferred Work City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mumbai / Delhi / Bengaluru"
                      value={preferredCity}
                      onChange={e => setPreferredCity(e.target.value)}
                      className="w-full bg-white border border-[#0F1926]/20 rounded-xl py-2.5 px-3 text-[#0F1926] focus:outline-none focus:border-[#0F1926]"
                    />
                  </div>
                )}
              </>
            )}

            {isLogin && (
              <div>
                <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1">
                  Email or Mobile Number *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#2A2A2B]/60 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="vikram@apex.com or 9876543210"
                    value={identifier}
                    onChange={e => setIdentifier(e.target.value)}
                    className="w-full bg-white border border-[#0F1926]/20 rounded-xl py-2.5 px-3 pl-9 text-[#0F1926] focus:outline-none focus:border-[#0F1926]"
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div>
              <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1">
                Password *
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#2A2A2B]/60 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  placeholder="Min 8 chars (A-z, 0-9)"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-white border border-[#0F1926]/20 rounded-xl py-2.5 px-3 pl-9 text-[#0F1926] focus:outline-none focus:border-[#0F1926]"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="text-[10px] font-bold text-[#2A2A2B] uppercase block mb-1">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#2A2A2B]/60 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="w-full bg-white border border-[#0F1926]/20 rounded-xl py-2.5 px-3 pl-9 text-[#0F1926] focus:outline-none focus:border-[#0F1926]"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-dark w-full py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50 mt-4 cursor-pointer"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : isLogin ? (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Login & Continue</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Register & Continue</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
