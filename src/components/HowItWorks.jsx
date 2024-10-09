// import React from 'react';

// function HowItWorks() {
//   return (
//     <section className="flex flex-col lg:flex-row items-center w-full mt-20 mx-auto mb-14 px-4">
//       {/* Header section */}
//       <div className="text-center mb-4">
//         <h2 className="text-3xl font-bold text-black">How it works?</h2>
//         <p className="text-xl text-sky-500">Search, select, book</p>
//       </div>

//       {/* Steps Section */}
//       <div className="flex flex-col lg:flex-row justify-around w-full max-w-6xl">
//         {/* Search Section */}
//         <div className="flex flex-row items-center mb-6 lg:mb-0">
//           <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfadebe9d3ad07dd4d5a60b2e12ca344fcc09037b155c51cd713d436f8587d4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
//               alt="Search Icon"
//               className="w-10 h-10"
//             />
//           </div>
//           <div className='flex flex-col'>
//             <h3 className="text-2xl font-bold text-black">Search</h3>
//             <p className="text-lg text-sky-500 font-[inria-serif]">Find your Dream trip</p>
//           </div>
//         </div>

//         {/* Select Section */}
//         <div className="flex flex-row items-center mb-6 lg:mb-0">
//           <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd1bfbf2fd4467dffa930f71c2e0fb7032f399cc4d7276cb30fdc773b73d6ee?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
//               alt="Select Icon"
//               className="w-10 h-10"
//             />
//           </div>
//           <div className='flex flex-col'>
//             <h3 className="text-2xl font-bold text-black">Select</h3>
//             <p className="text-lg text-sky-500 font-[inria-serif]">Select trip packages</p>
//           </div>
//         </div>

//         {/* Book Section */}
//         <div className="flex flex-row items-center mb-6 lg:mb-0">
//           <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
//             <img
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b12edec47be92615e648f3a73746167cbd4b5f17ccad4551d6a0786c5b240a?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
//               alt="Book Icon"
//               className="w-10 h-10"
//             />
//           </div>
//           <div className='flex flex-col'>
//             <h3 className="text-2xl font-bold text-black">Book</h3>
//             <p className="text-lg text-sky-500 font-[inria-serif]">Booking and pay</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HowItWorks;



import React from 'react';
import { useTranslation } from 'react-i18next';

function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col lg:flex-row items-center w-full mt-20 mx-auto mb-14 px-4">
      {/* Header section */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-black">{t("howItWorks.title")}</h2>
        <p className="text-xl text-sky-500">{t("howItWorks.subtitle")}</p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col lg:flex-row justify-around w-full max-w-6xl">
        {/* Search Section */}
        <div className="flex flex-row items-center mb-6 lg:mb-0">
          <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbfadebe9d3ad07dd4d5a60b2e12ca344fcc09037b155c51cd713d436f8587d4?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt={t("howItWorks.search.alt")}
              className="w-10 h-10"
            />
          </div>
          <div className='flex flex-col'>
            <h3 className="text-2xl font-bold text-black">{t("howItWorks.search.title")}</h3>
            <p className="text-lg text-sky-500 font-[inria-serif]">{t("howItWorks.search.description")}</p>
          </div>
        </div>

        {/* Select Section */}
        <div className="flex flex-row items-center mb-6 lg:mb-0">
          <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd1bfbf2fd4467dffa930f71c2e0fb7032f399cc4d7276cb30fdc773b73d6ee?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt={t("howItWorks.select.alt")}
              className="w-10 h-10"
            />
          </div>
          <div className='flex flex-col'>
            <h3 className="text-2xl font-bold text-black">{t("howItWorks.select.title")}</h3>
            <p className="text-lg text-sky-500 font-[inria-serif]">{t("howItWorks.select.description")}</p>
          </div>
        </div>

        {/* Book Section */}
        <div className="flex flex-row items-center mb-6 lg:mb-0">
          <div className="flex justify-center items-center w-20 h-20 bg-gradient-to-b from-sky-200 to-sky-500 rounded-full mb-4 lg:mb-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b12edec47be92615e648f3a73746167cbd4b5f17ccad4551d6a0786c5b240a?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              alt={t("howItWorks.book.alt")}
              className="w-10 h-10"
            />
          </div>
          <div className='flex flex-col'>
            <h3 className="text-2xl font-bold text-black">{t("howItWorks.book.title")}</h3>
            <p className="text-lg text-sky-500 font-[inria-serif]">{t("howItWorks.book.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
