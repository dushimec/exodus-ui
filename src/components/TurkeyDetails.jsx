import * as React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import city from "../IMAGE/city.jpg";
import tukey from "../IMAGE/tukey.jpg";
// import city3 from "../IMAGE/city3.jpg";

// Array of Recently Visited Images
const recentlyVisitedImages = [city, tukey ];

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

// Main Details Component with Booking Form
function TurkeyDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
          TURKEY
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
            <div className="text-4xl font-bold">$120</div>
            <p className="text-white">Per Person</p>
          </div>

          {/* Booking Form */}
          <div className="bg-white shadow-lg p-6 mt-8 rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-500">Book Your Trip</h2>
            <form>
              <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md mb-4" placeholder="Your Name" />

              <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-md mb-4" placeholder="Your Email" />

              <label className="block mb-2 text-sm font-bold text-gray-700">Number of Travelers</label>
              <input type="number" className="w-full p-2 border border-gray-300 rounded-md mb-4" placeholder="1" min="1" />

              <label className="block mb-2 text-sm font-bold text-gray-700">Date</label>
              <input type="date" className="w-full p-2 border border-gray-300 rounded-md mb-4" />

              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md font-bold mt-4">
                Book Now
              </button>
            </form>
          </div>


        </div>
      </div>
    </div>
  );
}

export default TurkeyDetails;
