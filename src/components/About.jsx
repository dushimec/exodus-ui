import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {

   AOS.init({
  duration: 1000, 
  easing: "ease-in-sine", // Sine wave-like start
});

  }, []);

  return (
    <div className="flex flex-col items-center overflow-hidden bg-stone-50 bg-opacity-50 pb-24">
      {/* Hero Section */}
      <div className="relative w-full text-4xl font-semibold text-white h-[490px] md:h-[600px] lg:h-[750px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/daa3fd74395d0306601657a9c8c5a5e15532b170c14c185a02e3905b98b13927"
          className="absolute inset-0 object-cover w-full h-full"
          alt="Hero"
        />
        <div className="relative flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-60 px-4 py-24 md:px-20 md:py-52">
          <div className="border-[10px] border-solid border-white bg-opacity-0 bg-zinc-300 px-5 py-5 text-center md:px-36 md:py-9">
            <h1>About Us</h1>
          </div>
        </div>
      </div>

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
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/edebd2491ac257f0bdbfa7397524775755b9a289ebba783ff89819da11b193d7"
              className="object-contain w-full"
              alt="Travel Experience"
            />
          </div>
        </div>
      </div>

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
        </div>
      </div>
    </div>
  );
}

export default About;
