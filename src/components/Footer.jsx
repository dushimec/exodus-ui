import React from 'react';

function Footer() {
  return (
    <footer className="flex flex-col pt-10 mt-16 w-full bg-sky-600 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start ml-20 w-full max-w-[1133px] max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-xl font-bold text-white max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b78bfdb1cefa709a075d0cab65881f62d080d390c16de0d3e55fe2cee8ba082?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Exodus logo" className="object-contain max-w-full aspect-[2.15] rounded-[300px] w-[159px]" />
                <p className="mt-11 max-md:mt-10 max-md:max-w-full">
                  Discover the world with Exodus: Your trusted travel adventure partner!
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-5 w-full max-md:mt-10">
                <h3 className="text-xl font-extrabold text-white">Top destinations</h3>
                <div className="flex gap-4 self-stretch mt-5 text-xs font-bold text-white whitespace-nowrap">
                  <div className="flex relative flex-col self-start px-2.5 pt-10 pb-2.5 aspect-[0.984]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0def0d245c3758845b9cadb56c42048085e1b7af25c8650443380fdb410c597?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Rwanda" className="object-cover absolute inset-0 size-full" />
                    Rwanda
                  </div>
                  <div className="flex relative flex-col self-start px-4 pt-10 pb-2.5 aspect-[0.984]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e91fb6938e91954e01a891404708e57fc960e9a4752fec8dd42ab6604706aa10?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Israel" className="object-cover absolute inset-0 size-full" />
                    Israel
                  </div>
                  <div className="flex relative flex-col px-3 pt-10 pb-2.5 aspect-[0.967] rounded-[368px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f18a1319481b3b279c1a841f21efd8a49bfccf3bec3f5a9357cab3583b3a5c8f?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Turkey" className="object-cover absolute inset-0 size-full" />
                    Turkey
                  </div>
                  <div className="flex relative flex-col px-3.5 pt-10 pb-3 aspect-[0.902] rounded-[600px]">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/147db547b87942ba56f82a6495b61ae521a091629a0bba5cda77a59864f39c2b?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Egypt" className="object-cover absolute inset-0 size-full" />
                    Egypt
                  </div>
                </div>
                <div className="flex gap-7 mt-6">
                  <a href="#" aria-label="Facebook"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0fe93774eb64916cdfe454961655948aa7511d416b4f54c3666e823761771a5?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 aspect-square w-[26px]" /></a>
                  <a href="#" aria-label="Twitter"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/94282ce35752e963379c42506a05f3a26f6f491345d4ef4263ca4f3788f253c3?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 aspect-square w-[26px]" /></a>
                  <a href="#" aria-label="Instagram"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/457223ac360cc8b139e41e774881ca9faa6b1c88b9a8ffa9253eb0f8d241158f?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 aspect-square w-[26px]" /></a>
                  <a href="#" aria-label="LinkedIn"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7cf8847bf0edc04132b222228d83ba67e427d2b11dde8947086f1cea1982428?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 aspect-square w-[26px]" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 text-white">
          <h3 className="text-xl font-extrabold">Contact info</h3>
          <address className="flex flex-col items-start px-3.5 mt-11 text-base font-bold whitespace-nowrap max-md:pr-5 max-md:mt-10 not-italic">
            <p>Address:</p>
            <p className="mt-5">Phone:</p>
            <p className="mt-5">Email:</p>
          </address>
        </div>
      </div>
      <div className="py-6 pr-16 pl-24 mt-10 w-full text-xl font-bold text-white bg-sky-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        ©2024 Exodus. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;