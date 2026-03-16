"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { MonitorPlay, ImageIcon, Clock, Lightbulb, Wallet } from "lucide-react";

const reasons = [
  { title: "Professional Editing", icon: <MonitorPlay className="w-8 h-8 text-[#00D1FF]" />, desc: "High-end post-production color grading and retouching." },
  { title: "High Resolution Photos", icon: <ImageIcon className="w-8 h-8 text-[#7000FF]" />, desc: "Crisp, ultra-HD 4K deliverables for print & digital." },
  { title: "Fast Delivery", icon: <Clock className="w-8 h-8 text-[#D4AF37]" />, desc: "Quick turnaround time with secure online gallery links." },
  { title: "Creative Direction", icon: <Lightbulb className="w-8 h-8 text-[#FF3366]" />, desc: "Styling and posing suggestions to bring out your best." },
  { title: "Affordable Packages", icon: <Wallet className="w-8 h-8 text-emerald-400" />, desc: "Premium services tailored to suit various budgets." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-[var(--color-brand-purple)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-[var(--color-brand-blue)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <SectionHeader
              alignment="left"
              title="Why Alpha Studio?"
              subtitle="Our Expertise"
              className="mb-8"
            />
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Choosing the right photographer is cruical. We pride ourselves on a seamless, enjoyable client experience combined with undeniable technical proficiency and artistic flair. Here is what sets us apart.
            </p>

            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop"
              alt="Photography Setup"
              className="w-full h-64 object-cover rounded-3xl mt-8 grayscale hover:grayscale-0 transition-all duration-700 border border-white/5"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className={`p-8 rounded-3xl bg-[var(--color-bg-card)] border border-white/5 hover:border-[var(--color-brand-purple)]/50 transition-all duration-300 relative overflow-hidden group ${
                  idx === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="mb-6 relative z-10 w-14 h-14 rounded-2xl bg-black flex items-center justify-center border border-white/10 shadow-lg">
                  {item.icon}
                </div>
                <h4 className="text-white text-lg font-bold font-heading mb-3 relative z-10">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
