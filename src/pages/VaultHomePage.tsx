import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Dumbbell,
  Users,
  ShieldCheck,
  Zap,
  Activity,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VAULT_HERO_SLIDES = [
  {
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/65dfa017880ad5b1b0775de2_VK%20Sticker%202.webp',
    title: 'VAULT BY VIRAT KOHLI',
    subtitle: 'India’s First Premium Fitness Chain',
  },
  {
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/683ebb9ad6e501f347f3c249_WhatsApp%20Image%202025-06-03%20at%2014.19.39.jpeg',
    title: 'STATE-OF-THE-ART FACILITIES',
    subtitle: 'World Class Equipment & Biomechanical Engineering',
  },
  {
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/683ebe8705e4ad450f1e1b15_IMG_4774%20(1).jpg',
    title: 'UNLEASH YOUR INNER POTENTIAL',
    subtitle: 'Holistic 360-Degree Wellness Sanctuary',
  },
];

const VAULT_USPS = [
  {
    id: 'equipment',
    title: 'World Class Equipment',
    description: "Experience excellence in every workout with Vault's world-class equipment, meticulously selected to elevate your fitness journey.",
    links: ['Matrix', 'Torque USA', 'Concept 2'],
    icon: <Dumbbell className="w-6 h-6 text-[#D26539]" />,
  },
  {
    id: 'all-ages',
    title: 'For all age groups',
    description: 'Vault offers tailored programs and a supportive environment suitable for individuals of all ages, fostering a healthy lifestyle for every generation.',
    links: ['Youth Programs', 'Active Seniors', 'Athletic Conditioning'],
    icon: <Users className="w-6 h-6 text-[#D26539]" />,
  },
  {
    id: 'recovery',
    title: 'Recovery Room — hyperice',
    description: 'Revitalize in our exclusive Recovery Room, offering state-of-the-art amenities and therapies to optimize your post-workout recovery and enhance performance.',
    links: ['Hyperice Normatec', 'Percussion Therapy', 'Contrast Bath'],
    icon: <Activity className="w-6 h-6 text-[#D26539]" />,
  },
  {
    id: 'cafe',
    title: 'Health Cafe — One8 Commune',
    description: 'Indulge in nourishing delights at our Health Cafe, proudly partnered with One8. Fuel your workouts with wholesome, delicious meals.',
    links: ['One8 Commune', 'Artisanal Nutrition', 'Organic Smoothies'],
    icon: <Heart className="w-6 h-6 text-[#D26539]" />,
  },
  {
    id: 'coaches',
    title: 'Certified Coaches',
    description: "Unlock your fitness potential with Vault's certified and experienced coaches. Personalized guidance for optimal results and lasting success.",
    links: ['Master Trainers', 'K11 Certified', 'CSCS Specialists'],
    icon: <Zap className="w-6 h-6 text-[#D26539]" />,
  },
];

const VAULT_FACILITIES = [
  {
    id: 0,
    title: 'Group Sessions',
    heading: 'Group Sessions',
    para: 'Experience the energy of unity in our group sessions at Vault – where individual goals converge into a shared pursuit of fitness. Led by expert instructors, our dynamic group sessions create an uplifting atmosphere, fostering motivation and camaraderie. Join the community, sweat together, and celebrate every fitness milestone as one.',
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/6a0ea524d5c8a3a848fa9be3_Group%20Sessions%20(1).png',
  },
  {
    id: 1,
    title: 'Training Wall®',
    heading: 'Training wall',
    para: 'Training Wall® is a revolutionary fitness and training equipment that simultaneously exercises both upper and lower body. Training Wall® demands coordination and balance in its use, thereby stimulating the activation of the stabilizing muscles of the back and abdomen.',
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/6a0ea54747684cfb0f853e01_Trainiing%20Wall.png',
  },
  {
    id: 2,
    title: 'Strength Training',
    heading: 'Strength training',
    para: "Vault's strength training, inspired by Virat Kohli, offers personalized regimens focusing on muscle development and functional fitness. Expert trainers tailor programs for all levels, ensuring holistic strength enhancement. Join us for a dynamic and results-driven fitness experience.",
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/6a0ea55751ad8ac527787a86_Strength%20training%20(2).png',
  },
];

