import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteContent } from "@/data/siteContent";
import { notFound } from "next/navigation";

// Since params is a Promise in Next.js 15/16, we await it.
export default async function DynamicSubpage({ params }) {
  const { category, slug } = await params;

  const categoryData = siteContent[category];
  if (!categoryData) {
    return notFound();
  }

  const pageData = categoryData[slug];
  if (!pageData) {
    return notFound();
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-3/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-purple/5 blur-[140px] pointer-events-none -z-10" />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-tr from-slate-100 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-4">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              {category.replace("-", " ")}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            {pageData.title}
          </h1>
          <p className="text-brand-orange font-extrabold text-sm sm:text-base tracking-widest uppercase mb-4">
            {pageData.subtitle}
          </p>
          <p className="text-slate-650 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-semibold">
            {pageData.intro}
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Dynamic Blocks */}
          <div className="lg:col-span-8 space-y-12">
            {pageData.contentBlocks.map((block, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200/85 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  {block.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {block.desc}
                </p>
              </div>
            ))}
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

// Generate static params for all dynamic routes at build time
export async function generateStaticParams() {
  const paths = [];
  
  Object.keys(siteContent).forEach((category) => {
    // Only category keys that are dictionaries (skip top-level pages like gurugulam and product-innovation-centre)
    if (typeof siteContent[category] === "object" && !siteContent[category].title) {
      Object.keys(siteContent[category]).forEach((slug) => {
        paths.push({
          category,
          slug,
        });
      });
    }
  });

  return paths;
}
