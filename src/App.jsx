

import React from 'react';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import PopularTourPackages from './components/PopularTourPackages';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col">
      <Hero />
      <main>
        <Destinations />
        <WhyChooseUs />
        <PopularTourPackages />
        <HowItWorks />
        <Footer />
      </main>
    </div>
  );
}

export default App;
