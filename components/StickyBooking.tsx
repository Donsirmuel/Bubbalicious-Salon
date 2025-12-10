import React from 'react';
import { Calendar } from 'lucide-react';
import { BOOKING_URL } from '../constants';

const StickyBooking: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-charcoal/10 z-40">
      <a 
        href={BOOKING_URL}
        className="flex items-center justify-center space-x-2 w-full bg-charcoal text-white font-sans font-medium py-3.5 rounded-lg shadow-lg"
      >
        <Calendar size={18} />
        <span>Book Your Appointment</span>
      </a>
    </div>
  );
};

export default StickyBooking;
