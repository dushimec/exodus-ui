// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout, getProfile } from "../slices/authSlice";
// import Flag from "react-flagkit";
// import logo from "../IMAGE/logo.jpg";

// function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState({
//     code: "GB",
//     name: "Eng",
//   });

//   const dispatch = useDispatch();
//   const { user, token } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (token) {
//       dispatch(getProfile());
//     }
//   }, [token, dispatch]);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = () => {
//     dispatch(logout());
//     setIsDropdownOpen(false);
//   };

//   const toggleLanguageDropdown = () => {
//     setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
//   };

//   const changeLanguage = (language) => {
//     if (language === "EN") {
//       setSelectedLanguage({ code: "GB", name: " Eng", className: "mr-10" });
//     } else if (language === "RW") {
//       setSelectedLanguage({ code: "RW", name: "Kiny" });
//     }
//     setIsLanguageDropdownOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 flex flex-wrap items-center w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-gray-700 opacity-80" : "bg-transparent"
//       } p-2`}
//     >
//   <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-10 xl:px-12 text-white">
//   {/* Logo */}
//   <div className="flex-shrink-0">
//     <img
//       loading="lazy"
//       src={logo}
//       alt="Company logo"
//       className="object-contain w-[100px] md:w-[70px] lg:w-[120px] xl:w-[100px] rounded-3xl"
//     />
//   </div>



//         {/* Enhanced Hamburger Menu Icon */}
//         <div className="md:hidden">

//           <button
//             onClick={toggleMenu}
//             className="focus:outline-none w-10 h-10 relative text-white"
//             aria-label="Toggle Menu"
//           >
//             <div
//               className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
//                 isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
//               }`}
//             ></div>
//             <div
//               className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
//                 isMenuOpen ? "opacity-0" : "opacity-100"
//               }`}
//             ></div>
//             <div
//               className={`absolute w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
//                 isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
//               }`}
//             ></div>

//           <button onClick={toggleMenu} className="focus:outline-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-9 w-9 bg-white rounded-md text-sky-700"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
        
//         </button>
//         </button>
        
//         </div>

//         {/* Links (Desktop View) */}
//         <div className="hidden md:flex text-xs md:items-center md:gap-4 lg:gap-6 xl:gap-8">
//           <Link to="/" className="text-xs md:text-sm lg:text-base xl:text-lg">
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-xs md:text-sm lg:text-base xl:text-lg"
//           >
//             About
//           </Link>
//           <Link
//             to="/destiny"
//             className="text-xs md:text-sm lg:text-base xl:text-lg"
//           >
//             Destination
//           </Link>
//           <Link
//             to="/service"
//             className="text-xs md:text-sm lg:text-base xl:text-lg"
//           >
//             Service
//           </Link>
//           <Link
//             to="/products"
//             className="text-xs md:text-sm lg:text-base xl:text-lg"
//           >
//             Products
//           </Link>
//           <Link
//             to="/contact"
//             className="text-xs md:text-sm lg:text-base xl:text-lg"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* User Actions and Profile */}
//         <div className="hidden md:flex mr-16 items-center text-white lg:gap-3 xl:gap-4">
//           {/* Translation Dropdown */}
//           <div className="relative flex gap-20 mr-6 items-center">
//             <button onClick={toggleLanguageDropdown} className="flex items-center 1`m-1">
//               <Flag country={selectedLanguage.code} className="mr-1" size={24} />
//               <span className="my-auto text-xs md:text-sm lg:text-base xl:text-lg">
//                 {selectedLanguage.name}
//               </span>
//             </button>

//             {isLanguageDropdownOpen && (
//               <div className="absolute mt-32 left-0 w-24 bg-white text-black rounded-lg shadow-lg py-2 z-10">
//                 <button
//                   onClick={() => changeLanguage("EN")}
//                   className="flex w-full text-left px-4 py-2 hover:bg-sky-300 hover:text-white"
//                 >
//                   <Flag country="GB" size={18} className="m-1" /> Eng
//                 </button>
//                 <button
//                   onClick={() => changeLanguage("RW")}
//                   className="flex w-full text-left px-4 py-2 hover:bg-sky-300 hover:text-white"
//                 >
//                   <Flag country="RW" size={18} className="m-1" /> Kiny
//                 </button>
//               </div>
//             )}
//           </div>
//           {!user ? (
//             <div className="flex gap-1.5 items-center">
//               <Link
//                 to="/login"
//                 className="text-xs md:text-sm lg:text-base xl:text-lg"
//               >
//                 Login
//               </Link>
//               <span>|</span>
//               <Link
//                 to="/signup"
//                 className="text-xs md:text-sm lg:text-base xl:text-lg"
//               >
//                 SignUp
//               </Link>
//             </div>
//           ) : (
//             <div className="relative">
//               <button onClick={toggleDropdown} className="flex items-center">
//                 <img
//                   loading="lazy"
//                   src={user.profile.url}
//                   alt="User Profile"
//                   className="object-cover w-10 h-10 rounded-full"
//                 />
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute left-2 mt-2 w-36 bg-white text-black rounded-lg shadow-lg py-2">
//                   <span className="block px-4 py-2">{user?.name}</span>
//                   <Link
//                     to="/profile"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                     onClick={() => setIsDropdownOpen(false)}
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     to="/my-booking"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                     onClick={() => setIsDropdownOpen(false)}
//                   >
//                     My booking
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Enhanced Mobile Menu */}
//       <div
//         className={`w-full md:hidden bg-sky-950 text-white overflow-hidden transition-all duration-500 ease-in-out transform ${
//           isMenuOpen ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-full"
//         }`}
//       >
//         <div className="flex flex-col items-center space-y-6 py-8 animate-slideDown">
//           <Link
//             to="/"
//             className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//           >
//             About
//           </Link>
//           <Link
//             to="/destiny"
//             className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//           >
//             Destination
//           </Link>
//           <Link
//             to="/service"
//             className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//           >
//             Service
//           </Link>
//           <Link
//             to="/products"
//             className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//           >
//             Products
//           </Link>
//           <Link
//             to="/contact"
//             className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//           >
//             Contact
//           </Link>
//           {!user ? (
//             <>
//               <Link
//                 to="/login"
//                 className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//               >
//                 SignUp
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/profile"
//                 className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//               >
//                 Profile
//               </Link>
//               <Link
//                 to="/my-booking"
//                 className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//               >
//                 My Booking
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="text-xs font-medium hover:text-sky-300 transition-colors duration-200 transform hover:scale-105"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, getProfile } from "../slices/authSlice";
import Flag from "react-flagkit";
import logo from "../IMAGE/logo.jpg";
import { useTranslation } from "react-i18next"; // Import useTranslation

