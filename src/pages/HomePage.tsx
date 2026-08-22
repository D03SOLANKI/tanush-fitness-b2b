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
  Users,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MarqueeStrip } from '../components/common/MarqueeStrip';
import { SEO } from '../components/common/SEO';

const USP_CARDS = [
  {
    id: 1,
    title: 'Commercial & Residential Equipment',
    description: 'Experience biomechanical perfection with Tanush meticulously curated 11-gauge laser-cut strength lines, modular rigs, and cardio suites.',
    brands: ['Matrix', 'Torque USA', 'Concept 2', 'Precor'],
    icon: <Dumbbell className="w-8 h-8 text-[#D26539]" />,
  },
  {
    id: 2,
    title: 'Turnkey Gym Management',
    description: '360° architectural 3D CAD space modeling, acoustic rubber isolation, digital RFID access turnstiles, and launch funnels.',
    brands: ['3D CAD Layouts', 'Acoustics', 'RFID Access', 'AMC Care'],
    icon: <Briefcase className="w-8 h-8 text-[#D26539]" />,
  },
  {
    id: 3,
    title: 'Manpower Services & Staffing',
    description: 'Pre-screened ecosystem connecting commercial facilities with NASM, CSCS, ACE, and K11 accredited trainers and gym operations leads.',
    brands: ['Certified Trainers', 'Gym Managers', 'Floor Supervisors'],
    icon: <Users className="w-8 h-8 text-[#D26539]" />,
  },
  {
    id: 4,
    title: 'Recovery Room — Hyperice',
    description: 'Revitalize in exclusive biohacking recovery suites offering pneumatic compression boots, percussion therapy, and contrast plunge baths.',
    brands: ['Hyperice Partner', 'Normatec 3', 'Hydrotherapy'],
    icon: <Zap className="w-8 h-8 text-[#D26539]" />,
  },
];

