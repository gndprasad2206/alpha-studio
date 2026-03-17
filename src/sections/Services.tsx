"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Sparkles, Heart, Gift, Baby, Briefcase, Video } from "lucide-react";

const services = [
  {
    icon: <Heart className="w-8 h-8 text-[var(--color-brand-purple)]" />,
    title: "Wedding Photography",
    description: "Capturing the magic and emotion of your special day with elegant, timeless style.",
    image: "/images/img_15.jpg"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[var(--color-brand-gold)]" />,
    title: "Pre-Wedding Shoots",
    description: "Creative and romantic conceptual shoots to tell your unique love story.",
    image: "/images/img_3.jpg"
  },
  {
    icon: <Gift className="w-8 h-8 text-[#FF3366]" />,
    title: "Birthday Events",
    description: "Vibrant and candid shots to remember your joyous celebrations.",
    image: "/images/img_16.jpg"
  },
  {
    icon: <Baby className="w-8 h-8 text-[var(--color-brand-blue)]" />,
    title: "Baby Shoots",
    description: "Soft, adorable, and safe photography sessions for your little ones.",
    image: "/images/img_9.jpg"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
    title: "Corporate Events",
    description: "Professional coverage for seminars, conferences, and brand launches.",
    image: "/images/img_17.jpg"
  },
  {
    icon: <Video className="w-8 h-8 text-rose-400" />,
    title: "Cinematic Videography",
    description: "High-definition storytelling through stunning cinematic video production.",
    image: "/images/img_18.jpg"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          title="Our Premium Services"
          subtitle="What We Offer"
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-[var(--color-bg-card)] border border-white/5 hover:border-[var(--color-brand-gold)]/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20 w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 relative z-20 bg-gradient-to-t from-[var(--color-bg-card)] via-[var(--color-bg-card)] to-transparent -mt-10">
                <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-[var(--color-brand-gold)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
