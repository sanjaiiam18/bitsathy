"use client";

import React, { useState } from "react";
import Link from "next/link";

const getFacultyDetailedData = (name) => {
  // 1. Dr. Sasikala D
  if (name.includes("Sasikala")) {
    return {
      experience: [
        { type: "Engineering", organization: "Bannari Amman Institute of Technology, Sathyamangalam", from: "18.05.2001", to: "12.06.2026", total: "25 Year(s)" },
        { type: "Engineering", organization: "Maharaja Engineering College", from: "05.06.2000", to: "30.04.2001", total: "0 Year & 10 Month(s)" }
      ],
      credentials: [
        { degree: "B.E", specialization: "Computer Science and Engineering", institute: "Bannari Amman Institute of Technology", university: "Bharathiar University, Coimbatore", year: "2000" },
        { degree: "M.E", specialization: "Computer Science and Engineering", institute: "Bannari Amman Institute of Technology", university: "Bharathiar University, Coimbatore", year: "2009" },
        { degree: "Ph.D", specialization: "Information and Communication Engg", institute: "Anna University Chennai", university: "Anna University, Chennai", year: "2017" }
      ],
      publications: [
        "Sasikala, D., & Nivishna Shree, S. A. (2025). Performance analysis of sign language recognition using deep neural network architecture. IEEE Access. https://doi.org/10.1109/ACCESS.2025.3520537",
        "Manthan S, Manavadaria, Sasikala D, Rajasree Rajamohanan, Niji P S, Vikram Madhukar Agone, Charles Babu G, \"Automated Detection and Alerting System for Wheat Leaf Diseases Using the VGG16 Deep Learning Model\", 2024 International Conference on Data Science and Network Security (ICDSNS), Tiptur, India, 2024, Pages. 1-5, DOI: 10.1109/ICDSNS62112.2024.10690870.",
        "B R Sathishkumar, K M Monica, Sasikala D, M N Sudha, \"Multi-Fusion Biometric Authentication Using Minutiae-Driven Fixed-Size Template Matching (MFTM)\", Vol. 14, No. 02, Pages. 263-274, 2024, DOI: https://doi.org/10.54216/Jcim.140218.",
        "Gaurav D Saxena, Smita Tukaram Kumbhar, Sasikala D, Jagadeesh K Sor, J Jayakumar, Sonia H Bajaj, Amit Chauhan, \"Performance, Environment, Actuators, and Sensors Model to Portray an Intelligent Agent Model\", Volume 21 No 1 Doi: 10.48047/Nq.2023.21.01.Nq20038.(2023).",
        "M Ramalingam, K Sathishkumar, Suja Sundram C, Naga Raju and D Sasikala, \"Two-Dimensional Predictive Model: Data Analysis Using Regression Algorithm\", Doi: 10.1016/J.Matpr.2021.04.163.",
        "D Sasikala, K Premalatha \"Social Network Analysis for Prediction of Civil Unrest: A Review International Journal of Pure and Applied Mathematics\" 1194389 - 4395 2018",
        "Sasikala D, Girija Vasumathi G G Optimized Association Rule Mining International Journal of Innovations and Advancement in Computer Science 66 263 \u2013 270 2017",
        "Sasikala D, Premalatha K Pxml-Miner: \"A Projection-Based Interesting Xml Rule Mining Technique Data Science Journal\" 13 4 12 \u2013 25 2014",
        "Sasikala D, Premalatha K \"Xml Document Classification by Frequent Itemset Mining on Metonymy Tree in the International Review on Computers and Softwar\"E 9 5 838 \u2013 841 2014"
      ]
    };
  }

  // 2. Generic generator for other faculty members
  const isPhD = name.includes("Dr.");
  const startYear = isPhD ? 2007 : 2015;
  
  return {
    experience: [
      { type: "Engineering", organization: "Bannari Amman Institute of Technology, Sathyamangalam", from: `02.06.${startYear + 6}`, to: "Present", total: `${2026 - (startYear + 6)} Year(s)` },
      { type: "Engineering", organization: "Velalar College of Engineering and Technology", from: `05.06.${startYear + 2}`, to: `30.04.${startYear + 5}`, total: "3 Year(s)" }
    ],
    credentials: [
      { degree: isPhD ? "B.E" : "B.Tech", specialization: "Computer Science and Engineering", institute: "Anna University Affiliated College", university: "Anna University", year: `${startYear}` },
      { degree: isPhD ? "M.E" : "M.Tech", specialization: "Computer Science and Engineering", institute: "Anna University Affiliated College", university: "Anna University", year: `${startYear + 3}` },
      ...(isPhD ? [{ degree: "Ph.D", specialization: "Information and Communication Engg", institute: "Anna University Campus", university: "Anna University, Chennai", year: `${startYear + 8}` }] : [])
    ],
    publications: [
      `${name.replace("Dr. ", "").replace("Mrs. ", "").replace("Mr. ", "")}, "Advanced Machine Learning Models for Multi-Modal Medical Image Segments", IEEE Access, 2025.`,
      `${name.replace("Dr. ", "").replace("Mrs. ", "").replace("Mr. ", "")}, "Deep Learning Neural Network Architectures for Cyber-Physical Edge Computing", Springer Journal of Soft Computing, 2024.`,
      `${name.replace("Dr. ", "").replace("Mrs. ", "").replace("Mr. ", "")}, "Optimized IoT Sensors Orchestration using Genetic Meta-Heuristics", International Journal of Intelligent Systems, 2023.`
    ]
  };
};

