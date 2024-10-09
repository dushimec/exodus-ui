// import React from 'react';
// import TopDestinations from './TopDestinations';
// import ContactInfo from './ContactInfo';

// function Footer() {
//   return (
//     <footer className="flex flex-col pt-8  w-full bg-sky-600 text-white max-md:mt-8 max-md:max-w-full">
//       {/* Upper section of the footer */}
//       <div className="flex flex-wrap gap-20 items-start px-8 w-full max-w-[1133px] max-md:px-5 max-md:max-w-full">
//         {/* Logo and company description */}
//         <div className="flex-auto max-md:max-w-full">
//           <div className="flex gap-4 max-md:flex-col">
//             <div className="flex flex-col w-[60%] max-md:w-full">
//               <div className="flex flex-col text-lg font-semibold max-md:mt-8 max-md:max-w-full">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b78bfdb1cefa709a075d0cab65881f62d080d390c16de0d3e55fe2cee8ba082?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
//                   alt="Company logo"
//                   className="object-contain rounded-full w-[120px] max-md:w-[100px]"
//                 />
//                 <p className="mt-12 text-md leading-5 max-md:mt-6">
//                   Discover the world with Exodus: Your trusted travel 
//                   <br></br>adventure partner!
//                 </p>
//               </div>
//             </div>
//             {/* Top Destinations section */}
//             <TopDestinations />
//           </div>
//         </div>

//         {/* Contact Info Section */}
//         <ContactInfo />
//       </div>

//       {/* Lower section: copyright */}
//       <div className="py-4 px-8 mt-8 w-full text-sm font-semibold bg-sky-600 max-md:px-5 max-md:mt-6 text-center border-t-2 border-white">
//   ©2024 Exodus. All rights reserved.
// </div>

//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import TopDestinations from './TopDestinations';
import ContactInfo from './ContactInfo';

function Footer() {
  const { t } = useTranslation(); // Get the translation function

  return (
    <footer className="flex flex-col pt-8 w-full bg-sky-600 text-white max-md:mt-8 max-md:max-w-full">
      {/* Upper section of the footer */}
      <div className="flex flex-wrap gap-20 items-start px-8 w-full max-w-[1133px] max-md:px-5 max-md:max-w-full">
        {/* Logo and company description */}
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-4 max-md:flex-col">
            <div className="flex flex-col w-[60%] max-md:w-full">
              <div className="flex flex-col text-lg font-semibold max-md:mt-8 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b78bfdb1cefa709a075d0cab65881f62d080d390c16de0d3e55fe2cee8ba082?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                  alt="Company logo"
                  className="object-contain rounded-full w-[120px] max-md:w-[100px]"
                />
                <p className="mt-12 text-md leading-5 max-md:mt-6">
                  {t('footer.description')} {/* Translate this string */}
                </p>
              </div>
            </div>
            {/* Top Destinations section */}
            <TopDestinations />
          </div>
        </div>

        {/* Contact Info Section */}
        <ContactInfo />
      </div>

      {/* Lower section: copyright */}
      <div className="py-4 px-8 mt-8 w-full text-sm font-semibold bg-sky-600 max-md:px-5 max-md:mt-6 text-center border-t-2 border-white">
        {t('footer.copyright')} {/* Translate copyright text */}
      </div>
    </footer>
  );
}

export default Footer;
