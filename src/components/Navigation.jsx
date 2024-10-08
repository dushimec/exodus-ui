import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 flex flex-wrap gap-10 items-center my-auto w-full z-[9999] transition-all duration-300 ${isScrolled ? 'bg-gray-700 opacity-80' : 'bg-transparent'} p-2`}>

      <div className="flex flex-row justify-center items-center gap-10 self-stretch ml-9 text-white max-md:max-w-full">
        <div className='mr-52'>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e4e2e4f0bb31f30bc1493108073e6e5e5823645bfe75f9dfee19deb334bf75?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" 
            alt="Company logo" 
            className="object-contain shrink-0 max-w-full aspect-[2.16] rounded-[300px] w-[125px]" 
          />
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/destiny">Destination</Link>
        <Link to="/service">Service</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact us</Link>
      </div>

      <div className="flex gap-1.5 items-center ml-28 text-white">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bedd0d954d21ce96ad322acbd0b4d921d581a1bd0b25cb8bf71eaa1f8c67e901?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" 
          alt="Login icon" 
          className="object-contain shrink-0 aspect-square w-[23px]" 
        />
        <Link to="/login">Login</Link> |
        <Link to="/signup">SignUp</Link>
      </div>

      <div className="flex gap-1.5 text-sm whitespace-nowrap ml-10 mr-0 text-white">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/64918f4a7ad39388b8769ffbe23ec38bf6c245df8411c7da7ede851708d40554?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" 
          alt="Language icon" 
          className="object-contain shrink-0 w-6" 
        />
        <span className="my-auto">EN</span>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42ab03485f2d97fd3f9c9184ee7df164d7b51a1337080ada7a7d92c546fd3c4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" 
          alt="Dropdown arrow" 
          className="object-contain shrink-0 self-start mt-1.5 w-3.5" 
        />
      </div>
    </nav>
  );
}

export default Navigation;
