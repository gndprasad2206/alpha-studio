"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/img_6.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-transparent via-black/40 to-[#050505]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full border border-[var(--color-brand-gold)]/50 text-[var(--color-brand-gold)] text-xs md:text-sm font-medium tracking-widest uppercase bg-black/30 backdrop-blur-md inline-block">
              Premium Photography Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white font-heading leading-tight mb-6"
          >
            Capture Your Best <br />
            <span className="gradient-text animate-pulse">Moments</span> With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl font-light mb-10 leading-relaxed"
          >
            Professional photography and cinematic videography tailored to make your memories last a lifetime. Exquisite clarity, stunning detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <Link
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-[var(--color-brand-gold)] hover:scale-105 transition-all duration-300"
            >
              Book Your Event <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white font-semibold hover:bg-[#25D366] hover:border-[#25D366] hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
