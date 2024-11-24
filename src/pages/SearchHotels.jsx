// src/pages/searchHotels/searchHotels.js
import { useState } from "react";
import { useHotels } from "../../context/hotelsContext";

const SearchHotels = () => {
  const { hotels, searchHotels } = useHotels();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    searchHotels(query);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buscar Hotéis</h1>
      <div className="mb-6">
        <input
          type="text"
          className="border rounded p-2 w-full"
          placeholder="Digite o nome do hotel ou cidade"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-primary text-white px-4 py-2 mt-2"
        >
          Buscar
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="border p-4 rounded shadow">
            <h2 className="font-bold text-lg">{hotel.nome}</h2>
            <p>{hotel.endereco}</p>
            <p className="text-sm text-gray-600">R$ {hotel.preco}/noite</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHotels;
