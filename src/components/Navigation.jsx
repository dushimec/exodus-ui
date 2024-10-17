


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import i18next from 'i18next'; // To change language

import Flag from 'react-flagkit'; // Correct import for Flag



function Navigation() {
  const { t, i18n } = useTranslation(); // Destructure useTranslation
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false); 
  const [userProfileImage, setUserProfileImage] = useState(null); 

  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'GB', name: 'Eng' }); // Default to 'GB' (Great Britain) for English

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setUserProfileImage(savedImage); 
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('profileImage');
    setUserProfileImage(null); 
    setIsDropdownOpen(false);
  };


  // Function to change language and update flag
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (language) => {
    if (language === 'EN') {
      setSelectedLanguage({ code: 'GB', name: 'Eng' }); // Use 'GB' for English
    } else if (language === 'RW') {
      setSelectedLanguage({ code: 'RW', name: 'Kiny' }); // Use 'RW' for Kinyarwanda
    }
    setIsLanguageDropdownOpen(false);

  };

  return (
    <nav
      className={`fixed top-0 left-0 flex flex-wrap items-center w-full z-[9999] transition-all duration-300 ${
        isScrolled ? 'bg-gray-700 opacity-80' : 'bg-transparent'
      } p-2`}
    >
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
        <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 xl:gap-8">
          <Link to="/" className="text-xs md:text-sm lg:text-base xl:text-lg">
            {t('navigation.home')}
          </Link>
          <Link
            to="/about"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.about')}
          </Link>
          <Link
            to="/destiny"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.destination')}
          </Link>
          <Link
            to="/service"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.service')}
          </Link>
          <Link
            to="/products"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.products')}
          </Link>
          <Link
            to="/contact"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.contact')}
          </Link>
        </div>

        {/* User Actions and Profile */}
        <div className="hidden md:flex gap-2 items-center text-white lg:gap-3 xl:gap-4">
          {!userProfileImage ? (
            // If user is not logged in, show login/signup
            <div className="flex gap-1.5 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bedd0d954d21ce96ad322acbd0b4d921d581a1bd0b25cb8bf71eaa1f8c67e901?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                alt="Login icon"
                className="object-contain shrink-0 aspect-square w-[18px] md:w-[20px] lg:w-[22px] xl:w-[25px]"
              />
              <Link
                to="/login"
                className="text-xs md:text-sm lg:text-base xl:text-lg"
              >
                {t('navigation.login')}
              </Link>
              <span>|</span>
              <Link
                to="/signup"
                className="text-xs md:text-sm lg:text-base xl:text-lg"
              >
                {t('navigation.signup')}
              </Link>
            </div>
          ) : (
            // If user is logged in, show profile image and dropdown
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center">
                <img
                  loading="lazy"
                  src={userProfileImage} // Display the uploaded profile image
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
                    {t('navigation.profile')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {t('navigation.logout')}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Translation */}
          <div className="flex gap-1.5 items-center">
            <div className="dropdown">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className="focus:outline-none bg-white text-black rounded-lg text-xs md:text-sm lg:text-base xl:text-lg"
              >
                <option value="en">{t('navigation.languages.en')}</option>
                <option value="rw">{t('navigation.languages.kiny')}</option>
              </select>
            </div>

          {/* Translation Dropdown */}
          <div className="relative flex gap-1 items-center">
            <button onClick={toggleLanguageDropdown} className="flex items-center 1`m-1">
              <Flag country={selectedLanguage.code} size={24} /> {/* Display flag */}
              <span className="my-auto text-xs md:text-sm lg:text-base xl:text-lg">
                {selectedLanguage.name} {/* Use selected language name */}
              </span>
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a576e7d30c74cb3d5e59bde55cbfc1b73f1836945d66b64116e7eaf91cbd8f8e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                alt="Language toggle icon"
                className="w-4 lg:w-5 xl:w-6"
              /> */}
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute mt-32 left-1 w-24 bg-white text-black rounded-lg shadow-lg py-2 z-10">
                <button
                  onClick={() => changeLanguage('EN')}
                  className=" flex w-full text-left px-4 py-2    hover:bg-blue-200  hover:text-white"
                >
                  <Flag country="GB" size={18} className='m-1' /> Eng
                </button>
                <button
                  onClick={() => changeLanguage('RW')}
                  className=" flex   w-full text-left px-4 py-2 hover:bg-blue-200  hover:text-white"
                >
                  <Flag country="RW" size={18} className='m-1' />   Kiny
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (

        <div className="md:hidden w-full bg-gray-700 text-white">
          <ul className="flex flex-col p-4 gap-2">
            <li>
              <Link to="/" className="text-base" onClick={toggleMenu}>
                {t('navigation.home')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-base" onClick={toggleMenu}>
                {t('navigation.about')}
              </Link>
            </li>
            <li>
              <Link to="/destiny" className="text-base" onClick={toggleMenu}>
                {t('navigation.destination')}
              </Link>
            </li>
            <li>
              <Link to="/service" className="text-base" onClick={toggleMenu}>
                {t('navigation.service')}
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-base" onClick={toggleMenu}>
                {t('navigation.products')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-base" onClick={toggleMenu}>
                {t('navigation.contact')}
              </Link>
            </li>

            {/* Mobile translation switcher */}
            <li>
              <div className="dropdown">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="focus:outline-none bg-white text-black rounded-lg text-base"
                >
                  <option value="en">{t('navigation.languages.en')}</option>
                  <option value="rw">{t('navigation.languages.kiny')}</option>
                </select>
              </div>
            </li>
          </ul>

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
          <Link
            to="/contact"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navigation;


