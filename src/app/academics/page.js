"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollDownButton from "@/components/ScrollDownButton";

// Full Departments Data
const departmentsData = [
  { id: "cse", slug: "computer-science-engineering", name: "Computer Science & Engineering", category: "Computing", code: "CSE", labs: 8, intake: 240, placement: "98%", glowClass: "neon-glow-computing", desc: "Focuses on advanced software engineering, systems design, coding academy, and industry software development." },
  { id: "aids", slug: "artificial-intelligence-data-science", name: "Artificial Intelligence & Data Science", category: "Computing", code: "AI&DS", labs: 4, intake: 180, placement: "100%", glowClass: "neon-glow-computing", desc: "Specialized in data analysis, big data infrastructure, neural networks, machine learning models, and deep learning algorithms." },
  { id: "aiml", slug: "artificial-intelligence-machine-learning", name: "AI & Machine Learning", category: "Computing", code: "AI&ML", labs: 3, intake: 120, placement: "98%", glowClass: "neon-glow-computing", desc: "Focuses on robotics vision, natural language processing, predictive analytics, and reinforcement learning systems." },
  { id: "it", slug: "information-technology", name: "Information Technology", category: "Computing", code: "IT", labs: 6, intake: 180, placement: "97%", glowClass: "neon-glow-computing", desc: "Covers cloud infrastructure, cybersecurity protocols, web applications, network databases, and mobile computing." },
  { id: "ece", slug: "electronics-communication-engineering", name: "Electronics & Communication", category: "Circuit Branches", code: "ECE", labs: 8, intake: 240, placement: "96%", glowClass: "neon-glow-circuit", desc: "Focuses on VLSI design, wireless signal communication, embedded systems, microcontrollers, and IoT protocols." },
  { id: "eee", slug: "electrical-electronics-engineering", name: "Electrical & Electronics", category: "Circuit Branches", code: "EEE", labs: 6, intake: 120, placement: "94%", glowClass: "neon-glow-circuit", desc: "Specializes in power grid systems, renewable solar/wind energy, electric vehicle architectures, and power electronics." },
  { id: "eie", slug: "electronics-instrumentation-engineering", name: "Electronics & Instrumentation", category: "Circuit Branches", code: "EIE", labs: 5, intake: 60, placement: "95%", glowClass: "neon-glow-circuit", desc: "Focuses on automation sensors, industrial controllers (PLCs), biomedical signals, and process measurement metrics." },
  { id: "mech", slug: "mechanical-engineering", name: "Mechanical Engineering", category: "Core Engineering", code: "MECH", labs: 10, intake: 120, placement: "91%", glowClass: "neon-glow-core", desc: "Covers thermal systems, CAD/CAM drafting, structural design, fluid dynamics, and manufacturing technologies." },
  { id: "mct", slug: "mechatronics-engineering", name: "Mechatronics Engineering", category: "Core Engineering", code: "MCT", labs: 5, intake: 60, placement: "93%", glowClass: "neon-glow-core", desc: "A hybrid of mechanics and automation, specializing in manufacturing robotics, automation control, and cyber-physical systems." },
  { id: "agri", slug: "agricultural-engineering", name: "Agricultural Engineering", category: "Core Engineering", code: "AGRI", labs: 4, intake: 60, placement: "92%", glowClass: "neon-glow-core", desc: "Focuses on smart farming sensors, irrigation systems, food processing machinery, and sustainable soil preservation." },
  { id: "civil", slug: "civil-engineering", name: "Civil Engineering", category: "Core Engineering", code: "CIVIL", labs: 6, intake: 60, placement: "90%", glowClass: "neon-glow-core", desc: "Covers infrastructure layouts, structural concrete, concrete dynamics, green architecture, and structural drafting." },
  { id: "biotech", slug: "biotechnology", name: "Biotechnology", category: "Biosciences", code: "BIOTECH", labs: 7, intake: 120, placement: "96%", glowClass: "neon-glow-biosciences", desc: "Focuses on gene editing, clinical biochemistry, agricultural biotech, genetic microbiology, and vaccine research." },
  { id: "biomed", slug: "biomedical-engineering", name: "Biomedical Engineering", category: "Biosciences", code: "BMED", labs: 5, intake: 60, placement: "95%", glowClass: "neon-glow-biosciences", desc: "Bridges engineering and healthcare, covering medical imaging, prosthetic design, health sensors, and clinical equipment." },
  { id: "foodtech", slug: "food-technology", name: "Food Technology", category: "Biosciences", code: "FOODTECH", labs: 4, intake: 60, placement: "94%", glowClass: "neon-glow-biosciences", desc: "Specializes in food packaging, preservation technologies, nutritional biochemistry, and safety standard protocols." }
];

