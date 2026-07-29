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
  Send,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const { navigateTo, jobListings } = useApp();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <SEO
        title="Tanush Fitness | Commercial Gym Equipment, Manpower & Business Services"
        description="India's leading B2B gym marketplace. Factory direct equipment, certified gym trainers, and 360° gym growth marketing."
      />

      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: ABOUT TANUSH FITNESS SNIPPET */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 font-mono">
                ENTERPRISE FACILITY CONTRACTOR
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading uppercase leading-tight">
                Empowering Over 500 Commercial Gym Owners Across India
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Tanush Fitness is the single-window enterprise marketplace connecting gym owners with ISO 9001 certified machinery manufacturers, NASM/CSCS accredited manpower, and performance marketing automation.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end font-mono">
              <button
                onClick={() => navigateTo('about')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR THREE BUSINESS VERTICALS */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-mono text-xs font-bold uppercase mb-3">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>3 CORE BUSINESS PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading uppercase">
              Our 3 Business Verticals
            </h2>
            <p className="mt-3 text-sm text-slate-600 font-normal">
              Select any pillar below to access specialized commercial equipment catalog, trainer recruitment, or growth tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Card 1: Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-stripe hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                  <Dumbbell className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold text-blue-600 font-mono uppercase tracking-widest block">
                  BUSINESS 1
                </span>
                <h3 className="text-xl font-black text-slate-900 font-heading uppercase">
                  Commercial Gym Equipment
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ISO-certified power racks, plate-loaded stack machinery, urethane weights, and lockers for new & expanding clubs.
                </p>
                <div className="pt-2 font-mono text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>7 Core Equipment Categories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Zero Online Prices (RFQ Quotations)</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => navigateTo('equipment')}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Explore Equipment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Business Card 2: Manpower */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-stripe hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg">
                  <Users className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold text-amber-600 font-mono uppercase tracking-widest block">
                  BUSINESS 2
                </span>
                <h3 className="text-xl font-black text-slate-900 font-heading uppercase">
                  Manpower Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dual hiring platform for gym owners to post jobs and candidates to apply with verified resumes.
                </p>
                <div className="pt-2 font-mono text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>8 Staff Categories (Trainers, Managers)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Resume Upload & Skill Shortlisting</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => navigateTo('manpower')}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Open Hiring Portal</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </motion.div>

            {/* Business Card 3: Growth Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-stripe hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                  <Briefcase className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold text-emerald-600 font-mono uppercase tracking-widest block">
                  BUSINESS 3
                </span>
                <h3 className="text-xl font-black text-slate-900 font-heading uppercase">
                  Gym Business Services
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Meta/Google ads, Instagram content, 3D interior floor plans, website/app dev, & AI WhatsApp CRM.
                </p>
                <div className="pt-2 font-mono text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>18 Professional Growth Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Case Studies & Deliverables</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => navigateTo('services')}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED EQUIPMENT */}
      <FeaturedProducts />

      {/* SECTION 5: FEATURED JOBS STRIP */}
      <section className="py-20 bg-slate-900 text-white border-t border-slate-800 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                VERIFIED GYM RECRUITMENT
              </span>
              <h2 className="text-3xl font-black font-heading uppercase text-white mt-1">
                Featured Openings ({jobListings.length} Active)
              </h2>
            </div>
            <button
              onClick={() => navigateTo('manpower')}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase flex items-center gap-2"
            >
              <span>View All Job Openings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobListings.slice(0, 3).map(j => (
              <div key={j.id} className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700 space-y-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-400">
                  {j.category}
                </span>
                <h3 className="text-base font-black text-white font-heading uppercase">{j.title}</h3>
                <div className="text-xs text-slate-300">{j.gymName} • {j.location}</div>
                <div className="text-xs font-bold text-emerald-400">{j.salaryRange}</div>
                <button
                  onClick={() => navigateTo('manpower')}
                  className="w-full py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-black text-xs uppercase flex items-center justify-center gap-2 mt-2"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Apply Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED SERVICES */}
      <FeaturedServices />

      {/* SECTION 7: WHY CHOOSE TANUSH */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading uppercase mb-12">
            Why Gym Owners Trust Tanush Fitness
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-stripe">
              <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto" />
              <h3 className="text-lg font-black font-heading uppercase">ISO Certified Machinery</h3>
              <p className="text-xs text-slate-600 font-mono">
                Factory direct 7-gauge heavy steel racks & biomechanically audited selectorized machinery.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-stripe">
              <Award className="w-10 h-10 text-amber-500 mx-auto" />
              <h3 className="text-lg font-black font-heading uppercase">Certified Manpower</h3>
              <p className="text-xs text-slate-600 font-mono">
                Thoroughly background-checked personal trainers, managers, & certified strength coaches.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-stripe">
              <Clock className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-black font-heading uppercase">2-Hour Quotation Guarantee</h3>
              <p className="text-xs text-slate-600 font-mono">
                Submit an RFQ equipment cart and receive formal pricing via Email & WhatsApp within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW IT WORKS TIMELINE */}
      <section className="py-20 bg-white border-t border-slate-200 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading uppercase">
              How B2B Contracting Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-2xl font-black text-blue-600">01</div>
              <div className="text-sm font-black uppercase font-heading">Select Products / Role</div>
              <div className="text-xs text-slate-600">Browse Equipment, Hiring Openings, or Growth Services.</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-2xl font-black text-blue-600">02</div>
              <div className="text-sm font-black uppercase font-heading">Add to RFQ Cart</div>
              <div className="text-xs text-slate-600">Build your equipment quote cart or fill candidate details.</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-2xl font-black text-blue-600">03</div>
              <div className="text-sm font-black uppercase font-heading">Receive Quotation</div>
              <div className="text-xs text-slate-600">Sales team sends formal pricing PDF via WhatsApp & Email.</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-2xl font-black text-blue-600">04</div>
              <div className="text-sm font-black uppercase font-heading">Dispatch & Setup</div>
              <div className="text-xs text-slate-600">Nationwide technician team handles delivery & installation.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 font-heading uppercase">
              Gym Owner Executive Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-stripe space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 italic font-mono leading-relaxed">
                "Outfitted our 8,000 sq.ft commercial health club in Delhi with Tanush power racks and selectorized stacks. The quotation process was seamless with zero online price confusion."
              </p>
              <div>
                <strong className="text-sm font-black font-heading uppercase block text-slate-900">Rajesh Malhotra</strong>
                <span className="text-xs text-slate-500 font-mono">Managing Director, Iron Vault Gyms</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-stripe space-y-4">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 italic font-mono leading-relaxed">
                "Hired 4 NASM certified master trainers and deployed AI WhatsApp automation via Tanush. Our membership conversion jumped by 38% in 60 days."
              </p>
              <div>
                <strong className="text-sm font-black font-heading uppercase block text-slate-900">Pooja Sharma</strong>
                <span className="text-xs text-slate-500 font-mono">Founder, Apex Fitness Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: CONTACT CTA */}
      <CallToAction />
    </main>
  );
};
