<<<<<<< HEAD
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
=======
import React from "react";
>>>>>>> 93beb675c4617f65953bc979c1f16652b58c8acc

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div className="flex overflow-hidden flex-col items-center bg-stone-50 bg-opacity-50">
           <div className="flex relative flex-col items-center self-stretch px-5 sm:px-10 lg:px-20 pt-24 sm:pt-32 lg:pt-10 pb-12 w-full text-white min-h-[400px]" data-aos="zoom-out">
           <img
          loading="lazy"
<<<<<<< HEAD
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927"
          className="absolute inset-0 object-cover w-full h-full"
          alt="Hero"
        />
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-60 px-4 py-24 md:px-20 md:py-52">
          <div className="border-[10px] border-solid border-white bg-opacity-0 bg-zinc-300 px-5 py-5 text-center md:px-36 md:py-9">
            <h1>About Us</h1>
=======
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w"
          className="object-cover absolute inset-0 w-full h-full"
          alt="Background"
        />

        <div className="absolute inset-0 bg-black opacity-60"></div>
         <div className="flex relative flex-col justify-start items-center px-2 w-full sm:px-2 sm:pt-10 md:px-20 md:pt-24">
          <div className="px-2 py-4  text-2xl  mt-10 sm:px-8 sm:py-6 md:px-12 md:py-9 mb-0 text-center bg-transparent border-white border-solid bg-opacity-0 border-4 sm:border-8 md:border-[10px] w-[80%] max-w-[496px]">
          About Us
          </div>
          <div className="mt-12  sm:mt-15 flex flex-row justify-center">
            Learn More About Us
>>>>>>> 93beb675c4617f65953bc979c1f16652b58c8acc
          </div>

        </div>
      </div>
<<<<<<< HEAD

      {/* Content Section */}
      <div className="w-full max-w-[1232px] mt-10 px-4 md:mt-20">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <div className="text-2xl font-semibold text-left md:text-3xl">
              <span className="text-4xl font-bold text-sky-500">“</span> OLD Fox
              Company offers faith-based global travel experiences, connecting
              people through meaningful religious journeys{" "}
              <span className="text-4xl font-bold text-sky-500">”</span>
            </div>

            {/* Images in the Left Section */}
            <div className="flex flex-col gap-5 mt-7 md:flex-row">
              <div className="w-full md:w-[70%]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eaa0b4cc783d97d709ba024250dfc911bf2da9a4d4c0dcc052f4a967570edcc"
                  className="object-contain w-full shadow-lg"
                  alt="Travel Experience"
                />
=======
 
      <div className="mt-8 sm:mt-12 md:mt-20 px-4 sm:px-6 md:px-8 w-full max-w-[1232px]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-6/12">
            <div className="flex flex-col w-full">
              <div className="self-start text-lg sm:text-xl md:text-2xl font-semibold">
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
>>>>>>> 93beb675c4617f65953bc979c1f16652b58c8acc
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7"
              className="object-contain w-full"
              alt="Travel Experience"
            />
=======
          <div className="flex flex-col w-full md:w-6/12 mt-8 md:mt-0">
            <div className="flex flex-col text-lg sm:text-xl md:text-2xl font-semibold text-black">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w"
                className="object-contain max-w-full aspect-[1.58] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-full"
                alt="Religious landmark"
              />
              <div className="self-end pt-20 sm:mt-12  md:mt-16">
                <span className="text-2xl font-bold text-sky-500">"</span>
                <span > 
                  Our itineraries create transformative experiences, blending spiritual enrichment with cultural immersion. Travelers explore significant religious landmarks, engage with local traditions, and connect with fellow believers. These journeys inspire renewal and reflection, offering a deeper understanding of faith and lasting memories in some of the world's most revered spiritual places.
                </span>
                <span className="font-bold">.</span>{" "}
                <span className="text-2xl font-bold text-sky-500">"</span>
              </div>
            </div>
>>>>>>> 93beb675c4617f65953bc979c1f16652b58c8acc
          </div>
          
        </div>
      </div>
<<<<<<< HEAD

      {/* Another Section */}
      <div className="w-full max-w-[1232px] mt-10 px-4 md:mt-20">
        <div className="flex flex-col-reverse md:flex-row gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/831df3b1b3826f59bb9679db61c0f27d153146b9e4f30c8ddfa469264e2631f1"
              className="object-contain w-full"
              alt="Transformative Experience"
            />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <div className="text-2xl font-semibold text-left md:text-3xl">
              <span className="text-4xl font-bold text-sky-500">“</span> Faith and travel are blended into transformative
              experiences that foster a deeper connection with oneself{" "}
              <span className="text-4xl font-bold text-sky-500">”</span>
            </div>

            {/* Images in the Right Section */}
            <div className="flex flex-col gap-5 mt-7 md:flex-row">
              <div className="w-full md:w-[30%]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef52f9e3e01fb1a784a218e7851cc2df8df6471c97b96ccf9cb8d0381eb157a4"
                  className="object-contain w-full"
                  alt="Faith Experience"
                />
              </div>

              <div className="w-full md:w-[70%]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1f8eaf9ff9a01f3ff669401a1acac240621b39e083dff0bafac2d61af83b7a6"
                  className="object-contain w-full shadow-lg"
                  alt="Another Experience"
                />
              </div>
            </div>
          </div>
=======
     
      <div className="flex flex-col items-center mt-12 sm:mt-16 md:mt-20">
        <div className="h-1 w-16 border-4 border-sky-500 border-solid mb-4" />
        <div className="text-2xl font-[inria-serif] text-sky-500">
          Our Team
        </div>
        <div className="h-1 w-16 border-4 border-sky-500 border-solid mt-4 mb-8" />
      </div>

      <div className="flex flex-col items-center mb-12">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4870b734b0f9cf58ac339c1438f2ecdaef768164e4946c48bc073492c23539d7?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w"
          className="object-contain max-w-full aspect-[0.78] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-48 sm:w-64 md:w-[285px]"
          alt="CEO of Oldfox"
        />
        <div className="mt-4 text-xl sm:text-2xl font-[inria-serif] text-sky-500">
          CEO of Oldfox
>>>>>>> 93beb675c4617f65953bc979c1f16652b58c8acc
        </div>
      </div>
    </div>
  );
}

export default About;