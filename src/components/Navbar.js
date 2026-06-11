"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown on mobile/hover
  const pathname = usePathname();

  const navigation = [
    {
      name: "About BIT",
      href: "/about",
      submenu: [
        { name: "Vision & Mission", href: "/about/vision-mission" },
        { name: "Milestones", href: "/about/milestones" },
        { name: "Achievements", href: "/about/achievements" },
        { name: "Approvals & Circulars", href: "/about/approvals-circulars" }
      ]
    },
    {
      name: "Administration",
      href: "/administration",
      submenu: [
        { name: "Governing Council", href: "/administration/governing-council" },
        { name: "Chairman's Desk", href: "/administration/chairmans-desk" },
        { name: "Principal's Desk", href: "/administration/principals-desk" },
        { name: "Dean - Administration", href: "/administration/dean-administration" }
      ]
    },
    {
      name: "Academics",
      href: "/academics",
      submenu: [
        { name: "Departments Catalog", href: "/academics" },
        { name: "Programmes Offered", href: "/academics/programmes-offered" },
        { name: "Office of the CoE", href: "/academics/coecorner" },
        { name: "Regulations", href: "/academics/regulations" },
        { name: "Academic Calendar", href: "/academics/academic-calendar" },
        { name: "Learning Centre", href: "/academics/learning-centre" },
        { name: "English Cell (ELCC)", href: "/academics/elcc" },
        { name: "Enhancement Schemes", href: "/academics/capability-enhancement-schemes" }
      ]
    },
    {
      name: "Placements",
      href: "/placements"
    },
    {
      name: "Life at BIT",
      href: "/campus-life",
      submenu: [
        { name: "Clubs & Societies", href: "/campus-life/clubs-societies" },
        { name: "Campus Facilities", href: "/campus-life/facilities" },
        { name: "Sports Facilities", href: "/campus-life/sports" },
        { name: "College Bus routes", href: "/campus-life/bus" },
        { name: "Hostel & Medical", href: "/campus-life/hostel-medical" },
        { name: "Sustainability & Green", href: "/campus-life/green" }
      ]
    },
    {
      name: "Research",
      href: "/research",
      submenu: [
        { name: "Advisory Board", href: "/research/advisory-board" },
        { name: "Academic Research", href: "/research/academic" },
        { name: "Research Facilities", href: "/research/facilities" },
        { name: "Research Centres", href: "/research/centres" },
        { name: "Quality Improvement (QIP)", href: "/research/qip" },
        { name: "R&D Newsletter", href: "/research/newsletter" }
      ]
    },
    {
      name: "Gurugulam",
      href: "/gurugulam"
    },
    {
      name: "PIC",
      href: "/product-innovation-centre"
    },
    {
      name: "Contact",
      href: "/contact"
    }
  ];

  const isLinkActive = (href, submenu) => {
    if (href === "/") return pathname === "/";
    if (pathname === href) return true;
    if (submenu && submenu.some(sub => pathname === sub.href)) return true;
    return false;
  };

  const handleDropdownToggle = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300 border-b border-slate-200/50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Bannari Amman Institute of Technology"
              className="h-11 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-102"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 font-semibold text-slate-700 text-sm">
            {navigation.map((item, index) => (
              <div
                key={index}
                className="relative group py-6"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <button
                    className={`flex items-center gap-1 transition-colors ${
                      isLinkActive(item.href, item.submenu)
                        ? "text-brand-blue font-extrabold"
                        : "text-slate-600 hover:text-brand-blue"
                    }`}
                  >
                    {item.name}
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isLinkActive(item.href)
                        ? "text-brand-blue font-extrabold"
                        : "text-slate-600 hover:text-brand-blue"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {item.submenu && activeDropdown === index && (
                  <div className="absolute top-[75px] left-1/2 -translate-x-1/2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl py-3 animate-fade-in flex flex-col font-semibold">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3">
                      <div className="w-full h-full bg-white border-t border-l border-slate-200 rotate-45"></div>
                    </div>
                    {item.submenu.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        className={`px-4 py-2.5 text-xs sm:text-sm transition-colors hover:bg-slate-50 ${
                          pathname === sub.href ? "text-brand-blue bg-brand-blue/5 font-extrabold" : "text-slate-600 hover:text-brand-blue"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden xl:flex items-center shrink-0">
            <Link
              href="/contact#admissions"
              className="relative inline-flex items-center justify-center px-5 py-2 rounded-full bg-brand-orange text-white font-bold text-xs shadow-md shadow-brand-orange/20 hover:shadow-brand-orange/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Apply Now
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-nav absolute w-full left-0 border-b border-slate-200/80 shadow-xl max-h-[85vh] overflow-y-auto slide-down">
          <div className="px-3 pt-2 pb-6 space-y-1.5 flex flex-col font-semibold text-slate-700">
            {navigation.map((item, index) => (
              <div key={index} className="border-b border-slate-100/60 pb-1.5 last:border-b-0 last:pb-0">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="w-full flex justify-between items-center px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50"
                    >
                      <span className={isLinkActive(item.href, item.submenu) ? "text-brand-blue font-extrabold" : ""}>
                        {item.name}
                      </span>
                      <svg className={`w-4 h-4 transition-transform ${activeDropdown === index ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="pl-6 py-1 space-y-1 bg-slate-50/50 rounded-lg">
                        {item.submenu.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md text-xs sm:text-sm ${
                              pathname === sub.href ? "text-brand-blue font-extrabold bg-brand-blue/5" : "text-slate-600 hover:text-brand-blue"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg transition-colors ${
                      isLinkActive(item.href) ? "bg-brand-blue/5 text-brand-blue font-extrabold" : "hover:bg-slate-50 hover:text-brand-blue"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 px-3">
              <Link
                href="/contact#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-6 py-3 rounded-xl bg-brand-orange text-white font-black text-sm shadow-lg shadow-brand-orange/20"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
