import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/authSlice'; // Import the logout action
import Flag from 'react-flagkit'; // Flag for language selection
import logo from "../IMAGE/logo.png"

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  // Get auth state from Redux store
  const { isAuthenticated, user } = useSelector((state) => state.auth); // Assuming `auth` slice contains `isAuthenticated` and `user`

  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'GB', name: 'Eng' });

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action from authSlice
    setIsDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (language) => {
    if (language === 'EN') {
      setSelectedLanguage({ code: 'GB', name: 'Eng' });
    } else if (language === 'RW') {
      setSelectedLanguage({ code: 'RW', name: 'Kiny' });
    }
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 flex flex-wrap items-center w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-700 opacity-80' : 'bg-transparent'
      } p-2`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-10 xl:px-12 text-white">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            loading="lazy"
            src={logo}
            alt="Company logo"
            className="object-contain  w-[140px] md:w-[90px] lg:w-[180px] xl:w-[140px]"
          />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Links (Desktop View) */}
        <div className="hidden md:flex text-xs md:items-center md:gap-4 lg:gap-6 xl:gap-8">
          <Link to="/" className="text-xs md:text-sm lg:text-base xl:text-lg">
            Home
          </Link>
          <Link
            to="/about"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            About
          </Link>
          <Link
            to="/destiny"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            Destination
          </Link>
          <Link
            to="/service"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            Service
          </Link>
          <Link
            to="/products"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            Contact
          </Link>
        </div>

        {/* User Actions and Profile */}
        <div className="hidden md:flex gap-2 items-center text-white lg:gap-3 xl:gap-4">
          {!isAuthenticated ? (
            // Show login/signup if not logged in
            <div className="flex gap-1.5 items-center">
              <Link
                to="/login"
                className="text-xs md:text-sm lg:text-base xl:text-lg"
              >
                Login
              </Link>
              <span>|</span>
              <Link
                to="/signup"
                className="text-xs md:text-sm lg:text-base xl:text-lg"
              >
                SignUp
              </Link>
            </div>
          ) : (
            // Show profile image and dropdown if logged in
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center ">
                <img
                  loading="lazy"
                  src={user?.profileImage} // Display user's profile image from Redux store
                  alt="User Profile"
                  className="object-cover w-8 h-8 rounded-full"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Translation Dropdown */}
          <div className="relative flex gap-1 items-center">

            <button onClick={toggleLanguageDropdown} className="flex items-center 1`m-1">
              <Flag country={selectedLanguage.code} size={24} /> {/* Display flag */}
              <span className="my-auto text-xs  md:text-sm lg:text-base xl:text-lg">
                {selectedLanguage.name} {/* Use selected language name */}

              </span>
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute mt-32 left-1 w-24 bg-white text-black rounded-lg shadow-lg py-2 z-10">
                <button
                  onClick={() => changeLanguage('EN')}
                  className="flex w-full text-left px-4 py-2 hover:bg-sky-300 hover:text-white"
                >
                  <Flag country="GB" size={18} className="m-1" /> Eng
                </button>
                <button
                  onClick={() => changeLanguage('RW')}
                  className="flex w-full text-left px-4 py-2 hover:bg-sky-300 hover:text-white"
                >
                  <Flag country="RW" size={18} className="m-1" /> Kiny
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full flex flex-col justify-center items-center space-y-4 bg-black text-white py-6 md:hidden">
          <Link to="/" className="text-xs md:text-sm lg:text-base xl:text-lg">
            Home
          </Link>
          <Link to="/about" className="text-xs md:text-sm lg:text-base xl:text-lg">
            About
          </Link>
          <Link
            to="/destiny"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            Destination
          </Link>
          <Link to="/service" className="text-xs md:text-sm lg:text-base xl:text-lg">
            Service
          </Link>
          <Link
            to="/products"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            Products
          </Link>
          <Link to="/contact" className="text-xs md:text-sm lg:text-base xl:text-lg">
            Contact
          </Link>

          {!isAuthenticated ? (
            // Show login/signup if not logged in (mobile view)
            <div className="flex flex-col space-y-4 items-center text-sm">
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </div>
          ) : (
            // Show profile image and dropdown if logged in (mobile view)
            <div className="relative">
              <button onClick={toggleDropdown}>
                <img
                  loading="lazy"
                  src={user?.profileImage}
                  alt="User Profile"
                  className="object-cover w-8 h-8 rounded-full"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navigation;
