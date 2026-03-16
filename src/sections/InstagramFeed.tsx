"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const feedImages = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518331647614-7a1f04cd34ce?q=80&w=2069&auto=format&fit=crop"
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          title="On The Gram"
          subtitle="Follow Us"
          alignment="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-12 mb-12">
          {feedImages.map((img, idx) => (
            <motion.a 
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden group block"
            >
              <img 
                src={img} 
                alt={`Instagram Post ${idx}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/60 via-pink-500/60 to-yellow-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
          >
            <Instagram size={20} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
