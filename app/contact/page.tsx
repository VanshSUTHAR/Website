"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import {
  Send, Mail, MapPin, Phone, Sparkles, Globe,
  Clock, ShieldCheck, MessageSquare, Laptop
} from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-[#020617] text-white min-h-screen font-sans flex flex-col selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <HeroBackground variant="compact" className="flex items-center justify-center py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200/60">Global Uplink</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase">
            Start a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-indigo-500 animate-shimmer">
              Transmission.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            Ready to architect the unconventional? Reach out through our secure
            channels or visit our distributed nodes.
          </p>
        </div>
      </HeroBackground>

      {/* --- MAIN CONTACT & FORM SECTION --- */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Professional Identity & Routing */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight uppercase">Strategic Routing</h2>
              <p className="text-slate-400 font-light leading-relaxed max-w-sm">
                Select the appropriate department to ensure your payload reaches the correct engineering lead.
              </p>
            </div>

            {/* Departmental Data Points */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "New Partnerships", email: "biz@timepass.dev", icon: <Globe /> },
                { label: "Technical Support", email: "ops@timepass.dev", icon: <Laptop /> },
                { label: "Press & Media", email: "media@timepass.dev", icon: <MessageSquare /> },
                { label: "Privacy / DPO", email: "legal@timepass.dev", icon: <ShieldCheck /> },
              ].map((dept, i) => (
                <div key={i} className="group p-5 rounded-3xl bg-blue-950/10 border border-white/5 hover:border-blue-500/20 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-blue-500 bg-blue-500/10 p-2 rounded-xl group-hover:scale-110 transition-transform">
                      const Icon = dept.icon;
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{dept.label}</p>
                      <p className="text-sm font-bold text-slate-200">{dept.email}</p>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-slate-700 group-hover:text-blue-500 transition-colors" />
                </div>
              ))}
            </div>

            {/* Global Node Data */}
            <div className="pt-8 border-t border-white/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-6">Active Node Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 uppercase font-bold tracking-tighter">Node 01: London (GMT)</span>
                  <span className="text-green-500 font-mono text-[10px] bg-green-500/10 px-2 py-0.5 rounded">ONLINE</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 uppercase font-bold tracking-tighter">Node 02: New York (EST)</span>
                  <span className="text-green-500 font-mono text-[10px] bg-green-500/10 px-2 py-0.5 rounded">ONLINE</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 uppercase font-bold tracking-tighter">Node 03: Tokyo (JST)</span>
                  <span className="text-blue-500 font-mono text-[10px] bg-blue-500/10 px-2 py-0.5 rounded">AWAKE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7">
            <form className="relative bg-[#0A1128]/60 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 md:p-16 shadow-2xl flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-2">Uplink Source</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-2">Return Frequency</label>
                  <input
                    type="email"
                    placeholder="Email@Protocol.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-2">Objective / Message</label>
                <textarea
                  placeholder="Describe your vision or project requirements..."
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group bg-white text-black font-black uppercase tracking-[0.2em] py-6 px-10 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 text-xs"
              >
                Execute Transmission
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER FAQ DATA --- */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { q: "Average Response Time?", a: "Transmissions are usually acknowledged within 2-4 hours during node uptime." },
            { q: "Global Availability?", a: "Our core engineering collective is distributed across 4 continents, ensuring 24/7 coverage." },
            { q: "Encrypted Communication?", a: "All form data is secured via end-to-end SSL/TLS 1.3 encryption protocols." }
          ].map((faq, i) => (
            <div key={i} className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 flex items-center gap-2">
                <Clock className="w-3 h-3" /> {faq.q}
              </h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}