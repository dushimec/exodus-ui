
import React from 'react';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import PopularTourPackages from './components/PopularTourPackages';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
        <Contact/>
   <About/>
   
      </main>
    </div>

  );
}

export default App;