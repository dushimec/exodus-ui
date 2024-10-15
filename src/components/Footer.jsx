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

function Footer() {
  return (
    <footer className="flex flex-col pt-8 w-full bg-sky-600 text-white">
      {/* Upper section of the footer */}
      <div className="flex flex-wrap gap-10 lg:gap-20 items-start px-6 w-full max-w-[1133px] mx-auto max-md:px-5">
        {/* Logo and company description */}
        <div className="flex-auto max-md:w-full">
          <div className="flex flex-col gap-6 max-md:gap-4">
            <div className="flex flex-col w-[50%] max-lg:w-[70%] max-md:w-full">
              <div className="flex flex-row text-sm font-semibold">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b78bfdb1cefa709a075d0cab65881f62d080d390c16de0d3e55fe2cee8ba082?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                  alt="Company logo"
                  className="object-contain rounded-full w-[100px] max-md:w-[80px]"
                />
                <p className="mt-4  pl-5 text-sm leading-5 max-md:mt-2">
                  Discover the world with Exodus: Your trusted travel
                  <br className="hidden max-md:block" />
                  adventure partner!
                </p>
              </div>
            </div>

            {/* Top Destinations */}
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start w-full max-md:mt-10">
                <h3 className="text-xl font-extrabold text-white">
                  Top destinations
                </h3>
                <div className="flex gap-4 self-stretch mt-8 text-xs font-bold text-white whitespace-nowrap">
                  {destinations.map((destination, index) => (
                    <div
                      key={index}
                      className="relative group flex-col self-start px-2.5 pt-10 pb-2.5 aspect-[0.984]"
                    >
                      {/* Image */}
                      <img
                        loading="lazy"
                        src={destination.image}
                        alt={destination.name}
                        className="object-cover absolute inset-0 w-full h-full rounded-md transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                      />

                      {/* Overlay with destination name, visible on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-50  rounded-full flex  justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-xs font-extralight">
                          {destination.name}
                        </span>
                      </div>
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
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col text-white">
          <h3 className="text-xl font-extrabold">Contact info</h3>
          <div className="flex flex-col items-start px-3.5 mt-11 text-sm  font-bold whitespace-nowrap max-md:pr-5 max-md:mt-10">
            <p>Address:</p>
            <p className="mt-5">Phone:</p>
            <p className="mt-5">Email:</p>
          </div>
        </div>
      </div>

      {/* Lower section: copyright */}
      <div className="py-3 px-6 mt-8 w-full text-xs font-semibold bg-sky-600 max-md:px-5 max-md:mt-6 text-center border-t-2 border-white">
        ©2024 Exodus. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
