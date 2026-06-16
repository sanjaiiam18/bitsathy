"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollDownButton from "@/components/ScrollDownButton";

export default function AdministrationHome() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isPreview = typeof window !== "undefined" && window.location.search.includes("preview=true");
    const fetchUrl = `/api/content?path=/administration${isPreview ? "&preview=true" : ""}`;

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.page) {
          setPageData({
            title: data.page.title,
            subtitle: data.page.subtitle,
            intro: data.page.intro,
            metrics: data.page.metrics || [],
            sections: data.page.sections || [],
          });
        } else {
          loadStaticFallback();
        }
      })
      .catch(() => {
        loadStaticFallback();
      })
      .finally(() => {
        setLoading(false);
      });

    const handlePreviewUpdate = (e) => {
      const isPreview = typeof window !== "undefined" && window.location.search.includes("preview=true");
      if (!isPreview) return;
      const { pageData: newPageData } = e.detail;
      if (newPageData) {
        setPageData({
          title: newPageData.title,
          subtitle: newPageData.subtitle,
          intro: newPageData.intro,
          metrics: newPageData.metrics || [],
          sections: newPageData.sections || [],
        });
      }
    };

    window.addEventListener("bit_preview_update", handlePreviewUpdate);
    return () => window.removeEventListener("bit_preview_update", handlePreviewUpdate);
  }, []);

  const loadStaticFallback = () => {
    setPageData({
      title: "Institutional Leadership Desk",
      subtitle: "Governing Administration",
      intro: "Our governing bodies, administrators, and academic deans work closely to ensure transparent, progressive regulations that place student progress at the center of all actions.",
      metrics: [
        { label: "Strategic Board", value: "Council" },
        { label: "Academic Regulations", value: "Autonomous" },
        { label: "Executive Offices", value: "4 Desks" }
      ],
      sections: [
        { title: "Chairman's Desk", desc: "Read the inspiring vision and educational philosophy from our Chairman, Thiru S. V. Balasubramaniam." },
        { title: "Principal's Desk", desc: "A welcome message from our Principal, Dr. C. Palanisamy, detailing academic excellence and holistic growth." },
        { title: "Governing Council", desc: "Meet the statutory body members driving policy formulation and university governance under AICTE guidelines." },
        { title: "Dean - Administration", desc: "Information regarding the Office of Dean - Administration led by Dr. K. Sivakumar, covering development and student affairs." }
      ]
    });
  };

  const currentData = pageData || {
    title: "Institutional Leadership Desk",
    subtitle: "Governing Administration",
    intro: "Our governing bodies, administrators, and academic deans work closely to ensure transparent, progressive regulations that place student progress at the center of all actions.",
    metrics: [
      { label: "Strategic Board", value: "Council" },
      { label: "Academic Regulations", value: "Autonomous" },
      { label: "Executive Offices", value: "4 Desks" }
    ],
    sections: [
      { title: "Chairman's Desk", desc: "Read the inspiring vision and educational philosophy from our Chairman, Thiru S. V. Balasubramaniam." },
      { title: "Principal's Desk", desc: "A welcome message from our Principal, Dr. C. Palanisamy, detailing academic excellence and holistic growth." },
      { title: "Governing Council", desc: "Meet the statutory body members driving policy formulation and university governance under AICTE guidelines." },
      { title: "Dean - Administration", desc: "Information regarding the Office of Dean - Administration led by Dr. K. Sivakumar, covering development and student affairs." }
    ]
  };

  const baseCards = [
    {
      title: "Chairman's Desk",
      desc: "Read the inspiring vision and educational philosophy from our Chairman, Thiru S. V. Balasubramaniam.",
      href: "/administration/chairmans-desk",
      icon: (
        <svg className="w-8 h-8 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      image: "https://www.bitsathy.ac.in/wp-content/uploads/2022/08/chairman.webp",
      tag: "Leadership"
    },
    {
      title: "Principal's Desk",
      desc: "A welcome message from our Principal, Dr. C. Palanisamy, detailing academic excellence and holistic growth.",
      href: "/administration/principals-desk",
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      image: "https://www.bitsathy.ac.in/wp-content/uploads/Principal-dep.jpg",
      tag: "Academic Desk"
    },
    {
      title: "Governing Council",
      desc: "Meet the statutory body members driving policy formulation and university governance under AICTE guidelines.",
      href: "/administration/governing-council",
      icon: (
        <svg className="w-8 h-8 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      tag: "Statutory Board"
    },
    {
      title: "Dean - Administration",
      desc: "Information regarding the Office of Dean - Administration led by Dr. K. Sivakumar, covering development and student affairs.",
      href: "/administration/dean-administration",
      icon: (
        <svg className="w-8 h-8 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      image: "https://www.bitsathy.ac.in/wp-content/uploads/Dean-Administration.jpg",
      tag: "Executive Desk"
    }
  ];

  const activeCards = [...baseCards];
  if (currentData.sections && currentData.sections.length > 0) {
    currentData.sections.forEach((sec, idx) => {
      if (activeCards[idx]) {
        activeCards[idx] = {
          ...activeCards[idx],
          title: sec.title || activeCards[idx].title,
          desc: sec.desc || activeCards[idx].desc
        };
      }
    });
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Background Blobs */}
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
                {currentData.subtitle}
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              {currentData.title}
            </h1>
            <p className="text-slate-700 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
              {currentData.intro}
            </p>
          </div>

          <ScrollDownButton className="my-4" />

          {/* Quick administration indicator cards */}
          {currentData.metrics && currentData.metrics.length > 0 && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mt-6">
              {currentData.metrics.map((metric, idx) => (
                <div key={idx} className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">{metric.value}</span>
                  <span className="text-xs font-bold text-slate-655 tracking-wider uppercase mt-1.5">{metric.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Grid Menu Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeCards.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className={`p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between reveal-scale ${idx % 2 === 0 ? "delay-75" : "delay-150"}`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-all duration-300 overflow-hidden relative flex items-center justify-center shrink-0">
                    {card.image ? (
                      <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover rounded-2xl" />
                    ) : (
                      card.icon
                    )}
                  </div>
                  <span className="px-3 py-1 text-xs font-extrabold tracking-wider bg-slate-100 text-slate-650 rounded-full uppercase">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-550 leading-relaxed font-semibold text-sm sm:text-base">
                  {card.desc}
                </p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-brand-blue font-bold text-sm">
                <span>View details</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Extra Page Sections */}
      {currentData.sections && currentData.sections.length > 4 && (
        <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {currentData.sections.slice(4).map((sec, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{sec.title}</h3>
              <p className="text-slate-650 text-sm sm:text-base leading-relaxed whitespace-pre-line">{sec.desc}</p>
            </div>
          ))}
        </section>
      )}

      <Footer />
    </div>
  );
}
