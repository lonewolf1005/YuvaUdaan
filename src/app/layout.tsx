import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Yuva Udaan | Empowering Youth to Rise, Lead, and Transform",
  description: "Yuva Udaan is a youth leadership movement inspired by Rotary's RYLA model, empowering young individuals to discover their potential and create meaningful impact.",
  keywords: "Youth Leadership, RYLA, Yuva Udaan, Service, Nation Building, Youth Empowerment, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-orange/20 selection:text-orange">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
