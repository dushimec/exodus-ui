import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; 

function Service() {
  
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease-out' });
  }, []);
 
  return (
    <div className="flex overflow-hidden flex-col bg-stone-50 bg-opacity-50">

             <div className="flex relative flex-col items-center self-stretch px-5 sm:px-10 lg:px-20 pt-24 sm:pt-32 lg:pt-10 pb-12 w-full text-white min-h-[400px]" data-aos="zoom-out">
             <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
          className="object-cover absolute inset-0 size-full blur-sm"
          alt="Services background"
        />

        <div className="absolute inset-0 bg-black opacity-60"></div>
         <div className="flex relative flex-col justify-start items-center px-2 w-full sm:px-2 sm:pt-10 md:px-20 md:pt-24">
          <div className="px-2 py-4  text-2xl  mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
          Service
          </div>
          <div className="mt-12  sm:mt-15 flex flex-row justify-center">
            Our Services We Provide
          </div>

        </div>
      </div>
      <div className="flex flex-col px-5 md:px-14 mt-10 md:mt-14 w-full"  data-aos="fade-up" >
        <div className="self-end w-full max-w-[1329px]">

          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full md:w-[58%]">
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col ml-2.5 max-w-full w-[372px]">
                  <div className="self-start text-xl md:text-3xl font-serif text-sky-500" data-aos="fade-up">
                    Our services
                  </div>
                  <div className="mt-3 md:mt-5 text-2xl md:text-4xl text-black" data-aos="fade-up">
                    Join the adventures <br />
                    with stories
                  </div>
                </div>
                <div className="mt-4 text-lg md:text-xl  text-black text-opacity-90" data-aos="fade-up">
                "Explore diverse religious landmarks and spiritual experiences, showcasing rich cultural heritage and traditions. Visit sacred temples, historic churches, and peaceful monasteries, each holding stories of ancient rituals and deep devotion. Experience local festivals and spiritual practices that bring communities together, offering a unique glimpse into humanity's shared journey of faith and connection."
                </div>
                <div className="self-stretch mt-10 md:mt-14 ml-0 md:ml-5" data-aos="fade-up">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
    {[
      { icon: "806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773", text: "Custom destinations" },
      { icon: "99ce7b375c49fbef4bf34e3ed6e5fd07aa80463866f537c1e9af2c2e2d0d4173", text: "Unforgettable Moments" },
      { icon: "085b0970227487fcd6104d5a2708916f25519b9531d23bd251db3e62e3bd00c5", text: "Competitive pricing" },
      { icon: "b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d", text: "Self guide" },
      { icon: "f2aa930f1f31b20858d2b7f0b18ff9302936eea8e4ca37998f651f09aeaa44e4", text: "24/7 Available" },
      { icon: "8cea52604dca553b0e37ffde0278445c487060f6529bd198a5cb292a86b7397b", text: "Transportations" },
    ].map((item, index) => (
      <div key={index} className="flex flex-col items-center mb-8">
        <div className="group flex flex-col justify-center items-center px-5 bg-white rounded-full h-[80px] md:h-[106px] w-[80px] md:w-[106px] shadow-lg transition-all duration-300 hover:bg-sky-500 hover:shadow-2xl hover:scale-110 transform hover:rotate-3">
          <img
            loading="lazy"
            srcSet={`https://cdn.builder.io/api/v1/image/assets/TEMP/${item.icon}?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/${item.icon}?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/${item.icon}?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/${item.icon}?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/${item.icon}?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/${item.icon}?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/${item.icon}?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/${item.icon}?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497`}
            className="object-contain w-full aspect-square transition duration-300 group-hover:brightness-0 group-hover:invert"
            alt={item.text}
          />
        </div>
        <div className="mt-3 md:mt-5 text-sm md:text-base text-black text-center">
          {item.text}
        </div>
      </div>
    ))}
  </div>
</div>

              </div>
            </div>

            <div className="flex flex-col w-full md:w-[42%]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
                className="object-contain w-full aspect-[0.81] mt-10 md:mt-10" data-aos="fade-up"
                alt="Service illustration"
              />
            </div>
          </div>
        </div>
        <div className="flex relative mb-10 ml-0 md:ml-20 flex-col mt-10 md:mt-16 w-full max-w-[1329px] min-h-[300px] md:min-h-[417px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, 
            https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
            className="object-cover absolute inset-0 size-full" data-aos="fade-up"
            alt="Why choose us background"
          />
        
      <div className="relative flex flex-col items-center pt-40 pb-20 w-full bg-neutral-900 bg-opacity-50 sm:px-5 md:px-5 md:max-w-full"  data-aos="fade-up">
        <div className="flex flex-col w-full max-w-5xl">
          <h2 className="self-center text-2xl md:text-3xl font-bold text-white text-center">
            WHY CHOOSE US?
          </h2>
          <p className="self-center mt-6 mb-5 text-lg md:text-2xl text-white font-[inria-serif] text-center">
            A brand name you can trust and rely on
          </p>
          
          {/* Image section */}
          <div className="flex justify-between gap-5 sm:gap-2  w-full max-w-sm md:max-w-lg mx-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab42847af8ca220686e9916a9ce7128f82eeb5ab10498a9d21e3c5665b631aa9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Affordable price guarantee"
              className="w-12 h-12 md:w-20 md:h-20 object-contain ml-8"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d393d690b820b385444fa81c312cabcbc100e2cfc05ba174d5c218e992479f9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="Wide variety of destinations" 
              className="w-12 h-12 md:w-20 md:h-20 object-contain "
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a194d8ac904f74af5c6c5de4732ebd05abb490fe021c66be21aa39935ed4394?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt="High qualified service"
              className="w-12 h-12 md:w-20 md:h-20 object-contain mr-5"
            />
          </div>

          {/* Text section */}
          <div className="flex justify-between gap-2 sm:gap-5 mt-3 text-xs md:text-sm font-medium text-white text-center max-w-sm md:max-w-lg mx-auto">
            <div className="mx-1">Affordable price Guarantee</div>
            <div className="mx-1">Wide variety of destinations</div>
            <div className="mx-1">High qualified service</div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Service;