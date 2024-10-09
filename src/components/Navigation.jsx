


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('EN'); // Default is English

//   const languages = [
//     { code: 'EN', name: 'English', flag: 'https://flagcdn.com/gb.svg' },
//     { code: 'RW', name: 'Kinyarwanda', flag: 'https://flagcdn.com/rw.svg' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleLanguageDropdown = () => {
//     setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
//   };

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language.code);
//     setIsLanguageDropdownOpen(false);
//     // Here you can trigger the actual language change logic (like i18n.changeLanguage(language.code))
//   };

//   return (
//     <nav className={`fixed top-0 left-0 flex flex-wrap items-center w-full z-[9999] transition-all duration-300 ${isScrolled ? 'bg-gray-700 opacity-80' : 'bg-transparent'} p-2`}>
//       <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-10 xl:px-12 text-white">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img 
//             loading="lazy" 
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e4e2e4f0bb31f30bc1493108073e6e5e5823645bfe75f9dfee19deb334bf75?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" 
//             alt="Company logo" 
//             className="object-contain w-[80px] md:w-[90px] lg:w-[120px] xl:w-[140px]" 
//           />
//         </div>

//         {/* Hamburger Menu Icon */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>

//         {/* Links (Desktop View) */}
//         <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 xl:gap-8">
//           <Link to="/" className="text-xs md:text-sm lg:text-base xl:text-lg">Home</Link>
//           <Link to="/about" className="text-xs md:text-sm lg:text-base xl:text-lg">About </Link>
//           <Link to="/destiny" className="text-xs md:text-sm lg:text-base xl:text-lg">Destination</Link>
//           <Link to="/service" className="text-xs md:text-sm lg:text-base xl:text-lg">Service</Link>
//           <Link to="/products" className="text-xs md:text-sm lg:text-base xl:text-lg">Products</Link>
//           <Link to="/contact" className="text-xs md:text-sm lg:text-base xl:text-lg">Contact </Link>
//         </div>

//         {/* User Actions */}
//         <div className="hidden md:flex gap-2 items-center text-white lg:gap-3 xl:gap-4">
//           <div className="flex gap-1.5 items-center">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/bedd0d954d21ce96ad322acbd0b4d921d581a1bd0b25cb8bf71eaa1f8c67e901?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
//               alt="Login icon"
//               className="object-contain shrink-0 aspect-square w-[18px] md:w-[20px] lg:w-[22px] xl:w-[25px]"
//             />
//             <Link to="/login" className="text-xs md:text-sm lg:text-base xl:text-lg">Login</Link>
//             <span>|</span>
//             <Link to="/signup" className="text-xs md:text-sm lg:text-base xl:text-lg">SignUp</Link>
//           </div>

//           {/* Language Selector */}
//           <div className="relative flex gap-1 items-center">
//             {/* Selected language flag */}
//             <img
//               loading="lazy"
//               src={selectedLanguage === 'EN' ? 'https://flagcdn.com/gb.svg' : 'https://flagcdn.com/rw.svg'}
//               alt="Language flag"
//               className="w-4 lg:w-5 xl:w-6"
//             />
//             {/* Selected language code */}
//             <span className="my-auto text-xs md:text-sm lg:text-base xl:text-lg">{selectedLanguage}</span>
//             {/* Dropdown icon */}
//             <button onClick={toggleLanguageDropdown}>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42ab03485f2d97fd3f9c9184ee7df164d7b51a1337080ada7a7d92c546fd3c4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
//                 alt="Dropdown arrow"
//                 className="w-3 lg:w-4 xl:w-5"
//               />
//             </button>
//             {/* Dropdown menu */}
//             {isLanguageDropdownOpen && (
//               <div className="absolute top-6 mt-2 w-36  bg-white text-black rounded shadow-md">
//                 {languages.map((language) => (
//                   <button
//                     key={language.code}
//                     onClick={() => handleLanguageChange(language)}
//                     className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-200"
//                   >
//                     <img src={language.flag} alt={`${language.name} flag`} className="w-5 mr-2" />
//                     {language.name}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="flex flex-col mt-2 md:hidden text-white bg-gray-700 p-5 rounded-md">
//           <Link to="/" className="mb-2" onClick={toggleMenu}>Home</Link>
//           <Link to="/about" className="mb-2" onClick={toggleMenu}>About us</Link>
//           <Link to="/destiny" className="mb-2" onClick={toggleMenu}>Destination</Link>
//           <Link to="/service" className="mb-2" onClick={toggleMenu}>Service</Link>
//           <Link to="/products" className="mb-2" onClick={toggleMenu}>Products</Link>
//           <Link to="/contact" className="mb-2" onClick={toggleMenu}>Contact us</Link>
//           <div className="mt-4">
//             <Link to="/login" className="mr-2" onClick={toggleMenu}>Login</Link>
//             <Link to="/signup" onClick={toggleMenu}>SignUp</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navigation;



