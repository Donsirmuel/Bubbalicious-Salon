import React from 'react';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { BOOKING_URL, CONTACT_INFO } from '../constants';
import { ViewState } from '../types';

interface FooterProps {
    onNavigate: (view: ViewState) => void;
    onBookingClick: () => void;
}

// Custom TikTok Icon since it might be missing in older Lucide versions
const TikTokIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC<FooterProps> = ({ onNavigate, onBookingClick }) => {
  return (
    <footer className="bg-charcoal text-sand pt-16 pb-24 md:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <h2 className="font-serif text-2xl font-bold">Bubbalicious Hair & Co</h2>
            <p className="font-sans text-sand/80 text-sm leading-relaxed max-w-xs">
              Rothwell’s premier studio for lived-in colour and luxury extensions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-blush transition-colors p-2 bg-white/5 rounded-full" aria-label="Instagram"><Instagram size={18} /></a>
              <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-blush transition-colors p-2 bg-white/5 rounded-full" aria-label="Facebook"><Facebook size={18} /></a>
              <a href={CONTACT_INFO.socials.tiktok} target="_blank" rel="noreferrer" className="hover:text-blush transition-colors p-2 bg-white/5 rounded-full" aria-label="TikTok"><TikTokIcon size={18} /></a>
            </div>
            {/* Payment Methods */}
            <div className="pt-6">
                <p className="text-[10px] uppercase tracking-widest text-sand/40 mb-3">Accepted Payments</p>
                <div className="flex flex-wrap gap-2 text-[10px] font-sans font-medium text-sand/70">
                    <span className="bg-white/10 px-2 py-1 rounded">Afterpay</span>
                    <span className="bg-white/10 px-2 py-1 rounded">ZipPay</span>
                    <span className="bg-white/10 px-2 py-1 rounded">Visa/Mastercard</span>
                    <span className="bg-white/10 px-2 py-1 rounded">Cash</span>
                </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-blush">Menu</h3>
            <ul className="space-y-2 font-sans text-sm text-sand/80">
              <li><button onClick={() => onNavigate('SERVICES')} className="hover:text-white transition-colors text-left">Services & Pricing</button></li>
              <li><button onClick={() => onNavigate('GALLERY')} className="hover:text-white transition-colors text-left">Gallery</button></li>
              <li><button onClick={() => onNavigate('TEAM')} className="hover:text-white transition-colors text-left">Meet the Team</button></li>
              <li><button onClick={onBookingClick} className="hover:text-white transition-colors text-left">Book Online</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-blush">Visit Us</h3>
            <div className="space-y-3 font-sans text-sm text-sand/80">
              <a href={CONTACT_INFO.mapLink} target="_blank" rel="noreferrer" className="flex items-start space-x-3 hover:text-white transition-colors group">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-blush group-hover:text-white transition-colors" />
                <span>{CONTACT_INFO.address}<br/>{CONTACT_INFO.city}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center space-x-3 hover:text-white transition-colors group">
                <Phone size={18} className="flex-shrink-0 text-blush group-hover:text-white transition-colors" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-blush">Opening Hours</h3>
            <ul className="space-y-1 font-sans text-sm text-sand/80">
                {CONTACT_INFO.hours.map((item, idx) => (
                    <li key={idx} className="flex justify-between max-w-[200px]">
                        <span className="w-24 font-medium">{item.day.split(' ')[0]}</span>
                        <span className="text-white/60">{item.time}</span>
                    </li>
                ))}
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-sand/10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <span className="font-sans text-xs text-sand/40">© {new Date().getFullYear()} Bubbalicious Hair & Co. All rights reserved.</span>
          <span className="font-sans text-xs text-sand/30">ABN 12 345 678 910</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;