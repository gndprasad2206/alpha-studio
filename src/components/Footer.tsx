import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white font-heading">
                MV <span className="text-[var(--color-brand-gold)]">PHOTOGRAPHY</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Capturing your most precious moments with elegant and timeless photography. Based in the heart of creativity.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-brand-gold)] hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-brand-blue)] hover:text-black transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-brand-purple)] hover:text-black transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/blogs" className="text-gray-400 hover:text-white transition-colors text-sm">Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-gray-400 text-sm">Wedding Photography</li>
              <li className="text-gray-400 text-sm">Pre-Wedding Shoots</li>
              <li className="text-gray-400 text-sm">Birthday Events</li>
              <li className="text-gray-400 text-sm">Corporate Events</li>
              <li className="text-gray-400 text-sm">Cinematic Videography</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--color-brand-gold)] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Main road, Gundlupete, Padagur, Karnataka 571123</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--color-brand-gold)] shrink-0" />
                <span className="text-gray-400 text-sm">96324 91594</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--color-brand-gold)] shrink-0" />
                <span className="text-gray-400 text-sm">hello@mvphotography.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MV PHOTOGRAPHY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
