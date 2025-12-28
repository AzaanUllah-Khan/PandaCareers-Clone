import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const navItems = [
    { label: 'About us', page: 'about' as Page, hasDropdown: true },
    { label: 'Why foodpanda?', page: 'why' as Page, hasDropdown: true },
    { label: 'Jobs', page: 'jobs' as Page, hasDropdown: true },
    { label: 'Locations', page: 'locations' as Page, hasDropdown: false },
    { label: 'pandaStories', page: 'news' as Page, hasDropdown: true },
  ];

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-white shadow-sm h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 shrink-0"
        >
          <img src="/assets/logo.svg" alt="Logo" />
        </button>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page)}
              className="flex items-center gap-1.5 text-[15px] font-medium text-gray-900 hover:text-fp-pink transition-colors group"
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  className="w-2.5 h-2.5 group-hover:text-fp-pink transition-colors stroke-[3px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center shrink-0">
          <button className="flex items-center gap-2 text-fp-pink font-semibold hover:text-pink-700 transition-colors text-[15px]">
            <span>Saved jobs</span>
          </button>

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