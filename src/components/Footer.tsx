import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Heart, Mail, Phone, MapPin, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Programs", href: "/programs" },
      { name: "Journey", href: "/journey" },
      { name: "Impact", href: "/impact" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Apply Now", href: "/apply" },
      { name: "Rotary International", href: "https://www.rotary.org" },
      { name: "RYLA", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                <Image 
                  src="/images/logo.png" 
                  alt="Yuva Udaan Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-xl leading-tight">Yuva Udaan</span>
                <span className="text-[10px] text-white/50 font-medium tracking-[0.2em] uppercase">Rise. Lead. Transform.</span>
              </div>
            </Link>
            <p className="text-white/60 mb-8 max-w-xs text-sm leading-relaxed">
              Empowering youth to rise above challenges, discover their inner strength, and build a purposeful future for nation-building.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-heading font-bold text-lg mb-8 uppercase tracking-widest text-white/40 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-orange hover:translate-x-1 transition-all flex items-center gap-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-heading font-bold text-lg mb-8 uppercase tracking-widest text-white/40 text-sm">
              Get in Touch
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center shrink-0">
                  <Mail className="text-orange" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:yuvaudaan.in@gmail.com" className="text-white/80 hover:text-orange transition-colors">
                    yuvaudaan.in@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange/20 flex items-center justify-center shrink-0">
                  <Phone className="text-orange" size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <a href="tel:+911234567890" className="text-white/80 hover:text-orange transition-colors">
                    +91 (0) 123 456 7890
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} Yuva Udaan. Made with <Heart size={12} className="text-orange fill-orange" /> by Rotary International.
          </p>
          <div className="flex gap-8 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
