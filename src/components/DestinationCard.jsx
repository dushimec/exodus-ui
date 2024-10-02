function DestinationCard({ name, country, price, likes, image }) {
  return (
    <article className="flex flex-col w-full md:w-1/2 p-5">
      <d iv className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      <img 
  src={image} 
  alt={`${name} destination`} 
  className="w-full h-56 object-cover" 
  loading="lazy" 
/>
        <div className="p-5">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex items-center">
              <img src="like-icon-url" alt="likes" className="w-5 h-5 mr-1" />
              <span>{likes} Likes</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
            <div className="flex items-center">
              <img src="country-icon-url" alt="country" className="w-4 h-4 mr-2" />
              <span>{country}</span>
            </div>
            <div className="flex items-center">
              <img src="price-icon-url" alt="price" className="w-4 h-4 mr-2" />
              <span>Price</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
            <div className="flex items-center">
              <img src="hotel-icon-url" alt="hotel" className="w-4 h-4 mr-2" />
              <span>Hotel</span>
            </div>
            <div className="flex items-center text-sky-500 font-semibold">
              <span className="text-lg">{price}</span>
            </div>
          </div>
          <div className="mt-4 text-center">
            <button className="px-4 py-2 text-sm text-sky-500 border border-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition-colors">
              View Details
            </button>
          </div>
        </div>
      </d>
    </article>
  );
}
export default DestinationCard;
