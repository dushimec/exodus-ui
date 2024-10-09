

// import * as React from "react";

// function Service() {
//   return (
//     <div className="flex overflow-hidden flex-col  bg-stone-50 bg-opacity-50 max-md:pb-24">
//       <div className="flex relative flex-col w-full text-4xl font-semibold text-white min-h-[492px] max-md:max-w-full">
//         <img
//           loading="lazy"
//           srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
//           className="object-cover absolute inset-0 size-full"
//         />
//         <div className="flex relative flex-col justify-center items-center px-20 py-52 w-full bg-black bg-opacity-60 max-md:px-5 max-md:py-24 max-md:max-w-full">
//           <div className="px-36 py-9 -mb-9  max-w-full border-white border-solid bg-zinc-300 bg-opacity-0 border-[10px] w-[496px] max-md:px-5 max-md:mb-2.5">
//             Services
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col px-14 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
//         <div className="self-end w-full max-w-[1329px] max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col">
//             <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
//               <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
//                 <div className="flex flex-col ml-2.5 max-w-full w-[372px]">
//                   <div className="self-start text-2xl font-semibold text-sky-500">
//                     Our services
//                   </div>
//                   <div className="mt-5 text-4xl text-black">
//                     Join the adventures <br />
//                     with stories
//                   </div>
//                 </div>
//                 <div className="mt-4 text-xl font-medium text-black text-opacity-90 max-md:max-w-full">
//                   &quot;Explore diverse religious landmarks and spiritual
//                   experiences, <br />
//                   showcasing rich cultural heritage and traditions.&quot;
//                 </div>
//                 <div className="self-stretch mt-14 ml-5 max-md:mt-10 max-md:max-w-full">
//                   <div className="flex gap-5 max-md:flex-col">
//                     <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//                       <div className="flex flex-col grow max-md:mt-10">
                        
//                         <div className="flex flex-col justify-center items-center px-5 ml-3 bg-white rounded-full h-[106px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-[106px] max-md:px-5 max-md:ml-2.5">
//                           <img
//                             loading="lazy"
//                             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
//                             className="object-contain w-full aspect-square"
//                           />
//                         </div>

