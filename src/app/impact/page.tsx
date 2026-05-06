"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionHeader from "../../components/SectionHeader";
import { motion } from "framer-motion";
import { Globe, TrendingUp, Flag, Heart, Users, Bird, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../../lib/utils";

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange opacity-10 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionHeader 
            title="Every Flight of Youth is a Flight for India's Progress" 
            subtitle="Our Impact & Vision"
            description="We are committed to creating a generation that doesn't just lead, but also uplifts society and contributes to the spirit of nation-building."
            dark={true}
          />
        </div>
      </section>

      {/* Nation Building Narrative */}
      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
           <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy mb-8 leading-tight">Elevating India Through Confident Leadership</h2>
           <p className="text-lg text-navy/70 mb-6 leading-relaxed">
             At Rotary Yuva Udaan, we believe that the energy and dreams of youth are the most powerful catalysts for change in India. By nurturing resilience, innovation, and compassion, we are building a more purposeful future.
           </p>
           <p className="text-lg text-navy/70 mb-8 leading-relaxed">
             Our vision is to empower young leaders to identify and solve community needs while remaining grounded in the values of service and integrity.
           </p>
           
           <div className="space-y-4">
              {[
                { label: "Community Needs Addressed", value: "100+", icon: Flag },
                { label: "Youth Leaders Empowered", value: "1,000+", icon: Users },
                { label: "Hours of Service Dedicated", value: "25,000+", icon: Heart }
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-6 p-6 border border-navy/5 rounded-3xl bg-white hover:border-orange/20 transition-colors group">
                   <div className="w-14 h-14 bg-orange/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {(() => {
                        const Icon = stat.icon;
                        return <Icon className="text-orange" />;
                      })()}
                   </div>
                   <div>
                      <p className="text-3xl font-heading font-bold text-navy">{stat.value}</p>
                      <p className="text-sm text-navy/40 font-bold uppercase tracking-widest">{stat.label}</p>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 2, scale: 0.95 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[3/4] glass border-navy/5 rounded-[40px] overflow-hidden p-12 flex flex-col justify-center"
        >
           <Bird className="w-24 h-24 text-orange mb-12 animate-pulse" />
           <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-navy mb-8">"Providing the wings for every youth to soar high."</h3>
           <p className="text-navy/60 text-lg leading-relaxed italic mb-8">
             "Ensuring that every flight of youth becomes a flight for India’s progress by combining innovation with compassion."
           </p>
           <div className="pt-8 border-t border-navy/5 flex items-center gap-4">
              <div className="relative w-14 h-14 transition-transform duration-300 hover:scale-110">
                <Image 
                  src="/images/logo.png" 
                  alt="Yuva Udaan" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div>
                 <p className="font-bold text-navy">Yuva Udaan</p>
                 <p className="text-xs text-navy/40 uppercase tracking-widest font-bold">Legacy of Impact</p>
              </div>
           </div>
        </motion.div>
      </section>

      {/* Long-term Vision */}
      <section className="bg-navy py-24 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <Globe className="w-[800px] h-[800px] absolute -top-1/2 -left-1/4" />
         </div>
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
            <SectionHeader 
               title="The Future We're Building Together" 
               subtitle="Future Vision"
               description="Our long-term roadmap for creating a generation of changemakers poised to lead India's sustainable growth."
               dark={true}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-20">
               {[
                 { 
                   title: "Nation-Wide Initiative", 
                   desc: "Expanding Yuva Udaan to every corner of India, ensuring equal opportunity for leadership development." 
                 },
                 { 
                   title: "Tech-Driven Progress", 
                   desc: "Leveraging AI and new technologies to solve systemic economic and social challenges." 
                 },
                 { 
                   title: "Sustainable Ecosystem", 
                   desc: "Creating a self-sustaining cycle of mentorship where alumni return to guide the next flight." 
                 }
               ].map((item, idx) => (
                 <div key={item.title} className="p-10 glass border-white/5 rounded-3xl group hover:border-orange/40 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:bg-orange transition-colors">
                       <span className="font-bold">{idx + 1}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-4 font-heading">{item.title}</h4>
                    <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding text-center">
         <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-8">Be Part of the Impact</h2>
         <p className="text-xl text-navy/60 mb-12 max-w-2xl mx-auto">
           Join the movement that is shaping the future of leadership in India. Your journey starts with a single step.
         </p>
         <Link href="/apply" className="btn-secondary px-12 py-4 group text-lg inline-block">
           Join the Movement
           <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline-block" />
         </Link>
      </section>

      <Footer />
    </main>
  );
}
