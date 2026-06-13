"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";

// Complete catalog of 24 BITSathy campus facilities
const facilitiesData = [
  { name: "Academic Buildings", category: "Academic", desc: "Modern architectural structures housing high-tech classrooms, lecture theatres, and administrative cells.", icon: "academic" },
  { name: "Auditorium", category: "Academic", desc: "An air-conditioned 2,500-seat multi-purpose hall equipped with professional acoustics and stage setups.", icon: "auditorium" },
  { name: "Seminar Halls", category: "Academic", desc: "Multiple air-conditioned board rooms and presentation venues hosting global conferences and industry workshops.", icon: "seminar" },
  { name: "Student Centre", category: "Residential", desc: "A buzzing student lounge, discussion area, and cafeteria center fostering collaborative ideas.", icon: "student_centre" },
  { name: "Boys Hostel", category: "Residential", desc: "Safe and spacious residential campus rooms featuring continuous hot water, high-speed Wi-Fi, and reading hubs.", icon: "hostel" },
  { name: "Ladies Hostel", category: "Residential", desc: "High-security residential facilities with modern rooms, gym facilities, and organic kitchens.", icon: "hostel" },
  { name: "Cafeteria", category: "Utilities", desc: "Hygienic multi-cuisine dining options serving fresh snacks, main courses, and healthy organic juices.", icon: "cafe" },
  { name: "Cooperative Store", category: "Utilities", desc: "An in-house department store stocking all textbook syllabi, stationery, snacks, and daily essentials.", icon: "store" },
  { name: "Laundry", category: "Utilities", desc: "High-efficiency mechanized washing and ironing services catering to all hostellers.", icon: "laundry" },
  { name: "Medical Centre", category: "Sports & Wellness", desc: "An in-campus clinic with certified doctors, pharmacy supplies, and a 24/7 dedicated medical ambulance.", icon: "medical" },
  { name: "Modernized Kitchen", category: "Utilities", desc: "A steam-powered automated kitchen cooking pure organic meals for over 6,000 students daily.", icon: "kitchen" },
  { name: "Staff Quarters", category: "Residential", desc: "Serene residential apartments hosting faculty and staff families in a green enclave.", icon: "staff_quarters" },
  { name: "Transportation", category: "Utilities", desc: "A fleet of 60+ modern buses connecting Sathyamangalam with Erode, Coimbatore, and Tirupur.", icon: "transport" },
  { name: "Data Centre", category: "Tech & Labs", desc: "A high-performance server farm hosting private academic portals, intranet databases, and firewalls.", icon: "datacenter" },
  { name: "Internet Centre", category: "Tech & Labs", desc: "High-speed multi-gigabit fiber terminals providing student access to online global libraries.", icon: "internet" },
  { name: "Special Labs", category: "Tech & Labs", desc: "Centres of Excellence built in collaboration with Intel, TI, IBM, and Siemens.", icon: "labs" },
  { name: "Learning Centre", category: "Academic", desc: "Digital learning resource center supporting research papers and self-paced certifications.", icon: "learning" },
  { name: "Technology Business Incubator", category: "Tech & Labs", desc: "Govt. supported startup incubator facilitating patent filings and venture capital.", icon: "incubator" },
  { name: "RO Plant", category: "Sustainability", desc: "High-output reverse osmosis water filtration facility delivering pure drinking water campus-wide.", icon: "ro" },
  { name: "Solar Panel", category: "Sustainability", desc: "1.2 MW rooftop solar grid installations supplying sustainable green energy to the entire college.", icon: "solar" },
  { name: "Sports & Gym", category: "Sports & Wellness", desc: "International standard 400m track, tennis courts, and multi-station gyms.", icon: "sports" },
  { name: "Yoga Centre", category: "Sports & Wellness", desc: "A quiet, green-view meditation hall supporting mental health and wellness sessions.", icon: "yoga" },
  { name: "Birds Eye View", category: "Sustainability", desc: "A panoramic perspective of our lush 181-acre biosphere tucked into natural enclaves.", icon: "panorama" },
  { name: "Community Radio", category: "Utilities", desc: "BIT FM broadcasting student programs, academic news, and rural agriculture announcements.", icon: "radio" }
];

const ITEMS_PER_PAGE = 12;

export default function CampusLife() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Categories list
  const categories = ["All", "Academic", "Residential", "Utilities", "Tech & Labs", "Sustainability", "Sports & Wellness"];

  // Filter facilities based on search term and category selection
  const filteredFacilities = useMemo(() => {
    return facilitiesData.filter((fac) => {
      const matchesSearch = fac.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            fac.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || fac.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  // Total pages computation
  const totalPages = Math.ceil(filteredFacilities.length / ITEMS_PER_PAGE) || 1;

  // Adjust page number if filters change and current page exceeds total pages
  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredFacilities, totalPages, currentPage]);

  // Paginated chunk
  const paginatedFacilities = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFacilities.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredFacilities, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-2/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[140px] pointer-events-none -z-10" />

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
                Campus Facilities & Infrastructure
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Our Vibrant <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">181-Acre Biosphere</span>
            </h1>
            <p className="text-slate-700 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
              At BIT Sathy, learning steps outside the classroom. Experience standard-setting residential life, cutting-edge laboratories, and green initiatives designed to empower student success.
            </p>
          </div>

          <ScrollDownButton className="my-4" />

          {/* Quick campus indicators */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mt-6">
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">181 Acres</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Lush Green Campus</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">15+ Clubs</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Student Activities</span>
            </div>
            <div className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">90+</span>
              <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">Smart Lecture Halls</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Catalog Dashboard */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Panel */}
        <div className="bg-white p-6 rounded-3xl border border-slate-250/80 shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/10 scale-105"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search facilities..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl border border-slate-250 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/25 focus:border-brand-blue transition-all"
            />
            <svg className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Facilities Grid */}
        {paginatedFacilities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedFacilities.map((fac, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between reveal-scale ${idx % 3 === 0 ? "delay-75" : idx % 3 === 1 ? "delay-150" : "delay-200"}`}
              >
                <div>
                  {/* Facility Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-500">
                      {fac.category}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-brand-cyan/5 border border-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                      {fac.icon === "academic" || fac.icon === "learning" || fac.icon === "seminar" || fac.icon === "auditorium" ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      ) : fac.icon === "hostel" || fac.icon === "student_centre" || fac.icon === "staff_quarters" ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      ) : fac.icon === "labs" || fac.icon === "datacenter" || fac.icon === "internet" || fac.icon === "incubator" ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ) : fac.icon === "solar" || fac.icon === "ro" || fac.icon === "panorama" ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : fac.icon === "sports" || fac.icon === "yoga" ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-800 text-base mb-3 leading-tight">{fac.name}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed mb-6">{fac.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-extrabold text-brand-purple tracking-widest uppercase">Verified Facility</span>
                  <svg className="w-4 h-4 text-slate-350" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-white border border-slate-200/80 rounded-3xl">
            <svg className="w-12 h-12 text-slate-350 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-black text-slate-850 text-base">No Facilities Found</h3>
            <p className="text-slate-450 text-xs font-semibold mt-1">Try tweaking your search term or category filters.</p>
          </div>
        )}

        {/* Pagination controls matching BITSathy 1 2 ▻ */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center transition-all ${
                currentPage === 1 
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg font-black text-xs transition-all ${
                  currentPage === page
                    ? "bg-brand-blue text-white border border-brand-blue"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center transition-all ${
                currentPage === totalPages 
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

      </section>

      <Footer />
    </div>
  );
}
