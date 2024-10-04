import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const destinations = [
  {
    name: "Rwanda",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e0def0d245c3758845b9cadb56c42048085e1b7af25c8650443380fdb410c597?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
  },
  {
    name: "Israel",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e91fb6938e91954e01a891404708e57fc960e9a4752fec8dd42ab6604706aa10?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
  },
  {
    name: "Turkey",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f18a1319481b3b279c1a841f21efd8a49bfccf3bec3f5a9357cab3583b3a5c8f?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
  },
  {
    name: "Egypt",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/147db547b87942ba56f82a6495b61ae521a091629a0bba5cda77a59864f39c2b?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
  },
];

function TopDestinations() {
  return (
    <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start w-full max-md:mt-10">
        <h3 className="text-xl font-extrabold text-white">Top destinations</h3>
        <div className="flex gap-4 self-stretch mt-8 text-xs font-bold text-white whitespace-nowrap">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="flex relative flex-col self-start px-2.5 pt-10 pb-2.5 aspect-[0.984]"
            >
              <img
                loading="lazy"
                src={destination.image}
                alt={destination.name}
                className="object-cover absolute inset-0 size-full"
              />
              {destination.name}
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          {/* Social media icons with background circles */}
          <div className="bg-white p-2 rounded-full hover:bg-blue-500 transition duration-300 ease-in-out">
            <FaFacebookF className="text-blue-500 w-[20px] h-[20px] hover:text-white" />
          </div>
          <div className="bg-white p-2 rounded-full hover:bg-sky-400 transition duration-300 ease-in-out">
            <FaTwitter className="text-sky-400 w-[20px] h-[20px] hover:text-white" />
          </div>
          <div className="bg-white p-2 rounded-full hover:bg-pink-500 transition duration-300 ease-in-out">
            <FaInstagram className="text-pink-500 w-[20px] h-[20px] hover:text-white" />
          </div>
          <div className="bg-white p-2 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
            <FaLinkedinIn className="text-blue-700 w-[20px] h-[20px] hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDestinations;

