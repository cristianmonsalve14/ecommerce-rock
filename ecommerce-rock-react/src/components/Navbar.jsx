import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/img/logo.png" alt="Logo" width="40" height="40" className="me-2" />
          Poleras de Rock
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Catálogo</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Carrito <span className="badge bg-warning text-dark" id="cart-count">0</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Registro</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
