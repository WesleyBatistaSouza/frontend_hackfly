import { Routes, Route } from "react-router-dom";
import LoginCadastro from "../components/logincadastro";
// import Home from "../pages/home/home";
// import Login from "../pages/login/login";
// import Signup from "../pages/signup/signup";
import Hotels from "../pages/Hotels";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Hotels />} />

      {/* Rota de Login */}
      <Route path="/Cadaster" element={<LoginCadastro />} />

      {/* Rota para buscar hotéis */}
      <Route path="/hotels" element={<Hotels />} />
    </Routes>
  );
};

export default AppRoutes;
