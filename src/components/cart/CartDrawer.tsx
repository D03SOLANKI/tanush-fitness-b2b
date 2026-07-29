import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Trash2, Plus, Minus, ArrowRight, Truck, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useApp();

  const estimatedFreight = cartTotal > 0 ? Math.round(cartTotal * 0.05) : 0;
  const estimatedTax = cartTotal > 0 ? Math.round(cartTotal * 0.08) : 0;
  const grandTotal = cartTotal + estimatedFreight + estimatedTax;

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="w-screen max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between text-slate-900"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-black uppercase text-slate-900 tracking-tight font-heading">
                  B2B Commercial Cart
                </h3>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 font-mono">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)} Items
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-slate-900 flex items-center justify-center transition-all shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List or Empty State */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 mb-2">
                    <ShoppingBag className="w-10 h-10 text-slate-400" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 uppercase font-heading">Your Cart is Empty</h4>
                  <p className="text-xs text-slate-500 max-w-xs leading-relaxed font-normal">
                    Explore our commercial catalog to source strength rigs, cardio consoles, and bulk supplements.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-black text-xs uppercase tracking-wider font-mono shadow-md"
                  >
                    Browse Equipment →
                  </button>
                </div>
              ) : (
                cart.map(({ product, quantity }) => {
                  const isBulk = product.bulkPrice && quantity >= (product.bulkThreshold || 3);
                  const itemUnitPrice = isBulk ? product.bulkPrice! : product.price;

                  return (
                    <div
                      key={product.id}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3.5 group hover:border-blue-500/60 transition-all"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded-xl border border-slate-200 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-blue-600 uppercase font-mono tracking-wider">
                          {product.brand}
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 truncate">
                          {product.name}
                        </h4>
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="text-sm font-black text-slate-900">
                            ${(itemUnitPrice * quantity).toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            (${itemUnitPrice.toLocaleString()}/ea)
                          </span>
                        </div>
                        {isBulk && (
                          <div className="text-[10px] font-extrabold text-emerald-600">
                            ✓ Wholesale Bulk Rate Applied
                          </div>
                        )}

                        {/* Quantity Controls */}
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-sm">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="w-6 h-6 rounded text-slate-500 hover:text-slate-900"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-slate-900">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="w-6 h-6 rounded text-slate-500 hover:text-slate-900"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Calculation & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>Subtotal:</span>
                    <span className="font-bold text-slate-900">${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>Est. Liftgate Freight (5%):</span>
                    <span className="font-bold text-slate-700">${estimatedFreight.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 font-medium">
                    <span>B2B Commercial Tax (8%):</span>
                    <span className="font-bold text-slate-700">${estimatedTax.toLocaleString()}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-black text-slate-900 uppercase font-mono">
                    <span>Estimated Total:</span>
                    <span className="text-blue-600">${grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2 text-[11px] text-slate-600 font-medium shadow-sm">
                  <Truck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Freight includes tailgate delivery & on-site assembly options</span>
                </div>

                <button
                  onClick={() => {
                    alert('Simulated B2B Purchase Order Submitted! A dedicated Tanush Commercial Account Manager will contact your facility within 1 hour.');
                    clearCart();
                    setIsCartOpen(false);
                  }}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm uppercase tracking-wider font-mono flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(59,130,246,0.3)] transition-all"
                >
                  <span>Submit Purchase Order Request</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
