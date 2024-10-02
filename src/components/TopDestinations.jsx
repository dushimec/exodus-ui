import React from 'react';

const destinations = [
  { name: 'Rwanda', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e0def0d245c3758845b9cadb56c42048085e1b7af25c8650443380fdb410c597?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28' },
  { name: 'Israel', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e91fb6938e91954e01a891404708e57fc960e9a4752fec8dd42ab6604706aa10?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28' },
  { name: 'Turkey', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f18a1319481b3b279c1a841f21efd8a49bfccf3bec3f5a9357cab3583b3a5c8f?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28' },
  { name: 'Egypt', image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/147db547b87942ba56f82a6495b61ae521a091629a0bba5cda77a59864f39c2b?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28' },
];

function TopDestinations() {
  return (
    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full max-md:mt-10">
        <h3 className="text-xl font-extrabold   text-white">Top destinations</h3>
        <div className="flex gap-4 self-stretch mt-8 text-xs font-bold text-white whitespace-nowrap">
          {destinations.map((destination, index) => (
            <div key={index} className="flex relative flex-col self-start px-2.5 pt-10 pb-2.5 aspect-[0.984]">
              <img loading="lazy" src={destination.image} alt={destination.name} className="object-cover absolute inset-0 size-full" />
              {destination.name}
            </div>
          ))}
        </div>
        <div className="flex gap-7 mt-6">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0fe93774eb64916cdfe454961655948aa7511d416b4f54c3666e823761771a5?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Social media icon" className="object-contain shrink-0 aspect-square w-[26px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/94282ce35752e963379c42506a05f3a26f6f491345d4ef4263ca4f3788f253c3?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Social media icon" className="object-contain shrink-0 aspect-square w-[26px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/457223ac360cc8b139e41e774881ca9faa6b1c88b9a8ffa9253eb0f8d241158f?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Social media icon" className="object-contain shrink-0 aspect-square w-[26px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7cf8847bf0edc04132b222228d83ba67e427d2b11dde8947086f1cea1982428?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Social media icon" className="object-contain shrink-0 aspect-square w-[26px]" />
        </div>
      </div>
    </div>
  );
}

export default TopDestinations;