import React from 'react';
import { SEO } from '../components/common/SEO';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const VaultTncPage: React.FC = () => {
  return (
    <main className="bg-[#090C10] text-[#E2E8F0] luxury-noise min-h-screen pt-28 pb-24">
      <SEO
        title="Terms & Conditions | VAULT BY VIRAT KOHLI"
        description="Terms & Conditions for Vault by Virat Kohli (Truepalate Fitness Pvt. Ltd.). Membership rules, safety standards, and club policies."
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-3 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D26539]/40 text-xs font-mono text-[#D26539] tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LEGAL & POLICIES</span>
          </div>

          <h1 className="font-syne text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-tight">
            Terms & Conditions
          </h1>

          <p className="text-sm font-mono text-slate-400">
            Truepalate Fitness Private Limited • Last Updated: 2024
          </p>
        </div>

        <div className="space-y-8 pt-8 text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
          <div className="space-y-3">
            <h2 className="font-syne text-xl font-bold text-white uppercase">1. Acceptance of Terms</h2>
            <p>
              By accessing any Vault by Virat Kohli facility, website, or mobile application, you agree to comply with and be bound by these Terms and Conditions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-syne text-xl font-bold text-white uppercase">2. Membership & Facility Conduct</h2>
            <p>
              Members are required to adhere to gym etiquette, proper athletic attire, and equipment sanitization practices. Vault reserves the right to suspend or terminate memberships for any violation of code of conduct.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-syne text-xl font-bold text-white uppercase">3. Health & Medical Disclaimer</h2>
            <p>
              Physical exercise involves inherent risks. Members must ensure they are in suitable health condition and consult with a medical professional before starting any intensive strength or high-intensity interval training.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-syne text-xl font-bold text-white uppercase">4. Privacy & Data Handling</h2>
            <p>
              Your personal data and health assessment data are handled with strict privacy protocols in accordance with applicable data protection regulations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-syne text-xl font-bold text-white uppercase">5. Contact Information</h2>
            <p>
              For inquiries regarding these terms, please contact: <a href="mailto:support@vaultbyviratkohli.com" className="text-[#D26539] hover:underline font-mono">support@vaultbyviratkohli.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
