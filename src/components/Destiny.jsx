import React, { useEffect, useState } from "react";
import { MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByDestination } from '../slices/postSlice';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export default function Destiny() {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  const { t } = useTranslation();

  const destinations = [
    { name: 'Rwanda', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/33fae0df8bf179790c2123d2aba2911ebe9447d3273945edf5a1e32b89677d6a', link: '/RwandaDetails' },
    { name: 'Israel', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a6f3480c81274d3fc5b27e53fa8ba11235679978c2d207afcb03ef43152f0183', link: '/JerusalemDetails' },
    { name: 'Turkey', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180', link: '/TurkeyDetails' },
    { name: 'Egypt', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233', link: '/EgyptDetails' },
  ];

  useEffect(() => {
    destinations.forEach(destination => {
      dispatch(fetchPostsByDestination(destination.name));
    });
  }, [dispatch]);

  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
    const visited = localStorage.getItem('hasVisitedDestiny');
    if (visited) setHasVisited(true);
    else localStorage.setItem('hasVisitedDestiny', 'true');
  }, []);

  return (
    <div className="flex flex-col items-center pb-4 bg-stone-50 bg-opacity-30">
      {/* Header Section */}
      <div className="relative flex flex-col items-center w-full text-white bg-cover bg-center min-h-[400px] pb-12 pt-24" data-aos="zoom-out">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00"
          className="absolute inset-0 object-cover w-full h-full blur-sm"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex flex-col items-center px-4 py-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl border-4 border-white bg-opacity-0 w-[80%] max-w-[496px]">
            {t("destiny.title")}
          </h1>
          <p className="mt-8 sm:mt-12 text-lg">{t("destiny.explore")}</p>
        </div>
      </div>

      {/* Destination Cards */}
      <div className="mt-20 sm:mt-28 lg:mt-40 w-full max-w-[1104px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
        {destinations.map(destination => (
          <DestinationCard
            key={destination.name}
            imageSrc={destination.imageSrc}
            location={t(`destiny.destinations.${destination.name.toLowerCase()}`)}
            description={t(`destiny.destinations.${destination.name.toLowerCase()}Description`)}
            aosAnimation="zoom-in"
            detailLink={destination.link}
          />
        ))}
      </div>
    </div>
  );
}

function DestinationCard({ imageSrc, location, description, aosAnimation, detailLink }) {
  return (
    <div
      className="relative group w-full h-64 sm:h-80 lg:h-96 overflow-hidden bg-cover bg-center transition-all duration-300"
      style={{ backgroundImage: `url('${imageSrc}')` }}
      data-aos={aosAnimation}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-500 bg-black bg-opacity-30 group-hover:bg-opacity-70">
        <div className="flex items-center text-lg font-semibold text-white transition-opacity duration-300 group-hover:opacity-0">
          <MapPin className="mr-2" />
          {location}
        </div>
        <div className="text-sm text-white transition-opacity duration-300 group-hover:opacity-0">
          {description}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link to={detailLink}>
            <button className="px-6 py-2 font-semibold text-black bg-white">
              Discover
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
