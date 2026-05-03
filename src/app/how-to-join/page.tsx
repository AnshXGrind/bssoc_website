"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const roles = [
  {
    title: "Contributor",
    desc: "Perfect for students and developers who want to dive into open source.",
    requirements: ["Basic Git knowledge", "Core language proficiency", "Passion for building"],
    benefits: ["Mentorship", "Project Certificate", "Exclusive Swag"],
    href: `${process.env.NEXT_PUBLIC_TALLY_URL || "https://tally.so/r/A7WqlD"}?role=contributor`
  },
  {
    title: "Mentor",
    desc: "For experienced professionals who want to guide the next generation of builders.",
    requirements: ["3+ years experience", "Project maintainer experience", "Good communication"],
    benefits: ["Personal Branding", "Network Access", "Mentor Recognition"],
    href: `${process.env.NEXT_PUBLIC_TALLY_URL || "https://tally.so/r/A7WqlD"}?role=mentor`
  },
  {
    title: "Project Admin",
    desc: "Oversee entire repositories and manage the contributor workflow.",
    requirements: ["Deep technical expertise", "Project lead experience", "Strong coordination skills"],
    benefits: ["Leadership Role", "Impact on Major Projects", "Premium Perks"],
    href: `${process.env.NEXT_PUBLIC_TALLY_URL || "https://tally.so/r/A7WqlD"}?role=project-admin`
  }
];

const faqs = [
  { q: "Is BSSOC beginner friendly?", a: "Yes. While we look for core programming knowledge, we have projects catering to all skill levels." },
  { q: "Do I get paid for participating?", a: "BSSOC is an open-source program focused on learning and experience. We provide swags and certificates, but no direct stipend." },
  { q: "How many hours per week do I need?", a: "We recommend at least 10-15 hours per week to make meaningful progress on your chosen projects." },
  { q: "Can I apply for multiple roles?", a: "You can apply for both Contributor and Project Admin, but you'll be selected for the one that best fits your profile." },
];

export default function HowToJoinPage() {
  return (
    <main className="page-shell">
      <div className="palmer-bar">
        <span>ONBOARDING</span>
        <span className="hidden md:inline-block">BECOME A PART OF BSSOC</span>
        <span>APPLICATIONS OPEN</span>
      </div>

      <section className="page-hero-section">
        <motion.div {...reveal} className="w-full">
          <h1 className="palmer-huge-title mb-16 text-white text-center md:text-left">
            JOIN THE<br />
            <span className="text-white/60">SQUAD.</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roles.map((role) => (
              <div key={role.title} className="glass-card p-10 flex flex-col justify-between border-white/5 hover:border-accent/30 transition-all duration-500">
                <div>
                  <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-6">{role.title}</h3>
                  <p className="text-white/50 font-mono text-sm uppercase mb-10 leading-relaxed">{role.desc}</p>
                  
                  <div className="space-y-8 mb-12">
                    <div>
                      <h4 className="text-accent text-[10px] font-mono tracking-widest uppercase mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {role.requirements.map(req => (
                          <li key={req} className="text-white/70 font-mono text-[11px] uppercase flex items-center gap-2">
                            <span className="w-1 h-1 bg-accent rounded-full" /> {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-accent text-[10px] font-mono tracking-widest uppercase mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {role.benefits.map(benefit => (
                          <li key={benefit} className="text-white/70 font-mono text-[11px] uppercase flex items-center gap-2">
                             <span className="w-1 h-1 bg-white/20 rounded-full" /> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <a 
                  href={role.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-white/20 px-8 py-5 rounded-full text-white font-mono text-[10px] tracking-widest uppercase hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                >
                  Apply for {role.title}
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="page-alt-section py-24 pb-32">
        <motion.div {...reveal} className="w-full">
          <div className="palmer-bar mb-16 border-t-0">
             <span>GUIDE</span>
             <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
             {faqs.map((faq) => (
               <div key={faq.q} className="border-b border-white/5 pb-8">
                  <h4 className="text-white text-lg font-black uppercase tracking-tighter mb-4 flex items-start gap-3">
                    <span className="text-accent">?</span> {faq.q}
                  </h4>
                  <p className="text-white/40 font-mono text-[11px] uppercase leading-relaxed">{faq.a}</p>
               </div>
             ))}
          </div>
        </motion.div>
      </section>

      <section className="page-hero-section py-32 border-t border-white/5">
        <motion.div {...reveal} className="w-full max-w-4xl mx-auto text-center">
          <div className="inline-block border border-accent/20 bg-accent/5 text-accent rounded-full px-6 py-2 text-[10px] font-mono tracking-widest uppercase mb-12">
            Timeline Update
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            Don't Wait for the <br/>
            <span className="text-white/30 italic">Perfect Moment.</span>
          </h2>
          <p className="text-white/40 font-mono text-lg uppercase mb-16 leading-relaxed">
            Applications are reviewed on a rolling basis. The sooner you join, the more time you have to explore the repositories.
          </p>
          <div className="bg-white/5 p-1 px-1 rounded-full inline-flex border border-white/10">
             <div className="bg-accent text-white px-8 py-3 rounded-full text-[10px] font-mono uppercase tracking-widest">
                Priority: 2026 Batch
             </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}