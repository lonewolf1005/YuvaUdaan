"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SectionHeader from "../../../components/SectionHeader";
import { motion } from "framer-motion";
import { MessageSquare, Mic2, Users, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LeadershipConversationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange/5 blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionHeader 
            title="Leadership Conversations" 
            subtitle="Insights from the Top"
            description="Engaging with visionaries, pioneers, and leaders to bring you the wisdom needed to navigate your own journey."
            dark={true}
          />
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Policy & Governance",
                  desc: "Understanding the mechanics of nation-building through the eyes of policymakers.",
                  icon: Users,
                  color: "blue"
                },
                {
                  title: "Entrepreneurial Spirit",
                  desc: "Lessons on scaling, resilience, and innovation from India's top founders.",
                  icon: Lightbulb,
                  color: "orange"
                },
                {
                  title: "Social Impact",
                  desc: "Conversations with those who have transformed communities at the grassroots level.",
                  icon: MessageSquare,
                  color: "green"
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

           <div className="mt-20 p-12 bg-navy-dark rounded-[40px] text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                 <Mic2 className="text-orange w-16 h-16 mx-auto mb-6" />
                 <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Stay Tuned for the Launch</h2>
                 <p className="text-white/60 mb-10 leading-relaxed">
                   We are currently in the process of documenting some of the most inspiring conversations India has ever seen. Join our newsletter to be the first to know when we go live.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="px-8 py-4 rounded-full bg-white/5 border border-white/10 focus:border-orange outline-none transition-colors sm:w-80"
                    />
                    <button className="bg-orange text-white px-10 py-4 rounded-full font-bold hover:bg-orange-dark transition-colors">
                      Notify Me
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
