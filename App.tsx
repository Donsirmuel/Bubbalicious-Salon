import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import StickyBooking from './components/StickyBooking';
import BookingModal from './components/BookingModal';
import DemoWatermark from './components/DemoWatermark';
import Home from './views/Home';
import Services from './views/Services';
import Team from './views/Team';
import Gallery from './views/Gallery';
import Contact from './views/Contact';
import { ViewState } from './types';

const App: React.FC = () => {
  // Simple state-based routing to keep it lightweight as requested
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <Home onNavigate={setCurrentView} onBookingClick={() => setIsBookingModalOpen(true)} />;
      case 'SERVICES': return <Services onBookingClick={() => setIsBookingModalOpen(true)} />;
      case 'TEAM': return <Team onBookingClick={() => setIsBookingModalOpen(true)} />;
      case 'GALLERY': return <Gallery />;
      case 'CONTACT': return <Contact />;
      default: return <Home onNavigate={setCurrentView} onBookingClick={() => setIsBookingModalOpen(true)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-sand text-charcoal font-sans relative">
      <DemoWatermark />
      <Navigation currentView={currentView} onNavigate={setCurrentView} onBookingClick={() => setIsBookingModalOpen(true)} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer onNavigate={setCurrentView} onBookingClick={() => setIsBookingModalOpen(true)} />
      <StickyBooking onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
};

export default App;
