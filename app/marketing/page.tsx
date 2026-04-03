"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground"; 
import { 
  BarChart3, Megaphone, Target, Zap, TrendingUp, 
  Share2, CheckCircle, Search, 
  DollarSign, BarChart2, ArrowRight, Activity
} from "lucide-react";

export default function Marketing() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 25 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 5}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  const strategies = [
    { 
      icon: <Target />, 
      topic: "Visibility",
      title: "Precision SEO", 
      desc: "Dominating search results with intent-based keyword mapping and technical authority building." 
    },
    { 
      icon: <Zap />, 
      topic: "Acquisition",
      title: "Performance Ads", 
      desc: "High-conversion PPC campaigns across Meta, Google, and LinkedIn with optimized ROAS." 
    },
    { 
      icon: <Share2 />, 
      topic: "Authority",
      title: "Social Growth", 
      desc: "Building viral brand presence through algorithmic storytelling and community engagement." 
    },
    { 
      icon: <BarChart3 />, 
      topic: "Measurement",
      title: "Data Analytics", 
      desc: "Deep-dive attribution modeling to track every dollar spent and every lead earned." 
    },
  ];

  return (
    <main className="relative bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30 overflow-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
 <HeroBackground id="marketing" variant="compact" className="min-h-[70vh] flex items-center justify-center">
  <div className="max-w-[1400px] mx-auto px-6 relative z-10 pt-20 flex flex-col items-center text-center">
    
    {/* Internal Data Particles */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400 animate-pulse-glow"
          style={{ 
            left: p.left, 
            top: p.top, 
            width: p.size, 
            height: p.size, 
            animationDelay: p.delay 
          }}
        />
      ))}
    </div>

    {/* Badge Container */}
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
      <Activity className="w-4 h-4 text-blue-400" />
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200/60">
        Performance Engineering
      </span>
    </div>
    
    {/* Headline */}
    <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 text-white">
      Marketing <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
        Refined.
      </span>
    </h1>
    
    {/* Description - Added mx-auto to be safe */}
    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-16 font-light">
      We don&apos;t just buy traffic; we architect high-converting customer journeys 
      using data-first strategies and behavioral psychology.
    </p>

  </div>
</HeroBackground>

      {/* --- STRATEGY BENTO GRID --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((item, i) => (
              <div 
                key={i} 
                className="group relative p-10 rounded-[2.5rem] bg-blue-950/10 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-20 group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400/60 mb-2 block">{item.topic}</span>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE CONVERSION FUNNEL --- */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">The Conversion Funnel</h2>
            <p className="text-slate-400 text-lg font-light">Our systematic approach to turning strangers into brand advocates.</p>
          </div>

          <div className="space-y-6">
            {[
              { stage: "Awareness", icon: <Search/>, width: "w-full", color: "bg-blue-600/20" },
              { stage: "Consideration", icon: <BarChart2/>, width: "w-[85%]", color: "bg-blue-700/20" },
              { stage: "Conversion", icon: <DollarSign/>, width: "w-[70%]", color: "bg-blue-800/20" },
              { stage: "Loyalty", icon: <CheckCircle/>, width: "w-[55%]", color: "bg-blue-900/20" }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className={`${step.color} ${step.width} p-8 rounded-3xl border border-white/5 backdrop-blur-xl flex justify-between items-center transition-all group-hover:border-blue-500/40 group-hover:translate-x-2`}>
                   <div className="flex items-center gap-4">
                      <span className="text-blue-500 font-black text-xl">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-2xl font-bold tracking-tight">{step.stage}</span>
                   </div>
                   <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {React.cloneElement(step.icon as React.ReactElement, { className: "w-6 h-6" })}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden bg-blue-950/20 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
            Ready to <br /><span className="text-blue-500 italic">Break Out?</span>
          </h2>
          <p className="text-xl text-slate-400 font-light mb-12 max-w-xl mx-auto">
            Stop guessing. Start growing. Let&apos;s build your custom growth architecture today.
          </p>
          <button className="bg-white text-black px-12 py-5 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-3 mx-auto">
             Book a Free Audit <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}