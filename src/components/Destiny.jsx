'use client'

import * as React from "react";
import { MapPin } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS
import { useTranslation } from 'react-i18next';  // Import useTranslation

export default function Destiny() {
  const { t } = useTranslation(); // Initialize translation
  const [hasVisited, setHasVisited] = React.useState(false);

  React.useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,  // Animation duration
      easing: 'ease-in-out',  // Animation easing
      once: true,  // Whether animation should happen only once
    });

    // Check if user has visited before
    const visited = localStorage.getItem('hasVisitedDestiny');
    if (visited) {
      setHasVisited(true);
    } else {
      localStorage.setItem('hasVisitedDestiny', 'true');
    }
  }, []);


  return (
    <div className="flex overflow-hidden flex-col items-center pb-4 bg-stone-50 bg-opacity-30">
      <div className="flex relative flex-col items-center self-stretch px-5 sm:px-10 lg:px-20 pt-24 sm:pt-32 lg:pt-40 pb-12 w-full text-white min-h-[400px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/088997ce7ceb1872cdd23f020fa61a21e9d406941f1c5e79d3e1cb275d67fd00"
          className="object-cover absolute inset-0 size-full"
          alt="Background image of various travel destinations"
        />
        <div className="flex relative flex-col max-w-full w-full sm:w-[416px] ">
          <div className="self-center text-2xl sm:text-3xl lg:text-4xl font-bold sm:px-8 lg:px-16 py-4 sm:py-3  mb-4 sm:-mb-9 max-w-full border-white border-solid bg-zinc-300 bg-opacity-0 border-[5px] sm:border-[5px] w-full sm:w-[496px] pl-20">{t("destiny.title")}</div>
          <div className="mt-20  sm:mt-15 flex flex-row justify-center">
          {t("destiny.explore")}
          </div>
        

        </div>
      </div>


      <div className="mt-20 sm:mt-28 lg:mt-40 w-full max-w-[1104px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-28">
          <DestinationCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/33fae0df8bf179790c2123d2aba2911ebe9447d3273945edf5a1e32b89677d6a"
            location={t("destiny.destinations.rwanda")}
            description={t("destiny.destinations.rwandaDescription")}
            showTutor={!hasVisited}
            aosAnimation="zoom-in"
          />
          <DestinationCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a6f3480c81274d3fc5b27e53fa8ba11235679978c2d207afcb03ef43152f0183"
            location={t("destiny.destinations.israel")}
            description={t("destiny.destinations.israelDescription")}
            aosAnimation="zoom-in"
          />
        </div>
      </div>

      <div className="mt-20 sm:mt-28 w-full max-w-[1097px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-28">
          <DestinationCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1313d8b1bfaed5a882ed7c53af9b1ab46acdb10791f71d2039f72bba19ff2180"
            location={t("destiny.destinations.turkey")}
            description={t("destiny.destinations.turkeyDescription")}
            aosAnimation="zoom-in"
          />
          <DestinationCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2ce0e3cedfb6319b662aa74d29e7ddb053f294b6be2ce29fc5d7fcbf9b45e233"
            location={t("destiny.destinations.egypt")}
            description={t("destiny.destinations.egyptDescription")}
            aosAnimation="zoom-in"
          />
        </div>
      </div>
    </div>

  );
}

function DestinationCard({ imageSrc, location, description, showTutor = false, aosAnimation }) {
  return (
    <div
      className="relative group w-full h-64 sm:h-80 lg:h-96 overflow-hidden bg-cover bg-center transition-all duration-300"
      style={{ backgroundImage: `url('${imageSrc}')` }}
      data-aos={aosAnimation}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-4 transition-all duration-500 bg-black bg-opacity-30 group-hover:bg-opacity-70">
        <div className="flex items-center self-start transition-opacity duration-300 group-hover:opacity-0">
          <MapPin className="text-white mr-2" />
          <span className="text-white text-lg sm:text-xl font-semibold">
            {location}
          </span>
        </div>
        <div className="flex flex-col items-start space-y-2 transition-all duration-300 group-hover:opacity-0">
          <p className="text-white text-sm sm:text-base">{description}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-black font-semibold px-6 py-2">
            Discover
          </button>
        </div>
      </div>
    </div>
  );
}

