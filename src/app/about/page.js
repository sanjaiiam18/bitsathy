"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";

export default function About() {
  const values = [
    { title: "Academic Freedom", desc: "Encouraging out-of-the-box thinking and individual career path customization.", icon: "academic" },
    { title: "Integrity & Ethics", desc: "Upholding high moral principles and transparent administrative governance.", icon: "shield" },
    { title: "Innovation", desc: "Dedicated funding and lab space to nurture patents, startups, and live industry research.", icon: "lightbulb" },
    { title: "Social Responsibility", desc: "Active community outreach programs, rural development and sustainable technology.", icon: "globe" }
  ];

  const milestones = [
    { year: "1996", title: "Foundation", desc: "Established by the Bannari Amman Group with 3 initial undergraduate courses." },
    { year: "2007", title: "Autonomous Status", desc: "Granted autonomous status by UGC, enabling tailored industry-aligned curriculum." },
    { year: "2015", title: "NAAC accreditation", desc: "Accredited with an 'A' grade, highlighting strong faculty and state-of-the-art labs." },
    { year: "2021", title: "NAAC A+ & Expansion", desc: "Re-accredited with NAAC A+ Grade and crossing 15+ specialized B.E/B.Tech programs." },
    { year: "2024", title: "Global Excellence", desc: "Recognized among top 100 private engineering colleges in India with 30+ Centres of Excellence." }
  ];

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
                About the Institution
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Our Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Academic Innovation</span>
            </h1>
            <p className="text-slate-700 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
              Bannari Amman Institute of Technology is a premier autonomous engineering institution founded by the Bannari Amman Group to deliver global technical standards in a peaceful, natural learning biosphere.
            </p>
          </div>

          <ScrollDownButton className="my-4" />

          {/* Quick indicator cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mt-6">
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">1996</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Established Year</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">NAAC A+</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">3.57/4.00 Rating</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">181 Acres</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Green Biosphere</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story & Core Trust */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 reveal-left">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Driven by the <span className="text-brand-orange">Bannari Amman Group</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              The Bannari Amman Group is one of the largest industrial conglomerates in South India, with wide 
              interests in sugar, textiles, chemicals, distillery, granite, wind power generation, and real estate. 
              Driven by a profound sense of social duty, the trust established BIT in Sathyamangalam with the 
              express goal of uplifting rural youth and preparing them for standard-setting careers in high technology.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              Over the last two decades, the institution has grown to be a benchmark for college infrastructure, 
              boasting a clean 181-acre campus, over 300+ research faculty, and world-class laboratory systems. 
              Our teaching methodology steps beyond textbooks to encourage active, project-based learning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                <h3 className="font-extrabold text-brand-blue text-lg mb-2">UGC Autonomous</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium">
                  Complete freedom to design current curricula in collaboration with top tech giants.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                <h3 className="font-extrabold text-brand-purple text-lg mb-2">Anna University Affiliated</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium">
                  B.E & B.Tech degrees awarded by Anna University, Chennai.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Metrics Column */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-brand-blue/5 to-slate-100 p-8 sm:p-10 rounded-3xl border border-slate-200 reveal-right">
            <h3 className="font-extrabold text-slate-900 text-xl mb-6">BIT Quality Indicators</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold text-sm shrink-0">A+</div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-base">NAAC Accreditation</h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">Accredited with an A+ Grade for high institutional quality.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold text-sm shrink-0">1st</div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-base">Clean & Green Campus</h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">Awarded for high-efficiency solar grid & zero carbon initiatives.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-purple text-white flex items-center justify-center font-bold text-sm shrink-0">ISO</div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-base">ISO 9001:2015</h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-medium">Certified systems for premium academic administration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-24 bg-slate-100/50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            
            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex gap-6 reveal-left">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-xl mb-3">Our Vision</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  To build a world-class center for education, training, and research in engineering 
                  and technology, fostering a learning ecosystem where innovators develop key technologies.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex gap-6 reveal-right">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/5 text-brand-orange flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-xl mb-3">Our Mission</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  To import value-based technical education, establish state-of-the-art research centers 
                  in collaboration with industry, and cultivate social and ethical values in our students.
                </p>
              </div>
            </div>

          </div>

          {/* Core Values grid */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Our Core Values</h3>
            <p className="text-slate-500 text-sm font-semibold">The principles guiding every aspect of the BIT biosphere.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className={`p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center flex flex-col items-center reveal-scale ${idx % 4 === 0 ? "delay-75" : idx % 4 === 1 ? "delay-150" : idx % 4 === 2 ? "delay-200" : "delay-300"}`}>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 text-brand-purple">
                  {val.icon === "academic" && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6M4.5 18H18" />
                    </svg>
                  )}
                  {val.icon === "shield" && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {val.icon === "lightbulb" && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364.364l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                  {val.icon === "globe" && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V8a2 2 0 00-2-2h-3.17M12 21a9 9 0 100-18 9 9 0 000 18z" />
                    </svg>
                  )}
                </div>
                <h4 className="font-extrabold text-slate-800 text-base mb-1.5">{val.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-semibold">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Historical Journey</h2>
          <p className="text-slate-500 text-sm font-semibold mt-2">A chronicle of growth, achievements, and structural breakthroughs.</p>
        </div>

        <div className="relative border-l-2 border-slate-200 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
          {milestones.map((mil, idx) => (
            <div key={idx} className={`relative group ${idx % 2 === 0 ? "reveal-left" : "reveal-right"}`}>
              {/* Year dot tag */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full border-4 border-slate-50 bg-brand-blue flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform"></div>
              
              <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-brand-orange font-black text-lg sm:text-xl block mb-1">{mil.year}</span>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{mil.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">{mil.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
