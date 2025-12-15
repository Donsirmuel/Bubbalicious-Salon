import React from 'react';
import { Calendar } from 'lucide-react';

interface StickyBookingProps {
  onBookingClick: () => void;
}

const StickyBooking: React.FC<StickyBookingProps> = ({ onBookingClick }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-charcoal/10 z-40">
      <button 
        onClick={onBookingClick}
        className="flex items-center justify-center space-x-2 w-full bg-charcoal text-white font-sans font-medium py-3.5 rounded-lg shadow-lg"
      >
        <Calendar size={18} />
        <span>Book Your Appointment</span>
      </button>
    </div>
  );
};

export default StickyBooking;
