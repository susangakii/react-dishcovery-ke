import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>🍽️ DishCovery KE</h1>
        </div>
        
        <NavBar />

        <div className="header-right">
          <NavLink to="/auth" className="auth-btn">
            Sign In
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;