"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Departments Data
const departmentsData = [
  { id: "cse", name: "Computer Science & Engineering", category: "Computing", code: "CSE", labs: 8, intake: 240, placement: "98%", glowClass: "neon-glow-computing" },
  { id: "aids", name: "Artificial Intelligence & Data Science", category: "Computing", code: "AI&DS", labs: 4, intake: 180, placement: "100%", glowClass: "neon-glow-computing" },
  { id: "aiml", name: "AI & Machine Learning", category: "Computing", code: "AI&ML", labs: 3, intake: 120, placement: "98%", glowClass: "neon-glow-computing" },
  { id: "it", name: "Information Technology", category: "Computing", code: "IT", labs: 6, intake: 180, placement: "97%", glowClass: "neon-glow-computing" },
  { id: "ece", name: "Electronics & Communication", category: "Circuit Branches", code: "ECE", labs: 8, intake: 240, placement: "96%", glowClass: "neon-glow-circuit" },
  { id: "eee", name: "Electrical & Electronics", category: "Circuit Branches", code: "EEE", labs: 6, intake: 120, placement: "94%", glowClass: "neon-glow-circuit" },
  { id: "eie", name: "Electronics & Instrumentation", category: "Circuit Branches", code: "EIE", labs: 5, intake: 60, placement: "95%", glowClass: "neon-glow-circuit" },
  { id: "mech", name: "Mechanical Engineering", category: "Core Engineering", code: "MECH", labs: 10, intake: 120, placement: "91%", glowClass: "neon-glow-core" },
  { id: "mct", name: "Mechatronics Engineering", category: "Core Engineering", code: "MCT", labs: 5, intake: 60, placement: "93%", glowClass: "neon-glow-core" },
  { id: "agri", name: "Agricultural Engineering", category: "Core Engineering", code: "AGRI", labs: 4, intake: 60, placement: "92%", glowClass: "neon-glow-core" },
  { id: "civil", name: "Civil Engineering", category: "Core Engineering", code: "CIVIL", labs: 6, intake: 60, placement: "90%", glowClass: "neon-glow-core" },
  { id: "biotech", name: "Biotechnology", category: "Biosciences", code: "BIOTECH", labs: 7, intake: 120, placement: "96%", glowClass: "neon-glow-biosciences" },
  { id: "biomed", name: "Biomedical Engineering", category: "Biosciences", code: "BMED", labs: 5, intake: 60, placement: "95%", glowClass: "neon-glow-biosciences" },
  { id: "foodtech", name: "Food Technology", category: "Biosciences", code: "FOODTECH", labs: 4, intake: 60, placement: "94%", glowClass: "neon-glow-biosciences" },
];

// Recruiters list for Infinite Marquee
const recruiters = [
  "Amazon", "Zoho", "TCS", "Cognizant", "Accenture", "IBM", "Deloitte", 
  "Capgemini", "Wipro", "Infosys", "Mindtree", "TVS Motors", "L&T Infotech",
  "Robert Bosch", "Hexaware", "Virtusa"
];

