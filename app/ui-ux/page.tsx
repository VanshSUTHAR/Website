"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import { 
  MoveRight, Paintbrush, Fingerprint, Layers, 
  Smartphone, Sparkles, Layout, Eye, MousePointer2, 
  Command, Cpu, Zap
} from "lucide-react";

export default function UIUX() {
  const capabilities = [
    { icon: <Fingerprint />, title: "Behavioral Analytics", desc: "Mapping the neural pathways of user intent through heatmaps and psychological audits.", color: "group-hover:text-blue-400" },
    { icon: <Layers />, title: "Logic Architecture", desc: "Engineering the skeletal structure of complex SaaS ecosystems for zero-latency cognition.", color: "group-hover:text-indigo-400" },
    { icon: <Paintbrush />, title: "Aesthetic Kineticism", desc: "Beyond flat design. We build high-fidelity motion systems that feel organic and responsive.", color: "group-hover:text-cyan-400" },
    { icon: <Smartphone />, title: "Tactile Prototyping", desc: "Deploying high-pressure stress tests on interactive flows before a single line of production code.", color: "group-hover:text-blue-600" },
  ];

  return (
    <main className="bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- KINETIC HERO SECTION --- */}
    <HeroBackground variant="compact" className="flex items-center justify-center py-16 md:py-24 mb-20">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          
          {/* Reduced margin from mb-10 to mb-8 */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 backdrop-blur-md">
            <Cpu className="w-4 h-4 text-blue-400 animate-spin-slow" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-200/80">Protocol: Experience Engineering</span>
          </div>

          {/* Reduced margin from mb-12 to mb-8 */}
          <h1 className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.75] mb-8 uppercase italic relative">
            Design <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-600 animate-shimmer">
              Systematics.
            </span>
            {/* Background Kinetic Text */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] text-blue-500/5 -z-10 font-black tracking-widest hidden md:block select-none">
              UIUX
            </span>
          </h1>

          {/* Reduced margin from mb-12 to mb-8 */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-8">
            We architect the interface between human emotion and digital logic. <br />
            <span className="text-white font-medium">Where friction dies, engagement begins.</span>
          </p>

          {/* Shortened decorative line from h-32 to h-16 */}
          <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent opacity-50" />
        </div>
    </HeroBackground>

      {/* --- CAPABILITIES: THE BENTO CORE --- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-40 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="group relative p-10 rounded-[3rem] bg-[#0A1128]/40 border border-white/5 hover:border-blue-500/30 transition-all duration-700 shadow-2xl overflow-hidden">
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Command className="w-5 h-5 text-blue-500/30" />
              </div>
              
              <div className={`w-16 h-16 mb-12 text-blue-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${cap.color}`}>
                {React.cloneElement(cap.icon as React.ReactElement, { size: 48, strokeWidth: 1.5 })}
              </div>
              
              <h3 className="text-2xl font-black mb-4 tracking-tight uppercase group-hover:text-blue-400 transition-colors">
                {cap.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                {cap.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500/0 group-hover:text-blue-500/100 transition-all">
                Learn Methodology 
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE PROCESS FLOW: DATA-DRIVEN INTERFACE --- */}
      <section className="py-40 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.03),transparent)]" />
         
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                   <div className="h-px w-12 bg-blue-600" />
                   <span className="text-blue-500 font-black uppercase text-[11px] tracking-[0.5em]">The Workflow</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                  Beyond the <br /> <span className="text-blue-500 italic">Pixel.</span>
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed font-light max-w-xl">
                  Great design is an engineering discipline. We use data-driven insights to architect interfaces that reduce cognitive load and drive radical user engagement.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { step: "01", title: "Empathy Mapping", desc: "Deep-diving into user pain points through neuro-linguistic profiling." },
                  { step: "02", title: "Frictionless UI", desc: "Removing every millisecond of doubt from the navigation journey." },
                  { step: "03", title: "Motion Systems", desc: "Interactive feedback loops that create a sensory 'flow state'." }
                ].map((item, i) => (
                  <div key={i} className="group flex gap-8 p-6 rounded-3xl hover:bg-blue-500/5 transition-all cursor-default">
                    <span className="text-4xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors">{item.step}</span>
                    <div>
                       <h4 className="text-xl font-bold uppercase mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                       <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Showcase Card */}
            <div className="relative group">
              <div className="absolute -inset-10 bg-blue-600/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 bg-[#0A1128] shadow-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-1000">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="p-8 rounded-3xl bg-[#020617]/80 backdrop-blur-2xl border border-white/10 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">Case Study 08</span>
                        <Eye size={16} className="text-slate-500" />
                      </div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter">Neuro-Dashboard V2</h3>
                      <div className="flex gap-2">
                        <div className="h-1 flex-1 bg-blue-600" />
                        <div className="h-1 flex-1 bg-white/10" />
                        <div className="h-1 flex-1 bg-white/10" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* --- KINETIC QUOTE SECTION --- */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <Zap className="w-12 h-12 text-blue-500 mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tight uppercase leading-[0.9]">
            "Design is not just <br /> what it looks like. <br /> 
            <span className="text-blue-500 italic">It is how it works.</span>"
          </h2>
          <div className="h-px w-24 bg-blue-500/30 mx-auto mt-12" />
          <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-xs">Steve Jobs — Contextually Applied</p>
        </div>
      </section>

      {/* --- CTA: READY TO DESIGN? --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto p-12 md:p-32 rounded-[5rem] bg-blue-950/10 border border-white/10 relative overflow-hidden group shadow-3xl text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
          
          <h2 className="text-5xl md:text-9xl font-black mb-12 tracking-tighter uppercase leading-none text-white">
            Build the <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Standard.</span>
          </h2>

          <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Stop following trends. Let&apos;s engineer a digital identity that competitors can only attempt to replicate.
          </p>

          <button className="group relative inline-flex items-center gap-6 bg-white text-black px-16 py-7 rounded-2xl font-black uppercase tracking-widest text-sm overflow-hidden transition-all hover:pr-24 active:scale-95 shadow-2xl">
            <span className="relative z-10">Start a Design Sprint</span>
            <MoveRight className="absolute right-10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 -z-10" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}