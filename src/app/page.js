"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollDownButton from "@/components/ScrollDownButton";
import Link from "next/link";

// Departments Data
const departmentsData = [
  { id: "cse", name: "Computer Science & Engineering", category: "Computing", code: "CSE", labs: 8, intake: 240, placement: "98%", glowClass: "neon-glow-computing" },
  { id: "aids", name: "Artificial Intelligence & Data Science", category: "Computing", code: "AI&DS", labs: 4, intake: 180, placement: "100%", glowClass: "neon-glow-computing" },
  { id: "aiml", name: "AI & Machine Learning", category: "Computing", code: "AI&ML", labs: 3, intake: 120, placement: "98%", glowClass: "neon-glow-computing" },
  { id: "it", name: "Information Technology", category: "Computing", code: "IT", labs: 6, intake: 180, placement: "97%", glowClass: "neon-glow-computing" },
  { id: "ece", name: "Electronics & Communication", category: "Circuit Branches", code: "ECE", labs: 8, intake: 240, placement: "96%", glowClass: "neon-glow-circuit" },
  { id: "eee", name: "Electrical & Electronics", category: "Circuit Branches", code: "EEE", labs: 6, intake: 120, placement: "94%", glowClass: "neon-glow-circuit" },
  { id: "eie", name: "Electronics & Instrumentation", category: "Circuit Branches", code: "EIE", labs: 5, intake: 60, placement: "95%", glowClass: "neon-glow-circuit" },
  { id: "mech", name: "Mechanical Engineering", category: "Core Engineering", code: "MECH", labs: 10, intake: 120, placement: "91%", glowClass: "neon-glow-core" },
  { id: "mct", name: "Mechatronics Engineering", category: "Core Engineering", code: "MCT", labs: 5, intake: 60, placement: "93%", glowClass: "neon-glow-core" },
  { id: "agri", name: "Agricultural Engineering", category: "Core Engineering", code: "AGRI", labs: 4, intake: 60, placement: "92%", glowClass: "neon-glow-core" },
  { id: "civil", name: "Civil Engineering", category: "Core Engineering", code: "CIVIL", labs: 6, intake: 60, placement: "90%", glowClass: "neon-glow-core" },
  { id: "biotech", name: "Biotechnology", category: "Biosciences", code: "BIOTECH", labs: 7, intake: 120, placement: "96%", glowClass: "neon-glow-biosciences" },
  { id: "biomed", name: "Biomedical Engineering", category: "Biosciences", code: "BMED", labs: 5, intake: 60, placement: "95%", glowClass: "neon-glow-biosciences" },
  { id: "foodtech", name: "Food Technology", category: "Biosciences", code: "FOODTECH", labs: 4, intake: 60, placement: "94%", glowClass: "neon-glow-biosciences" },
];

// Recruiters list for Infinite Marquee
const recruiters = [
  "Amazon", "Zoho", "TCS", "Cognizant", "Accenture", "IBM", "Deloitte", 
  "Capgemini", "Wipro", "Infosys", "Mindtree", "TVS Motors", "L&T Infotech",
  "Robert Bosch", "Hexaware", "Virtusa"
];

// Campus Highlights
const campusHighlights = [
  { title: "Smart Classrooms", desc: "Interactive modern learning halls with digital tools & high-speed Wi-Fi.", icon: "desktop" },
  { title: "Centres of Excellence", desc: "Collaborative research hubs set up in partnership with top global tech giants.", icon: "labs" },
  { title: "Lush 181-Acre Campus", desc: "Eco-friendly, sustainable campus situated near the scenic River Bhavani.", icon: "leaf" },
  { title: "24/7 Learning Centre", desc: "Spacious library with vast journals, e-books, and quiet collaborative spaces.", icon: "library" },
  { title: "Industry Collaboration", desc: "MoUs with leading corporates for internships, guest lectures & live projects.", icon: "handshake" },
  { title: "Sports & Wellness", desc: "International standard track, multi-gym, and indoor sports facilities.", icon: "sports" }
];

