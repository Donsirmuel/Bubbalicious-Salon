import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import StickyBooking from './components/StickyBooking';
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

  const renderView = () => {
    switch (currentView) {
      case 'HOME': return <Home onNavigate={setCurrentView} />;
      case 'SERVICES': return <Services />;
      case 'TEAM': return <Team />;
      case 'GALLERY': return <Gallery />;
      case 'CONTACT': return <Contact />;
      default: return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-sand text-charcoal font-sans relative">
      <DemoWatermark />
      <Navigation currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer onNavigate={setCurrentView} />
      <StickyBooking />
    </div>
  );
};

export default App;
