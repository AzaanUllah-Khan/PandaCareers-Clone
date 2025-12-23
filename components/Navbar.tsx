import React from 'react';

export default function Navbar() {
  const navItems = [
    { label: 'About us', hasDropdown: true },
    { label: 'Why foodpanda?', hasDropdown: true },
    { label: 'Jobs', hasDropdown: true },
    { label: 'Locations', hasDropdown: false },
    { label: 'pandaStories', hasDropdown: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="bg-fp-pink rounded-lg w-9 h-9 flex items-center justify-center p-1.5">
            {/* Simple CSS-based panda face representation or SVG */}
            <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
               <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.5 9.5C7.5 8.67 8.17 8 9 8C9.83 8 10.5 8.67 10.5 9.5C10.5 10.33 9.83 11 9 11C8.17 11 7.5 10.33 7.5 9.5ZM13.5 16C12.67 16 12 15.33 12 14.5C12 13.67 12.67 13 13.5 13C14.33 13 15 13.67 15 14.5C15 15.33 14.33 16 13.5 16ZM15 11C14.17 11 13.5 10.33 13.5 9.5C13.5 8.67 14.17 8 15 8C15.83 8 16.5 8.67 16.5 9.5C16.5 10.33 15.83 11 15 11Z" />
               <circle cx="9" cy="9.5" r="1.5" fill="#D70F64"/>
               <circle cx="15" cy="9.5" r="1.5" fill="#D70F64"/>
               <path d="M12 14.5C11.5 14.5 11.2 14.8 11.2 14.8C11.2 14.8 11.6 15.2 12 15.2C12.4 15.2 12.8 14.8 12.8 14.8C12.8 14.8 12.5 14.5 12 14.5Z" fill="#333"/>
            </svg>
          </div>
          <span className="text-[22px] font-bold text-fp-pink tracking-tight leading-none">
            foodpanda
          </span>
        </a>

        {/* Center Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href="#" 
              className="flex items-center gap-1.5 text-[15px] font-medium text-gray-900 hover:text-fp-pink transition-colors group"
            >
              {item.label}
              {item.hasDropdown && (
                <svg 
                  className="w-2.5 h-2.5 text-gray-800 group-hover:text-fp-pink transition-colors stroke-[3px]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Right Section: Saved Jobs */}
        <div className="flex items-center shrink-0">
          <a href="#" className="flex items-center gap-2 text-fp-pink font-semibold hover:text-pink-700 transition-colors text-[15px]">
            <span>Saved jobs</span>
            <svg className="w-5 h-5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </a>
          
          {/* Mobile Menu Button (Hamburger) */}
          <button className="lg:hidden ml-6 text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}