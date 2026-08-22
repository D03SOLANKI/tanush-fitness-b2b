import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Mail, Navigation, Sparkles, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { MarqueeStrip } from '../components/common/MarqueeStrip';

interface Club {
  id: string;
  name: string;
  region: 'Delhi NCR' | 'Bengaluru' | 'Hyderabad' | 'Punjab' | 'Uttar Pradesh';
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  image: string;
  features: string[];
}

const CLUBS: Club[] = [
  {
    id: 'club-1',
    name: 'Greater Kailash 1 Sanctuary',
    region: 'Delhi NCR',
    address: 'Pacific Sports Complex, National Park, Lajpat Nagar, Delhi - 110048',
    phone: '+91 95990 02518',
    email: 'gk1@tanushfitness.com',
    mapUrl: 'https://maps.google.com/?q=Pacific+Sports+Complex+Lajpat+Nagar+Delhi',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    features: ['Biomechanical Strength Deck', 'Hyperice Recovery Suite', 'Olympic Rig Zone'],
  },
  {
    id: 'club-2',
    name: 'Rajouri Garden Flagship',
    region: 'Delhi NCR',
    address: 'R Cube Monad Mall, Shivaji Place, New Delhi - 110027',
    phone: '+91 92202 71173',
    email: 'rajourigarden@tanushfitness.com',
    mapUrl: 'https://maps.google.com/?q=R+Cube+Monad+Mall+Rajouri+Garden+Delhi',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    features: ['Matrix Bio-Arc Rigs', 'Combat Training Arena', '360° Soundscape'],
  },
  {
    id: 'club-3',
    name: 'Pitampura City Experience Hub',
    region: 'Delhi NCR',
    address: 'PP City Center Mall, Pitampura, Delhi - 110034',
    phone: '+91 70111 54062',
    email: 'pitampura@tanushfitness.com',
    mapUrl: 'https://maps.google.com/?q=PP+City+Center+Mall+Pitampura+Delhi',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    features: ['Precor Cardio Suite', 'Hydrotherapy Recovery', 'Corporate Outfitting CAD Studio'],
  },
  {
    id: 'club-4',
    name: 'Indiranagar Performance Club',
    region: 'Bengaluru',
    address: '100ft Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka - 560038',
    phone: '+91 80456 78901',
    email: 'bengaluru@tanushfitness.com',
    mapUrl: 'https://maps.google.com/?q=100ft+Road+Indiranagar+Bengaluru',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    features: ['Eleiko Competition Platform', 'Cryotherapy Chamber', 'Pro Trainer Academy'],
  },
  {
    id: 'club-5',
    name: 'Jubilee Hills Sanctuary',
    region: 'Hyderabad',
    address: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana - 500033',
    phone: '+91 40678 91234',
    email: 'hyderabad@tanushfitness.com',
    mapUrl: 'https://maps.google.com/?q=Road+36+Jubilee+Hills+Hyderabad',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80',
    features: ['Torque USA Functional Rig', 'Recovery Bar', 'VIP Private Suites'],
  },
  {
    id: 'club-6',
    name: 'Gomti Nagar Experience Center',
    region: 'Uttar Pradesh',
    address: 'Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010',
    phone: '+91 52278 90123',
    email: 'lucknow@tanushfitness.com',
    mapUrl: 'https://maps.google.com/?q=Vibhuti+Khand+Gomti+Nagar+Lucknow',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    features: ['Turnkey Factory Showroom', 'Selectorized Stack Series', 'Flooring & Acoustical Lab'],
  },
];

export const ClubsPage: React.FC = () => {
  const { navigateTo } = useApp();
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');

  const filteredClubs = selectedRegion === 'ALL'
    ? CLUBS
    : CLUBS.filter(c => c.region === selectedRegion);

  return (
    <div className="min-h-screen bg-[#090C10] text-[#E2E8F0] luxury-noise">
      {/* Hero Header */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C5A880]/30 text-xs font-mono text-[#C5A880] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pan-India Presence</span>
          </div>

          <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white max-w-4xl mx-auto">
            EXPLORE OUR <span className="text-[#C5A880]">SANCTUARIES</span> & SHOWROOMS
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed">
            Experience our precision biomechanics and world-class commercial gym architecture in person. Book a private consultation or tour at any of our flagship centers.
          </p>

          {/* Region Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-6">
            {['ALL', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Uttar Pradesh'].map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                  selectedRegion === region
                    ? 'bg-[#C5A880] text-[#090C10] font-bold shadow-lg shadow-[#C5A880]/20'
                    : 'bg-[#0D1118] text-slate-300 border border-white/5 hover:border-white/20'
                }`}
              >
                {region === 'ALL' ? 'All Hubs' : region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <MarqueeStrip speed="slow" theme="minimal" />

      {/* Clubs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="bg-[#0D1118] border border-white/10 rounded-2xl overflow-hidden luxury-card flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1118] via-transparent to-black/30" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#090C10]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#C5A880] uppercase tracking-wider font-bold">
                    {club.region}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#C5A880] transition uppercase">
                    {club.name}
                  </h3>

                  <div className="space-y-2 text-xs font-mono text-slate-400">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                      <span className="font-sans text-slate-300 leading-relaxed">{club.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-white transition">
                        {club.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-white transition">
                        {club.email}
                      </a>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-2">
                    {club.features.map((f, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-[10px] font-mono text-slate-300 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#C5A880]" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={club.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-vault flex-1 text-center py-2.5 text-xs flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className="btn-vault-outline py-2.5 px-4 text-xs"
                >
                  Book Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIP Outfitting Consultation Banner */}
      <section className="bg-gradient-to-b from-[#0D1118] to-[#090C10] border-t border-white/10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-[11px] font-mono tracking-[0.3em] text-[#C5A880] uppercase">
            COMMERCIAL GYM EXPANSION
          </div>
          <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
            PLANNING A NEW COMMERCIAL FITNESS SANCTUARY?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed max-w-2xl mx-auto">
            From 2,500 sq.ft boutique recovery labs to 25,000 sq.ft luxury health clubs, Tanush Fitness provides end-to-end biomechanical outfitting, 3D CAD design, and operational management.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigateTo('contact')}
              className="btn-vault px-8 py-3.5 w-full sm:w-auto"
            >
              Request Custom Outfitting Quote
            </button>
            <button
              type="button"
              onClick={() => navigateTo('services')}
              className="btn-vault-outline px-8 py-3.5 w-full sm:w-auto"
            >
              Explore Turnkey Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
