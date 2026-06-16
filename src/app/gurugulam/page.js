"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";
import { siteContent } from "@/data/siteContent";

export default function GurugulamPage() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isPreview = typeof window !== "undefined" && window.location.search.includes("preview=true");
    const fetchUrl = `/api/content?path=/gurugulam${isPreview ? "&preview=true" : ""}`;

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.page) {
          setPageData({
            title: data.page.title,
            subtitle: data.page.subtitle,
            intro: data.page.intro,
            metrics: data.page.metrics || [],
            contentBlocks: (data.page.sections || []).map((sec) => ({
              title: sec.title || "",
              desc: sec.desc || "",
              image: sec.image_url || sec.image || "",
            })),
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
          contentBlocks: (newPageData.sections || []).map((sec) => ({
            title: sec.title || "",
            desc: sec.desc || "",
            image: sec.image_url || sec.image || "",
          })),
        });
      }
    };

    window.addEventListener("bit_preview_update", handlePreviewUpdate);
    return () => window.removeEventListener("bit_preview_update", handlePreviewUpdate);
  }, []);

  const loadStaticFallback = () => {
    const raw = siteContent.gurugulam;
    setPageData({
      title: raw.title,
      subtitle: raw.subtitle,
      intro: raw.intro,
      metrics: raw.metrics || [],
      contentBlocks: raw.contentBlocks || [],
    });
  };

  const currentData = pageData || {
    title: siteContent.gurugulam.title,
    subtitle: siteContent.gurugulam.subtitle,
    intro: siteContent.gurugulam.intro,
    metrics: siteContent.gurugulam.metrics || [],
    contentBlocks: siteContent.gurugulam.contentBlocks || [],
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-2/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[140px] pointer-events-none -z-10" />

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
                Flagship Coding Programme
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              {currentData.title}
            </h1>
            <p className="text-brand-purple font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-4">
              {currentData.subtitle}
            </p>
            <p className="text-slate-700 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
              {currentData.intro}
            </p>
          </div>

          <ScrollDownButton className="my-4" />

          {/* Quick indicator cards */}
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

      {/* Content Layout */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Blocks */}
          <div className="lg:col-span-8 space-y-12 reveal-left">
            {currentData.contentBlocks.map((block, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/85 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`grid grid-cols-1 ${block.image ? "md:grid-cols-12 gap-8 items-center" : ""}`}>
                  <div className={block.image ? "md:col-span-7" : ""}>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                      {block.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                      {block.desc}
                    </p>
                  </div>
                  {block.image && (
                    <div className="md:col-span-5 relative overflow-hidden rounded-2xl aspect-video border border-slate-200 bg-slate-50 shadow-inner">
                      <img
                        src={block.image}
                        alt={block.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Metrics */}
          <div className="lg:col-span-4 sticky top-28 bg-gradient-to-tr from-brand-blue/5 to-slate-100 p-8 sm:p-10 rounded-3xl border border-slate-200 reveal-right">
            <h3 className="font-extrabold text-slate-900 text-xl mb-6 tracking-tight">Gurugulam Metrics</h3>
            <div className="space-y-8">
              {currentData.metrics.map((metric, idx) => (
                <div key={idx} className="border-b border-slate-200/70 pb-6 last:border-b-0 last:pb-0">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-blue block mb-1">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <a
                href="/contact#admissions"
                className="w-full text-center block px-6 py-3 rounded-xl bg-brand-orange text-white font-bold text-sm shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Apply for Gurugulam
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
