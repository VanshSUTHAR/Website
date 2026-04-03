"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground"; 
import { 
  Lightbulb, LineChart, ShieldCheck, Users, 
  ArrowUpRight, Layers, Cpu, MessageSquare,
  Sparkles, Award, ChevronRight, Activity,
  Globe, Terminal, Briefcase, Zap
} from "lucide-react";

// Micro Sparkline for real-time vibe
const MicroSparkline = () => (
  <svg viewBox="0 0 100 20" className="w-24 h-5 text-blue-400" preserveAspectRatio="none">
    <path
      d="M0,15 L10,12 L20,16 L30,10 L40,13 L50,5 L60,9 L70,3 L80,7 L90,1 L100,6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="animate-pulse"
    />
  </svg>
);

export default function Consulting() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const pillars = [
    { title: "Transformation", val: "40%", label: "Op-Ex Reduction", icon: <Cpu/> },
    { title: "Market Alpha", val: "2.4x", label: "Avg. Growth Rate", icon: <Zap/> },
    { title: "Capital Flow", val: "$50M+", label: "Capital Optimized", icon: <Briefcase/> },
  ];

  return (
    <main className="relative bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION: COMMAND CENTER --- */}
      <HeroBackground variant="compact" className="flex items-center justify-center py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200/60">Elite Strategic Advisory</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10 uppercase italic">
              Strategy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
                 Meets Scale.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl mb-12 font-light">
              We architect the specialized blueprints that high-growth entities use to dominate 
              their verticals and eliminate structural friction.
            </p>
            
            <button className="bg-white text-black px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-2xl flex items-center gap-3 group active:scale-95">
              Execute Strategy Session 
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          {/* RIGHT SIDE: INTERACTIVE DASHBOARD BENTO */}
          <div className="grid grid-cols-2 gap-4 relative">
             <div className="space-y-4 pt-12">
                <div className="p-8 rounded-[2.5rem] bg-[#0A1128]/60 border border-white/5 backdrop-blur-3xl group relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity"><Globe size={40}/></div>
                   <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-4">Active Nodes</span>
                   <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black tracking-tighter italic">08</span>
                      <span className="text-blue-500 animate-pulse text-xs uppercase font-bold">Live</span>
                   </div>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-blue-600 shadow-2xl flex flex-col justify-between h-48">
                   <Activity size={32}/>
                   <div>
                      <MicroSparkline />
                      <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Delta Efficiency</span>
                   </div>
                </div>
             </div>
             <div className="space-y-4">
                <div className="p-8 rounded-[2.5rem] bg-[#0A1128]/60 border border-white/5 backdrop-blur-3xl h-64 flex flex-col justify-between">
                    <Terminal size={24} className="text-blue-500"/>
                    <p className="text-sm font-light text-slate-400 leading-relaxed uppercase italic">"Architecture without strategy is just expensive art."</p>
                    <div className="flex -space-x-3">
                        {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A1128] bg-slate-800" />)}
                    </div>
                </div>
                <div className="p-8 rounded-[2.5rem] bg-[#0A1128]/60 border border-white/5 backdrop-blur-3xl">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2">Alpha Yield</span>
                    <span className="text-4xl font-black text-blue-400 tracking-tighter italic">98.4%</span>
                </div>
             </div>
          </div>
        </div>
      </HeroBackground>

      {/* --- STAT TICKER: MARKET PROOF --- */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
            {pillars.map((item, i) => (
               <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left md:border-r last:border-0 border-white/10 md:px-12">
                  <div className="text-blue-500 mb-4">{item.icon}</div>
                  <h3 className="text-5xl font-black tracking-tighter mb-1 italic">{item.val}</h3>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">{item.label}</span>
               </div>
            ))}
         </div>
      </section>

      {/* --- METHODOLOGY: INTERACTIVE ROADMAP --- */}
      <section className="py-40 px-6 relative">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24 space-y-4">
               <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none">The Roadmap.</h2>
               <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full" />
               <p className="text-slate-500 text-lg font-light">From diagnostic auditing to optimized output loops.</p>
            </div>

            <div className="space-y-4">
               {[
                 { step: "01", title: "Diagnostic Audit", desc: "Rigorous stress testing of existing workflows and data pipelines." },
                 { step: "02", title: "Architecture", desc: "Designing the high-velocity transformation blueprint." },
                 { step: "03", title: "Integration", desc: "Embedding with core teams to oversee systemic execution." },
                 { step: "04", title: "Optimization", desc: "Continuous performance refinement via real-world feedback." }
               ].map((item, i) => (
                 <div 
                  key={i} 
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`group p-10 rounded-[3rem] border transition-all duration-500 cursor-default flex flex-col md:flex-row gap-8 items-center ${activeStep === i ? 'bg-[#0A1128] border-blue-500 shadow-2xl' : 'bg-transparent border-white/5'}`}
                 >
                    <span className={`text-6xl font-black italic transition-colors ${activeStep === i ? 'text-blue-500' : 'text-slate-800'}`}>
                       {item.step}
                    </span>
                    <div className="text-center md:text-left">
                       <h4 className="text-3xl font-black uppercase tracking-tighter mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                       <p className="text-slate-500 text-lg font-light leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- CASE SPOTLIGHT: ASYMMETRICAL GRID --- */}
      <section className="py-40 bg-white/[0.01]">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 group">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop" className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-105 duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60" />
               <div className="absolute bottom-10 left-10 right-10 p-8 bg-[#020617]/80 backdrop-blur-xl rounded-3xl border border-white/5">
                  <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-2 block">Success Story 04</span>
                  <h4 className="text-3xl font-black uppercase tracking-tighter italic">The Apex Project</h4>
               </div>
            </div>
            
            <div className="space-y-12">
               <div className="space-y-6">
                  <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">High <br /><span className="text-blue-500">Stakes</span> Advisory.</h2>
                  <p className="text-xl text-slate-400 font-light leading-relaxed">
                     We don't work with everyone. We work with the obsessed. Those who see $10M as a starting point and market dominance as the only option.
                  </p>
               </div>
               
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <p className="text-4xl font-black italic">94%</p>
                     <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Client Retention</p>
                  </div>
                  <div className="space-y-2">
                     <p className="text-4xl font-black italic">120+</p>
                     <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Protocols Deployed</p>
                  </div>
               </div>

               <button className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white/40 hover:text-blue-400 transition-all pt-8">
                  View Full Portfolio <ChevronRight size={16}/>
               </button>
            </div>
         </div>
      </section>

      {/* --- THE BLACK BOX: FINAL CTA --- */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto p-12 md:p-32 rounded-[5rem] bg-[#0A1128] border border-blue-500/20 relative overflow-hidden group shadow-3xl text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
          
          <h2 className="text-5xl md:text-9xl font-black mb-12 tracking-tighter uppercase leading-none text-white">
             Forge Your <br />
             <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Legacy.</span>
          </h2>

          <p className="text-slate-400 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Stop solving the same structural bottlenecks. Schedule a high-pressure discovery session with our lead partners.
          </p>

          <button className="group relative inline-flex items-center gap-6 bg-white text-black px-16 py-7 rounded-2xl font-black uppercase tracking-widest text-sm overflow-hidden transition-all hover:bg-blue-600 hover:text-white active:scale-95 shadow-2xl">
            Schedule Strategic Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}