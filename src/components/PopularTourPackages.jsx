import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import icons for arrows

function PopularTourPackages() {
  // Image data
  const images = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/5725c55f59a8c5f1d2b57296f45f428b87daa2e84f2683985f7657badec80a78?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/d717a7f9662b0fd3274b0b77e060ff0f067fd72afbdd3cde6c6c986740589ffa?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28',

    'https://cdn.builder.io/api/v1/image/assets/TEMP/another-image-url-1', // Add more images
    'https://cdn.builder.io/api/v1/image/assets/TEMP/another-image-url-2',
    "https://cdn.builder.io/api/v1/image/assets/TEMP/117a7d59dc656bdce1b6081cbef06f6835f72acd40d12b8370774f6db992bdde?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28", 

     "https://cdn.builder.io/api/v1/image/assets/TEMP/17b9e6c93389e4213d21497b80ef0a0eb03018c31846572853a285ddd1e2a570?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/d9947b78b58c3aa005d1959a1447f3dd4fc7713dd41a566ff301355bc0ca659e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/a193c58d332ff6d8146dd598e202b24278710f809249db5ed273e594eb2835b3?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28", 
 "https://cdn.builder.io/api/v1/image/assets/TEMP/faad5b420e6636dc632b7883759d238e21532b54e3096de38508378540a25cc4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/da95aea65add208784b667c91a0be86003348d19ecad9daa0c9ceed846f88c87?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28", 
  "https://cdn.builder.io/api/v1/image/assets/TEMP/9a36e02fe720c108d57d83f46c75427e872176da7167f9299988cd34e75e6865?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 3 : prevIndex - 1));
  };

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <section className="flex flex-col px-14 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="self-start ml-28 text-3xl text-black max-md:ml-2.5">Popular tour packages</h2>

      <div className="relative mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex justify-center items-center max-md:flex-col">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 bg-blue-500 p-2 rounded-full shadow-lg focus:outline-none hover:bg-blue-700"
          >
            <FiChevronLeft className="text-white text-3xl" />
          </button>

          {/* Image Container */}
          <div className="flex justify-between w-full">
            {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
              <div key={index} className="flex flex-col bg-white shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-[30%] mx-2">
                <img
                  loading="lazy"
                  src={image}
                  alt={`Popular tour package ${currentIndex + index + 1}`}
                  className="object-contain w-full h-[400px] aspect-[1.37]"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 bg-blue-500 p-2 rounded-full shadow-lg focus:outline-none hover:bg-blue-700"
          >
            <FiChevronRight className="text-white text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopularTourPackages;
