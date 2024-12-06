// import React, { useState } from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import israel from "../IMAGE/israel.jpg";

// function BookingForm({ isOpen, onClose, destination, price }) {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//   <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-blue-600">Book Your Trip to {destination}</h2>
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//             <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Your Name" />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Your Email" />
//           </div>
//           <div>
//             <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">Number of Travelers</label>
//             <input type="number" id="travelers" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="1" min="1" />
//           </div>
//           <div>
//             <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
//             <input type="date" id="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
//           </div>
//           <div className="text-xl font-bold text-blue-600 mt-4">
//             Price: ${price}
//           </div>
//           <div className="flex gap-4 mt-6">
//             <button type="submit" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">Book Now</button>
//             <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200">Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// function RelatedTours() {
//   const [tours, setTours] = useState([
//     { id: 1, name: "Kibeho", location: "Nyaruguru", likes: 35, liked: false, comments: [] },
//     { id: 2, name: "Cairo", location: "Egypt", likes: 50, liked: false, comments: [] }
//   ]);

//   const toggleLike = (id) => {
//     setTours(
//       tours.map((tour) =>
//         tour.id === id ? { ...tour, liked: !tour.liked, likes: tour.liked ? tour.likes - 1 : tour.likes + 1 } : tour
//       )
//     );
//   };

//   const addComment = (id, comment) => {
//     setTours(
//       tours.map((tour) =>
//         tour.id === id ? { ...tour, comments: [...tour.comments, comment] } : tour
//       )
//     );
//   };

//   return (
//     <div>
//       <div className="text-black text-xl font-bold mb-4">Related Tours</div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {tours.map((tour) => (
//           <div key={tour.id} className="bg-white shadow-lg p-4">
//             <img
//               className="w-full h-40 object-cover mb-4"
//               src={
//                 tour.name === "Kibeho"
//                   ? "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
//                   : "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
//               }
//               alt={tour.name}
//             />
//             <div className="text-black text-lg font-bold">{tour.name}</div>
//             <div className="text-sm text-gray-500">{tour.location}</div>
//             <div className="flex justify-between mt-2 text-sm text-gray-500">
//               <div className="flex items-center">
//                 <button onClick={() => toggleLike(tour.id)} className="mr-2">
//                   {tour.liked ? (
//                     <FaHeart className="text-red-500" />
//                   ) : (
//                     <FaRegHeart className="text-gray-500" />
//                   )}
//                 </button>
//                 <span>{tour.likes} Likes</span>
//               </div>
//               <span>120$</span>
//             </div>

