import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ReviewsPage from './pages/ReviewsPage';
import AuthPage from './pages/AuthPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;