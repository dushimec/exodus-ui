import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import city from "../IMAGE/city.jpg";
import tukey from "../IMAGE/tukey.jpg";

// Array of Recently Visited Images
const recentlyVisitedImages = [city, tukey];

function BookingForm({ isOpen, onClose, destination, price }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Book Your Trip to {destination}</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">Number of Travelers</label>
            <input type="number" id="travelers" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="1" min="1" />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div className="text-xl font-bold text-blue-600 mt-4">
            Price: ${price}
          </div>
          <div className="flex gap-4 mt-6">
            <button type="submit" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200">Book Now</button>
            <button onClick={onClose} className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// RelatedTours Component
function RelatedTours() {
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
      <div className="text-black text-xl font-bold mb-4">Related Tours</div>
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
                <span>{tour.likes} Likes</span>
              </div>
              <span>120$</span>
            </div>

            <div className="mt-4">
              <h4 className="text-black text-sm font-bold">Comments:</h4>
              {tour.comments.length === 0 ? (
                <p className="text-gray-500">No comments yet</p>
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
                  placeholder="Add a comment..."
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

function Destinations() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === recentlyVisitedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? recentlyVisitedImages.length - 1 : prevIndex - 1
    );
  };

  const destinations = [
    {
      name: "Kibeho Shrine",
      location: "Nyaruguru",
      description: "Kibeho is known for the Marian apparitions reported by three Rwandan schoolgirls in the 1980s. This shrine is one of the most significant pilgrimage sites for Catholics in Rwanda.",
      price: 500,
      date: "January 10, 2025"
    },
    {
      name: "Kigali Genocide Memorial",
      location: "Kigali",
      description: "A visit to the Kigali Genocide Memorial is essential for understanding Rwanda's recent history. It also reflects on the lives of many Christians who perished in the 1994 genocide.",
      price: 400,
      date: "January 12, 2025"
    },
    {
      name: "Nyundo Cathedral Visit",
      location: "Nyundo",
      description: "The Nyundo Cathedral is one of Rwanda's largest and most significant Christian sites, offering a place for quiet reflection and a connection to the country's rich Christian history.",
      price: 300,
      date: "January 15, 2025"
    }
  ];

  return (
    <div className="w-full h-auto bg-stone-50 relative">
      {/* Background Image and Title Overlay */}
      <div className="relative w-full h-[50vh]">
        <img
          className="w-full h-full object-cover"
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
          alt="City Background"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute left-4 md:left-16 top-1/2 transform -translate-y-1/2 text-white text-4xl md:text-5xl font-bold">
          Turkey
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 py-8 px-4 md:px-16">
        {/* Left Side: Description, Recently Visited Trip, and Related Tours */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Description Section */}
          <div>
            <div className="text-sky-500 text-2xl font-bold mb-4">
              Turkey (Istanbul):
            </div>
            <p className="text-black text-lg mb-6">
              Experience Turkey's religious heritage: visit Istanbul's Hagia Sophia, the Blue Mosque, Ephesus's Basilica of St. John, and Cappadocia's ancient cave churches for spiritual enrichment.
            </p>
            <div className="text-sky-500 text-2xl font-bold mb-4">
              Turkey:
            </div>
            <p className="text-black text-lg">
              Embark on a captivating journey to Turkey, a land steeped in rich religious history. Start in Istanbul, where East meets West. Visit the majestic Hagia Sophia, a former cathedral and mosque, now a museum, showcasing stunning Byzantine architecture. Explore the Blue Mosque, famous for its striking blue tiles and impressive domes.
              <br />
              Next, head to Cappadocia, known for its unique rock formations and ancient cave churches adorned with beautiful frescoes. Discover the Goreme Open-Air Museum, a UNESCO World Heritage site.
              <br />
              Travel to Ephesus, where you can visit the Basilica of St. John and the ruins of the ancient city, reflecting early Christianity's influence.
              <br />
              Lastly, visit Pamukkale, famous for its travertine terraces and ancient ruins of Hierapolis, known for its thermal pools.
            </p>
          </div>

          {/* Destinations Section */}
          <div className="space-y-6">
            {destinations.map((destination) => (
              <div key={destination.name} className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Price: ${destination.price}</p>
                    <p className="text-sm text-gray-500">Trip Date: {destination.date}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedDestination(destination)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Recently Visited Trip */}
          <div>
            <div className="text-black text-xl font-bold mb-4">
              Recently Visited Trip
            </div>
            <div className="relative">
              <img
                className="w-full h-auto"
                src={recentlyVisitedImages[currentImageIndex]}
                alt="Recently Visited Trip"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 px-2 py-1"
              >
                Prev
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black/50 px-2 py-1"
              >
                Next
              </button>
            </div>
            <div className="text-blue-500 text-lg mb-4">
              Click Use map to track the place
            </div>
          </div>

          {/* Related Tours Section */}
          <RelatedTours />
        </div>

        {/* Right Side: Price and Booking Form */}
        <div className="w-full lg:w-1/3 h-auto mb-12 lg:mb-48 pb-20">
          {/* Price Box */}
          <div className="bg-blue-500 text-white px-6 py-8">
            <div className="text-4xl font-bold">$1200</div>
            <p className="text-white">Total for all destinations</p>
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

export default Destinations;

