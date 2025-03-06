import { useState } from "react";
import { Link, useLocation } from "react-router";
import "./navbar.css";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Alertas", href: "/alertas" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/cropped-LOGO-LODEPA-sin-fondo.png"
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Botón hamburguesa visible en móviles */}
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>

      {/* Menú de navegación */}
      <ul className={`navbar-list ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <li key={link.name} className="navbar-item">
            <Link
              to={link.href}
              className={
                location.pathname === link.href
                  ? "navbar-link active"
                  : "navbar-link"
              }
              onClick={() => setMenuOpen(false)} // Cierra el menú al navegar
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <button
           onClick={handleLogout}
            className="navbar-item bg-red-500 text-white rounded-full logout-button-desktop"
         
          >
            Cerra Sesion
          </button>
        </li>
      </ul>

      <button
        onClick={handleLogout}
        className="navbar-link logout-button"
      >
        Cerrar sesión
      </button>
       
    </nav>
  );
};

export default Navbar;
