import React from 'react';
import SearchBar from './SearchBar';
import Header from '../components/Header';

function Hero() {
  return (
    <section className="flex relative flex-col items-start px-20 pt-3.5 pb-48 w-full bg-black bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <Header />
      <SearchBar />
      <h1 className="mt-16 ml-24 text-6xl font-semibold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Your global gateway to unforgettable adventures!
      </h1>
      <p className="mt-11 ml-28 text-xl max-md:mt-10 max-md:max-w-full">
        Discover the world with Exodus: trusted travel adventure partner!
      </p>
      <button className="flex flex-col justify-center p-1.5 mt-12 mb-0 ml-28 max-w-full text-base font-semibold border-2 border-sky-500 border-solid bg-white bg-opacity-0 rounded-[30px] w-[205px] max-md:mt-10 max-md:mb-2.5 max-md:ml-2">
        <span className="px-11 py-5 bg-sky-500 rounded-[30px] max-md:px-5">Explore here</span>
      </button>
    </section>
  );
}

export default Hero;