import Calendar from "./Calendar/Calendar";
import { useState } from "react";

function Header() {
  const [numPeople, setNumPeople] = useState(0); // Inicia o número de pessoas com 0

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    // Garantir que o valor não seja negativo
    if (value >= 0) {
      setNumPeople(value);
    }
  };

  const handleIncrement = () => {
    setNumPeople(prev => prev + 1); // Incrementa o número de pessoas
  };

  const handleDecrement = () => {
    if (numPeople > 0) {
      setNumPeople(prev => prev - 1); // Decrementa apenas se for maior que 0
    }
  };

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
      
      <div className="w-full border rounded-md m-4 p-2 bg-gray-300 flex flex-wrap justify-between">
        <div className="flex justify-center items-center w-72">
          <input
            className="bg-transparent rounded-md outline-none"
            type="text"
            placeholder="Parque do Ibirapuera"
          />
        </div>
        <div className="flex items-center justify-around w-2/4">
          <Calendar />
          <input className="w-8" min={0} value={0} type="number" name="" id="" />


          <div className="flex items-center gap-4">
      <button 
        onClick={handleDecrement} 
        className="bg-gray-300 text-xl px-3 py-1 rounded"
        disabled={numPeople === 0} // Desabilita o botão quando o número for 0
      >
        -
      </button>
      
      <input
        type="number"
        value={numPeople}
        onChange={handleChange}
        min="0"
        className="w-16 text-center border-2 border-gray-300 rounded"
      />
      
      <button 
        onClick={handleIncrement} 
        className="bg-gray-300 text-xl px-3 py-1 rounded"
      >
        +
      </button>
    </div>

          <button className="text-cyan-400 size-6 w-28 h-full text-center">Alterar Busca</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
