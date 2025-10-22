import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import FavoritesPage from './pages/FavoritesPage';
import ReviewsPage from './pages/ReviewsPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <h1>🍽️ DishCovery KE</h1>
            <p>Find Your Next Bite, Fast</p>
          </div>
          <NavBar />
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<ReviewsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

      <footer>
        <p className="copyright">&copy; 2025 DishCovery KE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;