import { Link } from "react-router";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/descubre">Descubre inBiot</Link>
        <Link to="/terminos">Términos de Uso</Link>
        <Link to="/privacidad">Política de Privacidad</Link>
        <Link to="/cookies">Cookies</Link>
      </div>
      <div className="footer-copy">
        Copyright © inBiot. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
