import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router/AppRouter';


export default function App() {
  return (
    <Router>
     <AppRoutes />     
    </Router>
  );
}
