import React from 'react';

function WhyChooseUs() {
  return (
    <section className="relative flex flex-col justify-center  w-full min-h-[440px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:mt-10 md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/579e0fca0fbcad8ef447b930ed61becd98b780beb6780f379f68fdabd66e44ad?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
        alt=""
        className="object-cover absolute inset-0 w-full h-full"
      />

      <div className="relative flex flex-col items-center pt-40 pb-20 w-full bg-neutral-900 bg-opacity-50 sm:px-5 md:px-5 md:max-w-full">
        <div className="flex flex-col w-full max-w-5xl">
          <h2 className="self-center text-2xl md:text-3xl font-bold text-white text-center">
            WHY CHOOSE US?
          </h2>
          <p className="self-center mt-6 mb-5 text-lg md:text-2xl text-white font-[inria-serif] text-center">
            A brand name you can trust and rely on
          </p>
          
          {/* Image section */}
          <div className="flex justify-between gap-5 sm:gap-2  w-full max-w-sm md:max-w-lg mx-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab42847af8ca220686e9916a9ce7128f82eeb5ab10498a9d21e3c5665b631aa9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Affordable price guarantee"
              className="w-12 h-12 md:w-20 md:h-20 object-contain ml-8"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d393d690b820b385444fa81c312cabcbc100e2cfc05ba174d5c218e992479f9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Wide variety of destinations" 
              className="w-12 h-12 md:w-20 md:h-20 object-contain "
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a194d8ac904f74af5c6c5de4732ebd05abb490fe021c66be21aa39935ed4394?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="High qualified service"
              className="w-12 h-12 md:w-20 md:h-20 object-contain mr-5"
            />
          </div>

          {/* Text section */}
          <div className="flex justify-between gap-2 sm:gap-5 mt-3 text-xs md:text-sm font-medium text-white text-center max-w-sm md:max-w-lg mx-auto">
            <div className="mx-1">Affordable price Guarantee</div>
            <div className="mx-1">Wide variety of destinations</div>
            <div className="mx-1">High qualified service</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
