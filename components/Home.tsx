import React from 'react';
import Hero from './Hero';
import Mission from './Mission';
import WeLoveWhatWeDo from './WeLoveWhatWeDo';
import StatsSection from './StatsSection';
import RolesSection from './RolesSection';
import BlogSection from './BlogSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-fp-dark font-sans selection:bg-fp-pink selection:text-white">
      <Hero />
      <Mission />
      <WeLoveWhatWeDo />
      <StatsSection />
      <RolesSection />
      <BlogSection />
    </div>
  );
}