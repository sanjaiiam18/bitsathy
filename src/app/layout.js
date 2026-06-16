import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { query } from "@/lib/db";

export const metadata = {
  title: "Bannari Amman Institute of Technology | BIT Sathy | Autonomous College",
  description: "Bannari Amman Institute of Technology (Autonomous) is a premier engineering college in Sathyamangalam, Tamil Nadu. Accredited by NAAC with 'A+' Grade, offering world-class engineering, technology, and management programs.",
};

export default async function RootLayout({ children }) {
  // Fetch brand colors from database with fallback defaults
  let brandBlue = "#1e3a8a";
  let brandOrange = "#f97316";
  let brandCyan = "#06b6d4";
  let brandPurple = "#6366f1";

  try {
    const settings = await query("SELECT * FROM `site_settings`");
    settings.forEach((row) => {
      if (row.setting_key === "brand_blue") brandBlue = row.setting_value;
      if (row.setting_key === "brand_orange") brandOrange = row.setting_value;
      if (row.setting_key === "brand_cyan") brandCyan = row.setting_value;
      if (row.setting_key === "brand_purple") brandPurple = row.setting_value;
    });
  } catch (err) {
    console.warn("Could not load dynamic theme settings from database, falling back to CSS defaults.");
  }

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --brand-blue: ${brandBlue} !important;
              --brand-orange: ${brandOrange} !important;
              --brand-cyan: ${brandCyan} !important;
              --brand-purple: ${brandPurple} !important;
            }
          `
        }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  );
}


