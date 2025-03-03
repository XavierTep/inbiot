import { Link, useLocation } from "react-router"
import './navbar.css'

const links = [
  { name: 'Dashboard', href: '/' },
  { name: 'Alertas', href: '/alertas' },
]

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <nav className='navbar'>
      <ul className="navbar-lista">
        {links.map((link) => (
          <li key={link.name} className="navbar-item">
            <Link
              to={link.href}
              className={location.pathname === link.href ? "navbar-link active" : "navbar-link"}  // Si la ruta actual coincide, se aplica la clase `active`
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    
)}



export default Navbar;
