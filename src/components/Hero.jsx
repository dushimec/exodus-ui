import React, { useState, useEffect } from 'react';

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/dee3af1493f79e0aaa929a033c4ce039cc93865345d7fb1946cb09379b196696?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7aa17f4e6ec1d83834faad7f535d3668f0921258cd0faa09554fbc21f41934c4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6786728cf12889bfa4193db781d3e609ce9cfddd2d579bc8b418e5385fee361e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex overflow-hidden flex-col w-full bg-white">
      <div className="flex relative flex-col w-full text-white min-h-[887px] max-md:min-h-[600px]">
        <img
          loading="lazy"
          src={images[currentImage]}
          alt="Background"
          className="object-cover absolute inset-0 w-full h-full transition-opacity duration-1000"
          style={{ objectFit: 'cover' }}
        />
        <section className="flex relative flex-col items-start px-20 pt-3.5 pb-48 w-full bg-black bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24">
          {/* Search Bar */}
          <form className="flex items-center gap-2 self-center px-4 py-7 mt-48 ml-0 max-w-full text-base bg-sky-500 rounded-[42px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] text-white w-[544px] max-md:w-[220px] max-md:gap-1 max-md:px-1 max-md:py-1 max-md:mt-8">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea35eaf051f9ad399b72b79aaf651b9da381c7d1199841db6349f9a5aa1fbeb6?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="search icon" className="object-contain w-[20px] h-[20px]" />
            <label htmlFor="searchInput" className="sr-only">Search Trip</label>
            <input
              id="searchInput"
              type="text"
              placeholder="Search Trip here ........ "
              className="flex-auto my-auto w-full  text-white bg-transparent border-none focus:outline-none text-sm max-md:text-xs"
            />
          </form>

          <h1 className="mt-16 ml-24 text-6xl font-semibold max-md:mt-10 max-md:ml-5 max-md:text-4xl">
            Your global gateway to unforgettable adventures!
          </h1>
          <p className="mt-11 ml-28 text-xl max-md:mt-5 max-md:ml-5 max-md:text-lg">
            Discover the world with Exodus: Your trusted travel adventure partner!
          </p>
          <button className="relative p-2 mt-12 ml-28 max-w-full text-base font-semibold border-2 border-sky-500 rounded-full w-[205px] hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out max-md:mt-10 max-md:mb-2.5 max-md:ml-2.5">
            <span className="bg-sky-500 text-white rounded-full w-full h-full flex items-center justify-center py-4 hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out">
              Explore here
            </span>
          </button>
        </section>
      </div>
      <section className="flex flex-col items-center text-center mt-10">
  <div className="flex items-center justify-center w-full flex-wrap">
    <div className="mt-4 w-48 border-4 border-sky-500 border-solid min-h-[4px] max-md:w-32" />
    <h2 className="text-4xl font-[jim-nightshade] text-black mx-2 max-md:text-3xl">
      Find a tour by destination
    </h2>
    <div className="mt-4 w-48 border-4 border-sky-500 border-solid min-h-[4px] max-md:w-32" />
  </div>
</section>

<div className="flex justify-evenly gap-5 mt-10 flex-wrap max-md:justify-center max-md:flex-col max-md:items-center">
  {[
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0202a9382b195489e964f71ea596c66b39a218e18bbb23c0298aaef14f8fa97d?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      alt: "Destination 1",
      label: "Israel"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/78c2289638a6c00227af70d39357a77a3d1a0e6a882b044880038c091dde1a27?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      alt: "Destination 2",
      label: "Rwanda"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dee3af1493f79e0aaa929a033c4ce039cc93865345d7fb1946cb09379b196696?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
      alt: "Destination 3",
      label: "Turkey"
    }
  ].map(({ src, alt, label }, index) => (
    <div key={index} className="relative w-[200px] h-[200px] max-md:w-[120px] max-md:h-[120px] max-md:mb-5">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="object-cover rounded-full w-full h-full hover:opacity-45 transition duration-300 ease-in-out"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
        {label}
      </div>
    </div>
  ))}
</div>



      <div className="mt-16 w-full border-4 border-sky-500 border-solid min-h-[4px] max-md:mt-10 max-md:max-w-full" />
    </div>
  );
}

export default Hero;
