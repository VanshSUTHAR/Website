"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Scale, ShieldCheck, Gavel, FileText, ChevronRight, ArrowUp, Info, CheckCircle } from "lucide-react";

export default function Terms() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Update progress bar
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setReadingProgress((currentScroll / scrollTotal) * 100);

      // Simple Scroll-Spy logic
      const sectionElements = document.querySelectorAll("section[id]");
      sectionElements.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top >= 0 && top <= 300) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      summary: "By using our site, you're agreeing to our rules. It's a legal contract.",
      content: "These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you') and Timepass Pvt. Ltd. ('we,' 'us,' or 'our'), concerning your access to and use of our website and services."
    },
    {
      id: "ip-rights",
      title: "2. Intellectual Property",
      summary: "We own the code, designs, and brand. Don't steal them.",
      content: "Unless otherwise indicated, the Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Services (collectively, the 'Content') are owned or controlled by us."
    },
    {
      id: "user-conduct",
      title: "3. User Conduct",
      summary: "Don't hack us, scrape our data, or be a jerk on our platform.",
      content: "You may not access or use the Services for any purpose other than that for which we make the Services available. Prohibited activities include unauthorized framing, systematic retrieval of data to create a database, or attempting to bypass security measures."
    },
    {
      id: "liability",
      title: "4. Limitation of Liability",
      summary: "We aren't responsible if your business loses money while using our tools.",
      content: "In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, or loss of data."
    }
  ];

  return (
    <main className="bg-[#080810] text-white min-h-screen font-sans flex flex-col selection:bg-pink-500/30">
      <Navbar />

      {/* Modern Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[100]">
        <div 
          className="h-full bg-gradient-to-r from-pink-600 via-violet-500 to-pink-600 transition-all duration-150 shadow-[0_0_15px_rgba(219,39,119,0.5)]" 
          style={{ width: `${readingProgress}%` }} 
        />
      </div>

      {/* Abstract Background Accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-5%] w-80 h-80 bg-violet-600/10 rounded-full blur-[100px]" />
      </div>


      {/* Content Grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
        
        {/* Advanced Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 h-fit sticky top-32">
          <div className="space-y-10">
            <div>
              <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-6">Index</p>
              <nav className="flex flex-col gap-4">
                {sections.map((section) => (
                  <a 
                    key={section.id}
                    href={`#${section.id}`} 
                    className={`group flex items-center gap-4 text-sm transition-all duration-300 ${activeSection === section.id ? 'text-pink-500 translate-x-2' : 'text-gray-500 hover:text-white'}`}
                  >
                    <div className={`h-1 w-1 rounded-full transition-all duration-300 ${activeSection === section.id ? 'bg-pink-500 scale-[2] shadow-[0_0_8px_rgba(219,39,119,0.8)]' : 'bg-white/20'}`} />
                    <span className="font-bold tracking-tight">{section.title.split('. ')[1]}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              <Info className="w-5 h-5 text-pink-500 mb-4" />
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Notice</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                These terms are subject to update. Significant changes will be broadcast via our dashboard 30 days prior.
              </p>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-32">
          {sections.map((section, idx) => (
            <section key={section.id} id={section.id} className="scroll-mt-40 group">
              {/* Modern Section Header */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-pink-500 font-mono text-sm font-bold">0{idx + 1}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Visual Anchor */}
                <div className="md:col-span-4">
                   <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 group-hover:border-pink-500/20 transition-all duration-500 group-hover:bg-pink-500/[0.01]">
                      <div className="w-10 h-10 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 text-pink-500">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">The gist</p>
                      <p className="text-sm text-gray-300 italic leading-relaxed">
                        "{section.summary}"
                      </p>
                   </div>
                </div>

                {/* Legal Body */}
                <div className="md:col-span-8">
                  <h2 className="text-4xl font-bold mb-8 tracking-tight group-hover:text-pink-500 transition-colors duration-500">
                    {section.title.split('. ')[1]}
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-400 leading-[1.8] text-lg font-light">
                      {section.content}
                    </p>
                    <p className="text-gray-500 leading-[1.8] text-base italic border-l-2 border-pink-500/20 pl-6">
                      Additionally, users agree to abide by all local, state, and international treaties applicable to digital service consumption and data sovereignty.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Contact CTA Section */}
          <div className="relative p-1 bg-gradient-to-br from-white/10 via-pink-500/20 to-violet-500/10 rounded-[40px]">
            <div className="bg-[#080810] p-12 md:p-20 rounded-[39px] text-center">
              <div className="inline-block p-4 rounded-3xl bg-pink-500/10 mb-8 text-pink-500">
                <Gavel className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">Acceptance of Protocols</h3>
              <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
                By clicking "Agree" or continuing to browse, you confirm your acceptance of the 2026 digital infrastructure agreement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:bg-pink-500 hover:text-white transition-all transform hover:scale-105 active:scale-95">
                  I Agree to Terms
                </button>
                <button className="border border-white/10 px-10 py-4 rounded-2xl font-bold hover:bg-white/5 transition-all">
                  Download Archive
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top with Radial Pulse */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-10 right-10 p-5 rounded-2xl bg-pink-600 text-white shadow-[0_0_20px_rgba(219,39,119,0.4)] transition-all duration-500 z-50 group hover:-translate-y-2 ${readingProgress > 10 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </button>

      <Footer />
    </main>
  );
}