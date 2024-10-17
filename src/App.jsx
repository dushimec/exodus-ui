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
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPasword';
import AddNewTrip from './components/AddNewTrip';
import AdminLogin from './components/AdmingLogin';
import { AuthProvider } from './context/authContext'; // Adjust path
import PrivateRoute from './components/PrivateRoute'; // Adjust path
import Admin from './components/Admin';
import AdminDashboard from './components/Dashboard';
import Tour from './components/Tour';

function App() {
  const location = useLocation();

  // Logic to conditionally show/hide Navbar and Footer
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isAdminLoginPage = location.pathname === '/admin-login';
  const isDashboardPage = location.pathname === '/admin/dashboard';
  const shouldShowNavbar = !isAdminRoute && !isAdminLoginPage && !isDashboardPage;
  const shouldShowFooter = !isAdminRoute && !isDashboardPage;

  return (
    <>
      {/* Conditionally render Navbar */}
      {shouldShowNavbar && <Navigation />}

      {/* Route management */}
      <Routes>
        {/* Public Routes */}
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
        <Route path="/destiny" element={<Destiny />} />
        <Route path="/TurkeyDetails" element={<TurkeyDetails />} />
        <Route path="/RwandaDetails" element={<RwandaDetails />} />
        <Route path="/EgyptDetails" element={<EgyptDetails />} />
        <Route path="/JerusalemDetails" element={<JerusalemDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <PrivateRoute adminOnly>
            <AdminDashboard />
          </PrivateRoute>
        } />
        <Route path="/admin/new-trip" element={
          <PrivateRoute adminOnly>
            <AddNewTrip />
          </PrivateRoute>
        } />
      </Routes>


      {/* Conditionally render Footer */}
      {shouldShowFooter && <Footer />}
    </>
  );
}

        {/* Add padding to the top to avoid content being hidden behind the navbar */}
        
          <Routes>
            {/* Home page */}
            <Route path="/" element={
              <>
                <Hero />
                <Tour/>
                <Destinations />
                <WhyChooseUs />
                <PopularTourPackages />
                <HowItWorks />
              </>
            } />


function AppWrapper() {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
}

export default AppWrapper;


