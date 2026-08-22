import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Building2,
  Dumbbell,
  HeartPulse,
  Award,
  Zap,
  Briefcase,
  Users
} from 'lucide-react';
import { MarqueeStrip } from '../components/common/MarqueeStrip';
import { VaultContactFormSection } from '../components/home/VaultContactFormSection';
import { OrangeDirectorySection } from '../components/home/OrangeDirectorySection';
import { SEO } from '../components/common/SEO';

const USP_CARDS = [
  {
    id: 1,
    title: 'Commercial & Residential Equipment',
    description: 'Experience biomechanical perfection with Tanush meticulously curated 11-gauge laser-cut strength lines, modular rigs, and cardio suites.',
    brands: ['Matrix', 'Torque USA', 'Concept 2', 'Precor'],
    icon: <Dumbbell className="w-7 h-7 text-[#D26539]" />,
  },
  {
    id: 2,
    title: 'Turnkey Gym Management',
    description: '360° architectural 3D CAD space modeling, acoustic rubber isolation, digital RFID access turnstiles, and launch funnels.',
    brands: ['3D CAD Layouts', 'Acoustics', 'RFID Access', 'AMC Care'],
    icon: <Briefcase className="w-7 h-7 text-[#D26539]" />,
  },
  {
    id: 3,
    title: 'Manpower Services & Staffing',
    description: 'Pre-screened ecosystem connecting commercial facilities with NASM, CSCS, ACE, and K11 accredited trainers and gym operations leads.',
    brands: ['Certified Trainers', 'Gym Managers', 'Floor Supervisors'],
    icon: <Users className="w-7 h-7 text-[#D26539]" />,
  },
  {
    id: 4,
    title: 'Recovery Room — Hyperice',
    description: 'Revitalize in exclusive biohacking recovery suites offering pneumatic compression boots, percussion therapy, and contrast plunge baths.',
    brands: ['Hyperice Partner', 'Normatec 3', 'Hydrotherapy'],
    icon: <Zap className="w-7 h-7 text-[#D26539]" />,
  },
];

const CORE_PILLARS = [
  {
    id: 'equipment',
    number: '01',
    category: 'CORE VERTICAL',
    title: 'Commercial & Residential Equipment',
    tagline: 'Complete professional gym equipment supply for commercial fitness facilities & residential luxury suites',
    description: 'Direct-from-factory ISO 9001 certified 11-gauge laser-cut power racks, selectorized pin-stack machinery, plate-loaded strength stations, and commercial urethane free-weights.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    icon: Dumbbell,
    page: 'equipment' as const,
    btnText: 'Explore Equipment Catalog',
    points: [
      'Direct Factory Wholesale Pricing',
      '18% GST Input Tax Credit (ITC) Invoices',
      '10-Year Structural Frame Guarantee'
    ],
  },
  {
    id: 'services',
    number: '02',
    category: 'CORE VERTICAL',
    title: 'Gym Management & Turnkey Setup',
    tagline: 'End-to-end gym setup including planning, architectural acoustics, equipment, and automated operations',
    description: 'Complete 360° architectural spatial floor planning, high-density acoustic rubber isolation flooring, biometric RFID access turnstiles, and pre-sales digital lead acquisition funnels.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    icon: Briefcase,
    page: 'services' as const,
    btnText: 'Explore Turnkey Management',
    points: [
      '3D CAD Spatial Floor Schematics',
      'Acoustic Flooring & Access Turnstiles',
      'End-to-End Installation & Launch Support'
    ],
  },
  {
    id: 'manpower',
    number: '03',
    category: 'CORE VERTICAL',
    title: 'Manpower Services',
    tagline: 'Certified trainers, gym managers, and fitness professionals for commercial gyms',
    description: 'Verified recruitment and placement ecosystem connecting commercial health clubs with NASM, CSCS, ACE, and K11 accredited master personal trainers and floor operations leadership.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    icon: Users,
    page: 'manpower' as const,
    btnText: 'Open Recruitment Portal',
    points: [
      'Pre-Screened & Certified Trainer Profiles',
      'Operations Managers & Floor Supervisors',
      'Direct Placement & Applicant Tracker'
    ],
  },
];

