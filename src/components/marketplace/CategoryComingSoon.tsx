import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Clock, Send, CheckCircle2 } from 'lucide-react';
import { CategoryTile } from '../../types';

interface ComingSoonProps {
  category: CategoryTile;
}

export const CategoryComingSoon: React.FC<ComingSoonProps> = ({ category }) => {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');
  const [requestedQty, setRequestedQty] = useState('1-5 Units');
  const [submitted, setSubmitted] = useState(false);

  const handleRfq = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Custom Wholesale RFQ Received', `Our procurement team will source custom quotes for ${category.name}.`, 'info');
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto shadow-stripe text-slate-900">
      <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-blue-600 mx-auto flex items-center justify-center">
        <Clock className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-mono">
          Wholesale Pre-Order & Custom Contracting
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading uppercase">
          {category.name} Catalog Opening Q3
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
          {category.description} Live stock inventory for this category is currently being onboarded. Submit a custom Request for Quote (RFQ) below to receive direct manufacturer pricing.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 space-y-2">
          <CheckCircle2 className="w-8 h-8 mx-auto" />
          <div className="text-sm font-bold uppercase font-mono">Custom Procurement Request Received</div>
          <p className="text-xs text-emerald-600">
            A Tanush Commercial Sourcing Agent will deliver wholesale proposals to your email within 4 business hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleRfq} className="max-w-md mx-auto space-y-3 pt-2">
          <div className="flex gap-2">
            <input
              type="email"
              required
              placeholder="Enter work email for RFQ quote..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
            />
            <select
              value={requestedQty}
              onChange={(e) => setRequestedQty(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
            >
              <option>1-5 Units</option>
              <option>6-20 Units</option>
              <option>Full Gym Outfit</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider font-mono flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Send className="w-3.5 h-3.5 stroke-[3]" />
            <span>Request Custom Wholesale Quote</span>
          </button>
        </form>
      )}
    </div>
  );
};
