"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { Camera, Aperture, Users } from "lucide-react";

const features = [
  {
    icon: <Camera className="w-8 h-8 text-[var(--color-brand-gold)]" />,
    title: "10+ Years Experience",
    description: "Capturing memories that last longer than a lifetime."
  },
  {
    icon: <Aperture className="w-8 h-8 text-[var(--color-brand-blue)]" />,
    title: "Professional Equipment",
    description: "Industry-leading cameras and lighting setups."
  },
  {
    icon: <Users className="w-8 h-8 text-[var(--color-brand-purple)]" />,
    title: "Creative Team",
    description: "Passionate photographers, editors, and directors."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <SectionHeader
              alignment="left"
              title="Welcome to MV Photography"
              subtitle="Our Philosophy"
            />
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              At MV PHOTOGRAPHY, we don't just take photographs; we breathe life into your memories. Based on the philosophy that every moment is a masterpiece waiting to be captured, our team is dedicated to providing premium visual storytelling.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether it's the magical vows of a wedding, the vibrant energy of a corporate event, or the innocent smiles of a newborn, we bring our artistic vision and technical mastery to every frame.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold text-sm font-heading">{feature.title}</h4>
                  <p className="text-gray-500 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] w-full max-w-md ml-auto rounded-3xl overflow-hidden glass-morphism">
              <img
                src="https://images.unsplash.com/photo-1554048663-956eb4afce75?q=80&w=1969&auto=format&fit=crop"
                alt="Photography Equipment"
                className="w-full h-full object-cover p-2 rounded-3xl"
              />
            </div>
            {/* Decorative background gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[var(--color-brand-purple)]/20 via-transparent to-[var(--color-brand-gold)]/20 blur-3xl rounded-full z-0 pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
