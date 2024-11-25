function HotelCard({
  image,
  title,
  location,
  amenities,
  price,
  rating,
  favorite,
  details,
}) {
  return (
    <div className="flex flex-col sm:flex-row bg-white overflow-hidden hover:bg-slate-200 transition-all duration-300 ease-in-out">
      <div className="">
        <img
          src={image}
          alt={title}
          className=""
        />
        <span className="">
          {rating} ★
        </span>
      </div>

      <div className="">
        <h2 className="">{title}</h2>
        <p className="">{location}</p>

        <ul className="flex flex-wrap gap-2 text-sm text-gray-600">
          {amenities.map((amenity, index) => (
            <li key={index} className="bg-gray-200 rounded-full px-3 py-1">
              {amenity}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
          <span className="text-lg font-bold text-blue-600">R$ {price},00</span>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button
              onClick={favorite}
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
            >
              Favoritar
            </button>
            <button
              onClick={details}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-bold py-2 px-4 rounded"
            >
              Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
