import React, { useState } from 'react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl group select-none">
      {/* Before Image (Background) */}
      <img
        src="https://picsum.photos/id/1000/1200/800?grayscale&blur=2"
        alt="Green Pool Before"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Green overlay simulation */}
      <div className="absolute top-0 left-0 w-full h-full bg-green-900/40 mix-blend-overlay pointer-events-none"></div>

      {/* After Image (Clipped) */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src="https://picsum.photos/id/16/1200/800"
          alt="Blue Pool After"
          className="absolute top-0 left-0 w-full max-w-none h-full object-cover"
          style={{ width: '100vw', maxWidth: '56rem' }} // Approx max-w-4xl
        />
        <div className="absolute top-0 left-0 w-full h-full bg-aqua/10 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Slider Control */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleDrag}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Percentage of restored pool shown"
      />

      {/* Slider Handle Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ocean"><polyline points="15 18 9 12 15 6"></polyline></svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ocean"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold pointer-events-none">After</div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold pointer-events-none">Before</div>
    </div>
  );
};
