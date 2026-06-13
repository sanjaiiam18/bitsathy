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

export const metadata = {
  title: "Bannari Amman Institute of Technology | BIT Sathy | Autonomous College",
  description: "Bannari Amman Institute of Technology (Autonomous) is a premier engineering college in Sathyamangalam, Tamil Nadu. Accredited by NAAC with 'A+' Grade, offering world-class engineering, technology, and management programs.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  );
}