// src/components/Navigation.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../i18n'; // Import the i18n configuration

function Navigation() {
  const { t, i18n } = useTranslation(); // Initialize translation
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: t('navigation.language.english'), flag: 'https://flagcdn.com/gb.svg' },
    { code: 'RW', name: t('navigation.language.kinyarwanda'), flag: 'https://flagcdn.com/rw.svg' },
  ];

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

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.code.toLowerCase()); // Change language
    setSelectedLanguage(language.code);
    setIsLanguageDropdownOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 flex flex-wrap items-center w-full z-[9999] transition-all duration-300 ${isScrolled ? 'bg-gray-700 opacity-80' : 'bg-transparent'} p-2`}>
      <div className="flex justify-between items-center w-full px-4 md:px-6 lg:px-10 xl:px-12 text-white">
        <div className="flex-shrink-0">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e4e2e4f0bb31f30bc1493108073e6e5e5823645bfe75f9dfee19deb334bf75?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" 
            alt="Company logo" 
            className="object-contain w-[80px] md:w-[90px] lg:w-[120px] xl:w-[140px]" 
          />
        </div>

        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6 xl:gap-8">
          <Link to="/" className="text-xs md:text-sm lg:text-base xl:text-lg">{t('navigation.home')}</Link>
          <Link to="/about" className="text-xs md:text-sm lg:text-base xl:text-lg">{t('navigation.about')}</Link>
          <Link to="/destiny" className="text-xs md:text-sm lg:text-base xl:text-lg">{t('navigation.destination')}</Link>
          <Link to="/service" className="text-xs md:text-sm lg:text-base xl:text-lg">{t('navigation.service')}</Link>
          <Link to="/products" className="text-xs md:text-sm lg:text-base xl:text-lg">{t('navigation.products')}</Link>
          <Link to="/contact" className="text-xs md:text-sm lg:text-base xl:text-lg">{t('navigation.contact')}</Link>
        </div>

        <div className="hidden md:flex gap-2 items-center text-white lg:gap-3 xl:gap-4">
          <div className="flex gap-1.5 items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bedd0d954d21ce96ad322acbd0b4d921d581a1bd0b25cb8bf71eaa1f8c67e901?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Login icon"
              className="object-contain shrink-0 aspect-square w-[18px] md:w-[20px] lg:w-[22px] xl:w-[25px]"
            />
            <Link to="/login" className="text-xs md:text-sm lg:text-base xl:text-lg">{t('navigation.login')}</Link>
            <span>|</span>
            <Link to="/signup" className="text-xs md:text-sm lg:text-base xl:text-lg">{t('navigation.signup')}</Link>
          </div>

          <div className="relative flex gap-1 items-center">
            <img
              loading="lazy"
              src={selectedLanguage === 'EN' ? 'https://flagcdn.com/gb.svg' : 'https://flagcdn.com/rw.svg'}
              alt="Language flag"
              className="w-4 lg:w-5 xl:w-6"
            />
            <span className="my-auto text-xs md:text-sm lg:text-base xl:text-lg">{selectedLanguage}</span>
            <button onClick={toggleLanguageDropdown}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42ab03485f2d97fd3f9c9184ee7df164d7b51a1337080ada7a7d92c546fd3c4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                alt="Dropdown arrow"
                className="w-3 lg:w-4 xl:w-5"
              />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute top-6 mt-2 w-36 bg-white text-black rounded shadow-md">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language)}
                    className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-200"
                  >
                    <img src={language.flag} alt={`${language.name} flag`} className="w-5 mr-2" />
                    {language.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 text-white p-4">
          <Link to="/" className="py-2 text-xs">{t('navigation.home')}</Link>
          <Link to="/about" className="py-2 text-xs">{t('navigation.about')}</Link>
          <Link to="/destiny" className="py-2 text-xs">{t('navigation.destination')}</Link>
          <Link to="/service" className="py-2 text-xs">{t('navigation.service')}</Link>
          <Link to="/products" className="py-2 text-xs">{t('navigation.products')}</Link>
          <Link to="/contact" className="py-2 text-xs">{t('navigation.contact')}</Link>
          <div className="flex flex-col gap-2 mt-2">
            <Link to="/login" className="text-xs">{t('navigation.login')}</Link>
            <Link to="/signup" className="text-xs">{t('navigation.signup')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