//                         <div className="mt-5 text-base text-black">
//                           Custom destinations
//                         </div>
//                         <div className="flex flex-col items-start pr-8 pl-3 mt-14 max-md:pr-5 max-md:mt-10">
//                           <div className="flex flex-col justify-center items-center px-5 bg-white rounded-full h-[106px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-[106px] max-md:pl-5">
//                             <img
//                               loading="lazy"
//                               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
//                               className="object-contain aspect-[0.97] w-[68px]"
//                             />
//                           </div>
//                           <div className="mt-5 text-base text-black max-md:ml-2">
//                             Self guide
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                       <div className="flex flex-col grow max-md:mt-10">
//                         <div className="flex flex-col items-start pl-2">
//                           <div className="flex flex-col justify-center items-start px-5 bg-white rounded-full h-[106px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-[106px] max-md:pl-5">
//                             <img
//                               loading="lazy"
//                               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/99ce7b375c49fbef4bf34e3ed6e5fd07aa80463866f537c1e9af2c2e2d0d4173?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/99ce7b375c49fbef4bf34e3ed6e5fd07aa80463866f537c1e9af2c2e2d0d4173?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99ce7b375c49fbef4bf34e3ed6e5fd07aa80463866f537c1e9af2c2e2d0d4173?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/99ce7b375c49fbef4bf34e3ed6e5fd07aa80463866f537c1e9af2c2e2d0d4173?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/99ce7b375c49fbef4bf34e3ed6e5fd07aa80463866f537c1e9af2c2e2d0d4173?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/99ce7b375c49fbef4bf34e3ed6e5fd07aa80463866f537c1e9af2c2e2d0d4173?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/99ce7b375c49fbef4bf34e3ed6e5fd07aa80463866f537c1e9af2c2e2d0d4173?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/99ce7b375c49fbef4bf34e3ed6e5fd07aa80463866f537c1e9af2c2e2d0d4173?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
//                               className="object-contain w-full aspect-[1.12]"
//                             />
//                           </div>
//                           <div className="self-stretch mt-5 text-base text-black">
//                             Unforgetable Moments
//                           </div>
//                           <div className="flex flex-col justify-center items-center px-5 mt-14 bg-white rounded-full h-[106px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-[106px] max-md:mt-10">
//                             <img
//                               loading="lazy"
//                               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f2aa930f1f31b20858d2b7f0b18ff9302936eea8e4ca37998f651f09aeaa44e4?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2aa930f1f31b20858d2b7f0b18ff9302936eea8e4ca37998f651f09aeaa44e4?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2aa930f1f31b20858d2b7f0b18ff9302936eea8e4ca37998f651f09aeaa44e4?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2aa930f1f31b20858d2b7f0b18ff9302936eea8e4ca37998f651f09aeaa44e4?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2aa930f1f31b20858d2b7f0b18ff9302936eea8e4ca37998f651f09aeaa44e4?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2aa930f1f31b20858d2b7f0b18ff9302936eea8e4ca37998f651f09aeaa44e4?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2aa930f1f31b20858d2b7f0b18ff9302936eea8e4ca37998f651f09aeaa44e4?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2aa930f1f31b20858d2b7f0b18ff9302936eea8e4ca37998f651f09aeaa44e4?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
//                               className="object-contain w-full aspect-square"
//                             />
//                           </div>
//                         </div>
//                         <div className="self-start mt-5 text-base text-black">
//                           24/7 Available
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                       <div className="flex flex-col grow items-start max-md:mt-10">
//                         <div className="flex flex-col justify-center items-center px-5 bg-white rounded-full h-[106px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-[106px] max-md:px-5">
//                           <img
//                             loading="lazy"
//                             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/085b0970227487fcd6104d5a2708916f25519b9531d23bd251db3e62e3bd00c5?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/085b0970227487fcd6104d5a2708916f25519b9531d23bd251db3e62e3bd00c5?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/085b0970227487fcd6104d5a2708916f25519b9531d23bd251db3e62e3bd00c5?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/085b0970227487fcd6104d5a2708916f25519b9531d23bd251db3e62e3bd00c5?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/085b0970227487fcd6104d5a2708916f25519b9531d23bd251db3e62e3bd00c5?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/085b0970227487fcd6104d5a2708916f25519b9531d23bd251db3e62e3bd00c5?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/085b0970227487fcd6104d5a2708916f25519b9531d23bd251db3e62e3bd00c5?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/085b0970227487fcd6104d5a2708916f25519b9531d23bd251db3e62e3bd00c5?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
//                             className="object-contain w-full aspect-square"
//                           />
//                         </div>
//                         <div className="self-stretch mt-5 text-base text-black">
//                           Competitive pricing
//                         </div>
//                         <div className="flex flex-col justify-center items-center px-5 mt-14 bg-white
//                          rounded-full h-[106px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-[106px] max-md:px-5 max-md:mt-10">
//                           <img
//                             loading="lazy"
//                             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8cea52604dca553b0e37ffde0278445c487060f6529bd198a5cb292a86b7397b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cea52604dca553b0e37ffde0278445c487060f6529bd198a5cb292a86b7397b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cea52604dca553b0e37ffde0278445c487060f6529bd198a5cb292a86b7397b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cea52604dca553b0e37ffde0278445c487060f6529bd198a5cb292a86b7397b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cea52604dca553b0e37ffde0278445c487060f6529bd198a5cb292a86b7397b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cea52604dca553b0e37ffde0278445c487060f6529bd198a5cb292a86b7397b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cea52604dca553b0e37ffde0278445c487060f6529bd198a5cb292a86b7397b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8cea52604dca553b0e37ffde0278445c487060f6529bd198a5cb292a86b7397b?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
//                             className="object-contain w-full aspect-square"
//                           />
//                         </div>
//                         <div className="mt-5 text-base text-black">
//                           Transportations
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
//               <img
//                 loading="lazy"
//                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4289ae2ae8964f1f484ea9f7e4fa2b6c23686492e572727f1970567a3dc72158?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
//                 className="object-contain grow mt-20 w-full aspect-[0.81] max-md:mt-10 max-md:max-w-full"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex relative  mb-10  ml-20 flex-col mt-16 w-full max-w-[1329px] min-h-[417px] max-md:mt-10 max-md:max-w-full">
//           <img
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a14ea80844be504fd1b0ca52426194f71a123c76c580723365dc82feae51c75?placeholderIfAbsent=true&apiKey=ad4b702f1041452291688c39b1990497"
//             className="object-cover absolute inset-0 size-full"
//           />
//           <div className="flex relative flex-col justify-center items-end px-32 py-36 bg-black bg-opacity-30 max-md:px-5 max-md:pb-24 max-md:max-w-full">
//             <div className="flex flex-col mb-0 max-w-full w-[952px] max-md:mb-2.5">
//               <div className="self-center text-3xl font-extrabold text-sky-500">
//                 Why choose us
//               </div>
//               <div className="mt-12 text-2xl font-medium text-white max-md:mt-10 max-md:max-w-full">
//                 Unique spiritual journeys, deep connections, cultural immersion,
//                 and personalized experiences.
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
// export default Service;


