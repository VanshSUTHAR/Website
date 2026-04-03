"use client";
import React, { useState } from "react";
import HeroBackground from "../app/components/HeroBackground";
import { 
  ArrowRight, Sparkles, Cpu, Layers, MessageSquare, 
  Zap, MousePointer2,
} from "lucide-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    // Base changed to Pitch Blue (#020617)
    <main className="relative scroll-smooth bg-[#020617]">
      {/* --- NAVIGATION --- */}
      <Navbar/>  

      {/* --- HERO SECTION --- */}
      <HeroBackground id="home">
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 flex flex-col items-center justify-center min-h-screen text-center">
          {/* Badge accent changed to blue-500/20 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200/60">The Future of Creative Play</span>
          </div>

          <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-10 text-white">
            Elevate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
              Timepass.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed mb-12">
            Where others see idle time, we see a <span className="text-white">canvas for innovation</span>. 
            Timepass Pvt. Ltd. builds digital artifacts that bridge fun and function.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Main CTA button updated to Blue */}
            <a href="#about" className="group bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 px-12 rounded-2xl shadow-2xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              Explore Our Vision <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Scroll</span>
            <MousePointer2 className="w-5 h-5 animate-bounce text-white" />
          </div>
        </div>
      </HeroBackground>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            {/* Accents updated to blue-500 */}
            <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6">Our Identity</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight text-white">
              We are the <span className="italic font-serif text-blue-200">Outliers</span> of the Digital Age.
            </h3>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              We don't follow trends; we break them. Timepass Pvt. Ltd. was founded on the belief that the best 
              ideas happen during "idle time."
            </p>
          </div>
          <div className="relative">
             <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-12 rounded-[3rem] relative z-10 shadow-2xl">
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: "Founded", val: "2024" },
                    { label: "Fun Ratio", val: "100%" },
                    { label: "ROI Average", val: "4.8x" },
                    { label: "Lab Projects", val: "50+" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 border border-white/5 rounded-2xl">
                      <div className="text-4xl font-black mb-1 text-white">{stat.val}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
             </div>
             {/* Glow color updated to blue-600/10 */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-40 px-6 bg-white/[0.01] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">Our Expertise</h2>
            <p className="text-blue-500 uppercase tracking-widest text-[10px] font-bold">Bridging raw imagination and precision tech</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Fun Projects", desc: "Interactive digital playgrounds that spark viral engagement." },
              { icon: <Cpu />, title: "Web Engineering", desc: "High-performance Next.js architectures with seamless UX." },
              { icon: <Layers />, title: "Idea Lab", desc: "Prototyping the impossible. We turn 'what if' into 'v1.0'." }
            ].map((service, i) => (
              <div key={i} className="group bg-blue-950/20 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-12 group-hover:scale-110 transition-transform">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  );
}