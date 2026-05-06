"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionHeader from "../../components/SectionHeader";
import { motion } from "framer-motion";
import { Search, Lightbulb, Users, Heart, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";

const steps = [
  {
    title: "Discover Yourself",
    description: "Uncover your hidden potential and define your leadership style through self-reflection and assessment.",
    icon: Search,
    color: "bg-navy"
  },
  {
    title: "Learn & Build Skills",
    description: "Master modern leadership concepts, ethical decision-making, and communication skills.",
    icon: Lightbulb,
    color: "bg-orange"
  },
  {
    title: "Collaborate & Lead",
    description: "Work with diverse peers to solve challenges and lead team-based community initiatives.",
    icon: Users,
    color: "bg-saffron"
  },
  {
    title: "Create Impact",
    description: "Apply your learning to real-world community needs and measurable social change.",
    icon: Heart,
    color: "bg-orange-vibrant"
  },
  {
    title: "Become a Changemaker",
    description: "Graduate with a lifelong commitment to nation-building and service-driven leadership.",
    icon: Rocket,
    color: "bg-navy-dark"
  }
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/[0.03] -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionHeader 
            title="A Transformative Flight Path" 
            subtitle="The Journey"
            description="From discovery to impact, every phase of Yuva Udaan is designed to elevate your leadership potential and ground you in values."
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="pb-32 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[27px] md:left-1/2 md:-translate-x-px w-[2px] bg-gradient-to-b from-orange via-navy to-navy/10" />

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 md:gap-0 items-start ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-[45%] flex flex-col items-start md:items-end">
                   <div className={cn("w-full flex flex-col", idx % 2 === 0 ? "md:items-start" : "md:items-end")}>
                      <div className={cn("p-8 rounded-3xl glass transition-all hover:shadow-2xl hover:shadow-navy/5",
                         idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      )}>
                         <h3 className="text-2xl font-bold text-navy mb-4 font-heading">{step.title}</h3>
                         <p className="text-navy/60 text-lg leading-relaxed">{step.description}</p>
                      </div>
                   </div>
                </div>

                {/* Center Circle */}
                <div className="relative z-10 flex items-center justify-center shrink-0 w-[56px] h-[56px] rounded-full bg-white shadow-xl shadow-navy/10 md:mx-auto">
                   <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white shadow-inner", step.color)}>
                      <step.icon size={20} />
                   </div>
                </div>

                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-navy py-24 text-white overflow-hidden relative">
         <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange blur-[120px] opacity-10" />
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <SectionHeader 
                    title="An Immersive Experience Beyond the Classroom" 
                    subtitle="The Vibe"
                    description="It's not just about theories; it's about life-long connections, vibrant learning platforms, and a shared passion for a better India."
                    centered={false}
                    dark={true}
                  />
                  <div className="flex flex-wrap gap-4">
                     {["Mentorship", "Collaboration", "Action-Oriented", "Resilience-Driven"].map((tag) => (
                       <span key={tag} className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-sm font-bold uppercase tracking-widest text-orange">
                          {tag}
                       </span>
                     ))}
                  </div>
               </div>
               <div className="relative aspect-video glass border-white/5 rounded-3xl p-12 flex items-center justify-center">
                  <div className="text-center">
                     <p className="text-3xl font-heading font-bold mb-4">"A celebration of youthful energy and resilience."</p>
                     <p className="text-white/40 italic">- Rotary Yuva Udaan</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-navy mb-8">Ready to Start Your Journey?</h2>
        <Link href="/apply" className="btn-secondary group px-12 py-4">
          Apply Now
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