function Navigation() {
  const { t, i18n } = useTranslation(); // Initialize translation function and i18n instance
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
      i18n.changeLanguage("en"); // Change to English
    } else if (language === "RW") {
      setSelectedLanguage({ code: "RW", name: "Kiny" });
      i18n.changeLanguage("rw"); // Change to Kinyarwanda
    }
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0  flex flex-wrap items-center w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-700 opacity-80" : "bg-transparent"
      } p-2`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-10 xl:px-12 text-white">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            loading="lazy"
            src={logo}
            alt="Company logo"
            className="object-contain w-[100px] md:w-[70px] lg:w-[120px] xl:w-[100px] rounded-3xl"
          />
        </div>

        {/* Enhanced Hamburger Menu Icon */}
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

        {/* Links (Desktop View) */}
        <div className="hidden md:flex text-xs md:items-center md:gap-4 lg:gap-6 xl:gap-8">
          <Link to="/" className="text-xs md:text-sm lg:text-base xl:text-lg">
            {t('navigation.home')} {/* Translated */}
          </Link>
          <Link
            to="/about"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.about')} {/* Translated */}
          </Link>
          <Link
            to="/destiny"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.destination')} {/* Translated */}
          </Link>
          <Link
            to="/service"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.service')} {/* Translated */}
          </Link>
          <Link
            to="/products"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.products')} {/* Translated */}
          </Link>
          <Link
            to="/contact"
            className="text-xs md:text-sm lg:text-base xl:text-lg"
          >
            {t('navigation.contact')} {/* Translated */}
          </Link>
        </div>

        {/* User Actions and Profile */}
        <div className="hidden md:flex mr-16 items-center text-white lg:gap-3 xl:gap-4">
          {/* Translation Dropdown */}
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
                  <Flag country="GB" size={18} className="m-1" /> {t('language.english')} {/* Translated */}
                </button>
                <button
                  onClick={() => changeLanguage("RW")}
                  className="flex w-full text-left px-4 py-2 hover:bg-sky-300 hover:text-white"
                >
                  <Flag country="RW" size={18} className="m-1" /> {t('language.kinyarwanda')} {/* Translated */}
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
                {t('navigation.login')} {/* Translated */}
              </Link>
              <span>|</span>
              <Link
                to="/signup"
                className="text-xs md:text-sm lg:text-base xl:text-lg"
              >
                {t('navigation.signup')} {/* Translated */}
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
                    {t('navigation.profile')} {/* Translated */}
                  </Link>
                  <Link
                    to="/my-booking"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t('navigation.myBooking')} {/* Translated */}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {t('navigation.logout')} {/* Translated */}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile View Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col text-center bg-gray-700 bg-opacity-90 rounded-lg p-4 mt-4">
          <Link to="/" onClick={toggleMenu}>
            {t('navigation.home')}
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            {t('navigation.about')}
          </Link>
          <Link to="/destiny" onClick={toggleMenu}>
            {t('navigation.destination')}
          </Link>
          <Link to="/service" onClick={toggleMenu}>
            {t('navigation.service')}
          </Link>
          <Link to="/products" onClick={toggleMenu}>
            {t('navigation.products')}
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            {t('navigation.contact')}
          </Link>

          {/* User Actions in Mobile */}
          <div className="flex flex-col gap-4 mt-4">
            {!user ? (
              <div className="flex flex-col gap-1.5">
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="text-sm"
                >
                  {t('navigation.login')}
                </Link>
                <Link
                  to="/signup"
                  onClick={toggleMenu}
                  className="text-sm"
                >
                  {t('navigation.signup')}
                </Link>
              </div>
            ) : (
              <div>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center"
                >
                  <img
                    loading="lazy"
                    src={user.profile.url}
                    alt="User Profile"
                    className="object-cover w-10 h-10 rounded-full"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="flex flex-col text-left bg-white text-black rounded-lg shadow-lg py-2">
                    <span className="block px-4 py-2">{user?.name}</span>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        toggleMenu();
                      }}
                    >
                      {t('navigation.profile')}
                    </Link>
                    <Link
                      to="/my-booking"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        toggleMenu();
                      }}
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
      )}
    </nav>
  );
}

export default Navigation;
