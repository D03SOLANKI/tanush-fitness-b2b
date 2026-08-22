import React from 'react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import { Sparkles, ArrowRight, CheckCircle2, Dumbbell, Zap, Activity, Users } from 'lucide-react';

const FACILITIES_LIST = [
  {
    title: 'Group Sessions',
    category: 'COMMUNITY & TEAM WORKOUTS',
    description: 'Experience the energy of unity in our group sessions at Vault – where individual goals converge into a shared pursuit of fitness. Led by expert instructors, our dynamic group sessions create an uplifting atmosphere, fostering motivation and camaraderie. Join the community, sweat together, and celebrate every fitness milestone as one.',
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/6a0ea524d5c8a3a848fa9be3_Group%20Sessions%20(1).png',
    features: ['Dynamic High-Intensity Interval Protocols', 'Functional Movement Mobility', 'Certified Master Instructors', 'Music-Driven Group Conditioning'],
  },
  {
    title: 'Training Wall®',
    category: 'REVOLUTIONARY COORDINATION',
    description: 'Training Wall® is a revolutionary fitness and training equipment that simultaneously exercises both upper and lower body. Training Wall® demands coordination and balance in its use, thereby stimulating the activation of the stabilizing muscles of the back and abdomen.',
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/6a0ea54747684cfb0f853e01_Trainiing%20Wall.png',
    features: ['Simultaneous Multi-Planar Activation', 'Core & Spinal Stability Stimulation', 'Custom Modular Rigs & Attachments', 'Functional Postural Calibration'],
  },
  {
    title: 'Strength Training',
    category: 'INSPIRED BY VIRAT KOHLI',
    description: "Vault's strength training, inspired by Virat Kohli, offers personalized regimens focusing on muscle development and functional fitness. Expert trainers tailor programs for all levels, ensuring holistic strength enhancement. Join us for a dynamic and results-driven fitness experience.",
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/6a0ea55751ad8ac527787a86_Strength%20training%20(2).png',
    features: ['Biomechanical Isolation & Free Weights', 'Personalized Hypertrophy & Athletic Regimens', 'Olympic Lifting Platforms', 'Expert Form & Injury-Prevention Oversight'],
  },
  {
    title: 'Recovery Room — Hyperice',
    category: 'BIOHACKING & LONGEVITY',
    description: 'Optimize your performance with pneumatic compression therapies, contrast therapies, and vibration therapy powered by Hyperice. Accelerate muscle recovery, reduce inflammation, and recharge for your next session.',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/683ebb9ad6e501f347f3c249_WhatsApp%20Image%202025-06-03%20at%2014.19.39.jpeg',
    features: ['Hyperice Normatec 3 Boots', 'Hypervolt Percussion Therapy', 'Contrast Hydrotherapy Baths', 'Private Relaxation Suites'],
  },
];

export const VaultTrainingPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <main className="bg-[#090C10] text-[#E2E8F0] luxury-noise min-h-screen pt-28 pb-24">
      <SEO
        title="Training Facilities | VAULT BY VIRAT KOHLI"
        description="Discover state-of-the-art training facilities at Vault by Virat Kohli. Group sessions, Training Wall®, Strength zones, and Hyperice recovery."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D26539]/40 text-xs font-mono text-[#D26539] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FACILITY SPACES & PROTOCOLS</span>
            </div>

            <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              TRAINING <span className="text-[#D26539]">FACILITIES</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans leading-relaxed">
              Experience fitness like never before with world class equipment, personalized training programs, and revolutionary training methods.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-3.5 rounded-full bg-[#D26539] hover:bg-[#C2552F] text-white font-syne font-bold text-xs uppercase tracking-wider transition shadow-xl flex items-center gap-2"
            >
              <span>Book Facility Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {FACILITIES_LIST.map((fac, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0D1118] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl ${
              idx % 2 === 1 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:col-start-7 lg:col-span-6' : 'lg:col-span-6'}`}>
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#D26539] uppercase tracking-widest block">
                  {fac.category}
                </span>
                <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-white uppercase">
                  {fac.title}
                </h2>
              </div>

              <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
                {fac.description}
              </p>

              <div className="space-y-3 pt-2 font-mono text-xs text-slate-300 border-t border-white/5">
                {fac.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D26539] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className="px-6 py-3 rounded-full bg-[#D26539] hover:bg-[#C2552F] text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 transition"
                >
                  <span>Experience in Person</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className={`relative ${idx % 2 === 1 ? 'lg:col-start-1 lg:col-span-6' : 'lg:col-span-6'}`}>
              <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
