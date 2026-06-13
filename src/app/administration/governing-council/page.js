"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";

export default function GoverningCouncil() {
  const members = [
    {
      name: "Thiru S. V. Balasubramaniam",
      role: "Chairman",
      category: "Nominated by the Trust",
      designation: "Managing Trustee, Bannariamman Educational Trust & Chairman, Bannari Amman Group"
    },
    {
      name: "Dr. C. Palanisamy",
      role: "Member Secretary",
      category: "Principal of the College",
      designation: "Principal, Bannari Amman Institute of Technology"
    },
    {
      name: "Thiru B. Saravanan",
      role: "Member",
      category: "Nominated by the Trust",
      designation: "Trustee, Bannariamman Educational Trust & Managing Director, Bannari Amman Sugars Ltd"
    },
    {
      name: "Padma Shri D. R. Kaarthikeyan",
      role: "Member",
      category: "Nominated by the Trust",
      designation: "Former Director, Central Bureau of Investigation (CBI)"
    },
    {
      name: "Mr. Rashmikant Joshi",
      role: "Member",
      category: "Nominated by the Management",
      designation: "Managing Director, Festo India Private Limited"
    },
    {
      name: "Mr. R. Chellappan",
      role: "Member",
      category: "Nominated by the Management",
      designation: "Managing Director, SWELECT Energy Systems Limited"
    },
    {
      name: "Dr. R. Vidhyapriya",
      role: "Member",
      category: "University Nominee",
      designation: "Professor, Department of Biomedical Engineering, PSG College of Technology"
    },
    {
      name: "Dr. S. Rathi",
      role: "Member",
      category: "Nominated by State Government",
      designation: "Professor, Department of Computer Science and Engineering, Government College of Technology"
    },
    {
      name: "Dr. K. Sivakumar",
      role: "Member",
      category: "Faculty Representative",
      designation: "Senior Professor, Mechanical Engineering & Dean (Planning & Development and Student Affairs), BIT"
    }
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
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                Statutory Board
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Governing <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Council</span>
            </h1>
            <p className="text-slate-700 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
              The Governing Council is the apex statutory body overseeing administrative policy, industrial collaborations, and strategic initiatives to establish the highest pedagogical standards.
            </p>
          </div>

          <ScrollDownButton className="my-4" />

          {/* Quick statutory pillars */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mt-6">
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">UGC</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Compliance Regulations</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Trustees</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Industrial Management</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Affiliation</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">University Nomination</span>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          
          <div className="p-8 border-b border-slate-150">
            <h2 className="text-2xl font-extrabold text-slate-900">Council Members</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">
              Constituted in accordance with the guidelines prescribed by UGC and AICTE.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-150 text-slate-650 text-xs font-extrabold tracking-wider uppercase">
                  <th className="px-6 py-4 sm:px-8">Name</th>
                  <th className="px-6 py-4">Council Designation</th>
                  <th className="px-6 py-4">Representation / Category</th>
                  <th className="px-6 py-4 sm:pr-8">Professional Designation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-150 font-semibold text-slate-700 text-xs sm:text-sm">
                {members.map((member, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/30 transition-colors"
                  >
                    <td className="px-6 py-5 sm:px-8 font-extrabold text-slate-900">
                      {member.name}
                    </td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold leading-none ${
                        member.role === "Chairman"
                          ? "bg-brand-blue/10 text-brand-blue"
                          : member.role === "Member Secretary"
                            ? "bg-brand-orange/10 text-brand-orange"
                            : "bg-slate-100 text-slate-650"
                      }`}>
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-slate-500 font-bold">
                      {member.category}
                    </td>
                    <td className="px-6 py-5 text-slate-550 sm:pr-8 font-medium">
                      {member.designation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
