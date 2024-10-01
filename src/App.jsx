
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import WhyChooseUs from './components/WhyChooseUs';
import PopularTourPackages from './components/PopularTourPackages';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col">
      <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
        <div className="flex relative flex-col w-full text-white min-h-[887px] max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dee3af1493f79e0aaa929a033c4ce039cc93865345d7fb1946cb09379b196696?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Background" className="object-cover absolute inset-0 size-full" />
          <Hero />
        </div>
        <main>
          <section className="flex flex-wrap gap-10 items-center mt-3 w-full text-5xl text-black max-md:max-w-full max-md:text-4xl">
            <div className="shrink-0 self-stretch my-auto max-w-full h-1 border-4 border-sky-500 border-solid w-[436px]" />
            <h2 className="grow shrink self-stretch w-[349px] max-md:max-w-full max-md:text-4xl">Find a tour by destination</h2>
            <div className="shrink-0 self-stretch my-auto max-w-full h-1 border-4 border-sky-500 border-solid w-[436px]" />
          </section>
          <div className="flex flex-wrap gap-5 justify-between self-center mt-20 w-full max-w-[1174px] max-md:mt-10 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0202a9382b195489e964f71ea596c66b39a218e18bbb23c0298aaef14f8fa97d?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Destination 1" className="object-contain shrink-0 max-w-full aspect-[0.99] rounded-[600px] w-[284px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/78c2289638a6c00227af70d39357a77a3d1a0e6a882b044880038c091dde1a27?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Destination 2" className="object-contain shrink-0 max-w-full aspect-[0.99] rounded-[600px] w-[284px]" />
          </div>
          <div className="mt-16 w-full border-4 border-sky-500 border-solid min-h-[4px] max-md:mt-10 max-md:max-w-full" />
          <Destinations />
          <WhyChooseUs />
          <PopularTourPackages />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
