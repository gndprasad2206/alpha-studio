"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & John",
    role: "Wedding Clients",
    image: "/images/img_19.jpg",
    text: "MV Photography made our wedding day truly unforgettable. They captured every emotion, every tear, and every laugh beautifully. The final album was beyond our expectations!"
  },
  {
    name: "Emma Davis",
    role: "Mother (Baby Shoot)",
    image: "/images/img_20.jpg",
    text: "The team was so patient and gentle with our newborn. The studio environment was safe and warm, and the resulting pictures are something we will cherish forever."
  },
  {
    name: "Michael Chen",
    role: "Corporate Director",
    image: "/images/img_21.jpg",
    text: "Highly professional service for our annual corporate gala. They managed to cover a 500+ guest event flawlessly, delivering premium quality highlights within 48 hours."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          title="Client Stories"
          subtitle="Testimonials"
          alignment="center"
        />

        <div className="max-w-4xl mx-auto mt-12 relative">
          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--color-brand-gold)] hover:text-black hover:border-transparent transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--color-brand-gold)] hover:text-black hover:border-transparent transition-all"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative h-[400px] sm:h-[350px] w-full overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-16"
              >
                <Quote className="w-16 h-16 text-[var(--color-brand-gold)]/20 mb-6" />
                <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-10">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-brand-gold)]"
                  />
                  <div className="text-left">
                    <h5 className="text-white font-bold font-heading">{testimonials[currentIndex].name}</h5>
                    <p className="text-[var(--color-brand-gold)] text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-[var(--color-brand-gold)]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
