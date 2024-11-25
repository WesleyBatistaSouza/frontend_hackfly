import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

const MapArea = () => {
  const hotelsData = [
    {
      id: 1,
      title: "Hotel A",
      location: "São Paulo, SP",
      price: "R$ 250,00",
      latitude: -23.55052,
      longitude: -46.633308,
    },
    {
      id: 2,
      title: "Hotel B",
      location: "Rio de Janeiro, RJ",
      price: "R$ 300,00",
      latitude: -22.906847,
      longitude: -43.172896,
    },
    {
      id: 3,
      title: "Hotel C",
      location: "Belo Horizonte, MG",
      price: "R$ 220,00",
      latitude: -19.920776,
      longitude: -43.93778,
    },
  ];

  const [hotels, setHotels] = useState([]);
  const [mapCenter, setMapCenter] = useState([-23.55052, -46.633308]);

  useEffect(() => {
    setHotels(hotelsData);

    if (hotelsData.length > 0) {
      const firstHotel = hotelsData[0];
      setMapCenter([firstHotel.latitude, firstHotel.longitude]);
    }
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer center={mapCenter} zoom={5} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {hotels.map((hotel) => (
          <Marker key={hotel.id} position={[hotel.latitude, hotel.longitude]}>
            <Popup>
              <h3>{hotel.title}</h3>
              <p>{hotel.location}</p>
              <p>Preço: {hotel.price}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapArea;
