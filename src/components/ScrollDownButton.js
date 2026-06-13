"use client";

import React from "react";

export default function ScrollDownButton({ className = "" }) {
  const handleScroll = () => {
    // Find the navbar height (typically 80px)
    const navbarHeight = 80;
    window.scrollTo({
      top: window.innerHeight - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <button
        onClick={handleScroll}
        className="p-3 rounded-full bg-white/80 hover:bg-white border border-slate-200/60 shadow-md transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-brand-blue"
        aria-label="Scroll to content"
      >
        <svg
          className="w-5 h-5 text-slate-600 group-hover:text-brand-blue transition-colors duration-300 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  );
}
