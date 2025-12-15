import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { BOOKING_URL } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
          <div>
            <h2 className="font-serif text-2xl text-charcoal">Book Your Appointment</h2>
            <p className="text-sm text-gray-600 font-sans mt-1">Select your service and preferred time</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors group"
            aria-label="Close booking"
          >
            <X size={24} className="text-gray-600 group-hover:text-charcoal transition-colors" />
          </button>
        </div>

        {/* Square Booking Iframe */}
        <div className="w-full h-full pt-20 pb-16">
          <iframe
            src={BOOKING_URL}
            className="w-full h-full border-0"
            title="Book Appointment"
            loading="lazy"
            allow="payment"
          />
        </div>

        {/* Footer Helper Text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent px-6 py-3 text-center pointer-events-none">
          <p className="text-xs text-gray-500 font-sans">
            Secure booking powered by Square • Press ESC to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
