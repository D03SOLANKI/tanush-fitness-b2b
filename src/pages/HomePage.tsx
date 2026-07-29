import React from 'react';
import { useApp } from '../context/AppContext';
import { Hero } from '../components/home/Hero';
import { BrandStrip } from '../components/home/BrandStrip';
import { WhyTanush } from '../components/home/WhyTanush';
import { HowItWorks } from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';
import { Dumbbell, Users, Briefcase, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <main className="bg-white min-h-screen text-slate-900 overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* Brand Strip */}
      <BrandStrip />

      {/* 2. About Tanush Fitness Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>ABOUT TANUSH FITNESS B2B</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading uppercase leading-tight">
                Empowering India's Commercial Gym Owners & Fitness Enterprises
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Tanush Fitness is the single-window ecosystem for commercial health clubs, CrossFit boxes, hotel gyms, and wellness centers. From ISO-certified heavy strength machinery to verified trainer recruitment and digital growth marketing — we power complete gym operations nationwide.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-2xl font-black text-blue-600">500+</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Commercial Gym Outfits</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-2xl font-black text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">RFQ Quotation Guarantee</div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => navigateTo('about')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Read Full Company Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
                  alt="Tanush Fitness Commercial Gym"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8 text-white">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
                      Enterprise Standard
                    </span>
                    <h3 className="text-xl font-black font-heading uppercase">
                      Turnkey Commercial Fitness Architecture
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Businesses (3 Premium Cards) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 font-mono">
              THREE CORE ENTERPRISE PILLARS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
              Our Core Businesses
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Everything your gym needs under one roof: wholesale commercial equipment, certified manpower recruitment, and high-growth digital marketing & tech automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business 1: Commercial Gym Equipment */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-stripe hover:border-blue-500 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
                  alt="Commercial Gym Equipment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white font-mono text-[10px] font-black uppercase tracking-wider">
                    Business 1
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase font-mono mb-1">
                    <Dumbbell className="w-4 h-4" />
                    <span>Hardware Vertical</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 font-heading uppercase">
                    Commercial Gym Equipment
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Provide complete commercial gym equipment for new and existing gyms. 7 Core Categories: Cardio, Strength, Free Weights, Functional, Flooring, Lockers & Accessories.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 font-mono text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Zero Online Prices • RFQ Quotation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Direct Manufacturer Warranty</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigateTo('equipment')}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Explore Equipment & Request Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Business 2: Manpower Services */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-stripe hover:border-blue-500 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
                  alt="Manpower Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white font-mono text-[10px] font-black uppercase tracking-wider">
                    Business 2
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase font-mono mb-1">
                    <Users className="w-4 h-4" />
                    <span>Hiring Platform</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 font-heading uppercase">
                    Manpower Services
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    A dedicated gym hiring portal. Gym Owners post jobs & search candidates. Job Seekers apply for Master Trainer, Gym Manager, Receptionist, & Staff roles.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 font-mono text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Gym Owner Employer Portal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Candidate Resume Upload</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigateTo('manpower')}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Open Gym Hiring Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Business 3: Gym Business Services */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-stripe hover:border-blue-500 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Gym Business Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white font-mono text-[10px] font-black uppercase tracking-wider">
                    Business 3
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase font-mono mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span>Growth & Tech</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 font-heading uppercase">
                    Gym Business Services
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    Everything a gym needs besides equipment: Meta/Google Ads, Branding, Web & Mobile App Dev, 3D Interior Design, AI WhatsApp Automation, & Lead Gen.
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 font-mono text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Case Studies & Portfolios</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>Instant Service Enquiry</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigateTo('services')}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>View 18 Business Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <WhyTanush />

      {/* 5. Process */}
      <HowItWorks />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Contact Snippet Banner */}
      <CallToAction />
    </main>
  );
};
