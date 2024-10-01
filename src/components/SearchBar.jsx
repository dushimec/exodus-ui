import React from 'react';

function SearchBar() {
  return (
    <form className="flex flex-wrap gap-6 self-center px-6 py-5 mt-40 ml-4 max-w-full text-base bg-sky-500 rounded-[42px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] text-white text-opacity-70 w-[544px] max-md:px-5 max-md:mt-10">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea35eaf051f9ad399b72b79aaf651b9da381c7d1199841db6349f9a5aa1fbeb6?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 aspect-square w-[25px]" />
      <label htmlFor="searchInput" className="sr-only">Search Trip</label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search Trip here ........"
        className="flex-auto my-auto w-[440px] max-md:max-w-full bg-transparent border-none focus:outline-none"
      />
    </form>
  );
}

export default SearchBar;