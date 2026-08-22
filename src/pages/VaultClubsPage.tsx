import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import { Sparkles, MapPin, Phone, Mail, ArrowRight, Search } from 'lucide-react';

const ALL_CLUBS = [
  {
    name: 'Greater Kailash 1',
    city: 'Delhi NCR',
    area: 'South Delhi',
    address: 'Pacific Sports Complex, National Park, Lajpat Nagar, Delhi - 110048',
    phone: '+91 9599-0025-18',
    email: 'gk1009@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/LJHy4uJuS8YFU91Z9',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/683ebb9ad6e501f347f3c249_WhatsApp%20Image%202025-06-03%20at%2014.19.39.jpeg',
  },
  {
    name: 'Rajouri Garden',
    city: 'Delhi NCR',
    area: 'West Delhi',
    address: 'R Cube Monad Mall, Shivaji Place, New Delhi, 110027',
    phone: '+91 9220-2711-73',
    email: 'rajourigarden008@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/mJxq6fF8FS5qhdVa7',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/683ebe8705e4ad450f1e1b15_IMG_4774%20(1).jpg',
  },
  {
    name: 'New Friends Colony',
    city: 'Delhi NCR',
    area: 'South Delhi',
    address: 'FF, DDA Build Restaurant, Community Center, Ashok Vihar, New Friends Colony, New Delhi, Delhi 110025',
    phone: '+91 9266-5755-58',
    email: 'nfc006@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/EHihrA4yVBALu6GR6',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/67bf60500ec1dd49fed1a394_2025-02-22.jpg',
  },
  {
    name: 'Rohini - Sector 3',
    city: 'Delhi NCR',
    area: 'North Delhi',
    address: 'First Floor, A1/10, Mangalam Place, Rohini, New Delhi, Delhi - 110085',
    phone: '+91 9266-9789-89',
    email: 'rohinisec3007@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/p9YWFzJQ85DLVKqB6',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/67bed127fba8f2de3712b282_Rohini.JPG',
  },
  {
    name: 'Gorakhpur',
    city: 'Uttar Pradesh',
    area: 'Taramandal',
    address: 'Nauka Vihar Rd, Rail Vihar Colony Phase 3rd, Taramandal, Gorakhpur, Manhat, Uttar Pradesh - 273010',
    phone: '+91 7275-5543-10',
    email: 'gorakhpur.tm004@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/QZvYQ1GbEnD5mekh9',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/67bed089fba8f2de371219c5_Gorakhpur.jpeg',
  },
  {
    name: 'Pitampura',
    city: 'Delhi NCR',
    area: 'North Delhi',
    address: 'PP City Center Mall, Pitampura, Delhi - 110034',
    phone: '+91 7011-1540-62',
    email: 'pitampura002@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/Ae1dXUpxC3ZgABtH7?g_st=iw',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/68a86f7699cab6522fb5c6c7_IMG_3588.jpg',
  },
  {
    name: 'Pusa Road',
    city: 'Delhi NCR',
    area: 'Central Delhi',
    address: '7, Pusa Road, WEA, Karol Bagh, New Delhi - 110005',
    phone: '+91 98798 74316',
    email: 'pusaroad003@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/Xxmn7fe9KJNTipnV6',
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/65578133380f50fff1685831_Cj%20Puma%20VK%20SS%2022_0425.webp',
  },
  {
    name: 'Gujranwala',
    city: 'Delhi NCR',
    area: 'North Delhi',
    address: 'North Gate Mall, Gujranwala Town, Delhi - 110009',
    phone: '+91 98189 02653',
    email: 'vault.gujranwala001@gmail.com',
    mapLink: 'https://maps.app.goo.gl/HJXdwNwRrucLVMuK8',
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/65dfa017880ad5b1b0775de2_VK%20Sticker%202.webp',
  },
];

export const VaultClubsPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const filteredClubs = ALL_CLUBS.filter((club) => {
    if (selectedCity !== 'all' && club.city !== selectedCity) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        club.name.toLowerCase().includes(q) ||
        club.address.toLowerCase().includes(q) ||
        club.area.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <main className="bg-[#090C10] text-[#E2E8F0] luxury-noise min-h-screen pt-28 pb-24">
      <SEO
        title="Our Clubs | VAULT BY VIRAT KOHLI"
        description="Explore all Vault by Virat Kohli clubs across Delhi NCR, Uttar Pradesh, and India. Find addresses, phone numbers, and directions."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D26539]/40 text-xs font-mono text-[#D26539] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PAN-INDIA LOCATIONS</span>
            </div>

            <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
              EXPLORE OUR <span className="text-[#D26539]">CLUBS</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans leading-relaxed">
              Find your nearest Vault Fitness Club sanctuary. Discover world-class equipment, community energy, and luxury amenities.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {['all', 'Delhi NCR', 'Uttar Pradesh'].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCity(c)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition whitespace-nowrap ${
                  selectedCity === c
                    ? 'bg-[#D26539] text-white font-bold'
                    : 'bg-[#0D1118] text-slate-400 border border-white/10 hover:text-white'
                }`}
              >
                {c === 'all' ? 'All Locations' : c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search club, area, mall..."
              className="w-full bg-[#0D1118] border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
            />
          </div>
        </div>
      </section>

      {/* Clubs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs.map((club, idx) => (
            <div
              key={idx}
              className="bg-[#0D1118] border border-white/10 rounded-3xl overflow-hidden luxury-card flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1118] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#090C10]/90 border border-white/10 text-[10px] font-mono text-[#D26539] uppercase">
                      {club.city}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-syne text-2xl font-bold text-white uppercase group-hover:text-[#D26539] transition">
                    {club.name}
                  </h3>

                  <div className="space-y-2.5 font-mono text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#D26539] shrink-0 mt-0.5" />
                      <span>{club.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#D26539] shrink-0" />
                      <a href={`tel:${club.phone}`} className="hover:text-white">
                        {club.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#D26539] shrink-0" />
                      <a href={`mailto:${club.email}`} className="hover:text-white truncate">
                        {club.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={club.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-full bg-white/5 hover:bg-[#D26539] text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
