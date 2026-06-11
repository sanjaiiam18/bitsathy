"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real Recruiters list
const recruiters = [
  "Amazon", "Zoho Corporation", "TCS", "Cognizant", "Accenture", "IBM", "Deloitte", 
  "Capgemini", "Wipro", "Infosys", "Mindtree", "TVS Motors", "L&T Construction",
  "Robert Bosch", "Hexaware", "Virtusa", "Tech Mahindra", "HCL Technologies",
  "Siemens", "Festo India", "Caterpillar", "Qualcomm", "Texas Instruments", "ABB"
];

// Salary Packages breakdown
const salaryBreakdown = [
  { range: "Above 20 LPA", offers: "05 Offers", color: "bg-amber-500/10 text-amber-700 border-amber-500/20" },
  { range: "Above 15 LPA", offers: "20 Offers", color: "bg-brand-orange/10 text-brand-orange border-brand-orange/20" },
  { range: "Above 10 LPA", offers: "121 Offers", color: "bg-brand-purple/10 text-brand-purple border-brand-purple/20" },
  { range: "Above 7 LPA", offers: "456 Offers", color: "bg-brand-blue/10 text-brand-blue border-brand-blue/20" },
  { range: "Above 5 LPA", offers: "742 Offers", color: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20" },
  { range: "Above 4 LPA", offers: "1,218 Offers", color: "bg-slate-100 text-slate-700 border-slate-200" }
];

// Sector-wise distribution
const sectors = [
  { name: "Core Engineering & Circuits", ratio: "33.9%", desc: "Direct placements in manufacturing, automotive, energy, and semiconductor fabrication plants.", color: "text-brand-orange" },
  { name: "Product-based IT", ratio: "32.1%", desc: "Openings in software engineering, algorithmic design, databases, and product architectures.", color: "text-brand-blue" },
  { name: "Service-based IT", ratio: "30.8%", desc: "Roles in tech services, cloud consulting, DevOps systems, and enterprise development.", color: "text-brand-purple" },
  { name: "Others (Management/Startups)", ratio: "3.1%", desc: "Positions in consulting, business intelligence, operations, and incubator ventures.", color: "text-slate-500" }
];

// Contact roster
const team = [
  { name: "Mr. Ranjith G.", role: "Placement Officer", phone: "9600975790" },
  { name: "Mr. Nirmal Kumar R.", role: "Industry Relations Officer", phone: "9965617722" },
  { name: "Dr. Mathan Kumar P.", role: "Industry Relations Officer", phone: "8344833839" },
  { name: "Mr. Mohan Kumar V.", role: "Assistant Placement Officer", phone: "9597391293" },
  { name: "Mr. Vinoth M.", role: "Assistant Placement Officer", phone: "8523991483" }
];

export default function Placements() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-3/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-tr from-slate-100 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-4">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              Corporate Relations &amp; Placement Cell
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Connecting Talent with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">Global Industry</span>
          </h1>
          <p className="text-slate-650 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-semibold">
            Bannari Amman Institute of Technology bridges academic capability with professional opportunities, 
            delivering record placements and high-caliber salary packages yearly.
          </p>
        </div>
      </section>

      {/* Numerical Stats Widgets */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue">44 LPA</span>
            <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">Highest Package</span>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-orange">317+</span>
            <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">Companies Visited</span>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-purple">2,500+</span>
            <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">Offers Made</span>
          </div>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-center">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-600">95%</span>
            <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">Placement Record</span>
          </div>
        </div>
      </section>

      {/* Salary Breakdown & Sector-wise Distributions */}
      <section className="py-20 bg-slate-100/50 border-t border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Offers Distribution List */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-orange uppercase block mb-1">
                  Salary Ranges
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Package Distribution Records
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-2">
                  A detailed breakdown of total offers secured by our students grouped by annual salary packages.
                </p>
              </div>

              <div className="space-y-3">
                {salaryBreakdown.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`p-4 rounded-2xl bg-white border flex justify-between items-center transition-all hover:translate-x-1 duration-200 ${item.color}`}
                  >
                    <span className="font-extrabold text-sm sm:text-base text-slate-800">{item.range}</span>
                    <span className="font-black text-sm px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm">{item.offers}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sector-wise Breakdown */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-brand-blue uppercase block mb-1">
                  Sector Allocations
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Recruitment Sector-wise Ratios
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-2">
                  Breakdown of placements across core engineering industries, IT products, and services.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {sectors.map((sector, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-black text-slate-800 text-sm sm:text-base leading-tight max-w-[70%]">
                        {sector.name}
                      </h4>
                      <span className={`text-2xl font-black ${sector.color}`}>{sector.ratio}</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">
                      {sector.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Prominent Recruiters */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Prominent Recruiters</h2>
          <p className="text-slate-500 text-sm font-semibold mt-2">Connecting graduates with premier domestic and global corporations.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {recruiters.map((rec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brand-blue hover:text-brand-blue hover:bg-brand-blue/5 transition-all text-center font-bold text-slate-700 text-xs sm:text-sm cursor-default flex items-center justify-center min-h-[72px]"
            >
              {rec}
            </div>
          ))}
        </div>
      </section>

      {/* Placement Cell Roster & Contacts */}
      <section className="py-20 bg-slate-100/50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10">
                <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">
                  Recruitment Inquiries
                </span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Connect with the Placement Office
              </h2>
              <p className="text-slate-650 text-sm font-semibold leading-relaxed">
                Recruiters interested in hosting on-campus drives, joint collaborations, or internship hiring programs can directly contact our placement relations officers.
              </p>
              
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm inline-flex items-center gap-3">
                <svg className="w-5 h-5 text-brand-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Official Placement Email</p>
                  <a href="mailto:placement@bitsathy.ac.in" className="text-brand-blue hover:underline text-sm font-extrabold">
                    placement@bitsathy.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Roster Grid */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <h3 className="font-black text-slate-900 text-lg mb-6 border-b border-slate-100 pb-3">
                Placement Relations Officer Directory
              </h3>
              
              <div className="space-y-4">
                {team.map((member, idx) => (
                  <div key={idx} className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">{member.name}</h4>
                      <p className="text-slate-500 text-xs font-bold mt-0.5">{member.role}</p>
                    </div>
                    
                    <a 
                      href={`tel:${member.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-brand-blue hover:text-white transition-all text-xs font-extrabold"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 {member.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
