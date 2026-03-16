"use client";

import { MessageCircle, Instagram } from "lucide-react";

export default function FloatingIcons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform hover:shadow-purple-500/30"
        aria-label="Instagram"
      >
        <Instagram size={28} />
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform hover:shadow-green-500/30"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
