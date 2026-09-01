import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Target, Eye, Award, Building2, Users, ArrowRight, CheckCircle2, Sparkles, Phone, Compass, Cpu, Wrench, Briefcase, Layers } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { MarqueeStrip } from '../components/common/MarqueeStrip';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState<'what' | 'why'>('what');

  return (
    <main className="pt-24 pb-20 bg-[#0F1926] min-h-screen text-[#E8E8E8]">
      <SEO
        title="The Tanush Legacy & Precision Biomechanics | Tanush Fitness"
        description="Engineering high-performance athletic sanctuaries. 11-gauge laser cut steel, ISO 9001:2015 precision manufacturing, and nationwide commercial & residential outfitting."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2A2A2B] pb-8">
          <div className="space-y-3">
            <h1 className="font-satoshi text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-[#E8E8E8] tracking-[0.04em] leading-snug">
              THE TANUSH LEGACY
            </h1>

            <p className="text-sm sm:text-base text-[#D0CFCA] max-w-2xl font-sans leading-relaxed">
              We design and manufacture commercial & residential fitness environments where precision biomechanics, structural 11-gauge steel, and architectural luxury converge.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigateTo('services')}
              className="btn-primary flex items-center gap-2 text-xs py-3 px-6 cursor-pointer shadow-lg"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#0F1926]" />
              <span>Explore Management Solutions</span>
            </button>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeStrip theme="white" speed="slow" />

      {/* Editorial Story & Vision Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Interactive What is Tanush vs Why Tanush Section */}
        <div className="bg-[#0C1015] border border-[#2A2A2B] rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-[#2A2A2B] pb-6">
            <div className="space-y-1">
              <h2 className="font-satoshi text-xl sm:text-2xl font-extrabold text-[#E8E8E8] uppercase tracking-[0.03em] leading-snug">
                {activeTab === 'what' ? 'What is Tanush Fitness?' : 'Why Choose Tanush Fitness?'}
              </h2>
            </div>

            <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#0F1926] border border-[#2A2A2B]">
              <button
                type="button"
                onClick={() => setActiveTab('what')}
                className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                  activeTab === 'what'
                    ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                    : 'text-[#D0CFCA] hover:text-[#E8E8E8]'
                }`}
              >
                What is Tanush?
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('why')}
                className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition cursor-pointer ${
                  activeTab === 'why'
                    ? 'bg-[#E8E8E8] text-[#0F1926] font-bold shadow-md'
                    : 'text-[#D0CFCA] hover:text-[#E8E8E8]'
                }`}
              >
                Why Tanush?
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              {activeTab === 'what' ? (
                <div className="space-y-4 text-[#D0CFCA] font-sans leading-relaxed text-sm sm:text-base">
                  <p>
                    Introducing India's premier commercial & residential fitness sanctuary & outfitting brand: <span className="text-[#E8E8E8] font-bold">Tanush Fitness</span>, where precision biomechanical engineering and commercial strength take center stage.
                  </p>
                  <p>
                    At Tanush, we redefine the fitness outfitting landscape with state-of-the-art 11-gauge laser-cut equipment, certified trainer placements, and bespoke 3D CAD facility design.
                  </p>
                  <p>
                    Our commitment goes beyond machinery; we offer a holistic <span className="text-[#E8E8E8] font-semibold">360-degree comprehensive solution</span> to transform empty commercial square footage into world-class athletic destinations.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-[#D0CFCA] font-sans leading-relaxed text-sm sm:text-base">
                  <p>
                    As a testament to unwavering commitment to quality and athletic excellence, <span className="text-[#E8E8E8] font-bold">Tanush Fitness</span> redefines the B2B procurement experience.
                  </p>
                  <p>
                    With direct-from-factory pricing, 100% GST 18% Input Tax Credit invoicing, zero middleman markups, and dedicated master coach recruitment, Tanush is the trusted infrastructure partner for over 500+ commercial clubs nationwide.
                  </p>
                  <div className="p-5 rounded-xl bg-[#0F1926] border-l-4 border-[#E8E8E8] font-sans text-sm text-[#E8E8E8] italic shadow-lg">
                    "Tanush Fitness is not merely an equipment vendor; it is an end-to-end commercial infrastructure partner built for gym owners who demand perfection."
                  </div>
                </div>
              )}

              {/* 4-Stat Metric Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 font-mono text-xs text-[#D0CFCA] border-t border-[#2A2A2B]">
                <div className="p-3 rounded-xl bg-[#0F1926]/80 border border-[#2A2A2B]">
                  <span className="text-[#E8E8E8] font-extrabold block text-2xl font-satoshi">500+</span>
                  <span className="text-[#D0CFCA] text-[10px] uppercase">Clubs Outfitted</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0F1926]/80 border border-[#2A2A2B]">
                  <span className="text-[#E8E8E8] font-extrabold block text-2xl font-satoshi">11-GAUGE</span>
                  <span className="text-[#D0CFCA] text-[10px] uppercase">Laser Cut Steel</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0F1926]/80 border border-[#2A2A2B]">
                  <span className="text-[#E8E8E8] font-extrabold block text-2xl font-satoshi">ISO 9001</span>
                  <span className="text-[#D0CFCA] text-[10px] uppercase">Certified Plant</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0F1926]/80 border border-[#2A2A2B]">
                  <span className="text-[#E8E8E8] font-extrabold block text-2xl font-satoshi">18% ITC</span>
                  <span className="text-[#D0CFCA] text-[10px] uppercase">GST Invoices</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#2A2A2B] h-72 sm:h-96 shadow-2xl">
                <img
                  src={
                    activeTab === 'what'
                      ? 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80'
                      : 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
                  }
                  alt="Tanush Fitness Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1015] via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / USPs (#E8E8E8 Off-White Light Card Palette) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#E8E8E8] text-[#0F1926] border border-[#2A2A2B]/10 rounded-2xl p-8 space-y-4 group shadow-2xl hover:-translate-y-1.5 transition-all duration-300 hover:border-[#0F1926]">
            <div className="w-12 h-12 rounded-xl bg-[#0F1926]/10 border border-[#0F1926]/15 flex items-center justify-center text-[#0F1926] group-hover:text-[#0F1926] transition-colors">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-satoshi text-xl font-bold text-[#0F1926] uppercase">Direct Factory Supply</h3>
            <p className="text-[#2A2A2B] text-xs sm:text-sm leading-relaxed font-sans">
              Eliminate third-party trading markups. Receive 18% GST Input Tax Credit compliant direct manufacturer invoicing with 10-year structural frame guarantees.
            </p>
          </div>

          <div className="bg-[#E8E8E8] text-[#0F1926] border border-[#2A2A2B]/10 rounded-2xl p-8 space-y-4 group shadow-2xl hover:-translate-y-1.5 transition-all duration-300 hover:border-[#0F1926]">
            <div className="w-12 h-12 rounded-xl bg-[#0F1926]/10 border border-[#0F1926]/15 flex items-center justify-center text-[#0F1926] group-hover:text-[#0F1926] transition-colors">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-satoshi text-xl font-bold text-[#0F1926] uppercase">3D CAD Facility Modeling</h3>
            <p className="text-[#2A2A2B] text-xs sm:text-sm leading-relaxed font-sans">
              Full architectural spatial planning, acoustic rubber isolation, and RFID turnstile integration customized to your commercial floor plan.
            </p>
          </div>

          <div className="bg-[#E8E8E8] text-[#0F1926] border border-[#2A2A2B]/10 rounded-2xl p-8 space-y-4 group shadow-2xl hover:-translate-y-1.5 transition-all duration-300 hover:border-[#0F1926]">
            <div className="w-12 h-12 rounded-xl bg-[#0F1926]/10 border border-[#0F1926]/15 flex items-center justify-center text-[#0F1926] group-hover:text-[#0F1926] transition-colors">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-satoshi text-xl font-bold text-[#0F1926] uppercase">Certified Master Staffing</h3>
            <p className="text-[#2A2A2B] text-xs sm:text-sm leading-relaxed font-sans">
              Recruit credentialed NASM, CSCS, ACE, and K11 fitness directors and personal training talent through verified recruitment funnels.
            </p>
          </div>
        </div>

        {/* Executive Engineering Leadership (#E8E8E8 Light Card Palette) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-satoshi text-2xl sm:text-3xl font-extrabold text-[#E8E8E8] uppercase">
              The Minds Behind Tanush Precision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Pravinsinh Zala', title: 'Founder & Managing Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', bio: 'Specializing in 11-gauge industrial frame geometry and commercial facility outfitting nationwide.' },
              { name: 'Greeshma Patel', title: 'Director of Operations & Gym Management', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: 'Head of credential vetting, 3D CAD space modeling, and institutional commercial gym outfitting.' }
            ].map((team, i) => (
              <div key={i} className="bg-[#E8E8E8] text-[#0F1926] border border-[#2A2A2B]/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl group hover:-translate-y-1.5 transition-all duration-300 hover:border-[#0F1926]">
                <img src={team.image} alt={team.name} className="w-20 h-20 rounded-xl object-cover border border-[#0F1926]/15 shadow-md" />
                <div className="space-y-1">
                  <h3 className="font-satoshi text-lg sm:text-xl font-bold text-[#0F1926] uppercase">{team.name}</h3>
                  <div className="text-xs font-mono text-[#2A2A2B] uppercase font-bold">{team.title}</div>
                  <p className="text-xs sm:text-sm text-[#2A2A2B]/80 font-sans leading-relaxed pt-2">{team.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#0C1015] border border-[#2A2A2B] rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="font-satoshi text-2xl sm:text-3xl font-extrabold text-[#E8E8E8] uppercase">
              Ready to Outfit Your Commercial Sanctuary?
            </h3>
            <p className="text-[#D0CFCA] text-sm font-sans max-w-xl">
              Connect with our Executive Engineering Team for official project RFQ quotes and spatial CAD modeling.
            </p>
          </div>

          <button
            onClick={() => navigateTo('contact')}
            className="btn-primary shrink-0 px-8 py-3.5 text-xs uppercase tracking-wider cursor-pointer shadow-lg"
          >
            Connect With Factory Desk
          </button>
        </div>
      </div>
    </main>
  );
};
