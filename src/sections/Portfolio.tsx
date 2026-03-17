"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { X } from "lucide-react";

const categories = ["All", "Weddings", "Pre-Wedding", "Events", "Baby Shoots"];

const portfolioImages = [
  { id: 1, category: "Weddings", url: "/images/img_10.jpg", style: "row-span-2 col-span-1" },
  { id: 2, category: "Pre-Wedding", url: "/images/img_11.jpg", style: "row-span-1 col-span-1" },
  { id: 3, category: "Events", url: "/images/img_12.jpg", style: "row-span-1 col-span-1" },
  { id: 4, category: "Weddings", url: "/images/img_13.jpg", style: "row-span-1 col-span-2" },
  { id: 5, category: "Baby Shoots", url: "/images/img_4.jpg", style: "row-span-2 col-span-1" },
  { id: 6, category: "Events", url: "/images/img_14.jpg", style: "row-span-1 col-span-1" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          title="Our Portfolio"
          subtitle="Featured Work"
          alignment="center"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                ? "bg-[var(--color-brand-gold)] text-black shadow-lg shadow-[var(--color-brand-gold)]/20" 
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer ${img.style}`}
                onClick={() => setSelectedImage(img.url)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                  <span className="text-[var(--color-brand-gold)] text-xs font-medium tracking-wider uppercase mb-1">
                    {img.category}
                  </span>
                  <p className="text-white text-lg font-heading font-semibold">
                    View Project
                  </p>
                </div>
                <img
                  src={img.url}
                  alt={`Portfolio ${img.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full h-[80vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected Lightbox"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
