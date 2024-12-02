import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, getProfile } from "../slices/authSlice";
import Flag from "react-flagkit";
import logo from "../IMAGE/logo.jpg";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "GB",
    name: "Eng",
  });

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getProfile());
    }
  }, [token, dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (language) => {
    if (language === "EN") {
      setSelectedLanguage({ code: "GB", name: "Eng" });
      i18n.changeLanguage("en");
    } else if (language === "RW") {
      setSelectedLanguage({ code: "RW", name: "Kiny" });
      i18n.changeLanguage("rw");
    }
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 flex flex-wrap items-center w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-700 opacity-80" : "bg-transparent"
      } p-2`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-10 xl:px-12 text-white">
        <div className="flex-shrink-0">
          <img
            loading="lazy"
            src={logo}
            alt="Company logo"
            className="object-contain w-[100px] md:w-[70px] lg:w-[120px] xl:w-[100px] rounded-3xl"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none w-10 h-10 relative text-white"
            aria-label="Toggle Menu"
          >
            <div
              className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            ></div>
            <div
              className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            ></div>
          </button>
        </div>

        <div className="hidden md:flex text-xs md:items-center md:gap-4 lg:gap-6 xl:gap-8">
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

        <div className="hidden md:flex mr-16 items-center text-white lg:gap-3 xl:gap-4">
          <div className="relative flex gap-20 mr-6 items-center">
            <button onClick={toggleLanguageDropdown} className="flex items-center m-1">
              <Flag country={selectedLanguage.code} className="mr-1" size={24} />
              <span className="my-auto text-xs md:text-sm lg:text-base xl:text-lg">
                {selectedLanguage.name}
              </span>
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute mt-32 left-0 w-24 bg-white text-black rounded-lg shadow-lg py-2 z-10">
                <button
                  onClick={() => changeLanguage("EN")}
                  className="flex w-full text-left px-4 py-2 hover:bg-sky-300 hover:text-white"
                >
                  <Flag country="GB" size={18} className="m-1" /> {t('language.english')}
                </button>
                <button
                  onClick={() => changeLanguage("RW")}
                  className="flex w-full text-left px-4 py-2 hover:bg-sky-300 hover:text-white"
                >
                  <Flag country="RW" size={18} className="m-1" /> {t('language.kinyarwanda')}
                </button>
              </div>
            )}
          </div>
          {!user ? (
            <div className="flex gap-1.5 items-center">
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
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center">
                <img
                  loading="lazy"
                  src={user.profile.url}
                  alt="User Profile"
                  className="object-cover w-10 h-10 rounded-full"
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-2 mt-2 w-36 bg-white text-black rounded-lg shadow-lg py-2">
                  <span className="block px-4 py-2">{user?.name}</span>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t('navigation.profile')}
                  </Link>
                  <Link
                    to="/my-booking"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t('navigation.myBooking')}
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
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
    <div className="flex justify-between items-center p-4 border-b">
      <button onClick={toggleMenu} className="text-blue-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    
    </div>

    <div className="p-6">
      <div className="mb-8">
      <div className="flex-shrink-0">
          <img
            loading="lazy"
            src={logo}
            alt="Company logo"
            className="object-contain w-[100px] md:w-[70px] lg:w-[120px] xl:w-[100px] rounded-3xl pb-10 ml-4"
          />
      </div>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <Link to="/" className="flex flex-col items-center" onClick={toggleMenu}>
            <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </button>
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center" onClick={toggleMenu}>
            <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span>About Us</span>
          </Link>
          <Link to="/destiny" className="flex flex-col items-center" onClick={toggleMenu}>
            <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <span>Destination</span>
          </Link>
          <Link to="/service" className="flex flex-col items-center" onClick={toggleMenu}>
            <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span>Service</span>
          </Link>
          <Link to="/products" className="flex flex-col items-center" onClick={toggleMenu}>
            <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <span>Products</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center" onClick={toggleMenu}>
            <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span>Contact</span>
          </Link>
        </div>
      </div>
      <div className="relative flex   items-center ml-6 ">
            <button onClick={toggleLanguageDropdown} className="flex items-center m-1">
              <Flag country={selectedLanguage.code} className="mr-1" size={24} />
              <span className="my-auto text-md  md:text-sm lg:text-base xl:text-lg">
                {selectedLanguage.name}
              </span>
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute mt-32 left-0 w-24 bg-white text-black rounded-lg shadow-lg py-2 z-10">
                <button
                  onClick={() => changeLanguage("EN")}
                  className="flex w-full text-left px-4 py-2 hover:bg-blue-600 hover:text-white"
                >
                  <Flag country="GB" size={18} className="m-1" /> {t('language.english')}
                </button>
                <button
                  onClick={() => changeLanguage("RW")}
                  className="flex w-full text-left px-4 py-2 hover:bg-blue-600 hover:text-white"
                >
                  <Flag country="RW" size={18} className="m-1" /> {t('language.kinyarwanda')}
                </button>
              </div>
            )}
          </div> 
          
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="flex justify-between gap-4">
          {!user ? (
            <>
              <Link to="/login" className="flex-1 bg-blue-600 text-white rounded-full py-2 px-4 text-center" onClick={toggleMenu}>
                {t('navigation.login')}
              </Link>
              <Link to="/signup" className="flex-1 border border-blue-600 text-blue-600 rounded-full py-2 px-4 text-center" onClick={toggleMenu}>
                {t('navigation.signup')}
              </Link>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <button onClick={toggleDropdown} className="flex items-center">
                <img
                  loading="lazy"
                  src={user.profile.url}
                  alt="User Profile"
                  className="object-cover w-10 h-10 rounded-full mr-2"
                />
                <span className="text-blue-600">{user?.name}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
)}
    </nav>
  );
}

export default Navigation;

