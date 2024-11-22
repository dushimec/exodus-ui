import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';


function PopularTourPackages() {
  const { t } = useTranslation();
  
  const images = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/5725c55f59a8c5f1d2b57296f45f428b87daa2e84f2683985f7657badec80a78?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/d717a7f9662b0fd3274b0b77e060ff0f067fd72afbdd3cde6c6c986740589ffa?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/117a7d59dc656bdce1b6081cbef06f6835f72acd40d12b8370774f6db992bdde?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/17b9e6c93389e4213d21497b80ef0a0eb03018c31846572853a285ddd1e2a570?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/d9947b78b58c3aa005d1959a1447f3dd4fc7713dd41a566ff301355bc0ca659e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/a193c58d332ff6d8146dd598e202b24278710f809249db5ed273e594eb2835b3?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(1); // Controls the number of images to display

  // Handle window resize to update display count
  useEffect(() => {
    const updateDisplayCount = () => {
      if (window.innerWidth >= 1024) {
        setDisplayCount(3); // Show 3 images on large devices
      } else if (window.innerWidth >= 768) {
        setDisplayCount(2); // Show 2 images on medium devices
      } else {
        setDisplayCount(1); // Show 1 image on small devices
      }
    };
    updateDisplayCount();
    window.addEventListener('resize', updateDisplayCount);
    return () => window.removeEventListener('resize', updateDisplayCount);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - displayCount : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + displayCount >= images.length ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, displayCount]);

  
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out' });
  }, []);

  return (
    <section className="flex flex-col px-10 mt-12 w-full max-md:px-5 max-md:mt-8" data-aos= "fade-up ">
      <h2 className="self-start ml-24 text-3xl text-black font-[inria-serif] max-md:ml-2.5 max-md:text-2xl" data-aos="fade-up" >
      {t('popularTourPackages.title')}
      </h2>

      <div className="relative mt-14 w-full max-md:mt-8" data-aos="fade-up">
        <div className="flex justify-center items-center"  data-aos="fade-up" >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 z-30 bg-sky-500 p-1.5 rounded-full shadow-lg focus:outline-none hover:bg-sky-400 max-md:left-1 max-md:p-1"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <FiChevronLeft className="text-white text-2xl max-md:text-xl" />
          </button>

          {/* Image Container */}
          <div className="w-full flex justify-center items-center"  data-aos="fade-up">
            <div className="grid grid-cols-1 gap-4 max-md:w-[90%] md:grid-cols-2 lg:grid-cols-3">
              {/* Show the required number of images based on displayCount */}
              {images.slice(currentIndex, currentIndex + displayCount).map((image, index) => (
                <img
                  key={index}
                  loading="lazy"
                  src={image}
                  alt={`Popular tour package ${currentIndex + index + 1}`}
                  className="object-cover w-full h-[350px] max-md:h-[250px]"  data-aos="fade-up"
                />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 z-30 bg-sky-500 p-1.5 rounded-full shadow-lg focus:outline-none hover:bg-sky-400 max-md:right-1 max-md:p-1"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <FiChevronRight className="text-white text-2xl max-md:text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopularTourPackages;
