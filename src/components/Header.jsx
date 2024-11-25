import Calendar from "./Calendar/Calendar";
import { User } from "lucide-react";

function Header() {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="flex flex-col flex-auto justify-around md:flex-row gap-5 mt-4">
        <h1 className="text-xl font-bold text-blue-600 text-center">
          <span className="text-black">Hotéis em</span> Parque do Ibirapuera
        </h1>
        <div className="flex flex-wrap gap-2">
          <select className="border rounded-lg p-2">
            <option>Ordenar por: Localização</option>
          </select>
          <select className="border rounded-lg p-2">
            <option>Estrelas</option>
          </select>
          <select className="border rounded-lg p-2">
            <option>Bairros</option>
          </select>
          <select className="border rounded-lg p-2">
            <option>Preço</option>
          </select>
          <select className="border rounded-lg p-2">
            <option>Favoritos</option>
          </select>
          <button className="border rounded-lg p-2">Limpar Filtro</button>
        </div>
      </div>

      <div className="w-full border rounded-md mt-4 p-2 bg-gray-300 flex justify-between items-center sm:flex-col md:flex-row">
  <input
    className="w-14 sm:w-2/3 sm:mb-2 p-1 bg-transparent border rounded-md outline-none flex-1"
    type="text"
    placeholder="Parque do Ibirapuera"
  />

  <div className="flex items-center justify-end mr-6 w-1/2 gap-4 ml-4">
    <Calendar />
    <div className="flex items-center gap-1">
      <User className="w-6 h-6 text-gray-600" />
      <input
        className="w-10 text-center outline-none"
        min={0}
        maxLength={20}
        type="number"
        placeholder="0"
      />
    </div>
  </div>
</div>
    </header>
  );
}

export default Header;
