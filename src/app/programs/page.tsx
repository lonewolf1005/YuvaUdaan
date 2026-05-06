"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionHeader from "../../components/SectionHeader";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  ShieldCheck, 
  MessageSquare, 
  Users, 
  Settings, 
  Bird, 
  Globe, 
  MapPin, 
  UserPlus, 
  Cpu, 
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";

const modules = [
  {
    title: "Leadership Theories and Finding Your Style",
    description: "Explore fundamental leadership models and discover your personal resonance as a leader.",
    icon: BookOpen,
    color: "bg-navy"
  },
  {
    title: "Ethical Leadership",
    description: "Building character and making decisions grounded in integrity and values.",
    icon: ShieldCheck,
    color: "bg-orange"
  },
  {
    title: "Communication Skills & Public Speaking",
    description: "Master the art of expression, storytelling, and influential communication.",
    icon: MessageSquare,
    color: "bg-saffron"
  },
  {
    title: "Collaboration and Team Building",
    description: "Learn to lead teams by fostering an environment of trust and collective purpose.",
    icon: Users,
    color: "bg-navy-light"
  },
  {
    title: "Problem Solving & Critical Thinking",
    description: "Navigate complex challenges with analytical depth and innovative solutions.",
    icon: Settings,
    color: "bg-orange-vibrant"
  },
  {
    title: "Peacebuilding",
    description: "Cultivating harmony and conflict resolution skills for social cohesion.",
    icon: Bird,
    color: "bg-navy"
  },
  {
    title: "Social Justice and Advocacy",
    description: "Understanding systemic change and standing up for the underrepresented.",
    icon: Globe,
    color: "bg-orange"
  },
  {
    title: "Identifying and Addressing Community Needs",
    description: "Rooting leadership in local impact and sustainable community development.",
    icon: MapPin,
    color: "bg-saffron"
  },
  {
    title: "Diversity, Equity and Inclusion",
    description: "Creating inclusive environments where every voice is valued and heard.",
    icon: UserPlus,
    color: "bg-navy-light"
  },
  {
    title: "AI for Economic Development",
    description: "Leveraging cutting-edge technology to drive progress and national growth.",
    icon: Cpu,
    color: "bg-orange-vibrant"
  }
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-navy/[0.02]" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionHeader 
            title="A Curriculum Designed for Action" 
            subtitle="Our Programs"
            description="Our transformative journey offers 10 specialized modules that nurture resilience, innovation, and compassion — qualities essential for leadership in today's world."
          />
        </div>
      </section>

      {/* Modules Grid */}
      <section className="pb-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, idx) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-8 rounded-3xl bg-white border border-navy/5 hover:border-orange/20 hover:shadow-2xl hover:shadow-orange/5 transition-all duration-500"
            >
              <div className={cn("w-16 h-16 rounded-2xl mb-8 flex items-center justify-center text-white transition-transform group-hover:scale-110", module.color)}>
                {(() => {
                  const Icon = module.icon;
                  return <Icon size={32} />;
                })()}
              </div>
              <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-orange transition-colors h-14 line-clamp-2">
                {module.title}
              </h3>
              <p className="text-sm text-navy/60 leading-relaxed min-h-[60px]">
                {module.description}
              </p>
              <div className="mt-8 pt-8 border-t border-navy/5">
                <span className="text-xs font-bold text-navy/40 uppercase tracking-[0.2em] group-hover:text-orange transition-colors">Module {idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Approach */}
      <section className="bg-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
             <SectionHeader 
               title="Experiential Learning That Sticks" 
               subtitle="Methodology"
               description="More than a program, Yuva Udaan is a platform where young minds learn to lead with confidence through immersion."
               centered={false}
               dark={true}
             />
             <div className="space-y-6">
                {[
                  "Interactive workshops with industry experts",
                  "Experiential learning activities and simulations",
                  "Collaborative community-focused projects",
                  "Mentorship from experienced Rotary leaders"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-orange/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange" />
                    </div>
                    <span className="text-lg text-white/80">{item}</span>
                  </div>
                ))}
             </div>
          </div>
          <div className="flex-1 glass p-10 border-white/5 rounded-[40px] relative">
             <div className="absolute top-0 right-0 p-8">
                <blockquote className="text-6xl text-white/5 font-serif">"</blockquote>
             </div>
             <p className="text-2xl font-medium leading-relaxed italic mb-8 relative z-10 text-white/90">
               "Participants gain the skills and vision to turn ideas into action while remaining grounded in the spirit of nation-building."
             </p>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange rounded-full overflow-hidden" />
                <div>
                   <p className="font-bold">Next Cohort</p>
                   <p className="text-white/40 text-sm">Applications Closing Soon</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy mb-8">Ready to Elevate Your Future?</h2>
        <Link href="/apply" className="btn-secondary group px-12 py-4">
          Start Your Application
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      <Footer />
    </main>
  );
}
