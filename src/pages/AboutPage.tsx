import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Target, Eye, Award, Building2, Users, ArrowRight, CheckCircle2, Sparkles, Phone, Compass, Cpu, Wrench } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { MarqueeStrip } from '../components/common/MarqueeStrip';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <main className="pt-24 pb-20 bg-[#090C10] min-h-screen text-[#E2E8F0] luxury-noise">
      <SEO
        title="The Tanush Legacy & Precision Biomechanics | Tanush Fitness"
        description="Engineering high-performance athletic sanctuaries. 11-gauge laser cut steel, ISO 9001:2015 precision manufacturing, and nationwide commercial outfitting."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A880]/30 text-xs font-mono text-[#C5A880] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ARCHITECTURAL DISCIPLINE // EST. 2018</span>
            </div>

            <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              THE TANUSH <span className="text-[#C5A880]">LEGACY</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 max-w-2xl font-sans leading-relaxed">
              We design and manufacture commercial fitness environments where precision biomechanics, structural 11-gauge steel, and architectural luxury converge.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigateTo('clubs')}
              className="btn-vault flex items-center gap-2 text-xs py-2.5 px-5"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Visit Flagship Showrooms</span>
            </button>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeStrip theme="minimal" speed="slow" />

      {/* Editorial Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-[#C5A880] uppercase tracking-widest block">
              PRECISION BIOMECHANICS & HEAVY STEEL
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl font-extrabold text-white uppercase leading-tight">
              Engineering Sanctuaries for Human Potential
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
              Tanush Fitness was founded on a singular standard: commercial fitness machinery must endure relentless industrial load while executing biomechanically flawless converging movement arcs.
            </p>
            <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
              From our robotic laser-welding plants to our turnkey 3D architectural acoustic studios, we deliver end-to-end infrastructure for India’s most distinguished health clubs, luxury resorts, and high-performance training centers.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs text-slate-300">
              <div className="bg-[#0D1118] border border-white/10 p-4 rounded-xl">
                <span className="text-[#C5A880] font-bold block text-2xl font-syne mb-1">500+</span>
                <span className="text-slate-400 text-[10px] uppercase">COMMERCIAL FACILITIES OUTFITTED</span>
              </div>
              <div className="bg-[#0D1118] border border-white/10 p-4 rounded-xl">
                <span className="text-[#C5A880] font-bold block text-2xl font-syne mb-1">11-GAUGE</span>
                <span className="text-slate-400 text-[10px] uppercase">STRUCTURAL LASER CUT STEEL</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0D1118]">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                alt="Tanush Manufacturing & Sanctuary"
                className="w-full h-[450px] object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#090C10]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-[#C5A880]">
                ISO 9001:2015 CERTIFIED PRECISION LASER MANUFACTURING FACILITY
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / USPs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0D1118] border border-white/10 rounded-2xl p-8 space-y-4 luxury-card">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880]">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-xl font-bold text-white uppercase">Direct Factory Direct</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
              Eliminate third-party trading markups. Receive 18% GST Input Tax Credit compliant direct manufacturer invoicing with 10-year structural frame guarantees.
            </p>
          </div>

          <div className="bg-[#0D1118] border border-white/10 rounded-2xl p-8 space-y-4 luxury-card">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-xl font-bold text-white uppercase">3D CAD Turnkey Suites</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
              Full architectural spatial planning, acoustic rubber isolation, and RFID turnstile integration customized to your commercial floor plan.
            </p>
          </div>

          <div className="bg-[#0D1118] border border-white/10 rounded-2xl p-8 space-y-4 luxury-card">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-syne text-xl font-bold text-white uppercase">Master Coach Placement</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
              Access India’s certified roster of NASM, CSCS, and K11 personal trainers and general managers for rapid club launch readiness.
            </p>
          </div>
        </div>

        {/* Executive Engineering Leadership */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-[#C5A880] uppercase tracking-widest block">
              EXECUTIVE LEADERSHIP & ENGINEERING
            </span>
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-white uppercase">
              The Minds Behind Tanush Precision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dev Solanki', title: 'Managing Director & Biomechanics Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', bio: 'Specializing in 11-gauge industrial frame geometry and commercial facility outfitting nationwide.' },
              { name: 'Rohan Mehta', title: 'Director of Laser Manufacturing', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', bio: 'Directs ISO 9001:2015 robotic welding calibration and heavy tensile stress tests for selectorized machines.' },
              { name: 'Priya Sharma', title: 'VP of Master Staffing & Academy', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: 'Head of credential vetting for NASM, CSCS, and ACE certified master personal trainer placements.' }
            ].map((team, i) => (
              <div key={i} className="bg-[#0D1118] border border-white/10 rounded-2xl p-6 luxury-card space-y-4">
                <img src={team.image} alt={team.name} className="w-20 h-20 rounded-2xl object-cover border border-white/10" />
                <div className="space-y-1">
                  <h3 className="font-syne text-lg font-bold text-white uppercase">{team.name}</h3>
                  <div className="text-xs font-mono text-[#C5A880] uppercase">{team.title}</div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed pt-2">{team.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-[#0D1118] via-[#111622] to-[#0D1118] border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 luxury-noise">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#C5A880] uppercase tracking-widest block">COMMERCIAL INQUIRIES</span>
            <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white uppercase">
              Ready to Outfit Your Commercial Sanctuary?
            </h3>
            <p className="text-slate-400 text-sm font-sans max-w-xl">
              Connect with our Executive Engineering Team for official project RFQ quotes and spatial CAD modeling.
            </p>
          </div>

          <button
            onClick={() => navigateTo('contact')}
            className="btn-vault shrink-0 px-8 py-3.5 text-xs uppercase tracking-wider"
          >
            Connect With Factory Desk
          </button>
        </div>
      </div>
    </main>
  );
};
