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
        <a href="https://foodpanda-azaan.vercel.app/" className="flex items-center gap-2 shrink-0">
          <img src="/assets/logo.svg" alt="" />
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