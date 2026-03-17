"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("In a real application, this would send an email or submit to an API.");
    setFormData({ name: "", phone: "", eventType: "", eventDate: "", message: "" });
  };

  const handleWhatsApp = () => {
    const text = `Hi, I'm ${formData.name}. I'd like to ask about a ${formData.eventType} event on ${formData.eventDate}. ${formData.message}`;
    const url = `https://wa.me/919632491594?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          title="Get In Touch"
          subtitle="Book Your Event"
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 max-w-6xl mx-auto">
          {/* Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold font-heading mb-1">Studio Location</h4>
                  <p className="text-gray-400 text-sm">Main road, Gundlupete, Padagur, Karnataka 571123</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-purple)]/10 text-[var(--color-brand-purple)] flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold font-heading mb-1">Working Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold font-heading mb-1">Phone / WhatsApp</h4>
                  <p className="text-gray-400 text-sm">96324 91594</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold font-heading mb-1">Email Address</h4>
                  <p className="text-gray-400 text-sm">hello@mvphotography.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500">
              <iframe 
                src="https://maps.google.com/maps?q=Main%20road,%20Gundlupete,%20Padagur,%20Karnataka%20571123&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Studio Location"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full bg-slate-900"
              />
            </div>
          </motion.div>


          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-3xl bg-[var(--color-bg-card)] border border-white/5 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-brand-gold)]/10 to-transparent rounded-bl-full pointer-events-none" />

            <h3 className="text-2xl font-bold font-heading text-white mb-2">Send us a message</h3>
            <p className="text-gray-400 text-sm mb-8">We usually respond within a few hours.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                    placeholder="96324 91594"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Event Type *</label>
                  <select 
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors appearance-none"
                  >
                    <option value="" disabled>Select event type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Pre-Wedding">Pre-Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate">Corporate Event</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Event Date *</label>
                  <input 
                    type="date" 
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Message / Details</label>
                <textarea 
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors resize-none"
                  placeholder="Tell us a bit about your event..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button 
                  type="submit"
                  className="flex-1 px-6 py-4 rounded-xl bg-[var(--color-brand-gold)] text-black font-semibold font-heading hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} /> Submit Form
                </button>
                <button 
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold font-heading hover:bg-[#1DA851] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  Send to WhatsApp
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