const coes = [
  { name: "Intel Intelligent Systems Lab", partner: "Intel India", area: "IoT, Machine Learning & Embedded Boards" },
  { name: "Virtusa Pegasystems Lab", partner: "Virtusa Corp", area: "Low Code Development & Robotic Process Automation" },
  { name: "Texas Instruments Embedded Systems Centre", partner: "TI", area: "Analog Design & Microcontroller Architectures" },
  { name: "AWS Academy Lab", partner: "Amazon Web Services", area: "Cloud Architecture, Databases & Security Ops" },
  { name: "IBM Cognitive Computing Lab", partner: "IBM", area: "Watson AI integration & Cloud DevOps training" },
  { name: "Siemens PLM Laboratory", partner: "Siemens", area: "Product Design, CAD/CAM & Factory Automation" }
];

export default function Academics() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredDepartments = activeTab === "All"
    ? departmentsData
    : departmentsData.filter(dept => dept.category === activeTab);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none -z-10" />

      {/* Page Header */}
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
                Academic Divisions
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Undergraduate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">B.E. & B.Tech Programmes</span>
            </h1>
            <p className="text-slate-700 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
              Choose from 14+ autonomous undergraduate branches built in partnership with leading global corporations to grant immediate industry career paths and technological expertise.
            </p>
          </div>

          <ScrollDownButton className="my-4" />

          {/* Quick academic indicator cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mt-6">
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">14+</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">UG Programmes</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">6+</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">PG Programmes</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">10</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Ph.D. Centres</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm reveal-scale delay-75">
            <h3 className="font-extrabold text-brand-blue text-lg mb-3">Choice Based Credit System</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Students have the complete freedom to choose courses across different branches, allowing them to gain minor 
              degrees in advanced computing alongside their core mechanical or circuit engineering.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm reveal-scale delay-150">
            <h3 className="font-extrabold text-brand-orange text-lg mb-3">Industry-Embedded Core</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Syllabi are audited every year in cooperation with top global corporates. Over 30% of coursework is handled 
              directly by senior technical consultants and corporate researchers.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm reveal-scale delay-200">
            <h3 className="font-extrabold text-brand-purple text-lg mb-3">Project-Based Semester</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              Instead of traditional theoretical memorization, students complete structural prototype models, 
              software builds, or active laboratory research papers for major academic credits.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Department list */}
      <section className="py-20 bg-slate-100/50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Programme Catalog</h2>
            <p className="text-slate-500 text-sm font-semibold mt-2">Filter and browse the full breakdown of classes, intakes, and placement ratios.</p>
          </div>

          {/* Filter Tabs */}
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
            {filteredDepartments.map((dept, idx) => (
              <div
                key={dept.id}
                className={`group p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-slate-300/80 flex flex-col justify-between ${dept.glowClass} reveal-scale ${idx % 3 === 0 ? "delay-75" : idx % 3 === 1 ? "delay-150" : "delay-200"}`}
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
                    <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-blue transition-colors">
                      {dept.name}
                    </h4>
                  </div>
                  
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold mt-2 mb-6">
                    {dept.desc}
                  </p>
                </div>

                <div className="mt-4 pt-6 border-t border-slate-100 flex flex-col gap-4">
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
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

                  <Link
                    href={`/department/${dept.slug}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-brand-blue font-bold text-xs hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300"
                  >
                    <span>View Department Details</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centres of Excellence */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Centres of Excellence</h2>
          <p className="text-slate-500 text-sm font-semibold mt-2">Research and learning labs established in direct partnership with global tech conglomerates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coes.map((coe, idx) => (
            <div key={idx} className={`p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow reveal-scale ${idx % 3 === 0 ? "delay-75" : idx % 3 === 1 ? "delay-150" : "delay-200"}`}>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block mb-2">Partner: {coe.partner}</span>
              <h3 className="font-extrabold text-slate-800 text-base sm:text-lg mb-3">{coe.name}</h3>
              <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed">
                <strong>Focus Area:</strong> {coe.area}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
