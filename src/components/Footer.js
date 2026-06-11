import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-655 border-t border-slate-200 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="Bannari Amman Institute of Technology"
                  className="h-11 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 mb-6 font-medium">
              BIT is an autonomous college established in 1996, aiming to offer cutting-edge tech training 
              and research to develop competent engineering leaders.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-cyan hover:text-white flex items-center justify-center transition-all">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-blue hover:text-white flex items-center justify-center transition-all">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all">
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.016-1.07-1.815-2.085-2.087-1.838-.495-9.213-.495-9.213-.495s-7.375 0-9.213.495c-1.015.272-1.813 1.071-2.085 2.087-.496 1.839-.496 5.672-.496 5.672s0 3.834.496 5.673c.272 1.015 1.07 1.813 2.085 2.086 1.838.495 9.213.495 9.213.495s7.375 0 9.213-.495c1.015-.273 1.813-1.07 2.085-2.086.496-1.839.496-5.673.496-5.673s0-3.833-.496-5.672zm-14.248 9.382v-7.09l6.165 3.548-6.165 3.542z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 tracking-wider uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3.5 text-sm font-semibold text-slate-600">
              <li><Link href="/" className="hover:text-brand-blue transition-colors">Home Dashboard</Link></li>
              <li><Link href="/about" className="hover:text-brand-blue transition-colors">About Institution</Link></li>
              <li><Link href="/academics" className="hover:text-brand-blue transition-colors">Departments List</Link></li>
              <li><Link href="/placements" className="hover:text-brand-blue transition-colors">Placement Records</Link></li>
              <li><Link href="/campus-life" className="hover:text-brand-blue transition-colors">Student Life & NCC</Link></li>
              <li><Link href="/contact" className="hover:text-brand-blue transition-colors">Contact & Admissions</Link></li>
            </ul>
          </div>

          {/* Column 3: Portals */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 tracking-wider uppercase mb-6">Portals & Links</h4>
            <ul className="space-y-3.5 text-sm font-semibold text-slate-600">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Student ERP Login</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Faculty Portal</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Digital Library Access</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Research Repository</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Alumni Network Portal</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">NPTEL Local Chapter</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 tracking-wider uppercase mb-6">Newsletter</h4>
            <p className="text-sm leading-relaxed mb-4 text-slate-500 font-medium">
              Subscribe to our monthly newsletter to stay updated on fests, conferences, and placement drives.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-brand-purple flex-1 font-semibold"
              />
              <button className="px-4 py-2.5 rounded-xl bg-brand-purple hover:bg-brand-purple/95 text-white font-bold text-sm transition-colors shadow-sm">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4 font-bold">
          <p>&copy; {new Date().getFullYear()} Bannari Amman Institute of Technology. All Rights Reserved.</p>
          <p>Designed for academic preview. Official website: <a href="https://www.bitsathy.ac.in/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:underline">bitsathy.ac.in</a></p>
        </div>
      </div>
    </footer>
  );
}
