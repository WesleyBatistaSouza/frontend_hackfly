import Calendar from "./Calendar/Calendar";
// import { useState } from "react";

function Header() {
  //     const [people, setPeople] = useState(1);

  //   const handlePeopleChange = (event) => {
  //     const value = Math.max(1, event.target.value);
  //     setPeople(value);
  //   };

  return (
    <header className="bg-white p-4 shadow-md">
      <div className="flex flex-col flex-auto justify-around md:flex-row gap-5 mt-4">
        <h1 className="text-xl font-bold text-blue-600">
          <span className="text-black">Hotéis em</span> Parque do Ibirapuera
        </h1>
        <div className="flex flex-wrap gap-2">
          <select className="border rounded-lg p-2">
            <option>Ordenar por: Localização</option>
          </select>
          <select className="border rounded-lg p-2">
            <option>Nome</option>
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
          <select className="border rounded-lg p-2">
            <option>Dentro da Politica</option>
          </select>
          <button className="border rounded-lg p-2">Limpar Filtro</button>
        </div>
      </div>
      
      <div className="w-full border rounded-md m-4 p-2 bg-gray-300 flex justify-between">
        <div className="flex justify-center items-center w-72">
          <input
            className="bg-transparent rounded-md outline-none"
            type="text"
            placeholder="Parque do Ibirapuera"
          />
        </div>
        <div className="flex items-center justify-around w-2/4">
          <Calendar />
          <input className="w-8" type="number" name="" id="" />
          <button className="text-cyan-400 size-6 w-28 h-full text-center">Alterar Busca</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