//             <div className="mt-4">
//               <h4 className="text-black text-sm font-bold">Comments:</h4>
//               {tour.comments.length === 0 ? (
//                 <p className="text-gray-500">No comments yet</p>
//               ) : (
//                 <ul className="text-sm text-gray-700">
//                   {tour.comments.map((comment, index) => (
//                     <li key={index} className="border-b border-gray-200 py-1">
//                       {comment}
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               <div className="mt-2">
//                 <input
//                   type="text"
//                   className="w-full h-10 border border-gray-300 px-2 mb-2"
//                   placeholder="Add a comment..."
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" && e.target.value.trim()) {
//                       addComment(tour.id, e.target.value);
//                       e.target.value = "";
//                     }
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function JerusalemDetails() {
//   const [selectedDestination, setSelectedDestination] = useState(null);

//   const destinations = [
//     {
//       name: "Jerusalem",
//       description: "Explore sacred sites like the Western Wall, Dome of the Rock, and Church of the Holy Sepulchre.",
//       price: 150,
//       date: "January 10, 2025"
//     },
//     {
//       name: "Bethlehem",
//       description: "Visit the Church of the Nativity, marking the birthplace of Jesus.",
//       price: 100,
//         date: "January 10, 2025"
//     },
//     {
//       name: "Nazareth",
//       description: "See the Basilica of the Annunciation, an important Christian pilgrimage site.",
//       price: 120,
//         date: "January 10, 2025"
//     },
//     {
//       name: "Sea of Galilee",
//       description: "Reflect on biblical stories at this serene location.",
//       price: 90,
//         date: "January 10, 2025"
//     },
//     {
//       name: "Dead Sea",
//       description: "Experience the lowest point on Earth, known for its healing properties.",
//       price: 80,
//         date: "January 10, 2025"
//     }
//   ];

//   return (
//     <div className="w-full h-auto bg-stone-50 relative">
//       <div className="relative w-full h-[50vh]">
//         <img
//           className="w-full h-full object-cover"
//           src='https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
//           alt="City Background"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="absolute left-16 top-[70%] transform -translate-y-1/2 text-white text-5xl font-bold">
//           ISRAEL
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto lg:flex lg:justify-between gap-8 py-8 px-4">
//         <div className="w-full lg:w-2/3 space-y-8">
//           <div>
//             <div className="text-sky-500 text-2xl font-bold mb-4">
//               ISRAEL (Tel Aviv):
//             </div>
//             <p className="text-black text-lg mb-6">
//               Visit Israel to explore its rich history: Jerusalem's sacred sites, the Dead Sea's unique landscapes, and vibrant cities like Tel Aviv and Haifa await you.
//             </p>
//             <div className="text-sky-500 text-2xl font-bold mb-4">
//               Israel:
//             </div>
//             <p className="text-black text-lg">
//               Embark on a spiritual journey to Israel, the heart of three major world religions. Start in Jerusalem, visiting the Western Wall, the last remnant of the Second Temple, and the Dome of the Rock, an iconic Islamic shrine. Explore the Church of the Holy Sepulchre, believed to be the site of Jesus' crucifixion and resurrection.

//               Next, head to Bethlehem, where you can visit the Church of the Nativity, marking the birthplace of Jesus.

//               Travel to Nazareth to see the Basilica of the Annunciation, an important Christian pilgrimage site.

//               Don't miss the serene beauty of the Sea of Galilee, where you can reflect on biblical stories.

//               Lastly, relax at the Dead Sea, the lowest point on Earth, known for its healing properties. Experience local cuisine and vibrant culture, making your spiritual tour of Israel both enriching and unforgettable.
//             </p>
//           </div>

//           <div className="space-y-6">
//             {destinations.map((destination) => (
//               <div key={destination.name} className="bg-white shadow-lg rounded-lg p-6">
//                 <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
//                 <p className="text-gray-600 mb-4">{destination.description}</p>
//                 <div className="flex items-center justify-between">
//                   <p className="font-semibold">Price: ${destination.price}</p>
//                   <button 
//                     onClick={() => setSelectedDestination(destination)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                   >
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div>
//             <div className="text-black text-xl font-bold mb-4">
//               Recently Visited Trip
//             </div>
//             <img
//               className="w-full h-auto"
//               src={israel}
//               alt="Recently Visited Trip"
//             />
//             <div className="text-blue-500 text-lg mb-4">
//               Click Use map to track the place
//             </div>
//           </div>

//           <RelatedTours />
//         </div>

//         <div className="w-full lg:w-1/3 h-auto mb-8 lg:mb-0 pb-20">
//           <div className="bg-blue-500 text-white flex justify-between items-center px-6 py-4">
//             <div className="text-lg font-semibold">Total Price</div>
//             <div className="text-3xl font-bold">$540</div>
//           </div>

//           <div className="bg-white shadow-lg p-6">
//             <div className="bg-sky-500 text-white text-center py-3 mb-6">
//               <span className="text-base font-semibold">Tour Summary</span>
//             </div>
//             <div className="space-y-4">
//               {destinations.map((destination) => (
//                 <div key={destination.name} className="flex justify-between">
//                   <span>{destination.name}</span>
//                   <span>${destination.price}</span>
//                 </div>
//               ))}
//               <div className="border-t pt-4 font-bold">
//                 <div className="flex justify-between">
//                   <span>Total</span>
//                   <span>$540</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {selectedDestination && (
//         <BookingForm
//           isOpen={!!selectedDestination}
//           onClose={() => setSelectedDestination(null)}
//           destination={selectedDestination.name}
//           price={selectedDestination.price}
//         />
//       )}
//     </div>
//   );
// }

// export default JerusalemDetails;


import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import israel from "../IMAGE/israel.jpg";
import { useTranslation } from 'react-i18next';

function BookingForm({ isOpen, onClose, destination, price }) {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">{t('jerusalemDetails.bookingForm.title', { destination })}</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('jerusalemDetails.bookingForm.name')}</label>
            <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder={t('jerusalemDetails.bookingForm.name')} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('jerusalemDetails.bookingForm.email')}</label>
            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder={t('jerusalemDetails.bookingForm.email')} />
          </div>
          <div>
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">{t('jerusalemDetails.bookingForm.travelers')}</label>
            <input type="number" id="travelers" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="1" min="1" />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">{t('jerusalemDetails.bookingForm.date')}</label>
            <input type="date" id="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div className="text-xl font-bold text-blue-600 mt-4">
            {t('jerusalemDetails.bookingForm.price', { price })}
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">{t('jerusalemDetails.bookingForm.bookNow')}</button>
            <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200">{t('jerusalemDetails.bookingForm.cancel')}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function RelatedTours() {
  const { t } = useTranslation();
  const [tours, setTours] = useState([
    { id: 1, name: "Kibeho", location: "Nyaruguru", likes: 35, liked: false, comments: [] },
    { id: 2, name: "Cairo", location: "Egypt", likes: 50, liked: false, comments: [] }
  ]);

  const toggleLike = (id) => {
    setTours(
      tours.map((tour) =>
        tour.id === id ? { ...tour, liked: !tour.liked, likes: tour.liked ? tour.likes - 1 : tour.likes + 1 } : tour
      )
    );
  };

  const addComment = (id, comment) => {
    setTours(
      tours.map((tour) =>
        tour.id === id ? { ...tour, comments: [...tour.comments, comment] } : tour
      )
    );
  };

  return (
    <div>
      <div className="text-black text-xl font-bold mb-4">{t('jerusalemDetails.relatedTours.title')}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white shadow-lg p-4">
            <img
              className="w-full h-40 object-cover mb-4"
              src={
                tour.name === "Kibeho"
                  ? "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
                  : "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28"
              }
              alt={tour.name}
            />
            <div className="text-black text-lg font-bold">{tour.name}</div>
            <div className="text-sm text-gray-500">{tour.location}</div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <div className="flex items-center">
                <button onClick={() => toggleLike(tour.id)} className="mr-2">
                  {tour.liked ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-500" />
                  )}
                </button>
                <span>{t('jerusalemDetails.relatedTours.likes', { count: tour.likes })}</span>
              </div>
              <span>120$</span>
            </div>

            <div className="mt-4">
              <h4 className="text-black text-sm font-bold">{t('jerusalemDetails.relatedTours.comments')}</h4>
              {tour.comments.length === 0 ? (
                <p className="text-gray-500">{t('jerusalemDetails.relatedTours.noComments')}</p>
              ) : (
                <ul className="text-sm text-gray-700">
                  {tour.comments.map((comment, index) => (
                    <li key={index} className="border-b border-gray-200 py-1">
                      {comment}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-2">
                <input
                  type="text"
                  className="w-full h-10 border border-gray-300 px-2 mb-2"
                  placeholder={t('jerusalemDetails.relatedTours.addComment')}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                      addComment(tour.id, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function JerusalemDetails() {
  const { t } = useTranslation();
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      name: t('jerusalemDetails.destinations.jerusalem.name'),
      description: t('jerusalemDetails.destinations.jerusalem.description'),
      price: 150,
      date: "January 10, 2025"
    },
    {
      name: t('jerusalemDetails.destinations.bethlehem.name'),
      description: t('jerusalemDetails.destinations.bethlehem.description'),
      price: 100,
      date: "January 10, 2025"
    },
    {
      name: t('jerusalemDetails.destinations.nazareth.name'),
      description: t('jerusalemDetails.destinations.nazareth.description'),
      price: 120,
      date: "January 10, 2025"
    },
    {
      name: t('jerusalemDetails.destinations.seaOfGalilee.name'),
      description: t('jerusalemDetails.destinations.seaOfGalilee.description'),
      price: 90,
      date: "January 10, 2025"
    },
    {
      name: t('jerusalemDetails.destinations.deadSea.name'),
      description: t('jerusalemDetails.destinations.deadSea.description'),
      price: 80,
      date: "January 10, 2025"
    }
  ];

  return (
    <div className="w-full h-auto bg-stone-50 relative">
      <div className="relative w-full h-[50vh]">
        <img
          className="w-full h-full object-cover"
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
          alt="City Background"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute left-16 top-[70%] transform -translate-y-1/2 text-white text-5xl font-bold">
          {t('jerusalemDetails.pageTitle')}
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:flex lg:justify-between gap-8 py-8 px-4">
        <div className="w-full lg:w-2/3 space-y-8">
          <div>
            <div className="text-sky-500 text-2xl font-bold mb-4">
              {t('jerusalemDetails.telAvivTitle')}
            </div>
            <p className="text-black text-lg mb-6">
              {t('jerusalemDetails.telAvivDescription')}
            </p>
            <div className="text-sky-500 text-2xl font-bold mb-4">
              {t('jerusalemDetails.israelTitle')}
            </div>
            <p className="text-black text-lg">
              {t('jerusalemDetails.israelDescription')}
            </p>
          </div>

          <div className="space-y-6">
            {destinations.map((destination) => (
              <div key={destination.name} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{t('jerusalemDetails.bookingForm.price', { price: destination.price })}</p>
                  <button 
                    onClick={() => setSelectedDestination(destination)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    {t('jerusalemDetails.bookingForm.bookNow')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-black text-xl font-bold mb-4">
              {t('jerusalemDetails.recentlyVisited')}
            </div>
            <img
              className="w-full h-auto"
              src={israel}
              alt={t('jerusalemDetails.recentlyVisited')}
            />
            <div className="text-blue-500 text-lg mb-4">
              {t('jerusalemDetails.clickUseMap')}
            </div>
          </div>

          <RelatedTours />
        </div>

        <div className="w-full lg:w-1/3 h-auto mb-8 lg:mb-0 pb-20">
          <div className="bg-blue-500 text-white flex justify-between items-center px-6 py-4">
            <div className="text-lg font-semibold">{t('jerusalemDetails.totalPrice')}</div>
            <div className="text-3xl font-bold">$540</div>
          </div>

          <div className="bg-white shadow-lg p-6">
            <div className="bg-sky-500 text-white text-center py-3 mb-6">
              <span className="text-base font-semibold">{t('jerusalemDetails.tourSummary')}</span>
            </div>
            <div className="space-y-4">
              {destinations.map((destination) => (
                <div key={destination.name} className="flex justify-between">
                  <span>{destination.name}</span>
                  <span>${destination.price}</span>
                </div>
              ))}
              <div className="border-t pt-4 font-bold">
                <div className="flex justify-between">
                  <span>{t('jerusalemDetails.total')}</span>
                  <span>$540</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedDestination && (
        <BookingForm
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
          destination={selectedDestination.name}
          price={selectedDestination.price}
        />
      )}
    </div>
  );
}

export default JerusalemDetails;

