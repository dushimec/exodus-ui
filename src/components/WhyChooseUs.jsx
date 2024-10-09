// import React from 'react';

// function WhyChooseUs() {
//   return (
//     <section className="flex relative flex-col justify-center py-px mt-20 w-full min-h-[445px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
//       <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/579e0fca0fbcad8ef447b930ed61becd98b780beb6780f379f68fdabd66e44ad?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-cover absolute inset-0 size-full" />
//       <div className="flex relative flex-col items-center px-20 pt-4 pb-24 w-full bg-neutral-900 bg-opacity-50 max-md:px-5 max-md:max-w-full">
//         <div className="flex flex-col max-w-full w-[950px]">
//           <h2 className="self-center text-3xl font-bold text-white">WHY CHOOSE US?</h2>
//           <p className="self-center mt-8 text-2xl text-white max-md:max-w-full font-[inria-serif]">A brand name you can trust and rely on</p>
//           <div className="flex flex-wrap gap-5 justify-between mt-7 max-md:max-w-full">
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab42847af8ca220686e9916a9ce7128f82eeb5ab10498a9d21e3c5665b631aa9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Affordable price guarantee" className="object-contain shrink-0 self-stretch my-auto w-36 aspect-square ml-14" />
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d393d690b820b385444fa81c312cabcbc100e2cfc05ba174d5c218e992479f9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="Wide variety of destinations" className="object-contain shrink-0 self-stretch my-auto w-36 aspect-square" />
//             <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a194d8ac904f74af5c6c5de4732ebd05abb490fe021c66be21aa39935ed4394?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="High qualified service" className="object-contain shrink-0 self-stretch my-auto w-36 aspect-square mr-7" />
//           </div>
//           <div className="flex flex-wrap gap-5 justify-between mt-10 mr-4 ml-3.5 text-base font-medium text-white max-md:mr-2.5 max-md:max-w-full">
//             <div>Affordable price Guarantee</div>
//             <div>Wide variety of destinations</div>
//             <div>High qualified service</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;



import React from 'react';
import { useTranslation } from 'react-i18next';

function WhyChooseUs() {
  const { t } = useTranslation();

  return (
    <section className="flex relative flex-col justify-center py-px mt-20 w-full min-h-[445px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/579e0fca0fbcad8ef447b930ed61becd98b780beb6780f379f68fdabd66e44ad?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative flex-col items-center px-20 pt-4 pb-24 w-full bg-neutral-900 bg-opacity-50 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[950px]">
          <h2 className="self-center text-3xl font-bold text-white">{t('whyChooseUs.title')}</h2>
          <p className="self-center mt-8 text-2xl text-white max-md:max-w-full font-[inria-serif]">{t('whyChooseUs.description')}</p>
          <div className="flex flex-wrap gap-5 justify-between mt-7 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab42847af8ca220686e9916a9ce7128f82eeb5ab10498a9d21e3c5665b631aa9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt={t('whyChooseUs.guarantee')} className="object-contain shrink-0 self-stretch my-auto w-36 aspect-square ml-14" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d393d690b820b385444fa81c312cabcbc100e2cfc05ba174d5c218e992479f9?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt={t('whyChooseUs.destinations')} className="object-contain shrink-0 self-stretch my-auto w-36 aspect-square" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a194d8ac904f74af5c6c5de4732ebd05abb490fe021c66be21aa39935ed4394?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28" alt={t('whyChooseUs.service')} className="object-contain shrink-0 self-stretch my-auto w-36 aspect-square mr-7" />
          </div>
          <div className="flex flex-wrap gap-5 justify-between mt-10 mr-4 ml-3.5 text-base font-medium text-white max-md:mr-2.5 max-md:max-w-full">
            <div>{t('whyChooseUs.guarantee')}</div>
            <div>{t('whyChooseUs.destinations')}</div>
            <div>{t('whyChooseUs.service')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
