import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Target, Eye, Award, Building2, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <main className="pt-28 pb-24 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase mb-3">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>WHO WE ARE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
            About Tanush Fitness B2B
          </h1>
          <p className="mt-3 text-sm text-slate-600 font-normal leading-relaxed">
            Tanush Fitness is India’s premier B2B commercial gym marketplace and enterprise service network, powering over 500+ commercial health clubs with wholesale equipment, manpower recruitment, and digital tech.
          </p>
        </div>

        {/* 1. Company Introduction */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-stripe mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase text-blue-600 font-mono">
                ENTERPRISE COMMERCIAL ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading uppercase">
                Building World-Class Fitness Facilities Nationwide
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Founded to solve fragmented procurement and operational challenges in the fitness industry, Tanush Fitness brings factory-direct commercial strength & cardio machinery, certified master trainers, and growth marketing under one unified platform.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                We eliminate middleman markups, guarantee ISO-compliant equipment safety, and provide end-to-end support for new gym setups, franchise expansions, and facility modernizations.
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                alt="Tanush Commercial Gym"
                className="w-full h-72 object-cover rounded-2xl border border-slate-200 shadow-md"
              />
            </div>
          </div>
        </div>

        {/* 2. Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-stripe space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 font-heading uppercase">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To empower every gym owner with transparent B2B wholesale quotation pricing, verified certified manpower placement, and cutting-edge AI marketing automation — enabling health clubs to thrive sustainably.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-stripe space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900 font-heading uppercase">Our Vision</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To become the undisputed benchmark for commercial fitness infrastructure across Asia and North America, setting the highest standard in safety, operational tech, and trainer recruitment.
            </p>
          </div>
        </div>

        {/* 3. Our Story */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-stripe mb-16">
          <h2 className="text-2xl font-black text-slate-900 font-heading uppercase mb-8 text-center">
            Our Growth Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-center">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-3xl font-black text-blue-600">2018</div>
              <div className="text-xs font-bold text-slate-900 uppercase mt-2">Founded</div>
              <p className="text-[10px] text-slate-500 mt-1 font-normal">Started as an equipment technician dispatch firm.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-3xl font-black text-blue-600">2021</div>
              <div className="text-xs font-bold text-slate-900 uppercase mt-2">B2B Expansion</div>
              <p className="text-[10px] text-slate-500 mt-1 font-normal">Launched direct manufacturer wholesale distribution.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-3xl font-black text-blue-600">2023</div>
              <div className="text-xs font-bold text-slate-900 uppercase mt-2">Manpower Portal</div>
              <p className="text-[10px] text-slate-500 mt-1 font-normal">Introduced certified gym trainer & staff hiring portal.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-3xl font-black text-blue-600">2026</div>
              <div className="text-xs font-bold text-slate-900 uppercase mt-2">AI & Services</div>
              <p className="text-[10px] text-slate-500 mt-1 font-normal">Integrated AI WhatsApp bots & 3D CAD design suites.</p>
            </div>
          </div>
        </div>

        {/* 4. Industries We Serve */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase text-blue-600 font-mono">VERSATILE FACILITY CLIENTELE</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading uppercase mt-1">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Commercial Health Clubs', desc: '45,000+ sq ft multi-zone fitness centers requiring heavy 7-gauge power racks & cardio floors.' },
              { title: 'Hotel & Resort Gyms', desc: 'Luxury guest wellness centers needing sleek, low-noise selectorized stacks and keyless lockers.' },
              { title: 'Corporate Wellness Hubs', desc: 'On-site corporate employee fitness rooms with biometric access control & air purification.' },
              { title: 'Residential Luxury Hubs', desc: 'High-end condominium sports clubs requiring durable turf runs and aesthetic dumbbells.' }
            ].map((ind, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-stripe space-y-2">
                <Building2 className="w-6 h-6 text-blue-600 mb-2" />
                <h4 className="text-sm font-black text-slate-900 uppercase font-heading">{ind.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Why Gym Owners Trust Us */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
              THE TANUSH TRUST PROMISE
            </span>
            <h2 className="text-3xl font-black font-heading uppercase">
              Why 500+ Gym Owners Trust Tanush Fitness
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-4 font-mono">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>ISO 9001 Certified</span>
                </div>
                <p className="text-[11px] text-slate-400 font-normal">All strength machinery passes factory stress-testing before shipping.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Trainer Staff</span>
                </div>
                <p className="text-[11px] text-slate-400 font-normal">NASM/CSCS master trainers vetted for facility placement.</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Transparent RFQ Quotes</span>
                </div>
                <p className="text-[11px] text-slate-400 font-normal">No hidden fees. Full wholesale break-down sent within 2 hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Our Team */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase text-blue-600 font-mono">LEADERSHIP & DIRECTORS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading uppercase mt-1">
              Our Executive Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dev Solanki', title: 'Founder & Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', bio: 'Former competitive athlete with 12+ years in commercial gym engineering and B2B supply chain.' },
              { name: 'Rohan Mehta', title: 'VP of Commercial Hardware', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', bio: 'Leads manufacturer relations and ISO structural testing for all power racks and cardio consoles.' },
              { name: 'Priya Sharma', title: 'Head of Manpower & Growth', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: 'Directs certified trainer placements and digital lead generation funnels for partner facilities.' }
            ].map((team, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-stripe space-y-4">
                <img src={team.image} alt={team.name} className="w-24 h-24 rounded-2xl object-cover border border-slate-200 shadow-sm" />
                <div>
                  <h3 className="text-lg font-black text-slate-900 font-heading uppercase">{team.name}</h3>
                  <div className="text-xs font-bold text-blue-600 font-mono uppercase">{team.title}</div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">{team.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Contact Information Summary CTA */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-stripe flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-slate-900 font-heading uppercase">Ready to Upgrade Your Gym?</h3>
            <p className="text-xs text-slate-600 font-normal mt-1">Speak directly with our commercial quotation team today.</p>
          </div>
          <button
            onClick={() => navigateTo('contact')}
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2 shadow-md transition-all"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
};
