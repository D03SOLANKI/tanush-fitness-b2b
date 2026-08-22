import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import { Sparkles, Phone, Mail, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

const CITY_LOCATIONS: Record<string, string[]> = {
  delhi: ['Gujranwala Town', 'Pitampura', 'Pusa Road', 'Shalimar Bagh', 'Rohini', 'New Friends Colony', 'GK 1', 'Rajouri Garden', 'Paschim Vihar', 'Bunglow Road', 'Gurugram Sector 47', 'Noida Sector 104', 'Prashant Vihar', 'Janakpuri', 'Patel Nagar', 'Dwarka Sector 7', 'Dwarka Sector 11', 'Rohini Sector 24'],
  uttar: ['Lakeside', 'Gomti Nagar', 'Gorakhpur Taramandal'],
  bengaluru: ['Indiranagar', 'Hennur Gardens', 'Hoodi'],
  hyderabad: ['Jubilee Hills', 'Hitec City'],
  punjab: ['Chandigarh Sector 8', 'Ludhiana'],
  assam: ['Guwahati GS Road'],
};

export const VaultContactPage: React.FC = () => {
  const { showToast } = useApp();

  const [subject, setSubject] = useState<'Membership Enquiry' | 'Franchise Enquiry' | 'Job Enquiry'>('Membership Enquiry');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('delhi');
  const [location, setLocation] = useState('Gujranwala Town');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <main className="bg-[#090C10] text-[#E2E8F0] luxury-noise min-h-screen pt-28 pb-24">
      <SEO
        title="Contact Us | VAULT BY VIRAT KOHLI"
        description="Get in touch with Vault by Virat Kohli. Connect for membership enquiries, franchise partnerships, job applications, or general support."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D26539]/40 text-xs font-mono text-[#D26539] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
            CONTACT <span className="text-[#D26539]">US</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans leading-relaxed">
            Reach out to our membership directors, franchise expansion specialists, or careers team.
          </p>
        </div>
      </section>

      {/* Contact Cards & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D26539]">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-syne text-xl font-bold text-white uppercase">Email Support</h3>
              <p className="text-xs text-slate-400 font-sans">
                For general questions, memberships, or inquiries:
              </p>
              <a
                href="mailto:support@vaultbyviratkohli.com"
                className="text-sm font-mono text-[#D26539] hover:underline block font-semibold"
              >
                support@vaultbyviratkohli.com
              </a>
            </div>

            <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D26539]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-syne text-xl font-bold text-white uppercase">Headquarters Helpline</h3>
              <p className="text-xs text-slate-400 font-sans">
                Truepalate Fitness Pvt. Ltd. Central Desk:
              </p>
              <a
                href="tel:+919599002518"
                className="text-sm font-mono text-[#D26539] hover:underline block font-semibold"
              >
                +91 9599-0025-18
              </a>
            </div>

            <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D26539]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-syne text-xl font-bold text-white uppercase">Delhi Flagship</h3>
              <p className="text-xs text-slate-300 font-mono">
                Pacific Sports Complex, National Park, Lajpat Nagar, Delhi - 110048
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-[#0D1118] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
            <h2 className="font-syne text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
              Send an Enquiry
            </h2>

            {/* Subject Selector */}
            <div className="flex flex-wrap gap-2">
              {['Membership Enquiry', 'Franchise Enquiry', 'Job Enquiry'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSubject(s as any)}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition ${
                    subject === s
                      ? 'bg-[#D26539] text-white font-bold'
                      : 'bg-[#090C10] text-slate-400 border border-white/10 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Name *</label>
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
                  <label className="text-xs font-mono text-slate-400">Contact *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98123 45678"
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="johndoe@mail.com"
                    className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                  />
                </div>

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
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Preferred Location</label>
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

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full bg-[#090C10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D26539]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#D26539] hover:bg-[#C2552F] text-white font-syne font-bold text-sm uppercase tracking-wider transition shadow-xl"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
