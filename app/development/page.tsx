"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground"; 
import { 
  Code2, Database, ShoppingCart, Cloud, 
  Terminal, Cpu, Globe, Zap, ArrowRight, 
} from "lucide-react";

const services = [
  {
    title: "Frontend Excellence",
    desc: "Crafting pixel-perfect, responsive interfaces using React 19, Next.js 15, and Tailwind CSS.",
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Backend Scalability",
    desc: "Building secure, high-performance distributed systems and PostgreSQL architectures.",
    icon: <Database className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "E-Commerce Solutions",
    desc: "Custom headless storefronts and payment gateways designed for global conversion.",
    icon: <ShoppingCart className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Cloud Infrastructure",
    desc: "Architecting AWS/Vercel environments with automated CI/CD for 99.9% reliability.",
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
  },
];

export default function Development() {
  return (
    <main className="bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION: COMPACT ENGINEERING FOCUS --- */}
      <HeroBackground variant="compact" className="flex items-center justify-center py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Cpu className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200/60">System Architecture</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
            The Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
               Backbone.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            We don&apos;t just write code. We engineer robust, scalable, and creative 
            web solutions tailored for high-stakes digital environments.
          </p>
        </div>
      </HeroBackground>

      {/* --- SERVICES BENTO GRID --- */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-10 rounded-[2.5rem] bg-[#0A1128]/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              <div className="mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TECH STACK: TERMINAL STYLE --- */}
      <section className="bg-white/[0.01] border-y border-white/5 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.03),transparent)]" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            <div className="lg:max-w-xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Modern <br /> Stack.</h2>
                <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
              </div>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                We utilize a battle-tested selection of industry-standard tools to ensure your infrastructure 
                is future-proof, secure, and ready for rapid scale.
              </p>
            </div>
            
            {/* Tech Matrix */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full lg:w-auto">
              {['Next.js 15', 'PostgreSQL', 'TypeScript', 'Docker', 'GraphQL', 'Redis'].map((tech) => (
                <div 
                  key={tech} 
                  className="group relative px-8 py-6 rounded-2xl bg-[#0A1128]/80 border border-white/5 backdrop-blur-xl hover:border-blue-500/50 transition-all text-center"
                >
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-400 tracking-tighter transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] bg-blue-950/10 border border-white/10 text-center relative overflow-hidden group shadow-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
          <Zap className="absolute top-10 right-10 text-blue-500/10 w-32 h-32 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-white uppercase">
            Deploy your <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Vision.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Let&apos;s engineer a high-performing digital asset that moves the needle for your business.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95"
          >
            Initiate Project <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}