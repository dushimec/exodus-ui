import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


 
function About( ) {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-out' });
  }, []);

  return (
    <div className="flex overflow-hidden flex-col items-center bg-stone-50 bg-opacity-50">
      <div className="flex relative flex-col self-stretch w-full text-4xl text-white min-h-[300px] sm:min-h-[400px] md:min-h-[400px]" data-aos="zoom-out">

        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w"
           className="object-cover absolute inset-0 size-full blur-sm"
          alt="Background"
        />

        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex relative flex-col justify-start items-center px-4 pt-16 w-full sm:px-8 sm:pt-20 md:px-20 md:pt-24">
        <div className="px-2 py-4  text-2xl  mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
        About us
          </div>
          <div className="mt-12 sm:mt-15 text-xl flex flex-row justify-center">
            What we do
            </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 md:mt-20 px-4 sm:px-6 md:px-8 w-full max-w-[1232px]"  data-aos="fade-up">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col w-full"  data-aos="fade-up">
              <div className="self-start text-lg sm:text-xl md:text-2xl font-semibold" >
                <span className="text-2xl font-bold text-sky-500">"</span>{" "}
                <span>
                  OLD Fox Company offers expertly planned religious trips, guiding individuals and groups to some of the most sacred destinations worldwide. Our pilgrimages are designed to inspire spiritual growth, combining prayer, reflection, and cultural exploration. Whether visiting ancient temples or holy cities, each trip provides a meaningful opportunity for travelers to connect deeply with their faith and traditions. We ensure every journey is thoughtfully organized for a seamless and enriching experience.

                </span>{" "}
                <span className="text-2xl font-bold text-sky-500">"</span>
              </div>
              <div className="mt-8 sm:mt-12 md:mt-28">
                <div className="flex flex-col items-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w"
                    className="object-contain z-0 w-full aspect-[1.74] shadow-[0px_100px_80px_rgba(0,0,0,0.07)]"
                    alt="Religious destination"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-6/12 mt-8 md:mt-0"  data-aos="fade-up">
            <div className="flex flex-col text-lg sm:text-xl md:text-2xl font-semibold text-black">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w"
                className="object-contain max-w-full aspect-[1.58] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-full"
                alt="Religious landmark"  data-aos="fade-up"
              />
              <div className="self-end pt-20 sm:mt-12  md:mt-16"  data-aos="fade-up">
                <span className="text-2xl font-bold text-sky-500">"</span>
                <span > 
                  Our itineraries create transformative experiences, blending spiritual enrichment with cultural immersion. Travelers explore significant religious landmarks, engage with local traditions, and connect with fellow believers. These journeys inspire renewal and reflection, offering a deeper understanding of faith and lasting memories in some of the world's most revered spiritual places.
                </span>
                <span className="font-bold">.</span>{" "}
                <span className="text-2xl font-bold text-sky-500">"</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
     
      <div className="flex flex-col items-center mt-12 sm:mt-16 md:mt-20"  data-aos="fade-up">
        <div className="h-1 w-16 border-4 border-sky-500 border-solid mb-4" />
        <div className="text-2xl font-[inria-serif] text-sky-500">
          Our Team
        </div>
        <div className="h-1 w-16 border-4 border-sky-500 border-solid mt-4 mb-8" />
      </div>



      <div className="flex flex-col items-center mb-12"  data-aos="fade-up">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w"
          className="object-contain max-w-full aspect-[0.78] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-48 sm:w-64 md:w-[285px]"
          alt="CEO of Oldfox"
        />
        <div className="mt-4 text-xl sm:text-2xl font-[inria-serif] text-sky-500">
          CEO of Oldfox
    
    </div>
    </div>
    </div>

  )};



export default About;