import * as React from "react";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();

  return (
    <div className="flex overflow-hidden flex-col bg-stone-50 bg-opacity-50 max-md:pb-24">
      <div className="flex relative flex-col w-full text-4xl font-semibold text-white min-h-[492px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2dea07583a8ff0a12344f081d7f90c562d852fcae40296473a302011d35bcc92"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center items-center px-20 py-52 w-full bg-black bg-opacity-60 max-md:px-5 max-md:py-24 max-md:max-w-full">
          <div className="px-36 py-9 -mb-9 max-w-full border-white border-solid bg-zinc-300 bg-opacity-0 border-[10px] w-[496px] max-md:px-5 max-md:mb-2.5">
            {t("service.title")}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-14 mt-14 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-end w-full max-w-[1329px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col ml-2.5 max-w-full w-[372px]">
                  <div className="self-start text-2xl font-semibold text-sky-500">
                    {t("service.ourServices")}
                  </div>
                  <div className="mt-5 text-4xl text-black">
                    {t("service.joinAdventures")}
                  </div>
                </div>
                <div className="mt-4 text-xl font-medium text-black text-opacity-90 max-md:max-w-full">
                  {t("service.exploreDiverse")}
                </div>
                <div className="self-stretch mt-14 ml-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-10">
                        <div className="flex flex-col justify-center items-center px-5 ml-3 bg-white rounded-full h-[106px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-[106px] max-md:px-5 max-md:ml-2.5">
                          <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/806a80a068d911ad3c7293a7c511a9a6263049b0c236d1404f01bc12c3792773"
                            className="object-contain w-full aspect-square"
                          />
                        </div>
                        <div className="mt-5 text-base text-black">
                          {t("service.customDestinations")}
                        </div>
                        <div className="flex flex-col items-start pr-8 pl-3 mt-14 max-md:pr-5 max-md:mt-10">
                          <div className="flex flex-col justify-center items-center px-5 bg-white rounded-full h-[106px] shadow-[0px_100px_80px_rgba(0,0,0,0.07)] w-[106px] max-md:pl-5">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b75f08e75aa693936f9c4d870afdb63f696f638a42187d9aeba9ef298ad5ed4d"
                              className="object-contain aspect-[0.97] w-[68px]"
                            />
                          </div>
                          <div className="mt-5 text-base text-black max-md:ml-2">
                            {t("service.selfGuide")}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Continue with other services similarly */}
                  </div>
                </div>
              </div>
            </div>
            {/* Continue with other sections of the component */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
