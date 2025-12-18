import React from 'react';
import '../styles/banner.css';

const DemoWatermark: React.FC = () => {
  return (
    <div 
      className="w-full bg-red-600 text-white py-3 px-4 font-bold text-sm md:text-base tracking-widest fixed top-0 left-0 right-0 z-[9999] shadow-lg overflow-hidden"
      role="banner"
      aria-label="Developer preview notification"
    >
      <div className="banner-scroll">
        <span className="banner-text">🔴 DEVELOPER'S PREVIEW - CONTACT DEVELOPER FOR DETAILS!</span>
        <span className="banner-text">🔴 DEVELOPER'S PREVIEW - CONTACT DEVELOPER FOR DETAILS!</span>
      </div>
    </div>
  );
};

export default DemoWatermark;
