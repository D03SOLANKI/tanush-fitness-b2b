import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Navigation,
  Building2,
  Layers,
  Dumbbell,
  HeartPulse,
  Award,
  Zap,
  Activity,
  Briefcase,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MarqueeStrip } from '../components/common/MarqueeStrip';
import { SEO } from '../components/common/SEO';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1920&q=85',
    title: 'THE SANCTUARY OF HUMAN PERFORMANCE',
    subtitle: 'Precision Engineered Commercial Fitness Architecture',
  },
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85',
    title: 'WORLD CLASS BIOMECHANICAL RIGS',
    subtitle: 'Partnered with Precor, Matrix, Concept 2 & Torque USA',
  },
  {
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920&q=85',
    title: 'HYPERICE RECOVERY & BIOHACKING',
    subtitle: 'Optimizing Post-Workout Recovery & Human Longevity',
  },
];

const USP_CARDS = [
  {
    id: 1,
    title: 'World Class Equipment',
    description: 'Experience biomechanical perfection in every workout with Tanush meticulously curated commercial lines.',
    brands: ['Matrix', 'Torque USA', 'Concept 2', 'Precor'],
    icon: <Dumbbell className="w-8 h-8 text-[#C5A880]" />,
  },
  {
    id: 2,
    title: 'For All Age Groups',
    description: 'Tailored functional training architectures and supportive environments designed for multi-generational vitality.',
    brands: ['Youth Athletic', 'Senior Mobility', 'Pro Strength'],
    icon: <HeartPulse className="w-8 h-8 text-[#C5A880]" />,
  },
  {
    id: 3,
    title: 'Recovery Room - Hyperice',
    description: 'Revitalize in exclusive biohacking recovery suites offering pneumatic compression, percussion, and thermal therapies.',
    brands: ['Hyperice Partner', 'Cryo Chamber', 'Percussion Bar'],
    icon: <Zap className="w-8 h-8 text-[#C5A880]" />,
  },
  {
    id: 4,
    title: 'Certified Master Coaches',
    description: 'Unlock human potential with certified coaches, accredited trainers, and automated facility operational workflows.',
    brands: ['ACSM Certified', 'Strength Directors', 'AMC Support'],
    icon: <Award className="w-8 h-8 text-[#C5A880]" />,
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
    category: 'HARDWARE',
    title: 'Commercial Gym Equipment',
    tagline: 'Complete professional gym equipment supply for commercial fitness facilities',
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
    id: 'manpower',
    number: '02',
    category: 'RECRUITMENT',
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
  {
    id: 'services',
    number: '03',
    category: 'OPERATIONS',
    title: 'Turnkey Gym Setup',
    tagline: 'End-to-end gym setup including planning, equipment, installation, and project execution',
    description: 'Complete 360° architectural spatial floor planning, high-density acoustic rubber isolation flooring, biometric RFID access turnstiles, and pre-sales digital lead acquisition funnels.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    icon: Briefcase,
    page: 'services' as const,
    btnText: 'Explore Turnkey Solutions',
    points: [
      '3D CAD Spatial Floor Schematics',
      'Acoustic Flooring & Access Turnstiles',
      'End-to-End Installation & Launch Support'
    ],
  },
];

export const HomePage: React.FC = () => {
  const { navigateTo, showToast } = useApp();

  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  // Vision Tab State
  const [visionTab, setVisionTab] = useState<'what' | 'why'>('what');
  // Facility Zone State
  const [activeZone, setActiveZone] = useState(0);
  // Inquiry Form State
  const [selectedCity, setSelectedCity] = useState('Delhi NCR');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySqft, setInquirySqft] = useState('5,000 - 10,000 sq.ft');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

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

  return (
    <main className="min-h-screen bg-[#090C10] text-[#E2E8F0] luxury-noise overflow-hidden">
      <SEO
        title="Tanush Fitness | Luxury Commercial Fitness Sanctuaries & Turnkey Outfitting"
        description="Experience India's premier luxury fitness sanctuary. World-class biomechanical equipment, bespoke 3D CAD architecture, and turnkey facility outfitting."
      />

      {/* ========================================================================= */}
      {/* SECTION 1: KINETIC EDITORIAL HERO LANDING                                 */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C5A880]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto w-full my-auto text-center space-y-8 z-10 pt-8">
          {/* Top Brand Micro Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C5A880]/30 text-xs font-mono text-[#C5A880] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>India's Premier Fitness Outfitting Brand</span>
          </div>

          {/* Master Kinetic Headline with Embedded Imagery Pills */}
          <div className="space-y-3 sm:space-y-4 select-none">
            {/* Headline Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              <span>GET READY</span>
              <div className="inline-block h-10 sm:h-14 md:h-18 w-16 sm:w-24 md:w-32 rounded-full overflow-hidden border border-[#C5A880]/40 shadow-xl shrink-0 align-middle">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80"
                  alt="Tanush Fitness Rigs"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[#C5A880]">TO UNLEASH</span>
            </div>

            {/* Headline Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              <span>YOUR</span>
              <div className="inline-block h-10 sm:h-14 md:h-18 w-20 sm:w-28 md:w-36 rounded-full overflow-hidden border border-white/20 shadow-xl shrink-0 align-middle">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=400&q=80"
                  alt="Tanush Sanctuary"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>INNER POTENTIAL</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
            Introducing India's premier commercial fitness destination & outfitting brand. Where fitness reaches new heights, biomechanical engineering takes center stage, and wellness transforms body and mind.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigateTo('services')}
              className="btn-vault w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 group"
            >
              <span>Explore Core Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => navigateTo('equipment')}
              className="btn-vault-outline w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2"
            >
              <span>Equipment Catalog</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
            </button>
          </div>
        </div>

        {/* Hero Full-Width Carousel Slider */}
        <div className="max-w-7xl mx-auto w-full pt-12 pb-4">
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={HERO_SLIDES[currentSlide].image}
                  alt={HERO_SLIDES[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-left max-w-xl space-y-2">
                  <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-[0.25em]">
                    FLAGSHIP COMMERCIAL ARCHITECTURE
                  </span>
                  <h3 className="font-syne text-xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                    {HERO_SLIDES[currentSlide].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans hidden sm:block">
                    {HERO_SLIDES[currentSlide].subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20">
              <button
                type="button"
                onClick={() => setCurrentSlide(prev => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-[#090C10] transition border border-white/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length)}
                className="p-2 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-[#090C10] transition border border-white/10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: INFINITE RUNNING MARQUEE TICKER                               */}
      {/* ========================================================================= */}
      <MarqueeStrip theme="dark" />

      {/* ========================================================================= */}
      {/* SECTION 3: INTERACTIVE VISION SECTION (WHAT IS TANUSH VS WHY TANUSH)     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          {/* Section Header & Tab Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-[11px] font-mono tracking-[0.3em] text-[#C5A880] uppercase">
                THE TANUSH PHILOSOPHY
              </div>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                BEYOND TRADITIONAL FITNESS
              </h2>
            </div>

            {/* Vision Tab Buttons */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#0D1118] border border-white/10">
              <button
                type="button"
                onClick={() => setVisionTab('what')}
                className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                  visionTab === 'what'
                    ? 'bg-[#C5A880] text-[#090C10] font-bold shadow-md'
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
                    ? 'bg-[#C5A880] text-[#090C10] font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                The Philosophy
              </button>
            </div>
          </div>

          {/* Vision Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Side */}
            <div className="lg:col-span-7 space-y-6">
              {visionTab === 'what' ? (
                <div className="space-y-6 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
                  <p>
                    Introducing India's premier fitness destination & commercial outfitting brand: <span className="text-[#C5A880] font-bold">Tanush Fitness</span>, where physical engineering reaches new heights and wellness takes center stage. Step into a realm where every aspect of your fitness journey is meticulously crafted to elevate your <span className="text-white font-semibold">physical and mental well-being</span>.
                  </p>
                  <p>
                    At Tanush, we redefine the fitness experience with <span className="text-[#C5A880] font-semibold">state-of-the-art biomechanical machinery</span>, curated to empower you to unleash your true potential. Our commitment goes beyond mere equipment delivery; we provide a holistic <span className="text-white font-semibold">360-degree turnkey solution</span> to transform spaces, bodies, and minds.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => navigateTo('about')}
                      className="btn-vault-outline flex items-center gap-2"
                    >
                      <span>Read Our Full Story</span>
                      <ArrowRight className="w-4 h-4 text-[#C5A880]" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
                  <p>
                    As a testament to unwavering commitment to human health, athletic longevity, and industrial craftsmanship, <span className="text-[#C5A880] font-bold">Tanush Fitness</span> aims to redefine the Indian fitness landscape by offering far more than just a gym equipment catalog.
                  </p>
                  <blockquote className="p-6 rounded-2xl bg-[#0D1118] border-l-4 border-[#C5A880] text-slate-200 italic font-serif text-lg leading-relaxed">
                    "Tanush Fitness is not merely a gym supplier; it is a lifestyle and architectural movement. We believe in the transformative power of fitness, designing sanctuaries where individuals and communities achieve athletic excellence and cultivate balanced, fulfilling lives."
                  </blockquote>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => navigateTo('contact')}
                      className="btn-vault flex items-center gap-2"
                    >
                      <span>Partner With Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Image Side */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80"
                  alt="Tanush Fitness Sanctuary Vision"
                  className="w-full h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D1118]/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between font-mono text-xs text-[#C5A880]">
                    <span>ISO 9001:2015 CERTIFIED</span>
                    <span>350+ OUTLETS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: OUR USPs (HORIZONTAL CAROUSEL & VALUE PROPOSITIONS)           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[11px] font-mono tracking-[0.3em] text-[#C5A880] uppercase">
                WHY CHOOSE TANUSH
              </div>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                OUR DISTINCT VALUE
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('equipment')}
              className="btn-vault-outline text-xs"
            >
              Explore Equipment Specs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {USP_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-[#0D1118] border border-white/10 rounded-2xl p-8 space-y-6 luxury-card flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#C5A880] transition-colors">
                    {card.icon}
                  </div>

                  <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#C5A880] transition uppercase">
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
      {/* SECTION 5: TRAINING FACILITIES & FUNCTIONAL ZONES EXPLORER               */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[11px] font-mono tracking-[0.3em] text-[#C5A880] uppercase">
                SPATIAL ARCHITECTURE
              </div>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                TRAINING FACILITIES & ZONES
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('services')}
              className="btn-vault text-xs"
            >
              Turnkey Gym Setup
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Zone Selector Nav & Description */}
            <div className="lg:col-span-6 space-y-6">
              {/* Tab Selector Pills */}
              <div className="flex flex-wrap gap-2">
                {FACILITY_ZONES.map((zone, idx) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveZone(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                      activeZone === idx
                        ? 'bg-[#C5A880] text-[#090C10] font-bold shadow-md'
                        : 'bg-[#0D1118] text-slate-400 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    {zone.label}
                  </button>
                ))}
              </div>

              {/* Active Zone Content Card */}
              <div className="bg-[#0D1118] border border-white/10 rounded-2xl p-8 space-y-6">
                <h3 className="font-syne text-2xl font-bold text-white uppercase tracking-tight">
                  {FACILITY_ZONES[activeZone].title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  {FACILITY_ZONES[activeZone].description}
                </p>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {FACILITY_ZONES[activeZone].tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-mono text-[#C5A880] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Zone Image Preview */}
            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeZone}
                    src={FACILITY_ZONES[activeZone].image}
                    alt={FACILITY_ZONES[activeZone].title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: THREE PILLARS OF GYM OUTFITTING (CORE SERVICES SECTION)       */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          {/* Section Header with exact heading from previous website */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-[11px] font-mono tracking-[0.3em] text-[#C5A880] uppercase">
                CORE PROCUREMENT VERTICALS
              </div>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                THREE PILLARS OF GYM OUTFITTING
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-sans max-w-2xl mt-1 leading-relaxed">
                Direct access to wholesale machinery catalog, verified manpower recruitment, and end-to-end turnkey facility planning.
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

          {/* 3 Core Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-[#0D1118] border border-white/10 rounded-2xl overflow-hidden luxury-card flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Container */}
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

                      {/* Top Pillar Number Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-[#090C10]/90 backdrop-blur-md border border-[#C5A880]/30 text-[10px] font-mono text-[#C5A880] font-bold uppercase tracking-wider">
                          PILLAR {pillar.number} // {pillar.category}
                        </span>
                      </div>

                      {/* Top Right Icon */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#090C10]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#C5A880]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3
                          onClick={() => navigateTo(pillar.page)}
                          className="font-syne text-xl font-bold text-white group-hover:text-[#C5A880] transition uppercase cursor-pointer"
                        >
                          {pillar.title}
                        </h3>
                        <p className="text-xs font-mono text-[#C5A880] mt-1">
                          {pillar.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Bullet Checkpoints */}
                      <div className="space-y-2 pt-3 border-t border-white/5 font-mono text-xs text-slate-300">
                        {pillar.points.map((pt, ptIdx) => (
                          <div key={ptIdx} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      onClick={() => navigateTo(pillar.page)}
                      className="btn-vault w-full py-3 text-xs flex items-center justify-center gap-2 group/btn uppercase tracking-wider"
                    >
                      <span>{pillar.btnText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: CORPORATE PARTNERS & GLOBAL BRANDS MARQUEE                    */}
      {/* ========================================================================= */}
      <section className="py-16 border-b border-white/5 bg-[#05070A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <div className="text-[11px] font-mono tracking-[0.3em] text-[#C5A880] uppercase">
            GLOBAL AFFILIATES & EQUIPMENT PARTNERS
          </div>
        </div>
        <MarqueeStrip
          items={['MATRIX FITNESS', 'PRECOR USA', 'TORQUE FITNESS', 'CONCEPT 2', 'ELEIKO OLYMPIC', 'HYPERICE RECOVERY', 'THOR GYM TECH']}
          speed="normal"
          theme="minimal"
        />
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: COMMERCIAL OUTLAY & FRANCHISE CONSULTATION PORTAL             */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-br from-[#0D1118] via-[#121722] to-[#090C10] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C5A880]/30 text-xs font-mono text-[#C5A880] tracking-widest uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>Pan-India Commercial Expansion</span>
              </div>

              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                LAUNCH YOUR OWN <span className="text-[#C5A880]">FITNESS SANCTUARY</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Connect with our Senior Commercial Outfitting Directorate. We provide customized 3D CAD space layouts, imported equipment procurement, flooring acoustics, and complete gym commissioning.
              </p>

              <div className="space-y-3 font-mono text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>Direct Factory Procurement with 18% GST Input Tax Credit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>Turnkey Architectural CAD Layouts within 48 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>Certified Trainer & Operational Leadership Recruitment</span>
                </div>
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-6 bg-[#090C10] border border-white/10 rounded-2xl p-8 space-y-4 shadow-xl">
              <h3 className="font-syne text-xl font-bold text-white uppercase">
                Request VIP Outfitting Proposal
              </h3>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vikram Malhotra"
                    value={inquiryName}
                    onChange={e => setInquiryName(e.target.value)}
                    className="w-full bg-[#0D1118] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98112 34567"
                      value={inquiryPhone}
                      onChange={e => setInquiryPhone(e.target.value)}
                      className="w-full bg-[#0D1118] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="vikram@fitplus.in"
                      value={inquiryEmail}
                      onChange={e => setInquiryEmail(e.target.value)}
                      className="w-full bg-[#0D1118] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Location / City
                    </label>
                    <select
                      value={selectedCity}
                      onChange={e => setSelectedCity(e.target.value)}
                      className="w-full bg-[#0D1118] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Mumbai / MMR">Mumbai / MMR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Punjab (Chandigarh/Ludhiana)">Punjab</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Other Pan-India">Other Pan-India</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Facility Square Footage
                    </label>
                    <select
                      value={inquirySqft}
                      onChange={e => setInquirySqft(e.target.value)}
                      className="w-full bg-[#0D1118] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880]"
                    >
                      <option value="2,500 - 5,000 sq.ft">2,500 - 5,000 sq.ft</option>
                      <option value="5,000 - 10,000 sq.ft">5,000 - 10,000 sq.ft</option>
                      <option value="10,000 - 25,000+ sq.ft">10,000 - 25,000+ sq.ft</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-vault w-full py-3.5 mt-2"
                >
                  Submit Commercial Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
