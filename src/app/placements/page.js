"use client";

import React, { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Complete Recruiter Mappings
const recruitersCategories = {
  services: [
    { name: "TCS", logo: "https://www.bitsathy.ac.in/wp-content/uploads/TCS.png" },
    { name: "Cognizant", logo: "https://www.bitsathy.ac.in/wp-content/uploads/cognizant.png" },
    { name: "Accenture", logo: "https://www.bitsathy.ac.in/wp-content/uploads/accenture-1.png" },
    { name: "HCL Tech", logo: "https://www.bitsathy.ac.in/wp-content/uploads/hcl-tech.png" },
    { name: "Hexaware", logo: "https://www.bitsathy.ac.in/wp-content/uploads/hexaware-2.png" },
    { name: "LTI Mindtree", logo: "https://www.bitsathy.ac.in/wp-content/uploads/ltimindtree.png" },
    { name: "Capgemini", logo: "https://www.bitsathy.ac.in/wp-content/uploads/capgemini.png" },
    { name: "Infosys", logo: "https://www.bitsathy.ac.in/wp-content/uploads/infosys.png" },
    { name: "Wipro", logo: "https://www.bitsathy.ac.in/wp-content/uploads/wipro.png" },
    { name: "IBM", logo: "https://www.bitsathy.ac.in/wp-content/uploads/ibm.png" },
    { name: "HP", logo: "https://www.bitsathy.ac.in/wp-content/uploads/HP.jpg" },
    { name: "Tech Mahindra", logo: "https://www.bitsathy.ac.in/wp-content/uploads/tech-mahindra.png" },
    { name: "Virtusa", logo: "https://www.bitsathy.ac.in/wp-content/uploads/virtusa.png" },
    { name: "Mphasis", logo: "https://www.bitsathy.ac.in/wp-content/uploads/mphasis.png" },
    { name: "Aspire", logo: "https://www.bitsathy.ac.in/wp-content/uploads/aspire.png" },
    { name: "UST Global", logo: "https://www.bitsathy.ac.in/wp-content/uploads/ust.png" },
    { name: "KPIT", logo: "https://www.bitsathy.ac.in/wp-content/uploads/kpit.png" },
    { name: "Deloitte", logo: "https://www.bitsathy.ac.in/wp-content/uploads/deloitte.jpg" },
    { name: "Ford", logo: "https://www.bitsathy.ac.in/wp-content/uploads/ford-1.png" },
    { name: "Tata Elxsi", logo: "https://www.bitsathy.ac.in/wp-content/uploads/TATA-ELXSI.png" },
    { name: "EY", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Ey.png" },
    { name: "NTT Data", logo: "https://www.bitsathy.ac.in/wp-content/uploads/NttData.png" },
    { name: "FSS", logo: "https://www.bitsathy.ac.in/wp-content/uploads/FSS.jpg" },
    { name: "Verizon", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Verizon.jpg" }
  ],
  product: [
    { name: "Juspay", logo: "https://www.bitsathy.ac.in/wp-content/uploads/juspay.png" },
    { name: "Amazon", logo: "https://www.bitsathy.ac.in/wp-content/uploads/amazon.png" },
    { name: "Informatica", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Informatica.png" },
    { name: "Zoho", logo: "https://www.bitsathy.ac.in/wp-content/uploads/zoho.png" },
    { name: "PayPal", logo: "https://www.bitsathy.ac.in/wp-content/uploads/PayPal.png" },
    { name: "Thoughtworks", logo: "https://www.bitsathy.ac.in/wp-content/uploads/thoughtworks.png" },
    { name: "SAP", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Sap.png" },
    { name: "Flipkart", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Flipkart.jpg" },
    { name: "CommScope", logo: "https://www.bitsathy.ac.in/wp-content/uploads/commscope.png" },
    { name: "Qualcomm", logo: "https://www.bitsathy.ac.in/wp-content/uploads/qualcomm.png" },
    { name: "Goldman Sachs", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Goldman-Sachs.png" },
    { name: "Cred", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Cred.jpg" },
    { name: "ServiceNow", logo: "https://www.bitsathy.ac.in/wp-content/uploads/servicenow.png" },
    { name: "Mu Sigma", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Mu-Sigma.jpg" },
    { name: "JP Morgan", logo: "https://www.bitsathy.ac.in/wp-content/uploads/JP-morgan.png" },
    { name: "Trilogy", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Trilogy.png" },
    { name: "Rocket", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Rocket.webp" },
    { name: "Netgear", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Netgear.png" },
    { name: "ShopUp", logo: "https://www.bitsathy.ac.in/wp-content/uploads/shopup.png" },
    { name: "PEGA", logo: "https://www.bitsathy.ac.in/wp-content/uploads/pega.png" },
    { name: "Lowe's", logo: "https://www.bitsathy.ac.in/wp-content/uploads/lowes.jpg" },
    { name: "Presidio", logo: "https://www.bitsathy.ac.in/wp-content/uploads/presidio.png" },
    { name: "Multicoreware", logo: "https://www.bitsathy.ac.in/wp-content/uploads/multicoreware.png" },
    { name: "EPAM Systems", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Epam-systems.jpg" },
    { name: "GX India", logo: "https://www.bitsathy.ac.in/wp-content/uploads/gx-india.png" },
    { name: "Genworx", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Genworx.jpg" },
    { name: "Tiger Analytics", logo: "https://www.bitsathy.ac.in/wp-content/uploads/tiger.png" },
    { name: "JMan Group", logo: "https://www.bitsathy.ac.in/wp-content/uploads/jman-group.png" },
    { name: "Rently", logo: "https://www.bitsathy.ac.in/wp-content/uploads/rently.png" },
    { name: "CDW", logo: "https://www.bitsathy.ac.in/wp-content/uploads/cdw.png" },
    { name: "Mitsogo", logo: "https://www.bitsathy.ac.in/wp-content/uploads/mitsogo.png" },
    { name: "Altrodav", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Altrodav.png" },
    { name: "TensorGo", logo: "https://www.bitsathy.ac.in/wp-content/uploads/tensorgo.png" },
    { name: "Oracle", logo: "https://www.bitsathy.ac.in/wp-content/uploads/oracle.png" },
    { name: "Cisco", logo: "https://www.bitsathy.ac.in/wp-content/uploads/cisco.png" },
    { name: "GoML", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Goml.jpg" },
    { name: "HyperVerge", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Hyperverge-1.png" },
    { name: "NatWest", logo: "https://www.bitsathy.ac.in/wp-content/uploads/natwest.png" },
    { name: "Odessa", logo: "https://www.bitsathy.ac.in/wp-content/uploads/odessa.png" },
    { name: "Temenos", logo: "https://www.bitsathy.ac.in/wp-content/uploads/temenos.png" },
    { name: "Azentio", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Azentio.png" },
    { name: "Turing", logo: "https://www.bitsathy.ac.in/wp-content/uploads/turing.png" },
    { name: "Adya AI", logo: "https://www.bitsathy.ac.in/wp-content/uploads/adya-ai.png" },
    { name: "Kaar Technologies", logo: "https://www.bitsathy.ac.in/wp-content/uploads/kaar.png" },
    { name: "EXL Service", logo: "https://www.bitsathy.ac.in/wp-content/uploads/exl.png" },
    { name: "Workhall", logo: "https://www.bitsathy.ac.in/wp-content/uploads/workhall.png" },
    { name: "Lumen", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Luman.png" },
    { name: "Persistent", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Persistent.png" },
    { name: "PhonePe", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Phonepe.png" },
    { name: "ADP", logo: "https://www.bitsathy.ac.in/wp-content/uploads/adp.png" },
    { name: "Responsive", logo: "https://www.bitsathy.ac.in/wp-content/uploads/responsive.png" },
    { name: "mThree", logo: "https://www.bitsathy.ac.in/wp-content/uploads/mthree.png" },
    { name: "nBase2 Systems", logo: "https://www.bitsathy.ac.in/wp-content/uploads/nbase2_systems.jpg" },
    { name: "Securin", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Securin.jpg" },
    { name: "KreditBee", logo: "https://www.bitsathy.ac.in/wp-content/uploads/kreditbee.png" },
    { name: "SurveySparrow", logo: "https://www.bitsathy.ac.in/wp-content/uploads/SurveySparrow1.png" },
    { name: "ConverSight", logo: "https://www.bitsathy.ac.in/wp-content/uploads/ConverSight.png" },
    { name: "Bahwan Cybertek", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Bahwan-cybertek.png" },
    { name: "TruTrace", logo: "https://www.bitsathy.ac.in/wp-content/uploads/trustrace.png" },
    { name: "AvaSoft", logo: "https://www.bitsathy.ac.in/wp-content/uploads/avasoft.png" },
    { name: "Fujitsu", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Fujitsu.png" },
    { name: "Grootan Technologies", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Grootan-Technologies.jpg" },
    { name: "Ajira Software", logo: "https://www.bitsathy.ac.in/wp-content/uploads/ajira_software.jpg" },
    { name: "Sopra Steria", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Sopra-Steria.jpg" },
    { name: "Straive", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Straive.png" },
    { name: "Xebia", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Xebia.jpg" }
  ],
  core: [
    { name: "Applied Materials", logo: "https://www.bitsathy.ac.in/wp-content/uploads/applied-materials.png" },
    { name: "Soliton", logo: "https://www.bitsathy.ac.in/wp-content/uploads/soliton.png" },
    { name: "Cadence", logo: "https://www.bitsathy.ac.in/wp-content/uploads/cadence-1.png" },
    { name: "Caterpillar", logo: "https://www.bitsathy.ac.in/wp-content/uploads/caterpillar.png" },
    { name: "Analog Devices", logo: "https://www.bitsathy.ac.in/wp-content/uploads/analog-devices.png" },
    { name: "Schneider Electric", logo: "https://www.bitsathy.ac.in/wp-content/uploads/schneider-electric.png" },
    { name: "Microchip", logo: "https://www.bitsathy.ac.in/wp-content/uploads/microchip.png" },
    { name: "Volvo", logo: "https://www.bitsathy.ac.in/wp-content/uploads/volvo.png" },
    { name: "ABB", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Abb.png" },
    { name: "Alstom", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Alstom.png" },
    { name: "Zifo R&D", logo: "https://www.bitsathy.ac.in/wp-content/uploads/zifo-rnd.png" },
    { name: "Ericsson", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Ericssion.png" },
    { name: "Harman", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Harman.png" },
    { name: "Embedur", logo: "https://www.bitsathy.ac.in/wp-content/uploads/embedur.png" },
    { name: "e-con Systems", logo: "https://www.bitsathy.ac.in/wp-content/uploads/e-con-Systems.jpg" },
    { name: "Ribbon", logo: "https://www.bitsathy.ac.in/wp-content/uploads/ribbon.png" },
    { name: "Craftsman Automation", logo: "https://www.bitsathy.ac.in/wp-content/uploads/craftsman-automation.png" },
    { name: "Unilogic", logo: "https://www.bitsathy.ac.in/wp-content/uploads/unilogic.jpg" },
    { name: "Biocon", logo: "https://www.bitsathy.ac.in/wp-content/uploads/biocon-1.jpg" },
    { name: "Teagy Tec", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Teagy-Tec.jpg" },
    { name: "Base Automation", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Base-Automation.jpg" },
    { name: "Delphi TVS", logo: "https://www.bitsathy.ac.in/wp-content/uploads/delphi-tvs.png" },
    { name: "Rekise Marine", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Rekise-Marine.png" },
    { name: "Saint Gobain", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Saint-Gobain.png" },
    { name: "Samsung", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Samsung.png" },
    { name: "SPIC", logo: "https://www.bitsathy.ac.in/wp-content/uploads/SPIC-scaled.png" },
    { name: "JSW", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Jsw.png" },
    { name: "Yokogawa", logo: "https://www.bitsathy.ac.in/wp-content/uploads/yokogawa.png" },
    { name: "Visteon", logo: "https://www.bitsathy.ac.in/wp-content/uploads/visteon.png" },
    { name: "Kone Elevators", logo: "https://www.bitsathy.ac.in/wp-content/uploads/kone-elevators.png" },
    { name: "Mistral", logo: "https://www.bitsathy.ac.in/wp-content/uploads/mistral.png" },
    { name: "Johnson & Johnson", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Johnson__Johnson.png" },
    { name: "L&T", logo: "https://www.bitsathy.ac.in/wp-content/uploads/LT.png" },
    { name: "Lincoln", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Lincoln.png" },
    { name: "SmartDV", logo: "https://www.bitsathy.ac.in/wp-content/uploads/smartdv.png" },
    { name: "Tata Electronics", logo: "https://www.bitsathy.ac.in/wp-content/uploads/tata-electronics.png" },
    { name: "Infineon", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Infineon.png" },
    { name: "TAFE", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Tafe.png" },
    { name: "Uhnder", logo: "https://www.bitsathy.ac.in/wp-content/uploads/uhnder.png" },
    { name: "Elgi", logo: "https://www.bitsathy.ac.in/wp-content/uploads/elgi.png" },
    { name: "Bosch", logo: "https://www.bitsathy.ac.in/wp-content/uploads/bosch.png" },
    { name: "Bull", logo: "https://www.bitsathy.ac.in/wp-content/uploads/bull.png" },
    { name: "Visai Labs", logo: "https://www.bitsathy.ac.in/wp-content/uploads/visai-labs.png" },
    { name: "AMI", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Ami.png" },
    { name: "WEG", logo: "https://www.bitsathy.ac.in/wp-content/uploads/weg.png" },
    { name: "Ashok Leyland", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Ashok_Leyland-scaled.png" },
    { name: "Brakes India", logo: "https://www.bitsathy.ac.in/wp-content/uploads/brakes-india.png" },
    { name: "Britannia", logo: "https://www.bitsathy.ac.in/wp-content/uploads/britannia.png" },
    { name: "Ather Energy", logo: "https://www.bitsathy.ac.in/wp-content/uploads/ather-energy.png" },
    { name: "Kawasaki Robotics", logo: "https://www.bitsathy.ac.in/wp-content/uploads/kawasaki-robotics.png" },
    { name: "LMW", logo: "https://www.bitsathy.ac.in/wp-content/uploads/lmw-logo.png" },
    { name: "Hella India", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Hella-India-Automotive.png" },
    { name: "Emerson", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Emerson.png" },
    { name: "Data Patterns", logo: "https://www.bitsathy.ac.in/wp-content/uploads/data-patterns.png" },
    { name: "Rane Group", logo: "https://www.bitsathy.ac.in/wp-content/uploads/rane-group.png" },
    { name: "Harita", logo: "https://www.bitsathy.ac.in/wp-content/uploads/harita.png" },
    { name: "Hatsun", logo: "https://www.bitsathy.ac.in/wp-content/uploads/hatsun.png" },
    { name: "Roots", logo: "https://www.bitsathy.ac.in/wp-content/uploads/roots.png" },
    { name: "Royal Enfield", logo: "https://www.bitsathy.ac.in/wp-content/uploads/royal-enfield.png" },
    { name: "Sanmar", logo: "https://www.bitsathy.ac.in/wp-content/uploads/sanmar.png" },
    { name: "Flowserve", logo: "https://www.bitsathy.ac.in/wp-content/uploads/flowserve.png" },
    { name: "NSK", logo: "https://www.bitsathy.ac.in/wp-content/uploads/nsk.png" },
    { name: "Procyon", logo: "https://www.bitsathy.ac.in/wp-content/uploads/procyon.png" },
    { name: "Propel", logo: "https://www.bitsathy.ac.in/wp-content/uploads/propel.png" },
    { name: "Timbertruss", logo: "https://www.bitsathy.ac.in/wp-content/uploads/timbertruss.png" },
    { name: "Titan Company", logo: "https://www.bitsathy.ac.in/wp-content/uploads/titan-company.png" },
    { name: "TVS Motors", logo: "https://www.bitsathy.ac.in/wp-content/uploads/tvs.png" }
  ]
};

// Top marquee list for visual wow factor
const marqueeCompanies = [
  { name: "Amazon", logo: "https://www.bitsathy.ac.in/wp-content/uploads/amazon.png" },
  { name: "Qualcomm", logo: "https://www.bitsathy.ac.in/wp-content/uploads/qualcomm.png" },
  { name: "Zoho", logo: "https://www.bitsathy.ac.in/wp-content/uploads/zoho.png" },
  { name: "TCS", logo: "https://www.bitsathy.ac.in/wp-content/uploads/TCS.png" },
  { name: "PayPal", logo: "https://www.bitsathy.ac.in/wp-content/uploads/PayPal.png" },
  { name: "Caterpillar", logo: "https://www.bitsathy.ac.in/wp-content/uploads/caterpillar.png" },
  { name: "Cognizant", logo: "https://www.bitsathy.ac.in/wp-content/uploads/cognizant.png" },
  { name: "Juspay", logo: "https://www.bitsathy.ac.in/wp-content/uploads/juspay.png" },
  { name: "Applied Materials", logo: "https://www.bitsathy.ac.in/wp-content/uploads/applied-materials.png" },
  { name: "Goldman Sachs", logo: "https://www.bitsathy.ac.in/wp-content/uploads/Goldman-Sachs.png" },
  { name: "Volvo", logo: "https://www.bitsathy.ac.in/wp-content/uploads/volvo.png" },
  { name: "Accenture", logo: "https://www.bitsathy.ac.in/wp-content/uploads/accenture-1.png" }
];

// Interactive placement image slider dataset (extracted from official smartslider3 slider=165)
const heroSlides = [
  { url: "https://www.bitsathy.ac.in/wp-content/uploads/Cadence-2-scaled.jpg", caption: "Cadence Placement Spotlight", sub: "Dream career opportunities with global semiconductor leader Cadence" },
  { url: "https://www.bitsathy.ac.in/wp-content/uploads/Website-Slider_kowsi-17.jpg", caption: "Placed Students Celebration", sub: "Celebrating outstanding career placements across departments" },
  { url: "https://www.bitsathy.ac.in/wp-content/uploads/Infomatica-1-scaled.jpg", caption: "Informatica Placements", sub: "Successful career starts at global enterprise cloud data leader Informatica" },
  { url: "https://www.bitsathy.ac.in/wp-content/uploads/Juspay-1-scaled.jpg", caption: "Juspay Selection Drive", sub: "Excellent placements at India's leading fintech payment engineering platform" },
  { url: "https://www.bitsathy.ac.in/wp-content/uploads/ShopUp-1-scaled.jpg", caption: "ShopUp Placements", sub: "Secured high-caliber offers from international B2B commerce platform ShopUp" },
  { url: "https://www.bitsathy.ac.in/wp-content/uploads/Swigy-1-scaled.jpg", caption: "Swiggy Placements", sub: "Outstanding tech roles secured in India's leading consumer tech giant" },
  { url: "https://www.bitsathy.ac.in/wp-content/uploads/Virtusa-1-scaled.jpg", caption: "Virtusa Recruitment Drive", sub: "Securing positions in global digital engineering solutions provider Virtusa" },
  { url: "https://www.bitsathy.ac.in/wp-content/uploads/Paypal.jpg", caption: "PayPal Placements", sub: "Students recruited by premier global payment gateway PayPal" }
];

// Placement insights statistics
const salaryBreakdown = [
  { range: "Above 20 LPA", offers: "05 Offers", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { range: "Above 15 LPA", offers: "20 Offers", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { range: "Above 10 LPA", offers: "121 Offers", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { range: "Above 7 LPA", offers: "456 Offers", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { range: "Above 5 LPA", offers: "742 Offers", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { range: "Above 4 LPA", offers: "1218 Offers", color: "bg-slate-200/50 text-slate-600 border-slate-250" }
];

// Donut data representation
const careerDestinations = [
  { name: "Core Engineering", ratio: 33.9, color: "#3B82F6", desc: "Placements in manufacturing, automotive, energy, and semiconductor industries." },
  { name: "IT (Product-based)", ratio: 32.1, color: "#8B5CF6", desc: "Openings in software engineering, algorithmic design, and product architectures." },
  { name: "IT (Service-based)", ratio: 30.8, color: "#F97316", desc: "Roles in tech services, cloud consulting, and enterprise development." },
  { name: "Others", ratio: 3.1, color: "#F59E0B", desc: "Positions in consulting, management, startups, and higher studies." }
];

// Why Parents Trust BIT - 6 features
const trustFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 00-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    colorClass: "text-purple-600 bg-purple-50 border-purple-100",
    title: "All-Round Development",
    text: "Comprehensive training programs covering technical languages, quantitative aptitude, verbal skills, and mock interviews."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100",
    title: "Personalized Support",
    text: "Individual skill mapping and customized feedback reports to align students with their core interest areas."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    colorClass: "text-blue-600 bg-blue-50 border-blue-100",
    title: "Competitive coaching",
    text: "Syllabus coaching for competitive exams including GATE, GRE, CAT, and direct guidance for Civil Services."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    colorClass: "text-rose-600 bg-rose-50 border-rose-100",
    title: "Modern Infrastructure",
    text: "Equipped with dedicated campus interview suites, virtual presentation halls, and group activity labs."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    colorClass: "text-amber-600 bg-amber-50 border-amber-100",
    title: "Professional Discipline",
    text: "Fostering a workspace-like atmosphere to smoothly prepare students for corporate code of conduct."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    colorClass: "text-cyan-600 bg-cyan-50 border-cyan-100",
    title: "Dedicated Mentoring Team",
    text: "Managed by dedicated career experts who mentor and guide students through every stage of drive selection."
  }
];

// Placement Team details
const team = [
  {
    name: "Mr. Ranjith G",
    role: "Placement Officer",
    phone: "9600975790",
    image: "https://www.bitsathy.ac.in/wp-content/uploads/2022/09/download4.png"
  },
  {
    name: "Mr. Nirmal Kumar R",
    role: "Industry Relation Officer",
    phone: "9965617722",
    image: "https://www.bitsathy.ac.in/wp-content/uploads/Prof.Nirmal-Kumar-R.png"
  },
  {
    name: "Dr. Mathan Kumar P",
    role: "Industry Relation Officer - Core",
    phone: "8344833839",
    image: "https://www.bitsathy.ac.in/wp-content/uploads/Dr-Mathankumar-P-1.png"
  },
  {
    name: "Mr. Mohan Kumar V",
    role: "Assistant Placement Officer",
    phone: "9597391293",
    image: "https://www.bitsathy.ac.in/wp-content/uploads/Mr-Mohan-Kumar-V.png"
  },
  {
    name: "Mr. Vinoth M",
    role: "Assistant Placement Officer",
    phone: "8523991483",
    image: "https://www.bitsathy.ac.in/wp-content/uploads/Mr-Vinoth-M.png"
  }
];

// Company Card component
function CompanyCard({ name, logo }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative flex items-center justify-center p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-purple-300 min-h-[90px]">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />
      {imgError ? (
        <span className="font-extrabold text-xs text-slate-500 text-center uppercase tracking-wider line-clamp-2">
          {name}
        </span>
      ) : (
        <img
          src={logo}
          alt={`${name} Logo`}
          onError={() => setImgError(true)}
          className="max-w-full max-h-11 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      )}
    </div>
  );
}

export default function Placements() {
  const [activeRecruiterTab, setActiveRecruiterTab] = useState("product");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredDest, setHoveredDest] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Loop Hero Image Slider every 5 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  // Donut values
  const radius = 70;
  const strokeWidth = 22;
  const center = 90;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercent = 0;

  // Filtered recruiter lists based on search query
  const filteredRecruiters = useMemo(() => {
    const list = recruitersCategories[activeRecruiterTab] || [];
    if (!searchQuery.trim()) return list;
    return list.filter((r) => r.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [activeRecruiterTab, searchQuery]);

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-purple selection:text-white relative overflow-hidden">
      <Navbar />

      {/* CSS keyframe animations for marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
      `}} />

      {/* Decorative Blob assets */}
      <div className="absolute top-12 left-[-15%] w-[45vw] h-[45vw] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />

      {/* Split Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-tr from-slate-100 to-white border-b border-slate-200">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/5 border border-brand-purple/10">
              <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">
                Corporate Relations &amp; Placement Cell
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
              Where Ambition Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">
                Opportunity
              </span>
            </h1>
            <p className="text-slate-655 max-w-2xl text-base sm:text-lg leading-relaxed font-semibold">
              Bannari Amman Institute of Technology bridges academic capability with professional opportunities, delivering record placements and high-caliber salary packages yearly.
            </p>
            
            {/* Quick stats tags inside hero */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-xl font-extrabold text-xs sm:text-sm text-slate-700">
                🚀 <span className="text-brand-blue">44.0 LPA</span> Highest Package
              </div>
              <div className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-xl font-extrabold text-xs sm:text-sm text-slate-700">
                💼 <span className="text-brand-orange">1920+</span> Offers Secured
              </div>
              <div className="px-5 py-2.5 bg-white border border-slate-200 shadow-sm rounded-xl font-extrabold text-xs sm:text-sm text-slate-700">
                🏢 <span className="text-brand-purple">350+</span> Recruiters
              </div>
            </div>
          </div>

          {/* Hero Right: Interactive Image Slider */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-2xl aspect-[16/10] bg-white rounded-3xl border border-slate-200 shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg group/slider">
              
              {/* Slides Container */}
              <div className="absolute inset-0 w-full h-full">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                      currentSlide === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0 pointer-events-none"
                    }`}
                  >
                    {/* Slide Image */}
                    <img
                      src={slide.url}
                      alt={slide.caption}
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows (Visible on Hover) */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white z-30 transition-all opacity-0 group-hover/slider:opacity-100 hover:scale-105"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center text-white z-30 transition-all opacity-0 group-hover/slider:opacity-100 hover:scale-105"
                aria-label="Next Slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "w-6 bg-brand-orange" : "w-1.5 bg-white/50 hover:bg-white"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Floating Numerical Dashboard Stats */}
      <section className="py-8 max-w-8xl mx-auto px-6 lg:px-12 w-full">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="text-center flex flex-col justify-center py-2">
            <span className="text-3xl sm:text-5xl font-black text-brand-blue">44.0 LPA</span>
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mt-2">Highest Package</span>
          </div>
          <div className="text-center flex flex-col justify-center py-2">
            <span className="text-3xl sm:text-5xl font-black text-brand-orange">1920+</span>
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mt-2">Student Offers</span>
          </div>
          <div className="text-center flex flex-col justify-center py-2">
            <span className="text-3xl sm:text-5xl font-black text-brand-purple">350+</span>
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mt-2">Companies Visited</span>
          </div>
          <div className="text-center flex flex-col justify-center py-2">
            <span className="text-3xl sm:text-5xl font-black text-emerald-600">2012+</span>
            <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase mt-2">Internships Offered</span>
          </div>
        </div>
      </section>

      {/* Value Stems & Sectors interactive donut */}
      <section className="py-20 max-w-8xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Interactive sector donut */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex flex-col items-center justify-center">
            <h3 className="font-extrabold text-slate-900 text-lg mb-6 text-center">Career Sectors Distribution</h3>
            
            {/* SVG Donut */}
            <div className="relative w-52 h-52 mb-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 180 180">
                {careerDestinations.map((dest, idx) => {
                  const dashArray = (dest.ratio / 100) * circumference;
                  const dashOffset = circumference - (accumulatedPercent / 100) * circumference;
                  accumulatedPercent += dest.ratio;
                  const isHovered = hoveredDest === idx;

                  return (
                    <circle
                      key={idx}
                      cx={center}
                      cy={center}
                      r={radius}
                      fill="transparent"
                      stroke={dest.color}
                      strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      className="transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredDest(idx)}
                      onMouseLeave={() => setHoveredDest(null)}
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-3xl font-black text-slate-800">
                  {hoveredDest !== null ? `${careerDestinations[hoveredDest].ratio}%` : "100%"}
                </span>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider mt-1">
                  {hoveredDest !== null ? careerDestinations[hoveredDest].name.split(" ")[0] : "Verified"}
                </span>
              </div>
            </div>

            {/* Legend Cards */}
            <div className="w-full space-y-3">
              {careerDestinations.map((dest, idx) => {
                const isHovered = hoveredDest === idx;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl flex items-center justify-between border transition-all duration-200 cursor-pointer ${
                      isHovered ? "bg-slate-50 border-slate-350" : "bg-white border-slate-200"
                    }`}
                    onMouseEnter={() => setHoveredDest(idx)}
                    onMouseLeave={() => setHoveredDest(null)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: dest.color }} />
                      <span className="text-xs sm:text-sm font-bold text-slate-700">{dest.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-black text-slate-900">{dest.ratio}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Why parents trust BIT 3x2 Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-orange uppercase block mb-1">
                Value Proposition
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Why Parents Trust BIT Sathy
              </h2>
              <p className="text-slate-500 text-sm font-semibold mt-2 leading-relaxed">
                Our educational approach combines academic discipline with robust industry readiness pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustFeatures.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${feat.colorClass}`}>
                      {feat.icon}
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-2">{feat.title}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">
                      {feat.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Package Breakdown & Stacks */}
      <section className="py-20 bg-slate-100/50 border-t border-b border-slate-200">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Package threshold distribution */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-purple uppercase block mb-1">
                Placement Insights
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Package Distribution
              </h2>
              <p className="text-slate-500 text-sm font-semibold mt-2">
                Outlining the total offers secured by students grouped by annual salary packages.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {salaryBreakdown.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-5 rounded-2xl border flex flex-col justify-between items-center transition-all duration-300 hover:border-slate-450 hover:bg-white ${item.color}`}
                >
                  <span className="text-xs font-bold text-slate-500 block mb-2">{item.range}</span>
                  <span className="font-black text-base sm:text-xl text-slate-800">{item.offers}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Training syllabus */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase block mb-1">
                Structured Preparation
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Training Offers &amp; Stacks
              </h2>
              <p className="text-slate-500 text-sm font-semibold mt-2">
                A structured technical development pipeline conducted by our career development cell.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-4 pb-2 border-b border-slate-100">
                    Technical &amp; Coding
                  </h3>
                  <ul className="space-y-3">
                    {["C, C++, Java & Python", "Advanced Data Structures", "Full Stack Development", "PEGA Certification", "ServiceNow Modules", "Salesforce Academy"].map((c, i) => (
                      <li key={i} className="text-xs text-slate-500 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Core Languages
                </span>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-4 pb-2 border-b border-slate-100">
                    Emerging Tech
                  </h3>
                  <ul className="space-y-3">
                    {["Artificial Intelligence", "Machine Learning", "Cyber Security Stacks", "Big Data Architectures", "Cloud Computing & DevOps", "Industrial Automation", "Embedded & VLSI Design"].map((c, i) => (
                      <li key={i} className="text-xs text-slate-500 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Modern Verticals
                </span>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base mb-4 pb-2 border-b border-slate-100">
                    Career Stacks
                  </h3>
                  <ul className="space-y-3">
                    {["Company Specific Training", "Quantitative Aptitude", "Verbal & Soft Skills", "Resume Crafting", "Mock Interviews", "Competitive Exam Prep", "Overseas Education"].map((c, i) => (
                      <li key={i} className="text-xs text-slate-500 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Soft Capabilities
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Recruiter Partners Showcase: Infinite Marquees & Grid */}
      <section className="py-24 border-b border-slate-200 relative overflow-hidden bg-white">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-6">
          <span className="text-xs font-bold tracking-widest text-brand-purple uppercase block mb-1">
            Recruiter Network
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our Corporate Partners
          </h2>
          <p className="text-slate-500 text-sm font-semibold mt-2">
            Fostering long-term corporate relationships with domestic and global market leaders.
          </p>
        </div>

        {/* Marquee Row 1 (Left to Right) */}
        <div className="flex gap-6 overflow-hidden select-none w-full relative py-2 mb-6 border-y border-slate-100 bg-slate-50/50">
          <div className="flex gap-6 shrink-0 min-w-full justify-around animate-marquee">
            {marqueeCompanies.map((c, i) => (
              <div key={i} className="h-16 w-36 bg-white border border-slate-200/60 rounded-xl flex items-center justify-center p-3 shadow-sm shrink-0">
                <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          {/* Duplicate set for loop */}
          <div className="flex gap-6 shrink-0 min-w-full justify-around animate-marquee" aria-hidden="true">
            {marqueeCompanies.map((c, i) => (
              <div key={`dup1-${i}`} className="h-16 w-36 bg-white border border-slate-200/60 rounded-xl flex items-center justify-center p-3 shadow-sm shrink-0">
                <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Right to Left) */}
        <div className="flex gap-6 overflow-hidden select-none w-full relative py-2 mb-16 border-b border-slate-100 bg-slate-50/50">
          <div className="flex gap-6 shrink-0 min-w-full justify-around animate-marquee-reverse">
            {[...marqueeCompanies].reverse().map((c, i) => (
              <div key={i} className="h-16 w-36 bg-white border border-slate-200/60 rounded-xl flex items-center justify-center p-3 shadow-sm shrink-0">
                <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          {/* Duplicate set for loop */}
          <div className="flex gap-6 shrink-0 min-w-full justify-around animate-marquee-reverse" aria-hidden="true">
            {[...marqueeCompanies].reverse().map((c, i) => (
              <div key={`dup2-${i}`} className="h-16 w-36 bg-white border border-slate-200/60 rounded-xl flex items-center justify-center p-3 shadow-sm shrink-0">
                <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Recruiters Grid with Live Search & Tabs */}
        <div className="max-w-8xl mx-auto px-6 lg:px-12 w-full">
          
          {/* Controls Bar */}
          <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 shadow-sm mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                { id: "product", label: "Product Giants", count: recruitersCategories.product.length },
                { id: "services", label: "IT Services", count: recruitersCategories.services.length },
                { id: "core", label: "Core Engineering", count: recruitersCategories.core.length }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveRecruiterTab(tab.id)}
                  className={`px-4.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                    activeRecruiterTab === tab.id
                      ? "bg-brand-purple text-white shadow-md shadow-purple-500/10 scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            {/* Quick search input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search partners..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl border border-slate-250 bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple/25 focus:border-brand-purple transition-all"
              />
              <svg className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Grid display */}
          {filteredRecruiters.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {filteredRecruiters.map((rec, idx) => (
                <CompanyCard key={idx} name={rec.name} logo={rec.logo} />
              ))}
            </div>
          ) : (
            <div className="p-16 text-center bg-slate-50 border border-slate-200 rounded-3xl">
              <svg className="w-12 h-12 text-slate-350 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-extrabold text-slate-800 text-base">No Partners Found</h3>
              <p className="text-slate-450 text-xs font-semibold mt-1">Try resetting your search query.</p>
            </div>
          )}

        </div>
      </section>

      {/* Placement Relations Team Section with Large Card Portraits */}
      <section className="py-24 bg-slate-100/50">
        <div className="max-w-8xl mx-auto px-6 lg:px-12 w-full">
          
          {/* Header & Contact Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold tracking-widest text-brand-purple uppercase block">
                Team & Contact
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                Placement Relations Office
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed max-w-3xl">
                Get in touch with our relation officers for on-campus drives, corporate visits, collaborative academic interactions, or student internship programs.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-end">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 inline-flex items-center gap-4 shadow-sm w-full lg:w-auto">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Official Placement Email</p>
                  <a href="mailto:placement@bitsathy.ac.in" className="text-brand-blue hover:underline text-xs sm:text-sm font-extrabold">
                    placement@bitsathy.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of 5 Team Members with Big Profile Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-brand-purple/30"
              >
                {/* Profile Portrait */}
                <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://www.bitsathy.ac.in/wp-content/uploads/2022/10/Dr-Sasikala-D.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Team details & Call button */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-brand-purple transition-colors duration-250">
                      {member.name}
                    </h3>
                    <p className="text-slate-450 text-[10px] font-bold uppercase tracking-widest mt-1">
                      {member.role}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <a 
                      href={`tel:${member.phone}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 text-slate-700 hover:bg-brand-blue hover:text-white transition-all text-xs font-black shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 {member.phone}
                    </a>
                  </div>
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
