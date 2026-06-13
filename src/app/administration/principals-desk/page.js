"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";

export default function PrincipalsDesk() {
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
                Academic Desk
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Principal's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-blue">Message</span>
            </h1>
            <p className="text-slate-700 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
              Insights on engineering excellence, academic rigor, and holistic learning developments from Dr. C. Palanisamy, Principal.
            </p>
          </div>

          <ScrollDownButton className="my-4" />

          {/* Quick academic pillars */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mt-6">
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Rigor</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Outcome-Based Learning</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Research</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Intellectual Property</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Synergy</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Corporate Integrations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Principal Image / Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center reveal-left">
            <div className="w-full max-w-sm bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 text-center">
              <div className="aspect-[4/5] w-full rounded-2xl bg-slate-150 flex items-center justify-center border border-slate-200 relative mb-6 overflow-hidden">
                <img
                  src="https://www.bitsathy.ac.in/wp-content/uploads/Principal-dep.jpg"
                  alt="Dr. C. Palanisamy - Principal, Bannari Amman Institute of Technology"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl">Dr. C. Palanisamy</h3>
              <p className="text-brand-orange font-bold text-xs uppercase tracking-wider mt-1">Principal</p>
              <div className="w-12 h-0.5 bg-brand-blue mx-auto my-4"></div>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold">
                Member Secretary, Governing Council, Bannari Amman Institute of Technology
              </p>
            </div>

            {/* Contact details */}
            <div className="w-full max-w-sm mt-8 p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-2">Office Contact</h4>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:principal@bitsathy.ac.in" className="text-brand-blue hover:underline text-xs sm:text-sm font-bold truncate">
                  principal@bitsathy.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-orange/5 text-brand-orange flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+919842217170" className="text-slate-600 hover:text-brand-orange text-xs sm:text-sm font-bold">
                  +91 98 4221 7170
                </a>
              </div>
            </div>
          </div>

          {/* Letter content */}
          <div className="lg:col-span-7 space-y-6 reveal-right">
            <div className="p-6 rounded-3xl bg-slate-100/60 border border-slate-200/80 mb-6">
              <span className="text-brand-orange text-4xl font-serif">“</span>
              <p className="text-slate-650 italic font-semibold text-sm sm:text-base -mt-4 mb-4">
                Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great.
              </p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-right">— Dr. A.P.J. Abdul Kalam</p>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Empowering Minds, <span className="text-brand-orange">Designing Tomorrows</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed font-semibold text-base sm:text-lg">
              Dear Students, Parents, and Industry Partners,
            </p>

            <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base">
              India has the largest youth population globally, which presents an unprecedented demographic dividend. At Bannari Amman Institute of Technology, we see this as both an opportunity and a heavy responsibility. Our mission is to transform this potential into a powerful force for scientific progress, engineering innovation, and nation-building.
            </p>

            <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base">
              Through our unique autonomous curriculum, we ensure that learning is not a passive assimilation of text. Rather, it is an active exploration. In our 30+ specialized Centres of Excellence, Product Innovation Centre, and the Gurugulam system, students work on real-world industrial research, build functional models, and file patents. We emphasize design thinking, coding proficiency, and entrepreneurial skills, making our graduates day-one productive in global settings.
            </p>

            <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base">
              Beyond the classroom, our 181-acre campus is designed to be a thriving biosphere where sports, cultural groups, and green clubs provide a rich community life. We are dedicated to ensuring that when a student graduates from BIT, they possess not just technical skills, but also the leadership qualities, empathy, and global ethics needed to build a bright tomorrow.
            </p>

            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-slate-950 font-bold text-sm">Sincerely yours,</p>
              <p className="text-slate-900 font-extrabold text-base mt-1">Dr. C. Palanisamy</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Principal, Bannari Amman Institute of Technology</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
