import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isAdmin, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Poleras de Rock</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Login</Link></li>
        {isAdmin && (
          <>
            <li><Link to="/admin">Admin</Link></li>
            <li><button className="btn btn-sm btn-danger ms-2" onClick={onLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
