import { useState, useEffect, useRef } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import KigaliImage from '../IMAGE/kgl.jpg';
import Havan from '../IMAGE/havana.jpg';
import Turkey from '../IMAGE/tukey.jpg';

const upcomingTrips = [
  { id: 1, title: 'Kings Palace Museum', image: KigaliImage },
  { id: 2, title: 'Mountain Expedition', image: Havan },
  { id: 3, title: 'Turkey', image: Turkey },
];

export default function TravelHero() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTripIndex, setCurrentTripIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTripIndex((prevIndex) => (prevIndex + 1) % upcomingTrips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  const handleExplore = () => {
    alert('Exploring adventures!');
  };

  return (
    <div className="relative pt-32 min-h-screen bg-gradient-to-br from-sky-600 to-white overflow-hidden flex flex-col justify-center items-center px-4">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:mb-0">
          <h1
            ref={titleRef}
            className={`text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-10 leading-tight text-center lg:text-left transition-opacity duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Your global gateway to unforgettable adventures!
          </h1>

          <button
            onClick={handleExplore}
            className="relative p-2 mt-6 lg:mt-10 mx-auto lg:mx-0 text-base font-semibold border-2 border-sky-500 rounded-full w-[200px] hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out"
          >
            <span className="bg-sky-500 text-white rounded-full w-full h-full flex items-center justify-center py-3 hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out">
              Explore here
            </span>
          </button>
        </div>

        <div className="lg:w-1/2 space-y-8 mt-8 lg:mt-0">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search Trip here ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white bg-opacity-90 rounded-full py-3 px-6 pl-12 text-lg focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-lg"
              aria-label="Search for a trip"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-500"
              aria-hidden="true"
            />
          </form>

          <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-lg relative overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-semibold text-sky-500 mb-2">
              Upcoming Trip
            </h2>
            <div className="relative h-56 sm:h-64">
              {upcomingTrips.map((trip, index) => (
                <div
                  key={trip.id}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                    index === currentTripIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="rounded object-cover w-full h-full"
                  />
                  <p className="absolute bottom-2 left-2 bg-sky-500 text-white px-2 py-1 rounded text-sm sm:text-base">
                    {trip.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute bottom-5 right-6 flex space-x-2">
              <button
                onClick={() =>
                  setCurrentTripIndex(
                    (prevIndex) => (prevIndex - 1 + upcomingTrips.length) % upcomingTrips.length
                  )
                }
                className="p-1 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                aria-label="Previous trip"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() =>
                  setCurrentTripIndex((prevIndex) => (prevIndex + 1) % upcomingTrips.length)
                }
                className="p-1 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                aria-label="Next trip"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* <div className='bg-white'>
      <section className="flex flex-col items-center text-center mt-10">
  <div className="flex flex-col sm:flex-row items-center justify-center w-full">
    <div className="mt-4 w-48 border-4 border-sky-500 border-solid min-h-[4px] max-md:w-32" />
    <h2 className="text-4xl font-[jim-nightshade] text-black mx-2 max-md:text-2xl mt-4 sm:mt-0">
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
    <div key={index} className="relative w-[200px] h-[200px] max-md:w-[150px] max-md:h-[150px] max-sm:w-[180px] max-sm:h-[180px] max-md:mb-5">
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
</div> */}


    </div>
  );
}