import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-base font-medium max-w-[1255px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44e4e2e4f0bb31f30bc1493108073e6e5e5823645bfe75f9dfee19deb334bf75?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Company logo" className="object-contain shrink-0 max-w-full aspect-[2.16] rounded-[300px] w-[125px]" />
      <Navigation />
    </header>
  );
}

export default Header;