import React from 'react';

const DemoWatermark: React.FC = () => {
  // Create a tiled SVG background pattern
  const svgString = `
    <svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>
      <text x='50%' y='50%' font-family='sans-serif' font-weight='900' font-size='32' fill='%23000' text-anchor='middle' transform='rotate(-45 200 200)' opacity='0.08'>
        DEMO PREVIEW
      </text>
    </svg>
  `.trim();

  const bgImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgString)}")`;

  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none select-none"
      style={{ backgroundImage: bgImage }}
      aria-hidden="true"
    />
  );
};

export default DemoWatermark;
