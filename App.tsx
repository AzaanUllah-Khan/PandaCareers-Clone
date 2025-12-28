import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/Home';
import { Page } from './types';
import WhyFoodpanda from './components/Whyfoodpanda';
import ValuesGrid from './components/ValuesGrid';
import JobsPage from './components/JobsPage';
import LocationsPage from './components/LocationsPage';
import { Newsroom } from './components/Newsroom';
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <ValuesGrid />;
      case 'why':
        return <WhyFoodpanda />;
      case 'jobs':
        return <JobsPage />;
      case 'locations':
        return <LocationsPage />;
      case 'news':
        return <Newsroom />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-panda-text">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;