const VAULT_CLUBS = [
  {
    name: 'Greater Kailash 1',
    address: 'Pacific Sports Complex, National Park, Lajpat Nagar, Delhi - 110048',
    phone: '+91 9599-0025-18',
    email: 'gk1009@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/LJHy4uJuS8YFU91Z9',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/683ebb9ad6e501f347f3c249_WhatsApp%20Image%202025-06-03%20at%2014.19.39.jpeg',
  },
  {
    name: 'Rajouri Garden',
    address: 'R Cube Monad Mall, Shivaji Place, New Delhi, 110027',
    phone: '+91 9220-2711-73',
    email: 'rajourigarden008@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/mJxq6fF8FS5qhdVa7',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/683ebe8705e4ad450f1e1b15_IMG_4774%20(1).jpg',
  },
  {
    name: 'New Friends Colony',
    address: 'FF, DDA Build Restaurant, Community Center, Ashok Vihar, New Friends Colony, New Delhi, Delhi 110025',
    phone: '+91 9266-5755-58',
    email: 'nfc006@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/EHihrA4yVBALu6GR6',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/67bf60500ec1dd49fed1a394_2025-02-22.jpg',
  },
  {
    name: 'Rohini - Sector 3',
    address: 'First Floor, A1/10, Mangalam Place, Rohini, New Delhi, Delhi - 110085',
    phone: '+91 9266-9789-89',
    email: 'rohinisec3007@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/p9YWFzJQ85DLVKqB6',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/67bed127fba8f2de3712b282_Rohini.JPG',
  },
  {
    name: 'Gorakhpur',
    address: 'Nauka Vihar Rd, Rail Vihar Colony Phase 3rd, Taramandal, Gorakhpur, Manhat, Uttar Pradesh - 273010',
    phone: '+91 7275-5543-10',
    email: 'gorakhpur.tm004@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/QZvYQ1GbEnD5mekh9',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/67bed089fba8f2de371219c5_Gorakhpur.jpeg',
  },
  {
    name: 'Pitampura',
    address: 'PP City Center Mall, Pitampura, Delhi - 110034',
    phone: '+91 7011-1540-62',
    email: 'pitampura002@vaultbyviratkohli.in',
    mapLink: 'https://maps.app.goo.gl/Ae1dXUpxC3ZgABtH7?g_st=iw',
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/68a86f7699cab6522fb5c6c7_IMG_3588.jpg',
  },
];

const CITY_LOCATIONS: Record<string, string[]> = {
  delhi: ['Gujranwala Town', 'Pitampura', 'Pusa Road', 'Shalimar Bagh', 'Rohini', 'New Friends Colony', 'GK 1', 'Rajouri Garden', 'Paschim Vihar', 'Bunglow Road', 'Gurugram Sector 47', 'Noida Sector 104', 'Prashant Vihar', 'Janakpuri', 'Patel Nagar', 'Dwarka Sector 7', 'Dwarka Sector 11', 'Rohini Sector 24'],
  uttar: ['Lakeside', 'Gomti Nagar', 'Gorakhpur Taramandal'],
  bengaluru: ['Indiranagar', 'Hennur Gardens', 'Hoodi'],
  hyderabad: ['Jubilee Hills', 'Hitec City'],
  punjab: ['Chandigarh Sector 8', 'Ludhiana'],
  assam: ['Guwahati GS Road'],
};

