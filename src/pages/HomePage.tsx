import React from 'react';
import { useApp } from '../context/AppContext';
import { Hero } from '../components/home/Hero';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { CallToAction } from '../components/home/CallToAction';
import { SEO } from '../components/common/SEO';
import {
  Dumbbell,
  Users,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Award,
  Clock,
  Star,
  Layers,
  Truck,
  FileCheck2,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const { navigateTo, jobListings } = useApp();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SEO
        title="Tanush Fitness | Commercial Gym Equipment, Manpower & Turnkey Facility Services"
        description="India's leading B2B gym marketplace. Factory direct 11-gauge commercial equipment, verified fitness directors, and facility growth systems."
      />

      {/* SECTION 1: INDUSTRIAL HERO */}
      <Hero />

      {/* SECTION 2: B2B COMMERCIAL CREDIBILITY METRIC STRIP */}
      <section className="bg-slate-900 text-white border-b border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 font-mono">
            
            <div className="flex items-center gap-3.5 border-r border-slate-800 pr-4 last:border-r-0">
              <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight">350+</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase">Facilities Outfitted</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-r border-slate-800 pr-4 last:border-r-0">
              <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight">11-GAUGE</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase">Structural Steel Rigs</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 border-r border-slate-800 pr-4 last:border-r-0">
              <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight">100% GST</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase">18% ITC Invoicing</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight">150+ CITIES</div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase">Pan-India Freight</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THREE CORE PROCUREMENT VERTICALS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-200/80 text-slate-800 font-mono text-[11px] font-bold uppercase mb-2">
              <span>CORE PROCUREMENT VERTICALS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading uppercase">
              Three Pillars of Gym Outfitting
            </h2>
            <p className="mt-2 text-sm text-slate-600 font-normal">
              Direct access to wholesale machinery catalog, verified manpower recruitment, and enterprise club marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: Equipment */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover-lift shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 text-blue-400 flex items-center justify-center border border-slate-800">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-blue-700 font-mono uppercase tracking-widest block mb-1">
                    PILLAR 01 // HARDWARE
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-heading uppercase">
                    Commercial Gym Equipment
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ISO 9001 certified modular power racks, plate-loaded stack machines, urethane free-weights, and commercial cardio consoles.
                </p>
                <div className="pt-2 font-mono text-xs text-slate-700 space-y-1.5 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Direct Factory Wholesale Pricing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Automated RFQ Quote Builder</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => navigateTo('equipment')}
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Equipment Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillar 2: Manpower */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover-lift shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center border border-slate-800">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-700 font-mono uppercase tracking-widest block mb-1">
                    PILLAR 02 // RECRUITMENT
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    Manpower & Talent Solutions
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified hiring ecosystem for gym owners to source NASM/CSCS accredited personal trainers, floor managers, and front-desk staff.
                </p>
                <div className="pt-2 font-mono text-xs text-slate-700 space-y-1.5 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Pre-Screened & Certified Profiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Direct Job Posting & Applicant Tracker</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => navigateTo('manpower')}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Open Recruitment Portal</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Pillar 3: Growth Services */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover-lift shadow-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center border border-slate-800">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-700 font-mono uppercase tracking-widest block mb-1">
                    PILLAR 03 // OPERATIONS
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    Turnkey Business Services
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  3D architectural layout planning, performance lead generation, gym management software integration, and branding.
                </p>
                <div className="pt-2 font-mono text-xs text-slate-700 space-y-1.5 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>3D CAD Floor Layout Schematics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>WhatsApp Lead Automation Integration</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => navigateTo('services')}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Explore Growth Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED EQUIPMENT CATALOG */}
      <FeaturedProducts />

      {/* SECTION 5: FEATURED MANPOWER JOBS */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                VERIFIED TALENT PIPELINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading uppercase text-white mt-1">
                Active Gym Recruitment ({jobListings.length} Positions)
              </h2>
            </div>
            <button
              onClick={() => navigateTo('manpower')}
              className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors self-start sm:self-auto"
            >
              <span>View All Openings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {jobListings.slice(0, 3).map(j => (
              <div key={j.id} className="p-5 rounded-xl bg-slate-800 border border-slate-700 space-y-3 hover-lift">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    {j.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-400">{j.salaryRange}</span>
                </div>
                <h3 className="text-sm font-bold text-white font-heading">{j.title}</h3>
                <div className="text-xs text-slate-400 font-mono">{j.gymName} · {j.location}</div>
                <button
                  onClick={() => navigateTo('manpower')}
                  className="w-full py-2 rounded bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>View Details & Apply</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED SERVICES */}
      <FeaturedServices />

      {/* SECTION 7: WHY GYM OPERATORS CHOOSE TANUSH */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold text-blue-700 uppercase font-mono tracking-wider block mb-1">
              ENGINEERED FOR COMMERCIAL SCALE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading uppercase">
              Why Commercial Operators Trust Tanush Fitness
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 hover-lift">
              <ShieldCheck className="w-8 h-8 text-blue-700" />
              <h3 className="text-base font-bold font-heading uppercase text-slate-900">ISO 9001 Machinery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct-from-factory 11-gauge laser-cut structural steel with robotic welds and audited biomechanics.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 hover-lift">
              <Award className="w-8 h-8 text-amber-600" />
              <h3 className="text-base font-bold font-heading uppercase text-slate-900">Vetted Manpower</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Background-checked trainers, floor supervisors, and gym operations managers with verified certifications.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 hover-lift">
              <Clock className="w-8 h-8 text-emerald-600" />
              <h3 className="text-base font-bold font-heading uppercase text-slate-900">Rapid Formal RFQ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Build your project list online and receive formal GST-compliant pricing and CAD blueprints within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: COMMERCIAL CASE STUDIES / REVIEWS */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-bold text-slate-500 uppercase font-mono tracking-wider block mb-1">
              PROVEN RESULTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading uppercase">
              Commercial Facility Deployments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-4 shadow-sm hover-lift">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                  8,000 SQ FT CLUB
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                "Outfitted our flagship 8,000 sq.ft facility in Delhi NCR with Tanush commercial modular power racks and pin-selected stacks. The delivery and turnkey installation was finished within 14 days."
              </p>
              <div className="pt-3 border-t border-slate-100">
                <strong className="text-xs font-bold font-heading uppercase block text-slate-900">Rajesh Malhotra</strong>
                <span className="text-[11px] text-slate-500 font-mono">Managing Director · Iron Vault Health Clubs</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-4 shadow-sm hover-lift">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                  STUDIO EXPANSION
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                "Hired 4 certified trainers and deployed automated lead outreach via Tanush. Our membership onboarding converted significantly faster with direct factory support."
              </p>
              <div className="pt-3 border-t border-slate-100">
                <strong className="text-xs font-bold font-heading uppercase block text-slate-900">Pooja Sharma</strong>
                <span className="text-[11px] text-slate-500 font-mono">Founder · Apex Performance Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CALL TO ACTION */}
      <CallToAction />
    </main>
  );
};
