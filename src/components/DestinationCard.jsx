import React from 'react';

function DestinationCard({ name, country, price, likes, image }) {
  return (
    <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-center pb-12 mx-auto w-full bg-white shadow-[0px_100px_80px_rgba(0,0,0,0.07)] max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" src={image} alt={`${name} destination`} className="object-contain z-10 self-stretch -mt-1 w-full aspect-[2] max-md:max-w-full" />
        <div className="flex gap-5 justify-between mt-2.5 max-w-full text-black w-[373px]">
          <div className="flex flex-col whitespace-nowrap">
            <h3 className="text-3xl font-semibold">{name}</h3>
            <div className="flex gap-2 self-start mt-1.5 text-base font-light">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cd39f709674d709b470b588e3333028ae88765ab43262b4bf526a9154f58a1b?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 aspect-square w-[23px]" />
              <span>{country}</span>
            </div>
          </div>
          <div className="flex gap-2.5 self-end mt-10 text-base font-light whitespace-nowrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/771727356ab45f41906c4a2849871aaffc4193f8204a68794edffb187c9be699?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 aspect-square w-[23px]" />
            <span>Price</span>
          </div>
          <div className="flex flex-col my-auto text-sm">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b94a32448255b4fd9f9fe317fee10c28b525d0841824c0f96e5699d0f5324201?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain self-center w-7 aspect-square" />
            <div className="mt-2.5">{likes} Likes</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between max-w-full w-[380px]">
          <div className="flex gap-1.5 self-end mt-6 text-base font-light text-black whitespace-nowrap">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe771d6f37a85ce8bb4ed884887abe4ef2051dd26df7b85689ad386a86868b4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-contain shrink-0 aspect-square w-[23px]" />
            <span>Hotel</span>
          </div>
          <div className="flex gap-10 items-start text-sky-500">
            <div className="flex flex-col text-2xl font-bold whitespace-nowrap">
              <div className="shrink-0 h-0.5 border-2 border-sky-500 border-solid" />
              <div className="mt-4 max-md:mr-2 max-md:ml-2">{price}</div>
            </div>
            <button className="flex flex-col mt-2 text-xs px-5 py-4 bg-white border border-sky-500 border-solid rounded-[70px] max-md:pr-5">
              View Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;