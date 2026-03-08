import { Link } from "wouter";
import { GraduationCap, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-[#2366c9] flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="font-display text-2xl font-black text-white">Edumeup</span>
            </div>
            <p className="text-slate-300 [text-shadow:0_0_10px_rgba(226,232,240,0.2)]">
              Among the Most Comprehensive O-Level Learning Ecosystems. Built on Research-Backed 10X Learning Leap Model™.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" title="Social media" aria-label="Social media" className="text-slate-300 hover:text-white transition-colors [text-shadow:0_0_8px_rgba(226,232,240,0.18)]">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-display text-lg font-black text-slate-50 [text-shadow:0_0_14px_rgba(226,232,240,0.28)]">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "Exam Mastery Path", href: "/programs" },
                { label: "IGCSE / O-Level Bridge Programs", href: "/programs" },
                { label: "Free Resources", href: "/resources" },
                { label: "For Schools", href: "/schools" },
                { label: "SMK Certified (Subject Master Knowledge Certified)", href: "/tutors" },
                { label: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-200 hover:text-white transition-colors [text-shadow:0_0_10px_rgba(226,232,240,0.22)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-6 font-display text-lg font-semibold text-slate-50 [text-shadow:0_0_14px_rgba(226,232,240,0.28)]">Featured Programs</h3>
            <ul className="space-y-4">
              <li className="text-slate-200 [text-shadow:0_0_10px_rgba(226,232,240,0.2)]">Junior Genius (Grades 1-5)</li>
              <li className="text-slate-200 [text-shadow:0_0_10px_rgba(226,232,240,0.2)]">Middle Mastery (Grades 6-8)</li>
              <li className="text-slate-200 [text-shadow:0_0_10px_rgba(226,232,240,0.2)]">O-Level Excellence</li>
              <li className="text-slate-200 [text-shadow:0_0_10px_rgba(226,232,240,0.2)]">IGCSE / O-Level Bridge Programs</li>
              <li className="text-slate-200 [text-shadow:0_0_10px_rgba(226,232,240,0.2)]">School Charter Program</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-display text-lg font-black text-slate-50 uppercase tracking-widest [text-shadow:0_0_14px_rgba(226,232,240,0.28)]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-slate-200 [text-shadow:0_0_10px_rgba(226,232,240,0.2)]">
                <Phone className="h-6 w-6 shrink-0 text-[#2366c9]" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-4 text-slate-200 [text-shadow:0_0_10px_rgba(226,232,240,0.2)]">
                <Mail className="h-6 w-6 shrink-0 text-[#2366c9]" />
                <span>info@edumeup.com</span>
              </li>
              <li className="flex items-center gap-4 text-slate-200 [text-shadow:0_0_10px_rgba(226,232,240,0.2)]">
                <MessageCircle className="h-6 w-6 shrink-0 text-[#2366c9]" />
                <span>Ask Any Question</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-700 pt-8 text-center text-slate-400 [text-shadow:0_0_8px_rgba(226,232,240,0.16)]">
          <p>&copy; {new Date().getFullYear()} Edumeup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
