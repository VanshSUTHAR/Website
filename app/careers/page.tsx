"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground"; 
import { 
  Sparkles, 
  Globe2, 
  Terminal, 
  Users2, 
  ArrowRight, 
  ChevronRight, 
  Briefcase,
  Zap
} from "lucide-react";

export default function Careers() {
  const values = [
    { 
        title: "High-Octane Innovation", 
        desc: "We don't follow digital trends; we architect the unconventional through rapid R&D.",
        icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    { 
        title: "Distributed Intelligence", 
        desc: "Remote-first by design. Work from any node in the world on your own optimized schedule.",
        icon: <Globe2 className="w-6 h-6 text-indigo-400" />
    },
    { 
        title: "Absolute Ownership", 
        desc: "Every engineer and designer has a direct seat at the strategy table. Zero bureaucracy.",
        icon: <Terminal className="w-6 h-6 text-cyan-400" />
    },
  ];

  const jobs = [
    { title: "Frontend Performance Engineer", dept: "Engineering", type: "Full-time", status: "Urgent" },
    { title: "Senior Interaction Designer", dept: "Design", type: "Full-time", status: "Active" },
    { title: "Distributed Systems Architect", dept: "Engineering", type: "Contract", status: "Active" },
    { title: "Growth Analytics Lead", dept: "Marketing", type: "Full-time", status: "New" },
  ];

  return (
    <main className="bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION: COMPACT & TYPOGRAPHIC --- */}
      <HeroBackground variant="compact" className="flex items-center justify-center py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Users2 className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200/60">Recruitment Protocol</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-10 uppercase italic">
            Infiltrate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
               The Lab.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            We are scouting for the obsessed. If you thrive in the space where 
            high-fidelity code meets radical creativity, we have a desk for you.
          </p>
        </div>
      </HeroBackground>

      {/* --- CORE PILLARS / VALUES --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8 relative z-10">
        {values.map((v, i) => (
          <div key={i} className="group p-10 rounded-[2.5rem] bg-[#0A1128]/50 border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
            <div className="mb-8 p-3 w-fit rounded-2xl bg-blue-600/10 group-hover:scale-110 transition-transform">
                {v.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-white uppercase italic">{v.title}</h3>
            <p className="text-slate-500 leading-relaxed font-light">{v.desc}</p>
          </div>
        ))}
      </section>

      {/* --- OPEN MISSIONS (JOB LIST) --- */}
      <section className="max-w-5xl mx-auto w-full px-6 py-20 flex-1 relative z-10">
        <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Open Missions</h2>
            <div className="hidden md:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Currently Scouting</span>
            </div>
        </div>
        
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-[#0A1128]/40 border border-white/5 hover:border-blue-500/40 hover:bg-blue-900/10 transition-all cursor-pointer">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">{job.title}</h4>
                    <span className="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">{job.status}</span>
                </div>
                <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Briefcase size={10} /> {job.dept} • {job.type}
                </p>
              </div>
              <button className="mt-6 md:mt-0 px-8 py-3 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-2">
                Apply <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* --- TALENT POOL CALLOUT --- */}
        <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 text-center relative overflow-hidden group shadow-3xl">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
             <Zap className="w-64 h-64 rotate-12 text-white" />
          </div>
          <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-none">Don&apos;t see <br /><span className="text-blue-500 italic">your niche?</span></h3>
          <p className="text-slate-400 text-lg font-light mb-10 max-w-lg mx-auto">
            We are always scouting for extraordinary technical and creative infiltrators. Send us a payload of your best work.
          </p>
          <a 
            href="mailto:careers@timepass.dev" 
            className="inline-flex items-center gap-3 bg-white text-black px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xl"
          >
            Initiate Contact <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}