export const VaultHomePage: React.FC = () => {
  const { navigateTo, showToast } = useApp();

  const [heroSlide, setHeroSlide] = useState(0);
  const [visionTab, setVisionTab] = useState<'what' | 'why'>('what');
  const [facilityIndex, setFacilityIndex] = useState(0);

  // Form State
  const [inquiryType, setInquiryType] = useState<'member' | 'franchise' | 'job'>('member');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('delhi');
  const [location, setLocation] = useState('Gujranwala Town');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % VAULT_HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      showToast('Please fill in Name, Phone, and Email.', 'error');
      return;
    }
    showToast('Thank you! Your enquiry has been received. Our Vault team will be in touch with you shortly.', 'success');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-[#090C10] text-[#E2E8F0] luxury-noise min-h-screen">
      <SEO
        title="VAULT BY VIRAT KOHLI | India's First Premium Fitness Chain"
        description="India's first premium fitness chain VAULT by VIRAT KOHLI presents you fitness like never before with world class equipments, holistic wellness, and community."
      />

      {/* ========================================================================= */}
      {/* 1. KINETIC EDITORIAL HERO LANDING SECTION                                 */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-8 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full my-auto text-center space-y-8 z-10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D26539]/40 text-xs font-mono text-[#D26539] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VAULT BY VIRAT KOHLI // EST. 2024</span>
          </div>

          {/* Master Kinetic Headline with Rounded Image Capsules */}
          <div className="space-y-4 select-none">
            {/* Row 1 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              <span>GET READY</span>
              <div className="inline-block h-10 sm:h-16 md:h-20 w-16 sm:w-28 md:w-36 rounded-full overflow-hidden border-2 border-[#D26539] shadow-2xl shrink-0 align-middle">
                <img
                  src="https://cdn.prod.website-files.com/65252096a098ee065881920e/65578133380f50fff1685831_Cj%20Puma%20VK%20SS%2022_0425.webp"
                  alt="Virat Kohli Fitness"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[#D26539]">TO UNLEASH</span>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              <span>YOUR</span>
              <div className="inline-block h-10 sm:h-16 md:h-20 w-20 sm:w-32 md:w-40 rounded-full overflow-hidden border-2 border-[#C5A880] shadow-2xl shrink-0 align-middle">
                <img
                  src="https://cdn.prod.website-files.com/65252096a098ee065881920e/6a0ea55751ad8ac527787a86_Strength%20training%20(2).png"
                  alt="Vault Workout Sanctuary"
                  className="w-full h-full object-cover"
                />
              </div>
              <span>INNER POTENTIAL</span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed">
            India's first premium fitness chain <span className="text-white font-bold">VAULT by VIRAT KOHLI</span> presents you fitness like never before with world class equipments, calm luxury interiors, and holistic wellness.
          </p>

          {/* Action Button & Down Indicator */}
          <div className="flex flex-col items-center justify-center gap-6 pt-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => navigateTo('membership-benefit')}
                className="px-8 py-3.5 rounded-full bg-[#D26539] hover:bg-[#C2552F] text-white font-syne font-bold text-xs uppercase tracking-wider transition shadow-lg flex items-center gap-2"
              >
                <span>Explore Benefits</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigateTo('clubs')}
                className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-syne font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
              >
                <span>Explore Our Clubs</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </button>
            </div>

            {/* Bouncing Scroll Down Arrow */}
            <button
              type="button"
              onClick={scrollToAbout}
              className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#D26539] transition animate-bounce mt-4"
              aria-label="Scroll to Vision Section"
            >
              <ArrowDown className="w-5 h-5 text-[#D26539]" />
            </button>
          </div>
        </div>

        {/* Hero Banner Carousel Slider */}
        <div className="max-w-7xl mx-auto w-full pt-12">
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={VAULT_HERO_SLIDES[heroSlide].image}
                  alt={VAULT_HERO_SLIDES[heroSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-black/40 to-transparent" />

                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-left max-w-xl space-y-2">
                  <span className="text-[10px] font-mono text-[#D26539] uppercase tracking-[0.25em]">
                    VAULT FLAGSHIP SANCTUARY
                  </span>
                  <h3 className="font-syne text-xl sm:text-3xl font-extrabold text-white uppercase">
                    {VAULT_HERO_SLIDES[heroSlide].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans">
                    {VAULT_HERO_SLIDES[heroSlide].subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2">
              {VAULT_HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHeroSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    heroSlide === idx ? 'bg-[#D26539] w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ORANGE LOOP STRIP MARQUEE                                              */}
      {/* ========================================================================= */}
      <div className="w-full bg-[#D26539] text-[#090C10] py-3.5 select-none overflow-hidden border-y border-white/10">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap font-syne font-black text-sm uppercase tracking-[0.3em]">
          <span>STEP INTO THE VAULT ✦ STEP INTO THE VAULT ✦ STEP INTO THE VAULT ✦ STEP INTO THE VAULT ✦ STEP INTO THE VAULT ✦</span>
          <span>STEP INTO THE VAULT ✦ STEP INTO THE VAULT ✦ STEP INTO THE VAULT ✦ STEP INTO THE VAULT ✦ STEP INTO THE VAULT ✦</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. VISION & ABOUT TABS SECTION (#about)                                    */}
      {/* ========================================================================= */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          {/* Header with Interactive Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                THE VAULT VISION
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                {visionTab === 'what' ? 'What is Vault?' : 'WHY vault?'}
              </h2>
            </div>

            {/* Tab Buttons */}
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
                What is Vault?
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
                WHY vault?
              </button>
            </div>
          </div>

          {/* Vision Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              {visionTab === 'what' ? (
                <div className="space-y-6 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
                  <p>
                    India's first premium fitness chain <span className="text-white font-bold">VAULT by VIRAT KOHLI</span> presents you fitness like never before with world class equipments and machinery. Here we believe in providing a 360-degree solution to overall mental and physical fitness where one can unleash their inner potential.
                  </p>
                  <p>
                    Its warm and inviting aura with calm interiors and holistic approach outshines in the industry. Vault focuses on building a sense of community which allows its members to feel valued and encouraged towards their well-being.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => navigateTo('membership-benefit')}
                      className="px-6 py-3 rounded-full border border-[#D26539] text-[#D26539] hover:bg-[#D26539] hover:text-white transition text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
                  <p>
                    As a testament to <span className="text-white font-bold">Virat Kohli's</span> unwavering commitment to health and fitness, Vault Fitness Club aims to redefine the fitness landscape by offering more than just a gym experience. With state-of-the-art facilities, personalized training programs, and a strong emphasis on community engagement, Vault is set to become a lifestyle destination for fitness enthusiasts and health-conscious individuals.
                  </p>
                  <blockquote className="p-6 rounded-2xl bg-[#0D1118] border-l-4 border-[#D26539] text-slate-200 italic font-serif text-lg leading-relaxed">
                    "Vault Fitness Club is not just a gym; it's a lifestyle choice. I believe in the transformative power of fitness, and Vault is designed to be a space where individuals can not only achieve their fitness goals but also cultivate a balanced and fulfilling life."
                    <span className="block text-right text-sm font-sans font-bold text-[#D26539] not-italic mt-3">
                      - Virat Kohli
                    </span>
                  </blockquote>
                </div>
              )}
            </div>

            {/* Vision Image Cutout */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0D1118] p-4 group">
                <img
                  src="https://cdn.prod.website-files.com/65252096a098ee065881920e/65dfa017880ad5b1b0775de2_VK%20Sticker%202.webp"
                  alt="Virat Kohli Vault"
                  className="w-full h-[400px] object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C10] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR USPs SECTION (#section2)                                           */}
      {/* ========================================================================= */}
      <section id="section2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                EXCLUSIVE ADVANTAGES
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                our USP
              </h2>
            </div>

            <button
              type="button"
              onClick={() => navigateTo('membership-benefit')}
              className="px-6 py-2.5 rounded-full border border-white/20 hover:border-[#D26539] text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition flex items-center gap-2"
            >
              <span>Know more</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D26539]" />
            </button>
          </div>

          {/* USP Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VAULT_USPS.map((usp) => (
              <div
                key={usp.id}
                className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-6 luxury-card flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D26539] transition-colors">
                    {usp.icon}
                  </div>

                  <h3 className="font-syne text-xl font-bold text-white group-hover:text-[#D26539] transition uppercase">
                    {usp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {usp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {usp.links.map((link, lIdx) => (
                    <span
                      key={lIdx}
                      className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-[#C5A880]"
                    >
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TRAINING FACILITIES SECTION (#section3 / #facilities)                  */}
      {/* ========================================================================= */}
      <section id="section3" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                SPATIAL EXCELLENCE
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                Training facilities
              </h2>
            </div>

            <button
              type="button"
              onClick={() => navigateTo('training-facilities')}
              className="px-6 py-2.5 rounded-full border border-white/20 hover:border-[#D26539] text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition flex items-center gap-2"
            >
              <span>Know more</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D26539]" />
            </button>
          </div>

          {/* Facilities Interactive Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Nav and Details */}
            <div className="lg:col-span-6 space-y-6">
              {/* Tab Selector */}
              <div className="flex flex-wrap gap-2">
                {VAULT_FACILITIES.map((fac, idx) => (
                  <button
                    key={fac.id}
                    type="button"
                    onClick={() => setFacilityIndex(idx)}
                    className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                      facilityIndex === idx
                        ? 'bg-[#D26539] text-white font-bold shadow-lg'
                        : 'bg-[#0D1118] text-slate-400 border border-white/10 hover:text-white'
                    }`}
                  >
                    {fac.heading}
                  </button>
                ))}
              </div>

              {/* Facility Body Card */}
              <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-6">
                <h3 className="font-syne text-2xl font-bold text-white uppercase">
                  {VAULT_FACILITIES[facilityIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  {VAULT_FACILITIES[facilityIndex].para}
                </p>

                <div className="pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => navigateTo('training-facilities')}
                    className="text-xs font-mono text-[#D26539] uppercase tracking-wider flex items-center gap-2 hover:underline"
                  >
                    <span>and many more</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image Preview */}
            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={facilityIndex}
                    src={VAULT_FACILITIES[facilityIndex].image}
                    alt={VAULT_FACILITIES[facilityIndex].title}
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
      {/* 6. EXPLORE OUR CLUBS SECTION (#clubs)                                     */}
      {/* ========================================================================= */}
      <section id="clubs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                LOCATIONS ACROSS INDIA
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                explore our clubs
              </h2>
            </div>

            <button
              type="button"
              onClick={() => navigateTo('clubs')}
              className="px-6 py-2.5 rounded-full border border-white/20 hover:border-[#D26539] text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition flex items-center gap-2"
            >
              <span>Show all</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D26539]" />
            </button>
          </div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VAULT_CLUBS.map((club, idx) => (
              <div
                key={idx}
                className="bg-[#0D1118] border border-white/10 rounded-3xl overflow-hidden luxury-card flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1118] via-transparent to-transparent opacity-80" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-syne text-2xl font-bold text-white uppercase group-hover:text-[#D26539] transition">
                      {club.name}
                    </h3>

                    <div className="space-y-2 font-mono text-xs text-slate-300">
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
                    className="w-full py-3 rounded-full bg-white/5 hover:bg-[#D26539] text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CORPORATE PARTNERSHIPS MARQUEE (#section5)                             */}
      {/* ========================================================================= */}
      <section id="section5" className="py-16 border-b border-white/5 bg-[#05070A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <div className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
            corporate Partnership
          </div>
          <h2 className="font-syne text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight mt-2">
            Corporate partnerships
          </h2>
        </div>

        <div className="w-full py-4 select-none overflow-hidden">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap font-syne font-bold text-lg uppercase tracking-[0.25em] text-slate-400">
            <span>TRAINING WALL ✦ TORQUE USA ✦ THOR FITNESS ✦ MATRIX FITNESS ✦ PRECOR USA ✦ HYPERICE RECOVERY ✦ ONE8 COMMUNE ✦</span>
            <span>TRAINING WALL ✦ TORQUE USA ✦ THOR FITNESS ✦ MATRIX FITNESS ✦ PRECOR USA ✦ HYPERICE RECOVERY ✦ ONE8 COMMUNE ✦</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. OPEN YOUR OWN VAULT (FRANCHISE SECTION) (#franchise-sub)               */}
      {/* ========================================================================= */}
      <section id="franchise-sub" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-white/5">
        <div className="bg-gradient-to-br from-[#0D1118] via-[#141820] to-[#090C10] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-syne text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                OPEN YOUR<br />
                <span className="text-[#D26539]">OWN VAULT</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Fuel the fitness revolution by opening your own Vault Fitness Club and bring the ultimate wellness destination to your community. Join our franchise family and empower others to unlock their potential, one workout at a time. Elevate your entrepreneurial journey with Vault – where health meets business success!
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => navigateTo('franchise')}
                  className="px-8 py-3.5 rounded-full bg-[#D26539] hover:bg-[#C2552F] text-white font-syne font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className="px-8 py-3.5 rounded-full border border-white/20 hover:border-[#D26539] text-white font-syne font-bold text-xs uppercase tracking-wider transition"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://cdn.prod.website-files.com/65252096a098ee065881920e/65de06b264c16a6ded6c197d_WhatsApp%20Image%202024-02-26%20at%2021.47.51.webp"
                  alt="Open Your Own Vault"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CONTACT US INTAKE SECTION (#contact-form)                              */}
      {/* ========================================================================= */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-[11px] font-mono tracking-[0.3em] text-[#D26539] uppercase">
                CONNECT WITH VAULT
              </span>
              <h2 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
                COntact Us
              </h2>
            </div>

            {/* Subject Selector Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { id: 'member', label: 'Membership Enquiry' },
                { id: 'franchise', label: 'Franchise Enquiry' },
                { id: 'job', label: 'Job Enquiry' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setInquiryType(t.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                    inquiryType === t.id
                      ? 'bg-[#D26539] text-white font-bold shadow-md'
                      : 'bg-white/5 text-slate-300 border border-white/10 hover:border-white/30'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Intake Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Contact</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98123 45678"
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@mail.com"
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">City</label>
                  <select
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      setLocation(CITY_LOCATIONS[e.target.value]?.[0] || '');
                    }}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D26539]"
                  >
                    <option value="delhi">Delhi NCR</option>
                    <option value="uttar">Uttar Pradesh</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="punjab">Punjab</option>
                    <option value="assam">Assam</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D26539]"
                  >
                    {(CITY_LOCATIONS[city] || []).map((loc, idx) => (
                      <option key={idx} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here"
                  className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#D26539] hover:bg-[#C2552F] text-white font-syne font-bold text-sm uppercase tracking-wider transition shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
