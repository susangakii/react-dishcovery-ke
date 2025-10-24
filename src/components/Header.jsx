import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
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
              <div className="welcome-container">
                <img
                  src="/images/image.png"
                  alt="profile"
                  className="profile-icon"
                />
                <span className="welcome-text">{user.name}</span>
              </div>

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