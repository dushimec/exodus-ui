import * as React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import city from "../IMAGE/city.jpg";

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

// Main Details Component
function TurkeyDetails() {
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
            <img className="w-full h-auto" src={city} alt="Recently Visited Trip" />
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
          <div className="bg-blue-500 text-white flex justify-between items-center px-6 py-4">
            <div className="text-lg font-semibold">Price</div>
            <div className="text-3xl font-bold">$120</div>
          </div>

          {/* Booking Form */}
          <div className="bg-white shadow-lg p-6">
            <div className="bg-sky-500 text-white text-center py-3 mb-6">
              <span className="text-base font-semibold">Booking Form</span>
            </div>

            {/* Booking Form with Date and Number of People */}
            <div className="flex flex-col space-y-4">
              <label className="text-gray-700 font-medium">Name:</label>
              <input type="text" className="border border-gray-300 rounded-lg p-2" placeholder="Your name" />
              
              <label className="text-gray-700 font-medium">Email:</label>
              <input type="email" className="border border-gray-300 rounded-lg p-2" placeholder="Your email" />
              
              <label className="text-gray-700 font-medium">Phone:</label>
              <input type="tel" className="border border-gray-300 rounded-lg p-2" placeholder="Your phone number" />

              {/* New Booking Date Field */}
              <label className="text-gray-700 font-medium">Booking Date:</label>
              <input type="date" className="border border-gray-300 rounded-lg p-2" />

              {/* New Number of People Field */}
              <label className="text-gray-700 font-medium">Number of People:</label>
              <select className="border border-gray-300 rounded-lg p-2">
                <option value="">Select number of people</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7">7 People</option>
                <option value="8">8 People</option>
                <option value="9">9 People</option>
                <option value="10">10 People</option>
              </select>

              <label className="text-gray-700 font-medium">Special Requests:</label>
              <textarea className="border border-gray-300 rounded-lg p-2 h-24" placeholder="Any special requests..."></textarea>
            </div>

            {/* Confirm Booking Button */}
            <button className="w-full bg-sky-500 text-white py-2 mt-4 hover:bg-sky-600 transition duration-300">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TurkeyDetails;
