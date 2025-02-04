import React, { useState } from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
function MainComponent() {
  const [selectedCommentCard, setSelectedCommentCard] = useState(null);

const destinations = [
  {
    name: "Istanbul | Konya | Edirne",
    country: "Turkey",
    likes: 0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
    moreCities: ["Bursa", "Antalya", "Trabzon", "Sanliurfa"],
    showMore: false,
    comments: [
      {
        id: 1,
        user: "Sarah",
        text: "Beautiful city with amazing culture!",
        likes: 0,
        replies: [],
      },
      {
        id: 2,
        user: "John",
        text: "The food was incredible, must visit!",
        likes: 0,
        replies: [],
      },
      {
        id: 3,
        user: "Mike",
        text: "Loved the historical sites",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    name: "Kibeho | Kigali | Gisenyi",
    country: "Rwanda",
    likes: 0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
    moreCities: ["Butare", "Muhanga", "Nyamata", "Rubavu"],
    showMore: false,
    comments: [
      {
        id: 4,
        user: "Emma",
        text: "Such a peaceful place",
        likes: 0,
        replies: [],
      },
      {
        id: 5,
        user: "David",
        text: "Unforgettable experience",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    name: "Cairo | Luxor | Alexandria",
    country: "Egypt",
    likes: 0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
    moreCities: ["Aswan", "Sharm El-Sheikh", "Dahab", "Hurghada"],
    showMore: false,
    comments: [
      {
        id: 6,
        user: "Alex",
        text: "The pyramids are breathtaking!",
        likes: 0,
        replies: [],
      },
      {
        id: 7,
        user: "Lisa",
        text: "Amazing historical sites",
        likes: 0,
        replies: [],
      },
    ],
  },
  {
    name: "Jerusalem | Haifa | Nazareth",
    country: "Israel",
    likes: 0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28",
    moreCities: ["Bethlehem", "Tiberias", "Safed", "Eilat"],
    showMore: false,
    comments: [
      {
        id: 8,
        user: "Rachel",
        text: "Such a spiritual experience",
        likes: 0,
        replies: [],
      },
      {
        id: 9,
        user: "Tom",
        text: "Rich in history and culture",
        likes: 0,
        replies: [],
      },
    ],
  },
];


  return (
    <section className="container mx-auto px-4 md:px-12 lg:px-20 py-10" data-aos="fade-up">
      <div className="flex flex-wrap justify-center gap-8">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </section>
  );
}

function DestinationCard({ name, country, price, likes, image, link }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <article
      className="flex flex-col w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-1/3 p-4"
      data-aos="zoom-in" // Animation for the entire card
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        <img
          src={image}
          alt={`${name} destination`}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold mb-2">{name}</h3>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
            <div className="flex items-center">
              <FaGlobe className="w-4 h-4 mr-2" />
              <span>{country}</span>
            </div>
            <div className="flex items-center">
              <FaDollarSign className="w-4 h-4 mr-2" />
              <span>{price}$</span>
            </div>
            <div className="flex items-center">
              <FaHeart
                className={`w-5 h-5 mr-1 cursor-pointer ${
                  isLiked ? "text-red-500 scale-125 transition-transform duration-200" : "text-gray-500"
                }`}
                onClick={handleLikeClick}
              />
              <span>{likeCount} Likes</span>
            </div>
          </div>

          <div className="text-xs flex justify-between items-center gap-2 text-gray-500 mt-2">
            <div
              className="flex items-center cursor-pointer"
              onClick={onCommentClick}
            >
              <FaComment className="mr-2" size={20} />
              <span className="text-sm">{localComments.length} {t('view')}</span>

            </div>
            <div className="flex justify-end">
              <Link to={link}>
                <button className="ml-5 px-1 py-2 text-xs text-sky-500 border border-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition-colors">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Destinations;
