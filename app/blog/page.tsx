"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import { Sparkles, ArrowRight, Mail, Zap } from "lucide-react";

const categories = ["All", "Engineering", "Design", "Culture", "AI"];

const posts = [
  {
    id: 1,
    category: "Engineering",
    title: "Optimizing Performance in Next.js 15",
    excerpt: "How we reduced our bundle size by 40% using advanced hydration techniques and server components.",
    date: "Oct 12, 2025",
    author: "Alex Rivera",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: 2,
    category: "Design",
    title: "The Future of Neumorphism in 2026",
    excerpt: "Exploring the shift from flat design to tactile, depth-focused digital interfaces.",
    date: "Sep 28, 2025",
    author: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "AI",
    title: "Generative Agents in Modern Apps",
    excerpt: "Integrating LLMs into user workflows without compromising on UI simplicity.",
    date: "Aug 10, 2025",
    author: "James Wu",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    category: "Culture",
    title: "Scaling a Remote-First Creative Team",
    excerpt: "Lessons learned from growing Timepass Pvt. Ltd. across three different continents.",
    date: "Sep 15, 2025",
    author: "Marcus Thorne",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  const featuredPost = posts.find(p => p.featured);

  return (
    <main className="bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      {/* py-20 md:py-32 ensures a compact but focused header */}
      <HeroBackground variant="compact" className="flex items-center justify-center py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200/60">Insights & Artifacts</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase italic text-white">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">Blog.</span>
          </h1>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2.5 rounded-full border text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat 
                  ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.3)]" 
                  : "border-white/10 bg-white/5 hover:border-blue-500/40 text-slate-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </HeroBackground>

      {/* --- BLOG FEED CONTAINER --- */}
      {/* pt-24 md:pt-40 adds the spacious luxury gap you requested */}
      <section className="max-w-7xl mx-auto px-6 pt-24 md:pt-40 pb-32 relative z-10">
        
        {/* 1. FEATURED POST */}
        {activeCategory === "All" && featuredPost && (
          <div className="mb-32 group cursor-pointer">
            <div className="relative h-[500px] md:h-[650px] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={featuredPost.image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                alt="Featured"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                    <span className="bg-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-lg shadow-blue-600/20">Featured</span>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{featuredPost.date}</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tighter uppercase text-white">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-300 text-lg md:text-xl mb-10 line-clamp-2 font-light max-w-2xl leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <button className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest group-hover:gap-6 transition-all">
                  Read Full Artifact <ArrowRight className="text-blue-500" size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. STANDARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredPosts.filter(p => activeCategory !== "All" || !p.featured).map((post) => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-[2.5rem] border border-white/5 bg-blue-950/20 shadow-xl">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  alt="" 
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-[#020617]/80 backdrop-blur-md text-[9px] font-black px-4 py-1.5 rounded-full border border-white/10 uppercase tracking-widest text-blue-400">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-blue-400 transition-colors line-clamp-2 tracking-tighter leading-tight uppercase text-white">
                {post.title}
              </h3>
              
              <p className="text-slate-500 text-base mb-8 line-clamp-3 leading-relaxed font-light">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">{post.date}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">— {post.author}</span>
              </div>
            </article>
          ))}
        </div>

        {/* 3. NEWSLETTER: THE ALPHA LIST */}
        <div className="mt-48 p-12 md:p-24 rounded-[4rem] bg-blue-950/10 border border-white/5 relative overflow-hidden group shadow-3xl text-center md:text-left">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
             <Zap className="w-64 h-64 rotate-12 text-blue-500" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-xl">
              <h4 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase leading-none text-white">
                Weekly <span className="text-blue-500 italic">Alpha.</span>
              </h4>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                The top 1% of tech and design trends, architected for your inbox. No fluff, just performance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
              <input 
                type="email" 
                placeholder="protocol@void.com" 
                className="bg-white/5 border border-white/10 px-8 py-5 rounded-2xl focus:outline-none focus:border-blue-500 w-full md:w-80 text-white backdrop-blur-xl transition-all font-bold"
              />
              <button className="bg-white text-black font-black px-10 py-5 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 text-xs tracking-widest">
                JOIN <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}