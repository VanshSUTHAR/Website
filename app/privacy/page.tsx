"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground"; 
import { 
  ShieldCheck, Eye, Lock, Database, Globe, 
  Fingerprint, Mail, ShieldAlert, FileText, ChevronRight 
} from "lucide-react";

export default function Privacy() {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress((window.scrollY / scrollTotal) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dataPoints = [
    { icon: <Fingerprint />, title: "Identity", desc: "Encrypted storage of names, emails, and verified professional bios." },
    { icon: <Globe />, title: "Usage", desc: "Anonymized IP addresses, browser types, and session clickstreams." },
    { icon: <Database />, title: "Cookies", desc: "Non-persistent session tokens and local preference tracking." },
  ];

  return (
    <main className="bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30">
      <Navbar />

      {/* Progress Bar - Pitch Blue Style */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[100]">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 transition-all duration-150 shadow-[0_0_15px_rgba(59,130,246,0.6)]" 
          style={{ width: `${readingProgress}%` }} 
        />
      </div>

      {/* --- HERO SECTION --- */}
   <HeroBackground variant="compact" className="min-h-[60vh] flex items-center justify-center">
    {/* Inner container needs flex-col and items-center to center the badge, h1, and p */}
    <div className="max-w-4xl mx-auto text-center relative z-10 px-6 flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Lock className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-200/60">
                Protocol: Encryption Active
            </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-white">
            Privacy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
                Manifesto.
            </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
            Your data is your property. We only process the absolute minimum required to architect 
            exceptional digital experiences.
        </p>
        
    </div>
</HeroBackground>

      {/* Data Visualization Cards */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dataPoints.map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-[#0A1128]/40 border border-white/5 hover:border-blue-500/30 transition-all group shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Policy Sections */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Left: Summary/Trust Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-white mb-6">Our Commitment</h2>
              <p className="text-slate-400 leading-relaxed font-light">
                We strictly adhere to GDPR, CCPA, and global privacy standards. Our data pipelines are 
                audited quarterly to ensure zero-leakage infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-blue-950/20 border border-white/5 backdrop-blur-xl group hover:border-blue-500/40 transition-colors">
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-slate-300">End-to-End Encryption</span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-blue-950/20 border border-white/5 backdrop-blur-xl group hover:border-blue-500/40 transition-colors">
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
                  <Eye className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-slate-300">No 3rd Party Data Sales</span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-blue-950/20 border border-white/5 backdrop-blur-xl group hover:border-blue-500/40 transition-colors">
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-slate-300">Automated Breach Defense</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Actual Clauses */}
        <div className="lg:col-span-8 space-y-24">
          {[
            { 
              title: "Data Collection", 
              text: "We collect information you provide directly, such as account creation details, newsletter subscriptions, or support inquiries. This data is hashed and salted at the point of entry into our network." 
            },
            { 
              title: "Purpose of Processing", 
              text: "Information is utilized solely to optimize user interfaces, manage secure authentication sessions, and measure page latency. We use de-identified metadata for internal architecture R&D." 
            },
            { 
              title: "Retention Protocols", 
              text: "Data persists only as long as your account remains active. Upon requested deletion, all associated personal identifiers are permanently purged from primary storage within 30 days." 
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -left-12 top-0 text-[80px] font-black text-white/[0.02] select-none group-hover:text-blue-500/5 transition-colors">
                0{idx + 1}
              </div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-4 text-white relative z-10 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-loose text-lg font-light relative z-10">
                {item.text}
              </p>
              <div className="mt-12 h-px w-full bg-gradient-to-r from-blue-500/20 to-transparent" />
            </div>
          ))}

          {/* Contact / Exercise Rights - Pitch Blue Box */}
          <div className="p-12 rounded-[3.5rem] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <FileText className="w-32 h-32" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight text-white">Exercise Your Rights</h3>
            <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed">
              Want to request a comprehensive data export or permanent deletion? Contact our Data Protection Officer immediately.
            </p>
            <a 
              href="mailto:privacy@timepass.com" 
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95 group"
            >
              <Mail className="w-5 h-5" /> 
              Contact Privacy Team
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}