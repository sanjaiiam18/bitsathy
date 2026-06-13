"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";

export default function ChairmansDesk() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-2/4 right-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <section className="relative h-[100vh] bg-white border-b border-slate-200 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          src="https://www.bitsathy.ac.in/wp-content/uploads/Home.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white/95 z-10 backdrop-blur-[1px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-slate-900 flex flex-col justify-between h-full pt-32 pb-16 items-center text-center">
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                Leadership Desk
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Chairman's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Message</span>
            </h1>
            <p className="text-slate-700 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
              An inspiring vision from Thiru S. V. Balasubramaniam, Chairman of the Bannari Amman Group, promoting educational quality and lifelong learning.
            </p>
          </div>

          <ScrollDownButton className="my-4" />

          {/* Quick vision pillars */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mt-6">
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Empower</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Industrial Capabilities</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Virtues</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Value-Based Living</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Future</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Global Readiness</span>
            </div>
          </div>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Chairman Image / Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center reveal-left">
            <div className="w-full max-w-sm bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 text-center">
              <div className="aspect-[4/5] w-full rounded-2xl bg-slate-150 flex items-center justify-center border border-slate-200 relative mb-6 overflow-hidden">
                <img
                  src="https://www.bitsathy.ac.in/wp-content/uploads/2022/08/chairman.webp"
                  alt="Thiru S. V. Balasubramaniam - Chairman, Bannari Amman Institute of Technology"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl">Thiru S. V. Balasubramaniam</h3>
              <p className="text-brand-blue font-bold text-xs uppercase tracking-wider mt-1">Chairman</p>
              <div className="w-12 h-0.5 bg-brand-orange mx-auto my-4"></div>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold">
                Managing Trustee, Bannariamman Educational Trust &amp; Chairman, Bannari Amman Group
              </p>
            </div>

            <div className="w-full max-w-sm mt-8 p-6 rounded-3xl bg-gradient-to-tr from-brand-blue/5 to-slate-100 border border-slate-200">
              <span className="text-brand-blue text-4xl font-serif">“</span>
              <p className="text-slate-650 italic font-semibold text-sm sm:text-base -mt-4 mb-4">
                There are two educations-one that teaches how to make a living and the other how to live.
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-right">— Anthony de Mello</p>
            </div>
          </div>

          {/* Letter content */}
          <div className="lg:col-span-7 space-y-6 reveal-right">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
              A Philosophy for <span className="text-brand-blue">Life-Centered</span> Education
            </h2>
            
            <p className="text-slate-600 leading-relaxed font-semibold text-base sm:text-lg">
              Welcome to the Bannari Amman Institute of Technology.
            </p>

            <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base">
              At BIT, we hold a fundamental belief that education must go beyond simply enabling graduates to earn a livelihood. While academic credentials and domain expertise are necessary milestones, our true purpose is to nurture individuals with the character, values, and emotional capacity to lead balanced, meaningful lives.
            </p>

            <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base">
              The Bannari Amman Group has always believed in the power of corporate responsibility to uplift society. Through our Educational Trust, we focused our resources on Sathyamangalam with the vision of establishing an academic oasis where students—regardless of their socio-economic backgrounds—can access high-quality infrastructure, global industrial networks, and research labs that allow their creativity to thrive.
            </p>

            <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base">
              We encourage our students to seek out new ideas, design solutions for local agricultural or environmental challenges, and cultivate an attitude of continuous self-improvement. By aligning with global standard-setting organizations and building robust industry partnerships, we ensure our graduates step confidently into their careers, prepared to lead with excellence and integrity.
            </p>

            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-slate-950 font-bold text-sm">Warm regards,</p>
              <p className="text-slate-900 font-extrabold text-base mt-1">Thiru S. V. Balasubramaniam</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Chairman, Bannari Amman Institute of Technology</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
