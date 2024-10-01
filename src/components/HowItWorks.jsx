import React from 'react';

function HowItWorks() {
  return (
    <section className="flex gap-5 justify-between items-start mt-52 mr-6 ml-8 w-full max-w-[1265px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex flex-col mt-1">
        <h2 className="text-3xl font-bold text-black">How it works?</h2>
        <p className="mr-6 text-xl font-semibold text-sky-500 text-opacity-90 max-md:mr-2.5">Search_select_book</p>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col justify-center items-start px-4 py-5 rounded-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfadebe9d3ad07dd4d5a60b2e12ca344fcc09037b155c51cd713d436f8587d4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain aspect-square w-[35px]" />
        </div>
        <div className="self-end mt-12 text-xl font-bold basis-auto text-sky-500 text-opacity-90 max-md:mt-10">Find your Dream trip</div>
      </div>
      <div className="flex gap-5 mt-1.5">
        <div className="flex flex-col justify-center px-4 py-6 rounded-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd1bfbf2fd4467dffa930f71c2e0fb7032f399cc4d7276cb30fdc773b73d6ee?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain aspect-[1.21] w-[34px]" />
        </div>
        <div className="self-end mt-11 text-xl font-semibold basis-auto text-sky-500 text-opacity-90 max-md:mt-10">Select trip packages</div>
      </div>
      <div className="flex gap-2.5">
        <div className="flex flex-col justify-center px-4 py-5 rounded-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b12edec47be92615e648f3a73746167cbd4b5f17ccad4551d6a0786c5b240a?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain w-9 aspect-square" />
        </div>
        <div className="flex flex-col my-auto">
          <h3 className="self-start text-3xl text-black">Book</h3>
          <p className="mt-1.5 text-xl font-semibold text-sky-500 text-opacity-90">Booking and pay</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;