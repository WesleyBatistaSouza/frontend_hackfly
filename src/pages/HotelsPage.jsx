 export function HotelsPage() {
  const hotels = [
    {
      name: "PULLMAN SP IBIRAPUERA",
      location: "Vila Mariana",
      price: "1.512,68",
      fullPrice: "3.025,35",
      amenities: ["Café da Manhã", "Reembolsável"],
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "PULLMAN SÃO PAULO IBIRAPUERA",
      location: "Vila Mariana",
      price: "1.323,00",
      fullPrice: "2.646,00",
      amenities: ["Wi-Fi", "Estacionamento", "Restaurante"],
      rating: 4.5,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto flex gap-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            VOOS
          </button>
          <button className="bg-gray-200 px-6 py-2 rounded">HOTÉIS</button>
          <button className="bg-gray-200 px-6 py-2 rounded">AUTOMÓVEL</button>
        </div>
      </nav>

      <div className="w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 p-4">
        <div className="md:col-span-2">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white shadow p-4 flex gap-4 hover:bg-gray-200"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex flex-col">
                <h2 className="text-lg font-bold text-gray-800">
                  {hotel.name}
                </h2>
                <p className="text-sm text-gray-500">{hotel.location}</p>
                <div className="flex gap-2 mt-2">
                  {hotel.amenities.map((amenity, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <p className="text-green-600 font-bold mt-2">
                  R$ {hotel.price}
                  <span className="text-sm text-gray-500 line-through ml-2">
                    R$ {hotel.fullPrice}
                  </span>
                </p>
                <p className="text-yellow-500 mt-1">
                  {"★".repeat(Math.floor(hotel.rating))}
                  {"☆".repeat(5 - Math.floor(hotel.rating))}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white shadow">
          <h2 className="text-lg font-bold text-gray-800 mb-4 h-48">Mapa</h2>
          
        </div>
      </div>
    </div>
  );
}