import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isAdmin, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Poleras de Rock</div>
      <button className={`navbar-toggle${menuOpen ? ' open' : ''}`} onClick={handleToggle} aria-label="Abrir menú">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' active' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
        <li><Link to="/catalogo" onClick={handleLinkClick}>Catálogo</Link></li>
        <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
        <li><Link to="/nosotros" onClick={handleLinkClick}>Nosotros</Link></li>
        <li><Link to="/contacto" onClick={handleLinkClick}>Contacto</Link></li>
        <li><Link to="/registro" onClick={handleLinkClick}>Registro</Link></li>
        <li><Link to="/login" onClick={handleLinkClick}>Login</Link></li>
        {isAdmin && (
          <>
            <li><Link to="/admin" onClick={handleLinkClick}>Admin</Link></li>
            <li><button className="btn btn-sm btn-danger ms-2" onClick={() => { onLogout(); handleLinkClick(); }}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
