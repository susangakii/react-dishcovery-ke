import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Home
      </NavLink>
      <NavLink to="/favorites" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Favorites
      </NavLink>
      <NavLink to="/add" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Add Restaurant
      </NavLink>
    </nav>
  );
}

export default NavBar;