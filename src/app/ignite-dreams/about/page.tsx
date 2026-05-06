"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SectionHeader from "../../../components/SectionHeader";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Globe, Users, Heart } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Years in Rotaract", value: "24+", icon: Heart },
  { label: "Lives Ignited", value: "8L+", icon: Users },
  { label: "Startup Ecosystem", value: "National", icon: Globe },
  { label: "Experience", value: "20+ Years", icon: Briefcase },
];

export default function IgniteDreamsAboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.2),transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionHeader 
            title="Our Founding Team" 
            subtitle="The Visionaries"
            description="Meet the leaders driving the movement to inspire and empower the next generation of Indian changemakers."
            dark={true}
          />
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Image & Quick Stats */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl mb-8 group">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors duration-500 z-10" />
                <Image 
                  src="/images/logo.png" 
                  alt="Karthik Kittu" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-navy to-transparent">
                  <h3 className="text-2xl font-bold font-heading text-white mb-1">Karthik Kittu</h3>
                  <p className="text-orange font-medium text-sm">Innovation Catalyst & Social Entrepreneur</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-4 bg-navy/5 rounded-2xl border border-navy/5 hover:border-orange/20 transition-colors">
                    <stat.icon className="text-orange w-5 h-5 mb-2" />
                    <p className="text-xl font-bold text-navy">{stat.value}</p>
                    <p className="text-[10px] text-navy/40 font-bold uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Detailed Bio */}
            <div className="lg:col-span-8 space-y-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold font-heading text-navy mb-8 leading-tight">
                  Driving Transformative Change Through <span className="text-orange">Innovation & Leadership.</span>
                </h2>
                
                <p className="text-lg text-navy/70 leading-relaxed mb-6">
                  Karthik Kittu is an Innovation Catalyst, Social Entrepreneur, and Public Policy Professional with a proven track record in building startup ecosystems and fostering strategic collaborations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="p-8 bg-orange/5 rounded-[32px] border border-orange/10">
                    <Award className="text-orange w-8 h-8 mb-4" />
                    <h4 className="font-bold text-xl mb-3 text-navy">National Impact</h4>
                    <p className="text-sm text-navy/60 leading-relaxed">
                      Spearheaded the National Incubator Capacity Development Program for DPIIT, positioning India's top 25 incubators for success.
                    </p>
                  </div>
                  <div className="p-8 bg-navy/5 rounded-[32px] border border-navy/10">
                    <Globe className="text-navy w-8 h-8 mb-4" />
                    <h4 className="font-bold text-xl mb-3 text-navy">Global Representation</h4>
                    <p className="text-sm text-navy/60 leading-relaxed">
                      Represented India at Commonwealth Asia Alliance in Brunei, and joined a CII Start-up Mission to the US as a White House invitee.
                    </p>
                  </div>
                </div>

                <p className="text-navy/70 leading-relaxed mb-6">
                  His expertise spans the development of incubation and acceleration programs, policy advocacy, and promoting entrepreneurship. He served on Karnataka’s High Power Committee to elevate district-level institutions into centres of excellence.
                </p>

                <p className="text-navy/70 leading-relaxed mb-6">
                  During his 24+ years at Rotaract, he played a pivotal role in expanding the organisation from 8 members in 2010 to 130,000+ across 8 countries and has helped ignite over 8 lakh lives.
                </p>

                <div className="mt-12 p-8 border-l-4 border-orange bg-navy-dark text-white rounded-r-[32px]">
                   <p className="text-2xl font-heading italic leading-relaxed">
                     "If the odds are against us; we are stronger."
                   </p>
                   <p className="mt-4 text-orange font-bold uppercase tracking-widest text-xs">— Karthik Kittu</p>
                </div>
              </div>

              {/* Key Achievements List */}
              <div className="pt-12 border-t border-navy/5">
                <h3 className="text-2xl font-bold font-heading text-navy mb-8">Key Milestones</h3>
                <div className="space-y-6">
                  {[
                    "Co-authored concept paper for Reimagining Tourism via OneTAC",
                    "Established TIDE 2.0 at IIIT Bangalore",
                    "Co-led Incubator/Accelerator Pavilion at Startup Mahakumbh",
                    "District Rotaract Representative Founder President of South Asia",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-orange/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-orange" />
                      </div>
                      <p className="text-navy/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
