import { useState } from "react";
import { Heart, XCircle } from "lucide-react";
import Header from "../components/Header";
import image0 from "../assets/image0.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";

const Hotels = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const hotels = [
    {
      id: 1,
      title: "Pullman São Paulo Ibirapuera",
      stars: 5,
      image: image0,
      address: "Rua Joinville, 515 - Vila Mariana",
      amenities: ["Café da Manhã", "Wi-Fi", "Estacionamento"],
      description: "O hotel está localizado ao lado do Parque do Ibirapuera...",
      photos: [image1, image2, image3, image4],
      pois: ["Restaurantes", "Parques", "Bares"],
    },
    {
      id: 2,
      title: "Pullman SP Ibirapuera",
      stars: 5,
      image: image5,
      address: "Rua Villa Maria, 515 - Vila Mariana",
      amenities: ["Café da Manhã", "Wi-Fi", "Estacionamento"],
      description: "O hotel está localizado ao lado do Parque do Ibirapuera...",
      photos: [image6, image7, image8, image9],
      pois: ["Restaurantes", "Parques", "Bares"],
    },
  ];

  const handleCardClick = (hotel) => {
    setSelectedHotel(hotel);
    setCurrentPhotoIndex(0);
    setShowFavorites(false);
  };

  const closeModal = () => {
    setSelectedHotel(null);
    setCurrentPhotoIndex(0);
  };

  const toggleFavorite = (hotel) => {
    if (favorites.find((fav) => fav.id === hotel.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== hotel.id));
    } else {
      setFavorites([...favorites, hotel]);
    }
  };

  const isFavorite = (hotel) => favorites.some((fav) => fav.id === hotel.id);

  const handleNextPhoto = () => {
    if (selectedHotel) {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === selectedHotel.photos.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrevPhoto = () => {
    if (selectedHotel) {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === 0 ? selectedHotel.photos.length - 1 : prevIndex - 1
      );
    }
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
  };
  
  const handleCloseFavorites = () => {
    setShowFavorites(false);
  };

  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Hotéis Disponíveis</h1>
        <button
          onClick={handleShowFavorites}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Ver Favoritos ({favorites.length})
        </button>

        <div className="grid grid-cols-1 gap-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white shadow rounded-lg p-4 cursor-pointer hover:shadow-lg transition relative flex flex-col md:flex-row gap-4"
              onClick={() => handleCardClick(hotel)}
            >
              <img
                src={hotel.image}
                alt={hotel.title}
                className="rounded-md w-32 h-32 object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{hotel.title}</h2>
                <p className="text-yellow-500">{"★".repeat(hotel.stars)}</p>
                <p className="text-gray-600">{hotel.address}</p>
                <div className="flex items-center space-x-2 mt-2">
                  {hotel.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(hotel);
                }}
                className={`absolute top-2 right-2 p-2 rounded-full ${
                  isFavorite(hotel) ? "bg-red-500" : "bg-gray-400"
                }`}
                style={{
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Heart
                  size={24}
                  className={`${isFavorite(hotel) ? "text-white" : "text-gray-700"}`}
                />
              </button>
            </div>
          ))}
        </div>

        {selectedHotel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-400"
                onClick={closeModal}
              >
                <XCircle size={24} className="text-gray-500" />
              </button>
              <h2 className="text-2xl font-bold">{selectedHotel.title}</h2>
              <p className="text-yellow-500">
                {"★".repeat(selectedHotel.stars)}
              </p>
              <p className="text-gray-600">{selectedHotel.address}</p>
              <img
                src={selectedHotel.photos[currentPhotoIndex]}
                alt={selectedHotel.title}
                className="rounded-md mb-4"
              />
              <div className="flex justify-between">
                <button onClick={handlePrevPhoto} className="text-blue-500">
                  Prev
                </button>
                <button onClick={handleNextPhoto} className="text-blue-500">
                  Next
                </button>
              </div>
              <h3 className="text-xl font-semibold mt-4">Descrição</h3>
              <p>{selectedHotel.description}</p>
              <h3 className="text-xl font-semibold mt-4">Pontos de Interesse</h3>
              <ul className="list-disc list-inside">
                {selectedHotel.pois.map((poi, index) => (
                  <li key={index}>{poi}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {showFavorites && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
              <button
                className="absolute top-2 right-2 text-gray-400"
                onClick={handleCloseFavorites}
              >
                <XCircle size={24} className="text-gray-500" />
              </button>
              <h2 className="text-2xl font-bold mb-4">Favoritos</h2>
              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {favorites.map((hotel) => (
                    <div
                      key={hotel.id}
                      className="bg-gray-100 rounded-lg p-4 cursor-pointer"
                      onClick={() => handleCardClick(hotel)}
                    >
                      <h2 className="text-lg font-semibold">{hotel.title}</h2>
                      <p className="text-yellow-500">
                        {"★".repeat(hotel.stars)}
                      </p>
                      <p className="text-gray-600">{hotel.address}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Nenhum hotel favoritado ainda.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hotels;
