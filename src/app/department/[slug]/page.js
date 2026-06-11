import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { departmentsContent } from "@/data/departmentsContent";
import Link from "next/link";
import { notFound } from "next/navigation";

// Enable static generation for all departments
export async function generateStaticParams() {
  return Object.keys(departmentsContent).map((slug) => ({
    slug: slug,
  }));
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const dept = departmentsContent[slug];

  if (!dept) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-2/4 right-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-tr from-slate-100 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Link href="/academics" className="text-xs font-bold text-brand-blue hover:underline">
              Academics
            </Link>
            <span className="text-slate-400 text-xs">/</span>
            <span className="text-slate-500 text-xs font-bold">{dept.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-4">
                <span className="text-xs font-extrabold tracking-widest text-brand-blue uppercase">
                  Department Code: {dept.code}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                Department of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">{dept.name}</span>
              </h1>
              
              {/* NBA Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {dept.nbaAccredited ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-550/10 text-emerald-600 border border-emerald-550/20">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    NBA Accredited
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-500 border border-slate-200">
                    AICTE Approved
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                  Estd: {dept.established}
                </span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1">Intake</p>
                <p className="font-black text-slate-900 text-lg sm:text-xl">{dept.intake}</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1">Labs</p>
                <p className="font-black text-slate-900 text-lg sm:text-xl">{dept.labsCount}</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1">Placement</p>
                <p className="font-black text-emerald-600 text-lg sm:text-xl">{dept.placementRatio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Vision/Mission, Highlights, Labs */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Vision and Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-black text-slate-900 text-xl mb-4 flex items-center gap-2 text-brand-blue">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Vision
                </h3>
                <p className="text-slate-550 leading-relaxed font-semibold text-sm sm:text-base">
                  {dept.vision}
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-black text-slate-900 text-xl mb-4 flex items-center gap-2 text-brand-orange">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Mission
                </h3>
                <ul className="space-y-3">
                  {dept.mission.map((item, idx) => (
                    <li key={idx} className="text-slate-550 text-xs sm:text-sm font-semibold leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Department Highlights */}
            <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200">
              <h3 className="font-black text-slate-900 text-xl mb-6">Key Highlights &amp; Accomplishments</h3>
              <div className="space-y-4">
                {dept.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 text-brand-blue flex items-center justify-center shrink-0 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <p className="text-slate-650 text-sm font-semibold leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure & Lab Facilities */}
            <div>
              <h3 className="font-black text-slate-900 text-2xl mb-2">State-of-the-Art Laboratories</h3>
              <p className="text-slate-500 text-xs sm:text-sm font-semibold mb-8">
                Equipped with specialized equipment and software systems to nurture practical learning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dept.labs.map((lab, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/85 shadow-sm">
                    <h4 className="font-black text-slate-800 text-base mb-2">{lab.name}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">{lab.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: HOD Profile, Recruiters, Accreditation Info */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* HOD Profile Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-slate-300/80">
              <h4 className="font-black text-slate-900 text-base mb-4 text-left border-b border-slate-100 pb-2">
                Head of the Department
              </h4>
              <div className="aspect-[4/5] w-full rounded-2xl bg-slate-150 flex items-center justify-center border border-slate-200 relative mb-6 overflow-hidden">
                {dept.hod.image ? (
                  <img
                    src={dept.hod.image}
                    alt={`${dept.hod.name} - Head of the Department of ${dept.name}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <>
                    <span className="text-slate-500 font-extrabold text-sm text-center px-4">
                      [Image: {dept.hod.name}]
                    </span>
                    {/* Fallback alt image structure as requested */}
                    <img
                      src={`/images/hod/hod_${dept.id}.jpg`}
                      alt={`${dept.hod.name} - Head of the Department of ${dept.name}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0"
                    />
                  </>
                )}
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">{dept.hod.name}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1">{dept.hod.designation}</p>
              
              <div className="w-12 h-0.5 bg-slate-200 mx-auto my-4"></div>
              
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-brand-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${dept.hod.email}`} className="text-brand-blue hover:underline text-xs font-extrabold truncate">
                  {dept.hod.email}
                </a>
              </div>
            </div>

            {/* NBA Detail Card */}
            {dept.nbaAccredited && (
              <div className="p-6 rounded-3xl bg-gradient-to-tr from-emerald-50 to-white border border-emerald-250/50">
                <h4 className="font-black text-emerald-800 text-sm sm:text-base mb-2">Accreditation Details</h4>
                <p className="text-emerald-700 text-xs sm:text-sm font-semibold leading-relaxed">
                  {dept.nbaPeriod}
                </p>
              </div>
            )}

            {/* Recruiters Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <h4 className="font-black text-slate-900 text-base mb-4 border-b border-slate-100 pb-2">
                Top Recruiters
              </h4>
              <div className="flex flex-wrap gap-2">
                {dept.recruiters.map((recruiter, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-650 text-xs font-extrabold rounded-xl">
                    {recruiter}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Faculty Members Section */}
      {dept.faculty && (
        <section className="py-20 bg-slate-100/50 border-t border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Department Faculty &amp; Staff
              </h2>
              <p className="text-slate-500 text-sm font-semibold mt-2">
                Meet our core team of academic researchers, professors, and industry-certified domain mentors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {dept.faculty.map((member, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 text-center flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-slate-300/80">
                  <div>
                    {/* Staff Image Container as requested */}
                    <div className="aspect-[4/5] w-full rounded-2xl bg-slate-150 flex items-center justify-center border border-slate-200 relative mb-5 overflow-hidden">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={`${member.name} - ${member.designation}, Department of ${dept.name}`}
                          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <>
                          <span className="text-slate-500 font-extrabold text-xs text-center px-4">
                            [Photo: {member.name}]
                          </span>
                          <img
                            src={`/images/faculty/${dept.id}_fac_${idx}.jpg`}
                            alt={`${member.name} - ${member.designation}, Department of ${dept.name}`}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0"
                          />
                        </>
                      )}
                    </div>

                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <h3 className="font-extrabold text-slate-900 text-base">{member.name}</h3>
                      <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-650 font-extrabold text-[10px] uppercase">
                        {member.qualification}
                      </span>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-3">
                      {member.designation}
                    </p>

                    <p className="text-slate-500 text-xs font-semibold leading-relaxed mb-4">
                      <strong>Focus:</strong> {member.research}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2">
                    <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${member.email}`} className="text-slate-500 hover:text-brand-blue transition-colors text-xs font-bold truncate">
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
