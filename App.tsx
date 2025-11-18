import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AiConceptGenerator from './components/AiConceptGenerator';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-[#0f0f11] min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AiConceptGenerator />
        <Portfolio />
      </main>
      <Contact />
    </div>
  );
};

export default App;