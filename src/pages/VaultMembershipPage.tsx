import React from 'react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Dumbbell,
  Heart,
  Activity,
  ShieldCheck,
  Zap,
  Users,
  Compass
} from 'lucide-react';

const BENEFIT_CATEGORIES = [
  {
    title: 'WORLD CLASS EQUIPMENT',
    items: [
      'Treadmills with interactive HD consoles',
      'Ellipticals with adaptive stride',
      'Rowers & Ergometers',
      'Heavy-duty Selectorized Strength Rigs',
      'Training Wall® multi-station rigs',
      'Comprehensive Free Weights & Olympic Barbells',
      'Stair Climbers with digital calorie analytics',
      'Performance Cycles with LED consoles',
    ],
  },
  {
    title: 'HOLISTIC WELLNESS & BIOHACKING',
    items: [
      'Recovery Room with Hyperice Normatec compression',
      'Percussion therapy stations',
      'Contrast bath & hydrotherapy options',
      'Nutritional counseling & bespoke meal blueprints',
      'Comprehensive Body Composition Analysis (InBody)',
      'Kids & youth athletic fitness conditioning',
      'Active lifestyle seminars & private workshops',
      'Mental wellness & mindfulness sanctuaries',
    ],
  },
  {
    title: 'LIFESTYLE & HOSPITALITY',
    items: [
      'Open 19 Hours a Day / 7 Days a Week',
      'Health Cafe proudly partnered with One8 Commune',
      'Dynamic high-energy Team Workouts',
      'Vault Mobile App for seamless tracking & bookings',
      'High-speed seamless club Wi-Fi access',
      'Private luxury restrooms & rain showers',
      'Dedicated valet & club parking',
      'Pan-India Vault reciprocal access across all clubs',
    ],
  },
];

export const VaultMembershipPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <main className="bg-[#090C10] text-[#E2E8F0] luxury-noise min-h-screen pt-28 pb-24">
      <SEO
        title="Membership Benefits | VAULT BY VIRAT KOHLI"
        description="Explore exclusive Vault by Virat Kohli membership benefits. World-class equipment, Hyperice recovery, One8 Health Cafe, and pan-India club privileges."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D26539]/40 text-xs font-mono text-[#D26539] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE VAULT EXPERIENCE</span>
            </div>

            <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              MEMBERSHIP <span className="text-[#D26539]">BENEFITS</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans leading-relaxed">
              India's first premium fitness chain VAULT by Virat Kohli presents you fitness like never before with world class equipments, holistic wellness, and community privileges.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-3.5 rounded-full bg-[#D26539] hover:bg-[#C2552F] text-white font-syne font-bold text-xs uppercase tracking-wider transition shadow-xl flex items-center gap-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFIT_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-6 luxury-card flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="pb-3 border-b border-white/10">
                  <span className="text-[10px] font-mono text-[#C5A880] tracking-widest uppercase block">
                    CATEGORY // 0{idx + 1}
                  </span>
                  <h3 className="font-syne text-xl font-bold text-white uppercase mt-1">
                    {cat.title}
                  </h3>
                </div>

                <ul className="space-y-3 font-mono text-xs text-slate-300">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D26539] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className="w-full py-3 rounded-full bg-white/5 hover:bg-[#D26539] text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <span>Apply for Membership</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vault Reciprocal Privilege Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-[#0D1118] via-[#141820] to-[#0D1118] border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#D26539] uppercase tracking-widest">
              PAN-INDIA ACCESS
            </span>
            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white uppercase">
              One Passport. All Vault Clubs.
            </h3>
            <p className="text-slate-300 text-sm font-sans max-w-xl">
              Enjoy seamless workout privileges across our flagship clubs in Greater Kailash, Rajouri Garden, Rohini, New Friends Colony, Pitampura, Pusa Road, and Gorakhpur.
            </p>
          </div>

          <button
            onClick={() => navigateTo('clubs')}
            className="px-8 py-3.5 rounded-full border border-[#D26539] text-[#D26539] hover:bg-[#D26539] hover:text-white font-syne font-bold text-xs uppercase tracking-wider transition shrink-0"
          >
            Locate Nearest Club
          </button>
        </div>
      </section>
    </main>
  );
};