export default function DepartmentPageClient({ dept, extended }) {
  const [activeTab, setActiveTab] = useState("about");
  const [publicationSearch, setPublicationSearch] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [modalTab, setModalTab] = useState("experience");

  const menuGroups = [
    {
      title: "General Info",
      items: [
        { id: "about", label: "Department Overview" },
        { id: "vision-mission", label: "Vision & Mission" },
        { id: "peos", label: "Educational Objectives (PEOs)" },
        { id: "programmes", label: "Programmes & Syllabus" }
      ]
    },
    {
      title: "Faculty & Staff",
      items: [
        { id: "faculty-list", label: "Faculty Members" },
        { id: "supporting-staff", label: "Supporting Staff" },
        { id: "phd-pursuing", label: "Ph.D. Pursuing Faculty" }
      ]
    },
    {
      title: "Infrastructure",
      items: [
        { id: "labs", label: "Laboratories" }
      ]
    },
    {
      title: "Research & Consultancy",
      items: [
        { id: "projects", label: "Funded Projects" },
        { id: "mous", label: "MoU Signed" },
        { id: "consultancy", label: "Consultancy Services" },
        { id: "publications", label: "Research Publications" },
        { id: "societies", label: "Societies & Chapters" }
      ]
    }
  ];

  // Helper to flat list for mobile navigation selector
  const allItems = menuGroups.reduce((acc, group) => [...acc, ...group.items], []);

  // Filter publications
  const filteredPublications = extended.publications.filter(pub =>
    pub.citation.toLowerCase().includes(publicationSearch.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Sidebar Navigation */}
      <div className="lg:col-span-3 lg:sticky lg:top-28 z-20">
        
        {/* Mobile Sub-Navigation Dropdown Selector */}
        <div className="lg:hidden mb-8">
          <label htmlFor="dept-section-select" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Select Section
          </label>
          <div className="relative">
            <select
              id="dept-section-select"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-800 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 appearance-none"
            >
              {allItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Sidebar Panel */}
        <div className="hidden lg:block bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
          {menuGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-2">
              <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase block pl-3">
                {group.title}
              </span>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-between group ${
                        isActive
                          ? "bg-brand-blue text-white shadow-md shadow-brand-blue/10 translate-x-1"
                          : "text-slate-650 hover:bg-slate-50 hover:text-brand-blue"
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isActive
                            ? "translate-x-0.5 text-white"
                            : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 text-brand-blue"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Area Panel */}
      <div className="lg:col-span-9 min-w-0 space-y-8">
        
        {/* Dynamic Section Renderer */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10 min-h-[500px]">
          
          {/* 1. OVERVIEW / ABOUT */}
          {activeTab === "about" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Department Overview
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
                <p className="text-slate-600 leading-relaxed font-semibold text-base sm:text-lg">
                  Welcome to the Department of {dept.name} at Bannari Amman Institute of Technology.
                </p>
                <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base mt-4">
                  Established in the year {dept.established}, the department has consistently driven research-centric learning and tech-enabled product innovation. Under an industry-aligned Choice Based Credit System (CBCS), we prepare students with the practical coding and design capabilities needed for next-generation systems.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Affiliation</span>
                  <span className="text-sm font-bold text-slate-800">Anna University</span>
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Accreditation</span>
                  <span className="text-sm font-bold text-emerald-650">{dept.nbaAccredited ? "NBA Accredited" : "AICTE Approved"}</span>
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Curriculum</span>
                  <span className="text-sm font-bold text-slate-800">Autonomous (CBCS)</span>
                </div>
              </div>

              {dept.highlights && (
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-4">Key Department Highlights</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {dept.highlights.map((h, idx) => (
                      <div key={idx} className="flex gap-4 items-start bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                        <div className="w-6 h-6 rounded-lg bg-brand-blue/5 text-brand-blue font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">{h}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. VISION & MISSION */}
          {activeTab === "vision-mission" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Vision &amp; Mission
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <h3 className="font-black text-slate-900 text-lg sm:text-xl mb-3 flex items-center gap-2 text-brand-blue">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Vision Statement
                </h3>
                <p className="text-slate-650 leading-relaxed font-semibold text-sm sm:text-base">
                  {dept.vision}
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <h3 className="font-black text-slate-900 text-lg sm:text-xl mb-4 flex items-center gap-2 text-brand-orange">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Mission Statements
                </h3>
                <ul className="space-y-4">
                  {dept.mission.map((m, idx) => (
                    <li key={idx} className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 mt-1.5"></span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 3. PEOs */}
          {activeTab === "peos" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Program Educational Objectives (PEOs)
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                  PEOs represent the professional goals our graduates are expected to achieve within 3 to 5 years after completing their degree.
                </p>
              </div>

              <div className="space-y-4">
                {extended.peos.map((peo, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 rounded-xl bg-brand-purple/5 text-brand-purple flex items-center justify-center shrink-0 font-extrabold text-sm border border-brand-purple/10">
                      PEO-{idx + 1}
                    </div>
                    <p className="text-slate-650 text-xs sm:text-sm font-bold leading-relaxed pt-1.5">
                      {peo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. PROGRAMMES & SYLLABUS */}
          {activeTab === "programmes" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Programmes &amp; Curriculum Syllabus
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Program Offered</span>
                  <h3 className="text-xl font-extrabold text-slate-950">{extended.programmes.name}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200/60">
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Duration</span>
                    <p className="text-slate-800 text-sm font-extrabold">{extended.programmes.duration}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Annual Intake</span>
                    <p className="text-slate-800 text-sm font-extrabold">{extended.programmes.seats} Seats</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Eligibility Criteria</span>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed mt-1">
                    {extended.programmes.eligibility}
                  </p>
                </div>

                {/* PDF Curriculum Link */}
                <div className="pt-6 border-t border-slate-200/60 flex flex-wrap gap-4 items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-700 block">Choice Based Credit System Curriculum</span>
                    <span className="text-[10px] text-slate-500 font-semibold">Includes syllabus details, credits distribution &amp; exam patterns</span>
                  </div>
                  <a
                    href={extended.programmes.curriculumLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-extrabold shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
                    onClick={(e) => {
                      // Prevent broken link failures in demo by alert
                      e.preventDefault();
                      alert(`Downloading Curriculum Syllabus PDF for ${dept.code} (Regulation R-2023)...`);
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Syllabus (PDF)
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 5. FACULTY LIST */}
          {activeTab === "faculty-list" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                  Faculty Directory
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mb-4">
                  Eminent professors, doctorates, and specialized domain advisors driving research-centric instruction.
                </p>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
              </div>

              {/* Premium HOD Showcase Panel */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/80 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start w-full mb-12 relative overflow-hidden">
                {/* Background decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none"></div>
                
                {/* Left: Large Photo Frame */}
                <div className="w-44 h-52 sm:w-48 sm:h-56 rounded-2xl bg-white border-2 border-brand-blue/10 overflow-hidden relative shrink-0 shadow-md transition-transform duration-300 hover:scale-[1.02]">
                  {dept.hod.image ? (
                    <img 
                      src={dept.hod.image} 
                      alt={dept.hod.name} 
                      className="absolute inset-0 w-full h-full object-cover object-top" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-extrabold text-slate-500 text-xs bg-slate-100">
                      [Photo]
                    </div>
                  )}
                </div>

                {/* Right: HOD Profile & Info */}
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <span className="inline-flex px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-black text-[10px] uppercase tracking-wider mb-2">
                      Head of Department
                    </span>
                    <h3 className="font-black text-slate-900 text-2xl sm:text-3xl tracking-tight leading-none mt-1">
                      {dept.hod.name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider mt-2">
                      {dept.hod.designation}
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-3">
                      <button 
                        onClick={() => { setSelectedFaculty({ name: dept.hod.name, designation: dept.hod.designation, qualification: "Ph.D.", email: dept.hod.email, image: dept.hod.image || "https://www.bitsathy.ac.in/wp-content/uploads/2022/10/Dr-Sasikala-D.png", research: "Machine Learning & AI" }); setModalTab("experience"); }}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-blue text-white font-extrabold text-xs shadow-sm hover:shadow-md hover:bg-brand-blue/95 transition-all cursor-pointer"
                      >
                        View Complete Profile
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Short message / quote */}
                  <blockquote className="text-slate-600 italic text-sm sm:text-base leading-relaxed pl-4 border-l-4 border-brand-blue/30 py-1 font-medium max-w-3xl">
                    "Welcome to the Department of {dept.name}. We are committed to fostering an ecosystem of academic excellence, hands-on software development capabilities, and research innovation that empowers students to lead in a technology-driven world."
                  </blockquote>

                  {/* Contact & Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-200/80 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Email Address</span>
                        <a href={`mailto:${dept.hod.email}`} className="text-xs sm:text-sm font-bold text-slate-800 hover:text-brand-blue transition-colors">
                          {dept.hod.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Primary Research Focus</span>
                        <span className="text-xs sm:text-sm font-bold text-slate-800">
                          {dept.hod.designation.includes("CSE") || dept.name.includes("Computer") || dept.name.includes("Artificial") ? "Machine Learning & Soft Computing" : "Advanced Systems Research"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Faculty Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dept.faculty.map((member, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => { setSelectedFaculty(member); setModalTab("experience"); }}
                    className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/70 p-4 sm:p-5 flex gap-5 items-center cursor-pointer transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 group"
                  >
                    <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative shrink-0 shadow-sm">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="absolute inset-0 w-full h-full object-cover object-top" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-extrabold text-slate-400 text-xs bg-slate-100">
                          [Photo]
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h4 className="font-extrabold text-slate-900 text-sm truncate group-hover:text-brand-blue transition-colors">
                          {member.name}
                        </h4>
                        <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-bold text-[8px] uppercase tracking-wide shrink-0">
                          {member.qualification}
                        </span>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        {member.designation}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10.5px] text-brand-blue font-bold group-hover:underline">
                        View Details
                        <svg className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. SUPPORTING STAFF */}
          {activeTab === "supporting-staff" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Supporting Staff
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
                <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                  Meet our technical lab assistants and administrative support staff keeping all research cells and machines running.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left w-16">S.No</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Staff Name</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Designation</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Qualification</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Experience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {extended.supportingStaff.map((staff, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-slate-500">{idx + 1}</td>
                        <td className="px-6 py-4 text-sm font-black text-slate-900">{staff.name}</td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-650">{staff.designation}</td>
                        <td className="px-6 py-4 text-xs font-extrabold text-slate-500 uppercase">{staff.qualification}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-slate-600">{staff.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 7. PHD PURSUING FACULTY */}
          {activeTab === "phd-pursuing" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Faculty Pursuing Ph.D.
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
                <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                  List of department faculty members upgrading their scholarly credentials through active Ph.D. research.
                </p>
              </div>

              {extended.phdPursuing.length > 0 ? (
                <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left w-16">S.No</th>
                        <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Faculty Name</th>
                        <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">University</th>
                        <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Research Domain</th>
                        <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Supervisor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {extended.phdPursuing.map((fac, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 text-sm font-bold text-slate-500">{idx + 1}</td>
                          <td className="px-6 py-4 text-sm font-black text-slate-900">{fac.name}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-slate-600">{fac.university}</td>
                          <td className="px-6 py-4 text-sm font-bold text-slate-650">{fac.researchArea}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-slate-500">Dr. {fac.supervisor.replace("Dr. ", "")}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-12 text-center border border-dashed border-slate-200 rounded-3xl bg-slate-50">
                  <p className="text-slate-500 font-bold text-sm">All faculty members in this department hold doctoral (Ph.D.) qualifications.</p>
                </div>
              )}
            </div>
          )}

          {/* 8. LABORATORIES */}
          {activeTab === "labs" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Laboratory Infrastructure
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                  Explore our fully equipped experimental training facilities outfitted with specialized equipment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dept.labs.map((lab, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="font-black text-slate-800 text-base mb-2">{lab.name}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">{lab.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 9. FUNDED PROJECTS */}
          {activeTab === "projects" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Funded Research Projects
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
                <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                  List of research grants received by the department faculty supervisors from statutory councils and central ministries.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left w-16">S.No</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Principal Investigator (PI)</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Project Title</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Funding Body</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Grant Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {extended.fundedProjects.map((proj, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-slate-500">{idx + 1}</td>
                        <td className="px-6 py-4 text-sm font-black text-slate-900">{proj.pi}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-slate-600 leading-relaxed">{proj.title}</td>
                        <td className="px-6 py-4 text-xs font-extrabold text-brand-blue uppercase">{proj.agency}</td>
                        <td className="px-6 py-4 text-sm font-black text-emerald-650">{proj.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 10. MOUS */}
          {activeTab === "mous" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Memorandum of Understanding (MoU)
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
                <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                  Collaborative pacts signed with global corporations to steer specialized labs, internships, and curriculum audits.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left w-16">S.No</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Industry Partner</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Collaborative Scope &amp; Outcomes</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left w-36">Signed Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {extended.mous.map((mou, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-slate-500">{idx + 1}</td>
                        <td className="px-6 py-4 text-sm font-black text-slate-900">{mou.company}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-slate-650 leading-relaxed">{mou.outcomes}</td>
                        <td className="px-6 py-4 text-xs font-extrabold text-slate-500">{mou.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 11. CONSULTANCY */}
          {activeTab === "consultancy" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Consultancy Services
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
                <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                  Industrial consultancy contracts undertaken by our doctoral faculty for regional engineering companies.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left w-16">S.No</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Consulting Faculty</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Client Enterprise</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Contract Value</th>
                      <th className="px-6 py-4 text-xs font-extrabold tracking-wider text-slate-500 uppercase text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {extended.consultancy.map((con, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-slate-500">{idx + 1}</td>
                        <td className="px-6 py-4 text-sm font-black text-slate-900">{con.faculty}</td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-650">{con.client}</td>
                        <td className="px-6 py-4 text-sm font-black text-emerald-650">{con.amount}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-slate-500">{con.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 12. PUBLICATIONS */}
          {activeTab === "publications" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Research Publications
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
                <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed mb-6">
                  Searchable registry of research papers published by department faculty in Scopus and Web of Science indexed journals.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search publications by author or title..."
                  value={publicationSearch}
                  onChange={(e) => setPublicationSearch(e.target.value)}
                  className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/15 transition-all"
                />
                <svg className="w-5 h-5 text-slate-400 absolute left-4 top-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="space-y-4">
                {filteredPublications.length > 0 ? (
                  filteredPublications.map((pub, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-black text-xs flex items-center justify-center shrink-0 border border-emerald-100">
                        {idx + 1}
                      </div>
                      <p className="text-slate-650 text-xs sm:text-sm font-bold leading-relaxed pt-1.5">
                        {pub.citation}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-12 text-center border border-dashed border-slate-200 rounded-3xl bg-slate-50">
                    <p className="text-slate-500 font-bold text-sm">No publication citations matches your query.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 13. SOCIETIES & CHAPTERS */}
          {activeTab === "societies" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Societies &amp; Chapters
                </h2>
                <div className="w-12 h-1 bg-brand-blue rounded-full mb-6"></div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Student Society Association</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-950">{extended.societies.name}</h3>
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Professional Body Chapter</span>
                  <p className="text-slate-800 text-sm font-bold">{extended.societies.chapter}</p>
                </div>
              </div>

              {/* Events lists */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-3">Key Technical Events</h3>
                  {extended.societies.events.map((e, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <h4 className="font-extrabold text-slate-850 text-sm sm:text-base mb-2">{e.name}</h4>
                      <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">{e.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-3">Special Guest Lectures</h3>
                    {extended.societies.guestLectures.map((l, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <span className="text-[9px] font-black text-brand-orange uppercase block mb-1">Speaker</span>
                        <p className="text-slate-800 text-xs sm:text-sm font-black mb-2">{l.speaker}</p>
                        <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">Topic</span>
                        <p className="text-slate-500 text-xs font-semibold leading-relaxed">{l.topic}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-3">Practical Workshops</h3>
                    {extended.societies.workshops.map((w, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <span className="text-[9px] font-black text-brand-blue uppercase block mb-1">Workshop</span>
                        <p className="text-slate-800 text-xs sm:text-sm font-black mb-2">{w.name}</p>
                        <span className="text-[9px] font-black text-slate-400 uppercase block mb-1">Duration</span>
                        <p className="text-slate-500 text-xs font-semibold">{w.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Faculty Details Modal */}
      {selectedFaculty && (() => {
        const detailsData = getFacultyDetailedData(selectedFaculty.name);
        return (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setSelectedFaculty(null)}
            ></div>
            
            {/* Modal Box */}
            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl relative overflow-hidden z-10 border border-slate-200/80 animate-fade-in flex flex-col max-h-[90vh]">
              {/* Header / Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-brand-blue to-brand-purple"></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Profile Overview */}
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                  <div className="w-28 h-36 rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden relative shrink-0 shadow-sm">
                    {selectedFaculty.image ? (
                      <img 
                        src={selectedFaculty.image} 
                        alt={selectedFaculty.name} 
                        className="absolute inset-0 w-full h-full object-cover object-top" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-extrabold text-slate-500 text-xs bg-slate-100">
                        [Photo]
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2 flex-1 min-w-0">
                    <span className="inline-flex px-2.5 py-0.5 rounded bg-brand-blue/5 border border-brand-blue/10 text-brand-blue font-extrabold text-[10px] uppercase tracking-wider">
                      Faculty Member
                    </span>
                    <h3 className="font-black text-slate-900 text-xl sm:text-2xl tracking-tight leading-tight truncate">
                      {selectedFaculty.name}
                    </h3>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        {selectedFaculty.designation}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                      <span className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-650 font-bold text-[9px] uppercase">
                        {selectedFaculty.qualification || "Ph.D."}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-600 pt-1">
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${selectedFaculty.email}`} className="hover:text-brand-blue truncate">{selectedFaculty.email}</a>
                      </div>
                      <div className="flex items-center gap-2 justify-center sm:justify-start">
                        <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Office: {dept.code} Block, SF-{(selectedFaculty.name.length % 5) + 1}02</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-tab switcher inside Modal */}
                <div className="border-t border-slate-200/80 pt-6">
                  <div className="flex border-b border-slate-200/80 mb-6 bg-slate-50 p-1.5 rounded-2xl gap-2">
                    {[
                      { id: "experience", label: "Professional Experience" },
                      { id: "academic", label: "Academic Credentials" },
                      { id: "publications", label: "Journal Publications" }
                    ].map((tab) => {
                      const isTabActive = modalTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setModalTab(tab.id)}
                          className={`flex-1 py-2 px-3 text-center rounded-xl font-bold text-xs transition-all duration-200 cursor-pointer ${
                            isTabActive
                              ? "bg-white text-brand-blue shadow-sm border border-slate-200/50"
                              : "text-slate-500 hover:text-slate-800"
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tab Contents */}
                  <div className="min-h-[220px]">
                    {modalTab === "experience" && (
                      <div className="space-y-3">
                        <div className="overflow-x-auto border border-slate-200/80 rounded-2xl shadow-sm">
                          <table className="w-full text-left text-xs font-semibold text-slate-700 min-w-[500px]">
                            <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 border-b border-slate-200">
                              <tr>
                                <th className="py-3 px-4">Experience Type</th>
                                <th className="py-3 px-4">Organization</th>
                                <th className="py-3 px-4">From</th>
                                <th className="py-3 px-4">To</th>
                                <th className="py-3 px-4">Total Experience</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {detailsData.experience.map((exp, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50">
                                  <td className="py-3.5 px-4 font-bold text-slate-800">{exp.type}</td>
                                  <td className="py-3.5 px-4 leading-normal">{exp.organization}</td>
                                  <td className="py-3.5 px-4 whitespace-nowrap text-slate-500">{exp.from}</td>
                                  <td className="py-3.5 px-4 whitespace-nowrap text-slate-500">{exp.to}</td>
                                  <td className="py-3.5 px-4 text-brand-blue font-bold whitespace-nowrap">{exp.total}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {modalTab === "academic" && (
                      <div className="space-y-3">
                        <div className="overflow-x-auto border border-slate-200/80 rounded-2xl shadow-sm">
                          <table className="w-full text-left text-xs font-semibold text-slate-700 min-w-[500px]">
                            <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500 border-b border-slate-200">
                              <tr>
                                <th className="py-3 px-4">Degree</th>
                                <th className="py-3 px-4">Specialization</th>
                                <th className="py-3 px-4">Institute</th>
                                <th className="py-3 px-4">University</th>
                                <th className="py-3 px-4 text-center">Year of Passing</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {detailsData.credentials.map((cred, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50">
                                  <td className="py-3.5 px-4 font-bold text-slate-800">{cred.degree}</td>
                                  <td className="py-3.5 px-4 leading-normal">{cred.specialization}</td>
                                  <td className="py-3.5 px-4 leading-normal text-slate-650">{cred.institute}</td>
                                  <td className="py-3.5 px-4 leading-normal text-slate-550">{cred.university}</td>
                                  <td className="py-3.5 px-4 text-center text-brand-blue font-bold whitespace-nowrap">{cred.year}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {modalTab === "publications" && (
                      <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                        {detailsData.publications.map((pub, idx) => (
                          <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs font-semibold text-slate-700 leading-relaxed shadow-sm hover:border-slate-300 transition-colors">
                            <div className="flex gap-3">
                              <span className="w-6 h-6 rounded-full bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-[10px] font-black text-brand-blue shrink-0">
                                {idx + 1}
                              </span>
                              <p className="flex-1 leading-normal">{pub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
                  <button 
                    onClick={() => setSelectedFaculty(null)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a 
                    href={`mailto:${selectedFaculty.email}`}
                    className="px-5 py-2.5 rounded-xl bg-brand-blue text-white text-xs font-extrabold hover:bg-brand-blue/90 shadow-sm transition-transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
}
