import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginCadastro from './components/auth/logincadastro';
import HotelRegistration from './components/hotel/HotelRegistration';
import Hotels from './pages/Hotels';

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-blue-600 p-4">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-blue-200">Login</Link>
            </li>
            <li>
              <Link to="/hotel-registration" className="hover:text-blue-200">Cadastro de Hotel</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LoginCadastro />} />
          <Route path="/hotel-registration" element={<HotelRegistration />} />
          <Route path="/hotels" element={<Hotels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;