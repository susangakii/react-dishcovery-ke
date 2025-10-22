import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AddRestaurantPage from './pages/AddRestaurantPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <h1>🍽️ DishCovery KE</h1>
          </div>
          <NavBar />
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddRestaurantPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

      <footer>
        <p className="copyright">&copy; 2025 DishCovery KE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;