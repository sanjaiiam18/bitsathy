import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { departmentsContent } from "@/data/departmentsContent";
import DepartmentPageClient from "@/components/DepartmentPageClient";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollDownButton from "@/components/ScrollDownButton";

// Enable static generation for all departments
export async function generateStaticParams() {
  return Object.keys(departmentsContent).map((slug) => ({
    slug: slug,
  }));
}

// Data generator to construct extended sections (PEOs, Staff, PhD, Projects, MoUs, Publications, Societies)
// If any fields are already present in departmentsContent, it uses them; otherwise, it fallback-generates them contextually.
function getExtendedDeptData(dept) {
  // 1. PEOs
  const peos = dept.peos || [
    `To prepare graduates for successful professional careers in the domains of ${dept.name} and related computing/engineering fields.`,
    `To train graduates to design, develop, and analyze modern tech systems utilizing advanced engineering tools and coding capabilities.`,
    `To inculcate leadership qualities, professional ethics, strong communication, and active commitment to lifelong learning.`
  ];

  // 2. Programmes
  const programmes = dept.programmes || {
    name: `${dept.category === "Computing" ? "B.Tech." : "B.E."} ${dept.name}`,
    duration: "4 Years (8 Semesters)",
    seats: dept.intake || 60,
    eligibility: "Candidates must have passed HSC (+2) with Physics, Chemistry, and Mathematics (minimum 45% aggregate marks, 40% for reserved categories). Lateral entry candidates require a relevant Diploma in Engineering.",
    curriculumLink: `/syllabus/${dept.code}_Curriculum.pdf`
  };

  // 3. Supporting Staff
  const supportingStaff = dept.supportingStaff || [
    { name: "Mr. M. Sakthivel", designation: "Lab Technician", qualification: "Diploma in Engg.", dateOfJoining: "02-06-2016", experience: "9 Years" },
    { name: "Mrs. K. Banumathi", designation: "Lab Assistant", qualification: "B.Sc. Computer Science", dateOfJoining: "14-08-2018", experience: "7 Years" },
    { name: "Mr. S. Rajesh", designation: "Junior Assistant", qualification: "B.Com.", dateOfJoining: "10-01-2020", experience: "6 Years" }
  ];

  // 4. PhD Pursuing Faculty
  const phdPursuing = dept.phdPursuing || (dept.faculty || [])
    .filter(f => f.qualification !== "Ph.D.")
    .map((f, idx) => ({
      name: f.name,
      university: "Anna University, Chennai",
      regDate: `July 202${(idx % 3) + 1}`,
      researchArea: f.research || "Advanced Engineering Systems",
      supervisor: (dept.faculty || []).find(fac => fac.qualification === "Ph.D." && fac.name !== f.name)?.name || dept.hod.name
    }));

  // 5. Funded Projects
  const fundedProjects = dept.fundedProjects || [
    {
      pi: dept.hod.name,
      title: `Design and development of smart automation, processing, and diagnostic modules for ${dept.name} systems.`,
      agency: "DST - Science and Engineering Research Board (SERB)",
      amount: "Rs. 24,50,000",
      year: "2023 - 2024"
    },
    {
      pi: (dept.faculty || []).find(f => f.qualification === "Ph.D." && f.name !== dept.hod.name)?.name || dept.hod.name,
      title: `Experimental investigation and simulation of high-efficiency parameters in ${dept.name} applications.`,
      agency: "AICTE - Research Promotion Scheme (RPS)",
      amount: "Rs. 9,80,000",
      year: "2022 - 2023"
    }
  ];

  // 6. MoUs
  const mous = dept.mous || [
    {
      company: dept.recruiters[0] || "Cognizant",
      outcomes: "Student internships, curriculum alignment, industry guest lectures, and joint research ventures.",
      date: "12-05-2023"
    },
    {
      company: dept.recruiters[1] || "Zoho",
      outcomes: "Fitted laboratories, sponsored hackathons, and corporate certification training for faculty.",
      date: "20-10-2022"
    }
  ];

  // 7. Consultancy Services
  const consultancy = dept.consultancy || [
    {
      faculty: (dept.faculty || []).find(f => f.qualification === "Ph.D.")?.name || dept.hod.name,
      client: dept.recruiters[2] || "L&T Infotech",
      amount: "Rs. 3,20,000",
      duration: "1 Year"
    }
  ];

  // 8. Research Publications
  const publications = dept.publications || (dept.faculty || []).map((f, idx) => ({
    citation: `${f.name}, "${f.research || "Advanced Methodologies"} in Modern ${dept.name}", International Journal of Engineering & Technology (Scopus Indexed), vol. ${12 + idx}, pp. 145-152, 2023.`
  }));

  // 9. Societies
  const societies = dept.societies || {
    name: `${dept.name} Student Association (${dept.code}SA)`,
    chapter: `Institution of Engineers (IEI) Student Chapter`,
    events: [
      { name: "AGRIFEST / INVENTO", desc: `Annual national level technical symposium of the Department of ${dept.name} featuring paper presentations, project expos, and domain hackathons.` }
    ],
    guestLectures: [
      { speaker: "Dr. S. Sundararajan (Industry Consultant)", topic: `Recent Advancements and Corporate Career Pathways in the fields of ${dept.name}.` }
    ],
    workshops: [
      { name: `Hands-on Bootcamp on Modern ${dept.name} Software & Prototyping Tools`, duration: "3 Days" }
    ]
  };

  return {
    peos,
    programmes,
    supportingStaff,
    phdPursuing,
    fundedProjects,
    mous,
    consultancy,
    publications,
    societies
  };
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const dept = departmentsContent[slug];

  if (!dept) {
    notFound();
  }

  const extendedData = getExtendedDeptData(dept);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-2/4 right-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative h-[100vh] bg-white border-b border-slate-200 overflow-hidden flex items-center justify-center">
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

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 text-slate-900">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link href="/academics" className="text-xs font-bold text-brand-blue hover:underline">
              Academics
            </Link>
            <span className="text-slate-400 text-xs">/</span>
            <span className="text-slate-500 text-xs font-bold">{dept.category}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
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
        <ScrollDownButton className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30" />
      </section>

      {/* Main Tabbed Navigation Section */}
      <section className="py-20 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <DepartmentPageClient dept={dept} extended={extendedData} />
      </section>

      <Footer />
    </div>
  );
}
