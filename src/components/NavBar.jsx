import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Home
      </NavLink>
      <NavLink to="/explore" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Explore
      </NavLink>
      <NavLink to="/reviews" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Add Review
      </NavLink>
    </nav>
  );
}

export default NavBar;