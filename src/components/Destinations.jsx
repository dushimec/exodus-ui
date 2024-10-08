import { useState } from "react";
import { FaHeart, FaDollarSign, FaGlobe, FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";

function Destinations() {
  // Destination data
  const destinations = [
    {
      name: 'Istanbul', 
      country: 'Turkey', 
      price: '120', 
      likes: 0, 
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d8efb44e43706d2ab842fdd19c2244025c01c5b8fad3492a380746506e88fc7c?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
    },
    {
      name: 'Kibeho', 
      country: 'Rwanda', 
      price: '120', 
      likes: 0, 
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac109e70ddda2f99596b7c5e3d028a6ecd87d15434bcbc75fd434ab0f43f2d2e?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
    },
    {
      name: 'Cairo', 
      country: 'Egypt', 
      price: '120', 
      likes: 0, 
      image:'https://cdn.builder.io/api/v1/image/assets/TEMP/aa2915a0b34429f473d79e69bdfa330c9faf55d12ff59b9dddbaf71385e7f9fb?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
    },
    {
      name: 'Jerusalem', 
      country: 'Telaviv', 
      price: '120', 
      likes: 0, 
      image:  'https://cdn.builder.io/api/v1/image/assets/TEMP/e31f819637328b0b24a419f37c97a6b26a48dd194e979979d0ece2a75bb68d20?placeholderIfAbsent=true&apiKey=6e51f2aa35694a21b29ab869757ebe28'
    }
  ];

  return (
    <section className="container mx-auto px-64 py-10">
      <div className="flex flex-wrap">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} {...destination} />
        ))}
      </div>
    </section>
  );
}

function DestinationCard({ name, country, price, likes, image }) {
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
    <article className="flex flex-col w-full md:w-1/2 p-5">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        <img
          src={image}
          alt={`${name} destination`}
          className="w-full h-56 object-cover"
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
                  isLiked ? "text-red-500" : "text-gray-500"
                }`}
                onClick={handleLikeClick}
              />
              <span>{likeCount} Likes</span>
            </div>
          </div>

          <div className="text-xs flex justify-between items-center gap-2 text-gray-500 mt-2">
            <div className="flex items-center">
              <FaComment className="w-4 h-4 mr-2" />
              <span className="text-sm mr-6">View all 9 Comments</span>
            </div>

            <div className="flex justify-center items-center text-sky-500 font-semibold">
              <span className="text-xl">{price}$</span>
            </div>

            <div className="flex justify-end mt-2">
              <Link to='/detail'><button className="ml-7 px-2 py-2 text-sm text-sky-500 border border-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition-colors">
                View Details
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Destinations;
