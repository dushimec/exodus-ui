import React from 'react';

function HowItWorks() {
  return (




    <section className="flex flex-col lg:flex-row items-center justify-center w-full mt-20 mx-auto mb-14 px-4">
{/* 
    <section className="flex flex-row items-center  ml-32 w-full mt-20 mx-auto mb-14 px-4"> */}


      {/* Header section */}
      <div className="text-center mb-8 lg:mb-0 lg:mr-8">
        <h2 className="text-3xl font-bold text-black">How it works?</h2>
        <p className="text-xl text-sky-500">Search, select, book</p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col lg:flex-row justify-around items-center w-full max-w-6xl text-center lg:text-left">
        {/* Search Section */}
        <div className="flex flex-col items-center lg:flex-row mb-8 lg:mb-0 lg:mr-6">
          <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfadebe9d3ad07dd4d5a60b2e12ca344fcc09037b155c51cd713d436f8587d4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Search Icon"
              className="w-10 h-10"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:ml-4">
            <h3 className="text-2xl font-bold text-black">Search</h3>
            <p className="text-lg text-sky-500 font-[inria-serif]">Find your Dream trip</p>
          </div>
        </div>

        {/* Select Section */}
        <div className="flex flex-col items-center lg:flex-row mb-8 lg:mb-0 lg:mr-6">
          <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd1bfbf2fd4467dffa930f71c2e0fb7032f399cc4d7276cb30fdc773b73d6ee?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Select Icon"
              className="w-10 h-10"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:ml-4">
            <h3 className="text-2xl font-bold text-black">Select</h3>
            <p className="text-lg text-sky-500 font-[inria-serif]">Select trip packages</p>
          </div>
        </div>

        {/* Book Section */}
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b12edec47be92615e648f3a73746167cbd4b5f17ccad4551d6a0786c5b240a?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Book Icon"
              className="w-10 h-10"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start lg:ml-4">
            <h3 className="text-2xl font-bold text-black">Book</h3>
            <p className="text-lg text-sky-500 font-[inria-serif]">Booking and pay</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
