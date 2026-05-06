"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SectionHeader from "../../../components/SectionHeader";
import { motion } from "framer-motion";
import { Flame, Shield, Compass, ArrowRight } from "lucide-react";

export default function UnfilteredSeriesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange/5 blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionHeader 
            title="The Unfiltered Series" 
            subtitle="Raw, Honest, & Real"
            description="Peeling back the layers on the real struggles, failures, and moments of doubt that shaped India's top visionaries."
            dark={true}
          />
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Failures as Fuel",
                  desc: "A deeper look into how pivots and catastrophic failures led to unexpected triumphs.",
                  icon: Flame,
                },
                {
                  title: "Authentic Leadership",
                  desc: "Moving beyond the resume to reveal real mental health challenges and pivots.",
                  icon: Shield,
                },
                {
                  title: "Wanderer's Compass",
                  desc: "Navigating ambiguous times without a defined playbook—career vs. purpose.",
                  icon: Compass,
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[40px] bg-white border border-navy/5 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group"
                >
                   <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 group-hover:bg-orange/10 transition-colors">
                      <item.icon className="text-navy group-hover:text-orange transition-colors" size={32} />
                   </div>
                   <h3 className="text-2xl font-bold font-heading text-navy mb-4">{item.title}</h3>
                   <p className="text-navy/60 leading-relaxed mb-8">{item.desc}</p>
                   <div className="flex items-center gap-2 text-orange font-bold text-sm uppercase tracking-widest">
                      Coming Soon <ArrowRight size={16} />
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
