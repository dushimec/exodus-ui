import React from 'react';

function Navigation() {
  return (
    <nav className="flex flex-wrap gap-10 items-start my-auto max-md:max-w-full">
      <div className="flex gap-9 self-stretch my-auto max-md:max-w-full">
        <a href="#home">Home</a>
        <a href="#about">About us</a>
        <a href="#destination">Destination</a>
        <a href="#service">Service</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact us</a>
      </div>
      <div className="flex gap-1.5 items-center mt-0 ml-16">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bedd0d954d21ce96ad322acbd0b4d921d581a1bd0b25cb8bf71eaa1f8c67e901?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Login icon" className="object-contain shrink-0 self-stretch aspect-square w-[23px]" />
        <a href="#login">Login</a> |
        <a href="#signup">SignUp</a>
      </div>
      <div className="flex gap-1.5 text-sm whitespace-nowrap ml-2 mr-0">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64918f4a7ad39388b8769ffbe23ec38bf6c245df8411c7da7ede851708d40554?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Language icon" className="object-contain shrink-0 w-6 aspect-[1.04]" />
        <span className="my-auto">EN</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b42ab03485f2d97fd3f9c9184ee7df164d7b51a1337080ada7a7d92c546fd3c4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Dropdown arrow" className="object-contain shrink-0 self-start mt-1.5 w-3.5 aspect-[0.87]" />
      </div>
    </nav>
  );
}

export default Navigation;