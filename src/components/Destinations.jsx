import React from 'react';
import DestinationCard from './DestinationCard';

const destinations = [
  { name: 'Istanbul', country: 'Turkey', price: '120$', likes: 35, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28' },
  { name: 'Kibeho', country: 'Rwanda', price: '120$', likes: 35, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28' },
  { name: 'Cairo', country: 'Egypt', price: '120$', likes: 35, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28' },
  { name: 'Jerusalem', country: 'Telaviv', price: '120$', likes: 35, image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28' },
];

function Destinations() {
  return (
    <section className="self-center mt-20 ml-2.5 w-full max-w-[996px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </section>
  );
}

export default Destinations;