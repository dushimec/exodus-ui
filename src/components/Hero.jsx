

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

// Import images manually
import KigaliImage from '../IMAGE/kgl.jpg';
import Havan from '../IMAGE/havana.jpg';
import Turkey from '../IMAGE/tukey.jpg';

const upcomingTrips = [
  { id: 1, title: 'travelHero.upcomingTrips.trip1', image: KigaliImage },
  { id: 2, title: 'travelHero.upcomingTrips.trip2', image: Havan },
  { id: 3, title: 'travelHero.upcomingTrips.trip3', image: Turkey },
];

export default function TravelHero() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTripIndex, setCurrentTripIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTripIndex((prevIndex) => (prevIndex + 1) % upcomingTrips.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    // Implement actual search functionality here
  };

  const handleExplore = () => {
    alert('Exploring adventures!');
    // Implement navigation or modal opening here
  };

  return (
    <div className="relative pt-32 min-h-screen bg-gradient-to-br from-sky-600 to-white overflow-hidden flex flex-col justify-center items-center px-4">
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-10 leading-tight text-center lg:text-left">
            {t('travelHero.heading')}
          </h1>

          <button
            onClick={handleExplore}
            className="relative p-2 mt-6 lg:mt-10 mx-auto lg:mx-0 text-base font-semibold border-2 border-sky-500 rounded-full w-[200px] hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out"
          >
            <span className="bg-sky-500 text-white rounded-full w-full h-full flex items-center justify-center py-3 hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out">
              {t('travelHero.exploreButton')}
            </span>
          </button>
        </div>

        <div className="lg:w-1/2 space-y-8 mt-8 lg:mt-0">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder={t('travelHero.searchPlaceholder')}
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
              {t('travelHero.upcomingTrip')}
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
                    alt={t(trip.title)}
                    className="rounded object-cover w-full h-full"
                  />
                  <p className="absolute bottom-2 left-2 bg-sky-500 text-white px-2 py-1 rounded text-sm sm:text-base">
                    {t(trip.title)}
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
    </div>
  );
}
