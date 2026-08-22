import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2 } from 'lucide-react';

export const VaultContactFormSection: React.FC = () => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Commercial Equipment Procurement');
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
    <section id="contact-form" className="relative bg-[#26452D] overflow-hidden border-t border-white/10">
      {/* ========================================================================= */}
      {/* 50/50 SPLIT SCREEN LAYOUT (EXPANDED TO FULL AVAILABLE SPACE)              */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* LEFT COLUMN: FULL-BLEED ATHLETIC & SANCTUARY IMAGERY */}
        <div className="lg:col-span-6 relative min-h-[440px] lg:min-h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
            alt="Tanush Fitness Sanctuary Strength Athlete"
            className="w-full h-full object-cover"
          />
          {/* Subtle Dark Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Bottom Left Badge */}
          <div className="absolute bottom-8 left-8 right-8 text-white space-y-1">
            <div className="font-mono text-[11px] text-[#D26539] uppercase tracking-widest font-semibold">
              ✦ BESPOKE COMMERCIAL FACILITY OUTFITTING
            </div>
            <h3 className="font-satoshi text-xl sm:text-2xl font-bold uppercase tracking-tight">
              ELEVATE YOUR ATHLETIC DESTINATION
            </h3>
          </div>
        </div>

        {/* RIGHT COLUMN: WARM IVORY/LINEN FORM CANVAS */}
        <div className="lg:col-span-6 bg-[#ECE6DB] text-[#090C10] relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
          {/* Faint Star Watermark on Top Right */}
          <div className="absolute -right-16 -top-16 pointer-events-none select-none opacity-10">
            <svg
              className="w-96 h-96 text-[#090C10] fill-none stroke-current"
              viewBox="0 0 100 100"
              strokeWidth="2"
            >
              <path d="M 50 5 L 56 38 L 88 20 L 64 46 L 95 50 L 64 54 L 88 80 L 56 62 L 50 95 L 44 62 L 12 80 L 36 54 L 5 50 L 36 46 L 12 20 L 44 38 Z" fill="rgba(9,12,16,0.08)" stroke="currentColor" />
            </svg>
          </div>

          <div className="relative z-10 max-w-xl w-full mx-auto space-y-8">
            {isSubmitted ? (
              <div className="bg-white/80 border border-[#D26539]/30 p-8 text-center space-y-4 rounded-lg shadow-xl">
                <div className="w-12 h-12 rounded-full bg-[#26452D] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#D26539]" />
                </div>
                <h3 className="font-satoshi text-2xl font-bold uppercase text-[#090C10]">
                  Proposal Request Received
                </h3>
                <p className="font-manrope text-sm text-[#090C10]/80 leading-relaxed">
                  Thank you, <strong className="text-[#D26539]">{name}</strong>. Our Commercial Outfitting Directorate will review your facility requirements and get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="btn-vault text-xs mt-2 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* 1. TOP ROW: NAME, CONTACT, EMAIL (UNDERLINED MINIMALIST INPUTS) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#090C10]/80 tracking-widest uppercase">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-[#090C10] pb-2 text-xs font-mono text-[#090C10] placeholder-[#090C10]/40 focus:border-[#D26539] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Contact */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#090C10]/80 tracking-widest uppercase">
                      CONTACT *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="+91 91123 34451"
                      className="w-full bg-transparent border-b border-[#090C10] pb-2 text-xs font-mono text-[#090C10] placeholder-[#090C10]/40 focus:border-[#D26539] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#090C10]/80 tracking-widest uppercase">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="johndoe@mail.com"
                      className="w-full bg-transparent border-b border-[#090C10] pb-2 text-xs font-mono text-[#090C10] placeholder-[#090C10]/40 focus:border-[#D26539] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* 2. SUBJECT / REQUIREMENT SELECT DROPDOWN */}
                <div className="space-y-1.5">
                  <div className="relative">
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full appearance-none bg-[#D8CDC0] border border-[#090C10]/30 px-4 py-3.5 text-xs font-mono text-[#090C10] focus:border-[#D26539] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Commercial Equipment Procurement">Commercial Equipment Procurement</option>
                      <option value="Residential Fitness Suite Outfitting">Residential Fitness Suite Outfitting</option>
                      <option value="Turnkey Gym Management & 3D CAD">Turnkey Gym Management & 3D CAD</option>
                      <option value="Manpower & Trainer Staffing">Manpower & Trainer Staffing</option>
                      <option value="Recovery Room — Hyperice Biohacking">Recovery Room — Hyperice Biohacking</option>
                      <option value="Franchise & Institutional Partnership">Franchise & Institutional Partnership</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#090C10]">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                  </div>
                </div>

                {/* 3. CITY / REGION SELECT DROPDOWN */}
                <div className="space-y-1.5">
                  <div className="relative">
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full appearance-none bg-[#D8CDC0] border border-[#090C10]/30 px-4 py-3.5 text-xs font-mono text-[#090C10] focus:border-[#D26539] focus:outline-none transition-colors cursor-pointer"
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
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#090C10]">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                    </div>
                  </div>
                </div>

                {/* 4. MESSAGE TEXTAREA (UNDERLINED) */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-[10px] sm:text-[11px] font-bold text-[#090C10]/80 tracking-widest uppercase">
                    MESSAGE
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                    className="w-full bg-transparent border-b border-[#090C10] pb-2 text-xs font-mono text-[#090C10] placeholder-[#090C10]/40 focus:border-[#D26539] focus:outline-none resize-none transition-colors"
                  />
                </div>

                {/* 5. SUBMIT BUTTON (RIGHT-ALIGNED OUTLINED VAULT STYLE) */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="border border-[#D26539] text-[#D26539] hover:bg-[#D26539] hover:text-white px-10 py-3.5 font-mono text-xs uppercase tracking-[0.25em] font-bold transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    SUBMIT
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
