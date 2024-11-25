import PropTypes from 'prop-types';

function HotelCard({
  image,
  title,
  location,
  amenities = [], // Valor padrão para evitar o erro
  price,
  rating,
  favorite,
  details,
}) {
  return (
    <div className="flex flex-col sm:flex-row bg-white overflow-hidden hover:bg-slate-200 transition-all duration-300 ease-in-out rounded-lg shadow-md">
      <div className="relative sm:w-1/3">
        <img
          src={image}
          alt={title}
          className="w-full h-64 sm:h-full object-cover"
        />
        <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-yellow-500 font-bold shadow">
          {rating} ★
        </span>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{location}</p>

        {amenities?.length > 0 && (
          <ul className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
            {amenities.map((amenity, index) => (
              <li key={index} className="bg-gray-200 rounded-full px-3 py-1">
                {amenity}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-center mt-auto">
          <span className="text-lg font-bold text-blue-600 mb-4 sm:mb-0">
            R$ {price.toLocaleString('pt-BR')},00
          </span>
          <div className="flex gap-2">
            <button
              onClick={favorite}
              className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Favoritar
            </button>
            <button
              onClick={details}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

HotelCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  amenities: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  favorite: PropTypes.func.isRequired,
  details: PropTypes.func.isRequired,
};

HotelCard.defaultProps = {
  amenities: [],
  rating: 0,
};

export default HotelCard;