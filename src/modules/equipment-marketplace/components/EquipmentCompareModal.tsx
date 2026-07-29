import React from 'react';
import { Product } from '../types';
import { useApp } from '../../../context/AppContext';
import { X, CheckCircle2, FileText, Send, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EquipmentCompareModalProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveItem: (id: string) => void;
}

export const EquipmentCompareModal: React.FC<EquipmentCompareModalProps> = ({
  products,
  isOpen,
  onClose,
  onRemoveItem,
}) => {
  const { addToEnquiryCart, setIsEnquiryCartOpen } = useApp();

  if (!isOpen || products.length === 0) return null;

  // Extract all unique spec keys across selected products
  const allSpecKeys = Array.from(
    new Set(products.flatMap(p => Object.keys(p.specs || {})))
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-3xl max-w-5xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl border border-slate-200 relative my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6">
            <span className="text-[10px] font-bold uppercase text-blue-600 font-mono flex items-center gap-1">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>EQUIPMENT SPECIFICATION COMPARISON</span>
            </span>
            <h2 className="text-2xl font-black text-slate-900 font-heading uppercase mt-0.5">
              Side-by-Side Equipment Analysis
            </h2>
            <p className="text-xs text-slate-500 font-mono">Comparing {products.length} Commercial Models</p>
          </div>

          {/* Comparison Matrix Table */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 text-xs font-mono font-bold uppercase text-slate-500 w-1/4">
                    Attribute
                  </th>
                  {products.map(p => (
                    <th key={p.id} className="p-4 text-xs font-mono font-bold text-slate-900 relative">
                      <button
                        onClick={() => onRemoveItem(p.id)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-rose-500"
                        title="Remove from comparison"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <div className="aspect-square w-20 h-20 rounded-xl overflow-hidden mb-2 border border-slate-200 bg-white mx-auto">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-xs font-black text-slate-900 font-heading uppercase text-center line-clamp-2">
                        {p.name}
                      </div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase text-center font-mono mt-0.5">
                        {p.brand}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs font-mono">
                {/* Category */}
                <tr>
                  <td className="p-4 font-bold text-slate-600 bg-slate-50">Category</td>
                  {products.map(p => (
                    <td key={p.id} className="p-4 text-center font-semibold text-slate-800">
                      {p.category}
                    </td>
                  ))}
                </tr>

                {/* Applications */}
                <tr>
                  <td className="p-4 font-bold text-slate-600 bg-slate-50">Target Application</td>
                  {products.map(p => (
                    <td key={p.id} className="p-4 text-center">
                      <div className="flex flex-wrap justify-center gap-1">
                        {(p.applicationTypes || ['Commercial Gym']).map((app, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-100">
                            {app}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Minimum Order Quantity */}
                <tr>
                  <td className="p-4 font-bold text-slate-600 bg-slate-50">Minimum Order Qty</td>
                  {products.map(p => (
                    <td key={p.id} className="p-4 text-center font-bold text-slate-900">
                      {p.minOrderQty || 1} Unit
                    </td>
                  ))}
                </tr>

                {/* Rating */}
                <tr>
                  <td className="p-4 font-bold text-slate-600 bg-slate-50">B2B Rating</td>
                  {products.map(p => (
                    <td key={p.id} className="p-4 text-center font-bold text-amber-600">
                      ★ {p.rating} / 5.0 ({p.reviewCount} Reviews)
                    </td>
                  ))}
                </tr>

                {/* Dynamic Specs Rows */}
                {allSpecKeys.map(specKey => (
                  <tr key={specKey}>
                    <td className="p-4 font-bold text-slate-600 bg-slate-50 uppercase text-[11px]">
                      {specKey}
                    </td>
                    {products.map(p => (
                      <td key={p.id} className="p-4 text-center text-slate-700 font-medium">
                        {p.specs?.[specKey] || '—'}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Actions Row */}
                <tr className="bg-slate-50">
                  <td className="p-4 font-bold text-slate-600">Action</td>
                  {products.map(p => (
                    <td key={p.id} className="p-4 text-center">
                      <button
                        onClick={() => {
                          addToEnquiryCart(p, 1);
                          setIsEnquiryCartOpen(true);
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1 shadow-md"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Enquire</span>
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
