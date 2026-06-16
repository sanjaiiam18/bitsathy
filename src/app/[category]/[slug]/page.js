"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";
import { siteContent } from "@/data/siteContent";

export default function DynamicSubpage({ params }) {
  // Unwrap params in client components
  const { category, slug } = React.use(params);
  const path = `/${category}/${slug}`;

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isPreview = typeof window !== "undefined" && window.location.search.includes("preview=true");
    const fetchUrl = `/api/content?path=${encodeURIComponent(path)}${isPreview ? "&preview=true" : ""}`;
    
    // Fetch from database content API
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
              id: sec.id,
              title: sec.title || "",
              subtitle: sec.subtitle || "",
              desc: sec.desc || "",
              image: sec.image_url || sec.image || "",
              video: sec.video_url || sec.video || "",
              btnText: sec.btn_text || sec.btnText || "",
              btnUrl: sec.btn_url || sec.btnUrl || "",
              section_order: sec.section_order,
              alignment: sec.alignment || "left",
              layout_type: sec.layout_type || "standard",
              titleAlign: sec.title_align || sec.titleAlign || "left",
              titleColor: sec.title_color || sec.titleColor || "",
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

    // Real-time custom preview events listener
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
            id: sec.id,
            title: sec.title || "",
            subtitle: sec.subtitle || "",
            desc: sec.desc || "",
            image: sec.image_url || sec.image || "",
            video: sec.video_url || sec.video || "",
            btnText: sec.btn_text || sec.btnText || "",
            btnUrl: sec.btn_url || sec.btnUrl || "",
            section_order: sec.section_order,
            alignment: sec.alignment || "left",
            layout_type: sec.layout_type || "standard",
            titleAlign: sec.title_align || sec.titleAlign || "left",
            titleColor: sec.title_color || sec.titleColor || "",
          })),
        });
      }
    };

    window.addEventListener("bit_preview_update", handlePreviewUpdate);
    return () => window.removeEventListener("bit_preview_update", handlePreviewUpdate);
  }, [path]);

  const loadStaticFallback = () => {
    const categoryData = siteContent[category];
    if (categoryData && categoryData[slug]) {
      const raw = categoryData[slug];
      setPageData({
        title: raw.title,
        subtitle: raw.subtitle,
        intro: raw.intro,
        metrics: raw.metrics || [],
        contentBlocks: raw.contentBlocks || [],
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen bg-slate-55 flex flex-col items-center justify-center text-slate-800 p-6">
        <h1 className="text-3xl font-black mb-2">454 - Not Found</h1>
        <p className="text-slate-500 font-semibold mb-6">The template is not provisioned or configured.</p>
        <a href="/" className="px-6 py-2.5 bg-brand-blue text-white rounded-xl text-xs font-black uppercase">
          Back Home
        </a>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-3/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[140px] pointer-events-none -z-10" />

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
          <div className="flex-1 flex flex-col items-center justify-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                {category.replace("-", " ")}
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              {pageData.title}
            </h1>
            <p className="text-brand-orange font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-4">
              {pageData.subtitle}
            </p>
            <p className="text-slate-700 max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
              {pageData.intro}
            </p>
          </div>

          <ScrollDownButton className="my-4" />

          {/* Quick indicator cards */}
          {pageData.metrics && pageData.metrics.length > 0 && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mt-6">
              {pageData.metrics.map((metric, idx) => (
                <div key={idx} className="px-6 py-5 rounded-2xl bg-white/75 backdrop-blur-md border border-slate-200/50 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-[1.02] hover:bg-white">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">{metric.value}</span>
                  <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-1.5">{metric.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Dynamic Blocks */}
          <div className="lg:col-span-8 space-y-12">
            {pageData.contentBlocks.map((block, idx) => {
              const isImgLeft = block.layout_type === "image-left";
              const isImgRight = block.layout_type === "image-right" || block.image; // fallback
              const isFullWidth = block.layout_type === "full-width";
              const isTextCenter = block.alignment === "center";
              const isTextRight = block.alignment === "right";

              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/85 shadow-sm hover:shadow-md transition-shadow"
                >
                  {isFullWidth ? (
                    <div className="space-y-6">
                      <div className={`space-y-3.5 ${isTextCenter ? "text-center" : isTextRight ? "text-right" : "text-left"}`}>
                        {block.subtitle && (
                          <span className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                            {block.subtitle}
                          </span>
                        )}
                        <h3 
                          className={`text-xl sm:text-2xl font-extrabold tracking-tight w-full ${
                            block.titleAlign === "center" ? "text-center" : block.titleAlign === "right" ? "text-right" : "text-left"
                          }`}
                          style={{ color: block.titleColor || "inherit" }}
                        >
                          {block.title}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-4">
                          {block.desc}
                        </p>
                        {block.btnText && (
                          <a
                            href={block.btnUrl || "#"}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-orange text-white font-black text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
                          >
                            {block.btnText} ➔
                          </a>
                        )}
                      </div>
                      {block.image && (
                        <div className="relative overflow-hidden rounded-2xl aspect-video border border-slate-200 bg-slate-50 shadow-inner">
                          <img
                            src={block.image}
                            alt={block.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      <div
                        className={`space-y-4.5 ${
                          isImgLeft || isImgRight ? "md:col-span-7" : "md:col-span-12"
                        } ${isImgLeft ? "md:order-2" : ""} ${isTextCenter ? "text-center" : isTextRight ? "text-right" : "text-left"}`}
                      >
                        {block.subtitle && (
                          <span className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                            {block.subtitle}
                          </span>
                        )}
                        <h3 
                          className={`text-xl sm:text-2xl font-extrabold tracking-tight w-full ${
                            block.titleAlign === "center" ? "text-center" : block.titleAlign === "right" ? "text-right" : "text-left"
                          }`}
                          style={{ color: block.titleColor || "inherit" }}
                        >
                          {block.title}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-4">
                          {block.desc}
                        </p>
                        {block.btnText && (
                          <a
                            href={block.btnUrl || "#"}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-orange text-white font-black text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
                          >
                            {block.btnText} ➔
                          </a>
                        )}
                      </div>
                      {(isImgLeft || isImgRight) && block.image && (
                        <div
                          className={`md:col-span-5 relative overflow-hidden rounded-2xl aspect-video border border-slate-200 bg-slate-50 shadow-inner ${
                            isImgLeft ? "md:order-1" : ""
                          }`}
                        >
                          <img
                            src={block.image}
                            alt={block.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side: Key Metrics Box */}
          <div className="lg:col-span-4 sticky top-28 bg-gradient-to-tr from-brand-blue/5 to-slate-100 p-8 sm:p-10 rounded-3xl border border-slate-200">
            <h3 className="font-extrabold text-slate-900 text-xl mb-6 tracking-tight">Key Insights</h3>
            <div className="space-y-8">
              {pageData.metrics.map((metric, idx) => (
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

            {/* Quick Contact CTA */}
            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <p className="text-xs text-slate-500 font-semibold mb-4">Have specific queries about this department or division?</p>
              <a
                href="/contact#admissions"
                className="w-full text-center block px-6 py-3 rounded-xl bg-brand-orange text-white font-bold text-sm shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Enquiry
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
