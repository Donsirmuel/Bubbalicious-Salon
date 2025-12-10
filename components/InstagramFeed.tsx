import React from 'react';
import { Instagram, ArrowRight, Heart } from 'lucide-react';
import Reveal from './Reveal';
import { CONTACT_INFO } from '../constants';

const InstagramFeed: React.FC = () => {
    // Curated list of high-reliability images for the feed
    const feedImages = [
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop", // Blonde long hair
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop", // Hairdresser working
        "https://images.unsplash.com/photo-1595476103518-3c8ad029e4a8?q=80&w=600&auto=format&fit=crop", // Blonde back view
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop", // Salon interior
        "https://images.unsplash.com/photo-1582095133179-bfd08d2fc6a8?q=80&w=600&auto=format&fit=crop", // Tools
        "https://images.unsplash.com/photo-1492106087820-71f171780e99?q=80&w=600&auto=format&fit=crop", // Brunette/Balayage
        "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop", // Foiling process
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop", // Stylist close up
    ];

    return (
        <Reveal animation="fade-in-up" className="bg-white py-20 border-t border-sand">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10">
                    <div>
                        <span className="text-blush-dark font-sans font-bold text-xs tracking-widest uppercase mb-3 block">Follow Us</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">@bubbalicioushairandco</h2>
                        <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="flex items-center text-gray-500 hover:text-blush-dark transition-colors font-medium text-sm mt-2">
                            <Instagram size={16} className="mr-2" />
                            Join our community of 5k+ followers
                        </a>
                    </div>
                    <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-charcoal hover:text-blush transition-colors mt-4 md:mt-0 group">
                        View Full Feed <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
                
                {/* Desktop Grid / Mobile Scroll */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4">
                    {feedImages.map((src, i) => (
                        <a 
                            key={i} 
                            href={CONTACT_INFO.socials.instagram} 
                            target="_blank" 
                            rel="noreferrer"
                            className="block aspect-square relative group overflow-hidden bg-sand/20 cursor-pointer"
                        >
                            <img 
                                src={src} 
                                alt={`Instagram Post ${i + 1}`} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-4">
                                <div className="flex items-center gap-1">
                                    <Heart size={20} fill="currentColor" />
                                    <span className="text-sm font-bold">{120 + i * 14}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                
                <div className="md:hidden text-center mt-8">
                        <a href={CONTACT_INFO.socials.instagram} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-charcoal">
                        View Full Feed <ArrowRight size={16} className="ml-2" />
                    </a>
                </div>
            </div>
        </Reveal>
    );
};

export default InstagramFeed;