const FACILITY_ZONES = [
  {
    id: 'group-sessions',
    label: 'Group Sessions',
    title: 'Dynamic Functional & Combat Arena',
    description: 'Experience the kinetic energy of unity in our group sessions at Tanush — where individual goals converge into a shared pursuit of peak conditioning. Led by master instructors in high-energy acoustic soundscapes.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    tags: ['HIIT Stations', 'Turf Sprint Tracks', 'Acoustic Soundscape'],
  },
  {
    id: 'strength-deck',
    label: 'Strength Deck',
    title: 'Biomechanical Heavy-Duty Strength Zone',
    description: 'Precision-engineered 11-gauge structural steel rigs, selectorized stacks with optimal resistance curves, and Olympic competition platforms tailored for maximum hypertrophy and functional strength development.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    tags: ['11-Gauge Racks', 'Calibrated Steel', 'Cable Motion Suites'],
  },
  {
    id: 'cardio-deck',
    label: 'Cardio Bio-Deck',
    title: 'Smart Interactive Cardio Suite',
    description: 'Connected commercial treadmills, curved self-powered runners, and ergometers with real-time biometric telemetry and VO2 max training protocols.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Curved Runners', 'Matrix Ascent Trainers', 'Concept 2 Rowers'],
  },
  {
    id: 'recovery-spa',
    label: 'Recovery Suite',
    title: 'Hyperice Biohacking & Hydrotherapy',
    description: 'Pneumatic compression boots, infrared therapy cabins, cold immersion pools, and percussion stations to accelerate muscular repair and mental equilibrium.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Hyperice Normatec', 'Infrared Sauna', 'Contrast Baths'],
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
  const { navigateTo, showToast } = useApp();

  const [visionTab, setVisionTab] = useState<'what' | 'why'>('what');
  const [activeZone, setActiveZone] = useState(0);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  // Inquiry Form State
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySqft, setInquirySqft] = useState('5,000 - 10,000 sq.ft');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) {
      showToast('Please provide your name and contact phone', 'error');
      return;
    }
    showToast('Consultation request received! Our Commercial Outfitting Director will contact you.', 'success');
    setInquiryName('');
    setInquiryPhone('');
    setInquiryEmail('');
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#090C10] text-[#ECE6DB] luxury-noise overflow-hidden">
      <SEO
        title="Tanush Fitness | Commercial & Residential Equipment · Gym Management · Manpower Services"
        description="Experience India's premier commercial fitness sanctuary. World-class 11-gauge equipment, 3D turnkey gym management, and certified trainer staffing."
      />

      {/* ========================================================================= */}
      {/* SECTION 1: EXACT HERO COMPOSITION & LAYOUT FROM REFERENCE IMAGE           */}
      {/* ========================================================================= */}
      <section className="relative min-h-screen bg-[#26452D] text-[#ECE6DB] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 pt-12 pb-28 overflow-hidden">
        {/* Background Film Grain Overlay */}
        <div className="absolute inset-0 bg-[#26452D] luxury-noise pointer-events-none" />

        {/* 🌟 1. Top Centered Geometric Star Emblem */}
        <div className="z-10 pt-2 sm:pt-4">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 text-white fill-none stroke-current"
            viewBox="0 0 100 100"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Multi-Point Geometric Star / Compass Emblem */}
            <path d="M 50 5 L 56 38 L 88 20 L 64 46 L 95 50 L 64 54 L 88 80 L 56 62 L 50 95 L 44 62 L 12 80 L 36 54 L 5 50 L 36 46 L 12 20 L 44 38 Z" fill="none" stroke="white" strokeWidth="3" />
            <circle cx="50" cy="50" r="6" stroke="white" strokeWidth="2.5" fill="none" />
          </svg>
        </div>

        {/* 🌊 2. Faint Ghost Watermark Marquee Background Layer */}
        <div className="absolute top-[52%] -translate-y-1/2 left-0 right-0 z-0 pointer-events-none select-none overflow-hidden opacity-15">
          <div className="flex items-center gap-12 animate-marquee-slow whitespace-nowrap font-syne font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.25em] text-[#3A563F] uppercase">
            <span>✦ BEYOND FITNESS ✦ TANUSH SANCTUARY ✦ BEYOND FITNESS ✦ COMMERCIAL OUTFITTING ✦</span>
            <span>✦ BEYOND FITNESS ✦ TANUSH SANCTUARY ✦ BEYOND FITNESS ✦ COMMERCIAL OUTFITTING ✦</span>
          </div>
        </div>

        {/* 💎 3. Master Kinetic Typography with Image Capsules */}
        <div className="max-w-7xl mx-auto w-full my-auto text-center space-y-6 sm:space-y-8 z-10 py-6">
          <div className="space-y-4 sm:space-y-6 select-none">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              <span className="relative inline-block">
                GET READY
                {/* Terracotta Orange Brush Stroke Accent */}
                <span className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-2 sm:h-3 bg-[#D26539] rounded-full -rotate-1 opacity-90 shadow-md" />
              </span>

              {/* Capsule Image Pill 1 */}
              <div className="inline-block h-10 sm:h-16 md:h-20 w-18 sm:w-32 md:w-44 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shrink-0 align-middle transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
                  alt="Tanush Commercial Strength Equipment"
                  className="w-full h-full object-cover"
                />
              </div>

              <span>TO UNLEASH</span>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              <span>YOUR</span>

              {/* Capsule Image Pill 2 */}
              <div className="inline-block h-10 sm:h-16 md:h-20 w-22 sm:w-36 md:w-48 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shrink-0 align-middle transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
                  alt="Tanush Fitness Sanctuary"
                  className="w-full h-full object-cover"
                />
              </div>

              <span>INNER POTENTIAL</span>

              {/* Capsule Image Pill 3 */}
              <div className="inline-block h-10 sm:h-16 md:h-20 w-18 sm:w-32 md:w-44 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shrink-0 align-middle transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
                  alt="Tanush Athletic Training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 🎯 4. Center Outlined CTA Button */}
          <div className="pt-4 flex flex-col items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigateTo('equipment')}
              className="border border-white/40 hover:border-white text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3.5 rounded-md transition-all duration-300 hover:bg-white hover:text-[#26452D] flex items-center gap-2 group shadow-xl"
            >
              <span>JOIN TANUSH</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* ⬇️ 5. Scroll Down Indicator */}
            <button
              type="button"
              onClick={scrollToAbout}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition animate-bounce mt-2"
              aria-label="Scroll to Next Section"
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 🧭 6. Bottom Floating Navigation Structure (Matching Exact Layout) */}
        <div className="fixed bottom-6 left-0 right-0 z-40 px-4 sm:px-8 pointer-events-none">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left Floating Pill Badge: TANUSH */}
            <div className="pointer-events-auto">
              <button
                type="button"
                onClick={() => {
                  navigateTo('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#0D1811]/95 backdrop-blur-xl border border-white/15 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-syne font-black text-xs sm:text-sm tracking-[0.2em] text-white hover:text-[#D26539] transition-colors shadow-2xl uppercase"
              >
                TANUSH
              </button>
            </div>

            {/* Center Floating Navigation Dock */}
            <div className="pointer-events-auto hidden md:flex items-center gap-1.5 bg-[#0D1811]/95 backdrop-blur-xl border border-white/15 p-1.5 rounded-full shadow-2xl font-mono text-xs uppercase tracking-wider">
              <button
                type="button"
                onClick={scrollToAbout}
                className="bg-[#D26539] text-white font-bold px-5 py-2 rounded-full transition shadow-md"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => navigateTo('equipment')}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-full transition"
              >
                Equipment
              </button>
              <button
                type="button"
                onClick={() => navigateTo('services')}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-full transition"
              >
                Gym Management
              </button>
              <button
                type="button"
                onClick={() => navigateTo('manpower')}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-full transition"
              >
                Manpower
              </button>
              <button
                type="button"
                onClick={() => navigateTo('contact')}
                className="text-slate-300 hover:text-white px-4 py-2 rounded-full transition"
              >
                Consultation
              </button>
            </div>

            {/* Right Floating Circular Hamburger Button */}
            <div className="pointer-events-auto">
              <button
                type="button"
                onClick={() => setIsNavDrawerOpen(!isNavDrawerOpen)}
                className="w-12 h-12 rounded-full bg-[#0D1811]/95 backdrop-blur-xl border border-white/15 flex flex-col items-center justify-center gap-1 text-white hover:border-[#D26539] transition shadow-2xl"
                aria-label="Toggle Navigation Menu"
              >
                {isNavDrawerOpen ? (
                  <X className="w-5 h-5 text-[#D26539]" />
                ) : (
                  <>
                    <span className="w-5 h-[2px] bg-white rounded-full" />
                    <span className="w-5 h-[2px] bg-white rounded-full" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Screen Drawer Menu Modal */}
      <AnimatePresence>
        {isNavDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#090C10] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="cursor-pointer" onClick={() => { navigateTo('home'); setIsNavDrawerOpen(false); }}>
                <span className="font-syne font-black text-2xl tracking-[0.2em] text-white uppercase block">
                  TANUSH
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                  FITNESS SANCTUARY
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsNavDrawerOpen(false)}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#D26539] hover:border-[#D26539] transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="my-auto py-12 max-w-4xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { num: '01', title: 'Overview', page: 'home' as const, desc: 'Flagship Sanctuary & Kinetic Hub' },
                  { num: '02', title: 'Commercial & Residential Equipment', page: 'equipment' as const, desc: '11-Gauge Precision Laser Machines & Rigs' },
                  { num: '03', title: 'Gym Management & Turnkey', page: 'services' as const, desc: '3D CAD Architecture & Turnkey Setup' },
                  { num: '04', title: 'Manpower Services', page: 'manpower' as const, desc: 'Certified Trainers & Management Staffing' },
                  { num: '05', title: 'Vision & Philosophy', page: 'about' as const, desc: 'Biomechanical Engineering Standard' },
                  { num: '06', title: 'VIP Consultation', page: 'contact' as const, desc: 'Direct Factory Outfitting Desk' },
                ].map((item) => (
                  <div
                    key={item.num}
                    onClick={() => {
                      navigateTo(item.page);
                      setIsNavDrawerOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-6 rounded-2xl bg-[#0D1118] border border-white/10 hover:border-[#D26539] transition-all cursor-pointer group flex items-start justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#D26539]">{item.num}</span>
                        <h3 className="font-syne text-xl font-bold uppercase text-slate-200 group-hover:text-white transition">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400 font-sans pl-7">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#D26539] transition mt-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div>GST: 07AAACT1234F1Z5 • ISO 9001:2015 CERTIFIED</div>
              <a href="tel:+919067800048" className="text-[#D26539] hover:underline">
                Direct Desk: +91 90678 00048
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          {/* Header & Tab Switcher */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                THE TANUSH PHILOSOPHY
              </div>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                {visionTab === 'what' ? 'What is Tanush?' : 'Why Tanush?'}
              </h2>
            </div>

            {/* Vision Tab Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#0D1118] border border-white/10">
              <button
                type="button"
                onClick={() => setVisionTab('what')}
                className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition ${
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
                className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition ${
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              {visionTab === 'what' ? (
                <div className="space-y-6 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
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
                      className="btn-vault-outline flex items-center gap-2"
                    >
                      <span>Read Our Full Story</span>
                      <ArrowRight className="w-4 h-4 text-[#D26539]" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
                  <p>
                    As a testament to unwavering commitment to biomechanical excellence, <span className="text-[#D26539] font-bold">Tanush Fitness</span> aims to redefine commercial fitness spaces by offering direct factory procurement, 18% GST Input Tax Credit invoicing, zero middleman trading markups, and verified trainer placement pipelines.
                  </p>
                  <blockquote className="p-6 rounded-2xl bg-[#0D1118] border-l-4 border-[#D26539] text-slate-200 italic font-serif text-lg leading-relaxed">
                    "Tanush Fitness is not merely an equipment vendor; it is an end-to-end commercial infrastructure partner built for gym owners who demand perfection in every square foot."
                  </blockquote>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => navigateTo('contact')}
                      className="btn-vault flex items-center gap-2"
                    >
                      <span>Connect With Factory Desk</span>
                      <ArrowRight className="w-4 h-4" />
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
                  className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D1118]/90 backdrop-blur-md border border-white/10 font-mono text-xs text-[#D26539] flex items-center justify-between">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                CORE PROCUREMENT VERTICALS
              </div>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                THREE PILLARS OF GYM OUTFITTING
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-sans max-w-2xl mt-1 leading-relaxed">
                Complete commercial & residential equipment supply, 3D turnkey gym management, and verified manpower recruitment.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('services')}
              className="btn-vault flex items-center gap-2 shrink-0"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-[#0D1118] border border-white/10 rounded-2xl overflow-hidden luxury-card flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className="relative h-60 overflow-hidden cursor-pointer"
                      onClick={() => navigateTo(pillar.page)}
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1118] via-transparent to-black/40" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[#090C10]/90 backdrop-blur-md border border-[#D26539]/30 text-[10px] font-mono text-[#D26539] font-bold uppercase tracking-wider">
                          PILLAR {pillar.number} // {pillar.category}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#090C10]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#D26539]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3
                          onClick={() => navigateTo(pillar.page)}
                          className="font-syne text-xl font-bold text-white group-hover:text-[#D26539] transition uppercase cursor-pointer"
                        >
                          {pillar.title}
                        </h3>
                        <p className="text-xs font-mono text-[#D26539] mt-1">
                          {pillar.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        {pillar.description}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-white/5 font-mono text-xs text-slate-300">
                        {pillar.points.map((pt, ptIdx) => (
                          <div key={ptIdx} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539] shrink-0" />
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
                      className="btn-vault w-full py-3 text-xs flex items-center justify-center gap-2 uppercase tracking-wider"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                EXCLUSIVE ADVANTAGES
              </div>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
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
                className="bg-[#0D1118] border border-white/10 rounded-2xl p-8 space-y-6 luxury-card flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D26539] transition-colors">
                    {card.icon}
                  </div>

                  <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#D26539] transition uppercase">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {card.brands.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-mono text-slate-300"
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
      {/* SECTION 6: CORPORATE PARTNERSHIPS & CERTIFICATIONS                        */}
      {/* ========================================================================= */}
      <section className="py-16 border-b border-white/5 bg-[#05070A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <div className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
            CORPORATE PARTNERSHIPS & CERTIFICATIONS
          </div>
          <h2 className="font-syne text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mt-2">
            GLOBAL MACHINERY & TECHNICAL AFFILIATES
          </h2>
        </div>
        <MarqueeStrip
          items={['MATRIX FITNESS', 'PRECOR USA', 'TORQUE FITNESS', 'CONCEPT 2', 'ELEIKO OLYMPIC', 'HYPERICE RECOVERY', 'THOR GYM TECH', 'TRAINING WALL']}
          speed="normal"
          theme="minimal"
        />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: PROPOSAL & INTAKE DESK                                         */}
      {/* ========================================================================= */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-br from-[#0D1118] via-[#121722] to-[#090C10] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D26539]/30 text-xs font-mono text-[#D26539] tracking-widest uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>Pan-India Commercial Expansion</span>
              </div>

              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                OUTFIT YOUR <span className="text-[#D26539]">SANCTUARY</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Connect with our Senior Commercial Outfitting Directorate. We provide customized 3D CAD space layouts, imported equipment procurement, flooring acoustics, and complete gym commissioning.
              </p>

              <div className="space-y-3 font-mono text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D26539]" />
                  <span>Direct Factory Procurement with 18% GST Input Tax Credit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D26539]" />
                  <span>Turnkey Architectural CAD Layouts within 48 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D26539]" />
                  <span>Certified Trainer & Operational Leadership Recruitment</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-6 bg-[#090C10] border border-white/10 rounded-2xl p-8 space-y-4 shadow-xl">
              <h3 className="font-syne text-xl font-bold text-white uppercase">
                Request Outfitting Proposal
              </h3>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-[#0D1118] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder="+91 98123 45678"
                      className="w-full bg-[#0D1118] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">City / Region *</label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full bg-[#0D1118] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D26539]"
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Mumbai & MMR">Mumbai & MMR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Other Pan-India">Other Pan-India</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1">Facility Square Footage</label>
                  <select
                    value={inquirySqft}
                    onChange={(e) => setInquirySqft(e.target.value)}
                    className="w-full bg-[#0D1118] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D26539]"
                  >
                    <option value="Below 3,000 sq.ft (Boutique / Studio)">Below 3,000 sq.ft (Boutique / Studio)</option>
                    <option value="3,000 - 6,000 sq.ft (Commercial Club)">3,000 - 6,000 sq.ft (Commercial Club)</option>
                    <option value="6,000 - 15,000 sq.ft (Mega Health Center)">6,000 - 15,000 sq.ft (Mega Health Center)</option>
                    <option value="15,000+ sq.ft (Athletic Sanctuary Complex)">15,000+ sq.ft (Athletic Sanctuary Complex)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-vault w-full py-3.5 text-xs uppercase tracking-wider font-bold shadow-xl mt-2"
                >
                  Submit Outfitting Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
