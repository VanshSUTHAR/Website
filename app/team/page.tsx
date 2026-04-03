"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import { ExternalLink, Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Vishvam Patel",
    role: "CEO & Founder",
    img: "/team photos/vishvam.jpeg",
    desc: "Guardian of quality. Breaking things now so they never break for your users.",
    color: "from-purple-500",
  }, {
    name: "Vansh Suthar",
    role: "Co-founder & COO",
    img: "/team photos/vansh.jpeg",
    desc: "Managing the chaos. Ensuring vision is translated into flawless execution.",
    color: "from-blue-600",
  }, {
    name: "Ridham Patel",
    role: "co-founder & CTO",
    img: "/team photos/ridham.jpeg",
    desc: "Master of distributed systems, server-side orchestration, and data integrity.",
    color: "from-indigo-500",
  },
  {
    name: "Heeya Dhadhatvala",
    role: "Project Lead & Experience Designer",
    img: "/team photos/heeya.jpeg",
    desc: "Crafting sensory digital journeys that bridge the gap between human and machine.",
    color: "from-cyan-500",
  },
  {
    name: "Harsh Vataliya",
    role: "team lead & principal engineer",
    img: "/team photos/harsh.jpeg",
    desc: "Architecting high-fidelity, responsive interfaces where performance meets aesthetics.",
    color: "from-blue-500",
  },



];

export default function Team() {
  return (
    <main className="bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <HeroBackground variant="compact" className="flex items-center justify-center py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200/60">The Collective</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
            Engineered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
              Chaos.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            A specialized squad of digital obsessives building the unconventional. <br className="hidden md:block" />
            We don't just write code; we architect performance.
          </p>
        </div>
      </HeroBackground>

      {/* --- FULL WIDTH TEAM PHOTO SECTION WITH HOVER REVEAL --- */}
      <section className="w-full relative group cursor-crosshair overflow-hidden bg-black">
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
          {/* Main Image */}
          <img
            src="/team photos/photo.jpeg"
            alt="The Team"
            className="w-full  object-cover grayscale transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />

          {/* Centered Reveal Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative overflow-hidden">
              <h2 className="text-[15vw] font-black tracking-[-0.05em] leading-none text-white opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-expo italic">
                LUNATICS
              </h2>
              {/* Glowing Background effect for text */}
              <div className="absolute inset-0 bg-blue-500/30 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </div>

          {/* Corner Labels (Optional Pro Detail) */}
          <div className="absolute top-10 left-10 text-[10px] font-bold tracking-[0.5em] uppercase text-white/50 group-hover:text-white transition-colors">
            Est. 2024
          </div>
          <div className="absolute bottom-10 right-10 text-[10px] font-bold tracking-[0.5em] uppercase text-white/50 group-hover:text-white transition-colors">
            Nodes: 05 / Active
          </div>
        </div>
      </section>

      {/* --- TEAM LIST: STAGGERED & GLASS DESIGN --- */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-32 md:space-y-48">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 group ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className={`w-full md:w-1/2 relative ${index % 2 !== 0 ? "md:translate-y-8" : ""}`}>
                <div className={`absolute -inset-10 bg-gradient-to-tr ${member.color} to-transparent opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700 rounded-full`} />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/5 bg-[#0A1128]/50 backdrop-blur-3xl shadow-2xl transition-all duration-700 group-hover:border-blue-500/30 group-hover:-translate-y-2">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-1000 ease-in-out"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-8 h-[1.5px] bg-blue-500" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-500">Node 0{index + 1}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter group-hover:text-blue-400 transition-colors uppercase leading-none">
                    {member.name}
                  </h2>
                </div>

                <div className="inline-flex px-5 py-2 rounded-full bg-blue-900/10 border border-blue-500/20 backdrop-blur-md">
                  <p className="text-blue-300 font-bold text-xs tracking-widest uppercase">{member.role}</p>
                </div>

                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto md:mx-0">
                  {member.desc}
                </p>

                <div className="pt-4 opacity-40 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-all">
                    View Dossier
                    <div className="p-2 rounded-full border border-white/10 group-hover:border-blue-500/50 transition-colors">
                      <ExternalLink size={14} className="group-hover:rotate-45 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER CALLOUT --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center glass-card p-12 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden bg-blue-950/20 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter relative z-10">
            Are you a <span className="text-blue-500 italic">Lunatic</span>?
          </h2>
          <button className="relative z-10 bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95">
            Apply to the Collective
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}