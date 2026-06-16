import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeAboutStory from './sections/HomeAboutStory';
import TokenomicsAndRoadmap from './sections/TokenomicsAndRoadmap';

function App() {
  return (
    <div className="w-full bg-[#16171d] min-h-screen font-serif text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HomeAboutStory />
        <TokenomicsAndRoadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
