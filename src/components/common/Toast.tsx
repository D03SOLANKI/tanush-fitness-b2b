import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShoppingBag, Bookmark, Info, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Toast: React.FC = () => {
  const { toast } = useApp();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 max-w-md bg-[#141414]/95 border border-[#D4AF37]/40 backdrop-blur-xl p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.15)] flex items-start gap-3.5"
        >
          <div className="p-2 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] shrink-0 mt-0.5">
            {toast.type === 'cart' && <ShoppingBag className="w-5 h-5" />}
            {toast.type === 'wishlist' && <Bookmark className="w-5 h-5" />}
            {toast.type === 'info' && <CheckCircle2 className="w-5 h-5" />}
          </div>
          <div className="pr-2">
            <h4 className="text-sm font-semibold text-white tracking-tight">
              {toast.title}
            </h4>
            {toast.subtitle && (
              <p className="text-xs text-zinc-400 mt-0.5 line-clamp-2 leading-relaxed">
                {toast.subtitle}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
