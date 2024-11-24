// function HotelCard({ image, title, location, amenities, price, rating, onFavorite, onDetails }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-lg font-bold">{title}</h2>
//         <p className="text-gray-500">{location}</p>
//         <ul className="list-disc list-inside">
//           {amenities.map((amenity) => (
//             <li key={amenity}>{amenity}</li>
//           ))}
//         </ul>
//         <div className="flex justify-between items-center mt-4">
//           <div className="flex items-center">
//             <div>
//               {[...Array(rating)].map((_, i) => (
//                 <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 20 20" className="w-5 h-5">
//                   <path d="M9.049 2.927c1.381-1.425 4.031-1.425 5.413 0l8.588 8.589c1.54 1.54 2.068 3.834 1.155 5.964a5.192 5.192 0 01-8.313 1.253 5.192 5.192 0 01-1.155-5.964L9.049 2.927z" />
//                 </svg>
//               ))}
//             </div>
//             <span className="ml-2 text-gray-700">{rating} estrelas</span>
//           </div>
//           <div>
//             <span className="text-lg font-bold">R$ {price}</span>
//             <button onClick={onFavorite} className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Favoritar
//             </button>
//             <button onClick={onDetails} className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
//               Detalhes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HotelCard;

function HotelCard({
    image,
    title,
    location,
    amenities,
    price,
    rating,
    onFavorite,
    onDetails,
  }) {
    return (
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded">
            {rating}★
          </span>
        </div>
  
        {/* Informações */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm mb-2">{location}</p>
  
          {/* Amenities */}
          <ul className="flex flex-wrap gap-2 text-sm text-gray-600">
            {amenities.map((amenity, index) => (
              <li
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1"
              >
                {amenity}
              </li>
            ))}
          </ul>
  
          {/* Preço e Botões */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-lg font-bold text-blue-600">
              R$ {price},00
            </span>
            <div className="flex gap-2">
              <button
                onClick={onFavorite}
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
              >
                Favoritar
              </button>
              <button
                onClick={onDetails}
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
  