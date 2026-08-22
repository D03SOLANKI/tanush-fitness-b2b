import React from 'react';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/common/SEO';
import { Sparkles, ArrowRight, Calendar, User, Clock } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Virat Kohli's Philosophy on Consistency & Mental Fortitude",
    category: "MINDSET & DISCIPLINE",
    date: "June 2024",
    readTime: "4 min read",
    snippet: "Discover how mental clarity, routine conditioning, and daily discipline form the foundation of high-performance athletic achievement.",
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/65578133380f50fff1685831_Cj%20Puma%20VK%20SS%2022_0425.webp',
  },
  {
    id: 2,
    title: "Why Multi-Planar Training on the Training Wall® Outperforms Traditional Machines",
    category: "EQUIPMENT SCIENCE",
    date: "May 2024",
    readTime: "6 min read",
    snippet: "Exploring how core activation, coordination, and stabilizing muscles respond to dynamic vertical and lateral functional load.",
    image: 'https://cdn.prod.website-files.com/65252096a098ee065881920e/6a0ea54747684cfb0f853e01_Trainiing%20Wall.png',
  },
  {
    id: 3,
    title: "The Biohacking Recovery Protocol: Normatec Compression & Contrast Therapy",
    category: "RECOVERY & LONGEVITY",
    date: "April 2024",
    readTime: "5 min read",
    snippet: "How pneumatic compression boots and localized vibration therapy significantly reduce DOMS and optimize recovery cycles.",
    image: 'https://cdn.prod.website-files.com/65252096a098ee0658819293/683ebb9ad6e501f347f3c249_WhatsApp%20Image%202025-06-03%20at%2014.19.39.jpeg',
  },
];

export const VaultBlogsPage: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <main className="bg-[#090C10] text-[#E2E8F0] luxury-noise min-h-screen pt-28 pb-24">
      <SEO
        title="Blogs & Insights | VAULT BY VIRAT KOHLI"
        description="Read the latest articles on fitness philosophies, training science, nutrition, and recovery from Vault by Virat Kohli."
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D26539]/40 text-xs font-mono text-[#D26539] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOURNAL & INSIGHTS</span>
          </div>

          <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-white tracking-tight">
            VAULT <span className="text-[#D26539]">BLOGS</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-sans leading-relaxed">
            Explore training paradigms, athlete nutrition, biohacking recoveries, and lifestyle advice inspired by Virat Kohli.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-[#0D1118] border border-white/10 rounded-3xl overflow-hidden luxury-card flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1118] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#090C10]/90 border border-white/10 text-[10px] font-mono text-[#D26539] uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#D26539]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D26539]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-syne text-xl font-bold text-white uppercase group-hover:text-[#D26539] transition leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {post.snippet}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className="w-full py-3 rounded-full bg-white/5 hover:bg-[#D26539] text-white text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
