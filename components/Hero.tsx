import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-fp-hero pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-fp-dark leading-tight mb-4">
              Hungry to make an impact?
            </h1>
            <p className="text-xl md:text-2xl text-fp-dark font-normal mb-10">
              There's always room at our table.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-full p-2 pl-6 shadow-md max-w-xl flex items-center justify-between transition-transform hover:scale-[1.01]">
              <input 
                type="text" 
                placeholder="Start your job search here" 
                className="flex-grow outline-none text-gray-700 placeholder-gray-500 text-base md:text-lg bg-transparent"
              />
              <button className="bg-fp-pink hover:bg-pink-600 text-white rounded-full p-3 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Mascot Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-0">
             {/* Note: In a real clone, we would use the exact asset. Using a representative 3D bear placeholder here. */}
             <div className="relative w-[300px] h-[300px] md:w-[530px] md:h-[530px]">
                <img 
                  src="/assets/home/hero.png"
                  alt="Pau-Pau Mascot" 
                  className="w-full h-full object-cover drop-shadow-2xl transform md:translate-x-10"
                />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}