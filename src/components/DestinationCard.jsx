import { FaHeart, FaHotel, FaDollarSign, FaGlobe, FaComment } from "react-icons/fa";

function DestinationCard({ name, country, price, likes, image }) {
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
              <span>Price</span>
            </div>
            <div className="flex items-center">
              <FaHeart className="w-5 h-5 mr-1 text-red-500" />
              <span>{likes} Likes</span>
            </div>
          </div>

          <div className="text-xs flex justify-between items-center gap-2 text-gray-500 mt-2 ">
            <div className="flex items-center">
              <FaComment className="w-4 h-4 mr-2 " />
              <span className="text-sm mr-6">View all 9Comments</span>


              <div className="flex justify-center items-center text-sky-500 font-semibold">
  <span className="text-xl">{price}$</span>
  </div>

            </div>
            
            <div className="flex justify-end mt-2">
  <button className=" ml-7 px-2 py-2 text-sm text-sky-500 border border-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition-colors">
    View Details
  </button>
</div>

          </div>
          

  

        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
