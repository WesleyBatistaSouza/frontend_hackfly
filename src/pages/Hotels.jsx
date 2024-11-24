// import HotelCard from "../components/CardHotel";
// import Header from "../components/Header";

// export default function Hotels() {
//     const hotels = [
//         {
//           id: 1,
//           image: "https://via.placeholder.com/150",
//           title: "Hotel A",
//           location: "São Paulo, SP",
//           amenities: ["Wi-Fi", "Estacionamento", "Piscina"],
//           price: 250,
//           rating: 4,
//         },
//         {
//           id: 2,
//           image: "https://via.placeholder.com/150",
//           title: "Hotel B",
//           location: "Rio de Janeiro, RJ",
//           amenities: ["Wi-Fi", "Academia", "Vista para o mar"],
//           price: 300,
//           rating: 5,
//         },
//         {
//           id: 3,
//           image: "https://via.placeholder.com/150",
//           title: "Hotel C",
//           location: "Belo Horizonte, MG",
//           amenities: ["Wi-Fi", "Bar", "Café da manhã incluso"],
//           price: 220,
//           rating: 3,
//         },
//       ];
    

//   return (
//     <>
//       <div>
//         <Header />
//         <div className="bg-gray-100 min-h-screen p-4 flex flex-col flex-wrap gap-4">
//       {hotels.map((hotel) => (
//         <HotelCard
//           key={hotel.id}
//           image={hotel.image}
//           title={hotel.title}
//           location={hotel.location}
//           amenities={hotel.amenities}
//           price={hotel.price}
//           rating={hotel.rating}
//           onFavorite={(hotel.id)}
//           onDetails={(hotel.id)}
//         />
//       ))}
//     </div>
//       </div>
//     </>
//   );
// }

import HotelCard from "../components/CardHotel";
import Header from "../components/Header";

export default function Hotels() {
  
  const hotels = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Hotel A",
      location: "São Paulo, SP",
      amenities: ["Wi-Fi", "Estacionamento", "Piscina"],
      price: 250,
      rating: 4,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Hotel B",
      location: "Rio de Janeiro, RJ",
      amenities: ["Wi-Fi", "Academia", "Vista para o mar"],
      price: 300,
      rating: 5,
    },
  ];


  return (
    <div>
      <Header />
      

      {/* Lista de Hotéis */}
      <div className="bg-gray-100 min-h-screen w-full flex flex-col items-start gap-1 py-8">
        { hotels.map((hotel) => (
          <div key={hotel.id} className="w-1/2">
            <HotelCard
              image={hotel.image}
              title={hotel.title}
              location={hotel.location}
              amenities={hotel.amenities}
              price={hotel.price}
              rating={hotel.rating}
              onFavorite={(hotel.id)}
              onDetails={(hotel.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
