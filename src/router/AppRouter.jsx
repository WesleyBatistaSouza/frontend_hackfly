import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Signup from "../pages/signup/signup";
import SearchHotels from "../pages/searchHotels/searchHotels";
import { AuthProvider } from "../context/authContext";
import { HotelsProvider } from "../context/hotelsContext";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/search-hotels"
          element={
            <HotelsProvider>
              <SearchHotels />
            </HotelsProvider>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
