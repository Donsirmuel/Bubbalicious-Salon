import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';
import Reveal from './Reveal';
import { BOOKING_URL } from '../constants';

interface HeroCarouselProps {
    onNavigate: (view: any) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Images */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 mix-blend-multiply"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 mt-10">
        <Reveal animation="fade-in-down" delay="delay-100">
          <span className="inline-block py-2 px-5 border border-white/30 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-sans tracking-[0.2em] uppercase mb-8 shadow-lg">
            Deception Bay Rd, Rothwell
          </span>
        </Reveal>
        
        <div className="min-h-[180px] md:min-h-[220px] flex flex-col justify-center items-center">
            {HERO_IMAGES.map((item, index) => (
                 <div key={index} className={`transition-all duration-700 absolute transform ${
                    index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                 }`}>
                     <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-6 drop-shadow-lg">
                        {item.heading}
                    </h1>
                     <p className="font-sans text-white/90 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        {item.subheading}
                    </p>
                 </div>
            ))}
        </div>

        <div className="mt-8 md:mt-0">
             <Reveal animation="fade-in-up" delay="delay-500">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                    href={BOOKING_URL}
                    className="w-full sm:w-auto px-10 py-4 bg-blush hover:bg-white text-dark-cta rounded-full font-sans font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                    Book Online
                </a>
                <button 
                    onClick={() => onNavigate('GALLERY')}
                    className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-charcoal rounded-full font-sans font-medium transition-all duration-300"
                >
                    View Gallery
                </button>
                </div>
            </Reveal>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-3">
             {HERO_IMAGES.map((_, idx) => (
                 <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1 rounded-full transition-all duration-500 ${
                        idx === currentIndex ? 'w-8 bg-blush' : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                 />
             ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;