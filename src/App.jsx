import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import Signup from './components/Signup';
import Destiny from './components/Destiny';  
import TurkeyDetails from './components/TurkeyDetails';
import RwandaDetails from './components/RwandaDetails';
import EgyptDetails from './components/EgyptDetails';
import JerusalemDetails from './components/JerusalemDetails';
import Admin from './components/admin';
import Dashboard from './components/Dashbord';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Hide Navbar and Footer on the /dashbord route
  const isDashboard = location.pathname === '/dashbord';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditionally render Navigation */}
      {/* {!isDashboard && (
        <header className="fixed w-full z-10">
          <Navigation />
        </header>
      )} */}

      
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/destiny" element={<Destiny />} />
          <Route path="/dashbord" element={<Dashboard />} />
          <Route path="/TurkeyDetails" element={<TurkeyDetails />} />
          <Route path="/RwandaDetails" element={<RwandaDetails />} />
          <Route path="/EgyptDetails" element={<EgyptDetails />} />
          <Route path="/JerusalemDetails" element={<JerusalemDetails />} />
        </Routes>
      </div>

   
  );
}

export default App;