export const HomePage: React.FC = () => {
  const { navigateTo } = useApp();
  const [visionTab, setVisionTab] = useState<'what' | 'why'>('what');

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#090C10] text-[#ECE6DB] overflow-hidden pb-0">
      <SEO
        title="Tanush Fitness | Commercial & Residential Equipment · Gym Management · Manpower Services"
        description="Experience India's premier commercial fitness sanctuary. World-class 11-gauge equipment, 3D turnkey gym management, and certified trainer staffing."
      />

      {/* ========================================================================= */}
      {/* SECTION 1: EXACT VAULT HOMEPAGE PROPORTIONS & SPACING                     */}
      {/* ========================================================================= */}
      <section className="relative h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full bg-[#26452D] text-[#ECE6DB] flex flex-col justify-between items-center px-4 sm:px-8 pt-8 sm:pt-12 pb-28 sm:pb-36 overflow-hidden select-none">
        {/* 🌟 1. TOP LOGO EMBLEM (EXACT VAULT STAR WITH INNER DIAMOND) */}
        <div className="pt-2 sm:pt-4 shrink-0">
          <svg
            className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22 text-white fill-none stroke-current"
            viewBox="0 0 100 100"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M 50 4 L 56 36 L 88 16 L 65 46 L 96 50 L 65 54 L 88 84 L 56 64 L 50 96 L 44 64 L 12 84 L 35 54 L 4 50 L 35 46 L 12 16 L 44 36 Z"
              stroke="white"
              strokeWidth="2.6"
              fill="none"
            />
            <path
              d="M 50 32 L 60 50 L 50 68 L 40 50 Z"
              stroke="white"
              strokeWidth="2.2"
              fill="none"
            />
          </svg>
        </div>

        {/* 💎 2. MAIN 2-LINE HEADLINE (EXACT VAULT TYPOGRAPHY & PILL RATIO) */}
        <div className="max-w-5xl mx-auto w-full text-center py-2 sm:py-4 z-10">
          <div className="space-y-3 sm:space-y-4 select-none">
            {/* Row 1: GET READY [PILL 1] TO UNLEASH */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-5 flex-nowrap whitespace-nowrap font-satoshi text-xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-black uppercase tracking-tight text-white leading-none">
              <span className="relative inline-block whitespace-nowrap">
                GET READY
                {/* Terracotta Orange Hand-Drawn Brush Accent */}
                <span className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 right-0 h-1.5 sm:h-2.5 bg-[#D26539] rounded-full -rotate-1 opacity-90" />
              </span>

              {/* Pill 1 */}
              <div className="inline-block h-7 sm:h-9 md:h-11 lg:h-13 w-20 sm:w-28 md:w-36 lg:w-44 rounded-full overflow-hidden border border-white/40 shadow-xl shrink-0 align-middle transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                  alt="Tanush Commercial Strength Equipment"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="whitespace-nowrap">TO UNLEASH</span>
            </div>

            {/* Row 2: YOUR [PILL 2] INNER POTENTIAL [PILL 3] */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-5 flex-nowrap whitespace-nowrap font-satoshi text-xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-black uppercase tracking-tight text-white leading-none">
              <span className="whitespace-nowrap">YOUR</span>

              {/* Pill 2 */}
              <div className="inline-block h-7 sm:h-9 md:h-11 lg:h-13 w-24 sm:w-32 md:w-40 lg:w-48 rounded-full overflow-hidden border border-white/40 shadow-xl shrink-0 align-middle transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
                  alt="Tanush Fitness Sanctuary"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="whitespace-nowrap">INNER POTENTIAL</span>

              {/* Pill 3 */}
              <div className="inline-block h-7 sm:h-9 md:h-11 lg:h-13 w-20 sm:w-28 md:w-36 lg:w-44 rounded-full overflow-hidden border border-white/40 shadow-xl shrink-0 align-middle transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
                  alt="Tanush Athletic Training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 🌊 3. HORIZONTAL BEYOND FITNESS MARQUEE (SUBTLE MIDWAY ROW) */}
        <div className="w-full overflow-hidden py-4 sm:py-6 z-10 select-none pointer-events-none">
          <div className="flex items-center gap-14 sm:gap-18 animate-marquee-slow whitespace-nowrap font-satoshi font-bold text-xl sm:text-2xl md:text-3xl lg:text-[34px] tracking-[0.25em] text-[#3A563F] opacity-30 uppercase">
            <span>✦ BEYOND FITNESS ✦ BEYOND FITNESS ✦ BEYOND FITNESS ✦ BEYOND FITNESS ✦</span>
            <span>✦ BEYOND FITNESS ✦ BEYOND FITNESS ✦ BEYOND FITNESS ✦ BEYOND FITNESS ✦</span>
          </div>
        </div>

        {/* 🎯 4. CTA BUTTON (CENTERED OUTLINED VAULT STYLE) */}
        <div className="flex flex-col items-center justify-center shrink-0 z-10">
          <button
            type="button"
            onClick={() => navigateTo('equipment')}
            className="border border-white/40 hover:border-white text-white font-general text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold px-8 py-3 rounded-none transition-all duration-300 hover:bg-white hover:text-[#26452D] flex items-center gap-2.5 group shadow-lg cursor-pointer"
          >
            <span>JOIN TANUSH</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: FULL-WIDTH MARQUEE STRIP (CORE OFFERINGS)                      */}
      {/* ========================================================================= */}
      <MarqueeStrip
        items={[
          'COMMERCIAL & RESIDENTIAL EQUIPMENT',
          'GYM MANAGEMENT',
          'MANPOWER SERVICES',
          '11-GAUGE PRECISION STEEL',
          'PAN-INDIA TURNKEY ASSEMBLY',
          'ISO 9001:2015 CERTIFIED',
        ]}
        theme="orange"
        speed="normal"
      />

      {/* ========================================================================= */}
      {/* SECTION 3: TABBED VISION & PHILOSOPHY (#about)                            */}
      {/* ========================================================================= */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/5">
        <div className="space-y-10">
          {/* Header & Tab Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                THE TANUSH PHILOSOPHY
              </div>
              <h2 className="font-satoshi text-2xl sm:text-4xl lg:text-[38px] font-extrabold uppercase text-white tracking-tight">
                {visionTab === 'what' ? 'What is Tanush?' : 'Why Tanush?'}
              </h2>
            </div>

            {/* Vision Tab Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#0D1118] border border-white/10 font-general text-xs uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setVisionTab('what')}
                className={`px-5 py-2 rounded-full transition ${
                  visionTab === 'what'
                    ? 'bg-[#D26539] text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                What is Tanush?
              </button>
              <button
                type="button"
                onClick={() => setVisionTab('why')}
                className={`px-5 py-2 rounded-full transition ${
                  visionTab === 'why'
                    ? 'bg-[#D26539] text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Why Tanush?
              </button>
            </div>
          </div>

          {/* Vision Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              {visionTab === 'what' ? (
                <div className="space-y-4 text-slate-300 font-manrope text-sm sm:text-base leading-relaxed">
                  <p>
                    Introducing India's premier commercial fitness sanctuary & outfitting brand: <span className="text-[#D26539] font-bold">Tanush Fitness</span>, where precision engineering reaches new heights and commercial strength takes center stage.
                  </p>
                  <p>
                    At Tanush, we redefine the fitness outfitting landscape with <span className="text-white font-semibold">state-of-the-art 11-gauge laser-cut equipment</span>, curated to empower facility owners to launch world-class destinations. Our commitment goes beyond machinery; we deliver a holistic <span className="text-white font-semibold">360-degree turnkey solution</span> encompassing Commercial & Residential Equipment, Gym Management, and Manpower Services.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => navigateTo('about')}
                      className="btn-vault-outline text-xs flex items-center gap-2"
                    >
                      <span>Read Our Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D26539]" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 text-slate-300 font-manrope text-sm sm:text-base leading-relaxed">
                  <p>
                    As a testament to unwavering commitment to biomechanical excellence, <span className="text-[#D26539] font-bold">Tanush Fitness</span> aims to redefine commercial fitness spaces by offering direct factory procurement, 18% GST Input Tax Credit invoicing, zero middleman trading markups, and verified trainer placement pipelines.
                  </p>
                  <blockquote className="p-5 rounded-2xl bg-[#0D1118] border-l-4 border-[#D26539] text-slate-200 italic font-serif text-base leading-relaxed">
                    "Tanush Fitness is not merely an equipment vendor; it is an end-to-end commercial infrastructure partner built for gym owners who demand perfection in every square foot."
                  </blockquote>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => navigateTo('contact')}
                      className="btn-vault text-xs flex items-center gap-2"
                    >
                      <span>Connect With Factory Desk</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-[#0D1118]">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
                  alt="Tanush Fitness Sanctuary Vision"
                  className="w-full h-[380px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-[#0D1118]/90 border border-white/10 font-mono text-[11px] text-[#D26539] flex items-center justify-between">
                  <span>ISO 9001:2015 CERTIFIED</span>
                  <span>500+ COMMERCIAL SANCTUARIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: CORE THREE PILLARS (SERVICES & OFFERINGS)                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/5">
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                CORE PROCUREMENT VERTICALS
              </div>
              <h2 className="font-satoshi text-2xl sm:text-4xl lg:text-[38px] font-extrabold uppercase text-white tracking-tight">
                THREE PILLARS OF GYM OUTFITTING
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-manrope max-w-2xl mt-1 leading-relaxed">
                Complete commercial & residential equipment supply, 3D turnkey gym management, and verified manpower recruitment.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('services')}
              className="btn-vault text-xs flex items-center gap-2 shrink-0"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-[#0D1118] border border-white/10 rounded-2xl overflow-hidden luxury-card flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className="relative h-56 overflow-hidden cursor-pointer"
                      onClick={() => navigateTo(pillar.page)}
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1118] via-transparent to-black/40" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[#090C10] border border-[#D26539]/30 text-[10px] font-mono text-[#D26539] font-bold uppercase tracking-wider">
                          PILLAR {pillar.number} // {pillar.category}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#090C10] border border-white/10 flex items-center justify-center text-[#D26539]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-6 space-y-3.5">
                      <div>
                        <h3
                          onClick={() => navigateTo(pillar.page)}
                          className="font-satoshi text-lg sm:text-xl font-bold text-white group-hover:text-[#D26539] transition uppercase cursor-pointer"
                        >
                          {pillar.title}
                        </h3>
                        <p className="text-xs font-mono text-[#D26539] mt-1">
                          {pillar.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-manrope leading-relaxed">
                        {pillar.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-white/5 font-mono text-xs text-slate-300">
                        {pillar.points.map((pt, ptIdx) => (
                          <div key={ptIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539]" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() => navigateTo(pillar.page)}
                      className="btn-vault w-full py-2.5 text-xs flex items-center justify-center gap-2 uppercase tracking-wider"
                    >
                      <span>{pillar.btnText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR USPs & VALUE PROPOSITIONS                                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-white/5">
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                EXCLUSIVE ADVANTAGES
              </div>
              <h2 className="font-satoshi text-2xl sm:text-4xl lg:text-[38px] font-extrabold uppercase text-white tracking-tight">
                OUR USP
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('equipment')}
              className="btn-vault-outline text-xs flex items-center gap-2"
            >
              <span>Know More</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D26539]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USP_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-[#0D1118] border border-white/10 rounded-2xl p-6 space-y-4 luxury-card flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D26539] transition-colors">
                    {card.icon}
                  </div>

                  <h3 className="font-satoshi text-base sm:text-lg font-bold text-white group-hover:text-[#D26539] transition uppercase">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-manrope leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {card.brands.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-300"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: VAULT-STYLE SPLIT SCREEN INTAKE FORM                           */}
      {/* ========================================================================= */}
      <VaultContactFormSection />

      {/* ========================================================================= */}
      {/* SECTION 7: FULL ORANGE NUMBERED DIRECTORY (AT LAST JUST ABOVE FOOTER)     */}
      {/* ========================================================================= */}
      <OrangeDirectorySection />
    </main>
  );
};
