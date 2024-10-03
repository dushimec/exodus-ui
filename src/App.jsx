import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import PopularTourPackages from './components/PopularTourPackages';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Navigation from './components/Navigation';
import Service from './components/Service';
import Products from './components/Products';

import Login from './components/Login';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Fixed Navbar */}
        {/* <Navigation /> */}

        {/* Page Content */}
    
          <Routes>
            {/* Home page */}
            <Route path="/" element={
              <>
                <Hero />
                <Destinations />
                <WhyChooseUs />
                <PopularTourPackages />
                <HowItWorks />
              </>
            } />
             <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
          </Routes>
        

        {/* Fixed Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
