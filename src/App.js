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
        <h1>🍽️ DishCovery KE</h1>
        <p>Find Your Next Bite, Fast</p>
      </header>

      <NavBar />

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