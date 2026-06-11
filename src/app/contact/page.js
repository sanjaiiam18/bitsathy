"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Departments for Dropdown
const departmentsData = [
  { id: "cse", name: "Computer Science & Engineering", code: "CSE" },
  { id: "aids", name: "Artificial Intelligence & Data Science", code: "AI&DS" },
  { id: "aiml", name: "AI & Machine Learning", code: "AI&ML" },
  { id: "it", name: "Information Technology", code: "IT" },
  { id: "ece", name: "Electronics & Communication", code: "ECE" },
  { id: "eee", name: "Electrical & Electronics", code: "EEE" },
  { id: "eie", name: "Electronics & Instrumentation", code: "EIE" },
  { id: "mech", name: "Mechanical Engineering", code: "MECH" },
  { id: "mct", name: "Mechatronics Engineering", code: "MCT" },
  { id: "agri", name: "Agricultural Engineering", code: "AGRI" },
  { id: "civil", name: "Civil Engineering", code: "CIVIL" },
  { id: "biotech", name: "Biotechnology", code: "BIOTECH" },
  { id: "biomed", name: "Biomedical Engineering", code: "BMED" },
  { id: "foodtech", name: "Food Technology", code: "FOODTECH" }
];

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    percentage: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formValues.name.trim()) errors.name = "Name is required";
    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formValues.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formValues.phone.replace(/[^0-9]/g, ""))) {
      errors.phone = "Please enter a 10-digit mobile number";
    }
    if (!formValues.department) errors.department = "Please select a department";
    if (!formValues.percentage.trim()) {
      errors.percentage = "Marks percentage is required";
    } else {
      const pct = parseFloat(formValues.percentage);
      if (isNaN(pct) || pct < 0 || pct > 100) {
        errors.percentage = "Please enter a valid percentage between 0 and 100";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormSubmitted(true);
      setFormErrors({});
    }
  };

  const resetForm = () => {
    setFormValues({
      name: "",
      email: "",
      phone: "",
      department: "",
      percentage: "",
      message: ""
    });
    setFormSubmitted(false);
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-orange selection:text-white relative overflow-hidden">
      <Navbar />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none -z-10" />

      {/* Page Header */}
      <section className="py-20 bg-gradient-to-tr from-slate-100 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/5 border border-brand-blue/10 mb-4">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Contact Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-orange">Admissions Desk</span>
          </h1>
          <p className="text-slate-655 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed font-semibold">
            Have questions about admission guidelines, hostel bookings, or scholarship criteria? 
            Reach out to our offices or fill out our quick enquiry form.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-extrabold text-slate-800 text-lg mb-3">Campus Location</h4>
            <p className="text-slate-550 text-sm leading-relaxed font-semibold">
              Bannari Amman Institute of Technology,<br />
              Alathukombai Post, Sathyamangalam - 638401,<br />
              Erode District, Tamil Nadu, India.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/5 text-brand-orange flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="font-extrabold text-slate-800 text-lg mb-3">Admissions Office</h4>
            <p className="text-slate-550 text-sm leading-relaxed mb-1 font-semibold">
              <strong>Phone:</strong> +91 89401 26000
            </p>
            <p className="text-slate-550 text-sm leading-relaxed mb-3 font-semibold">
              <strong>Landline:</strong> 04295 226086, 226087
            </p>
            <p className="text-slate-550 text-sm leading-relaxed font-semibold">
              <strong>Email:</strong> <a href="mailto:admissions@bitsathy.ac.in" className="text-brand-blue hover:underline">admissions@bitsathy.ac.in</a>
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/5 text-brand-purple flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-extrabold text-slate-800 text-lg mb-3">General Enquiries</h4>
            <p className="text-slate-550 text-sm leading-relaxed mb-1 font-semibold">
              <strong>Phone:</strong> +91 4295 226000, +91 99429 21289
            </p>
            <p className="text-slate-550 text-sm leading-relaxed mb-3 font-semibold">
              <strong>Fax:</strong> +91 4295 226666
            </p>
            <p className="text-slate-550 text-sm leading-relaxed font-semibold">
              <strong>Email:</strong> <a href="mailto:stayahead@bitsathy.ac.in" className="text-brand-purple hover:underline">stayahead@bitsathy.ac.in</a>
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Form Hub */}
      <section id="admissions" className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-24">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-tr from-brand-blue/5 to-slate-100 px-8 py-12 text-center border-b border-slate-200">
            <h3 className="text-3xl font-extrabold tracking-tight mb-2 text-slate-900">
              Start Your Application Journey
            </h3>
            <p className="text-slate-600 text-sm sm:text-base font-semibold">
              Fill out the enquiry form below. Our admissions counsel will contact you shortly 
              with details regarding fees, eligibility, and scholarships.
            </p>
          </div>

          <div className="p-8 sm:p-12">
            {formSubmitted ? (
              <div className="text-center py-12 px-6 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-100/50">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 mb-3">Submission Successful!</h4>
                <p className="text-slate-600 max-w-md mb-8 font-medium leading-relaxed">
                  Thank you for your interest, <strong className="text-slate-900">{formValues.name}</strong>. 
                  An email confirmation has been sent to <span className="text-brand-blue font-bold">{formValues.email}</span>. 
                  One of our admissions officers will call you on <span className="font-bold text-slate-800">{formValues.phone}</span> within 24 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold transition-colors shadow-sm"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.name ? "border-rose-400 bg-rose-50/10 focus:ring-rose-200" : "border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue"
                      } focus:outline-none focus:ring-4 transition-all duration-200`}
                    />
                    {formErrors.name && (
                      <p className="text-rose-500 text-xs font-bold mt-1.5 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.email ? "border-rose-400 bg-rose-50/10 focus:ring-rose-200" : "border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue"
                      } focus:outline-none focus:ring-4 transition-all duration-200`}
                    />
                    {formErrors.email && (
                      <p className="text-rose-500 text-xs font-bold mt-1.5 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        formErrors.phone ? "border-rose-400 bg-rose-50/10 focus:ring-rose-200" : "border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue"
                      } focus:outline-none focus:ring-4 transition-all duration-200`}
                    />
                    {formErrors.phone && (
                      <p className="text-rose-500 text-xs font-bold mt-1.5 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="department" className="block text-sm font-bold text-slate-700 mb-1.5">
                      Preferred Program *
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={formValues.department}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-white ${
                        formErrors.department ? "border-rose-400 bg-rose-50/10 focus:ring-rose-200" : "border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue"
                      } focus:outline-none focus:ring-4 transition-all duration-200`}
                    >
                      <option value="">Select a Department</option>
                      {departmentsData.map(dept => (
                        <option key={dept.id} value={dept.name}>
                          {dept.name} ({dept.code})
                        </option>
                      ))}
                    </select>
                    {formErrors.department && (
                      <p className="text-rose-500 text-xs font-bold mt-1.5 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {formErrors.department}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="percentage" className="block text-sm font-bold text-slate-700 mb-1.5">
                    Class 12th Board Marks / CGPA (%) *
                  </label>
                  <input
                    type="text"
                    id="percentage"
                    name="percentage"
                    value={formValues.percentage}
                    onChange={handleInputChange}
                    placeholder="e.g. 92.5"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      formErrors.percentage ? "border-rose-400 bg-rose-50/10 focus:ring-rose-200" : "border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue"
                    } focus:outline-none focus:ring-4 transition-all duration-200`}
                  />
                  {formErrors.percentage && (
                    <p className="text-rose-500 text-xs font-bold mt-1.5 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {formErrors.percentage}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1.5">
                    Questions or Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formValues.message}
                    onChange={handleInputChange}
                    placeholder="Ask us anything about scholarship schemes, hostel facilities, or admission dates..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-brand-blue/20 focus:border-brand-blue focus:outline-none transition-all duration-200"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-tr from-brand-orange to-brand-purple text-white font-black tracking-wide hover:opacity-95 shadow-xl shadow-brand-orange/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Submit Enquiry Form
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
