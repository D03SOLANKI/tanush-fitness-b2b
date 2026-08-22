import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { TESTIMONIALS } from '../../data/testimonials';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F0EBE3]/10 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="CLIENT SUCCESS STORIES"
          title="What Gym Executives Say"
          description="Read how franchise owners and facility directors leverage Tanush Fitness to cut procurement costs and streamline operations."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-none bg-[#1A2018] border border-white/10 hover:border-[#D26539]/50 transition-all flex flex-col justify-between space-y-6 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D26539] font-bold">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D26539]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#D26539]/10 text-[#D26539] border border-[#D26539]/20 uppercase font-mono">
                    {item.stats}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#D26539]/20" />

                <p className="text-xs sm:text-sm text-[#7A7268] leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border border-[#D26539]/20 shrink-0 shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black text-[#090C10] font-satoshi">{item.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D26539]" />
                  </div>
                  <div className="text-xs text-[#6B6358] font-semibold">{item.title}</div>
                  <div className="text-[11px] text-[#D26539] font-bold font-mono uppercase">{item.gymName} · {item.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
