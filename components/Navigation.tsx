import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { ViewState } from '../types';
import { BOOKING_URL } from '../constants';

interface NavigationProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onBookingClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate, onBookingClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { label: string; view: ViewState }[] = [
    { label: 'Home', view: 'HOME' },
    { label: 'Services', view: 'SERVICES' },
    { label: 'Our Team', view: 'TEAM' },
    { label: 'Gallery', view: 'GALLERY' },
    { label: 'Contact', view: 'CONTACT' },
  ];

  const handleNav = (view: ViewState) => {
    onNavigate(view);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="sticky top-[45px] z-50 bg-sand/95 backdrop-blur-sm border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer" 
            onClick={() => handleNav('HOME')}
          >
            <h1 className="font-serif text-2xl font-bold tracking-tighter text-charcoal">
              Bubbalicious <span className="font-sans text-sm font-normal tracking-wide block sm:inline">Hair & Co</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.view}
                onClick={() => handleNav(link.view)}
                className={`font-sans text-sm tracking-wide uppercase transition-colors ${
                  currentView === link.view ? 'text-charcoal font-semibold border-b-2 border-blush' : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={onBookingClick}
              className="bg-blush hover:bg-blush-dark text-dark-cta font-sans font-medium px-6 py-2.5 rounded-full transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-sand border-b border-charcoal/10 shadow-xl flex flex-col p-6 animate-fade-in-down">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => handleNav(link.view)}
              className="text-left font-serif text-xl py-4 border-b border-charcoal/10 text-charcoal"
            >
              {link.label}
            </button>
          ))}
          <div className="flex justify-between items-center mt-6">
            <a href="https://instagram.com" className="text-charcoal p-2">
              <Instagram size={24} />
            </a>
            <button 
              onClick={onBookingClick}
              className="bg-blush text-dark-cta font-sans font-medium px-8 py-3 rounded-full flex-grow text-center ml-4"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
