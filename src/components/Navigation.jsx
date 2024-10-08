import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 flex flex-wrap items-center w-full z-[9999] transition-all duration-300 ${isScrolled ? 'bg-gray-700 opacity-80' : 'bg-transparent'} p-2`}>
      <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-10 xl:px-12 text-white">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e4e2e4f0bb31f30bc1493108073e6e5e5823645bfe75f9dfee19deb334bf75?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" 
            alt="Company logo" 
            className="object-contain w-[80px] md:w-[90px] lg:w-[120px] xl:w-[140px]" 
          />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Links (Desktop View) */}
        <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 xl:gap-8">
          <Link to="/" className="text-xs md:text-sm lg:text-base xl:text-lg sm:text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] text-[0.75rem] ">Home</Link>
          <Link to="/about" className="text-xs md:text-sm lg:text-base xl:text-lg sm:text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] text-[0.75rem] ">About </Link>
          <Link to="/destiny" className="text-xs md:text-sm lg:text-base xl:text-lg sm:text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] text-[0.75rem] ">Destination</Link>
          <Link to="/service" className="text-xs md:text-sm lg:text-base xl:text-lg sm:text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] text-[0.75rem] ">Service</Link>
          <Link to="/products" className="text-xs md:text-sm lg:text-base xl:text-lg sm:text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] text-[0.75rem] ">Products</Link>
          <Link to="/contact" className="text-xs md:text-sm lg:text-base xl:text-lg sm:text-[0.75rem] md:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] text-[0.75rem]">Contact </Link>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex gap-2 items-center text-white lg:gap-3 xl:gap-4">
          <div className="flex gap-1.5 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bedd0d954d21ce96ad322acbd0b4d921d581a1bd0b25cb8bf71eaa1f8c67e901?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Login icon"
              className="object-contain shrink-0 aspect-square w-[18px] md:w-[20px] lg:w-[22px] xl:w-[25px]"
            />
            <Link to="/login" className="text-xs md:text-sm lg:text-base xl:text-lg">Login</Link>
            <span>|</span>
            <Link to="/signup" className="text-xs md:text-sm lg:text-base xl:text-lg">SignUp</Link>
          </div>

          <div className="flex gap-1 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64918f4a7ad39388b8769ffbe23ec38bf6c245df8411c7da7ede851708d40554?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Language icon"
              className="w-4 lg:w-5 xl:w-6"
            />
            <span className="my-auto text-xs md:text-sm lg:text-base xl:text-lg">EN</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42ab03485f2d97fd3f9c9184ee7df164d7b51a1337080ada7a7d92c546fd3c4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Dropdown arrow"
              className="w-3 lg:w-4 xl:w-5"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col mt-2 md:hidden text-white bg-gray-700 p-5 rounded-md">
          <Link to="/" className="mb-2" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="mb-2" onClick={toggleMenu}>About us</Link>
          <Link to="/destiny" className="mb-2" onClick={toggleMenu}>Destination</Link>
          <Link to="/service" className="mb-2" onClick={toggleMenu}>Service</Link>
          <Link to="/products" className="mb-2" onClick={toggleMenu}>Products</Link>
          <Link to="/contact" className="mb-2" onClick={toggleMenu}>Contact us</Link>
          <div className="mt-4">
            <Link to="/login" className="mr-2" onClick={toggleMenu}>Login</Link>
            <Link to="/signup" onClick={toggleMenu}>SignUp</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
