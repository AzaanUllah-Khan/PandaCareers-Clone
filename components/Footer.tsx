import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          
          {/* Links Section - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10 w-full lg:w-auto">
            
            {/* Column 1 */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-[17px] font-bold">About Us</h3>
              <ul className="flex flex-col space-y-3">
                <li><a href="#" className="text-[15px] font-medium hover:text-gray-300 transition-colors">Locations</a></li>
                <li><a href="#" className="text-[15px] font-medium hover:text-gray-300 transition-colors">Teams</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-[17px] font-bold">Join Us</h3>
              <ul className="flex flex-col space-y-3">
                <li><a href="#" className="text-[15px] font-medium hover:text-gray-300 transition-colors">Job Openings</a></li>
                <li><a href="#" className="text-[15px] font-medium hover:text-gray-300 transition-colors">Our Values</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-[17px] font-bold">Privacy Policies</h3>
              <ul className="flex flex-col space-y-3">
                <li><a href="#" className="text-[15px] font-medium hover:text-gray-300 transition-colors">Cookies and Similar Technologies Policy</a></li>
              </ul>
            </div>
            
          </div>

          {/* Search Bar Section - Pushed to right */}
          <div className="w-full lg:w-auto mt-10 lg:mt-0">
            <div className="relative w-full lg:w-80">
              <input 
                type="text" 
                placeholder="Start your job search here" 
                className="w-full bg-white text-gray-800 rounded-lg py-3 pl-5 pr-12 outline-none placeholder-gray-400 font-medium text-sm h-12"
              />
              <button className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2">
                <svg 
                  className="w-6 h-6 text-black stroke-[2.5px]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/90 mb-10 w-full"></div>

        {/* Bottom Section */}
        <div className="flex items-center gap-3">
          <span className="text-base font-medium">Connect with us:</span>
          <a href="#" className="bg-white rounded-[2px] w-6 h-6 flex items-center justify-center hover:opacity-90 transition-opacity">
            <svg className="w-4 h-4 text-black fill-current" viewBox="0 0 24 24">
               <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.48-4.515 5.48 0v8.306h5v-10.507c0-6.173-6.589-5.963-8.613-2.937v-2.557z"/>
            </svg>
          </a>
        </div>
        
      </div>
    </footer>
  );
}