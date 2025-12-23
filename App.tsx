import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import WeLoveWhatWeDo from './components/WeLoveWhatWeDo';
import StatsSection from './components/StatsSection';
import RolesSection from './components/RolesSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-fp-dark font-sans selection:bg-fp-pink selection:text-white">
      <Navbar />
      <Hero />
      <Mission />
      <WeLoveWhatWeDo />
      <StatsSection />
      <RolesSection />
      <BlogSection />
      <Footer />
    </div>
  );
}