
// import { useState, useEffect, useRef } from 'react';
// import { FaSearch } from 'react-icons/fa'; // Import the search icon
// import { IoChevronBack, IoChevronForward } from 'react-icons/io5'; // Import Chevron icons for carousel navigation
// import video from "../IMAGE/video.mp4"; // Assuming video is located in your IMAGE folder
// import KigaliImage from '../IMAGE/kgl.jpg';
// import Havan from '../IMAGE/havana.jpg';
// import Turkey from '../IMAGE/tukey.jpg';


// const upcomingTrips = [
//   { id: 1, title: "Trip to Bali", image: KigaliImage },
//   { id: 2, title: "Explore Iceland", image: Havan },
//   { id: 3, title: "Adventure in Morocco", image: Turkey }
// ];


// export default function TravelHero() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentTripIndex, setCurrentTripIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const titleRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const [entry] = entries;
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     if (titleRef.current) {
//       observer.observe(titleRef.current);
//     }

//     return () => {
//       if (titleRef.current) {
//         observer.unobserve(titleRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTripIndex((prevIndex) => (prevIndex + 1) % upcomingTrips.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     alert(`Searching for: ${searchTerm}`);
//   };

//   const handleExplore = () => {
//     alert('Exploring adventures!');
//   };

//   return (
//     <div className="relative pt-24 sm:pt-32 min-h-screen h-[80vh] flex flex-col justify-center items-center px-4 overflow-hidden">
//   {/* Video Background */}
//   <div className="absolute inset-0 w-full h-full overflow-hidden">
//     <video
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="w-full h-full object-cover"
//     >
//       <source src={video} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   </div>

//   {/* Content */}
//   <div className="relative container mx-auto px-4 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-between">
//     {/* Title Section */}
//     <div className="lg:w-1/2 lg:mt-0 lg:mb-0 text-center lg:text-left">
//       <h1
//         ref={titleRef}
//         className={`text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-10 leading-tight transition-opacity duration-1000 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}
//       >
//         Your global gateway to unforgettable adventures!
//       </h1>

//       <button
//         onClick={handleExplore}
//         className="relative p-2 mt-4 sm:mt-6 lg:mt-10 mx-auto lg:mx-0 text-base font-semibold border-2 border-sky-500 rounded-full w-[180px] sm:w-[200px] hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out"
//       >
//         <span className="bg-sky-500 text-white rounded-full w-full h-full flex items-center justify-center py-2 sm:py-3 hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out">
//           Explore here
//         </span>
//       </button>
//     </div>

//     {/* Search and Upcoming Trips Section */}
//     <div className="lg:w-1/2 mt-8 lg:mt-0 lg:text-left space-y-8">
//       {/* Search Input */}
//       <form onSubmit={handleSearch} className="relative">
//         <input
//           type="text"
//           placeholder="Search Trip here ..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full bg-white bg-opacity-90 rounded-full py-2 sm:py-3 px-6 pl-12 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-lg"
//           aria-label="Search for a trip"
//         />
//         <FaSearch
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-500"
//           aria-hidden="true"
//         />
//       </form>

//       {/* Upcoming Trips Carousel */}
//       <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-lg relative overflow-hidden">
//         <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2">
//           Upcoming Trip
//         </h2>
//         <div className="relative h-48 sm:h-56">
//           {upcomingTrips.map((trip, index) => (
//             <div
//               key={trip.id}
//               className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
//                 index === currentTripIndex
//                   ? 'opacity-100 translate-x-0'
//                   : 'opacity-0 translate-x-full'
//               }`}
//             >
//               <img
//                 src={trip.image}
//                 alt={trip.title}
//                 className="rounded object-cover w-full h-full"
//               />
//               <p className="absolute bottom-2 left-2 bg-sky-500 text-white px-2 py-1 rounded text-sm sm:text-base">
//                 {trip.title}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Carousel Controls */}
//         <div className="absolute bottom-5 right-6 flex space-x-2">
//           <button
//             onClick={() =>
//               setCurrentTripIndex(
//                 (prevIndex) => (prevIndex - 1 + upcomingTrips.length) % upcomingTrips.length
//               )
//             }
//             className="p-1 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
//             aria-label="Previous trip"
//           >
//             <IoChevronBack size={20} />
//           </button>
//           <button
//             onClick={() =>
//               setCurrentTripIndex((prevIndex) => (prevIndex + 1) % upcomingTrips.length)
//             }
//             className="p-1 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
//             aria-label="Next trip"
//           >
//             <IoChevronForward size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   );


// }


import { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'; 
import video from "../IMAGE/video.mp4"; 
import KigaliImage from '../IMAGE/kgl.jpg';
import Havan from '../IMAGE/havana.jpg';
import Turkey from '../IMAGE/tukey.jpg';
import { useTranslation } from 'react-i18next';

const upcomingTrips = [
  { id: 1, title: "tripToBali", image: Havan }, // Add image reference
  { id: 2, title: "exploreIceland", image: KigaliImage }, // Add image reference
  { id: 3, title: "adventureInMorocco", image: Turkey } // Add image reference
];

export default function TravelHero() {
  const { t } = useTranslation();
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
    <div className="relative pt-24 sm:pt-32 min-h-screen h-[80vh] flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-between">
        {/* Title Section */}
        <div className="lg:w-1/2 lg:mt-0 lg:mb-0 text-center lg:text-left">
          <h1
            ref={titleRef}
            className={`text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-10 leading-tight transition-opacity duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('hero.title')}
          </h1>

          <button
            onClick={handleExplore}
            className="relative p-2 mt-4 sm:mt-6 lg:mt-10 mx-auto lg:mx-0 text-base font-semibold border-2 border-sky-500 rounded-full w-[180px] sm:w-[200px] hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out"
          >
            <span className="bg-sky-500 text-white rounded-full w-full h-full flex items-center justify-center py-2 sm:py-3 hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out">
              {t('hero.explore')}
            </span>
          </button>
        </div>

        {/* Search and Upcoming Trips Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:text-left space-y-8">
          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder={t('hero.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white bg-opacity-90 rounded-full py-2 sm:py-3 px-6 pl-12 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-lg"
              aria-label="Search for a trip"
            />
            <FaSearch
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-500"
              aria-hidden="true"
            />
          </form>

          {/* Upcoming Trips Carousel */}
          <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-lg relative overflow-hidden">
            <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2">
              {t('hero.upcomingTrip')}
            </h2>
            <div className="relative h-48 sm:h-56">
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
                    src={trip.image} // Ensure the correct image path is used
                    alt={t(`trips.${trip.title}`)}
                    className="rounded object-cover w-full h-full"
                  />
                  <p className="absolute bottom-2 left-2 bg-sky-500 text-white px-2 py-1 rounded text-sm sm:text-base">
                    {t(`trips.${trip.title}`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
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
                <IoChevronBack size={20} />
              </button>
              <button
                onClick={() =>
                  setCurrentTripIndex((prevIndex) => (prevIndex + 1) % upcomingTrips.length)
                }
                className="p-1 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                aria-label="Next trip"
              >
                <IoChevronForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

