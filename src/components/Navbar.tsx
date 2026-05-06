"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Journey", href: "/journey" },
  { name: "Impact", href: "/impact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isDarkPage = pathname === "/about" || pathname === "/impact";
  const isTransparentText = isDarkPage && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-navy/5 py-4" : "bg-transparent py-6"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/images/logo.png" 
                alt="Yuva Udaan Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={cn("font-heading font-bold text-xl leading-tight group-hover:text-orange transition-colors", isTransparentText ? "text-white" : "text-navy")}>Yuva Udaan</span>
              <span className={cn("text-[10px] font-medium tracking-widest uppercase", isTransparentText ? "text-white/60" : "text-navy/60")}>Rise. Lead. Transform.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "nav-link relative py-1 flex items-center gap-1",
                    pathname === link.href
                      ? "text-orange" 
                      : (isTransparentText ? "text-white/80" : "text-navy/80")
                  )}
                >
                  {link.name}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>


              </div>
            ))}
            <Link
              href="/apply"
              className="bg-navy text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-orange hover:shadow-xl hover:shadow-orange/20 transition-all duration-300 group flex items-center gap-2"
            >
              Apply Now
              <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2 rounded-full transition-colors", isTransparentText ? "text-white hover:bg-white/10" : "text-navy hover:bg-navy/5")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl p-8 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <span className="font-heading font-bold text-navy text-xl">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-navy/5 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-navy" />
                  </button>
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col gap-3"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-2xl font-heading font-semibold transition-colors",
                          pathname === link.href
                            ? "text-orange" 
                            : "text-navy/60"
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Link
                    href="/apply"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-navy text-white text-center py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-orange transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
