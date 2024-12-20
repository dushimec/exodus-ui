import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingPosts } from '../slices/postSlice';
import { FaSearch } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import video from "../IMAGE/video.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

import Tour from '../components/Tour';

const allDestinations = [
  { id: 'rwanda', name: 'Rwanda' },
  { id: 'israel', name: 'Israel' },
  { id: 'egypt', name: 'Egypt' },
  { id: 'turkey', name: 'Turkey' }
];

export default function TravelHero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
const posts = useSelector((state) => state.posts);
const upcomingTrips = posts.upcomingPosts;
const { loading } = posts;
// console.log('Posts State:', posts);
// console.log('Upcoming Trips:', upcomingTrips);
// console.log('Loading state:', loading); 

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentTripIndex, setCurrentTripIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);
  const tourRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-out' });
    AOS.refresh();
  }, []);

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
    dispatch(fetchUpcomingPosts());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTripIndex((prevIndex) =>
        upcomingTrips && upcomingTrips.length > 0
          ? (prevIndex + 1) % upcomingTrips.length
          : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [upcomingTrips]);

  useEffect(() => {
    const results = allDestinations.filter((destination) =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(`/destination/${searchResults[0].id}`);
    }
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    tourRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative pt-24 sm:pt-32 min-h-screen h-[80vh] flex flex-col justify-center items-center px-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div class="bg-black absolute inset-0 opacity-30"></div>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      
        <div className="relative container mx-auto px-4 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-between" data-aos="fade-up">
          <div className="lg:w-1/2 lg:mt-0 lg:mb-0 text-center lg:text-left" data-aos="fade-up">
            <h1
              ref={titleRef}
              className={`text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 lg:mb-10 leading-tight transition-opacity duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {t('hero.title')}
            </h1>

            <button
              onClick={handleExploreClick}
              className="relative p-2 mt-4 sm:mt-6 lg:mt-10 mx-auto lg:mx-0 text-base font-semibold border-2 border-sky-500 rounded-full w-[180px] sm:w-[200px] hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out"
              data-aos="fade-up"
            >
              <span className="bg-sky-500 text-white rounded-full w-full h-full flex items-center justify-center py-2 sm:py-3 hover:bg-white hover:text-sky-500 transition duration-300 ease-in-out">
                {t('hero.explore')}
              </span>
            </button>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:text-left space-y-8" data-aos="fade-up">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for a destination"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white bg-opacity-90 rounded-full py-2 sm:py-3 px-6 pl-12 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-sky-300 shadow-lg"
                aria-label="Search for a trip"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sky-500" aria-hidden="true" />
            </form>

            <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-lg relative overflow-hidden" data-aos="fade-up">
              <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2" data-aos="fade-up">
                {t('hero.upcomingTrip')}
              </h2>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <div className="relative h-48 sm:h-56">
                  {upcomingTrips && upcomingTrips.length > 0 && upcomingTrips.map((trip, index) => (
                    <div
                      key={trip._id}
                      className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                        index === currentTripIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                      }`}
                    >
<img src={Array.isArray(trip.postImage) && trip.postImage.length > 0 ? trip.postImage[0].url : ''} alt={trip.title} className="rounded object-cover w-full h-full" />
                      <p className="absolute bottom-2 left-2 bg-sky-500 text-white px-2 py-1 rounded text-sm sm:text-base">
                        {trip.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="absolute bottom-5 right-6 flex space-x-2">
                <button
                  onClick={() => setCurrentTripIndex((prevIndex) => (prevIndex - 1 + upcomingTrips.length) % upcomingTrips.length)}
                  className="p-1 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                  aria-label="Previous trip"
                >
                  <IoChevronBack size={20} />
                </button>
                <button
                  onClick={() => setCurrentTripIndex((prevIndex) => (prevIndex + 1) % upcomingTrips.length)}
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

      <div ref={tourRef}>
        <Tour />
      </div>
    </>
  );
}
