import React from 'react';

function PopularTourPackages() {
  return (
    <section className="flex flex-col px-14 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start ml-28 text-3xl text-black max-md:ml-2.5">Popular tour packages</h2>
      <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between max-md:mt-10 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a07a27685caa1bd6098fff23e250195b5872b0bfa6a52115c832b325c2b3ba97?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 my-auto aspect-square w-[70px]" />
              <div className="flex flex-col pb-28 bg-white shadow-[0px_100px_80px_rgba(0,0,0,0.07)] max-md:pb-24">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5725c55f59a8c5f1d2b57296f45f428b87daa2e84f2683985f7657badec80a78?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Popular tour package 1" className="object-contain w-full aspect-[1.37]" />
              </div>
              <div className="flex flex-col pb-28 bg-white shadow-[0px_100px_80px_rgba(0,0,0,0.07)] max-md:pb-24">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d717a7f9662b0fd3274b0b77e060ff0f067fd72afbdd3cde6c6c986740589ffa?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Popular tour package 2" className="object-contain w-full aspect-[1.37]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pb-28 w-full bg-white shadow-[0px_100px_80px_rgba(0,0,0,0.07)] max-md:pb-24 max-md:mt-7">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a760df01b039d99736e4af6005928a9b1931d06148e780155b15a30c91f2296d?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Popular tour package 3" className="object-contain w-full aspect-[1.37]" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  Continuing from where we left off:

                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a013ea58dfe83b5dad421ba7a124df3093cf4a9ad9f3dc1cd2ce3cf746bd19?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[72px] max-md:mt-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularTourPackages;