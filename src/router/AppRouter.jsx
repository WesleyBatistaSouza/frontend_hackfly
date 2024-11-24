import { Routes, Route } from "react-router-dom";
import LoginCadastro
// import Home from "../pages/home/home";
// import Login from "../pages/login/login";
// import Signup from "../pages/signup/signup";
import SearchHotels from "../pages/searchHotels/searchHotels";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Rota de Login */}
      <Route path="/login" element={<Loginca />} />

      {/* Rota de Signup */}
      {/* <Route path="/signup" element={<Signup />} /> */}

      {/* Rota para buscar hotéis */}
      <Route path="/search-hotels" element={<SearchHotels />} />
    </Routes>
  );
};

export default AppRoutes;
