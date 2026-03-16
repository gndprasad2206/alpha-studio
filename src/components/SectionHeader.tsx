"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col gap-4 mb-16 ${alignClasses[alignment]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[var(--color-brand-gold)] font-medium tracking-widest uppercase text-sm mb-2 block">
          {subtitle || " "}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">
          {title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[var(--color-brand-blue)] via-[var(--color-brand-purple)] to-[var(--color-brand-gold)] mt-6 rounded-full" />
      </motion.div>
    </div>
  );
}
