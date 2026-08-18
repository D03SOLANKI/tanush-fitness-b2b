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
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        >
          {/* Close Button */}
          <button
            onClick={() => {
              resetForm();
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-2 border border-blue-100">
              <Lock className="w-3 h-3" />
              <span>AUTHENTICATION GATE</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 font-heading uppercase tracking-tight">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-xs text-slate-500 mt-1 font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Toggle Tabs (Login vs Register) */}
          <div className="flex bg-slate-100 p-1 rounded-2xl mb-6">
            <button
              type="button"
              onClick={() => handleSwitchTab(true)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 ${
                isLogin ? 'bg-white text-slate-900 shadow-sm font-black' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login</span>
            </button>
            <button
              type="button"
              onClick={() => handleSwitchTab(false)}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase transition-all flex items-center justify-center gap-2 ${
                !isLogin ? 'bg-white text-slate-900 shadow-sm font-black' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Register</span>
            </button>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-4 p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5">
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
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">
                    Account Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRole('GYM_OWNER')}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        role === 'GYM_OWNER'
                          ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Building2 className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                      <div className="text-[11px] font-bold uppercase">Gym Owner</div>
                      <div className="text-[9px] text-slate-500 font-normal">Buy Gear & Post Jobs</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRole('JOB_SEEKER')}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        role === 'JOB_SEEKER'
                          ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <User className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                      <div className="text-[11px] font-bold uppercase">Job Seeker</div>
                      <div className="text-[9px] text-slate-500 font-normal">Apply for Careers</div>
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Vikram Singhania"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 pl-9 text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* Role Specific Fields */}
                {role === 'GYM_OWNER' ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                        Gym / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Apex Fitness"
                        value={gymName}
                        onChange={e => setGymName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Mumbai"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                      Preferred City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Gurugram / Bangalore"
                      value={preferredCity}
                      onChange={e => setPreferredCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                )}

                {/* Email & Mobile */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vikram@apex.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={mobile}
                      onChange={e => setMobile(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              </>
            )}

            {isLogin && (
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                  Email or Mobile Number *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="vikram@apex.com or 9876543210"
                    value={identifier}
                    onChange={e => setIdentifier(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 pl-9 text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                Password *
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  placeholder="Min 8 chars (A-z, 0-9)"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 pl-9 text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                  Confirm Password *
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="Re-enter password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 pl-9 text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50 mt-4"
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
