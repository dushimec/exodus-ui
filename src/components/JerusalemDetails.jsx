import * as React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import israel from "../IMAGE/israel.jpg";

// RelatedTours Component
function RelatedTours() {
  // State to track likes for each tour
  const [tours, setTours] = useState([
    { id: 1, name: "Kibeho", location: "Nyaruguru", likes: 35, liked: false, comments: [] },
    { id: 2, name: "Cairo", location: "Egypt", likes: 50, liked: false, comments: [] }
  ]);

  // Function to toggle likes
  const toggleLike = (id) => {
    setTours(
      tours.map((tour) =>
        tour.id === id ? { ...tour, liked: !tour.liked, likes: tour.liked ? tour.likes - 1 : tour.likes + 1 } : tour
      )
    );
  };

  // Function to handle adding comments
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
                {/* Heart Icon with Like functionality */}
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

            {/* Comment Section */}
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

              {/* Input to add new comments */}
              <div className="mt-2">
                <input
                  type="text"
                  className="w-full h-10 border border-gray-300 px-2 mb-2"
                  placeholder="Add a comment..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                      addComment(tour.id, e.target.value);
                      e.target.value = ""; // Clear the input field
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
function JerusalemDetails() {
  return (
    <div className="w-full h-auto bg-stone-50 relative">
      {/* Background Image and Title Overlay */}
      <div className="relative w-full h-[50vh]">
        <img
          className="w-full h-full object-cover"
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
          alt="City Background"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute left-16 top-[70%] transform -translate-y-1/2 text-white text-5xl font-bold">
          ISRAEL
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:flex lg:justify-between gap-8 py-8 px-4">
        {/* Left Side: Description, Recently Visited Trip, and Related Tours */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Description Section */}
          <div>
            <div className="text-sky-500 text-2xl font-bold mb-4">
              ISRAEL (Telaviv):
            </div>
            <p className="text-black text-lg mb-6">
              Visit Israel to explore its rich history: Jerusalem's sacred sites, the Dead Sea's unique landscapes, and vibrant cities like Tel Aviv and Haifa await you.
            </p>
            <div className="text-sky-500 text-2xl font-bold mb-4">
              Israel:
            </div>
            <p className="text-black text-lg">
              Embark on a spiritual journey to Israel, the heart of three major world religions. Start in Jerusalem, visiting the Western Wall, the last remnant of the Second Temple, and the Dome of the Rock, an iconic Islamic shrine. Explore the Church of the Holy Sepulchre, believed to be the site of Jesus’ crucifixion and resurrection.

              Next, head to Bethlehem, where you can visit the Church of the Nativity, marking the birthplace of Jesus.

              Travel to Nazareth to see the Basilica of the Annunciation, an important Christian pilgrimage site.

              Don’t miss the serene beauty of the Sea of Galilee, where you can reflect on biblical stories.

              Lastly, relax at the Dead Sea, the lowest point on Earth, known for its healing properties. Experience local cuisine and vibrant culture, making your spiritual tour of Israel both enriching and unforgettable.
            </p>
          </div>

          {/* Recently Visited Trip */}
          <div>
            <div className="text-black text-xl font-bold mb-4">
              Recently Visited Trip
            </div>
           
            <img
              className="w-full h-auto"
              src={israel}
              alt="Recently Visited Trip"
            />
            <div className="text-blue-500 text-lg mb-4">
              Click Use map to track the place
            </div>
          </div>

          {/* Related Tours Section */}
          <RelatedTours />
        </div>

        {/* Right Side: Price and Booking Form */}
        <div className="w-full lg:w-1/3 h-auto mb-8 lg:mb-0 pb-20">
          {/* Price Box */}
          <div className="bg-blue-500 text-white flex justify-between items-center px-6 py-4">
            <div className="text-lg font-semibold">Price</div>
            <div className="text-3xl font-bold">$120</div>
          </div>

          {/* Booking Form */}
          <div className="bg-white shadow-lg p-6">
            {/* Booking Form Header */}
            <div className="bg-sky-500 text-white text-center py-3 mb-6">
              <span className="text-base font-semibold">Booking Form</span>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <label className="block text-sm text-gray-500">Booking Date</label>
              <input
                type="date"
                className="w-full h-12 border border-gray-300 px-2"
              />

              <label className="block text-sm text-gray-500">Guests</label>
              <select className="w-full h-12 border border-gray-300 px-2">
                <option>Adults 1</option>
                <option>Adults 2</option>
                <option>Adults 3</option>
              </select>

              <button className="w-full h-12 bg-blue-500 text-white rounded-md">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JerusalemDetails;
