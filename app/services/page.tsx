"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground"; 
import { Sparkles, Zap, Code2, Lightbulb, ArrowRight, ChevronRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Fun Projects",
      icon: <Zap className="w-7 h-7 text-blue-400" />,
      desc: "We build playful, interactive, and experimental digital projects that spark joy and curiosity.",
      tag: "Experimental"
    },
    {
      title: "Web Engineering",
      icon: <Code2 className="w-7 h-7 text-indigo-400" />,
      desc: "From high-performance websites to robust apps, we turn ideas into pixel-perfect digital realities.",
      tag: "Performance"
    },
    {
      title: "The Idea Lab",
      icon: <Lightbulb className="w-7 h-7 text-cyan-400" />,
      desc: "A playground for brainstorming and prototyping wild ideas with a technical edge.",
      tag: "Innovation"
    }
  ];

  return (
    <main className="bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30">
      <Navbar />

      {/* --- HERO SECTION: COMPACT & CENTERED --- */}
       <HeroBackground variant="compact" className="flex items-center justify-center py-32 md:py-48">
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200/60">Our Capabilities</span>
              </div>
              
              {/* Headline - Removed 'leading-tight' for 'leading-none' to match image */}
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10">
                  Solutions for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
                     Modern Web.
                </span>
              </h1>
              
              {/* Paragraph */}
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                 We don&apos;t just deliver features; we build digital artifacts. Explore our 
            specialized disciplines designed for high-impact results.
           </p>
            </div>
          </HeroBackground>

      {/* --- SERVICES GRID SECTION --- */}
      <section className="py-24 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <div 
                key={i} 
                className="group relative p-10 rounded-[2.5rem] bg-[#0A1128]/50 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/10 transition-all" />

                {/* Header: Icon + Tag */}
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/10 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400/60 bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10">
                    {item.tag}
                  </span>
                </div>

                {/* Body */}
                <h3 className="text-3xl font-bold mb-4 tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* Footer Link */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-blue-500/20 transition-all">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-white">View Details</span>
                  <ChevronRight className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXTRA VALUE SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-600/10 to-indigo-600/5 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
             <Zap className="w-64 h-64 rotate-12" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            Need a <span className="text-blue-500 italic">Custom</span> Stack?
          </h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-xl mx-auto">
            Our lab specializes in creating unique technical solutions for problems that don&apos;t fit in a box.
          </p>
          <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-3 mx-auto">
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}