"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground"; 
import { 
  Rocket, Eye, Code2, Palette, Lightbulb, 
  Users2, Smile, Sparkles, Zap, ChevronRight
} from "lucide-react";

export default function About() {
  return (
    <main className="bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30">
      <Navbar />

      {/* --- HERO SECTION: SPACING REMOVED & CONTENT CENTERED --- */}
      <HeroBackground variant="compact" className="flex items-center justify-center py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200/60">Our Identity</span>
          </div>
          
          {/* Headline - Removed 'leading-tight' for 'leading-none' to match image */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10">
            The Lab of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
               Digital Play.
            </span>
          </h1>
          
          {/* Paragraph */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            Timepass Pvt. Ltd. is where high-octane curiosity meets precision code. <br className="hidden md:block" />
            We build the unconventional for those who refuse the ordinary.
          </p>
        </div>
      </HeroBackground>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-12 rounded-[3rem] bg-blue-950/10 border border-white/5 backdrop-blur-3xl hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <Rocket className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Mission</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              To transform idle sparks into dominant digital realities. We bridge the gap 
              between human playfulness and enterprise-grade technology.
            </p>
          </div>

          <div className="group p-12 rounded-[3rem] bg-blue-950/10 border border-white/5 backdrop-blur-3xl hover:border-indigo-500/30 transition-all duration-500 shadow-2xl md:mt-16">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Vision</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              We envision a world where digital interaction is an experience people crave. We aim to be the global benchmark where imagination meets scalability.
            </p>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl text-left">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Core Disciplines</h2>
               <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
            </div>
            <p className="text-slate-500 font-medium">01 — 03 Services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 />, title: "Web Engineering", desc: "Building resilient interfaces using Next.js and the modern tech stack." },
              { icon: <Palette />, title: "Interaction Design", desc: "Crafting intuitive journeys that prioritize user retention." },
              { icon: <Zap />, title: "Prototype Lab", desc: "Rapidly evolving wild concepts into production-ready artifacts." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-[#0A1128]/50 border border-white/5 hover:border-blue-500/20 transition-all group cursor-pointer text-left">
                <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    LEARN MORE <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}