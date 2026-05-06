"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionHeader from "../../components/SectionHeader";
import { motion } from "framer-motion";
import { Sparkles, PlayCircle, Rocket, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import { cn } from "../../lib/utils";

export default function IgniteDreamsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-saffron/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-orange/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionHeader 
            title="From Inspiration to Impact" 
            subtitle="The Synergy"
            description="Ignite Dreams and Yuva Udaan share a powerful vision of lighting the path for youth toward purpose and leadership."
          />
        </div>
      </section>

      {/* Continuum Section */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange/10 blur-[60px] rounded-full" />
            <div className="relative z-10 p-12 bg-white border border-navy/5 shadow-2xl rounded-[40px] overflow-hidden">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-orange/20 rounded-2xl flex items-center justify-center">
                     <Sparkles className="text-orange" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold font-heading text-navy">Ignite Dreams</h3>
                     <p className="text-orange font-bold text-xs uppercase tracking-widest mt-1"> Inspiration Phase </p>
                  </div>
               </div>
               <p className="text-lg text-navy/70 mb-8 leading-relaxed italic">
                 "Ignite Dreams channels inspiration through storytelling and podcasts—helping young people explore meaningful career and entrepreneurial journeys."
               </p>
               <div className="flex gap-4">
                  <div className="px-4 py-2 bg-navy/5 rounded-full text-xs font-bold uppercase tracking-widest text-navy/60">Podcasts</div>
                  <div className="px-4 py-2 bg-navy/5 rounded-full text-xs font-bold uppercase tracking-widest text-navy/60">Stories</div>
                  <div className="px-4 py-2 bg-navy/5 rounded-full text-xs font-bold uppercase tracking-widest text-navy/60">Ambition</div>
               </div>
            </div>
            
            <div className="flex justify-center my-8 md:-my-4">
               <div className="w-12 h-24 md:w-24 md:h-12 border-2 border-dashed border-orange/40 rounded-full flex items-center justify-center relative bg-white z-20">
                  <ArrowRight className="text-orange w-6 h-6 rotate-90 md:rotate-0" />
               </div>
            </div>

            <div className="relative z-10 p-12 bg-navy text-white rounded-[40px] overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Rocket className="w-32 h-32" />
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                     <Rocket className="text-white" />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold font-heading text-white">Yuva Udaan</h3>
                     <p className="text-orange font-bold text-xs uppercase tracking-widest mt-1"> Action Phase </p>
                  </div>
               </div>
               <p className="text-lg text-white/60 mb-8 leading-relaxed italic">
                 "Yuva Udaan builds on this spark, nurturing that inspiration into action through immersive leadership training, collaboration, and community-focused initiatives."
               </p>
               <div className="flex gap-4 flex-wrap">
                  <div className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white/60">Training</div>
                  <div className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white/60">Collaboration</div>
                  <div className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white/60">Leadership</div>
               </div>
            </div>
          </div>

          <div>
             <SectionHeader 
               title="A Complementary Continuum" 
               subtitle="The Philosophy"
               description="Together, they form a seamless path from awakening curiosity to delivering values-driven leadership poised to make a tangible difference."
               centered={false}
             />
             <div className="space-y-12">
                <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center shrink-0">
                      <span className="font-bold text-orange">1</span>
                   </div>
                   <div>
                      <h4 className="font-bold text-xl mb-2 text-navy">Awakening Ambition</h4>
                      <p className="text-navy/60 leading-relaxed">Helping young people explore what's possible and find their "spark" through high-impact stories.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center shrink-0">
                      <span className="font-bold text-navy">2</span>
                   </div>
                   <div>
                      <h4 className="font-bold text-xl mb-2 text-navy">Elevating Potential</h4>
                      <p className="text-navy/60 leading-relaxed">Bridging the gap between the dream and the reality with world-class leadership modules.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center shrink-0">
                      <span className="font-bold text-orange">3</span>
                   </div>
                   <div>
                      <h4 className="font-bold text-xl mb-2 text-navy">Values-Driven Action</h4>
                      <p className="text-navy/60 leading-relaxed">Engaging in nation-building by turning confident leadership into tangible positive change.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pillars of Ignite Dreams */}
      <section className="bg-navy/5 py-24 relative overflow-hidden border-y border-navy/5">
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <SectionHeader 
            title="Explore our Features" 
            subtitle="The Platform"
            description="Ignite Dreams offers a dynamic platform featuring diverse narratives to inspire young minds."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "About Us",
                desc: "Discover the visionary founding team behind Ignite Dreams.",
                href: "/ignite-dreams/about",
                icon: Sparkles
              },
              {
                title: "Leadership Conversations",
                desc: "Engaging discussions with leaders to fuel one’s ambition.",
                href: "/ignite-dreams/leadership-conversations",
                icon: Quote
              },
              {
                title: "Youth Changemakers",
                desc: "Empowering narratives from the champions of grassroots social impact.",
                href: "/ignite-dreams/youth-changemakers",
                icon: Rocket
              },
              {
                title: "Unfiltered Series",
                desc: "Candid discussions on resilience and innovation through adversity.",
                href: "/ignite-dreams/unfiltered-series",
                icon: Sparkles
              },
              {
                title: "Podcasts",
                desc: "Listen to the thought-provoking podcast episodes anytime.",
                href: "/ignite-dreams/podcasts",
                icon: PlayCircle
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={item.href}
                  className="flex flex-col h-full bg-white border border-navy/5 rounded-[40px] p-10 hover:shadow-2xl hover:border-orange/20 hover:-translate-y-2 transition-all group relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 group-hover:bg-orange/10 transition-colors">
                    <item.icon className="text-navy group-hover:text-orange transition-colors" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-navy mb-4 group-hover:text-orange transition-colors">{item.title}</h3>
                  <p className="text-navy/60 leading-relaxed mb-8 flex-grow">{item.desc}</p>
                  <div className="flex items-center gap-2 text-orange font-bold text-sm uppercase tracking-widest">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section Placeholder */}
      <section className="bg-navy-dark py-24 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange/10 to-transparent" />
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <SectionHeader 
                 title="Listen to the Journey" 
                 subtitle="Ignite Dreams Podcast"
                 description="Tune in to stories of resilience, innovation, and leadership from young changemakers across India."
                 centered={false}
                 dark={true}
               />
               <button className="flex items-center gap-4 p-4 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                  <PlayCircle className="text-orange w-12 h-12 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                     <p className="font-bold text-lg">Latest Episode</p>
                     <p className="text-sm text-white/40 italic text-navy/40">Awakening the Leader Within</p>
                  </div>
               </button>
            </div>
            <div className="relative">
               <div className="aspect-square bg-orange/20 blur-[100px] absolute inset-0 -z-10" />
               <div className="aspect-[4/5] glass border-white/5 rounded-[40px] p-12 flex flex-col justify-end">
                  <Quote className="text-orange w-12 h-12 mb-6" />
                  <p className="text-3xl font-medium leading-[1.3] mb-8">
                    "Ignite Dreams awakening ambition and curiosity, and Yuva Udaan elevates it into confident, values-driven leadership."
                  </p>
               </div>
            </div>
         </div>
      </section>
      
      <Footer />
    </main>
  );
}
