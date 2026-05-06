"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Lightbulb, Heart, Target, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const pillars = [
  {
    title: "Leadership",
    description: "Discover your inner strength and lead with confidence and integrity.",
    icon: GraduationCap,
    color: "bg-navy"
  },
  {
    title: "Service",
    description: "Commit to making a positive impact in your community and uplift society.",
    icon: Heart,
    color: "bg-orange"
  },
  {
    title: "Innovation",
    description: "Combine creativity with compassion to solve real-world problems.",
    icon: Lightbulb,
    color: "bg-saffron"
  },
  {
    title: "Community",
    description: "Join a vibrant platform of learning, mentorship, and collaboration.",
    icon: Users,
    color: "bg-navy-light"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy/5 -skew-x-12 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 blur-[100px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-orange/10 text-orange font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Empowering the Next Generation
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-navy mb-6 leading-[1.1]">
              Empowering Youth to <span className="text-orange">Rise.</span> <span className="text-navy-light">Lead.</span> <span className="text-orange-vibrant underline decoration-4 underline-offset-8">Transform.</span>
            </h1>
            <p className="text-lg text-navy/70 mb-10 max-w-xl leading-relaxed">
              Yuva Udaan is more than a program — it is a movement that nurtures resilience, innovation, and integrity to create a generation that leads and uplifts society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="btn-secondary group">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-primary">
                Explore the Movement
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-navy rounded-3xl overflow-hidden shadow-2xl relative">
              <Image 
                src="/images/hero.png" 
                alt="Youth Leaders" 
                fill 
                className="object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/40 to-navy/80 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl mx-auto mb-8 flex items-center justify-center p-4">
                    <Image 
                      src="/images/logo.png" 
                      alt="Yuva Udaan" 
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="glass p-6 rounded-2xl border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Every flight of youth becomes a flight for India's progress.</h3>
                    <p className="text-white/60 text-sm italic">Inspired by Rotary's global legacy of service.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl max-w-[200px]"
            >
              <p className="text-3xl font-heading font-bold text-navy">500+</p>
              <p className="text-xs text-navy/60 font-medium uppercase tracking-wider">Future Changemakers Empowered</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section (Short) */}
      <section className="py-24 bg-navy-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-px bg-white" />
          <div className="absolute bottom-1/4 left-0 w-1/4 h-[2px] bg-orange" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                title="Rising Above Challenges, Discovering Inner Strength" 
                subtitle="The Vision"
                description="Yuva Udaan is a youth leadership initiative designed to inspire, empower, and elevate the potential of young people. The name, meaning Youth Flight, symbolises the journey of taking bold steps toward a purposeful future."
                centered={false}
                dark={true}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center shrink-0">
                    <Target className="text-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Mission</h4>
                    <p className="text-sm text-white/50">To nurture visionaries who combine innovation with compassion.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center shrink-0">
                    <Heart className="text-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Values</h4>
                    <p className="text-sm text-white/50">Grounded in the values of service, integrity, and fellowship.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass border-white/10 p-10 rounded-3xl relative overflow-hidden">
                <Image 
                  src="/images/udaan.png" 
                  alt="Symbolic Flight" 
                  fill 
                  className="object-cover opacity-20 -z-10"
                />
                <blockquote className="text-2xl font-medium leading-relaxed mb-8 italic text-white/90">
                  "It is more than just an award or a program — it is a celebration of youthful energy, resilience, and the spirit of nation-building."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center font-bold text-white shadow-lg">YU</div>
                  <div>
                    <p className="font-bold tracking-tight">Yuva Udaan</p>
                    <p className="text-sm text-white/40">From Inspiration to Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="section-padding">
        <SectionHeader 
          title="Nurturing the Leaders of Tomorrow" 
          subtitle="Key Pillars"
          description="We focus on core qualities essential for leadership in today's complex and rapidly evolving world."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              {...motionProps}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white border border-navy/5 hover:border-orange/20 hover:shadow-2xl hover:shadow-orange/5 transition-all duration-300"
            >
              <div className={cn("w-14 h-14 rounded-2xl mb-8 flex items-center justify-center text-white transition-transform group-hover:rotate-6", pillar.color)}>
                <pillar.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-orange transition-colors">{pillar.title}</h3>
              <p className="text-sm text-navy/60 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-navy mb-8">Ready to Start Your <span className="text-orange italic">Flight?</span></h2>
          <p className="text-xl text-navy/60 mb-12">
            Join a movement that nurtures resilience, innovation, and compassion. Every flight of youth becomes a flight for India's progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-secondary px-12 py-4 text-lg">
              Start Your Journey
            </Link>
            <Link href="/programs" className="px-12 py-4 rounded-full border-2 border-navy text-navy font-bold hover:bg-navy hover:text-white transition-all text-lg">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
