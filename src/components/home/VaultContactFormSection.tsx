import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const VaultContactFormSection: React.FC = () => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Commercial & Residential Equipment Procurement');
  const [city, setCity] = useState('Delhi NCR');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) {
      showToast('Please enter your name and contact phone number', 'error');
      return;
    }
    setIsSubmitted(true);
    showToast('Consultation request submitted! Our Outfitting Director will contact you within 24 hours.', 'success');
  };

  return (
    <section id="contact-form" className="relative bg-[#0F1926] overflow-hidden border-t border-[#2A2A2B]">
      {/* 50/50 SPLIT SCREEN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* LEFT COLUMN: FULL-BLEED ATHLETIC & SANCTUARY IMAGERY */}
        <div className="lg:col-span-6 relative min-h-[440px] lg:min-h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
            alt="Tanush Fitness Sanctuary Strength Athlete"
            className="w-full h-full object-cover"
          />
          {/* Subtle Dark Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1015]/90 via-transparent to-[#0C1015]/40" />

          {/* Bottom Left Badge */}
          <div className="absolute bottom-8 left-8 right-8 text-[#E8E8E8] space-y-1 z-10">
            <h3 className="font-satoshi text-lg sm:text-xl font-bold uppercase tracking-[0.03em] text-[#E8E8E8] leading-snug">
              ELEVATE YOUR ATHLETIC DESTINATION
            </h3>
          </div>
        </div>

        {/* RIGHT COLUMN: WARM OFF-WHITE FORM CANVAS */}
        <div className="lg:col-span-6 bg-[#E8E8E8] text-[#0F1926] relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
          {/* Faint Tanush Emblem Watermark on Top Right (No Text) */}
          <div className="absolute -right-16 -top-16 pointer-events-none select-none opacity-[0.07] w-96 h-96">
            <img
              src="/tanush-symbol.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10 max-w-xl w-full mx-auto space-y-8">
            {isSubmitted ? (
              <div className="bg-white border border-[#0F1926]/15 p-8 text-center space-y-4 rounded-2xl shadow-xl">
                <div className="w-12 h-12 rounded-full bg-[#0F1926] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#E8E8E8]" />
                </div>
                <h3 className="font-satoshi text-2xl font-bold uppercase text-[#0F1926]">
                  Proposal Request Received
                </h3>
                <p className="font-sans text-sm text-[#2A2A2B] leading-relaxed">
                  Thank you, <strong className="text-[#0F1926] font-bold">{name}</strong>. Our Commercial Outfitting Directorate will review your facility requirements and get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="btn-dark text-xs mt-2 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* 1. TOP ROW: NAME, CONTACT, EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#0F1926]/80 tracking-widest uppercase">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-[#0F1926] pb-2 text-xs font-mono text-[#0F1926] placeholder-[#0F1926]/40 focus:border-[#2A2A2B] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Contact */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#0F1926]/80 tracking-widest uppercase">
                      CONTACT *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="+91 91123 34451"
                      className="w-full bg-transparent border-b border-[#0F1926] pb-2 text-xs font-mono text-[#0F1926] placeholder-[#0F1926]/40 focus:border-[#2A2A2B] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#0F1926]/80 tracking-widest uppercase">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="johndoe@mail.com"
                      className="w-full bg-transparent border-b border-[#0F1926] pb-2 text-xs font-mono text-[#0F1926] placeholder-[#0F1926]/40 focus:border-[#2A2A2B] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2. SUBJECT / REQUIREMENT SELECT DROPDOWN */}
                <div className="space-y-1.5 pt-1">
                  <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#0F1926]/80 tracking-widest uppercase">
                    SUBJECT / REQUIREMENT
                  </label>
                  <div className="relative">
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full appearance-none bg-transparent border-b border-[#0F1926] pb-2.5 pt-1 text-xs font-mono text-[#0F1926] focus:border-[#2A2A2B] focus:outline-none transition-colors cursor-pointer pr-8 font-semibold"
                    >
                      <option value="Commercial & Residential Equipment Procurement">Commercial & Residential Equipment Procurement</option>
                      <option value="Residential Fitness Suite Outfitting">Residential Fitness Suite Outfitting</option>
                      <option value="Gym Management & 3D CAD Blueprinting">Gym Management & 3D CAD Blueprinting</option>
                      <option value="Master Trainer Staffing & Recruitment">Master Trainer Staffing & Recruitment</option>
                      <option value="Hyperice Biohacking & Recovery Suite">Hyperice Biohacking & Recovery Suite</option>
                      <option value="Franchise & Institutional Outfitting">Franchise & Institutional Outfitting</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-[#0F1926]">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                  </div>
                </div>

                {/* 3. DESTINATION CITY SELECT DROPDOWN */}
                <div className="space-y-1.5 pt-1">
                  <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#0F1926]/80 tracking-widest uppercase">
                    DESTINATION CITY
                  </label>
                  <div className="relative">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full appearance-none bg-transparent border-b border-[#0F1926] pb-2.5 pt-1 text-xs font-mono text-[#0F1926] focus:border-[#2A2A2B] focus:outline-none transition-colors cursor-pointer pr-8 font-semibold"
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Mumbai & MMR">Mumbai & MMR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Kolkata & East">Kolkata & East</option>
                      <option value="Chennai & South">Chennai & South</option>
                      <option value="Other Pan-India Location">Other Pan-India Location</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 text-[#0F1926]">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                  </div>
                </div>

                {/* 4. MESSAGE TEXTAREA */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#0F1926]/80 tracking-widest uppercase">
                    MESSAGE
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                    className="w-full bg-transparent border-b border-[#0F1926] pb-2 text-xs font-mono text-[#0F1926] placeholder-[#0F1926]/40 focus:border-[#2A2A2B] focus:outline-none resize-none transition-colors"
                  />
                </div>

                {/* 5. SUBMIT BUTTON */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="btn-dark px-10 py-3.5 text-xs font-bold uppercase tracking-[0.2em] shadow-lg cursor-pointer"
                  >
                    SUBMIT INQUIRY
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
