import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Header from './Header';

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Array of background images to slide
  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/dee3af1493f79e0aaa929a033c4ce039cc93865345d7fb1946cb09379b196696?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7aa17f4e6ec1d83834faad7f535d3668f0921258cd0faa09554fbc21f41934c4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6786728cf12889bfa4193db781d3e609ce9cfddd2d579bc8b418e5385fee361e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
  ];

  // Change image every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2500); // 2.5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
      <div className="flex relative flex-col w-full text-white min-h-[887px] max-md:max-w-full">
        <img
          loading="lazy"
          src={images[currentImage]} // Use the current image
          alt="Background"
          className="object-cover absolute inset-0 w-full h-full transition-opacity duration-1000" // Ensures the image covers the full container
          style={{ objectFit: 'cover' }} // Ensures the image maintains aspect ratio and fits the container
        />
        <section className="flex relative flex-col items-start px-20 pt-3.5 pb-48 w-full bg-black bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <Header />
          <SearchBar />
          <h1 className="mt-16 ml-24 text-6xl font-semibold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Your global gateway to unforgettable adventures!
          </h1>
          <p className="mt-11 ml-28 text-xl max-md:mt-10 max-md:max-w-full">
            Discover the world with Exodus: Your trusted travel adventure partner!
          </p>
          <button className="relative p-2 mt-12 ml-28 max-w-full text-base font-semibold border-2 border-sky-500 rounded-full w-[205px] hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out max-md:mt-10 max-md:mb-2.5 max-md:ml-2.5">
  <span className="bg-sky-500 text-white rounded-full w-full h-full flex items-center justify-center py-4 hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out">
    Explore here
  </span>
</button>


        </section>
      </div>

      {/* Section Title */}
      <section className="flex flex-col items-center text-center mt-10">
        <div className="flex items-center justify-center w-full">
          <div className="mt-4 w-96 border-4 border-sky-500 border-solid min-h-[4px] max-md:mt-10 max-md:max-w-full" />
          <h2 className="text-4xl font-[Jim Nightshade] text-black">
            Find a tour by destination
          </h2>
          <div className="mt-4 w-96 border-4 border-sky-500 border-solid min-h-[4px] max-md:mt-10 max-md:max-w-full" />
        </div>
      </section>

      {/* Destination Images */}
      <div className="flex justify-evenly gap-5 mt-10">
      <div className="relative w-[250px] h-[250px]">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0202a9382b195489e964f71ea596c66b39a218e18bbb23c0298aaef14f8fa97d?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
    alt="Destination 1"
    className="object-cover rounded-full w-[250px] h-[250px] hover:opacity-45 transition duration-300 ease-in-out"
  />
  {/* Black overlay with text on hover */}
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
    Israel
  </div>
</div>

<div className="relative w-[250px] h-[250px]">

<img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78c2289638a6c00227af70d39357a77a3d1a0e6a882b044880038c091dde1a27?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
          alt="Destination 2"
          className="object-cover rounded-full w-[250px] h-[250px] hover:opacity-45 transition duration-300 ease-in-out"

        />

  {/* Black overlay with text on hover */}
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
    Rwanda
  </div>
</div>
        
         


         
<div className="relative w-[250px] h-[250px]">

<img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dee3af1493f79e0aaa929a033c4ce039cc93865345d7fb1946cb09379b196696?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
          alt="Destination 3"
          className="object-cover rounded-full w-[250px] h-[250px]"
        />

  {/* Black overlay with text on hover */}
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
    Turkey
  </div>
</div>
        
       
      </div>

      <div className="mt-16 w-full border-4 border-sky-500 border-solid min-h-[4px] max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}

export default Hero;
