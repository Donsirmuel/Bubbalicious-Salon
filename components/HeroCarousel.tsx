import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';
import Reveal from './Reveal';
import { BOOKING_URL } from '../constants';

interface HeroCarouselProps {
    onNavigate: (view: any) => void;
    onBookingClick: () => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate, onBookingClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = HERO_IMAGES[currentIndex];

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75 mix-blend-multiply"></div>
        </div>
      ))}

      {/* Hero Content - Mobile */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 text-center lg:hidden">
        <Reveal animation="fade-in-down" delay="delay-100">
          <span className="inline-block py-2.5 px-5 border border-white/30 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-sans tracking-[0.2em] uppercase mb-3 shadow-lg">
            Deception Bay Rd, Rothwell
          </span>
        </Reveal>
        <h1 className="mx-auto max-w-lg font-serif text-5xl text-white font-medium leading-[1.05] mb-2 drop-shadow-lg" style={{ textShadow: '0 10px 32px rgba(0, 0, 0, 0.8)' }}>
          {currentItem.heading}
        </h1>
        <p className="mx-auto max-w-md font-sans text-white/90 text-lg font-light mb-3 leading-relaxed drop-shadow-md" style={{ textShadow: '0 6px 18px rgba(0, 0, 0, 0.75)' }}>
          {currentItem.subheading}
        </p>
        <Reveal animation="fade-in-up" delay="delay-300">
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              onClick={onBookingClick}
              className="w-full max-w-[260px] px-10 py-4 bg-blush hover:bg-white text-dark-cta rounded-full font-sans font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Book Online
            </button>
            <button
              onClick={() => onNavigate('GALLERY')}
              className="w-full max-w-[260px] px-10 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-charcoal rounded-full font-sans font-medium transition-all duration-300"
            >
              View Gallery
            </button>
          </div>
        </Reveal>
      </div>

      {/* Hero Content - Desktop */}
      <div className="relative z-10 hidden w-full max-w-5xl mx-auto px-6 pt-24 md:pt-28 text-center lg:mr-auto lg:ml-[8vw] lg:block lg:max-w-6xl lg:px-0 lg:text-left">
        <Reveal animation="fade-in-down" delay="delay-100">
          <span className="inline-block py-2 px-5 border border-white/30 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-sans tracking-[0.2em] uppercase mb-4 shadow-lg">
            Deception Bay Rd, Rothwell
          </span>
        </Reveal>

        <div className="relative min-h-[320px] md:min-h-[380px] flex flex-col justify-center items-center lg:items-start">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[min(92vw,52rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/35 blur-3xl lg:left-[38%] lg:w-[50rem] lg:translate-x-0"></div>
            {HERO_IMAGES.map((item, index) => (
                 <div key={index} className={`transition-all duration-700 absolute inset-0 flex flex-col justify-center transform ${
                    index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                 }`}>
                     <h1 className="mx-auto max-w-5xl font-serif text-5xl md:text-7xl lg:mx-0 lg:text-[7.5rem] xl:text-[8.75rem] text-white font-medium leading-[1.0] mb-3 md:mb-6 drop-shadow-lg" style={{ textShadow: '0 10px 32px rgba(0, 0, 0, 0.8)' }}>
                        {item.heading}
                    </h1>
                     <p className="mx-auto max-w-3xl font-sans text-white/90 text-xl md:text-2xl font-light mb-2 md:mb-8 leading-relaxed drop-shadow-md lg:mx-0" style={{ textShadow: '0 6px 18px rgba(0, 0, 0, 0.75)' }}>
                        {item.subheading}
                    </p>
                 </div>
            ))}
        </div>

        <div className="mt-0 md:mt-8 lg:flex lg:justify-start">
             <Reveal animation="fade-in-up" delay="delay-500">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                    onClick={onBookingClick}
                    className="w-full sm:w-auto px-10 py-4 bg-blush hover:bg-white text-dark-cta rounded-full font-sans font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                    Book Online
                </button>
                <button 
                    onClick={() => onNavigate('GALLERY')}
                    className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-charcoal rounded-full font-sans font-medium transition-all duration-300"
                >
                    View Gallery
                </button>
                </div>
            </Reveal>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;