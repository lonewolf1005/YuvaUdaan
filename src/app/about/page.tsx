"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionHeader from "../../components/SectionHeader";
import { motion } from "framer-motion";
import { Heart, Compass, Shield, Users, Landmark, Globe } from "lucide-react";
import { cn } from "../../lib/utils";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-navy overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange/10 -skew-x-[15deg] translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader 
            title="More Than a Program — A Movement." 
            subtitle="About Yuva Udaan"
            description="Yuva Udaan is a youth leadership and service movement that empowers young minds to spread their wings and rise to their fullest potential."
            centered={false}
            dark={true}
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy mb-8">Guided by Global Legacy, Driven by Local Impact</h2>
          <p className="text-lg text-navy/70 mb-6 leading-relaxed">
            Inspired by Rotary’s RYLA Model of global legacy of service, integrity, and fellowship, Yuva Udaan offers a transformative journey where youth discover their inner strength and build leadership skills.
          </p>
          <p className="text-lg text-navy/70 mb-8 leading-relaxed">
            The name signifies flight — a bold step into the future where dreams take shape, values guide action, and service becomes the foundation of leadership.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-navy/5 rounded-2xl">
              <span className="text-3xl font-bold text-orange">20+</span>
              <p className="text-xs text-navy/40 font-bold uppercase tracking-widest mt-2">Years of Legacy</p>
            </div>
            <div className="p-6 bg-navy/5 rounded-2xl">
              <span className="text-3xl font-bold text-navy">5k+</span>
              <p className="text-xs text-navy/40 font-bold uppercase tracking-widest mt-2">Global Network</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-navy to-navy-light rounded-[40px] rotate-3 -z-10" />
          <div className="absolute inset-0 bg-white border border-navy/5 rounded-[40px] overflow-hidden p-8 flex flex-col justify-center">
             <Landmark className="w-16 h-16 text-orange mb-8" />
             <h3 className="text-2xl font-bold text-navy mb-4">India's Progress through Youth Leadership</h3>
             <p className="text-navy/60 leading-relaxed italic">
               "By nurturing visionaries who combine innovation with compassion, Rotary Yuva Udaan aspires to create a generation that not only leads but also uplifts society, ensuring that every flight of youth becomes a flight for India’s progress."
             </p>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-navy-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass p-12 border-white/5 rounded-3xl">
              <div className="w-14 h-14 bg-orange/20 rounded-2xl mb-8 flex items-center justify-center">
                <Globe className="text-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-6 font-heading">Our Vision</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                To create a vibrant platform of learning, mentorship, and collaboration where young leaders from diverse backgrounds come together to solve societal challenges and build a resilient nation.
              </p>
            </div>
            
            <div className="glass p-12 border-white/5 rounded-3xl">
              <div className="w-14 h-14 bg-navy-light/40 rounded-2xl mb-8 flex items-center justify-center">
                <Shield className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 font-heading">Our Mission</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                To nurture resilience, creativity, and compassion — qualities essential for leadership in today’s world. Through workshops, mentorship, and experiential learning, we guide participants to soar high while remaining grounded in values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rotary Connection */}
      <section className="section-padding text-center">
        <SectionHeader 
          title="Rooted in Rotary. Built for Youth."
          subtitle="Rotary Connection"
          description="A global legacy of service, integrity, and fellowship that spans over a century."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-6">
               <Heart className="text-orange" />
            </div>
            <h4 className="font-bold text-lg mb-2">Service</h4>
            <p className="text-sm text-navy/50">Putting service above self in everything we do.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-6">
               <Compass className="text-navy" />
            </div>
            <h4 className="font-bold text-lg mb-2">Integrity</h4>
            <p className="text-sm text-navy/50">Leading with honesty and ethical principles.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-6">
               <Users className="text-orange" />
            </div>
            <h4 className="font-bold text-lg mb-2">Fellowship</h4>
            <p className="text-sm text-navy/50">Building a lifelong network of changemakers.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