// Campus Highlights
const campusHighlights = [
  { title: "Smart Classrooms", desc: "Interactive modern learning halls with digital tools & high-speed Wi-Fi.", icon: "desktop" },
  { title: "Centres of Excellence", desc: "Collaborative research hubs set up in partnership with top global tech giants.", icon: "labs" },
  { title: "Lush 181-Acre Campus", desc: "Eco-friendly, sustainable campus situated near the scenic River Bhavani.", icon: "leaf" },
  { title: "24/7 Learning Centre", desc: "Spacious library with vast journals, e-books, and quiet collaborative spaces.", icon: "library" },
  { title: "Industry Collaboration", desc: "MoUs with leading corporates for internships, guest lectures & live projects.", icon: "handshake" },
  { title: "Sports & Wellness", desc: "International standard track, multi-gym, and indoor sports facilities.", icon: "sports" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");

  // Numeric stats counter effect
  const [stats, setStats] = useState({
    acres: 0,
    pkg: 0,
    partners: 0,
    placement: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setStats({
        acres: Math.min(Math.round((181 / steps) * currentStep), 181),
        pkg: Math.min(Math.round((44 / steps) * currentStep), 44),
        partners: Math.min(Math.round((317 / steps) * currentStep), 317),
        placement: Math.min(Math.round((95 / steps) * currentStep), 95)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  // Filtered departments
  const filteredDepartments = activeTab === "All"
    ? departmentsData
    : departmentsData.filter(dept => dept.category === activeTab);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Dynamic drifting background aurora glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none animate-float-slow -z-10" />
      <div className="absolute top-2/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none animate-float-reverse -z-10" />
      <div className="absolute top-3/4 left-1/3 w-80 h-80 rounded-full bg-amber-300/5 blur-[100px] pointer-events-none -z-10" />

      {/* 2. Hero Section (Centered Layout & Light Overlay) */}
      <section id="home" className="relative min-h-[90vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/home.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px] z-10" />
        </div>

        {/* Hero Content (Centered) */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-slate-700 uppercase">
              NAAC A+ ACCREDITED | AUTONOMOUS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] mb-6 text-slate-900">
            Empowering Minds,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">
              Designing Tomorrows
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg mb-10 max-w-3xl font-medium leading-relaxed">
            Experience the future of engineering at Bannari Amman Institute of Technology. 
            Our 181-acre campus near River Bhavani provides an ideal biosphere for young innovators 
            seeking core technology competence.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a
              href="#academics"
              className="px-8 py-3.5 rounded-xl bg-brand-blue text-white font-bold text-center tracking-wide hover:bg-brand-blue/95 shadow-lg shadow-brand-blue/20 hover:scale-102 active:scale-100 transition-all duration-200"
            >
              Explore Programs
            </a>
            <a
              href="/contact#admissions"
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-center tracking-wide border border-slate-200 shadow-sm transition-all duration-200"
            >
              Admission Form
            </a>
          </div>
        </div>

        {/* Floating Stats Bar - Desktop Only */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 grid grid-cols-4 divide-x divide-slate-100 text-center">
            {/* Stat Item 1 */}
            <div className="flex flex-col justify-center p-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue">
                {stats.acres}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">
                Acres Green Campus
              </span>
            </div>

            {/* Stat Item 2 */}
            <div className="flex flex-col justify-center p-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-orange">
                {stats.pkg} <span className="text-2xl sm:text-3xl font-black">LPA</span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">
                Highest Salary Package
              </span>
            </div>

            {/* Stat Item 3 */}
            <div className="flex flex-col justify-center p-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-purple">
                {stats.partners}+
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">
                Recruiting Partners
              </span>
            </div>

            {/* Stat Item 4 */}
            <div className="flex flex-col justify-center p-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-cyan">
                {stats.placement}%
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">
                Placement Record
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Bar - Mobile/Tablet Only */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8 lg:hidden">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 grid grid-cols-2 gap-y-6 gap-x-4 text-center">
          <div className="flex flex-col justify-center p-2 border-r border-slate-100">
            <span className="text-3xl font-extrabold text-brand-blue">
              {stats.acres}
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-2">
              Acres Campus
            </span>
          </div>

          <div className="flex flex-col justify-center p-2">
            <span className="text-3xl font-extrabold text-brand-orange">
              {stats.pkg} <span className="text-lg font-black">LPA</span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-2">
              Highest Package
            </span>
          </div>

          <div className="flex flex-col justify-center p-2 border-t border-r border-slate-100 pt-6">
            <span className="text-3xl font-extrabold text-brand-purple">
              {stats.partners}+
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-2">
              Recruiters
            </span>
          </div>

          <div className="flex flex-col justify-center p-2 border-t border-slate-100 pt-6">
            <span className="text-3xl font-extrabold text-brand-cyan">
              {stats.placement}%
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-2">
              Placement
            </span>
          </div>
        </div>
      </div>

      {/* Spacer for Desktop overlay alignment */}
      <div className="hidden lg:block h-24"></div>

      {/* 3. About Preview Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-4">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                Welcome to BIT Sathy
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Where Innovation Meets <span className="text-brand-purple">Academic Excellence</span>
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              Bannari Amman Institute of Technology was established in 1996 by the Bannari Amman Group, 
              built on a sprawling 181-acre campus near the scenic River Bhavani, Sathyamangalam, Tamil Nadu. 
              As an autonomous engineering college affiliated with Anna University, Chennai, BIT is dedicated 
              to providing quality technical education and research training.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              With NAAC 'A+' accreditation and AICTE approval, we provide an ecosystem that encourages 
              curiosity, triggers creativity, and develops social responsibility. Our students are trained 
              on industry-relevant technologies in over 30 global Centres of Excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="/about"
                className="px-6 py-3 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-blue/95 transition-colors shadow-sm"
              >
                Read Full Story
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {campusHighlights.slice(0, 3).map((hl, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center bg-brand-blue/5 text-brand-blue">
                  {hl.icon === "desktop" && (
                    <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {hl.icon === "labs" && (
                    <svg className="w-6 h-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )}
                  {hl.icon === "leaf" && (
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-base mb-0.5">{hl.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">{hl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Academics Preview Section */}
      <section id="academics" className="py-24 bg-slate-100/50 border-y border-slate-200/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-4">
              <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">
                Academics
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Explore Our Undergraduate <span className="text-brand-orange">Programmes</span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              We offer specialized B.E. & B.Tech courses designed to prepare students for the global 
              tech ecosystem.
            </p>
          </div>

          {/* Filters tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {["All", "Computing", "Circuit Branches", "Core Engineering", "Biosciences"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/25 scale-105"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-brand-blue"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid of Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.slice(0, 6).map((dept) => (
              <div
                key={dept.id}
                className={`group p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-slate-300/80 flex flex-col justify-between ${dept.glowClass}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold tracking-wider px-3 py-1 rounded-md bg-slate-100 text-slate-500 uppercase">
                      {dept.category}
                    </span>
                    <span className="text-xs font-extrabold text-slate-400">
                      Code: {dept.code}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      {dept.category === "Computing" && (
                        <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                      {dept.category === "Circuit Branches" && (
                        <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      )}
                      {dept.category === "Core Engineering" && (
                        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                    <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-blue transition-colors">
                      {dept.name}
                    </h4>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                  <div>
                    <p className="text-slate-400 font-medium uppercase tracking-wider mb-1">Labs</p>
                    <p className="font-extrabold text-slate-800 text-sm">{dept.labs}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-medium uppercase tracking-wider mb-1">Intake</p>
                    <p className="font-extrabold text-slate-800 text-sm">{dept.intake}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-medium uppercase tracking-wider mb-1">Placement</p>
                    <p className="font-extrabold text-emerald-600 text-sm">{dept.placement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/academics"
              className="px-8 py-3.5 rounded-xl bg-brand-blue text-white font-bold inline-block hover:bg-brand-blue/95 transition-colors shadow-sm"
            >
              View All {departmentsData.length} Departments
            </a>
          </div>
        </div>
      </section>

      {/* 5. Placements Preview Section */}
      <section id="placements" className="py-24 overflow-hidden bg-slate-50 border-b border-slate-200 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-4">
                <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                  Placements & Careers
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
                Launching Global Careers with <br className="hidden sm:inline"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">
                  Industry Leaders
                </span>
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                The Placement Cell at BIT Sathy works round the year to connect our bright graduates with 
                industry giants. We provide robust technical bootcamps, mock interview drives, soft skills training, 
                and corporate mentorship.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center border-t border-slate-200 pt-8 font-semibold">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-orange">44 LPA</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 uppercase tracking-wider">Highest Package</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-blue">317+</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 uppercase tracking-wider">Companies Visited</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-600">1,920+</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 uppercase tracking-wider">Offers Made</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md">
              <h4 className="font-extrabold text-xl mb-6 text-slate-900">Why BIT Placements stand out?</h4>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Dedicated Coding Academy</strong>: Advanced training in algorithms, data structures & full-stack development.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Product-Specific Prep</strong>: Tailored sessions for top product giants like Amazon and Zoho.</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <a
                  href="/placements"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold block transition-colors text-sm"
                >
                  View Placement Records
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiter Logos Infinite Marquee */}
        <div className="py-8 bg-slate-100 border-y border-slate-200 relative z-10 select-none">
          <div className="relative w-full overflow-hidden flex flex-col items-center">
            <div className="animate-marquee gap-8 sm:gap-12 py-2">
              {recruiters.map((logo, idx) => (
                <div
                  key={`marq1-${idx}`}
                  className="px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center font-bold text-slate-700 text-sm sm:text-base hover:text-brand-blue hover:border-brand-blue hover:bg-brand-blue/5 transition-all duration-300 whitespace-nowrap cursor-default"
                >
                  {logo}
                </div>
              ))}
              {recruiters.map((logo, idx) => (
                <div
                  key={`marq2-${idx}`}
                  className="px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center font-bold text-slate-700 text-sm sm:text-base hover:text-brand-blue hover:border-brand-blue hover:bg-brand-blue/5 transition-all duration-300 whitespace-nowrap cursor-default"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Campus Pulse Section */}
      <section id="campus-life" className="py-24 bg-slate-100/50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/5 border border-brand-cyan/10 mb-4">
              <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
                Campus Pulse
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Life and Culture at <span className="text-brand-purple">BIT Sathy</span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              Explore national award victories, technical symposia, and student achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-xs font-bold text-brand-purple uppercase tracking-wider mb-3">Technical Fest</div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4">V-Prayukti National Conference</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Our flagship annual technical symposium gathers engineering minds from all over India.
                </p>
              </div>
              <div className="p-8 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Annual Event</span>
                <a href="/campus-life" className="font-bold text-brand-purple">Learn More &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Green Initiatives</div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4">Sustainable Campus Award</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  BIT has been awarded for its water recycling plants and 10,000+ trees planting initiative.
                </p>
              </div>
              <div className="p-8 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Environmental</span>
                <a href="/campus-life" className="font-bold text-emerald-600">Learn More &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-3">Hackathons</div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4">Smart India Hackathon Winners</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Three student teams from the CSE & AI/ML departments bagged first place at SIH.
                </p>
              </div>
              <div className="p-8 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>National Achievement</span>
                <a href="/campus-life" className="font-bold text-brand-orange">Learn More &rarr;</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/campus-life"
              className="px-8 py-3.5 rounded-xl bg-brand-purple text-white font-bold inline-block hover:bg-brand-purple/95 transition-colors shadow-sm"
            >
              Explore Campus Life & Clubs
            </a>
          </div>
        </div>
      </section>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
