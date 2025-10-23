import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  const checkUser = () => {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  };

  const handleSignOut = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>🍽️ DishCovery KE</h1>
        </div>
        
        <NavBar />

        <div className="header-right">
          {user ? (
            <div className="user-section">
              <button onClick={handleSignOut} className="auth-btn">Sign Out</button>
            </div>
          ) : (
            <NavLink to="/auth" className="auth-btn">Sign In</NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;