// Complete glimpses data of all subpages in the site
const glimpsesData = {
  "About & Administration": [
    {
      title: "Vision & Mission",
      desc: "Our core principles, vision for the future of technical education, and core institutional values.",
      href: "/about/vision-mission",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Milestones",
      desc: "Take a trip through the history of BIT Sathy and the key achievements we have completed since 1996.",
      href: "/about/milestones",
      icon: (
        <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Achievements",
      desc: "Outstanding recognition, awards, ranking metrics, and championship trophies won by the college.",
      href: "/about/achievements",
      icon: (
        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Approvals & Circulars",
      desc: "View official regulatory letters, UGC autonomy mandates, Anna University affiliations, and circular notifications.",
      href: "/about/approvals-circulars",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Governing Council",
      desc: "Meet the governing board directing policy implementations, compliance, and budget planning.",
      href: "/administration/governing-council",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Chairman's Desk",
      desc: "Welcome letter and pedagogical direction from our Chairman, Thiru S. V. Balasubramaniam.",
      href: "/administration/chairmans-desk",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Principal's Desk",
      desc: "Academic welcome and student excellence message from our Principal, Dr. C. Palanisamy.",
      href: "/administration/principals-desk",
      icon: (
        <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Dean - Administration",
      desc: "General campus coordination, accreditation standards, and student life guidelines led by Dr. K. Sivakumar.",
      href: "/administration/dean-administration",
      icon: (
        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ],
  "Academic & Support": [
    {
      title: "Programmes Offered",
      desc: "Full catalog of undergraduate B.E. & B.Tech courses with corporate partnerships.",
      href: "/academics/programmes-offered",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Office of the CoE",
      desc: "Examination guidelines, regulations, grading scales, assessment notifications, and results corner.",
      href: "/academics/coecorner",
      icon: (
        <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Academic Regulations",
      desc: "Understand grading schemes, credit definitions, elective registration systems, and student conduct rules.",
      href: "/academics/regulations",
      icon: (
        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Academic Calendar",
      desc: "Track semester sessions, internal review schedules, holidays, and college events.",
      href: "/academics/academic-calendar",
      icon: (
        <svg className="w-5 h-5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Learning Centre",
      desc: "Library resources, featuring 100k+ print titles, digital journal networks, and quiet study sections.",
      href: "/academics/learning-centre",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
        </svg>
      )
    },
    {
      title: "English Cell (ELCC)",
      desc: "Language lab, soft skills training, public speaking seminars, and placement writing prep.",
      href: "/academics/elcc",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Capability Schemes",
      desc: "Advanced student grooming, professional certifications, and capability coaching programs.",
      href: "/academics/capability-enhancement-schemes",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ],
  "Research & Development": [
    {
      title: "Advisory Board",
      desc: "The international academic and executive team setting the direction for our research labs.",
      href: "/research/advisory-board",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Academic Research",
      desc: "Information for Ph.D. scholars, recognized guides, and Anna University doctoral guidelines.",
      href: "/research/academic",
      icon: (
        <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      title: "Research Facilities",
      desc: "Sophisticated campus instrumentation, scanning electron microscopes, and prototyping tools.",
      href: "/research/facilities",
      icon: (
        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Research Centres",
      desc: "Explore 30+ cutting-edge domain laboratories focusing on IoT, cybersecurity, automation, and energy.",
      href: "/research/centres",
      icon: (
        <svg className="w-5 h-5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "QIP Schemes",
      desc: "Faculty development fellowships, training programmes, and research upgrades support.",
      href: "/research/qip",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "R&D Newsletter",
      desc: "Periodic reports detailing academic publication listings, patents filed, and project grants.",
      href: "/research/newsletter",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M9 17h6m-6-4h6m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ],
  "Campus Life": [
    {
      title: "Clubs & Societies",
      desc: "Student clubs supporting tech incubation, arts, photography, environment, and social services.",
      href: "/campus-life/clubs-societies",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Campus Facilities",
      desc: "Explore details of academic complexes, modern cafeterias, seminar hubs, and convenience facilities.",
      href: "/campus-life/facilities",
      icon: (
        <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Sports Facilities",
      desc: "Standard outdoor playgrounds, synthetic running tracks, and indoor multisports courts.",
      href: "/campus-life/sports",
      icon: (
        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      title: "Modern Gymnasium",
      desc: "View timing schedules, equipment lists, and health guidance at our 5,000 sq ft fitness center.",
      href: "/campus-life/gymnasium",
      icon: (
        <svg className="w-5 h-5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Hostel & Medical",
      desc: "Secure home-like student hostels, healthy steam-kitchen food systems, and 24/7 medical room help.",
      href: "/campus-life/hostel-medical",
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Green Campus",
      desc: "Take a tour of our award-winning carbon-neutral initiatives, solar fields, and organic farming enclaves.",
      href: "/campus-life/green",
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Bus Routes Directory",
      desc: "Review daily transport schedules, driver contacts, and routes covering all surrounding towns.",
      href: "/campus-life/bus",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ],
  "Innovation & Placements": [
    {
      title: "Gurugulam Coding Academy",
      desc: "Deep technical skill training platform developing elite programmers, coding experts, and hackers.",
      href: "/gurugulam",
      icon: (
        <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Product Innovation Centre",
      desc: "Incubator space supporting prototype development, research patents, and business startups.",
      href: "/product-innovation-centre",
      icon: (
        <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Placements Office",
      desc: "Record stats, top recruiting corporations network, training systems, and placement guides.",
      href: "/placements",
      icon: (
        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ]
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeGlimpseTab, setActiveGlimpseTab] = useState("About & Administration");
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const isPreview = typeof window !== "undefined" && window.location.search.includes("preview=true");
    fetch(isPreview ? "/api/content?path=/&preview=true" : "/api/content?path=/")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.page) {
          setPageData(data.page);
        }
      })
      .catch((err) => console.error("Error loading home page content from DB:", err));

    // Listen to real-time editor preview updates
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

  // Numeric stats counter effect
  const [stats, setStats] = useState({
    acres: 0,
    pkg: 0,
    partners: 0,
    placement: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setStats({
        acres: Math.min(Math.round((181 / steps) * currentStep), 181),
        pkg: Math.min(Math.round((44 / steps) * currentStep), 44),
        partners: Math.min(Math.round((317 / steps) * currentStep), 317),
        placement: Math.min(Math.round((95 / steps) * currentStep), 95)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  // Filtered departments
  const filteredDepartments = activeTab === "All"
    ? departmentsData
    : departmentsData.filter(dept => dept.category === activeTab);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      {/* Reusable Navbar */}
      <Navbar />

      {/* Dynamic drifting background aurora glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none animate-float-slow -z-10" />
      <div className="absolute top-2/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none animate-float-reverse -z-10" />
      <div className="absolute top-3/4 left-1/3 w-80 h-80 rounded-full bg-amber-300/5 blur-[100px] pointer-events-none -z-10" />

      {/* 2. Hero Section (Centered Layout & Light Overlay) */}
      <section id="home" className="relative h-[100vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://www.bitsathy.ac.in/wp-content/uploads/Home.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-white/55 backdrop-blur-[1px] z-10" />
        </div>

        {/* Hero Content (Centered) */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wider text-slate-700 uppercase">
              {pageData ? pageData.subtitle : "NAAC A+ ACCREDITED | AUTONOMOUS"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] mb-6 text-slate-900">
            {pageData ? pageData.title : (
              <>
                Empowering Minds,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">
                  Designing Tomorrows
                </span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg mb-10 max-w-3xl font-medium leading-relaxed">
            {pageData ? pageData.intro : "Experience the future of engineering at Bannari Amman Institute of Technology. Our 181-acre campus near River Bhavani provides an ideal biosphere for young innovators seeking core technology competence."}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a
              href="#academics"
              className="px-8 py-3.5 rounded-xl bg-brand-blue text-white font-bold text-center tracking-wide hover:bg-brand-blue/95 shadow-lg shadow-brand-blue/20 hover:scale-102 active:scale-100 transition-all duration-200"
            >
              Explore Programs
            </a>
            <a
              href="/contact#admissions"
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-center tracking-wide border border-slate-200 shadow-sm transition-all duration-200"
            >
              Admission Form
            </a>
          </div>

          <ScrollDownButton className="mt-8 lg:hidden" />
        </div>

        {/* Floating Stats Bar - Desktop Only */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 grid grid-cols-4 divide-x divide-slate-100 text-center">
            {/* Stat Item 1 */}
            <div className="flex flex-col justify-center p-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-blue">
                {stats.acres}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">
                Acres Green Campus
              </span>
            </div>

            {/* Stat Item 2 */}
            <div className="flex flex-col justify-center p-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-orange">
                {stats.pkg} <span className="text-2xl sm:text-3xl font-black">LPA</span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">
                Highest Salary Package
              </span>
            </div>

            {/* Stat Item 3 */}
            <div className="flex flex-col justify-center p-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-purple">
                {stats.partners}+
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">
                Recruiting Partners
              </span>
            </div>

            {/* Stat Item 4 */}
            <div className="flex flex-col justify-center p-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-cyan">
                {stats.placement}%
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-500 tracking-wider uppercase mt-2">
                Placement Record
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Bar - Mobile/Tablet Only */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8 lg:hidden">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200 grid grid-cols-2 gap-y-6 gap-x-4 text-center">
          <div className="flex flex-col justify-center p-2 border-r border-slate-100">
            <span className="text-3xl font-extrabold text-brand-blue">
              {stats.acres}
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-2">
              Acres Campus
            </span>
          </div>

          <div className="flex flex-col justify-center p-2">
            <span className="text-3xl font-extrabold text-brand-orange">
              {stats.pkg} <span className="text-lg font-black">LPA</span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-2">
              Highest Package
            </span>
          </div>

          <div className="flex flex-col justify-center p-2 border-t border-r border-slate-100 pt-6">
            <span className="text-3xl font-extrabold text-brand-purple">
              {stats.partners}+
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-2">
              Recruiters
            </span>
          </div>

          <div className="flex flex-col justify-center p-2 border-t border-slate-100 pt-6">
            <span className="text-3xl font-extrabold text-brand-cyan">
              {stats.placement}%
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-2">
              Placement
            </span>
          </div>
        </div>
      </div>

      {/* Spacer for Desktop overlay alignment */}
      <div className="hidden lg:block h-24"></div>

      {/* 3. About Preview Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 reveal-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-4">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                Welcome to BIT Sathy
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Where Innovation Meets <span className="text-brand-purple">Academic Excellence</span>
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              Bannari Amman Institute of Technology was established in 1996 by the Bannari Amman Group, 
              built on a sprawling 181-acre campus near the scenic River Bhavani, Sathyamangalam, Tamil Nadu. 
              As an autonomous engineering college affiliated with Anna University, Chennai, BIT is dedicated 
              to providing quality technical education and research training.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              With NAAC 'A+' accreditation and AICTE approval, we provide an ecosystem that encourages 
              curiosity, triggers creativity, and develops social responsibility. Our students are trained 
              on industry-relevant technologies in over 30 global Centres of Excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="/about"
                className="px-6 py-3 rounded-xl bg-brand-blue text-white font-bold hover:bg-brand-blue/95 transition-colors shadow-sm"
              >
                Read Full Story
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 reveal-right">
            {campusHighlights.slice(0, 3).map((hl, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center bg-brand-blue/5 text-brand-blue">
                  {hl.icon === "desktop" && (
                    <svg className="w-6 h-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {hl.icon === "labs" && (
                    <svg className="w-6 h-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  )}
                  {hl.icon === "leaf" && (
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-base mb-0.5">{hl.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">{hl.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 Dynamic Page Sections */}
      {pageData && pageData.sections && pageData.sections.length > 0 && (
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {pageData.sections.map((block, idx) => {
            const isImgLeft = block.layout_type === "image-left";
            const isImgRight = block.layout_type === "image-right" || block.image_url;
            const isFullWidth = block.layout_type === "full-width";
            const isTextCenter = block.alignment === "center";
            const isTextRight = block.alignment === "right";

            return (
              <div
                key={idx}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                {isFullWidth ? (
                  <div className="space-y-6">
                    <div className={`space-y-3.5 ${isTextCenter ? "text-center" : isTextRight ? "text-right" : "text-left"}`}>
                      {block.subtitle && (
                        <span className="text-xs font-bold tracking-wider text-brand-blue uppercase">
                          {block.subtitle}
                        </span>
                      )}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {block.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-4">
                        {block.desc}
                      </p>
                      {block.btn_text && (
                        <a
                          href={block.btn_url || "#"}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-orange text-white font-black text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
                        >
                          {block.btn_text} ➔
                        </a>
                      )}
                    </div>
                    {block.image_url && (
                      <div className="relative overflow-hidden rounded-2xl aspect-video border border-slate-200 bg-slate-50 shadow-inner">
                        <img
                          src={block.image_url}
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
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {block.title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium mb-4">
                        {block.desc}
                      </p>
                      {block.btn_text && (
                        <a
                          href={block.btn_url || "#"}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-orange text-white font-black text-xs uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
                        >
                          {block.btn_text} ➔
                        </a>
                      )}
                    </div>
                    {(isImgLeft || isImgRight) && block.image_url && (
                      <div
                        className={`md:col-span-5 relative overflow-hidden rounded-2xl aspect-video border border-slate-200 bg-slate-50 shadow-inner ${
                          isImgLeft ? "md:order-1" : ""
                        }`}
                      >
                        <img
                          src={block.image_url}
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
        </section>
      )}

      {/* 4. Academics Preview Section */}
      <section id="academics" className="py-24 bg-slate-100/50 border-y border-slate-200/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10 mb-4">
              <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">
                Academics
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Explore Our Undergraduate <span className="text-brand-orange">Programmes</span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              We offer specialized B.E. & B.Tech courses designed to prepare students for the global 
              tech ecosystem.
            </p>
          </div>

          {/* Filters tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {["All", "Computing", "Circuit Branches", "Core Engineering", "Biosciences"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/25 scale-105"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-brand-blue"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid of Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.slice(0, 6).map((dept, index) => (
              <div
                key={dept.id}
                className={`group p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-slate-300/80 flex flex-col justify-between ${dept.glowClass} reveal-scale ${index % 3 === 0 ? "delay-75" : index % 3 === 1 ? "delay-150" : "delay-200"}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold tracking-wider px-3 py-1 rounded-md bg-slate-100 text-slate-500 uppercase">
                      {dept.category}
                    </span>
                    <span className="text-xs font-extrabold text-slate-400">
                      Code: {dept.code}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      {dept.category === "Computing" && (
                        <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                      {dept.category === "Circuit Branches" && (
                        <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      )}
                      {dept.category === "Core Engineering" && (
                        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                    <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-brand-blue transition-colors">
                      {dept.name}
                    </h4>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                  <div>
                    <p className="text-slate-400 font-medium uppercase tracking-wider mb-1">Labs</p>
                    <p className="font-extrabold text-slate-800 text-sm">{dept.labs}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-medium uppercase tracking-wider mb-1">Intake</p>
                    <p className="font-extrabold text-slate-800 text-sm">{dept.intake}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 font-medium uppercase tracking-wider mb-1">Placement</p>
                    <p className="font-extrabold text-emerald-600 text-sm">{dept.placement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/academics"
              className="px-8 py-3.5 rounded-xl bg-brand-blue text-white font-bold inline-block hover:bg-brand-blue/95 transition-colors shadow-sm"
            >
              View All {departmentsData.length} Departments
            </a>
          </div>
        </div>
      </section>

      {/* 5. Placements Preview Section */}
      <section id="placements" className="py-24 overflow-hidden bg-slate-50 border-b border-slate-200 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
            <div className="lg:col-span-7 reveal-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-4">
                <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                  Placements & Careers
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-slate-900">
                Launching Global Careers with <br className="hidden sm:inline"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">
                  Industry Leaders
                </span>
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                The Placement Cell at BIT Sathy works round the year to connect our bright graduates with 
                industry giants. We provide robust technical bootcamps, mock interview drives, soft skills training, 
                and corporate mentorship.
              </p>
              
              <div className="grid grid-cols-3 gap-6 text-center border-t border-slate-200 pt-8 font-semibold">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-orange">44 LPA</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 uppercase tracking-wider">Highest Package</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-blue">317+</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 uppercase tracking-wider">Companies Visited</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-600">1,920+</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 uppercase tracking-wider">Offers Made</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md reveal-right">
              <h4 className="font-extrabold text-xl mb-6 text-slate-900">Why BIT Placements stand out?</h4>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Dedicated Coding Academy</strong>: Advanced training in algorithms, data structures & full-stack development.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Product-Specific Prep</strong>: Tailored sessions for top product giants like Amazon and Zoho.</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <a
                  href="/placements"
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold block transition-colors text-sm"
                >
                  View Placement Records
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiter Logos Infinite Marquee */}
        <div className="py-8 bg-slate-100 border-y border-slate-200 relative z-10 select-none">
          <div className="relative w-full overflow-hidden flex flex-col items-center">
            <div className="animate-marquee gap-8 sm:gap-12 py-2">
              {recruiters.map((logo, idx) => (
                <div
                  key={`marq1-${idx}`}
                  className="px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center font-bold text-slate-700 text-sm sm:text-base hover:text-brand-blue hover:border-brand-blue hover:bg-brand-blue/5 transition-all duration-300 whitespace-nowrap cursor-default"
                >
                  {logo}
                </div>
              ))}
              {recruiters.map((logo, idx) => (
                <div
                  key={`marq2-${idx}`}
                  className="px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center font-bold text-slate-700 text-sm sm:text-base hover:text-brand-blue hover:border-brand-blue hover:bg-brand-blue/5 transition-all duration-300 whitespace-nowrap cursor-default"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 Glimpses of All Pages Directory Section */}
      <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        {/* Subtle decorative mesh background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-brand-orange/5 blur-[130px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-blue/5 blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                Explore BIT Ecosystem
              </span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              BIT Sathy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">At a Glance</span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              Browse quick previews of all institutional sections, administrative desks, academic cells, and student facilities. Click any category card to explore.
            </p>
          </div>

          {/* Directory tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {Object.keys(glimpsesData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveGlimpseTab(tab)}
                className={`px-5 py-3 rounded-2xl text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeGlimpseTab === tab
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10 scale-105"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid of Glimpse Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {glimpsesData[activeGlimpseTab].map((glimpse, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-3xl border border-slate-200/80 p-8 shadow-sm transition-all duration-305 hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden reveal-scale ${idx % 3 === 0 ? "delay-75" : idx % 3 === 1 ? "delay-150" : "delay-200"}`}
              >
                {/* Visual Left Line accent depending on the index of the card */}
                <div className={`absolute left-0 top-0 bottom-0 w-[5px] transition-all duration-300 ${
                  idx % 3 === 0 ? "bg-brand-blue" : idx % 3 === 1 ? "bg-brand-purple" : "bg-brand-orange"
                }`} />

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-slate-100 text-slate-700">
                      {glimpse.icon}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 group-hover:text-slate-500">
                      Preview
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {glimpse.title}
                  </h4>
                  
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold mb-6">
                    {glimpse.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={glimpse.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-brand-orange transition-colors"
                  >
                    Explore Page
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Campus Pulse Section */}
      <section id="campus-life" className="py-24 bg-slate-100/50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/5 border border-brand-cyan/10 mb-4">
              <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
                Campus Pulse
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Life and Culture at <span className="text-brand-purple">BIT Sathy</span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
              Explore national award victories, technical symposia, and student achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 reveal-scale delay-75">
              <div className="p-8">
                <div className="text-xs font-bold text-brand-purple uppercase tracking-wider mb-3">Technical Fest</div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4">V-Prayukti National Conference</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Our flagship annual technical symposium gathers engineering minds from all over India.
                </p>
              </div>
              <div className="p-8 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Annual Event</span>
                <a href="/campus-life" className="font-bold text-brand-purple">Learn More &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 reveal-scale delay-150">
              <div className="p-8">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">Green Initiatives</div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4">Sustainable Campus Award</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  BIT has been awarded for its water recycling plants and 10,000+ trees planting initiative.
                </p>
              </div>
              <div className="p-8 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Environmental</span>
                <a href="/campus-life" className="font-bold text-emerald-600">Learn More &rarr;</a>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/50 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 reveal-scale delay-200">
              <div className="p-8">
                <div className="text-xs font-bold text-brand-orange uppercase tracking-wider mb-3">Hackathons</div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4">Smart India Hackathon Winners</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Three student teams from the CSE & AI/ML departments bagged first place at SIH.
                </p>
              </div>
              <div className="p-8 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>National Achievement</span>
                <a href="/campus-life" className="font-bold text-brand-orange">Learn More &rarr;</a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/campus-life"
              className="px-8 py-3.5 rounded-xl bg-brand-purple text-white font-bold inline-block hover:bg-brand-purple/95 transition-colors shadow-sm"
            >
              Explore Campus Life & Clubs
            </a>
          </div>
        </div>
      </section>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
