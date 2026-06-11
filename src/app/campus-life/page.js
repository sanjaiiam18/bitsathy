"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const facilities = [
  { name: "Eco-Friendly Mess", desc: "Pure organic food prepared from ingredients grown directly on the college's organic farms.", icon: "food" },
  { name: "Sports Track", desc: "400m international standard athletic track, indoor badminton courts, and multi-gyms.", icon: "sports" },
  { name: "24/7 Library Hub", desc: "Spacious central library with digital subscription, quiet study rooms, and group discussion hubs.", icon: "book" },
  { name: "Modern Hostels", desc: "Separate secure residential hostels for boys and girls with continuous solar hot water and high speed Wi-Fi.", icon: "home" },
  { name: "Healthcare Centre", desc: "In-house medical officers and pharmacy with 24/7 ambulance support on campus.", icon: "plus" },
  { name: "Transport Facility", desc: "Spacious bus fleet covering all major locations in Erode, Tirupur, and Coimbatore.", icon: "bus" }
];

const clubs = [
  { name: "Coding & Algorithm Club", type: "Technical", desc: "Hosts daily competitive coding sprints, algorand challenges, and hackathon training." },
  { name: "Robotics & Automation Society", type: "Technical", desc: "Collaborates on building drone systems, automation sensors, and robotic arm models." },
  { name: "NCC & NSS Wings", type: "Social Outreach", desc: "Focuses on discipline training, national defense workshops, and local village adoption." },
  { name: "Fine Arts & Drama Club", type: "Cultural", desc: "Provides platforms for dancers, theater artists, public speakers, and creative writers." },
  { name: "Sports & Athletics League", type: "Physical Wellness", desc: "Trains athletes for zonal, state, and national tournaments." }
];

export default function CampusLife() {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-tr from-slate-100 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/5 border border-brand-cyan/10 mb-4">
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
              Campus Life
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Our Vibrant <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">181-Acre Biosphere</span>
          </h1>
          <p className="text-slate-655 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-semibold">
            At BIT Sathy, learning steps outside the classroom. Experience standard-setting residential life, 
            student-run clubs, national hackathons, and green initiatives.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Campus Infrastructure & Amenities</h2>
          <p className="text-slate-500 text-sm font-semibold mt-2">Everything you need for a safe, healthy, and highly productive residential study.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex gap-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                {fac.icon === "food" && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {fac.icon === "sports" && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {fac.icon === "book" && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )}
                {fac.icon === "home" && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )}
                {fac.icon === "plus" && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {fac.icon === "bus" && (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="font-extrabold text-slate-800 text-base mb-1.5">{fac.name}</h3>
                <p className="text-slate-550 text-xs sm:text-sm leading-relaxed font-semibold">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Clubs Section */}
      <section className="py-24 bg-slate-100/50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Student Empowerment Clubs</h2>
            <p className="text-slate-500 text-sm font-semibold mt-2">Nurture leadership and practical talents across our academic and recreational societies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-brand-purple uppercase tracking-wider block mb-2">{club.type}</span>
                  <h3 className="font-extrabold text-slate-800 text-base sm:text-lg mb-3">{club.name}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">{club.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
