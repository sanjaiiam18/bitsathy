"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DeanAdministration() {
  const responsibilities = [
    { title: "Governance Coordination", desc: "Coordinating statutory bodies such as the Governing Council, Finance Committee, and administrative regulatory bodies." },
    { title: "Quality Assurance (IQAC)", desc: "Enforcing systems to maintain academic quality standards, leading ISO, NAAC, and NBA accreditation cycles." },
    { title: "Student Welfare & PDS", desc: "Overseeing student affairs, campus safety, hostels, medical facilities, and the Student Affairs council." },
    { title: "Infrastructure & Incubation", desc: "Steering campus development initiatives, green energy grids, and backing startups through the Technology Business Incubator (BIT-TBI)." }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-2/4 right-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-tr from-slate-100 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-4">
            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">
              Executive Desk
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Dean — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Administration</span>
          </h1>
          <p className="text-slate-655 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-semibold">
            Administrative coordination, strategic planning, and quality initiatives led by Dr. K. Sivakumar.
          </p>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Dean Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 text-center">
              <div className="aspect-[4/5] w-full rounded-2xl bg-slate-150 flex items-center justify-center border border-slate-200 relative mb-6 overflow-hidden">
                <img
                  src="https://www.bitsathy.ac.in/wp-content/uploads/Dean-Administration.jpg"
                  alt="Dr. K. Sivakumar - Dean Administration, Bannari Amman Institute of Technology"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xl">Dr. K. Sivakumar</h3>
              <p className="text-brand-purple font-bold text-xs uppercase tracking-wider mt-1">Dean — Administration</p>
              <div className="w-12 h-0.5 bg-brand-purple mx-auto my-4"></div>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold">
                Senior Professor, Department of Mechanical Engineering &amp; Dean (Planning &amp; Development and Student Affairs)
              </p>
            </div>
          </div>

          {/* Core Duties / Statement */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Academic Operations &amp; <span className="text-brand-purple">Strategic Development</span>
              </h2>
              <p className="text-slate-500 leading-relaxed font-semibold text-sm sm:text-base mt-4">
                The Office of Dean - Administration coordinates the policy implementations of the Governing Council and oversees daily campus management, strategic expansion, and student welfare initiatives.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {responsibilities.map((res, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-extrabold text-slate-800 text-base mb-2">{res.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">{res.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200">
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-2">Research and Academic Engagement</h4>
              <p className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed">
                In addition to administrative duties, Dr. K. Sivakumar drives scholarly development. He regularly serves on organizing and advisory boards for national and international engineering conferences and faculty training programs hosted at the institute, fostering a vibrant research ecosystem.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
