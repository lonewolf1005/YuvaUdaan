"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionHeader from "../../components/SectionHeader";
import { motion } from "framer-motion";
import { Check, ClipboardList, Send, Calendar, Users, MapPin } from "lucide-react";
import { cn } from "../../lib/utils";

export default function ApplyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-navy/[0.03] -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionHeader 
            title="Start Your Flight of Leadership" 
            subtitle="Apply Now"
            description="Join a movement that nurtures resilience, innovation, and compassion. Be the changemaker India needs."
          />
        </div>
      </section>

      {/* Benefits & Eligibility */}
      <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
           <div className="p-10 glass border-navy/5 rounded-[40px]">
              <h3 className="text-2xl font-bold font-heading text-navy mb-8 flex items-center gap-3">
                 <Check className="text-orange" />
                 Benefits of Joining
              </h3>
              <ul className="space-y-6">
                 {[
                   "World-class leadership training modules",
                   "Access to a national network of mentors",
                   "Hands-on community impact projects",
                   "Official certification from Rotary International",
                   "A lifelong fellowship of like-minded leaders"
                 ].map((benefit) => (
                   <li key={benefit} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-orange/20 flex items-center justify-center shrink-0">
                         <div className="w-1.5 h-1.5 bg-orange rounded-full" />
                      </div>
                      <span className="text-navy/60 font-medium">{benefit}</span>
                   </li>
                 ))}
              </ul>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 border border-navy/5 rounded-3xl bg-navy/5">
                 <Calendar className="text-orange w-8 h-8 mb-4" />
                 <h4 className="font-bold mb-2">Duration</h4>
                 <p className="text-sm text-navy/40">3-6 Months Immersive Experience</p>
              </div>
              <div className="p-8 border border-navy/5 rounded-3xl bg-navy/5">
                 <Users className="text-orange w-8 h-8 mb-4" />
                 <h4 className="font-bold mb-2">Eligibility</h4>
                 <p className="text-sm text-navy/40">Open for youth aged 18-30</p>
              </div>
              <div className="p-8 border border-navy/5 rounded-3xl bg-navy/5">
                 <MapPin className="text-orange w-8 h-8 mb-4" />
                 <h4 className="font-bold mb-2">Location</h4>
                 <p className="text-sm text-navy/40">National Hybrid Platform</p>
              </div>
              <div className="p-8 border border-navy/5 rounded-3xl bg-navy/5">
                 <ClipboardList className="text-orange w-8 h-8 mb-4" />
                 <h4 className="font-bold mb-2">Requirements</h4>
                 <p className="text-sm text-navy/40">Passion for service & leadership</p>
              </div>
           </div>
        </div>

        {/* Application Form UI */}
        <div className="p-10 bg-navy text-white rounded-[40px] shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2" />
           <h3 className="text-3xl font-bold font-heading mb-8 relative z-10">Application Form</h3>
           
           <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6 relative z-10">
              {/* Web3Forms required fields */}
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
              <input type="hidden" name="subject" value="New Application for Yuva Udaan" />
              <input type="hidden" name="from_name" value="Yuva Udaan Website" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Full Name</label>
                    <input type="text" name="name" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-orange outline-none transition-colors" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                    <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-orange outline-none transition-colors" />
                 </div>
              </div>

              <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Phone Number</label>
                 <input type="tel" name="phone" required placeholder="+91 000 000 0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-orange outline-none transition-colors" />
              </div>

              <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Why do you want to join Yuva Udaan?</label>
                 <textarea name="message" required rows={4} placeholder="Tell us about your passion for service..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-orange outline-none transition-colors resize-none"></textarea>
              </div>

              <div className="pt-4">
                 <button type="submit" className="w-full py-5 bg-orange text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-vibrant hover:shadow-xl hover:shadow-orange/20 transition-all flex items-center justify-center gap-3">
                    Start Your Journey
                    <Send className="w-4 h-4" />
                 </button>
              </div>

              <p className="text-center text-xs text-white/30 pt-4">
                 By applying, you agree to our terms of service and privacy policy. 
              </p>
           </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
